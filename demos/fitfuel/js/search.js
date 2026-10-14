"use strict";
window.FitSearch = (() => {
  const normalize = value => String(value ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g, '');
  const array = value => Array.isArray(value) ? value : [];
  function rank(item, query, extra = []) {
    const q = normalize(query), name = normalize(item.name);
    if (!q) return 1;
    if (name === q) return 1000;
    if (name.startsWith(q)) return 800;
    if (name.includes(q)) return 600;
    if (array(item.aliases).some(alias => normalize(alias).includes(q))) return 400;
    return extra.some(value => normalize(value).includes(q)) ? 200 : 0;
  }
  function inGroup(exercise, group) {
    const tags = new Set([exercise.category, ...array(exercise.tags)]);
    if (!group || group === 'all') return true;
    if (group === 'legs') return ['legs','quads','hamstrings','glutes','calves'].some(k => tags.has(k));
    if (group === 'arms') return ['arms','biceps','triceps','forearms'].some(k => tags.has(k));
    return tags.has(group);
  }
  function ordered(items, query, options, extra) {
    const favorites = options.favorites || [], recent = options.recent || [];
    const pos = id => { const i = recent.indexOf(id); return i < 0 ? 100000 : i; };
    return items.map((item,index) => ({item,index,score:rank(item,query,extra(item))}))
      .filter(x => x.score > 0)
      .sort((a,b) => {
        if (normalize(query) && a.score !== b.score) return b.score-a.score;
        if (options.prioritize !== false) {
          const used = pos(a.item.id)-pos(b.item.id); if (used) return used;
          const fav = Number(favorites.includes(b.item.id))-Number(favorites.includes(a.item.id)); if (fav) return fav;
        }
        return a.index-b.index;
      }).map(x=>x.item);
  }
  function exercises(items, query='', options={}) {
    const subset = items.filter(e => inGroup(e,options.group))
      .filter(e => options.scope !== 'favorites' || (options.favorites||[]).includes(e.id))
      .filter(e => options.scope !== 'recent' || (options.recent||[]).includes(e.id));
    return ordered(subset,query,options,e=>[FitData.CATEGORY_NAMES[e.category],...array(e.tags).map(k=>FitData.CATEGORY_NAMES[k]),...array(e.muscles),...array(e.equipment),e.desc,e.movementPattern]);
  }
  function foods(items, query='', options={}) {
    const subset = items.filter(f => !options.category || options.category==='全部' || (f.category||f.cat)===options.category)
      .filter(f => options.scope!=='favorites' || (options.favorites||[]).includes(f.id))
      .filter(f => options.scope!=='recent' || (options.recent||[]).includes(f.id))
      .filter(f => options.scope!=='frequent' || (options.frequent||[]).includes(f.id))
      .filter(f => options.scope!=='custom' || f.custom)
      .filter(f => options.scope!=='created' || f.custom);
    const result = ordered(subset,query,options,f=>[f.brand,f.category||f.cat]);
    if (!normalize(query) && options.scope==='created') result.sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
    if (!normalize(query) && options.scope==='frequent') result.sort((a,b)=>(options.frequent||[]).indexOf(a.id)-(options.frequent||[]).indexOf(b.id));
    return result;
  }
  return {normalize,rank,inGroup,exercises,foods};
})();
