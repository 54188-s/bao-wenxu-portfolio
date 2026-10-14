"use strict";
window.FitData = {
  "CATEGORY_NAMES": {
    "chest": "胸部",
    "back": "背部",
    "shoulders": "肩部",
    "legs": "腿部",
    "arms": "手臂",
    "core": "核心",
    "quads": "股四头",
    "hamstrings": "腘绳肌",
    "glutes": "臀",
    "calves": "小腿",
    "biceps": "二头",
    "triceps": "三头",
    "forearms": "前臂",
    "compound": "复合动作"
  },
  "EXERCISES": [
    {
      "id": "bench_press",
      "name": "杠铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角",
        "肱三头肌"
      ],
      "met": 6,
      "desc": "发展胸大肌整体厚度的黄金复合动作。",
      "steps": [
        "仰卧平凳，双眼位于杠铃正下方，肩胛后缩下沉",
        "握距略宽于肩，下放至胸骨中下缘，前臂垂直地面",
        "胸肌发力推起至手臂接近伸直"
      ],
      "mistakes": [
        "肘部外展90°压迫肩关节",
        "臀部离凳、腰椎过度反弓"
      ],
      "tips": "想象把杠铃杆掰弯，下放2秒、推起1秒。",
      "aliases": [
        "平板卧推",
        "杠铃平推",
        "bench press"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "dumbbell_press",
      "name": "哑铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角",
        "肱三头肌"
      ],
      "met": 5.8,
      "desc": "活动范围更大，能更好地刺激胸肌外侧。",
      "steps": [
        "双手持铃仰卧，铃位于胸部两侧",
        "向上推起并在顶点微微内收",
        "控制下放至胸肌充分拉伸"
      ],
      "mistakes": [
        "下放过深导致肩关节前移",
        "两侧发力不均衡"
      ],
      "tips": "顶点不要完全锁死肘关节，保持胸肌张力。",
      "aliases": [
        "dumbbell press"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "incline_bench",
      "name": "上斜杠铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌上束",
        "前三角",
        "肱三头肌"
      ],
      "met": 6,
      "desc": "重点强化胸大肌上束，塑造饱满的上胸轮廓。",
      "steps": [
        "凳面调至30-45度，双脚踩实地面",
        "杠铃下放至锁骨下方",
        "沿略向后上的弧线推起"
      ],
      "mistakes": [
        "角度过大变成肩推",
        "下放位置过低伤肩"
      ],
      "tips": "角度控制在30-40度，超过45度前三角代偿明显。",
      "aliases": [
        "上斜卧推",
        "斜板卧推"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "incline_dumbbell",
      "name": "上斜哑铃卧推",
      "category": "chest",
      "muscles": [
        "胸大肌上束",
        "前三角"
      ],
      "met": 5.8,
      "desc": "上胸发展利器，行程更自由。",
      "steps": [
        "上斜凳30度，持铃于胸上部两侧",
        "向上推起并微微内收",
        "缓慢下放至充分拉伸"
      ],
      "mistakes": [
        "肩部耸起",
        "下落时失去控制"
      ],
      "tips": "想象用上胸\"夹\"起哑铃，而不是单纯推。",
      "aliases": [
        "incline dumbbell"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ]
    },
    {
      "id": "decline_press",
      "name": "下斜卧推",
      "category": "chest",
      "muscles": [
        "胸大肌下束",
        "肱三头肌"
      ],
      "met": 5.8,
      "desc": "针对胸大肌下束，塑造胸肌下沿线条。",
      "steps": [
        "下斜凳固定双腿，肩胛收紧",
        "杠铃下放至胸肌下缘",
        "垂直向上推起"
      ],
      "mistakes": [
        "头部充血不适仍硬撑",
        "行程过短"
      ],
      "tips": "下斜角度15-30度即可，注意安全挂钩。",
      "aliases": [
        "decline press"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "dumbbell_fly",
      "name": "哑铃飞鸟",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角"
      ],
      "met": 5,
      "desc": "孤立胸大肌，强化胸部中缝与拉伸感。",
      "steps": [
        "仰卧持铃于胸上方，掌心相对",
        "肘微屈，沿弧线向两侧打开",
        "胸肌发力夹回至起始位"
      ],
      "mistakes": [
        "肘部完全伸直增加关节压力",
        "下放过深造成肩部拉伤"
      ],
      "tips": "用\"抱大树\"的感觉，重量宜轻不宜重。",
      "aliases": [
        "dumbbell fly"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ]
    },
    {
      "id": "cable_crossover",
      "name": "绳索夹胸",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角"
      ],
      "met": 5,
      "desc": "全程恒张力，是雕刻胸部中缝的经典孤立动作。",
      "steps": [
        "站于龙门架中间，双手握把",
        "身体微前倾，肘微屈",
        "双手向前下方画弧夹胸"
      ],
      "mistakes": [
        "身体晃动借力",
        "顶点没有挤压"
      ],
      "tips": "顶点停顿1秒，充分感受胸肌收缩。",
      "aliases": [
        "cable crossover"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ]
    },
    {
      "id": "pushup",
      "name": "俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌",
        "前三角",
        "肱三头肌",
        "核心"
      ],
      "met": 5.5,
      "desc": "最经典的自重上肢推类动作。",
      "steps": [
        "双手略宽于肩撑地，身体呈直线",
        "屈肘下降至胸部接近地面",
        "胸肌发力推起还原"
      ],
      "mistakes": [
        "塌腰撅臀",
        "下放过浅"
      ],
      "tips": "核心收紧，全程身体像一块钢板。",
      "aliases": [
        "pushup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "core",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "dips",
      "name": "双杠臂屈伸",
      "category": "chest",
      "muscles": [
        "胸大肌下束",
        "肱三头肌",
        "前三角"
      ],
      "met": 6,
      "desc": "自重中的\"上肢深蹲\"，对下胸和三头刺激极强。",
      "steps": [
        "双手撑杠，身体微前倾",
        "屈肘下降至肩略低于肘",
        "推起至手臂伸直"
      ],
      "mistakes": [
        "下放过深压迫肩关节",
        "身体完全直立变成纯三头动作"
      ],
      "tips": "身体前倾更多刺激胸肌，直立更多刺激三头。",
      "aliases": [
        "dips"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "pullup",
      "name": "引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌",
        "肱二头肌"
      ],
      "met": 6.5,
      "desc": "衡量上肢拉力的黄金标准动作。",
      "steps": [
        "正握略宽于肩，悬垂肩胛下沉",
        "背部发力将身体拉起至下巴过杠",
        "控制下放至手臂接近伸直"
      ],
      "mistakes": [
        "靠摆动借力",
        "只用手臂拉而不是背部"
      ],
      "tips": "先做\"肩胛下沉\"再拉，能明显提升背部参与度。",
      "aliases": [
        "pullup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ]
    },
    {
      "id": "lat_pulldown",
      "name": "高位下拉",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌",
        "肱二头肌"
      ],
      "met": 5.5,
      "desc": "引体向上的最佳退阶与增肌替代动作。",
      "steps": [
        "坐稳，大腿卡入挡板",
        "宽握横杆，肩胛下沉",
        "将杆拉至锁骨上方，肘部向下向后"
      ],
      "mistakes": [
        "身体大幅后仰",
        "拉到颈后增加肩部风险"
      ],
      "tips": "想象用肘部去\"砸\"地面，而不是用手拉杆。",
      "aliases": [
        "下拉",
        "背阔肌下拉"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ]
    },
    {
      "id": "barbell_row",
      "name": "杠铃划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌中下束",
        "后束",
        "竖脊肌"
      ],
      "met": 6.5,
      "desc": "增加背部整体厚度的核心复合动作。",
      "steps": [
        "双脚与髋同宽，屈髋前倾45-70度",
        "正握杠铃，背部挺直",
        "将杠铃拉向腹部，肘部贴身"
      ],
      "mistakes": [
        "弓背导致腰椎压力",
        "起身借力"
      ],
      "tips": "核心全程绷紧，杠铃轨迹贴近身体。",
      "aliases": [
        "barbell row"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ]
    },
    {
      "id": "dumbbell_row",
      "name": "哑铃单臂划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌",
        "后束"
      ],
      "met": 5.5,
      "desc": "单侧训练，可有效改善背部力量不平衡。",
      "steps": [
        "一手一膝支撑于凳面，背部平行地面",
        "另一手持铃自然下垂",
        "将哑铃拉至髋部方向"
      ],
      "mistakes": [
        "躯干旋转借力",
        "耸肩"
      ],
      "tips": "肘部沿身体侧面向后拉，避免过度外展。",
      "aliases": [
        "dumbbell row"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "单侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "seated_row",
      "name": "坐姿绳索划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌中束",
        "后束"
      ],
      "met": 5.5,
      "desc": "恒张力刺激背部中缝与厚度。",
      "steps": [
        "坐姿踩稳踏板，膝盖微屈",
        "双手握把，背部挺直",
        "将把手拉向腹部，肩胛后缩"
      ],
      "mistakes": [
        "身体前后大幅摆动",
        "只用手臂拉"
      ],
      "tips": "还原时让肩胛充分前伸，获得完整拉伸。",
      "aliases": [
        "seated row"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ]
    },
    {
      "id": "t_bar_row",
      "name": "T杠划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌中束",
        "后束"
      ],
      "met": 6,
      "desc": "中背部厚度的强力动作。",
      "steps": [
        "跨立于T杠上方，屈髋前倾",
        "双手握把，背部挺直",
        "将杠铃拉向胸腹之间"
      ],
      "mistakes": [
        "下背弓起",
        "用惯性甩起"
      ],
      "tips": "重量选择要能保证躯干稳定，宁轻勿乱。",
      "aliases": [
        "t bar row"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ]
    },
    {
      "id": "straight_arm_pulldown",
      "name": "直臂下拉",
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌"
      ],
      "met": 5,
      "desc": "孤立背阔肌，建立\"背部发力感\"的入门动作。",
      "steps": [
        "面对龙门架站立，双手握横杆",
        "手臂近乎伸直，身体微前倾",
        "以肩为轴将杆压向大腿"
      ],
      "mistakes": [
        "肘部弯曲变成三头下压",
        "耸肩"
      ],
      "tips": "想象把杆\"扫\"向大腿，重点在背阔肌的收缩。",
      "aliases": [
        "straight arm pulldown"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "deadlift",
      "name": "硬拉",
      "category": "back",
      "muscles": [
        "竖脊肌",
        "臀大肌",
        "腘绳肌",
        "斜方肌",
        "背阔肌"
      ],
      "met": 7,
      "desc": "全身力量之王，对后链刺激无可替代。",
      "steps": [
        "双脚与髋同宽，杠铃贴近小腿",
        "屈髋屈膝握住杠铃，背部中立",
        "腿臀发力，杠铃贴身上提至站直"
      ],
      "mistakes": [
        "弓背起杠",
        "杠铃远离身体"
      ],
      "tips": "起杠前先\"绷紧\"背阔肌，全程保持杠铃贴腿。",
      "aliases": [
        "deadlift"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings",
        "shoulders"
      ]
    },
    {
      "id": "chinup",
      "name": "反手引体向上",
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "met": 6.5,
      "desc": "反握更强调背阔肌下部与肱二头。",
      "steps": [
        "反握与肩同宽，悬垂",
        "肩胛下沉后拉起至下巴过杠",
        "控制下放"
      ],
      "mistakes": [
        "摆动借力",
        "下放不充分"
      ],
      "tips": "反握时手腕压力较大，注意充分热身。",
      "aliases": [
        "chinup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ]
    },
    {
      "id": "ohp",
      "name": "站姿杠铃推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束",
        "三角肌中束",
        "肱三头肌",
        "核心"
      ],
      "met": 6,
      "desc": "肩部力量与围度的核心复合动作。",
      "steps": [
        "站姿，杠铃置于锁骨前",
        "核心收紧，垂直向上推起",
        "杠铃过头后头部稍前送"
      ],
      "mistakes": [
        "过度后仰变成上斜推",
        "推起路径绕远"
      ],
      "tips": "推起时想象\"把天花板顶开\"，同时夹紧臀部稳定躯干。",
      "aliases": [
        "ohp"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "core",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "dumbbell_shoulder_press",
      "name": "坐姿哑铃推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束",
        "三角肌中束",
        "肱三头肌"
      ],
      "met": 5.5,
      "desc": "自由度更高的肩部推类动作，适合打造圆肩。",
      "steps": [
        "坐于靠背凳，双手持铃于耳侧",
        "向上推起至手臂接近伸直",
        "缓慢下放至大臂与地面平行"
      ],
      "mistakes": [
        "下放过低压迫肩关节",
        "两侧不同步"
      ],
      "tips": "肘部略微前指，避免完全打开成一条直线。",
      "aliases": [
        "dumbbell shoulder press"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "lateral_raise",
      "name": "哑铃侧平举",
      "category": "shoulders",
      "muscles": [
        "三角肌中束"
      ],
      "met": 4.5,
      "desc": "增加肩宽最直接有效的孤立动作。",
      "steps": [
        "站姿持铃于体侧，肘微屈",
        "向两侧抬起至与肩同高",
        "控制下放"
      ],
      "mistakes": [
        "耸肩借力",
        "用惯性甩起"
      ],
      "tips": "想象\"倒水\"一样让拇指略向下，中束参与更多。",
      "aliases": [
        "lateral raise"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "front_raise",
      "name": "哑铃前平举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "met": 4.5,
      "desc": "孤立强化三角肌前束。",
      "steps": [
        "站姿持铃于大腿前",
        "肘微屈，向前抬起至肩高",
        "控制下放"
      ],
      "mistakes": [
        "身体后仰借力",
        "抬得过高"
      ],
      "tips": "可交替进行，核心收紧避免身体摇晃。",
      "aliases": [
        "front raise"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "rear_delt_fly",
      "name": "俯身哑铃飞鸟",
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "斜方肌中束",
        "菱形肌"
      ],
      "met": 4.5,
      "desc": "改善圆肩、塑造后肩线条的关键动作。",
      "steps": [
        "俯身屈髋，背部挺直",
        "持铃自然下垂，肘微屈",
        "向两侧后方抬起至与肩同高"
      ],
      "mistakes": [
        "耸肩",
        "用背部甩起"
      ],
      "tips": "重量宜轻，重点在\"挤压\"肩胛骨。",
      "aliases": [
        "rear delt fly"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ]
    },
    {
      "id": "face_pull",
      "name": "面拉",
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "斜方肌",
        "肩袖肌群"
      ],
      "met": 4.5,
      "desc": "改善肩部健康与体态，强化后链。",
      "steps": [
        "面对龙门架，绳索调至面部高度",
        "双手握绳两端",
        "向面部方向拉，双手外旋"
      ],
      "mistakes": [
        "重量过大导致躯干后仰",
        "肘部下沉"
      ],
      "tips": "顶点时双手像\"拉弓\"一样外旋，感受后束收缩。",
      "aliases": [
        "face pull"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "arnold_press",
      "name": "阿诺德推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束",
        "三角肌中束"
      ],
      "met": 5.5,
      "desc": "通过旋转增加行程，全面刺激三角肌。",
      "steps": [
        "坐姿持铃于胸前，掌心朝向自己",
        "推起同时向外旋转手腕",
        "顶点掌心朝前，再原路返回"
      ],
      "mistakes": [
        "旋转过快失去控制",
        "重量过大"
      ],
      "tips": "旋转要平滑，把注意力放在三角肌的全程张力上。",
      "aliases": [
        "arnold press"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "shrug",
      "name": "杠铃耸肩",
      "category": "shoulders",
      "muscles": [
        "斜方肌上束"
      ],
      "met": 4.5,
      "desc": "发展上斜方厚度，让肩颈线条更厚实。",
      "steps": [
        "站姿正握杠铃于体前",
        "肩部垂直向上耸起",
        "顶点停顿后缓慢下放"
      ],
      "mistakes": [
        "转肩画圈",
        "屈肘借力"
      ],
      "tips": "只做上下运动，顶点停顿1秒效果更好。",
      "aliases": [
        "shrug"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "squat",
      "name": "杠铃深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌",
        "核心"
      ],
      "met": 7,
      "desc": "下肢训练之王，全身力量的基石。",
      "steps": [
        "杠铃置于斜方肌上部，双脚与肩同宽",
        "屈髋屈膝下蹲至大腿平行地面",
        "脚跟发力站起，膝盖与脚尖同向"
      ],
      "mistakes": [
        "膝盖内扣",
        "脚跟离地、重心前移"
      ],
      "tips": "下蹲时想象\"坐向身后的椅子\"，全程保持核心绷紧。",
      "aliases": [
        "squat"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ]
    },
    {
      "id": "front_squat",
      "name": "前蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "核心",
        "臀大肌"
      ],
      "met": 6.5,
      "desc": "更强调股四头与核心的深蹲变式。",
      "steps": [
        "杠铃置于锁骨前三角肌上",
        "肘部高抬，躯干保持直立",
        "下蹲至大腿平行后站起"
      ],
      "mistakes": [
        "肘部下沉导致杠铃前滑",
        "躯干过度前倾"
      ],
      "tips": "手肘始终指向前上方，是保持杠铃稳定的关键。",
      "aliases": [
        "front squat"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "legs",
        "quads"
      ]
    },
    {
      "id": "leg_press",
      "name": "腿举",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌"
      ],
      "met": 5.5,
      "desc": "大重量安全刺激下肢的器械动作。",
      "steps": [
        "坐入器械，双脚与肩同宽踩踏板",
        "解开安全锁，屈膝下放",
        "至大腿接近胸部后蹬起"
      ],
      "mistakes": [
        "膝盖完全锁死",
        "下放过深使腰部离开靠垫"
      ],
      "tips": "脚位越高越偏臀腿，越低越偏股四头。",
      "aliases": [
        "leg press"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ]
    },
    {
      "id": "rdl",
      "name": "罗马尼亚硬拉",
      "category": "legs",
      "muscles": [
        "腘绳肌",
        "臀大肌",
        "竖脊肌"
      ],
      "met": 6,
      "desc": "强化腘绳肌与臀部的最佳铰链动作。",
      "steps": [
        "站姿持杠于体前，膝盖微屈",
        "屈髋将杠铃沿大腿下放",
        "感受腘绳肌拉伸后收紧臀部站起"
      ],
      "mistakes": [
        "弓背下放",
        "屈膝过多变成硬拉"
      ],
      "tips": "全程小腿近乎垂直，重点是\"屈髋\"而不是\"下蹲\"。",
      "aliases": [
        "RDL",
        "罗马尼亚硬拉"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings",
        "legs"
      ]
    },
    {
      "id": "bulgarian_split",
      "name": "保加利亚分腿蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌"
      ],
      "met": 6,
      "desc": "单腿训练之王，兼顾力量与稳定性。",
      "steps": [
        "后脚搭于凳面，前脚向前一步",
        "屈膝下蹲至前腿大腿平行",
        "前脚跟发力站起"
      ],
      "mistakes": [
        "前脚距离过近导致膝盖前移",
        "重心不稳摇晃"
      ],
      "tips": "前脚位置约在身体前1.5步，重心放在前脚脚跟。",
      "aliases": [
        "bulgarian split"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ]
    },
    {
      "id": "leg_extension",
      "name": "腿屈伸",
      "category": "legs",
      "muscles": [
        "股四头肌"
      ],
      "met": 4.5,
      "desc": "孤立股四头肌，打造大腿前侧线条。",
      "steps": [
        "坐入器械，脚踝抵住滚垫",
        "伸膝至大腿收紧",
        "缓慢下放"
      ],
      "mistakes": [
        "用惯性甩起",
        "顶点完全锁死"
      ],
      "tips": "顶点停顿1秒，感受股四头肌收缩。",
      "aliases": [
        "leg extension"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "legs",
        "quads"
      ]
    },
    {
      "id": "leg_curl",
      "name": "腿弯举",
      "category": "legs",
      "muscles": [
        "腘绳肌"
      ],
      "met": 4.5,
      "desc": "孤立腘绳肌，平衡大腿前后侧力量。",
      "steps": [
        "俯卧或坐姿于器械",
        "脚踝抵住滚垫",
        "屈膝将滚垫拉向臀部"
      ],
      "mistakes": [
        "臀部抬离凳面",
        "下放过快"
      ],
      "tips": "还原阶段控制3秒，离心刺激更有效。",
      "aliases": [
        "leg curl"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "hamstrings",
        "legs"
      ]
    },
    {
      "id": "hip_thrust",
      "name": "臀冲",
      "category": "legs",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "met": 5.5,
      "desc": "臀部激活度最高的动作之一。",
      "steps": [
        "上背靠于凳边，杠铃置于髋部",
        "双脚踩实与肩同宽",
        "臀部发力向上顶起至躯干与地面平行"
      ],
      "mistakes": [
        "用腰椎过度伸展代替臀伸",
        "脚位过远"
      ],
      "tips": "顶点收紧臀部停顿2秒，下巴微收避免腰部代偿。",
      "aliases": [
        "臀推",
        "臀冲"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs"
      ]
    },
    {
      "id": "calf_raise",
      "name": "站姿提踵",
      "category": "legs",
      "muscles": [
        "腓肠肌",
        "比目鱼肌"
      ],
      "met": 4,
      "desc": "发展小腿围度的经典动作。",
      "steps": [
        "前脚掌踩于台阶边缘",
        "脚跟尽量下沉获得拉伸",
        "踮起至最高点停顿"
      ],
      "mistakes": [
        "弹震式借力",
        "行程过短"
      ],
      "tips": "顶峰停顿1秒、底端拉伸1秒，慢速效果更好。",
      "aliases": [
        "踮脚",
        "提踵"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "calves",
        "legs"
      ]
    },
    {
      "id": "lunge",
      "name": "箭步蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "腘绳肌"
      ],
      "met": 5.5,
      "desc": "单侧下肢综合训练，兼顾力量与平衡。",
      "steps": [
        "站姿，向前迈出一大步",
        "下蹲至前腿大腿平行、后膝接近地面",
        "前脚发力回到起始位"
      ],
      "mistakes": [
        "步幅过小导致膝盖前移",
        "身体前倾"
      ],
      "tips": "躯干保持直立，重心在前脚中后部。",
      "aliases": [
        "lunge"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs",
        "quads"
      ]
    },
    {
      "id": "hack_squat",
      "name": "哈克深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "met": 6.5,
      "desc": "器械深蹲，背部有固定滑轨支撑，能安全地用大重量刺激股四头肌。",
      "steps": [
        "背部与臀部贴紧靠垫，双脚与肩同宽踩实踏板",
        "解开安全锁，屈膝下放至大腿约与踏板平行",
        "脚跟发力蹬起，膝盖与脚尖同向，顶端不要锁死"
      ],
      "mistakes": [
        "下放过深使腰部离开靠垫",
        "膝盖内扣",
        "脚跟离地、重心前移"
      ],
      "tips": "脚位偏低更偏股四头，脚位偏高更偏臀腿；全程保持核心收紧。",
      "aliases": [
        "哈克蹲",
        "hack squat"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ]
    },
    {
      "id": "hip_adduction",
      "name": "坐姿内收肌训练",
      "category": "legs",
      "muscles": [
        "大腿内收肌群"
      ],
      "met": 4,
      "desc": "孤立大腿内侧内收肌，改善腿部线条与夹腿力量。",
      "steps": [
        "坐入器械，双腿外侧贴紧挡板",
        "调整起始角度使大腿内侧有拉伸感",
        "内收肌发力将双腿向中间夹拢，顶点停顿"
      ],
      "mistakes": [
        "用惯性猛夹",
        "还原时快速弹开失去控制"
      ],
      "tips": "顶点停顿1-2秒，还原放慢到3秒，内收肌的刺激会明显提升。",
      "aliases": [
        "夹腿",
        "内收肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "legs"
      ]
    },
    {
      "id": "hip_abduction",
      "name": "坐姿外展肌训练",
      "category": "legs",
      "muscles": [
        "臀中肌",
        "臀小肌"
      ],
      "met": 4,
      "desc": "强化臀中肌与髋外展肌群，改善髋部稳定与臀部侧上缘饱满度。",
      "steps": [
        "坐入器械，双腿内侧贴紧挡板",
        "身体微微前倾，核心收紧",
        "臀中肌发力将双腿向两侧打开，顶点停顿"
      ],
      "mistakes": [
        "身体后仰借力",
        "打开幅度过大导致腰部代偿"
      ],
      "tips": "身体前倾约15度能显著提高臀中肌的参与度；重量宁轻勿重。",
      "aliases": [
        "开腿",
        "外展肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs"
      ]
    },
    {
      "id": "barbell_curl",
      "name": "杠铃弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌",
        "肱肌"
      ],
      "met": 4.5,
      "desc": "增加肱二头肌整体围度的基础动作。",
      "steps": [
        "站姿正握杠铃与肩同宽",
        "肘部贴身，弯举至前臂接近垂直",
        "控制下放"
      ],
      "mistakes": [
        "身体后仰借力",
        "肘部前移"
      ],
      "tips": "肘部固定是孤立二头的关键，重量宁轻勿假。",
      "aliases": [
        "barbell curl"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ]
    },
    {
      "id": "alt_dumbbell_curl",
      "name": "哑铃交替弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌"
      ],
      "met": 4.5,
      "desc": "单侧训练，可加入旋转增强收缩。",
      "steps": [
        "站姿持铃于体侧，掌心朝内",
        "弯举同时外旋至掌心朝上",
        "交替进行"
      ],
      "mistakes": [
        "耸肩",
        "下放不充分"
      ],
      "tips": "顶点小指略高于拇指，二头短头收缩更明显。",
      "aliases": [
        "alt dumbbell curl"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ]
    },
    {
      "id": "hammer_curl",
      "name": "锤式弯举",
      "category": "arms",
      "muscles": [
        "肱肌",
        "肱桡肌",
        "肱二头肌"
      ],
      "met": 4.5,
      "desc": "强化肱肌与肱桡肌，增加手臂厚度。",
      "steps": [
        "站姿持铃，掌心相对",
        "肘部固定弯举",
        "控制下放"
      ],
      "mistakes": [
        "手腕晃动",
        "身体摆动"
      ],
      "tips": "中立握姿对肘关节更友好，适合大重量。",
      "aliases": [
        "hammer curl"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps",
        "forearms"
      ]
    },
    {
      "id": "preacher_curl",
      "name": "牧师凳弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌"
      ],
      "met": 4.5,
      "desc": "消除借力，最大化二头孤立刺激。",
      "steps": [
        "大臂贴于斜板，肘部抵住垫面",
        "弯举至前臂垂直",
        "缓慢下放至接近伸直"
      ],
      "mistakes": [
        "下放时肘部离开垫面",
        "快速弹起"
      ],
      "tips": "离心阶段放慢到3秒，能显著提升刺激。",
      "aliases": [
        "托臂弯举"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ]
    },
    {
      "id": "tricep_pushdown",
      "name": "绳索下压",
      "category": "arms",
      "muscles": [
        "肱三头肌"
      ],
      "met": 4.5,
      "desc": "肱三头肌最常用的孤立动作。",
      "steps": [
        "面对龙门架，双手握绳",
        "肘部贴身，向下压至手臂伸直",
        "顶点分开绳端加强收缩"
      ],
      "mistakes": [
        "肘部外张",
        "身体前倾借力"
      ],
      "tips": "只有前臂运动，大臂全程保持不动。",
      "aliases": [
        "三头下压"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "triceps"
      ]
    },
    {
      "id": "skull_crusher",
      "name": "仰卧臂屈伸",
      "category": "arms",
      "muscles": [
        "肱三头肌长头"
      ],
      "met": 4.5,
      "desc": "着重刺激肱三头肌长头，增加手臂维度。",
      "steps": [
        "仰卧持曲杠于额头上方",
        "肘部固定，屈肘下放至头顶",
        "三头发力伸直手臂"
      ],
      "mistakes": [
        "肘部外张",
        "下放位置过于靠后"
      ],
      "tips": "下放至额头上方即可，注意控制避免砸头。",
      "aliases": [
        "skull crusher"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "triceps"
      ]
    },
    {
      "id": "close_grip_bench",
      "name": "窄距卧推",
      "category": "arms",
      "muscles": [
        "肱三头肌",
        "胸大肌",
        "前三角"
      ],
      "met": 5.5,
      "desc": "可用大重量的三头复合动作。",
      "steps": [
        "仰卧，双手握距与肩同宽",
        "下放至胸部中下缘，肘部贴身",
        "推起至手臂伸直"
      ],
      "mistakes": [
        "握距过窄手腕压力大",
        "肘部外展"
      ],
      "tips": "握距大约与肩同宽或略窄，重点是肘部贴身。",
      "aliases": [
        "close grip bench"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "chest",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "overhead_ext",
      "name": "过顶臂屈伸",
      "category": "arms",
      "muscles": [
        "肱三头肌长头"
      ],
      "met": 4.5,
      "desc": "长头处于拉伸位，刺激效果极佳。",
      "steps": [
        "坐姿或站姿，双手持铃举过头顶",
        "屈肘将哑铃下放至颈后",
        "三头发力伸直手臂"
      ],
      "mistakes": [
        "肘部外张",
        "腰部过度反弓"
      ],
      "tips": "保持大臂贴近耳侧，核心收紧。",
      "aliases": [
        "overhead ext"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "triceps"
      ]
    },
    {
      "id": "crunch",
      "name": "卷腹",
      "category": "core",
      "muscles": [
        "腹直肌"
      ],
      "met": 4,
      "desc": "最基础的腹直肌孤立动作。",
      "steps": [
        "仰卧屈膝，双手放于耳侧或胸前",
        "腹肌发力将肩胛卷离地面",
        "顶点停顿后缓慢下放"
      ],
      "mistakes": [
        "用手抱头拉扯颈椎",
        "用惯性弹起"
      ],
      "tips": "想象\"把肋骨卷向骨盆\"，而不是抬起整个上身。",
      "aliases": [
        "crunch"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "plank",
      "name": "平板支撑",
      "category": "core",
      "muscles": [
        "腹横肌",
        "腹直肌",
        "竖脊肌"
      ],
      "met": 4,
      "desc": "训练核心稳定性的经典等长动作。",
      "steps": [
        "肘部撑地，前臂平行",
        "身体呈一条直线，臀部不塌不翘",
        "保持均匀呼吸"
      ],
      "mistakes": [
        "塌腰或撅臀",
        "憋气"
      ],
      "tips": "主动\"收紧臀部+肚脐向脊柱收\"，比单纯撑时间更有效。",
      "aliases": [
        "plank"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "back",
        "core"
      ]
    },
    {
      "id": "hanging_leg_raise",
      "name": "悬垂举腿",
      "category": "core",
      "muscles": [
        "腹直肌下部",
        "髂腰肌"
      ],
      "met": 4.5,
      "desc": "强度较高的下腹训练动作。",
      "steps": [
        "双手握杠悬垂",
        "腹肌发力将双腿抬至水平或更高",
        "控制下放，避免摆动"
      ],
      "mistakes": [
        "靠摆动惯性",
        "下放失去控制"
      ],
      "tips": "先屈膝做\"举膝\"，力量提升后再伸直双腿。",
      "aliases": [
        "hanging leg raise"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "russian_twist",
      "name": "俄罗斯转体",
      "category": "core",
      "muscles": [
        "腹斜肌",
        "腹直肌"
      ],
      "met": 4,
      "desc": "强化腹斜肌，塑造腰部线条。",
      "steps": [
        "坐姿屈膝，上身后倾约45度",
        "双手持重物于胸前",
        "左右旋转躯干触碰地面"
      ],
      "mistakes": [
        "只转手臂不转躯干",
        "速度过快"
      ],
      "tips": "跟着胸椎一起旋转，眼睛看向手的方向。",
      "aliases": [
        "russian twist"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "ab_wheel",
      "name": "健腹轮",
      "category": "core",
      "muscles": [
        "腹直肌",
        "腹横肌",
        "背阔肌"
      ],
      "met": 4.5,
      "desc": "高强度的核心抗伸展训练。",
      "steps": [
        "跪姿双手握轮",
        "核心收紧，缓慢向前推出",
        "腹肌发力拉回"
      ],
      "mistakes": [
        "塌腰",
        "推出过远超出控制"
      ],
      "tips": "宁可少推一点，也不要塌腰，感受腹部的张力。",
      "aliases": [
        "ab wheel"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "back",
        "core"
      ]
    },
    {
      "id": "side_plank",
      "name": "侧平板支撑",
      "category": "core",
      "muscles": [
        "腹斜肌",
        "腹横肌"
      ],
      "met": 4,
      "desc": "强化侧腹与核心抗侧屈能力。",
      "steps": [
        "侧卧，肘部撑地",
        "髋部抬起使身体呈直线",
        "保持稳定呼吸，两侧交替"
      ],
      "mistakes": [
        "髋部下沉",
        "身体前后倾斜"
      ],
      "tips": "如果太难，可屈膝以膝盖着地降低难度。",
      "aliases": [
        "side plank"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "side_plank_reach",
      "name": "侧平板穿针",
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "met": 5.0,
      "desc": "侧平板穿针的基础训练教学。",
      "steps": [
        "侧卧前臂支撑，身体保持直线",
        "上侧手臂缓慢穿过躯干下方",
        "旋转还原，保持髋部稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "side plank reach"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "machine_chest_press",
      "name": "器械推胸",
      "category": "chest",
      "muscles": [
        "胸大肌"
      ],
      "met": 5.0,
      "desc": "器械推胸的基础训练教学。",
      "steps": [
        "调节座椅使握把与胸部齐平",
        "背部贴紧靠垫，向前推至肘微屈",
        "缓慢回到起点，避免配重撞击"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "machine chest press"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "incline_cable_fly",
      "name": "上斜绳索飞鸟",
      "category": "chest",
      "muscles": [
        "胸大肌上束"
      ],
      "met": 5.0,
      "desc": "上斜绳索飞鸟的基础训练教学。",
      "steps": [
        "上斜凳置于滑轮中间，握把位于胸侧",
        "保持肘微屈，向上内收双臂",
        "控制返回，保持肩胛稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "incline cable fly"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "low_cable_fly",
      "name": "低位绳索夹胸",
      "category": "chest",
      "muscles": [
        "胸大肌上束"
      ],
      "met": 5.0,
      "desc": "低位绳索夹胸的基础训练教学。",
      "steps": [
        "滑轮调到低位，前后站姿站稳",
        "双手由下向前上方合拢",
        "缓慢回程，避免耸肩"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "low cable fly"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "high_cable_fly",
      "name": "高位绳索夹胸",
      "category": "chest",
      "muscles": [
        "胸大肌下束"
      ],
      "met": 5.0,
      "desc": "高位绳索夹胸的基础训练教学。",
      "steps": [
        "滑轮调到高位，身体微前倾",
        "保持肘角度，向前下方合拢",
        "控制回程，躯干保持稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "high cable fly"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "incline_pushup",
      "name": "上斜俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌"
      ],
      "met": 5.0,
      "desc": "上斜俯卧撑的基础训练教学。",
      "steps": [
        "双手撑稳固高台，身体呈直线",
        "屈肘使胸部靠近高台",
        "推起回到起点，避免塌腰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "incline pushup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "decline_pushup",
      "name": "下斜俯卧撑",
      "category": "chest",
      "muscles": [
        "胸大肌上束"
      ],
      "met": 5.0,
      "desc": "下斜俯卧撑的基础训练教学。",
      "steps": [
        "双脚置于低台，双手撑地",
        "收紧核心并缓慢屈肘下降",
        "推起还原，保持颈部中立"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "decline pushup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "assisted_pullup",
      "name": "辅助引体向上",
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "met": 5.0,
      "desc": "辅助引体向上的基础训练教学。",
      "steps": [
        "调节辅助重量，膝盖稳放垫上",
        "肩胛下沉，拉起身体",
        "缓慢下降，避免突然松手"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "assisted pullup"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "neutral_pulldown",
      "name": "中立握高位下拉",
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "met": 5.0,
      "desc": "中立握高位下拉的基础训练教学。",
      "steps": [
        "固定大腿，中立握把",
        "肘向肋骨方向拉，握把降至上胸",
        "控制上放，避免后仰借力"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "neutral pulldown"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "chest_supported_row",
      "name": "胸托哑铃划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "met": 5.0,
      "desc": "胸托哑铃划船的基础训练教学。",
      "steps": [
        "俯卧于上斜凳，双臂自然下垂",
        "肘向后拉，肩胛收拢",
        "缓慢下放，胸部保持贴凳"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "chest supported row"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "single_cable_row",
      "name": "单臂绳索划船",
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "met": 5.0,
      "desc": "单臂绳索划船的基础训练教学。",
      "steps": [
        "单手握绳索，躯干保持正向",
        "肘贴近身体向后拉",
        "控制回程，避免转体"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "single cable row"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "单侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "inverted_row",
      "name": "反向划船",
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "met": 5.0,
      "desc": "反向划船的基础训练教学。",
      "steps": [
        "仰卧握固定横杆，脚跟撑地",
        "保持身体直线，将胸部拉近横杆",
        "缓慢下降，维持核心张力"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "inverted row"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "rack_pull",
      "name": "架上硬拉",
      "category": "back",
      "muscles": [
        "竖脊肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "架上硬拉的基础训练教学。",
      "steps": [
        "杠铃置于膝下高度的安全架",
        "收紧背部，伸髋站直",
        "屈髋控制回架，避免腰部后仰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "rack pull"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes"
      ]
    },
    {
      "id": "landmine_press",
      "name": "地雷管推举",
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "met": 5.0,
      "desc": "地雷管推举的基础训练教学。",
      "steps": [
        "半跪握杠铃末端，收紧核心",
        "沿斜上方轨迹推起",
        "缓慢回落，保持肋骨收拢"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "landmine press"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "cable_lateral_raise",
      "name": "绳索侧平举",
      "category": "shoulders",
      "muscles": [
        "三角肌中束"
      ],
      "met": 5.0,
      "desc": "绳索侧平举的基础训练教学。",
      "steps": [
        "滑轮置低位，单手握把站稳",
        "微屈肘，将手臂抬至肩高",
        "缓慢回落，避免耸肩"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "cable lateral raise"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "machine_shoulder_press",
      "name": "器械肩推",
      "category": "shoulders",
      "muscles": [
        "三角肌"
      ],
      "met": 5.0,
      "desc": "器械肩推的基础训练教学。",
      "steps": [
        "调节座椅，握把与肩部齐平",
        "背部贴垫，向上推起",
        "控制下放，避免腰椎过度反弓"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "machine shoulder press"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "reverse_pec_deck",
      "name": "反向蝴蝶机",
      "category": "shoulders",
      "muscles": [
        "三角肌后束"
      ],
      "met": 5.0,
      "desc": "反向蝴蝶机的基础训练教学。",
      "steps": [
        "面向靠垫坐稳，双手握把",
        "保持肘微屈，双臂向两侧打开",
        "控制返回，避免耸肩"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "reverse pec deck"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "wall_slide",
      "name": "靠墙滑臂",
      "category": "shoulders",
      "muscles": [
        "肩胛稳定肌"
      ],
      "met": 5.0,
      "desc": "靠墙滑臂的基础训练教学。",
      "steps": [
        "背部靠墙，双臂呈W形",
        "在舒适范围内沿墙向上滑动",
        "缓慢回到起点，避免挺腰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "wall slide"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "推",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "goblet_squat",
      "name": "高脚杯深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "高脚杯深蹲的基础训练教学。",
      "steps": [
        "双手抱哑铃于胸前，双脚站稳",
        "屈髋屈膝下蹲，膝盖与脚尖同向",
        "脚掌发力站起，保持躯干稳定"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "goblet squat"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ]
    },
    {
      "id": "smith_squat",
      "name": "史密斯深蹲",
      "category": "legs",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "史密斯深蹲的基础训练教学。",
      "steps": [
        "设置安全挡，杠铃位于上背",
        "控制下蹲至舒适深度",
        "伸膝伸髋站起，避免膝内扣"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "smith squat"
      ],
      "equipment": [
        "史密斯机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ]
    },
    {
      "id": "step_up",
      "name": "台阶上步",
      "category": "legs",
      "muscles": [
        "臀大肌",
        "股四头肌"
      ],
      "met": 5.0,
      "desc": "台阶上步的基础训练教学。",
      "steps": [
        "单脚踩稳低台，躯干直立",
        "前脚发力将身体带上台阶",
        "缓慢下台，两侧交替进行"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "step up"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ]
    },
    {
      "id": "reverse_lunge",
      "name": "后撤弓步",
      "category": "legs",
      "muscles": [
        "臀大肌",
        "股四头肌"
      ],
      "met": 5.0,
      "desc": "后撤弓步的基础训练教学。",
      "steps": [
        "双脚髋宽站立，收紧核心",
        "一脚后撤，双膝屈曲下降",
        "前脚发力还原，两侧交替"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "reverse lunge"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs",
        "quads"
      ]
    },
    {
      "id": "single_leg_rdl",
      "name": "单腿罗马尼亚硬拉",
      "category": "legs",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "单腿罗马尼亚硬拉的基础训练教学。",
      "steps": [
        "单腿站立，支撑膝微屈",
        "屈髋前倾，另一腿向后伸展",
        "伸髋站起，保持骨盆正向"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "single leg rdl"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "hamstrings",
        "legs"
      ]
    },
    {
      "id": "glute_bridge",
      "name": "臀桥",
      "category": "legs",
      "muscles": [
        "臀大肌"
      ],
      "met": 5.0,
      "desc": "臀桥的基础训练教学。",
      "steps": [
        "仰卧屈膝，脚掌踩实地面",
        "臀部发力抬髋，躯干与大腿成直线",
        "缓慢下降，避免腰部过度伸展"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "glute bridge"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "legs"
      ]
    },
    {
      "id": "seated_calf_raise",
      "name": "坐姿提踵",
      "category": "legs",
      "muscles": [
        "比目鱼肌"
      ],
      "met": 5.0,
      "desc": "坐姿提踵的基础训练教学。",
      "steps": [
        "坐稳器械，前脚掌踩踏板",
        "抬起脚跟，在顶点停顿",
        "缓慢降低脚跟，避免弹震"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "seated calf raise"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "复合",
      "laterality": "双侧",
      "tags": [
        "calves",
        "legs"
      ]
    },
    {
      "id": "cable_curl",
      "name": "绳索弯举",
      "category": "arms",
      "muscles": [
        "肱二头肌"
      ],
      "met": 5.0,
      "desc": "绳索弯举的基础训练教学。",
      "steps": [
        "低位滑轮握把，上臂靠近躯干",
        "屈肘抬起握把，保持上臂稳定",
        "控制伸肘返回，避免摆动身体"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "cable curl"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "biceps"
      ]
    },
    {
      "id": "reverse_curl",
      "name": "反握弯举",
      "category": "arms",
      "muscles": [
        "肱桡肌"
      ],
      "met": 5.0,
      "desc": "反握弯举的基础训练教学。",
      "steps": [
        "掌心向下握杠，上臂贴近躯干",
        "屈肘抬起，手腕保持中立",
        "缓慢下放，避免身体借力"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "reverse curl"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "双侧",
      "tags": [
        "arms",
        "forearms"
      ]
    },
    {
      "id": "single_tricep_extension",
      "name": "单臂绳索下压",
      "category": "arms",
      "muscles": [
        "肱三头肌"
      ],
      "met": 5.0,
      "desc": "单臂绳索下压的基础训练教学。",
      "steps": [
        "单手握高位把手，上臂固定",
        "伸肘向下压至接近伸直",
        "控制返回，避免肩部前移"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "single tricep extension"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "屈伸",
      "laterality": "单侧",
      "tags": [
        "arms",
        "triceps"
      ]
    },
    {
      "id": "pallof_press",
      "name": "帕洛夫抗旋转推",
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "met": 5.0,
      "desc": "帕洛夫抗旋转推的基础训练教学。",
      "steps": [
        "侧对滑轮站立，双手握把于胸前",
        "向前伸臂并抵抗绳索拉力",
        "缓慢收回，保持躯干正向"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "pallof press"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "dead_bug",
      "name": "死虫式",
      "category": "core",
      "muscles": [
        "腹横肌"
      ],
      "met": 5.0,
      "desc": "死虫式的基础训练教学。",
      "steps": [
        "仰卧，髋膝屈曲90度，手臂上举",
        "对侧手脚缓慢伸展，腰部轻贴地面",
        "返回并换侧，保持呼吸"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "dead bug"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "bird_dog",
      "name": "鸟狗式",
      "category": "core",
      "muscles": [
        "核心稳定肌"
      ],
      "met": 5.0,
      "desc": "鸟狗式的基础训练教学。",
      "steps": [
        "四点跪姿，脊柱中立",
        "对侧手脚伸展，骨盆保持水平",
        "缓慢返回并换侧，避免塌腰"
      ],
      "mistakes": [
        "动作过快、失去控制",
        "超过自身可控制的重量或活动范围"
      ],
      "tips": "先掌握动作，再逐步增加负荷；在舒适范围内完成。",
      "aliases": [
        "bird dog"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "稳定",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "smith_bench_press",
      "name": "史密斯平板卧推",
      "aliases": [
        "smith bench press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "史密斯机",
        "平凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "史密斯平板卧推：以史密斯机与平凳完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "调节安全挡，平凳对齐固定杆轨迹",
        "肩胛稳定，沿导轨下放至胸前再推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩胛稳定，沿导轨下放至胸前再推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "smith_incline_press",
      "name": "史密斯上斜卧推",
      "aliases": [
        "smith incline press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌上束",
        "三角肌前束"
      ],
      "equipment": [
        "史密斯机",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "史密斯上斜卧推：以史密斯机与上斜凳完成，主要训练胸大肌上束、三角肌前束。",
      "steps": [
        "上斜凳设为舒适角度并调好安全挡",
        "下放到上胸前方，沿导轨推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "下放到上胸前方，沿导轨推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ]
    },
    {
      "id": "decline_dumbbell_press",
      "name": "下斜哑铃卧推",
      "aliases": [
        "decline dumbbell press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌下束",
        "肱三头肌"
      ],
      "equipment": [
        "哑铃",
        "下斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "下斜哑铃卧推：以哑铃与下斜凳完成，主要训练胸大肌下束、肱三头肌。",
      "steps": [
        "固定双腿，双手持铃置于胸侧",
        "在舒适范围内推起哑铃并控制下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "在舒适范围内推起哑铃并控制下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "dumbbell_floor_press",
      "name": "哑铃地板卧推",
      "aliases": [
        "dumbbell floor press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "哑铃",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "哑铃地板卧推：以哑铃与地垫完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "仰卧屈膝，双手持铃，肘部靠近地面",
        "上臂轻触地面后向上推起，不弹震",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂轻触地面后向上推起，不弹震。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "barbell_floor_press",
      "name": "杠铃地板卧推",
      "aliases": [
        "barbell floor press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "杠铃",
        "安全架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "杠铃地板卧推：以杠铃与安全架完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "在安全架内仰卧于地面，握稳杠铃",
        "屈肘至上臂轻触地面，再垂直推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘至上臂轻触地面，再垂直推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "pec_deck",
      "name": "蝴蝶机夹胸",
      "aliases": [
        "pec deck"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalAdduction",
      "met": 5,
      "desc": "蝴蝶机夹胸：以固定器械完成，主要训练胸大肌。",
      "steps": [
        "调整座高，让握把或肘垫与胸部齐平",
        "双臂向前合拢，控制还原到舒适范围",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双臂向前合拢，控制还原到舒适范围。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest"
      ]
    },
    {
      "id": "svend_press",
      "name": "杠铃片夹胸推",
      "aliases": [
        "svend press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "三角肌前束"
      ],
      "equipment": [
        "杠铃片"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "杠铃片夹胸推：以杠铃片完成，主要训练胸大肌、三角肌前束。",
      "steps": [
        "双手掌心夹住轻杠铃片置于胸前",
        "持续内夹并向前伸臂，再收回胸前",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "持续内夹并向前伸臂，再收回胸前。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "shoulders"
      ]
    },
    {
      "id": "diamond_pushup",
      "name": "钻石俯卧撑",
      "aliases": [
        "diamond pushup"
      ],
      "category": "chest",
      "muscles": [
        "肱三头肌",
        "胸大肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "钻石俯卧撑：以自重与地垫完成，主要训练肱三头肌、胸大肌。",
      "steps": [
        "双手窄距撑地，核心收紧，身体成直线",
        "屈肘下降，再将地面推开；手腕不适则放宽握距",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘下降，再将地面推开；手腕不适则放宽握距。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "kneeling_pushup",
      "name": "跪姿俯卧撑",
      "aliases": [
        "kneeling pushup"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "肱三头肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "跪姿俯卧撑：以自重与地垫完成，主要训练胸大肌、肱三头肌。",
      "steps": [
        "双膝着地，肩髋膝尽量保持直线",
        "胸部缓慢靠近地面，再用双臂推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "胸部缓慢靠近地面，再用双臂推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "triceps"
      ]
    },
    {
      "id": "single_cable_chest_press",
      "name": "单臂绳索推胸",
      "aliases": [
        "single cable chest press"
      ],
      "category": "chest",
      "muscles": [
        "胸大肌",
        "核心"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPush",
      "met": 5,
      "desc": "单臂绳索推胸：以绳索完成，主要训练胸大肌、核心。",
      "steps": [
        "滑轮在胸高，分腿站立，单手握把",
        "抵抗身体旋转，单臂向前推出再收回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抵抗身体旋转，单臂向前推出再收回。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "chest",
        "core"
      ]
    },
    {
      "id": "neutral_pullup",
      "name": "中立握引体向上",
      "aliases": [
        "neutral pullup"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "equipment": [
        "引体架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "中立握引体向上：以引体架完成，主要训练背阔肌、肱二头肌。",
      "steps": [
        "双手掌心相对握住平行把，肩胛下沉",
        "肘向身体两侧拉，抬起躯干后缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘向身体两侧拉，抬起躯干后缓慢下降。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ]
    },
    {
      "id": "wide_pullup",
      "name": "宽握引体向上",
      "aliases": [
        "wide pullup"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "大圆肌"
      ],
      "equipment": [
        "引体架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "宽握引体向上：以引体架完成，主要训练背阔肌、大圆肌。",
      "steps": [
        "采用比肩稍宽的正握，避免极端握距",
        "肩胛先下沉，向上拉起身体并控制返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩胛先下沉，向上拉起身体并控制返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "close_pulldown",
      "name": "窄握高位下拉",
      "aliases": [
        "close pulldown"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "equipment": [
        "绳索",
        "V形把手"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "窄握高位下拉：以绳索与V形把手完成，主要训练背阔肌、肱二头肌。",
      "steps": [
        "固定大腿，双手握窄距把手",
        "肘向下拉近躯干，握把降到上胸前",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘向下拉近躯干，握把降到上胸前。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ]
    },
    {
      "id": "reverse_pulldown",
      "name": "反握高位下拉",
      "aliases": [
        "reverse pulldown"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "肱二头肌"
      ],
      "equipment": [
        "绳索",
        "直杆"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "反握高位下拉：以绳索与直杆完成，主要训练背阔肌、肱二头肌。",
      "steps": [
        "掌心朝向自己，握距约肩宽",
        "挺胸稳定躯干，沿身体前方下拉",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "挺胸稳定躯干，沿身体前方下拉。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "biceps"
      ]
    },
    {
      "id": "single_lat_pulldown",
      "name": "单臂高位下拉",
      "aliases": [
        "single lat pulldown"
      ],
      "category": "back",
      "muscles": [
        "背阔肌"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPull",
      "met": 5,
      "desc": "单臂高位下拉：以绳索完成，主要训练背阔肌。",
      "steps": [
        "单膝跪地或坐稳，单手握高位把手",
        "肘朝髋部方向下拉，再控制上放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘朝髋部方向下拉，再控制上放。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "machine_row",
      "name": "坐姿器械划船",
      "aliases": [
        "machine row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "坐姿器械划船：以固定器械完成，主要训练背阔肌、菱形肌。",
      "steps": [
        "调座椅让胸部贴紧靠垫，双手握把",
        "双肘向后拉，胸部保持贴垫",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双肘向后拉，胸部保持贴垫。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "meadows_row",
      "name": "地雷管单臂划船",
      "aliases": [
        "meadows row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "斜方肌"
      ],
      "equipment": [
        "地雷管",
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "地雷管单臂划船：以地雷管与杠铃完成，主要训练背阔肌、斜方肌。",
      "steps": [
        "侧对杠铃末端，屈髋站稳，单手握杆",
        "向髋旁拉起杆端，保持躯干不扭动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "向髋旁拉起杆端，保持躯干不扭动。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "back",
        "shoulders"
      ]
    },
    {
      "id": "seal_row",
      "name": "高凳俯卧杠铃划船",
      "aliases": [
        "seal row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "菱形肌"
      ],
      "equipment": [
        "杠铃",
        "高平凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "高凳俯卧杠铃划船：以杠铃与高平凳完成，主要训练背阔肌、菱形肌。",
      "steps": [
        "俯卧专用高凳，胸部腹部获得支撑",
        "双肘向后拉，使杠铃靠近凳下，再缓慢下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双肘向后拉，使杠铃靠近凳下，再缓慢下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back"
      ]
    },
    {
      "id": "renegade_row",
      "name": "哑铃支撑划船",
      "aliases": [
        "renegade row"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "核心"
      ],
      "equipment": [
        "哑铃",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "哑铃支撑划船：以哑铃与地垫完成，主要训练背阔肌、核心。",
      "steps": [
        "握稳不易滚动的哑铃呈高平板姿势，双脚分开",
        "一侧划船，另一侧支撑，尽量保持骨盆水平",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "一侧划船，另一侧支撑，尽量保持骨盆水平。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "core"
      ]
    },
    {
      "id": "dumbbell_pullover",
      "name": "仰卧哑铃上拉",
      "aliases": [
        "dumbbell pullover"
      ],
      "category": "back",
      "muscles": [
        "背阔肌",
        "胸大肌"
      ],
      "equipment": [
        "哑铃",
        "平凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "shoulderExtension",
      "met": 5,
      "desc": "仰卧哑铃上拉：以哑铃与平凳完成，主要训练背阔肌、胸大肌。",
      "steps": [
        "仰卧凳上，双手托住一只哑铃置于胸上方",
        "肘微屈，向头后舒适范围下放，再拉回胸上方",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘微屈，向头后舒适范围下放，再拉回胸上方。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "chest"
      ]
    },
    {
      "id": "seated_barbell_press",
      "name": "坐姿杠铃肩推",
      "aliases": [
        "seated barbell press"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "肱三头肌"
      ],
      "equipment": [
        "杠铃",
        "靠背凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPush",
      "met": 5,
      "desc": "坐姿杠铃肩推：以杠铃与靠背凳完成，主要训练三角肌、肱三头肌。",
      "steps": [
        "靠背凳置于安全架内，杠铃位于上胸前",
        "核心稳定，向上推起并控制回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "核心稳定，向上推起并控制回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "push_press",
      "name": "杠铃借力推举",
      "aliases": [
        "push press"
      ],
      "category": "compound",
      "muscles": [
        "三角肌",
        "股四头肌",
        "肱三头肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPush",
      "met": 6,
      "desc": "杠铃借力推举：以杠铃完成，主要训练三角肌、股四头肌、肱三头肌。",
      "steps": [
        "杠铃前架，双脚踩稳，屈膝做小幅预蹲",
        "腿部伸展带动杠铃上推，再控制回到前架",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "腿部伸展带动杠铃上推，再控制回到前架。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "quads",
        "shoulders",
        "triceps"
      ]
    },
    {
      "id": "single_dumbbell_press",
      "name": "单臂哑铃肩推",
      "aliases": [
        "single dumbbell press"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌",
        "核心"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "verticalPush",
      "met": 5,
      "desc": "单臂哑铃肩推：以哑铃完成，主要训练三角肌、核心。",
      "steps": [
        "站稳或坐稳，单手持铃于肩旁",
        "保持躯干正直，向上推铃，再缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持躯干正直，向上推铃，再缓慢下降。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core",
        "shoulders"
      ]
    },
    {
      "id": "lean_lateral_raise",
      "name": "倚靠式哑铃侧平举",
      "aliases": [
        "lean lateral raise"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌中束"
      ],
      "equipment": [
        "哑铃",
        "固定支撑"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "倚靠式哑铃侧平举：以哑铃与固定支撑完成，主要训练三角肌中束。",
      "steps": [
        "一手扶稳支撑，身体小幅侧倾，另一手持铃",
        "肘微屈将哑铃抬向身体侧面，避免耸肩",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘微屈将哑铃抬向身体侧面，避免耸肩。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "prone_y_raise",
      "name": "俯卧Y字举",
      "aliases": [
        "prone y raise"
      ],
      "category": "shoulders",
      "muscles": [
        "下斜方肌",
        "三角肌"
      ],
      "equipment": [
        "轻哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "scapular",
      "met": 5,
      "desc": "俯卧Y字举：以轻哑铃与上斜凳完成，主要训练下斜方肌、三角肌。",
      "steps": [
        "胸部贴上斜凳，双手拇指朝上",
        "双臂向斜前方抬成Y形，控制肩胛",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双臂向斜前方抬成Y形，控制肩胛。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "cable_front_raise",
      "name": "绳索前平举",
      "aliases": [
        "cable front raise"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "flexion",
      "met": 5,
      "desc": "绳索前平举：以绳索完成，主要训练三角肌前束。",
      "steps": [
        "低位滑轮在身后或身前，握稳把手",
        "肘微屈向前举至舒适高度，再缓慢返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘微屈向前举至舒适高度，再缓慢返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "plate_front_raise",
      "name": "杠铃片前平举",
      "aliases": [
        "plate front raise"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌前束"
      ],
      "equipment": [
        "杠铃片"
      ],
      "difficulty": "intermediate",
      "movementPattern": "flexion",
      "met": 5,
      "desc": "杠铃片前平举：以杠铃片完成，主要训练三角肌前束。",
      "steps": [
        "双手握杠铃片两侧，核心稳定",
        "将杠铃片抬到肩高附近，避免身体后仰",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "将杠铃片抬到肩高附近，避免身体后仰。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "cable_upright_row",
      "name": "绳索直立划船",
      "aliases": [
        "cable upright row"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌中束",
        "斜方肌"
      ],
      "equipment": [
        "绳索",
        "直杆"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "绳索直立划船：以绳索与直杆完成，主要训练三角肌中束、斜方肌。",
      "steps": [
        "握住低位直杆，采用舒适握距",
        "双肘带动向上拉，在肩部舒适范围内停止",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双肘带动向上拉，在肩部舒适范围内停止。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "dumbbell_shrug",
      "name": "哑铃耸肩",
      "aliases": [
        "dumbbell shrug"
      ],
      "category": "shoulders",
      "muscles": [
        "斜方肌上束"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "scapular",
      "met": 5,
      "desc": "哑铃耸肩：以哑铃完成，主要训练斜方肌上束。",
      "steps": [
        "双手持铃垂于体侧，颈部保持中立",
        "肩膀向上提起后缓慢放下，不绕肩画圈",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩膀向上提起后缓慢放下，不绕肩画圈。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "shoulders"
      ]
    },
    {
      "id": "band_pull_apart",
      "name": "弹力带拉开",
      "aliases": [
        "band pull apart"
      ],
      "category": "shoulders",
      "muscles": [
        "三角肌后束",
        "菱形肌"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "horizontalPull",
      "met": 5,
      "desc": "弹力带拉开：以弹力带完成，主要训练三角肌后束、菱形肌。",
      "steps": [
        "双手肩高握带，肘微屈，选择轻阻力",
        "双臂向两侧拉开，胸廓保持稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双臂向两侧拉开，胸廓保持稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "shoulders"
      ]
    },
    {
      "id": "sumo_squat",
      "name": "哑铃相扑深蹲",
      "aliases": [
        "sumo squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "内收肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "哑铃相扑深蹲：以哑铃完成，主要训练股四头肌、臀大肌、内收肌。",
      "steps": [
        "双脚宽站，脚尖自然外转，双手垂持哑铃",
        "膝盖沿脚尖方向屈曲，再蹬地站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "膝盖沿脚尖方向屈曲，再蹬地站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "split_squat",
      "name": "原地分腿蹲",
      "aliases": [
        "split squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "原地分腿蹲：以哑铃完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "前后分腿站稳，双脚保持横向间距",
        "躯干控制下降，前脚发力回到起点",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "躯干控制下降，前脚发力回到起点。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "walking_lunge",
      "name": "行走弓步",
      "aliases": [
        "walking lunge"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "行走弓步：以哑铃完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "双手持铃，留出足够前进空间",
        "向前迈步并下降，再抬起后脚进入下一步",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "向前迈步并下降，再抬起后脚进入下一步。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "lateral_lunge",
      "name": "侧向弓步",
      "aliases": [
        "lateral lunge"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "内收肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "侧向弓步：以自重完成，主要训练股四头肌、臀大肌、内收肌。",
      "steps": [
        "双脚站稳，向侧面迈出一步",
        "屈髋屈膝坐向迈出侧，另一腿伸展，再蹬回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈髋屈膝坐向迈出侧，另一腿伸展，再蹬回。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "curtsy_lunge",
      "name": "交叉后撤弓步",
      "aliases": [
        "curtsy lunge"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌",
        "臀大肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "交叉后撤弓步：以自重完成，主要训练臀中肌、臀大肌。",
      "steps": [
        "站稳后将一脚小幅交叉向后迈",
        "前腿控制下降，膝盖保持与脚尖方向协调",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "前腿控制下降，膝盖保持与脚尖方向协调。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes"
      ]
    },
    {
      "id": "heel_elevated_goblet",
      "name": "垫跟高脚杯深蹲",
      "aliases": [
        "heel elevated goblet"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌"
      ],
      "equipment": [
        "哑铃",
        "稳定斜板"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "垫跟高脚杯深蹲：以哑铃与稳定斜板完成，主要训练股四头肌。",
      "steps": [
        "双脚跟垫于稳定斜板，胸前抱铃",
        "保持脚掌接触支撑，屈膝下蹲再起身",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持脚掌接触支撑，屈膝下蹲再起身。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "quads"
      ]
    },
    {
      "id": "zercher_squat",
      "name": "泽奇深蹲",
      "aliases": [
        "zercher squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "核心"
      ],
      "equipment": [
        "杠铃",
        "安全架"
      ],
      "difficulty": "advanced",
      "movementPattern": "squat",
      "met": 5,
      "desc": "泽奇深蹲：以杠铃与安全架完成，主要训练股四头肌、臀大肌、核心。",
      "steps": [
        "使用轻重量，将杠铃置于肘窝并设置安全挡",
        "抱紧杠铃，控制屈髋屈膝下蹲后站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抱紧杠铃，控制屈髋屈膝下蹲后站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core",
        "glutes",
        "quads"
      ]
    },
    {
      "id": "landmine_squat",
      "name": "地雷管深蹲",
      "aliases": [
        "landmine squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "地雷管"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "地雷管深蹲：以地雷管完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "双手托住杆端于胸前，双脚站稳",
        "顺应杆端弧形路径下蹲，再推地站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "顺应杆端弧形路径下蹲，再推地站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "belt_squat",
      "name": "腰带深蹲",
      "aliases": [
        "belt squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "腰带深蹲机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "腰带深蹲：以腰带深蹲机完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "系好专用腰带并站上踏台，扶稳把手",
        "保持躯干稳定，屈髋屈膝下降再站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持躯干稳定，屈髋屈膝下降再站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "assisted_sissy_squat",
      "name": "辅助西西深蹲",
      "aliases": [
        "assisted sissy squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌"
      ],
      "equipment": [
        "固定支撑",
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeExtension",
      "met": 5,
      "desc": "辅助西西深蹲：以固定支撑与自重完成，主要训练股四头肌。",
      "steps": [
        "扶稳支撑，采用小幅度与自重练习",
        "屈膝向前，躯干大腿维持相对直线，再伸膝返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈膝向前，躯干大腿维持相对直线，再伸膝返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "quads"
      ]
    },
    {
      "id": "smith_split_squat",
      "name": "史密斯分腿蹲",
      "aliases": [
        "smith split squat"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "史密斯机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lunge",
      "met": 5,
      "desc": "史密斯分腿蹲：以史密斯机完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "杆置上背，前后分腿站稳并设置安全挡",
        "沿导轨下降，前脚踩稳发力还原",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "沿导轨下降，前脚踩稳发力还原。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "single_leg_press",
      "name": "单腿腿举",
      "aliases": [
        "single leg press"
      ],
      "category": "quads",
      "muscles": [
        "股四头肌",
        "臀大肌"
      ],
      "equipment": [
        "腿举机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squat",
      "met": 5,
      "desc": "单腿腿举：以腿举机完成，主要训练股四头肌、臀大肌。",
      "steps": [
        "单脚踩稳踏板，臀背贴垫，选择较轻重量",
        "屈膝控制下降，单腿推回且不锁死膝关节",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈膝控制下降，单腿推回且不锁死膝关节。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "seated_leg_curl",
      "name": "坐姿腿弯举",
      "aliases": [
        "seated leg curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "坐姿腿弯举：以固定器械完成，主要训练腘绳肌。",
      "steps": [
        "调节腿垫并固定大腿，膝关节对准转轴",
        "向下后方屈膝拉动腿垫，再缓慢伸回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "向下后方屈膝拉动腿垫，再缓慢伸回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "hamstrings"
      ]
    },
    {
      "id": "standing_leg_curl",
      "name": "站姿单腿弯举",
      "aliases": [
        "standing leg curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "站姿单腿弯举：以固定器械完成，主要训练腘绳肌。",
      "steps": [
        "支撑腿站稳，另一腿踝后抵住腿垫",
        "保持髋部不前后晃动，屈膝抬起小腿",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持髋部不前后晃动，屈膝抬起小腿。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "hamstrings"
      ]
    },
    {
      "id": "assisted_nordic_curl",
      "name": "辅助北欧挺",
      "aliases": [
        "assisted nordic curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌"
      ],
      "equipment": [
        "固定脚踝装置",
        "弹力带"
      ],
      "difficulty": "advanced",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "辅助北欧挺：以固定脚踝装置与弹力带完成，主要训练腘绳肌。",
      "steps": [
        "跪于软垫并可靠固定脚踝，使用弹力带辅助",
        "保持肩髋膝一线缓慢前倾，借助辅助力量返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "保持肩髋膝一线缓慢前倾，借助辅助力量返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "hamstrings"
      ]
    },
    {
      "id": "slider_leg_curl",
      "name": "滑盘腿弯举",
      "aliases": [
        "slider leg curl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "equipment": [
        "滑盘",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "kneeFlexion",
      "met": 5,
      "desc": "滑盘腿弯举：以滑盘与地垫完成，主要训练腘绳肌、臀大肌。",
      "steps": [
        "仰卧，脚跟放滑盘，臀部抬起",
        "脚跟向远处滑出，再屈膝拉回，保持髋部稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚跟向远处滑出，再屈膝拉回，保持髋部稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "good_morning",
      "name": "杠铃早安式",
      "aliases": [
        "good morning"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌",
        "竖脊肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "杠铃早安式：以杠铃完成，主要训练腘绳肌、臀大肌、竖脊肌。",
      "steps": [
        "轻杠置上背，膝微屈，脊柱中立",
        "髋部向后推使躯干前倾，再伸髋站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部向后推使躯干前倾，再伸髋站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "dumbbell_rdl",
      "name": "哑铃罗马尼亚硬拉",
      "aliases": [
        "dumbbell rdl"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "哑铃罗马尼亚硬拉：以哑铃完成，主要训练腘绳肌、臀大肌。",
      "steps": [
        "双手持铃于大腿前，膝微屈",
        "髋部后移让哑铃沿腿侧下降，再伸髋还原",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部后移让哑铃沿腿侧下降，再伸髋还原。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "stiff_leg_deadlift",
      "name": "杠铃直腿硬拉",
      "aliases": [
        "stiff leg deadlift"
      ],
      "category": "hamstrings",
      "muscles": [
        "腘绳肌",
        "臀大肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "杠铃直腿硬拉：以杠铃完成，主要训练腘绳肌、臀大肌。",
      "steps": [
        "膝关节保持轻微弯曲而不锁死，采用轻重量",
        "屈髋下降至可保持背部中立的范围，再站起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈髋下降至可保持背部中立的范围，再站起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "cable_pull_through",
      "name": "绳索胯下拉",
      "aliases": [
        "cable pull through"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "绳索胯下拉：以绳索与绳把完成，主要训练臀大肌、腘绳肌。",
      "steps": [
        "背对低位滑轮，绳把从双腿之间穿过",
        "髋部向后折叠，再伸髋站直，不用腰部后仰",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部向后折叠，再伸髋站直，不用腰部后仰。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "sumo_deadlift",
      "name": "相扑硬拉",
      "aliases": [
        "sumo deadlift"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "内收肌",
        "股四头肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "相扑硬拉：以杠铃完成，主要训练臀大肌、内收肌、股四头肌。",
      "steps": [
        "宽站距，双手于双膝之间握杆",
        "脚掌蹬地并伸髋抬杆，杆沿身体前方移动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚掌蹬地并伸髋抬杆，杆沿身体前方移动。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "quads"
      ]
    },
    {
      "id": "trap_bar_deadlift",
      "name": "六角杠硬拉",
      "aliases": [
        "trap bar deadlift"
      ],
      "category": "compound",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "背部"
      ],
      "equipment": [
        "六角杠"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 6,
      "desc": "六角杠硬拉：以六角杠完成，主要训练股四头肌、臀大肌、背部。",
      "steps": [
        "站在六角杠中央，握稳两侧把手",
        "背部稳定，伸膝伸髋抬起重量，再控制下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "背部稳定，伸膝伸髋抬起重量，再控制下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "quads"
      ]
    },
    {
      "id": "single_glute_bridge",
      "name": "单腿臀桥",
      "aliases": [
        "single glute bridge"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hipExtension",
      "met": 5,
      "desc": "单腿臀桥：以自重与地垫完成，主要训练臀大肌、腘绳肌。",
      "steps": [
        "仰卧屈一膝踩地，另一腿抬起",
        "支撑侧臀部发力抬髋，骨盆保持水平",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "支撑侧臀部发力抬髋，骨盆保持水平。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "cable_kickback",
      "name": "绳索后踢腿",
      "aliases": [
        "cable kickback"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌"
      ],
      "equipment": [
        "绳索",
        "踝带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hipExtension",
      "met": 5,
      "desc": "绳索后踢腿：以绳索与踝带完成，主要训练臀大肌。",
      "steps": [
        "踝带连接低位滑轮，双手扶稳支撑",
        "在腰部不反弓的范围内向后伸髋，再缓慢返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "在腰部不反弓的范围内向后伸髋，再缓慢返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ]
    },
    {
      "id": "quadruped_abduction",
      "name": "四点跪姿侧抬腿",
      "aliases": [
        "quadruped abduction"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "四点跪姿侧抬腿：以自重与地垫完成，主要训练臀中肌。",
      "steps": [
        "四点跪姿，双手位于肩下方",
        "膝盖弯曲向侧面抬起，保持躯干不旋转",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "膝盖弯曲向侧面抬起，保持躯干不旋转。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ]
    },
    {
      "id": "clamshell",
      "name": "蚌式开合",
      "aliases": [
        "clamshell"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "弹力带",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "externalRotation",
      "met": 5,
      "desc": "蚌式开合：以弹力带与地垫完成，主要训练臀中肌。",
      "steps": [
        "侧卧屈髋屈膝，双脚相叠",
        "脚部保持接触，上侧膝盖抬起再缓慢合拢",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚部保持接触，上侧膝盖抬起再缓慢合拢。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ]
    },
    {
      "id": "band_lateral_walk",
      "name": "弹力带侧向行走",
      "aliases": [
        "band lateral walk"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "弹力带"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "弹力带侧向行走：以弹力带完成，主要训练臀中肌。",
      "steps": [
        "弹力带套膝上或踝上，微屈髋膝",
        "小步侧移，保持膝与脚尖同向和带的张力",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "小步侧移，保持膝与脚尖同向和带的张力。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "glutes"
      ]
    },
    {
      "id": "reverse_hyper",
      "name": "反向挺身",
      "aliases": [
        "reverse hyper"
      ],
      "category": "glutes",
      "muscles": [
        "臀大肌",
        "腘绳肌"
      ],
      "equipment": [
        "反向挺身机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hipExtension",
      "met": 5,
      "desc": "反向挺身：以反向挺身机完成，主要训练臀大肌、腘绳肌。",
      "steps": [
        "腹部贴垫，双手握稳支撑，腿部自然下垂",
        "双腿向后抬至与躯干接近一线，再缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双腿向后抬至与躯干接近一线，再缓慢下降。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "back_extension",
      "name": "罗马椅挺身",
      "aliases": [
        "back extension"
      ],
      "category": "hamstrings",
      "muscles": [
        "臀大肌",
        "腘绳肌",
        "竖脊肌"
      ],
      "equipment": [
        "罗马椅"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 5,
      "desc": "罗马椅挺身：以罗马椅完成，主要训练臀大肌、腘绳肌、竖脊肌。",
      "steps": [
        "大腿贴垫、脚跟固定，髋部可自由折叠",
        "屈髋下降后伸髋抬起躯干，不超过身体直线",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈髋下降后伸髋抬起躯干，不超过身体直线。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "back",
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "seated_band_abduction",
      "name": "坐姿弹力带髋外展",
      "aliases": [
        "seated band abduction"
      ],
      "category": "glutes",
      "muscles": [
        "臀中肌"
      ],
      "equipment": [
        "弹力带",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "abduction",
      "met": 5,
      "desc": "坐姿弹力带髋外展：以弹力带与凳完成，主要训练臀中肌。",
      "steps": [
        "坐稳凳面，弹力带套于双膝上方",
        "双膝向两侧打开，再控制合拢",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "双膝向两侧打开，再控制合拢。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "glutes"
      ]
    },
    {
      "id": "single_calf_raise",
      "name": "单腿站姿提踵",
      "aliases": [
        "single calf raise"
      ],
      "category": "calves",
      "muscles": [
        "腓肠肌"
      ],
      "equipment": [
        "自重",
        "固定支撑"
      ],
      "difficulty": "intermediate",
      "movementPattern": "plantarFlexion",
      "met": 5,
      "desc": "单腿站姿提踵：以自重与固定支撑完成，主要训练腓肠肌。",
      "steps": [
        "单脚前脚掌踩稳，手扶支撑维持平衡",
        "抬高脚跟，顶点停顿后缓慢下降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬高脚跟，顶点停顿后缓慢下降。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "calves"
      ]
    },
    {
      "id": "leg_press_calf_raise",
      "name": "腿举机提踵",
      "aliases": [
        "leg press calf raise"
      ],
      "category": "calves",
      "muscles": [
        "腓肠肌"
      ],
      "equipment": [
        "腿举机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "plantarFlexion",
      "met": 5,
      "desc": "腿举机提踵：以腿举机完成，主要训练腓肠肌。",
      "steps": [
        "调好安全挡，前脚掌踩踏板，膝微屈",
        "仅通过踝关节推开踏板，再控制脚跟回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "仅通过踝关节推开踏板，再控制脚跟回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves"
      ]
    },
    {
      "id": "donkey_calf_raise",
      "name": "俯身提踵",
      "aliases": [
        "donkey calf raise"
      ],
      "category": "calves",
      "muscles": [
        "腓肠肌"
      ],
      "equipment": [
        "提踵机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "plantarFlexion",
      "met": 5,
      "desc": "俯身提踵：以提踵机完成，主要训练腓肠肌。",
      "steps": [
        "使用专用机器，髋部屈曲、前臂支撑稳固",
        "抬起脚跟，再缓慢降低，保持膝角度稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬起脚跟，再缓慢降低，保持膝角度稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves"
      ]
    },
    {
      "id": "tibialis_raise",
      "name": "靠墙胫骨前肌抬脚",
      "aliases": [
        "tibialis raise"
      ],
      "category": "calves",
      "muscles": [
        "胫骨前肌"
      ],
      "equipment": [
        "墙面",
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "dorsiflexion",
      "met": 5,
      "desc": "靠墙胫骨前肌抬脚：以墙面与自重完成，主要训练胫骨前肌。",
      "steps": [
        "背靠墙，脚跟踩地，双脚稍离墙面",
        "脚尖向小腿方向抬起，再缓慢放下",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "脚尖向小腿方向抬起，再缓慢放下。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves"
      ]
    },
    {
      "id": "incline_dumbbell_curl",
      "name": "上斜凳哑铃弯举",
      "aliases": [
        "incline dumbbell curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "上斜凳哑铃弯举：以哑铃与上斜凳完成，主要训练肱二头肌。",
      "steps": [
        "背靠上斜凳，双臂自然垂于体侧",
        "上臂保持相对固定，屈肘抬铃再缓慢伸肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂保持相对固定，屈肘抬铃再缓慢伸肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ]
    },
    {
      "id": "concentration_curl",
      "name": "哑铃集中弯举",
      "aliases": [
        "concentration curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "哑铃",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "哑铃集中弯举：以哑铃与凳完成，主要训练肱二头肌。",
      "steps": [
        "坐姿，上臂内侧靠在大腿内侧",
        "屈肘抬起哑铃，避免肩部前后移动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘抬起哑铃，避免肩部前后移动。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ]
    },
    {
      "id": "spider_curl",
      "name": "蜘蛛弯举",
      "aliases": [
        "spider curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "哑铃",
        "上斜凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "蜘蛛弯举：以哑铃与上斜凳完成，主要训练肱二头肌。",
      "steps": [
        "俯卧于上斜凳，双臂垂直下垂",
        "肘部位置稳定，屈肘将哑铃抬起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘部位置稳定，屈肘将哑铃抬起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ]
    },
    {
      "id": "drag_curl",
      "name": "杠铃拖曳弯举",
      "aliases": [
        "drag curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "杠铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "杠铃拖曳弯举：以杠铃完成，主要训练肱二头肌。",
      "steps": [
        "站稳反握轻杠，杆贴近身体前方",
        "肘部向后移动，使杠铃沿躯干上提",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肘部向后移动，使杠铃沿躯干上提。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ]
    },
    {
      "id": "zottman_curl",
      "name": "佐特曼弯举",
      "aliases": [
        "zottman curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌",
        "肱桡肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "佐特曼弯举：以哑铃完成，主要训练肱二头肌、肱桡肌。",
      "steps": [
        "掌心向前握铃，上臂贴近体侧",
        "屈肘抬起后翻转为掌心向下，缓慢下放",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘抬起后翻转为掌心向下，缓慢下放。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ]
    },
    {
      "id": "cable_hammer_curl",
      "name": "绳索锤式弯举",
      "aliases": [
        "cable hammer curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱肌",
        "肱桡肌"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "绳索锤式弯举：以绳索与绳把完成，主要训练肱肌、肱桡肌。",
      "steps": [
        "低位绳索接绳把，掌心相对握住",
        "上臂稳定，屈肘抬起绳把，再缓慢还原",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂稳定，屈肘抬起绳把，再缓慢还原。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps",
        "forearms"
      ]
    },
    {
      "id": "bayesian_curl",
      "name": "身后绳索弯举",
      "aliases": [
        "bayesian curl"
      ],
      "category": "biceps",
      "muscles": [
        "肱二头肌"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowFlexion",
      "met": 5,
      "desc": "身后绳索弯举：以绳索完成，主要训练肱二头肌。",
      "steps": [
        "背对低位滑轮，上臂稍位于躯干后方",
        "固定上臂位置，屈肘将把手拉向前上方",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "固定上臂位置，屈肘将把手拉向前上方。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "biceps"
      ]
    },
    {
      "id": "wrist_curl",
      "name": "杠铃腕弯举",
      "aliases": [
        "wrist curl"
      ],
      "category": "forearms",
      "muscles": [
        "前臂屈肌"
      ],
      "equipment": [
        "杠铃",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "wristFlexion",
      "met": 5,
      "desc": "杠铃腕弯举：以杠铃与凳完成，主要训练前臂屈肌。",
      "steps": [
        "前臂放在凳或大腿上，掌心向上持轻杠",
        "仅屈伸手腕，控制杠铃小幅升降",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "仅屈伸手腕，控制杠铃小幅升降。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "forearms"
      ]
    },
    {
      "id": "reverse_wrist_curl",
      "name": "反握腕伸展",
      "aliases": [
        "reverse wrist curl"
      ],
      "category": "forearms",
      "muscles": [
        "前臂伸肌"
      ],
      "equipment": [
        "哑铃",
        "凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "wristExtension",
      "met": 5,
      "desc": "反握腕伸展：以哑铃与凳完成，主要训练前臂伸肌。",
      "steps": [
        "前臂获得支撑，掌心朝下持轻铃",
        "抬高手背，再缓慢回到舒适范围",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬高手背，再缓慢回到舒适范围。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "forearms"
      ]
    },
    {
      "id": "farmer_carry",
      "name": "农夫行走",
      "aliases": [
        "farmer carry"
      ],
      "category": "forearms",
      "muscles": [
        "前臂",
        "斜方肌",
        "核心"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "carry",
      "met": 5,
      "desc": "农夫行走：以哑铃完成，主要训练前臂、斜方肌、核心。",
      "steps": [
        "双手持铃站直，肩部自然下沉",
        "以短而稳的步伐行走，躯干不前后摇晃",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "以短而稳的步伐行走，躯干不前后摇晃。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core",
        "forearms",
        "shoulders"
      ]
    },
    {
      "id": "dumbbell_kickback",
      "name": "哑铃俯身臂屈伸",
      "aliases": [
        "dumbbell kickback"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "哑铃俯身臂屈伸：以哑铃完成，主要训练肱三头肌。",
      "steps": [
        "屈髋俯身，上臂抬至体侧，肘弯曲",
        "上臂保持固定，向后伸直前臂再缓慢屈肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂保持固定，向后伸直前臂再缓慢屈肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ]
    },
    {
      "id": "single_overhead_extension",
      "name": "单臂哑铃颈后臂屈伸",
      "aliases": [
        "single overhead extension"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌长头"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "单臂哑铃颈后臂屈伸：以哑铃完成，主要训练肱三头肌长头。",
      "steps": [
        "单手持轻铃举过头顶，上臂靠近耳侧",
        "屈肘将铃放到头后，再伸肘抬起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈肘将铃放到头后，再伸肘抬起。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "triceps"
      ]
    },
    {
      "id": "cable_overhead_extension",
      "name": "绳索过顶臂屈伸",
      "aliases": [
        "cable overhead extension"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌长头"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "绳索过顶臂屈伸：以绳索与绳把完成，主要训练肱三头肌长头。",
      "steps": [
        "背向滑轮，双手握绳置于头后，分腿站稳",
        "上臂保持稳定，向前上方伸肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂保持稳定，向前上方伸肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ]
    },
    {
      "id": "bench_dip",
      "name": "凳上臂屈伸",
      "aliases": [
        "bench dip"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "稳固平凳",
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "凳上臂屈伸：以稳固平凳与自重完成，主要训练肱三头肌。",
      "steps": [
        "手撑凳沿，双脚踩地，臀部靠近凳子",
        "小幅屈肘下降，在肩前侧无不适的范围内推起",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "小幅屈肘下降，在肩前侧无不适的范围内推起。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ]
    },
    {
      "id": "triceps_extension_machine",
      "name": "器械肱三头伸展",
      "aliases": [
        "triceps extension machine"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "固定器械"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "器械肱三头伸展：以固定器械完成，主要训练肱三头肌。",
      "steps": [
        "调整座椅，上臂放在支撑垫上，肘对转轴",
        "伸肘推动握把，再控制屈肘返回",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "伸肘推动握把，再控制屈肘返回。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ]
    },
    {
      "id": "seated_barbell_extension",
      "name": "坐姿曲杆颈后臂屈伸",
      "aliases": [
        "seated barbell extension"
      ],
      "category": "triceps",
      "muscles": [
        "肱三头肌"
      ],
      "equipment": [
        "曲杆杠铃",
        "靠背凳"
      ],
      "difficulty": "intermediate",
      "movementPattern": "elbowExtension",
      "met": 5,
      "desc": "坐姿曲杆颈后臂屈伸：以曲杆杠铃与靠背凳完成，主要训练肱三头肌。",
      "steps": [
        "背靠凳面，将轻曲杆举过头顶",
        "上臂稳定，屈肘下降至头后，再伸肘",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "上臂稳定，屈肘下降至头后，再伸肘。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "triceps"
      ]
    },
    {
      "id": "reverse_crunch",
      "name": "反向卷腹",
      "aliases": [
        "reverse crunch"
      ],
      "category": "core",
      "muscles": [
        "腹直肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "trunkFlexion",
      "met": 5,
      "desc": "反向卷腹：以自重与地垫完成，主要训练腹直肌。",
      "steps": [
        "仰卧屈膝，双手置于体侧",
        "腹部带动骨盆小幅卷离地面，再控制回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "腹部带动骨盆小幅卷离地面，再控制回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "bicycle_crunch",
      "name": "自行车卷腹",
      "aliases": [
        "bicycle crunch"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "腹斜肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "rotation",
      "met": 5,
      "desc": "自行车卷腹：以自重与地垫完成，主要训练腹直肌、腹斜肌。",
      "steps": [
        "仰卧，双手轻扶头侧，双腿抬起",
        "肩部转向对侧膝盖，另一腿伸展，缓慢交替",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩部转向对侧膝盖，另一腿伸展，缓慢交替。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "heel_touch",
      "name": "仰卧交替摸踵",
      "aliases": [
        "heel touch"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lateralFlexion",
      "met": 5,
      "desc": "仰卧交替摸踵：以自重与地垫完成，主要训练腹斜肌。",
      "steps": [
        "仰卧屈膝，双臂置于体侧，肩部稍抬起",
        "躯干小幅左右侧屈，手指依次靠近两侧脚跟",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "躯干小幅左右侧屈，手指依次靠近两侧脚跟。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "lying_leg_raise",
      "name": "仰卧举腿",
      "aliases": [
        "lying leg raise"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "髋屈肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiExtension",
      "met": 5,
      "desc": "仰卧举腿：以自重与地垫完成，主要训练腹直肌、髋屈肌。",
      "steps": [
        "仰卧，核心收紧，双腿在舒适范围伸展",
        "抬起并缓慢放低双腿，腰部避免离地反弓",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬起并缓慢放低双腿，腰部避免离地反弓。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "hanging_knee_raise",
      "name": "悬垂提膝",
      "aliases": [
        "hanging knee raise"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "髋屈肌"
      ],
      "equipment": [
        "引体架"
      ],
      "difficulty": "intermediate",
      "movementPattern": "trunkFlexion",
      "met": 5,
      "desc": "悬垂提膝：以引体架完成，主要训练腹直肌、髋屈肌。",
      "steps": [
        "悬垂握稳，肩部主动下沉",
        "屈膝向腹部提起，轻卷骨盆后缓慢放下",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "屈膝向腹部提起，轻卷骨盆后缓慢放下。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "cable_crunch",
      "name": "跪姿绳索卷腹",
      "aliases": [
        "cable crunch"
      ],
      "category": "core",
      "muscles": [
        "腹直肌"
      ],
      "equipment": [
        "绳索",
        "绳把"
      ],
      "difficulty": "intermediate",
      "movementPattern": "trunkFlexion",
      "met": 5,
      "desc": "跪姿绳索卷腹：以绳索与绳把完成，主要训练腹直肌。",
      "steps": [
        "面对高位滑轮跪稳，绳把位于头部两侧",
        "腹部发力使胸廓靠近骨盆，不用手臂下拉",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "腹部发力使胸廓靠近骨盆，不用手臂下拉。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "cable_woodchop",
      "name": "绳索伐木",
      "aliases": [
        "cable woodchop"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "equipment": [
        "绳索"
      ],
      "difficulty": "intermediate",
      "movementPattern": "rotation",
      "met": 5,
      "desc": "绳索伐木：以绳索完成，主要训练腹斜肌。",
      "steps": [
        "双手握把，侧对滑轮站稳，膝微屈",
        "胸廓与髋部协调转动，把手沿斜线移动",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "胸廓与髋部协调转动，把手沿斜线移动。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "hollow_hold",
      "name": "中空支撑",
      "aliases": [
        "hollow hold"
      ],
      "category": "core",
      "muscles": [
        "腹直肌",
        "腹横肌"
      ],
      "equipment": [
        "自重",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiExtension",
      "met": 5,
      "desc": "中空支撑：以自重与地垫完成，主要训练腹直肌、腹横肌。",
      "steps": [
        "仰卧，腰部轻贴垫面，先从屈膝姿势开始",
        "肩与腿抬离地面，保持可控制的伸展程度",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "肩与腿抬离地面，保持可控制的伸展程度。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "mountain_climber",
      "name": "登山跑",
      "aliases": [
        "mountain climber"
      ],
      "category": "core",
      "muscles": [
        "核心",
        "髋屈肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiExtension",
      "met": 5,
      "desc": "登山跑：以自重完成，主要训练核心、髋屈肌。",
      "steps": [
        "双手撑地呈高平板，肩在手腕上方",
        "交替将膝盖带向胸前，保持骨盆稳定",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "交替将膝盖带向胸前，保持骨盆稳定。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "plank_shoulder_tap",
      "name": "高平板交替触肩",
      "aliases": [
        "plank shoulder tap"
      ],
      "category": "core",
      "muscles": [
        "核心",
        "肩胛稳定肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiRotation",
      "met": 5,
      "desc": "高平板交替触肩：以自重完成，主要训练核心、肩胛稳定肌。",
      "steps": [
        "双脚略分开，高平板姿势稳定",
        "一手轻触对侧肩，再换边，骨盆不左右摇晃",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "一手轻触对侧肩，再换边，骨盆不左右摇晃。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "bear_crawl",
      "name": "熊爬",
      "aliases": [
        "bear crawl"
      ],
      "category": "core",
      "muscles": [
        "核心",
        "肩胛稳定肌"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "locomotion",
      "met": 5,
      "desc": "熊爬：以自重完成，主要训练核心、肩胛稳定肌。",
      "steps": [
        "四点跪姿，膝盖抬离地面少许",
        "对侧手脚同时小步前进，背部保持水平",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "对侧手脚同时小步前进，背部保持水平。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "suitcase_carry",
      "name": "单侧手提行走",
      "aliases": [
        "suitcase carry"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌",
        "前臂"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "carry",
      "met": 5,
      "desc": "单侧手提行走：以哑铃完成，主要训练腹斜肌、前臂。",
      "steps": [
        "单手持铃站立，肩膀保持同高",
        "缓慢行走并抵抗躯干向负重侧倾斜",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "缓慢行走并抵抗躯干向负重侧倾斜。初次练习先使用轻负荷。",
      "laterality": "单侧",
      "tags": [
        "core",
        "forearms"
      ]
    },
    {
      "id": "dumbbell_side_bend",
      "name": "哑铃侧屈",
      "aliases": [
        "dumbbell side bend"
      ],
      "category": "core",
      "muscles": [
        "腹斜肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "lateralFlexion",
      "met": 5,
      "desc": "哑铃侧屈：以哑铃完成，主要训练腹斜肌。",
      "steps": [
        "单手持轻铃，骨盆固定、躯干直立",
        "在小范围内向负重侧侧屈，再回到中立",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "在小范围内向负重侧侧屈，再回到中立。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "copenhagen_plank",
      "name": "哥本哈根侧平板",
      "aliases": [
        "copenhagen plank"
      ],
      "category": "core",
      "muscles": [
        "内收肌",
        "核心"
      ],
      "equipment": [
        "稳固平凳",
        "地垫"
      ],
      "difficulty": "intermediate",
      "movementPattern": "antiLateralFlexion",
      "met": 5,
      "desc": "哥本哈根侧平板：以稳固平凳与地垫完成，主要训练内收肌、核心。",
      "steps": [
        "上侧膝或脚置稳固凳面，前臂撑地",
        "抬起髋部维持直线，初学用膝部支撑版本",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "抬起髋部维持直线，初学用膝部支撑版本。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "core"
      ]
    },
    {
      "id": "kettlebell_swing",
      "name": "壶铃摆荡",
      "aliases": [
        "kettlebell swing"
      ],
      "category": "compound",
      "muscles": [
        "臀大肌",
        "腘绳肌",
        "核心"
      ],
      "equipment": [
        "壶铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "hinge",
      "met": 6,
      "desc": "壶铃摆荡：以壶铃完成，主要训练臀大肌、腘绳肌、核心。",
      "steps": [
        "壶铃放在身前，屈髋握把并收紧背部",
        "髋部快速伸展带动壶铃前摆，回程再次屈髋",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "髋部快速伸展带动壶铃前摆，回程再次屈髋。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "core",
        "glutes",
        "hamstrings"
      ]
    },
    {
      "id": "turkish_getup",
      "name": "土耳其起立",
      "aliases": [
        "turkish getup"
      ],
      "category": "compound",
      "muscles": [
        "核心",
        "肩胛稳定肌",
        "臀大肌"
      ],
      "equipment": [
        "壶铃",
        "地垫"
      ],
      "difficulty": "advanced",
      "movementPattern": "getUp",
      "met": 6,
      "desc": "土耳其起立：以壶铃与地垫完成，主要训练核心、肩胛稳定肌、臀大肌。",
      "steps": [
        "仰卧单手举轻铃，同侧膝弯曲",
        "按肘支撑、手支撑、半跪、站立顺序缓慢起身",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "按肘支撑、手支撑、半跪、站立顺序缓慢起身。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "core",
        "glutes"
      ]
    },
    {
      "id": "dumbbell_thruster",
      "name": "哑铃深蹲推举",
      "aliases": [
        "dumbbell thruster"
      ],
      "category": "compound",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "三角肌"
      ],
      "equipment": [
        "哑铃"
      ],
      "difficulty": "intermediate",
      "movementPattern": "squatPress",
      "met": 6,
      "desc": "哑铃深蹲推举：以哑铃完成，主要训练股四头肌、臀大肌、三角肌。",
      "steps": [
        "双铃置肩前，双脚站稳",
        "下蹲后连续伸腿站起并推铃过头，再控制回落",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "下蹲后连续伸腿站起并推铃过头，再控制回落。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "quads",
        "shoulders"
      ]
    },
    {
      "id": "burpee",
      "name": "波比跳",
      "aliases": [
        "burpee"
      ],
      "category": "compound",
      "muscles": [
        "胸大肌",
        "股四头肌",
        "核心"
      ],
      "equipment": [
        "自重"
      ],
      "difficulty": "intermediate",
      "movementPattern": "locomotion",
      "met": 6,
      "desc": "波比跳：以自重完成，主要训练胸大肌、股四头肌、核心。",
      "steps": [
        "站立后屈膝屈髋，双手撑地",
        "后撤至平板、收腿站起，按能力选择是否跳跃",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "后撤至平板、收腿站起，按能力选择是否跳跃。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "chest",
        "compound",
        "core",
        "quads"
      ]
    },
    {
      "id": "kettlebell_clean",
      "name": "壶铃翻举",
      "aliases": [
        "kettlebell clean"
      ],
      "category": "compound",
      "muscles": [
        "臀大肌",
        "腘绳肌",
        "三角肌"
      ],
      "equipment": [
        "壶铃"
      ],
      "difficulty": "advanced",
      "movementPattern": "hinge",
      "met": 6,
      "desc": "壶铃翻举：以壶铃完成，主要训练臀大肌、腘绳肌、三角肌。",
      "steps": [
        "单手握壶铃，屈髋后摆，手腕保持中立",
        "伸髋带动壶铃贴近身体，平稳接到前架位置",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "伸髋带动壶铃贴近身体，平稳接到前架位置。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "compound",
        "glutes",
        "hamstrings",
        "shoulders"
      ]
    },
    {
      "id": "sled_push",
      "name": "雪橇推行",
      "aliases": [
        "sled push"
      ],
      "category": "compound",
      "muscles": [
        "股四头肌",
        "臀大肌",
        "小腿"
      ],
      "equipment": [
        "雪橇机"
      ],
      "difficulty": "intermediate",
      "movementPattern": "locomotion",
      "met": 6,
      "desc": "雪橇推行：以雪橇机完成，主要训练股四头肌、臀大肌、小腿。",
      "steps": [
        "双手握把，躯干与腿保持稳定推行角度",
        "交替蹬地小步前进，避免腰部下塌",
        "控制返回起始位置，保持呼吸；动作失去控制时结束本组。"
      ],
      "mistakes": [
        "使用超出可控范围的负荷或速度",
        "躯干借力、关节活动超过舒适范围"
      ],
      "tips": "交替蹬地小步前进，避免腰部下塌。初次练习先使用轻负荷。",
      "laterality": "双侧",
      "tags": [
        "calves",
        "compound",
        "glutes",
        "quads"
      ]
    }
  ],
  "FOODS": [
    {
      "name": "鸡胸肉",
      "cat": "肉类",
      "kcal": 133,
      "protein": 24.6,
      "fat": 2.5,
      "carb": 0.6,
      "gi": 0,
      "id": "food_51f141375478",
      "brand": "",
      "category": "肉类",
      "aliases": [
        "鸡胸",
        "chicken breast"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鸡腿肉(去皮)",
      "cat": "肉类",
      "kcal": 161,
      "protein": 19.1,
      "fat": 9,
      "carb": 0,
      "gi": 0,
      "id": "food_ec6206208889",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "牛里脊(瘦)",
      "cat": "肉类",
      "kcal": 133,
      "protein": 22.2,
      "fat": 4.6,
      "carb": 0,
      "gi": 0,
      "id": "food_4a8e7680c777",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西冷牛排",
      "cat": "肉类",
      "kcal": 230,
      "protein": 21,
      "fat": 16,
      "carb": 0,
      "gi": 0,
      "id": "food_886a47039446",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "猪里脊",
      "cat": "肉类",
      "kcal": 155,
      "protein": 20.2,
      "fat": 7.9,
      "carb": 0,
      "gi": 0,
      "id": "food_53fc41baa135",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "三文鱼",
      "cat": "鱼虾",
      "kcal": 208,
      "protein": 20.4,
      "fat": 13.4,
      "carb": 0,
      "gi": 0,
      "id": "food_d32ca84c89cb",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鳕鱼",
      "cat": "鱼虾",
      "kcal": 82,
      "protein": 17.8,
      "fat": 0.7,
      "carb": 0,
      "gi": 0,
      "id": "food_639f562dde3f",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "虾仁",
      "cat": "鱼虾",
      "kcal": 99,
      "protein": 20.8,
      "fat": 1.1,
      "carb": 0.3,
      "gi": 0,
      "id": "food_5d8f75f8129c",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "金枪鱼罐头(水浸)",
      "cat": "鱼虾",
      "kcal": 116,
      "protein": 25.5,
      "fat": 1,
      "carb": 0,
      "gi": 0,
      "id": "food_e00f4e306ef4",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鸡蛋",
      "cat": "蛋奶",
      "kcal": 143,
      "protein": 12.6,
      "fat": 9.5,
      "carb": 0.7,
      "gi": 0,
      "id": "food_e9f5b71a472d",
      "brand": "",
      "category": "蛋奶",
      "aliases": [
        "全蛋",
        "egg"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "蛋清",
      "cat": "蛋奶",
      "kcal": 52,
      "protein": 11,
      "fat": 0.2,
      "carb": 0.7,
      "gi": 0,
      "id": "food_73d109387663",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鸭胸肉",
      "cat": "肉类",
      "kcal": 240,
      "protein": 19,
      "fat": 18,
      "carb": 0,
      "gi": 0,
      "id": "food_aa74d64412c6",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "白米饭(熟)",
      "cat": "谷物",
      "kcal": 116,
      "protein": 2.6,
      "fat": 0.3,
      "carb": 25.9,
      "gi": 83,
      "id": "food_8beb4d195473",
      "brand": "",
      "category": "谷物",
      "aliases": [
        "米饭",
        "白饭"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "糙米饭(熟)",
      "cat": "谷物",
      "kcal": 112,
      "protein": 2.6,
      "fat": 0.9,
      "carb": 23,
      "gi": 68,
      "id": "food_4cc3235c3eb9",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "燕麦片(干)",
      "cat": "谷物",
      "kcal": 389,
      "protein": 16.9,
      "fat": 6.9,
      "carb": 66.3,
      "gi": 55,
      "id": "food_22ad2ed474ec",
      "brand": "",
      "category": "谷物",
      "aliases": [
        "燕麦",
        "oats"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "全麦面包",
      "cat": "谷物",
      "kcal": 247,
      "protein": 13,
      "fat": 3.4,
      "carb": 41,
      "gi": 69,
      "id": "food_d2283ad932b8",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "意大利面(熟)",
      "cat": "谷物",
      "kcal": 158,
      "protein": 5.8,
      "fat": 0.9,
      "carb": 31,
      "gi": 49,
      "id": "food_b75416eed66d",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "红薯",
      "cat": "薯类",
      "kcal": 86,
      "protein": 1.6,
      "fat": 0.1,
      "carb": 20.1,
      "gi": 54,
      "id": "food_acf383cef376",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "紫薯",
      "cat": "薯类",
      "kcal": 82,
      "protein": 2.3,
      "fat": 0.2,
      "carb": 18,
      "gi": 54,
      "id": "food_0dc92df77a1b",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "玉米(鲜)",
      "cat": "谷物",
      "kcal": 96,
      "protein": 3.4,
      "fat": 1.2,
      "carb": 21,
      "gi": 55,
      "id": "food_47be451e2491",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "藜麦(熟)",
      "cat": "谷物",
      "kcal": 120,
      "protein": 4.4,
      "fat": 1.9,
      "carb": 21.3,
      "gi": 53,
      "id": "food_8dac241dc326",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "荞麦面(熟)",
      "cat": "谷物",
      "kcal": 99,
      "protein": 3.4,
      "fat": 0.7,
      "carb": 20.8,
      "gi": 59,
      "id": "food_3222e921be12",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西兰花",
      "cat": "蔬菜",
      "kcal": 34,
      "protein": 2.8,
      "fat": 0.4,
      "carb": 7,
      "gi": 15,
      "id": "food_1fdb83f31be2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "菠菜",
      "cat": "蔬菜",
      "kcal": 23,
      "protein": 2.9,
      "fat": 0.4,
      "carb": 3.6,
      "gi": 15,
      "id": "food_2babb323b714",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "生菜",
      "cat": "蔬菜",
      "kcal": 15,
      "protein": 1.4,
      "fat": 0.2,
      "carb": 2.9,
      "gi": 15,
      "id": "food_9a5267bf4b3a",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "番茄",
      "cat": "蔬菜",
      "kcal": 18,
      "protein": 0.9,
      "fat": 0.2,
      "carb": 3.9,
      "gi": 15,
      "id": "food_516f6a50c4a8",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黄瓜",
      "cat": "蔬菜",
      "kcal": 15,
      "protein": 0.7,
      "fat": 0.1,
      "carb": 3.6,
      "gi": 15,
      "id": "food_e1337e15ca73",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "胡萝卜",
      "cat": "蔬菜",
      "kcal": 41,
      "protein": 0.9,
      "fat": 0.2,
      "carb": 9.6,
      "gi": 71,
      "id": "food_dd1a68cb2c35",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "白菜",
      "cat": "蔬菜",
      "kcal": 13,
      "protein": 1.5,
      "fat": 0.2,
      "carb": 2.2,
      "gi": 15,
      "id": "food_9b8bc1b61d69",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芦笋",
      "cat": "蔬菜",
      "kcal": 20,
      "protein": 2.2,
      "fat": 0.1,
      "carb": 3.9,
      "gi": 15,
      "id": "food_46c20ccccc5a",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "彩椒",
      "cat": "蔬菜",
      "kcal": 31,
      "protein": 1,
      "fat": 0.3,
      "carb": 6,
      "gi": 15,
      "id": "food_f4a262725fed",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "口蘑",
      "cat": "蔬菜",
      "kcal": 22,
      "protein": 3.1,
      "fat": 0.3,
      "carb": 3.3,
      "gi": 15,
      "id": "food_11322f63e632",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "苹果",
      "cat": "水果",
      "kcal": 52,
      "protein": 0.3,
      "fat": 0.2,
      "carb": 13.8,
      "gi": 36,
      "id": "food_50537dab7650",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "香蕉",
      "cat": "水果",
      "kcal": 89,
      "protein": 1.1,
      "fat": 0.3,
      "carb": 22.8,
      "gi": 51,
      "id": "food_dbf9f9c94fc9",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "蓝莓",
      "cat": "水果",
      "kcal": 57,
      "protein": 0.7,
      "fat": 0.3,
      "carb": 14.5,
      "gi": 53,
      "id": "food_d23250b7c80a",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "橙子",
      "cat": "水果",
      "kcal": 47,
      "protein": 0.9,
      "fat": 0.1,
      "carb": 11.8,
      "gi": 43,
      "id": "food_c8d3209aaa4a",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "草莓",
      "cat": "水果",
      "kcal": 32,
      "protein": 0.7,
      "fat": 0.3,
      "carb": 7.7,
      "gi": 40,
      "id": "food_c76f6a79f6db",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "牛油果",
      "cat": "水果",
      "kcal": 160,
      "protein": 2,
      "fat": 14.7,
      "carb": 8.5,
      "gi": 15,
      "id": "food_09f00a522e02",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "葡萄",
      "cat": "水果",
      "kcal": 69,
      "protein": 0.7,
      "fat": 0.2,
      "carb": 18.1,
      "gi": 53,
      "id": "food_ae86f9a1daef",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西瓜",
      "cat": "水果",
      "kcal": 30,
      "protein": 0.6,
      "fat": 0.2,
      "carb": 7.6,
      "gi": 72,
      "id": "food_3e3f03caa043",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "猕猴桃",
      "cat": "水果",
      "kcal": 61,
      "protein": 1.1,
      "fat": 0.5,
      "carb": 14.7,
      "gi": 52,
      "id": "food_6743bd96fb2d",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "全脂牛奶",
      "cat": "蛋奶",
      "kcal": 64,
      "protein": 3.3,
      "fat": 3.6,
      "carb": 4.8,
      "gi": 27,
      "id": "food_0a9259268d75",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "脱脂牛奶",
      "cat": "蛋奶",
      "kcal": 34,
      "protein": 3.4,
      "fat": 0.2,
      "carb": 5,
      "gi": 32,
      "id": "food_92f52a38180c",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "希腊酸奶(无糖)",
      "cat": "蛋奶",
      "kcal": 59,
      "protein": 10,
      "fat": 0.4,
      "carb": 3.6,
      "gi": 35,
      "id": "food_1a301a46a880",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "普通酸奶",
      "cat": "蛋奶",
      "kcal": 72,
      "protein": 3.5,
      "fat": 2.7,
      "carb": 8.6,
      "gi": 33,
      "id": "food_3d4c41f4bf60",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "切达奶酪",
      "cat": "蛋奶",
      "kcal": 403,
      "protein": 25,
      "fat": 33,
      "carb": 1.3,
      "gi": 0,
      "id": "food_dd6a0c5de947",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "乳清蛋白粉",
      "cat": "蛋奶",
      "kcal": 380,
      "protein": 80,
      "fat": 5,
      "carb": 8,
      "gi": 0,
      "id": "food_30622a52916e",
      "brand": "",
      "category": "蛋奶",
      "aliases": [
        "蛋白粉",
        "whey protein"
      ],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黄豆(干)",
      "cat": "豆类",
      "kcal": 359,
      "protein": 35,
      "fat": 16,
      "carb": 34,
      "gi": 18,
      "id": "food_5d9892a8f53c",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黑豆(熟)",
      "cat": "豆类",
      "kcal": 132,
      "protein": 8.9,
      "fat": 0.5,
      "carb": 23.7,
      "gi": 30,
      "id": "food_ecad2f1b84cd",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "北豆腐",
      "cat": "豆类",
      "kcal": 116,
      "protein": 12.2,
      "fat": 6.9,
      "carb": 2.6,
      "gi": 15,
      "id": "food_5847041be96e",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "无糖豆浆",
      "cat": "豆类",
      "kcal": 31,
      "protein": 3,
      "fat": 1.6,
      "carb": 1.2,
      "gi": 34,
      "id": "food_9fc2445d1607",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鹰嘴豆(熟)",
      "cat": "豆类",
      "kcal": 164,
      "protein": 8.9,
      "fat": 2.6,
      "carb": 27.4,
      "gi": 28,
      "id": "food_dc2e1c068df4",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "红豆(熟)",
      "cat": "豆类",
      "kcal": 127,
      "protein": 7.5,
      "fat": 0.5,
      "carb": 22,
      "gi": 26,
      "id": "food_48048a2f77c2",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "杏仁",
      "cat": "坚果",
      "kcal": 579,
      "protein": 21.2,
      "fat": 49.9,
      "carb": 21.6,
      "gi": 15,
      "id": "food_423d45adea4b",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "核桃",
      "cat": "坚果",
      "kcal": 654,
      "protein": 15.2,
      "fat": 65.2,
      "carb": 13.7,
      "gi": 15,
      "id": "food_c7a897444f3d",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "花生",
      "cat": "坚果",
      "kcal": 567,
      "protein": 25.8,
      "fat": 49.2,
      "carb": 16.1,
      "gi": 14,
      "id": "food_7739ff2ac7a8",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "腰果",
      "cat": "坚果",
      "kcal": 553,
      "protein": 18.2,
      "fat": 43.9,
      "carb": 30.2,
      "gi": 22,
      "id": "food_29ffcbc62ecb",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "橄榄油",
      "cat": "油脂",
      "kcal": 884,
      "protein": 0,
      "fat": 100,
      "carb": 0,
      "gi": 0,
      "id": "food_69fb53686970",
      "brand": "",
      "category": "油脂",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "花生酱",
      "cat": "坚果",
      "kcal": 588,
      "protein": 25,
      "fat": 50,
      "carb": 20,
      "gi": 14,
      "id": "food_0265340a04a1",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "火鸡胸肉",
      "cat": "肉类",
      "kcal": 114,
      "protein": 23.7,
      "fat": 1.5,
      "carb": 0,
      "gi": null,
      "id": "food_ea96c272031c",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "瘦牛肉",
      "cat": "肉类",
      "kcal": 125,
      "protein": 20.2,
      "fat": 4.2,
      "carb": 0,
      "gi": null,
      "id": "food_bb53090ec0a3",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "瘦羊肉",
      "cat": "肉类",
      "kcal": 143,
      "protein": 20.6,
      "fat": 6.5,
      "carb": 0,
      "gi": null,
      "id": "food_9fedaf434317",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "兔肉",
      "cat": "肉类",
      "kcal": 102,
      "protein": 19.7,
      "fat": 2.2,
      "carb": 0,
      "gi": null,
      "id": "food_560299c45a86",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "猪肝",
      "cat": "肉类",
      "kcal": 129,
      "protein": 19.3,
      "fat": 3.5,
      "carb": 5,
      "gi": null,
      "id": "food_17f65ff32314",
      "brand": "",
      "category": "肉类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鲈鱼",
      "cat": "鱼虾",
      "kcal": 105,
      "protein": 18.6,
      "fat": 3.4,
      "carb": 0,
      "gi": null,
      "id": "food_5653c77d3e94",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鲫鱼",
      "cat": "鱼虾",
      "kcal": 108,
      "protein": 17.1,
      "fat": 2.7,
      "carb": 3.8,
      "gi": null,
      "id": "food_661c6c319c24",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "带鱼",
      "cat": "鱼虾",
      "kcal": 127,
      "protein": 17.7,
      "fat": 4.9,
      "carb": 3.1,
      "gi": null,
      "id": "food_aedf436d605c",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鲭鱼",
      "cat": "鱼虾",
      "kcal": 205,
      "protein": 18.6,
      "fat": 13.9,
      "carb": 0,
      "gi": null,
      "id": "food_6f92c09b1a32",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "扇贝",
      "cat": "鱼虾",
      "kcal": 69,
      "protein": 12.1,
      "fat": 0.6,
      "carb": 3.2,
      "gi": null,
      "id": "food_00e049869898",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "蛤蜊",
      "cat": "鱼虾",
      "kcal": 62,
      "protein": 10.1,
      "fat": 1.1,
      "carb": 2.8,
      "gi": null,
      "id": "food_195f7932237e",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鱿鱼",
      "cat": "鱼虾",
      "kcal": 92,
      "protein": 15.6,
      "fat": 1.4,
      "carb": 3.1,
      "gi": null,
      "id": "food_6e80048a5ad8",
      "brand": "",
      "category": "鱼虾",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "鹌鹑蛋",
      "cat": "蛋奶",
      "kcal": 158,
      "protein": 13.1,
      "fat": 11.1,
      "carb": 0.4,
      "gi": null,
      "id": "food_999a17e34b6e",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "低脂牛奶",
      "cat": "蛋奶",
      "kcal": 46,
      "protein": 3.4,
      "fat": 1.5,
      "carb": 4.9,
      "gi": null,
      "id": "food_7c2a1ad2910b",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "无糖酸奶",
      "cat": "蛋奶",
      "kcal": 63,
      "protein": 5.3,
      "fat": 1.6,
      "carb": 7,
      "gi": null,
      "id": "food_eef87ca850cf",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "茅屋奶酪",
      "cat": "蛋奶",
      "kcal": 98,
      "protein": 11.1,
      "fat": 4.3,
      "carb": 3.4,
      "gi": null,
      "id": "food_cb22f239c5cf",
      "brand": "",
      "category": "蛋奶",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "小米粥(熟)",
      "cat": "谷物",
      "kcal": 46,
      "protein": 1.4,
      "fat": 0.7,
      "carb": 8.4,
      "gi": null,
      "id": "food_2bf4a0fd29c0",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "大米(干)",
      "cat": "谷物",
      "kcal": 346,
      "protein": 7.4,
      "fat": 0.8,
      "carb": 77.9,
      "gi": null,
      "id": "food_b8cba4467d9e",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黑米(干)",
      "cat": "谷物",
      "kcal": 341,
      "protein": 9.4,
      "fat": 2.5,
      "carb": 72.2,
      "gi": null,
      "id": "food_459eefd52ec2",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "大麦(熟)",
      "cat": "谷物",
      "kcal": 123,
      "protein": 2.3,
      "fat": 0.4,
      "carb": 28.2,
      "gi": null,
      "id": "food_df3d75af4697",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "馒头",
      "cat": "谷物",
      "kcal": 223,
      "protein": 7,
      "fat": 1.1,
      "carb": 47,
      "gi": null,
      "id": "food_04e983910437",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "全麦意面(熟)",
      "cat": "谷物",
      "kcal": 149,
      "protein": 6,
      "fat": 1.7,
      "carb": 30.1,
      "gi": null,
      "id": "food_1de82cf3de9e",
      "brand": "",
      "category": "谷物",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "土豆",
      "cat": "薯类",
      "kcal": 77,
      "protein": 2,
      "fat": 0.1,
      "carb": 17.5,
      "gi": null,
      "id": "food_a64a92c86530",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "山药",
      "cat": "薯类",
      "kcal": 56,
      "protein": 1.9,
      "fat": 0.2,
      "carb": 12.4,
      "gi": null,
      "id": "food_714304a5fe9d",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芋头",
      "cat": "薯类",
      "kcal": 112,
      "protein": 1.5,
      "fat": 0.2,
      "carb": 26.5,
      "gi": null,
      "id": "food_a25211ce5c81",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "木薯",
      "cat": "薯类",
      "kcal": 160,
      "protein": 1.4,
      "fat": 0.3,
      "carb": 38.1,
      "gi": null,
      "id": "food_d639199126c2",
      "brand": "",
      "category": "薯类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "毛豆",
      "cat": "豆类",
      "kcal": 131,
      "protein": 13.1,
      "fat": 5,
      "carb": 10.5,
      "gi": null,
      "id": "food_a620962e36d0",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "绿豆(熟)",
      "cat": "豆类",
      "kcal": 105,
      "protein": 7,
      "fat": 0.4,
      "carb": 19.2,
      "gi": null,
      "id": "food_bfdb99c02724",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "扁豆(熟)",
      "cat": "豆类",
      "kcal": 116,
      "protein": 9,
      "fat": 0.4,
      "carb": 20.1,
      "gi": null,
      "id": "food_b0065b7bffb4",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "豌豆",
      "cat": "豆类",
      "kcal": 81,
      "protein": 5.4,
      "fat": 0.4,
      "carb": 14.5,
      "gi": null,
      "id": "food_3d6229ff65c6",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "豆腐干",
      "cat": "豆类",
      "kcal": 140,
      "protein": 16.2,
      "fat": 3.6,
      "carb": 11.5,
      "gi": null,
      "id": "food_90fb0af42060",
      "brand": "",
      "category": "豆类",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "花菜",
      "cat": "蔬菜",
      "kcal": 25,
      "protein": 1.9,
      "fat": 0.3,
      "carb": 5,
      "gi": null,
      "id": "food_467c55eef522",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "茄子",
      "cat": "蔬菜",
      "kcal": 25,
      "protein": 1,
      "fat": 0.2,
      "carb": 6,
      "gi": null,
      "id": "food_8ac7c1f48e31",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "西葫芦",
      "cat": "蔬菜",
      "kcal": 17,
      "protein": 1.2,
      "fat": 0.3,
      "carb": 3.1,
      "gi": null,
      "id": "food_e9666eb42587",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "南瓜",
      "cat": "蔬菜",
      "kcal": 26,
      "protein": 1,
      "fat": 0.1,
      "carb": 6.5,
      "gi": null,
      "id": "food_85bc0873e245",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "洋葱",
      "cat": "蔬菜",
      "kcal": 40,
      "protein": 1.1,
      "fat": 0.1,
      "carb": 9.3,
      "gi": null,
      "id": "food_edc855182ce2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芹菜",
      "cat": "蔬菜",
      "kcal": 16,
      "protein": 0.7,
      "fat": 0.2,
      "carb": 3,
      "gi": null,
      "id": "food_c1755c51d3a2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "冬瓜",
      "cat": "蔬菜",
      "kcal": 13,
      "protein": 0.4,
      "fat": 0.2,
      "carb": 3,
      "gi": null,
      "id": "food_4404ea8981d2",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "莲藕",
      "cat": "蔬菜",
      "kcal": 74,
      "protein": 2.6,
      "fat": 0.1,
      "carb": 17.2,
      "gi": null,
      "id": "food_74a93f5f0f95",
      "brand": "",
      "category": "蔬菜",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "梨",
      "cat": "水果",
      "kcal": 57,
      "protein": 0.4,
      "fat": 0.1,
      "carb": 15.2,
      "gi": null,
      "id": "food_a5a79a17f934",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "桃",
      "cat": "水果",
      "kcal": 39,
      "protein": 0.9,
      "fat": 0.3,
      "carb": 9.5,
      "gi": null,
      "id": "food_8555b2922fe3",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "芒果",
      "cat": "水果",
      "kcal": 60,
      "protein": 0.8,
      "fat": 0.4,
      "carb": 15,
      "gi": null,
      "id": "food_b8246e4fd893",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "菠萝",
      "cat": "水果",
      "kcal": 50,
      "protein": 0.5,
      "fat": 0.1,
      "carb": 13.1,
      "gi": null,
      "id": "food_1e93a661562a",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "樱桃",
      "cat": "水果",
      "kcal": 63,
      "protein": 1.1,
      "fat": 0.2,
      "carb": 16,
      "gi": null,
      "id": "food_9f1aa4ba71d8",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "火龙果",
      "cat": "水果",
      "kcal": 57,
      "protein": 1.1,
      "fat": 0.2,
      "carb": 13,
      "gi": null,
      "id": "food_6c4d7161654b",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "柚子",
      "cat": "水果",
      "kcal": 38,
      "protein": 0.8,
      "fat": 0,
      "carb": 9.6,
      "gi": null,
      "id": "food_9ef8346f7304",
      "brand": "",
      "category": "水果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "开心果",
      "cat": "坚果",
      "kcal": 562,
      "protein": 20.2,
      "fat": 45.3,
      "carb": 27.2,
      "gi": null,
      "id": "food_538adc2ecfda",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "南瓜籽",
      "cat": "坚果",
      "kcal": 559,
      "protein": 30.2,
      "fat": 49,
      "carb": 10.7,
      "gi": null,
      "id": "food_569ab93bc969",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "奇亚籽",
      "cat": "坚果",
      "kcal": 486,
      "protein": 16.5,
      "fat": 30.7,
      "carb": 42.1,
      "gi": null,
      "id": "food_bfb80c738b56",
      "brand": "",
      "category": "坚果",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "菜籽油",
      "cat": "油脂",
      "kcal": 884,
      "protein": 0,
      "fat": 100,
      "carb": 0,
      "gi": null,
      "id": "food_aa59aa8e8a7e",
      "brand": "",
      "category": "油脂",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    },
    {
      "name": "黑巧克力",
      "cat": "其他",
      "kcal": 598,
      "protein": 7.8,
      "fat": 42.6,
      "carb": 45.9,
      "gi": null,
      "id": "food_5bd05b5a44ec",
      "brand": "",
      "category": "其他",
      "aliases": [],
      "servingMode": "per100g",
      "servingWeight": null,
      "custom": false
    }
  ],
  "CARDIO_TYPES": [
    {
      "id": "running",
      "name": "跑步 (Running)",
      "met": {
        "low": 7,
        "moderate": 9.8,
        "high": 12.5
      }
    },
    {
      "id": "cycling",
      "name": "骑行 (Cycling)",
      "met": {
        "low": 4,
        "moderate": 7,
        "high": 10
      }
    },
    {
      "id": "swimming",
      "name": "游泳 (Swimming)",
      "met": {
        "low": 5,
        "moderate": 7,
        "high": 10
      }
    },
    {
      "id": "jump_rope",
      "name": "跳绳 (Jump Rope)",
      "met": {
        "low": 8.8,
        "moderate": 11,
        "high": 12.3
      }
    },
    {
      "id": "elliptical",
      "name": "椭圆机 (Elliptical)",
      "met": {
        "low": 4.6,
        "moderate": 6.5,
        "high": 8.5
      }
    },
    {
      "id": "rowing",
      "name": "划船机 (Rowing)",
      "met": {
        "low": 4.8,
        "moderate": 7,
        "high": 10
      }
    },
    {
      "id": "hiit",
      "name": "HIIT (高强度间歇)",
      "met": {
        "low": 6,
        "moderate": 8,
        "high": 12
      }
    },
    {
      "id": "walking",
      "name": "快走 (Brisk Walking)",
      "met": {
        "low": 3.5,
        "moderate": 4.5,
        "high": 6
      }
    },
    {
      "id": "yoga",
      "name": "瑜伽 (Yoga)",
      "met": {
        "low": 2,
        "moderate": 3,
        "high": 4.5
      }
    },
    {
      "id": "stair",
      "name": "爬楼梯 (Stair Climber)",
      "met": {
        "low": 5,
        "moderate": 8,
        "high": 11
      }
    },
    {
      "id": "boxing",
      "name": "拳击 (Boxing)",
      "met": {
        "low": 5.5,
        "moderate": 8,
        "high": 11
      }
    }
  ],
  "CARDIO_COACH": {
    "running": {
      "name": "跑步",
      "tech": "落地时脚掌中前部先着地，步频维持在170-180步/分，躯干微前倾、手臂前后摆动。",
      "err": "步幅过大导致膝盖冲击、含胸驼背、手臂左右横摆。",
      "pro": "每周跑量增幅不超过10%，配合力量训练可显著降低受伤率。"
    },
    "cycling": {
      "name": "骑行",
      "tech": "坐垫高度使踏板最低点时膝盖微屈约25-35度，踩踏保持圆形轨迹。",
      "err": "坐垫过低导致膝盖压力大、踩踏只有下压没有提拉。",
      "pro": "踏频保持80-90rpm，配合锁鞋能提升踩踏效率。"
    },
    "swimming": {
      "name": "游泳",
      "tech": "自由泳高肘抱水，身体保持流线型，换气时头部随身体转动而非单独抬颈。",
      "err": "抬头换气破坏流线、划水时手掌过度张开。",
      "pro": "先用浮板分解练习打腿与划手，再组合整套动作。"
    },
    "jump_rope": {
      "name": "跳绳",
      "tech": "手腕发力摇绳，膝盖微屈、前脚掌轻落地，绳长以脚踩绳后手柄到腋下为宜。",
      "err": "用大臂摇绳、跳得过高消耗过大、全脚掌砸地。",
      "pro": "初学者可采用30秒跳+30秒休息的间歇方式逐步提升。"
    },
    "elliptical": {
      "name": "椭圆机",
      "tech": "全程脚掌贴实踏板，躯干直立、核心收紧，推拉手柄与腿部动作同步。",
      "err": "身体前倾压在扶手上、只用腿不用手臂。",
      "pro": "增大阻力并提高踏频，比单纯延长时长更有效。"
    },
    "rowing": {
      "name": "划船机",
      "tech": "顺序为蹬腿→后仰→拉手，回程为手→身→腿，核心全程参与。",
      "err": "先拉手后蹬腿、回程顺序颠倒、弓背。",
      "pro": "把60%的力量放在蹬腿阶段，能显著提升功率。"
    },
    "hiit": {
      "name": "HIIT",
      "tech": "高强度段达到最大心率的85%-95%，低强度段降至60%-70%进行主动恢复。",
      "err": "高强度段强度不够、组间休息过长导致训练效果打折。",
      "pro": "每周HIIT不超过3次，避免与下肢大重量训练安排在同一天。"
    },
    "walking": {
      "name": "快走",
      "tech": "步幅自然加大，手臂配合摆动，速度以微微气喘但能说话为宜。",
      "err": "速度过慢达不到强度、低头看手机。",
      "pro": "可在跑步机上设置5%-8%坡度，燃脂效率明显提升。"
    },
    "yoga": {
      "name": "瑜伽",
      "tech": "呼吸与动作同步，每个体式保持5-8个呼吸，脊柱保持延展。",
      "err": "屏气发力、强行进入超出柔韧范围的体式。",
      "pro": "早晨练力量型流瑜伽，睡前练舒缓型阴瑜伽。"
    },
    "stair": {
      "name": "爬楼梯",
      "tech": "全脚掌踩实台阶，重心微前倾，手臂自然摆动或扶扶手辅助。",
      "err": "只用脚尖踩台阶、下楼梯速度过快伤膝。",
      "pro": "上楼发力、下楼坐电梯，可有效保护膝关节。"
    },
    "boxing": {
      "name": "拳击",
      "tech": "出拳时转髋送肩，收拳回到下巴与肋骨位置，全程保持移动与防守意识。",
      "err": "只用手臂出拳不转髋、出拳后不回收护头。",
      "pro": "从空击与沙袋开始，重点体会转髋发力的链条。"
    }
  },
  "PRESET_PLANS": {
    "push": [
      {
        "id": "bench_press",
        "sets": 4,
        "reps": 8,
        "weight": 60
      },
      {
        "id": "incline_dumbbell",
        "sets": 3,
        "reps": 10,
        "weight": 22
      },
      {
        "id": "dumbbell_shoulder_press",
        "sets": 4,
        "reps": 10,
        "weight": 18
      },
      {
        "id": "lateral_raise",
        "sets": 4,
        "reps": 15,
        "weight": 8
      },
      {
        "id": "tricep_pushdown",
        "sets": 4,
        "reps": 12,
        "weight": 25
      },
      {
        "id": "overhead_ext",
        "sets": 3,
        "reps": 12,
        "weight": 20
      }
    ],
    "pull": [
      {
        "id": "pullup",
        "sets": 4,
        "reps": 8,
        "weight": 0
      },
      {
        "id": "barbell_row",
        "sets": 4,
        "reps": 8,
        "weight": 55
      },
      {
        "id": "lat_pulldown",
        "sets": 3,
        "reps": 12,
        "weight": 50
      },
      {
        "id": "seated_row",
        "sets": 3,
        "reps": 12,
        "weight": 45
      },
      {
        "id": "face_pull",
        "sets": 3,
        "reps": 15,
        "weight": 20
      },
      {
        "id": "barbell_curl",
        "sets": 4,
        "reps": 10,
        "weight": 25
      },
      {
        "id": "hammer_curl",
        "sets": 3,
        "reps": 12,
        "weight": 12
      }
    ],
    "legs": [
      {
        "id": "squat",
        "sets": 5,
        "reps": 6,
        "weight": 80
      },
      {
        "id": "hack_squat",
        "sets": 4,
        "reps": 10,
        "weight": 100
      },
      {
        "id": "rdl",
        "sets": 4,
        "reps": 8,
        "weight": 70
      },
      {
        "id": "leg_press",
        "sets": 4,
        "reps": 12,
        "weight": 140
      },
      {
        "id": "leg_curl",
        "sets": 3,
        "reps": 12,
        "weight": 40
      },
      {
        "id": "hip_thrust",
        "sets": 4,
        "reps": 12,
        "weight": 60
      },
      {
        "id": "hip_adduction",
        "sets": 4,
        "reps": 15,
        "weight": 40
      },
      {
        "id": "hip_abduction",
        "sets": 4,
        "reps": 15,
        "weight": 40
      },
      {
        "id": "calf_raise",
        "sets": 4,
        "reps": 15,
        "weight": 60
      }
    ],
    "shoulders": [
      {
        "id": "ohp",
        "sets": 4,
        "reps": 8,
        "weight": 40
      },
      {
        "id": "dumbbell_shoulder_press",
        "sets": 3,
        "reps": 10,
        "weight": 18
      },
      {
        "id": "lateral_raise",
        "sets": 4,
        "reps": 15,
        "weight": 8
      },
      {
        "id": "rear_delt_fly",
        "sets": 4,
        "reps": 15,
        "weight": 8
      },
      {
        "id": "face_pull",
        "sets": 3,
        "reps": 15,
        "weight": 20
      },
      {
        "id": "shrug",
        "sets": 4,
        "reps": 12,
        "weight": 60
      }
    ],
    "fullbody": [
      {
        "id": "squat",
        "sets": 3,
        "reps": 8,
        "weight": 60
      },
      {
        "id": "bench_press",
        "sets": 3,
        "reps": 8,
        "weight": 55
      },
      {
        "id": "barbell_row",
        "sets": 3,
        "reps": 10,
        "weight": 50
      },
      {
        "id": "ohp",
        "sets": 3,
        "reps": 10,
        "weight": 35
      },
      {
        "id": "plank",
        "sets": 3,
        "reps": 60,
        "weight": 0
      },
      {
        "id": "crunch",
        "sets": 3,
        "reps": 20,
        "weight": 0
      }
    ]
  },
  "FOOD_CATEGORIES": [
    "肉类",
    "鱼虾",
    "蛋奶",
    "谷物",
    "薯类",
    "豆类",
    "蔬菜",
    "水果",
    "坚果",
    "油脂",
    "其他"
  ],
  "EXERCISE_FILTERS": [
    [
      "all",
      "全部"
    ],
    [
      "chest",
      "胸"
    ],
    [
      "back",
      "背"
    ],
    [
      "shoulders",
      "肩"
    ],
    [
      "legs",
      "腿"
    ],
    [
      "quads",
      "股四头"
    ],
    [
      "hamstrings",
      "腘绳肌"
    ],
    [
      "glutes",
      "臀"
    ],
    [
      "biceps",
      "二头"
    ],
    [
      "triceps",
      "三头"
    ],
    [
      "forearms",
      "前臂"
    ],
    [
      "core",
      "核心"
    ],
    [
      "calves",
      "小腿"
    ],
    [
      "compound",
      "复合动作"
    ]
  ]
};
