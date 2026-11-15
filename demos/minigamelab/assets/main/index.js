System.register("chunks:///_virtual/active-clock.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2d5d0LCbB1BE5wg5N7y3qWe", "active-clock", undefined);
      /** Shared foreground time for countdowns, scores and trial durations. Wall timestamps stay separate. */
      var ActiveClock = exports('ActiveClock', /*#__PURE__*/function () {
        function ActiveClock(source) {
          var _this = this;
          this.total = 0;
          this.last = void 0;
          this.stopped = false;
          this.source = void 0;
          this.now = function () {
            var current = _this.source();
            if (!_this.stopped) _this.total += Math.max(0, current - _this.last);
            _this.last = current;
            return _this.total;
          };
          this.source = source;
          this.last = source();
        }
        var _proto = ActiveClock.prototype;
        _proto.pause = function pause() {
          this.now();
          this.stopped = true;
        };
        _proto.resume = function resume() {
          if (!this.stopped) return;
          this.last = this.source();
          this.stopped = false;
        };
        _createClass(ActiveClock, [{
          key: "paused",
          get: function get() {
            return this.stopped;
          }
        }]);
        return ActiveClock;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/arrows.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _extends, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('parseLevels', parseLevels);
      cclegacy._RF.push({}, "1472bFO3MNA/6tHmjtcWd1i", "arrows", undefined);
      var offsets = exports('offsets', Object.freeze({
        up: [-1, 0],
        down: [1, 0],
        left: [0, -1],
        right: [0, 1]
      }));
      var symbols = {
        '^': 'up',
        v: 'down',
        '<': 'left',
        '>': 'right'
      };

      /** JSON rows are authored top-to-bottom; '.' is an empty cell. */
      function parseLevels(data) {
        if (!Array.isArray(data) || data.length === 0) throw new Error('关卡列表不能为空');
        var ids = new Set();
        return Object.freeze(data.map(function (item) {
          if (!item || typeof item !== 'object') throw new Error('关卡必须是对象');
          var _ref = item,
            id = _ref.id,
            name = _ref.name,
            hint = _ref.hint,
            rows = _ref.rows;
          if (typeof id !== 'string' || !id || ids.has(id)) throw new Error('关卡 ID 缺失或重复');
          if (typeof name !== 'string' || typeof hint !== 'string') throw new Error('关卡说明缺失');
          if (!Array.isArray(rows) || rows.length < 2 || rows.length > 8 || rows.some(function (row) {
            return typeof row !== 'string';
          })) throw new Error('棋盘高度应为 2–8');
          var width = rows[0].length;
          if (width < 2 || width > 8 || rows.some(function (row) {
            return row.length !== width;
          })) throw new Error('棋盘宽度不一致或越界');
          var arrows = [];
          rows.forEach(function (row, r) {
            return row.split('').forEach(function (symbol, col) {
              if (symbol === '.') return;
              var direction = symbols[symbol];
              if (!direction) throw new Error("\u672A\u77E5\u68CB\u76D8\u5B57\u7B26 " + symbol);
              arrows.push(Object.freeze({
                id: r + ":" + col,
                row: r,
                col: col,
                direction: direction
              }));
            });
          });
          if (!arrows.length) throw new Error('关卡必须包含箭头');
          ids.add(id);
          return Object.freeze({
            id: id,
            name: name,
            hint: hint,
            width: width,
            height: rows.length,
            arrows: Object.freeze(arrows)
          });
        }));
      }
      /** Pure state machine. An arrow remains occupied until its animation is committed. */
      var ArrowGame = exports('ArrowGame', /*#__PURE__*/function () {
        function ArrowGame(level) {
          this.remaining = void 0;
          this.history = [];
          this.serial = 0;
          this.pending = null;
          this.level = void 0;
          this.level = Object.freeze(_extends({}, level, {
            arrows: Object.freeze(level.arrows.map(function (a) {
              return Object.freeze(_extends({}, a));
            }))
          }));
          this.remaining = new Set(this.level.arrows.map(function (a) {
            return a.id;
          }));
        }
        var _proto = ArrowGame.prototype;
        _proto.blocker = function blocker(id) {
          var _this = this;
          var arrow = this.arrows.find(function (a) {
            return a.id === id;
          });
          if (!arrow) return null;
          var _offsets$arrow$direct = offsets[arrow.direction],
            dr = _offsets$arrow$direct[0],
            dc = _offsets$arrow$direct[1];
          var _loop = function _loop(r, c) {
              var found = _this.arrows.find(function (a) {
                return a.row === r && a.col === c;
              });
              if (found) return {
                v: found.id
              };
            },
            _ret;
          for (var r = arrow.row + dr, c = arrow.col + dc; r >= 0 && c >= 0 && r < this.level.height && c < this.level.width; r += dr, c += dc) {
            _ret = _loop(r, c);
            if (_ret) return _ret.v;
          }
          return null;
        };
        _proto.beginMove = function beginMove(id) {
          if (this.busy) return {
            ok: false,
            reason: 'busy'
          };
          if (this.won) return {
            ok: false,
            reason: 'won'
          };
          var arrow = this.arrows.find(function (a) {
            return a.id === id;
          });
          if (!arrow) return {
            ok: false,
            reason: 'missing'
          };
          var blocker = this.blocker(id);
          if (blocker) return {
            ok: false,
            reason: 'blocked',
            blocker: blocker
          };
          this.pending = {
            id: id,
            token: ++this.serial
          };
          return {
            ok: true,
            token: this.pending.token,
            arrow: arrow
          };
        };
        _proto.finishMove = function finishMove(token) {
          if (!this.pending || this.pending.token !== token) return false;
          this.remaining["delete"](this.pending.id);
          this.history.push(this.pending.id);
          this.pending = null;
          return true;
        };
        _proto.undo = function undo() {
          if (!this.canUndo) return false;
          this.remaining.add(this.history.pop());
          return true;
        };
        _proto.restart = function restart() {
          ++this.serial; // Invalidates callbacks from an earlier animation.
          this.pending = null;
          this.history = [];
          this.remaining = new Set(this.level.arrows.map(function (a) {
            return a.id;
          }));
        };
        _createClass(ArrowGame, [{
          key: "arrows",
          get: function get() {
            var _this2 = this;
            return this.level.arrows.filter(function (a) {
              return _this2.remaining.has(a.id);
            });
          }
        }, {
          key: "steps",
          get: function get() {
            return this.history.length;
          }
        }, {
          key: "busy",
          get: function get() {
            return this.pending !== null;
          }
        }, {
          key: "won",
          get: function get() {
            return this.remaining.size === 0;
          }
        }, {
          key: "canUndo",
          get: function get() {
            return !this.busy && this.history.length > 0;
          }
        }, {
          key: "stuck",
          get: function get() {
            var _this3 = this;
            return !this.won && !this.busy && this.arrows.every(function (a) {
              return _this3.blocker(a.id) !== null;
            });
          }
        }]);
        return ArrowGame;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/bead-viewport.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('clampBeadPan', clampBeadPan);
      cclegacy._RF.push({}, "ae3bcpBJPtCy4Cb1Y6dFvAG", "bead-viewport", undefined);
      /** Board coordinates stay in a 560-unit square inside the 580-unit viewport. */
      function clampBeadPan(x, y, zoom) {
        if (![x, y, zoom].every(Number.isFinite) || zoom < 1) throw Error('Invalid bead viewport');
        var limit = Math.max(0, (560 * zoom - 580) / 2);
        if (!limit) return {
          x: 0,
          y: 0
        };
        return {
          x: Math.max(-limit, Math.min(limit, x)),
          y: Math.max(-limit, Math.min(limit, y))
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/beads.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createForOfIteratorHelperLoose, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('parseBeadLevels', parseBeadLevels);
      cclegacy._RF.push({}, "7cf02lqRzRIeYkeuXJB47Rr", "beads", undefined);
      function parseBeadLevels(value) {
        if (!Array.isArray(value) || !value.length) throw Error('没有拼豆图案');
        var ids = new Set();
        var _loop = function _loop() {
          var level = _step.value;
          if (!level || typeof level.id !== 'string' || !level.id || ids.has(level.id) || typeof level.name !== 'string' || !level.name) throw Error('图案名称或 ID 错误');
          ids.add(level.id);
          if ([12, 16, 24, 32].indexOf(level.size) < 0) throw Error('图案尺寸必须为 12、16、24 或 32');
          if (!Array.isArray(level.palette) || level.palette.length < 1 || level.palette.length > 6 || level.palette.some(function (c) {
            return !c || typeof c.name !== 'string' || !c.name || typeof c.hex !== 'string' || !/^#[0-9a-fA-F]{6}$/.test(c.hex);
          })) throw Error('图案颜色错误');
          if (!Array.isArray(level.pixels) || level.pixels.length !== level.size || level.pixels.some(function (row) {
            return typeof row !== 'string' || row.length !== level.size || row.split('').some(function (c) {
              return !/^[0-6]$/.test(c) || Number(c) > level.palette.length;
            });
          })) throw Error('像素数据错误');
          var _loop2 = function _loop2(color) {
            if (!level.pixels.some(function (row) {
              return row.indexOf(String(color)) >= 0;
            })) throw Error('托盘存在未使用的颜色');
          };
          for (var color = 1; color <= level.palette.length; color++) {
            _loop2(color);
          }
        };
        for (var _iterator = _createForOfIteratorHelperLoose(value), _step; !(_step = _iterator()).done;) {
          _loop();
        }
        return JSON.parse(JSON.stringify(value));
      }
      var BeadGame = exports('BeadGame', /*#__PURE__*/function () {
        function BeadGame(level, now) {
          if (now === void 0) {
            now = function now() {
              return Date.now();
            };
          }
          this.level = void 0;
          this.painted = new Set();
          this.regions = new Map();
          this.regionSizes = [];
          this.regionFilled = [];
          this.streak = 0;
          this.misses = 0;
          this.now = void 0;
          this.startedAt = void 0;
          this.finishedAt = null;
          this.now = now;
          this.level = parseBeadLevels([level])[0];
          this.startedAt = this.now();
          var n = this.level.size;
          for (var index = 0; index < n * n; index++) {
            if (!this.target(index) || this.regions.has(index)) continue;
            var region = this.regionSizes.length,
              queue = [index];
            this.regions.set(index, region);
            for (var i = 0; i < queue.length; i++) {
              var cell = queue[i],
                row = Math.floor(cell / n),
                col = cell % n;
              for (var _i = 0, _arr = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]; _i < _arr.length; _i++) {
                var _arr$_i = _arr[_i],
                  r = _arr$_i[0],
                  c = _arr$_i[1];
                var next = r * n + c;
                if (r < 0 || c < 0 || r >= n || c >= n || this.regions.has(next) || this.target(next) !== this.target(index)) continue;
                this.regions.set(next, region);
                queue.push(next);
              }
            }
            this.regionSizes.push(queue.length);
            this.regionFilled.push(0);
          }
        }
        var _proto = BeadGame.prototype;
        _proto.target = function target(index) {
          return Number(this.level.pixels[Math.floor(index / this.level.size)][index % this.level.size]);
        };
        _proto.isFilled = function isFilled(row, col) {
          return Number.isInteger(row) && Number.isInteger(col) && row >= 0 && col >= 0 && row < this.level.size && col < this.level.size && this.painted.has(row * this.level.size + col);
        };
        _proto.remaining = function remaining(color) {
          var count = 0;
          for (var i = 0; i < Math.pow(this.level.size, 2); i++) if (this.target(i) === color && !this.painted.has(i)) ++count;
          return count;
        };
        _proto.paint = function paint(row, col, color) {
          var _this = this;
          var result = function result(status, regionCompleted, colorCompleted) {
            if (regionCompleted === void 0) {
              regionCompleted = false;
            }
            if (colorCompleted === void 0) {
              colorCompleted = false;
            }
            return {
              status: status,
              regionCompleted: regionCompleted,
              colorCompleted: colorCompleted,
              combo: _this.streak
            };
          };
          if (!Number.isInteger(row) || !Number.isInteger(col) || row < 0 || col < 0 || row >= this.level.size || col >= this.level.size) return result('outside');
          if (this.won) return result('won');
          var index = row * this.level.size + col,
            target = this.target(index);
          if (!target) return result('blank');
          if (this.painted.has(index)) return result('already');
          if (target !== color) {
            ++this.misses;
            this.streak = 0;
            return result('wrong');
          }
          this.painted.add(index);
          ++this.streak;
          var region = this.regions.get(index);
          ++this.regionFilled[region];
          if (this.won) this.finishedAt = Math.max(this.startedAt, this.now());
          return result('filled', this.regionFilled[region] === this.regionSizes[region], this.remaining(color) === 0);
        };
        _proto.restart = function restart() {
          this.painted.clear();
          this.regionFilled.fill(0);
          this.streak = 0;
          this.misses = 0;
          this.startedAt = this.now();
          this.finishedAt = null;
        };
        _createClass(BeadGame, [{
          key: "total",
          get: function get() {
            return this.regions.size;
          }
        }, {
          key: "filled",
          get: function get() {
            return this.painted.size;
          }
        }, {
          key: "won",
          get: function get() {
            return this.filled === this.total;
          }
        }, {
          key: "combo",
          get: function get() {
            return this.streak;
          }
        }, {
          key: "errors",
          get: function get() {
            return this.misses;
          }
        }, {
          key: "elapsedMilliseconds",
          get: function get() {
            return Math.max(0, (this.finishedAt === null ? this.now() : this.finishedAt) - this.startedAt);
          }
        }, {
          key: "referenceSeconds",
          get: function get() {
            return this.total * .6 + this.level.palette.length * 3;
          }
        }, {
          key: "score",
          get: function get() {
            return this.won ? Math.max(1, Math.round(10000 * this.referenceSeconds / (this.referenceSeconds + this.elapsedMilliseconds / 1000))) : 0;
          }
        }, {
          key: "completedRegions",
          get: function get() {
            var _this2 = this;
            return this.regionFilled.filter(function (count, i) {
              return count === _this2.regionSizes[i];
            }).length;
          }
        }]);
        return BeadGame;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BeadView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './player-data.ts', './beads.ts', './bead-viewport.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, resources, JsonAsset, Label, Mask, Graphics, Node, Color, UITransform, Vec3, BlockInputEvents, Component, noPlayHooks, parseBeadLevels, BeadGame, clampBeadPan;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      Label = module.Label;
      Mask = module.Mask;
      Graphics = module.Graphics;
      Node = module.Node;
      Color = module.Color;
      UITransform = module.UITransform;
      Vec3 = module.Vec3;
      BlockInputEvents = module.BlockInputEvents;
      Component = module.Component;
    }, function (module) {
      noPlayHooks = module.noPlayHooks;
    }, function (module) {
      parseBeadLevels = module.parseBeadLevels;
      BeadGame = module.BeadGame;
    }, function (module) {
      clampBeadPan = module.clampBeadPan;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ef5298NA/FM6YaMohaql4Xv", "BeadView", undefined);
      var ccclass = _decorator.ccclass;
      var paper = '#F7F3E9',
        ink = '#263F3B',
        muted = '#7A857D';
      var BeadView = exports('BeadView', (_dec = ccclass('BeadView'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BeadView, _Component);
        function BeadView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.hooks = noPlayHooks;
          _this.closed = false;
          _this.paused = false;
          _this.now = function () {
            return performance.now();
          };
          _this.resultModal = null;
          _this.levels = [];
          _this.game = null;
          _this.index = 0;
          _this.selected = 1;
          _this.board = null;
          _this.viewport = null;
          _this.content = null;
          _this.zoom = 1;
          _this.labelZoom = 1;
          _this.pan = {
            x: 0,
            y: 0
          };
          _this.moving = false;
          _this.gestureId = null;
          _this.dragStart = null;
          _this.progress = null;
          _this.timer = null;
          _this.clockRefresh = 0;
          _this.message = null;
          _this.numbers = new Map();
          _this.visited = new Set();
          _this.previous = null;
          _this.drawing = false;
          _this.pulses = [];
          _this.back = function () {};
          _this.isMuted = function () {
            return false;
          };
          _this.toggleSound = function () {};
          _this.sound = function () {};
          return _this;
        }
        var _proto = BeadView.prototype;
        _proto.setPaused = function setPaused(value) {
          this.paused = value;
          this.cancelGesture();
        };
        _proto.onDestroy = function onDestroy() {
          this.closed = true;
        };
        _proto.open = function open(back, isMuted, toggleSound, sound, hooks, startId, now) {
          var _this2 = this;
          if (hooks === void 0) {
            hooks = noPlayHooks;
          }
          if (now === void 0) {
            now = function now() {
              return performance.now();
            };
          }
          this.now = now;
          this.hooks = hooks;
          this.closed = false;
          this.back = function () {
            _this2.closed = true;
            _this2.hooks.leave();
            back();
          };
          this.isMuted = isMuted;
          this.toggleSound = toggleSound;
          this.sound = sound;
          this.clear();
          this.message = this.text('正在摆好豆豆…', 0, 0, 28);
          resources.load('beads/levels', JsonAsset, function (error, asset) {
            if (!_this2.isValid || _this2.closed) return;
            try {
              if (error) throw error;
              _this2.levels = parseBeadLevels(asset.json);
              _this2.openLevel(Math.max(0, _this2.levels.findIndex(function (l) {
                return l.id === startId;
              })));
            } catch (cause) {
              console.error(cause);
              _this2.message.string = '图案加载失败，请返回重试';
              _this2.button('BeadsHome', '返回大厅', 0, -150, 300, 70, function () {
                return _this2.back();
              }, ink, '#FFFFFF');
            }
          });
        };
        _proto.clear = function clear() {
          this.resultModal = null;
          this.timer = null;
          this.clockRefresh = 0;
          this.pulses = [];
          this.cancelGesture();
          this.numbers.clear();
          this.zoom = 1;
          this.labelZoom = 1;
          this.pan = {
            x: 0,
            y: 0
          };
          this.moving = false;
          this.board = null;
          this.viewport = null;
          this.content = null;
          this.node.children.slice().forEach(function (child) {
            child.removeFromParent();
            child.destroy();
          });
          this.panel('BeadsBackground', 0, 0, 720, 1280, paper, 0);
        };
        _proto.openLevel = function openLevel(index) {
          this.index = index;
          this.hooks.start(this.levels[index].id);
          this.game = new BeadGame(this.levels[index], this.now);
          this.selected = 1;
          this.render();
        };
        _proto.render = function render() {
          var _this3 = this;
          var game = this.game;
          this.clear();
          this.button('BeadsHome', '‹ 大厅', -242, 549, 150, 54, function () {
            return _this3.back();
          }, '#E9E4D8');
          var sound = this.button('BeadsSound', this.isMuted() ? '声音：关' : '声音：开', 239, 549, 160, 54, function () {
            _this3.toggleSound();
            sound.getComponentInChildren(Label).string = _this3.isMuted() ? '声音：关' : '声音：开';
          }, '#E9E4D8');
          this.timer = this.text('', 0, 549, 23, ink, 220, 48);
          this.timer.node.name = 'BeadsTimer';
          this.refreshClock();
          this.text('豆豆小工坊', 0, 480, 42, ink, 660, 58);
          this.text(this.index + 1 + " / " + this.levels.length + "   " + game.level.name + " \xB7 " + game.level.size + "\xD7" + game.level.size, 0, 438, 23, muted, 660, 34);
          this.progress = this.text('', 0, 393, 23, ink, 660, 34);
          this.button('BeadsZoom', '放大 ×2', -240, 350, 148, 48, function () {
            return _this3.changeZoom();
          }, '#E9E4D8');
          this.button('BeadsMode', '切换拖动', -80, 350, 148, 48, function () {
            if (_this3.paused || _this3.resultModal) return;
            _this3.cancelGesture();
            _this3.moving = !_this3.moving;
            if (_this3.moving && _this3.zoom === 1) _this3.zoom = 2;
            _this3.applyTransform();
            _this3.explainMode();
          }, '#E9E4D8');
          this.button('BeadsFocus', '下一处', 80, 350, 148, 48, function () {
            return _this3.focusUnfilled(true);
          }, '#E9E4D8');
          this.button('BeadsOverview', '查看全图', 240, 350, 148, 48, function () {
            if (_this3.paused || _this3.resultModal) return;
            _this3.cancelGesture();
            _this3.zoom = 1;
            _this3.pan = {
              x: 0,
              y: 0
            };
            _this3.moving = false;
            _this3.applyTransform();
            _this3.explainMode();
          }, '#E9E4D8');
          this.board = this.panel('BeadBoard', 0, 5, 620, 620, '#E8ECDD', 26);
          this.viewport = this.make('BeadViewport', 0, 0, 580, 580, this.board);
          this.viewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          this.content = this.make('BeadContent', 0, 0, 560, 560, this.viewport);
          this.content.addComponent(Graphics);
          var size = game.level.size,
            pitch = 560 / size;
          for (var row = 0; row < size; row++) for (var col = 0; col < size; col++) {
            var color = Number(game.level.pixels[row][col]);
            if (!color) continue;
            var label = this.text(String(color), -280 + (col + .5) * pitch, 280 - (row + .5) * pitch, Math.min(23, pitch * .58), ink, pitch, pitch, this.content);
            label.lineHeight = label.fontSize + 2;
            label.cacheMode = Label.CacheMode.CHAR;
            this.numbers.set(row * size + col, label.node);
          }
          this.viewport.on(Node.EventType.TOUCH_START, function (event) {
            if (_this3.paused || _this3.resultModal || _this3.gestureId !== null) return;
            _this3.gestureId = event.getID();
            _this3.visited.clear();
            _this3.previous = null;
            if (_this3.moving) {
              var p = _this3.localPoint(event);
              _this3.dragStart = {
                x: p.x,
                y: p.y,
                panX: _this3.pan.x,
                panY: _this3.pan.y
              };
            } else {
              _this3.drawing = true;
              _this3.stroke(event);
            }
          });
          this.viewport.on(Node.EventType.TOUCH_MOVE, function (event) {
            if (_this3.paused || _this3.resultModal || event.getID() !== _this3.gestureId) return;
            if (_this3.dragStart) {
              var p = _this3.localPoint(event);
              _this3.pan = clampBeadPan(_this3.dragStart.panX + p.x - _this3.dragStart.x, _this3.dragStart.panY + p.y - _this3.dragStart.y, _this3.zoom);
              _this3.applyTransform();
            } else if (_this3.drawing) _this3.stroke(event);
          });
          this.viewport.on(Node.EventType.TOUCH_END, function (event) {
            if (event.getID() !== _this3.gestureId) return;
            if (_this3.drawing && !_this3.paused) _this3.stroke(event);
            _this3.cancelGesture();
          });
          this.viewport.on(Node.EventType.TOUCH_CANCEL, function () {
            return _this3.cancelGesture();
          });
          game.level.palette.forEach(function (color, i) {
            var x = (i - (game.level.palette.length - 1) / 2) * 108;
            var button = _this3.button("BeadColor-" + (i + 1), String(i + 1), x, -375, 78, 68, function () {
              return _this3.select(i + 1);
            }, color.hex, '#FFFFFF');
            _this3.text('', 0, -48, 18, muted, 100, 32, button).node.name = 'Remaining';
          });
          this.message = this.text(game.level.size > 16 ? '精细图案可放大 ×2 / ×4；切换移动，拖动看边角。' : '选一个颜色，按数字放豆；拖动可连续填色。', 0, -466, 23, muted, 620, 66);
          this.button('BeadsRestart', '重新拼一幅', -159, -555, 296, 76, function () {
            return _this3.restartGame();
          }, '#E3E9DA');
          this.nextButton(false);
          this.text('计时挑战 · 完成越快，得分越高', 0, -617, 18, muted, 660, 30).node.name = 'BeadsFooter';
          this.refresh();
          if (game.level.size >= 24) this.focusUnfilled(false);
        };
        _proto.select = function select(color) {
          if (this.paused || this.resultModal || this.game.won) return;
          this.cancelGesture();
          this.moving = false;
          this.applyTransform();
          this.selected = color;
          this.refresh();
          if (this.zoom > 1) this.focusUnfilled(false);
          this.message.string = color + " \u53F7 \xB7 " + this.game.level.palette[color - 1].name + "\uFF0C\u70B9\u201C\u4E0B\u4E00\u5904\u201D\u5B9A\u4F4D\u672A\u586B\u533A\u57DF\u3002";
        };
        _proto.focusUnfilled = function focusUnfilled(outside) {
          var _ref,
            _this4 = this;
          if (this.paused || this.resultModal || !this.game || this.game.won) return;
          this.cancelGesture();
          var game = this.game,
            n = game.level.size,
            pitch = 560 / n;
          var cells = [];
          for (var r = 0; r < n; r++) for (var c = 0; c < n; c++) if (Number(game.level.pixels[r][c]) === this.selected && !game.isFilled(r, c)) cells.push({
            x: -280 + (c + .5) * pitch,
            y: 280 - (r + .5) * pitch
          });
          var target = (_ref = outside && this.zoom > 1 ? cells.find(function (p) {
            return Math.abs(p.x * _this4.zoom + _this4.pan.x) > 250 || Math.abs(p.y * _this4.zoom + _this4.pan.y) > 250;
          }) : null) != null ? _ref : cells[0];
          if (!target) {
            this.message.string = '这个颜色已经完成，选择其他颜色继续。';
            return;
          }
          this.zoom = n >= 24 ? 4 : 2;
          this.moving = false;
          this.pan = clampBeadPan(-target.x * this.zoom, -target.y * this.zoom, this.zoom);
          this.applyTransform();
          this.explainMode();
        };
        _proto.refresh = function refresh() {
          var game = this.game,
            size = game.level.size,
            pitch = 560 / size,
            g = this.content.getComponent(Graphics);
          g.clear();
          for (var row = 0; row < size; row++) for (var col = 0; col < size; col++) {
            var color = Number(game.level.pixels[row][col]),
              x = -280 + (col + .5) * pitch,
              y = 280 - (row + .5) * pitch;
            if (!color) {
              g.fillColor = this.color('#CED7C5');
              g.circle(x, y, 1.5);
              g.fill();
              continue;
            }
            var filled = game.isFilled(row, col),
              active = color === this.selected;
            if (filled) this.drawFilled(row, col);else {
              g.fillColor = this.color(active ? '#FFFDF6' : '#F1F2E9');
              g.circle(x, y, pitch * .37);
              g.fill();
              if (active) {
                g.strokeColor = this.color(game.level.palette[color - 1].hex);
                g.lineWidth = Math.min(2, pitch * .055);
                g.circle(x, y, pitch * .37);
                g.stroke();
              }
            }
            this.numbers.get(row * size + col).active = !filled;
          }
          this.refreshProgress();
        };
        _proto.drawFilled = function drawFilled(row, col) {
          var game = this.game,
            pitch = 560 / game.level.size,
            g = this.content.getComponent(Graphics),
            hex = game.level.palette[Number(game.level.pixels[row][col]) - 1].hex;
          var x = -280 + (col + .5) * pitch,
            y = 280 - (row + .5) * pitch;
          g.fillColor = this.color('#B4BEAB');
          g.circle(x + pitch * .025, y - pitch * .035, pitch * .43);
          g.fill();
          g.fillColor = this.color(hex);
          g.circle(x, y, pitch * .41);
          g.fill();
          g.fillColor = new Color(255, 255, 255, 105);
          g.ellipse(x - pitch * .13, y + pitch * .19, pitch * .15, pitch * .065);
          g.fill();
          g.fillColor = this.color('#A9B49F');
          g.circle(x, y - pitch * .015, pitch * .14);
          g.fill();
          g.fillColor = this.color(paper);
          g.circle(x, y + pitch * .015, pitch * .105);
          g.fill();
        };
        _proto.refreshProgress = function refreshProgress() {
          var _this5 = this;
          var game = this.game;
          this.progress.string = "\u5DF2\u62FC " + game.filled + " / " + game.total + "  \xB7  " + Math.round(game.filled / game.total * 100) + "%  \xB7  \u5B8C\u6210 " + game.completedRegions + " \u4E2A\u533A\u57DF";
          game.level.palette.forEach(function (color, i) {
            var button = _this5.node.getChildByName("BeadColor-" + (i + 1)),
              g = button.getComponent(Graphics);
            g.clear();
            g.fillColor = _this5.color(color.hex);
            g.roundRect(-39, -34, 78, 68, 17);
            g.fill();
            if (i + 1 === _this5.selected) {
              g.strokeColor = _this5.color(ink);
              g.lineWidth = 3;
              g.roundRect(-44, -39, 88, 78, 20);
              g.stroke();
            }
            button.getChildByName('Remaining').getComponent(Label).string = game.remaining(i + 1) ? "\u4F59 " + game.remaining(i + 1) : '完成 ✓';
          });
        };
        _proto.cancelGesture = function cancelGesture() {
          this.drawing = false;
          this.gestureId = null;
          this.dragStart = null;
          this.previous = null;
          this.visited.clear();
        };
        _proto.localPoint = function localPoint(event) {
          var p = event.getUILocation();
          return this.viewport.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(p.x, p.y));
        };
        _proto.changeZoom = function changeZoom() {
          if (this.paused || this.resultModal) return;
          this.cancelGesture();
          var old = this.zoom;
          this.zoom = old === 1 ? 2 : old === 2 ? 4 : 1;
          this.pan = clampBeadPan(this.pan.x * this.zoom / old, this.pan.y * this.zoom / old, this.zoom);
          if (this.zoom === 1) this.moving = false;
          this.applyTransform();
          this.explainMode();
        };
        _proto.applyTransform = function applyTransform() {
          var _this6 = this;
          this.content.setScale(this.zoom, this.zoom);
          this.content.setPosition(this.pan.x, this.pan.y);
          if (this.labelZoom !== this.zoom) {
            // Rerasterize glyphs at the displayed size instead of stretching tiny overview text.
            var pitch = 560 / this.game.level.size,
              base = Math.min(23, pitch * .58);
            this.numbers.forEach(function (n) {
              var label = n.getComponent(Label);
              label.fontSize = Math.round(base * _this6.zoom);
              label.lineHeight = Math.round((base + 2) * _this6.zoom);
              n.getComponent(UITransform).setContentSize(pitch * _this6.zoom, pitch * _this6.zoom);
              n.setScale(1 / _this6.zoom, 1 / _this6.zoom);
            });
            this.labelZoom = this.zoom;
          }
          this.node.getChildByName('BeadsZoom').getComponentInChildren(Label).string = this.zoom === 1 ? '放大 ×2' : this.zoom === 2 ? '放大 ×4' : '还原 ×1';
          this.node.getChildByName('BeadsMode').getComponentInChildren(Label).string = this.moving ? '切回放豆' : '切换拖动';
        };
        _proto.explainMode = function explainMode() {
          this.message.color = this.color(muted);
          this.message.string = this.moving ? '拖动画布，不会放豆；点“切回放豆”继续。' : this.zoom > 1 ? '按数字放豆；“下一处”定位未填区域，“查看全图”看作品。' : '全图视角 · “下一处”放大并定位当前颜色。';
        };
        _proto.stroke = function stroke(event) {
          var _this$previous;
          var game = this.game;
          if (this.paused || this.resultModal || game.won) return;
          var local = this.localPoint(event);
          if (Math.abs(local.x) > 290 || Math.abs(local.y) > 290) {
            this.previous = null;
            return;
          }
          var point = this.content.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y)),
            pitch = 560 / game.level.size;
          var col = Math.floor((point.x + 280) / pitch),
            row = Math.floor((280 - point.y) / pitch);
          if (row < 0 || col < 0 || row >= game.level.size || col >= game.level.size) {
            this.previous = null;
            return;
          }
          var from = (_this$previous = this.previous) != null ? _this$previous : {
              row: row,
              col: col
            },
            dr = row - from.row,
            dc = col - from.col,
            steps = Math.max(Math.abs(dr), Math.abs(dc));
          for (var i = 0; i <= steps; i++) this.paint(Math.round(from.row + (steps ? dr * i / steps : 0)), Math.round(from.col + (steps ? dc * i / steps : 0)));
          this.previous = {
            row: row,
            col: col
          };
        };
        _proto.paint = function paint(row, col) {
          var _this7 = this;
          var key = row + ":" + col;
          if (this.visited.has(key)) return;
          this.visited.add(key);
          var game = this.game,
            result = game.paint(row, col, this.selected);
          if (result.status === 'wrong' || result.status === 'filled') this.hooks.action();
          if (result.status === 'wrong') {
            this.message.string = "\u8FD9\u91CC\u9700\u8981 " + game.level.pixels[row][col] + " \u53F7\u989C\u8272\uFF0C\u5DF2\u653E\u597D\u7684\u8C46\u8C46\u4E0D\u4F1A\u53D7\u5F71\u54CD\u3002";
            this.message.color = this.color('#D56C58');
            this.pulse(row, col, '#D56C58');
            this.sound('blocked');
            return;
          }
          if (result.status !== 'filled') return;
          // Append just the changed bead; a full redraw is only needed when selecting a colour.
          this.drawFilled(row, col);
          this.numbers.get(row * game.level.size + col).active = false;
          this.refreshProgress();
          this.pulse(row, col, game.level.palette[this.selected - 1].hex);
          this.message.color = this.color(muted);
          if (game.won) {
            this.cancelGesture();
            this.zoom = 1;
            this.pan = {
              x: 0,
              y: 0
            };
            this.moving = false;
            this.applyTransform();
            this.hooks.win(game.score, game.elapsedMilliseconds);
            this.refreshClock();
            this.message.string = "\u5B8C\u6210\uFF01\u7528\u65F6 " + this.formatTime(game.elapsedMilliseconds) + "\n\u901F\u5EA6\u5F97\u5206 " + game.score + " \u5206";
            this.message.color = this.color(ink);
            this.nextButton(true);
            this.sound('chain');
            this.celebrate();
            var footer = this.node.getChildByName('BeadsFooter');
            footer == null || footer.removeFromParent();
            footer == null || footer.destroy();
            this.button('BeadsResult', '查看本局得分', 0, -617, 300, 38, function () {
              return _this7.showResult();
            }, '#E9E4D8');
            this.showResult();
          } else if (result.colorCompleted) {
            this.message.string = this.selected + " \u53F7\u989C\u8272\u5168\u90E8\u62FC\u597D\uFF01\u6362\u4E2A\u989C\u8272\u7EE7\u7EED\u3002";
            this.sound('deliver');
          } else if (result.regionCompleted) {
            this.message.string = "\u4E00\u4E2A\u533A\u57DF\u5B8C\u6210\uFF01\u5DF2\u62FC\u597D " + game.completedRegions + " \u4E2A\u533A\u57DF\u3002";
            this.sound('deliver');
          } else if (result.combo % 8 === 0) {
            this.message.string = "\u8FDE\u7EED\u653E\u597D " + result.combo + " \u9897\uFF01\u6162\u6162\u62FC\uFF0C\u4E5F\u5F88\u6709\u6210\u5C31\u611F\u3002";
            this.sound('pull');
          }
        };
        _proto.restartGame = function restartGame() {
          this.hooks.retry();
          this.hooks.start(this.game.level.id);
          this.game.restart();
          this.selected = 1;
          this.render();
        };
        _proto.showResult = function showResult() {
          var _this8 = this;
          var game = this.game;
          if (!game.won || this.resultModal) return;
          var overlay = this.make('BeadResultModal', 0, 0, 720, 1280);
          this.resultModal = overlay;
          var shade = overlay.addComponent(Graphics);
          shade.fillColor = new Color(38, 63, 59, 165);
          shade.rect(-360, -640, 720, 1280);
          shade.fill();
          overlay.addComponent(BlockInputEvents);
          var card = this.panel('ResultCard', 0, 0, 590, 700, paper, 32, overlay);
          this.text('作品完成！', 0, 258, 37, ink, 480, 58, card);
          this.text(game.level.name, 0, 202, 24, muted, 480, 42, card);
          this.text('本局速度得分', 0, 137, 21, muted, 480, 40, card);
          this.text(String(game.score), 0, 67, 78, ink, 480, 104, card).node.name = 'ResultScore';
          this.panel('ResultTimeCard', 0, -35, 480, 66, '#E4EBDC', 18, card);
          this.text("\u5B8C\u6210\u7528\u65F6  " + this.formatTime(game.elapsedMilliseconds), 0, -35, 26, ink, 460, 60, card).node.name = 'ResultTime';
          this.button('ResultNext', this.index + 1 < this.levels.length ? '下一幅 →' : '全部拼好 · 返回大厅', 0, -145, 480, 76, function () {
            return _this8.index + 1 < _this8.levels.length ? _this8.openLevel(_this8.index + 1) : _this8.back();
          }, ink, '#FFFFFF', card);
          this.button('ResultRetry', '再玩一次', -125, -240, 230, 64, function () {
            return _this8.restartGame();
          }, '#E3E9DA', ink, card);
          this.button('ResultHome', '游戏大厅', 125, -240, 230, 64, function () {
            return _this8.back();
          }, '#E3E9DA', ink, card);
          this.button('ResultClose', '×', 245, 292, 48, 48, function () {
            overlay.removeFromParent();
            overlay.destroy();
            _this8.resultModal = null;
          }, '#E9E4D8', ink, card);
          this.text('完成越快，分数越高 · 最高 10000 分', 0, -307, 18, muted, 520, 30, card);
        };
        _proto.pulse = function pulse(row, col, hex) {
          var pitch = 560 / this.game.level.size,
            n = this.make('BeadPulse', -280 + (col + .5) * pitch, 280 - (row + .5) * pitch, pitch, pitch, this.content);
          var g = n.addComponent(Graphics);
          g.strokeColor = this.color(hex);
          g.lineWidth = Math.min(3, pitch * .07);
          g.circle(0, 0, pitch * .46);
          g.stroke();
          this.pulses.push({
            node: n,
            elapsed: 0
          });
        };
        _proto.celebrate = function celebrate() {
          for (var i = 0; i < 18; i++) {
            var n = this.make('Confetti', -285 + i * 34, 320 + i % 3 * 12, 14, 14),
              g = n.addComponent(Graphics);
            g.fillColor = this.color(this.game.level.palette[i % this.game.level.palette.length].hex);
            g.circle(0, 0, 5);
            g.fill();
            this.pulses.push({
              node: n,
              elapsed: -.4
            });
          }
        };
        _proto.formatTime = function formatTime(milliseconds) {
          var seconds = Math.floor(milliseconds / 1000),
            remainder = seconds % 60;
          return Math.floor(seconds / 60) + ":" + (remainder < 10 ? '0' : '') + remainder + "." + Math.floor(milliseconds % 1000 / 100);
        };
        _proto.refreshClock = function refreshClock() {
          if (!this.timer || !this.game) return;
          var text = "\u7528\u65F6 " + this.formatTime(this.game.elapsedMilliseconds);
          if (this.timer.string !== text) this.timer.string = text;
        };
        _proto.update = function update(dt) {
          if (this.closed || this.paused) return;
          this.clockRefresh += dt;
          if (this.clockRefresh >= .1) {
            this.clockRefresh = 0;
            this.refreshClock();
          }
          this.pulses = this.pulses.filter(function (p) {
            p.elapsed += dt;
            if (p.elapsed >= .35) {
              p.node.removeFromParent();
              p.node.destroy();
              return false;
            }
            var scale = 1 + Math.max(0, p.elapsed) * 1.5;
            p.node.setScale(scale, scale);
            return true;
          });
        };
        _proto.nextButton = function nextButton(enabled) {
          var _this9 = this;
          var old = this.node.getChildByName('BeadsNext');
          if (old) {
            old.removeFromParent();
            old.destroy();
          }
          this.button('BeadsNext', this.index + 1 < this.levels.length ? '下一幅 →' : '全部拼好 · 回大厅', 159, -555, 296, 76, function () {
            if (!_this9.game.won) return;
            _this9.index + 1 < _this9.levels.length ? _this9.openLevel(_this9.index + 1) : _this9.back();
          }, enabled ? ink : '#DEDCCD', enabled ? '#FFFFFF' : muted);
        };
        _proto.color = function color(hex) {
          return new Color().fromHEX(hex);
        };
        _proto.make = function make(name, x, y, w, h, parent) {
          if (parent === void 0) {
            parent = this.node;
          }
          var n = new Node(name);
          n.layer = this.node.layer;
          n.setParent(parent);
          n.setPosition(x, y);
          n.addComponent(UITransform).setContentSize(w, h);
          return n;
        };
        _proto.panel = function panel(name, x, y, w, h, hex, r, parent) {
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.make(name, x, y, w, h, parent),
            g = n.addComponent(Graphics);
          g.fillColor = this.color(hex);
          g.roundRect(-w / 2, -h / 2, w, h, r);
          g.fill();
          return n;
        };
        _proto.text = function text(value, x, y, size, hex, w, h, parent) {
          if (hex === void 0) {
            hex = ink;
          }
          if (w === void 0) {
            w = 660;
          }
          if (h === void 0) {
            h = 64;
          }
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.make('Text', x, y, w, h, parent),
            l = n.addComponent(Label);
          l.string = value;
          l.fontSize = size;
          l.lineHeight = size + 8;
          l.color = this.color(hex);
          l.horizontalAlign = Label.HorizontalAlign.CENTER;
          l.verticalAlign = Label.VerticalAlign.CENTER;
          l.overflow = Label.Overflow.SHRINK;
          return l;
        };
        _proto.button = function button(name, value, x, y, w, h, action, hex, foreground, parent) {
          if (hex === void 0) {
            hex = ink;
          }
          if (foreground === void 0) {
            foreground = ink;
          }
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.panel(name, x, y, w, h, hex, 18, parent);
          this.text(value, 0, 0, 24, foreground, w - 12, h, n);
          n.on(Node.EventType.TOUCH_END, action);
          return n;
        };
        return BeadView;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/catalog.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('gamesInCategory', gamesInCategory);
      cclegacy._RF.push({}, "12277bOSp9BZpvSmD46VpDM", "catalog", undefined);
      var games = exports('games', Object.freeze([Object.freeze({
        id: 'arrows',
        title: '线团邮局',
        category: 'puzzle',
        phase: 'P1',
        available: true
      }), Object.freeze({
        id: 'beads',
        title: '像素拼豆',
        category: 'creative',
        phase: 'P3',
        available: true
      }), Object.freeze({
        id: 'differences',
        title: '场景找不同',
        category: 'observation',
        phase: 'P4',
        available: true
      })]));
      function gamesInCategory(category) {
        return games.filter(function (game) {
          return category === 'all' || game.category === category;
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/contracts.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8e36dr8QcpFwr5bZgKMECfE", "contracts", undefined);
      /** Rules must be independent of Cocos, rendering, storage and platform APIs. */
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/daily-post.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './post-generation.ts', './post.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, generatePostLevel, PostGame;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      generatePostLevel = module.generatePostLevel;
    }, function (module) {
      PostGame = module.PostGame;
    }],
    execute: function () {
      exports('dailyPost', dailyPost);
      cclegacy._RF.push({}, "f9fc5+osxRABJ1fMzB+3FuL", "daily-post", undefined);
      /** Local calendar challenge: deterministic, offline, no device/network identifiers. */
      function dailyPost(date) {
        if (!Number.isFinite(date.getTime())) throw Error('Invalid date');
        var stamp = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
        for (var attempt = 0; attempt < 6; attempt++) {
          try {
            var made = generatePostLevel({
              seed: stamp + attempt * 7919 >>> 0,
              count: 30,
              size: 14,
              capacity: 2,
              timeLimitSeconds: 100
            });
            var level = _extends({}, made.level, {
              id: "daily-" + stamp,
              name: "\u6BCF\u65E5\u8C03\u5EA6 \xB7 " + (date.getMonth() + 1) + "\u6708" + date.getDate() + "\u65E5",
              hint: '每日更换布局 · 2个基础暂存位 · 道具每局各一次。'
            });
            // Verify the constructive witness in actual rules before offering this board.
            var game = new PostGame(level, function () {
              return 0;
            });
            for (var _iterator = _createForOfIteratorHelperLoose(made.constructionSolution), _step; !(_step = _iterator()).done;) {
              var id = _step.value;
              var move = game.begin(id);
              if (!move.ok) throw Error('Invalid daily witness');
              game.finish(move.token);
            }
            if (game.won) return level;
          } catch (_unused) {}
        }
        throw Error('Daily challenge unavailable');
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/differences.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        parseDifferenceLevels: parseDifferenceLevels,
        toScenePoint: toScenePoint
      });
      cclegacy._RF.push({}, "37c23bvSLRMhYVs49EAm6e1", "differences", undefined);
      function parseDifferenceLevels(raw) {
        if (!Array.isArray(raw) || !raw.length) throw Error('Expected difference levels');
        var ids = new Set();
        return raw.map(function (value) {
          var l = value;
          if (!l || typeof l.id !== 'string' || !l.id || ids.has(l.id) || typeof l.name !== 'string' || !l.name) throw Error('Invalid level id/name');
          ids.add(l.id);
          if (!Number.isInteger(l.width) || !Number.isInteger(l.height) || l.width !== 600 || l.height !== 360 || typeof l.imageVersion !== 'string' || !/^[a-f0-9]{12}$/.test(l.imageVersion)) throw Error('Invalid image metadata');
          if (!l.images || !['a', 'b'].every(function (s) {
            return /^differences\/art\/[a-z0-9-]+$/.test(l.images[s]);
          }) || l.images.a === l.images.b) throw Error('Invalid image paths');
          if (!Array.isArray(l.differences) || l.differences.length < 3 || l.differences.length > 12) throw Error('Expected 3–12 differences');
          var seen = new Set();
          l.differences.forEach(function (d, i) {
            if (!d || typeof d.id !== 'string' || !d.id || seen.has(d.id) || typeof d.label !== 'string' || !d.label || ![d.x, d.y, d.r].every(Number.isFinite) || d.r <= 0 || d.x < d.r || d.x > l.width - d.r || d.y < d.r || d.y > l.height - d.r) throw Error('Invalid answer region');
            seen.add(d.id);
            if (l.differences.slice(i + 1).some(function (e) {
              return Math.hypot(d.x - e.x, d.y - e.y) <= d.r + e.r;
            })) throw Error('Overlapping answers');
          });
          return _extends({}, l, {
            images: _extends({}, l.images),
            differences: l.differences.map(function (d) {
              return _extends({}, d);
            })
          });
        });
      }
      /** Viewport-local coordinate to source-image pixel; source origin is top left. */
      function toScenePoint(x, y, width, height, zoom, panX, panY) {
        if (!Number.isFinite(zoom) || zoom <= 0) throw Error('Invalid zoom');
        return {
          x: (x - panX) / zoom + width / 2,
          y: height / 2 - (y - panY) / zoom
        };
      }
      var DifferenceGame = exports('DifferenceGame', /*#__PURE__*/function () {
        function DifferenceGame(level) {
          this.level = void 0;
          this.found = new Set();
          this.hinted = new Set();
          this.errors = 0;
          this.usedHints = 0;
          this.level = parseDifferenceLevels([level])[0];
        }
        var _proto = DifferenceGame.prototype;
        _proto.isFound = function isFound(id) {
          return this.found.has(id);
        };
        _proto.hit = function hit(x, y) {
          if (this.won) return {
            kind: 'won'
          };
          if (!Number.isFinite(x) || !Number.isFinite(y) || x < 0 || y < 0 || x > this.level.width || y > this.level.height) return {
            kind: 'outside'
          };
          var difference = this.level.differences.find(function (d) {
            return Math.hypot(x - d.x, y - d.y) <= d.r;
          });
          if (!difference) {
            this.errors++;
            return {
              kind: 'miss'
            };
          }
          if (this.found.has(difference.id)) return {
            kind: 'already',
            difference: difference
          };
          this.found.add(difference.id);
          return {
            kind: 'found',
            difference: difference
          };
        };
        _proto.hint = function hint() {
          var _this = this;
          if (this.won || !this.hintsRemaining) return null;
          var d = this.level.differences.find(function (d) {
            return !_this.found.has(d.id) && !_this.hinted.has(d.id);
          });
          if (!d) return null;
          this.hinted.add(d.id);
          this.usedHints++;
          return d;
        };
        _proto.restart = function restart() {
          this.found.clear();
          this.hinted.clear();
          this.errors = 0;
          this.usedHints = 0;
        };
        _createClass(DifferenceGame, [{
          key: "total",
          get: function get() {
            return this.level.differences.length;
          }
        }, {
          key: "progress",
          get: function get() {
            return this.found.size;
          }
        }, {
          key: "won",
          get: function get() {
            return this.progress === this.total;
          }
        }, {
          key: "hintsRemaining",
          get: function get() {
            return 2 - this.usedHints;
          }
        }]);
        return DifferenceGame;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DifferenceView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './player-data.ts', './differences.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, resources, JsonAsset, SpriteFrame, Label, Mask, Sprite, UITransform, Node, Vec3, Graphics, Color, BlockInputEvents, Component, noPlayHooks, parseDifferenceLevels, DifferenceGame, toScenePoint;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      resources = module.resources;
      JsonAsset = module.JsonAsset;
      SpriteFrame = module.SpriteFrame;
      Label = module.Label;
      Mask = module.Mask;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Node = module.Node;
      Vec3 = module.Vec3;
      Graphics = module.Graphics;
      Color = module.Color;
      BlockInputEvents = module.BlockInputEvents;
      Component = module.Component;
    }, function (module) {
      noPlayHooks = module.noPlayHooks;
    }, function (module) {
      parseDifferenceLevels = module.parseDifferenceLevels;
      DifferenceGame = module.DifferenceGame;
      toScenePoint = module.toScenePoint;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ff253dKlvlL+7pYdH+p1Zld", "DifferenceView", undefined);
      var ccclass = _decorator.ccclass;
      var ink = '#263F3B',
        muted = '#687B70',
        paper = '#F7F3E9';
      var DifferenceView = exports('DifferenceView', (_dec = ccclass('DifferenceView'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DifferenceView, _Component);
        function DifferenceView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.hooks = noPlayHooks;
          _this.levels = [];
          _this.index = 0;
          _this.game = null;
          _this.paused = false;
          _this.gestures = [];
          _this.hintRemaining = 0;
          _this.closed = false;
          _this.serial = 0;
          _this.zoom = 1;
          _this.pan = {
            x: 0,
            y: 0
          };
          _this.contents = [];
          _this.markers = [];
          _this.progress = null;
          _this.message = null;
          _this.hintButton = null;
          _this.resultModal = null;
          _this.back = function () {};
          _this.getMuted = function () {
            return false;
          };
          _this.toggleSound = function () {};
          _this.sound = function () {};
          return _this;
        }
        var _proto = DifferenceView.prototype;
        _proto.setPaused = function setPaused(value) {
          this.paused = value;
          this.gestures.forEach(function (cancel) {
            return cancel();
          });
        };
        _proto.onDestroy = function onDestroy() {
          this.closed = true;
          ++this.serial;
        };
        _proto.update = function update(dt) {
          if (this.paused || this.closed || this.hintRemaining <= 0) return;
          this.hintRemaining -= dt;
          if (this.hintRemaining <= 0) this.drawMarkers();
        };
        _proto.open = function open(back, getMuted, toggleSound, sound, hooks, startId) {
          var _this2 = this;
          if (hooks === void 0) {
            hooks = noPlayHooks;
          }
          this.hooks = hooks;
          this.back = function () {
            _this2.closed = true;
            ++_this2.serial;
            _this2.hooks.leave();
            back();
          };
          this.getMuted = getMuted;
          this.toggleSound = toggleSound;
          this.sound = sound;
          this.loading('场景准备中…');
          resources.load('differences/levels', JsonAsset, function (err, asset) {
            if (_this2.closed || !_this2.isValid) return;
            try {
              if (err) throw err;
              _this2.levels = parseDifferenceLevels(asset.json);
              _this2.openLevel(Math.max(0, _this2.levels.findIndex(function (l) {
                return l.id === startId;
              })));
            } catch (e) {
              console.error(e);
              _this2.loading('场景加载失败，请返回重试');
            }
          });
        };
        _proto.clear = function clear() {
          this.unscheduleAllCallbacks();
          this.gestures = [];
          this.hintRemaining = 0;
          this.node.children.slice().forEach(function (n) {
            n.removeFromParent();
            n.destroy();
          });
          this.contents = [];
          this.markers = [];
          this.resultModal = null;
          this.progress = null;
          this.message = null;
          this.hintButton = null;
          this.panel('Background', 0, 0, 720, 1280, paper, 0);
        };
        _proto.loading = function loading(message) {
          this.clear();
          this.button('DifferencesHome', '‹ 大厅', -242, 549, 150, 54, this.back);
          this.text(message, 0, 0, 29);
        };
        _proto.openLevel = function openLevel(index) {
          var _this3 = this;
          this.index = index;
          var ticket = ++this.serial;
          this.game = new DifferenceGame(this.levels[index]);
          this.zoom = 1;
          this.pan = {
            x: 0,
            y: 0
          };
          this.loading('场景准备中…');
          var frames = [];
          var pending = 2,
            failed = false;
          ['a', 'b'].forEach(function (side, i) {
            return resources.load(_this3.game.level.images[side] + "/spriteFrame", SpriteFrame, function (err, frame) {
              if (_this3.closed || !_this3.isValid || ticket !== _this3.serial) return;
              if (err) {
                failed = true;
                console.error(err);
                _this3.loading('图片加载失败，请返回重试');
                return;
              }
              frames[i] = frame;
              if (--pending === 0 && !failed) _this3.render(frames);
            });
          });
        };
        _proto.render = function render(frames) {
          var _this4 = this;
          this.clear();
          var game = this.game;
          this.hooks.start(game.level.id);
          this.button('DifferencesHome', '‹ 大厅', -242, 549, 150, 54, this.back);
          var zoomButton = this.button('DifferencesZoom', '放大 ×2', 0, 549, 190, 54, function () {
            if (_this4.paused || _this4.resultModal) return;
            _this4.gestures.forEach(function (cancel) {
              return cancel();
            });
            _this4.zoom = _this4.zoom === 1 ? 2 : _this4.zoom === 2 ? 4 : 1;
            _this4.pan = {
              x: 0,
              y: 0
            };
            _this4.applyTransform();
            _this4.drawMarkers();
            zoomButton.getComponentInChildren(Label).string = _this4.zoom === 1 ? '放大 ×2' : _this4.zoom === 2 ? '放大 ×4' : '还原 ×1';
          });
          var sound = this.button('DifferencesSound', this.getMuted() ? '声音：关' : '声音：开', 239, 549, 160, 54, function () {
            _this4.toggleSound();
            sound.getComponentInChildren(Label).string = _this4.getMuted() ? '声音：关' : '声音：开';
          });
          this.text('场景找不同', 0, 474, 40);
          this.progress = this.text(this.index + 1 + " / " + this.levels.length + "  " + game.level.name + "   \xB7   0 / " + game.total, 0, 416, 25);
          [190, -210].forEach(function (y, i) {
            _this4.panel("SceneFrame-" + i, 0, y, 620, 380, '#E1E8DC', 16);
            var viewport = _this4.make("SceneViewport-" + i, 0, y, 600, 360);
            viewport.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
            var content = _this4.make("SceneContent-" + i, 0, 0, 600, 360, viewport);
            _this4.contents.push(content);
            var image = _this4.make('SceneImage', 0, 0, 600, 360, content),
              sprite = image.addComponent(Sprite);
            sprite.sizeMode = Sprite.SizeMode.CUSTOM;
            sprite.spriteFrame = frames[i];
            image.getComponent(UITransform).setContentSize(600, 360);
            _this4.markers.push(_this4.make("SceneMarkers-" + i, 0, 0, 600, 360, content));
            var start = null,
              moved = false;
            var localPoint = function localPoint(event) {
              var p = event.getUILocation();
              return viewport.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(p.x, p.y));
            };
            _this4.gestures.push(function () {
              start = null;
              moved = false;
            });
            viewport.on(Node.EventType.TOUCH_START, function (event) {
              if (_this4.paused) return;
              var p = localPoint(event);
              start = {
                x: p.x,
                y: p.y,
                panX: _this4.pan.x,
                panY: _this4.pan.y
              };
              moved = false;
            });
            viewport.on(Node.EventType.TOUCH_MOVE, function (event) {
              if (_this4.paused || !start || _this4.resultModal) return;
              var p = localPoint(event),
                dx = p.x - start.x,
                dy = p.y - start.y;
              if (Math.hypot(dx, dy) > 8) moved = true;
              if (_this4.zoom > 1 && moved) {
                var lx = 300 * (_this4.zoom - 1),
                  ly = 180 * (_this4.zoom - 1);
                _this4.pan = {
                  x: Math.max(-lx, Math.min(lx, start.panX + dx)),
                  y: Math.max(-ly, Math.min(ly, start.panY + dy))
                };
                _this4.applyTransform();
              }
            });
            viewport.on(Node.EventType.TOUCH_END, function (event) {
              var valid = !!start && !moved;
              start = null;
              if (_this4.paused || !valid || _this4.resultModal || game.won) return;
              var p = event.getUILocation(),
                local = viewport.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(p.x, p.y)),
                point = toScenePoint(local.x, local.y, 600, 360, _this4.zoom, _this4.pan.x, _this4.pan.y);
              _this4.hit(point.x, point.y);
            });
            viewport.on(Node.EventType.TOUCH_CANCEL, function () {
              start = null;
            });
          });
          this.text('两张图都能点 · 找到后会同时圈出', 0, -15, 19, muted, 600, 32);
          this.message = this.text('找形状、缺少物件，也留意小人的帽子和手势。', 0, -440, 23, muted, 620, 58);
          this.hintButton = this.button('DifferencesHint', '提示 · 剩 2 次', -159, -530, 296, 76, function () {
            return _this4.hint();
          });
          this.button('DifferencesRestart', '重新观察', 159, -530, 296, 76, function () {
            return _this4.restartLevel();
          });
          this.text('放大后拖动看细节 · 点错不扣进度', 0, -610, 20, muted);
        };
        _proto.restartLevel = function restartLevel() {
          this.hooks.retry();
          this.openLevel(this.index);
        };
        _proto.applyTransform = function applyTransform() {
          var _this5 = this;
          this.contents.forEach(function (n) {
            n.setScale(_this5.zoom, _this5.zoom);
            n.setPosition(_this5.pan.x, _this5.pan.y);
          });
        };
        _proto.drawMarkers = function drawMarkers(hint) {
          var _this6 = this;
          var game = this.game;
          this.markers.forEach(function (n) {
            var _n$getComponent;
            var g = (_n$getComponent = n.getComponent(Graphics)) != null ? _n$getComponent : n.addComponent(Graphics);
            g.clear();
            game.level.differences.forEach(function (d) {
              if (!game.isFound(d.id) && (hint == null ? void 0 : hint.id) !== d.id) return;
              g.strokeColor = _this6.color(game.isFound(d.id) ? '#355F46' : '#D5A13D');
              g.lineWidth = 3 / _this6.zoom;
              g.circle(d.x - 300, 180 - d.y, d.r);
              g.stroke();
            });
          });
        };
        _proto.hit = function hit(x, y) {
          var game = this.game,
            result = game.hit(x, y);
          if (result.kind === 'found' || result.kind === 'miss') this.hooks.action();
          if (result.kind === 'found') {
            this.drawMarkers();
            this.progress.string = this.index + 1 + " / " + this.levels.length + "  " + game.level.name + "   \xB7   " + game.progress + " / " + game.total;
            this.message.string = "\u627E\u5230\u4E86\uFF1A" + result.difference.label + "\uFF01";
            this.sound(game.won ? 'chain' : 'deliver');
            if (game.won) {
              this.hooks.win();
              this.showResult();
            }
          } else if (result.kind === 'already') this.message.string = '这里已经找到啦，再观察其他地方。';else if (result.kind === 'miss') {
            this.message.string = '这里一样哦，换个地方看看。';
            this.sound('blocked');
          }
        };
        _proto.hint = function hint() {
          var d = this.game.hint();
          if (!d) {
            this.message.string = '本关提示已用完，继续仔细对比吧。';
            return;
          }
          this.message.string = '金色圆圈里有差异，找到后点一下。';
          this.hintButton.getComponentInChildren(Label).string = "\u63D0\u793A \xB7 \u5269 " + this.game.hintsRemaining + " \u6B21";
          if (this.zoom > 1) {
            var lx = 300 * (this.zoom - 1),
              ly = 180 * (this.zoom - 1);
            this.pan = {
              x: Math.max(-lx, Math.min(lx, (300 - d.x) * this.zoom)),
              y: Math.max(-ly, Math.min(ly, (d.y - 180) * this.zoom))
            };
            this.applyTransform();
          }
          this.drawMarkers(d);
          this.hintRemaining = 2;
        };
        _proto.showResult = function showResult() {
          var _this7 = this;
          if (this.resultModal) return;
          var game = this.game,
            overlay = this.make('DifferenceResultModal', 0, 0, 720, 1280);
          this.resultModal = overlay;
          var shade = overlay.addComponent(Graphics);
          shade.fillColor = new Color(38, 63, 59, 165);
          shade.rect(-360, -640, 720, 1280);
          shade.fill();
          overlay.addComponent(BlockInputEvents);
          var card = this.panel('DifferenceResultCard', 0, 0, 590, 580, paper, 30, overlay);
          this.text('全部找到了！', 0, 202, 40, ink, 500, 64, card);
          this.text(game.level.name, 0, 141, 27, muted, 500, 48, card);
          this.text(game.total + " / " + game.total + "  \u5904\u5DEE\u5F02", 0, 62, 42, ink, 500, 70, card);
          this.text("\u70B9\u9519 " + game.errors + " \u6B21  \xB7  \u4F7F\u7528\u63D0\u793A " + game.usedHints + " \u6B21", 0, -12, 22, muted, 500, 48, card);
          this.button('DifferencesNext', this.index + 1 < this.levels.length ? '下一处风景 →' : '完成五关 · 回大厅', 0, -108, 480, 76, function () {
            return _this7.index + 1 < _this7.levels.length ? _this7.openLevel(_this7.index + 1) : _this7.back();
          }, ink, '#FFFFFF', card);
          this.button('DifferencesRetry', '再玩一次', -125, -207, 230, 64, function () {
            return _this7.restartLevel();
          }, '#E3E9DA', ink, card);
          this.button('DifferencesResultHome', '游戏大厅', 125, -207, 230, 64, this.back, '#E3E9DA', ink, card);
        };
        _proto.color = function color(hex) {
          return new Color().fromHEX(hex);
        };
        _proto.make = function make(name, x, y, w, h, parent) {
          if (parent === void 0) {
            parent = this.node;
          }
          var n = new Node(name);
          n.layer = this.node.layer;
          n.setParent(parent);
          n.setPosition(x, y);
          n.addComponent(UITransform).setContentSize(w, h);
          return n;
        };
        _proto.panel = function panel(name, x, y, w, h, hex, r, parent) {
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.make(name, x, y, w, h, parent),
            g = n.addComponent(Graphics);
          g.fillColor = this.color(hex);
          g.roundRect(-w / 2, -h / 2, w, h, r);
          g.fill();
          return n;
        };
        _proto.text = function text(value, x, y, size, hex, w, h, parent) {
          if (hex === void 0) {
            hex = ink;
          }
          if (w === void 0) {
            w = 660;
          }
          if (h === void 0) {
            h = 64;
          }
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.make('Text', x, y, w, h, parent),
            l = n.addComponent(Label);
          l.string = value;
          l.fontSize = size;
          l.lineHeight = size + 8;
          l.color = this.color(hex);
          l.horizontalAlign = Label.HorizontalAlign.CENTER;
          l.verticalAlign = Label.VerticalAlign.CENTER;
          l.overflow = Label.Overflow.SHRINK;
          return l;
        };
        _proto.button = function button(name, value, x, y, w, h, action, hex, foreground, parent) {
          if (hex === void 0) {
            hex = '#E3E9DA';
          }
          if (foreground === void 0) {
            foreground = ink;
          }
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.panel(name, x, y, w, h, hex, 18, parent);
          this.text(value, 0, 0, 24, foreground, w - 12, h, n);
          n.on(Node.EventType.TOUCH_END, action);
          return n;
        };
        return DifferenceView;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/endless-post.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './post-generation.ts', './post.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, generatePostLevel, PostGame;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      generatePostLevel = module.generatePostLevel;
    }, function (module) {
      PostGame = module.PostGame;
    }],
    execute: function () {
      exports({
        endlessParameters: endlessParameters,
        endlessPost: endlessPost,
        fallbackEndless: fallbackEndless,
        nextEndlessStage: nextEndlessStage
      });
      cclegacy._RF.push({}, "f3c9cVXkA1E0bhsONxwqaZh", "endless-post", undefined);
      function endlessParameters(stage) {
        if (!Number.isSafeInteger(stage) || stage < 1) throw Error('Invalid endless stage');
        return {
          count: [16, 30, 40, 50, 56, 58][Math.min(stage - 1, 5)],
          size: stage === 1 ? 12 : stage === 2 ? 14 : stage === 3 ? 16 : 18,
          capacity: stage <= 2 ? 3 : stage === 3 ? 2 : 1,
          timeLimitSeconds: Math.max(75, 115 - stage * 5)
        };
      }
      function endlessPost(stage) {
        var options = endlessParameters(stage);
        for (var attempt = 0; attempt < 8; attempt++) {
          try {
            var made = generatePostLevel(_extends({}, options, {
              seed: Math.imul(stage, 2654435761) + attempt * 7919 >>> 0
            }));
            var level = _extends({}, made.level, {
              id: "endless-" + stage,
              name: "\u65E0\u9650\u95EF\u5173 \xB7 \u7B2C" + stage + "\u5173",
              hint: options.count + "\u6761\u7EBF \xB7 " + options.capacity + "\u4E2A\u6682\u5B58\u4F4D \xB7 " + (stage >= 8 ? '极限轮换' : '逐关进阶') + "\uFF0C\u5148\u89C4\u5212\u518D\u62BD\u7EBF\u3002"
            });
            var game = new PostGame(level, function () {
              return 0;
            });
            for (var _iterator = _createForOfIteratorHelperLoose(made.constructionSolution), _step; !(_step = _iterator()).done;) {
              var id = _step.value;
              var move = game.begin(id);
              if (!move.ok) throw Error('Invalid generated witness');
              game.finish(move.token);
            }
            if (game.won) return {
              level: level,
              solution: made.constructionSolution
            };
          } catch (_unused) {}
        }
        return fallbackEndless(stage);
      }
      function fallbackEndless(stage) {
        var options = endlessParameters(stage);
        // A bounded constructive fallback guarantees a board when dense random packing
        // runs out of candidates. Every row drains right-to-left, so no cycles occur.
        var state = Math.imul(stage, 2654435761) >>> 0;
        var random = function random() {
          state = Math.imul(state, 1664525) + 1013904223 >>> 0;
          return state / 4294967296;
        };
        var slots = [];
        for (var r = 0; r < options.size; r++) for (var c = 0; c < Math.floor(options.size / 2); c++) slots.push([r, c]);
        for (var i = slots.length - 1; i > 0; i--) {
          var j = Math.floor(random() * (i + 1));
          var _ref = [slots[j], slots[i]];
          slots[i] = _ref[0];
          slots[j] = _ref[1];
        }
        var positions = slots.slice(0, options.count),
          order = positions.map(function (p, i) {
            return {
              p: p,
              i: i
            };
          }).sort(function (a, b) {
            return a.p[0] - b.p[0] || b.p[1] - a.p[1];
          }).map(function (v) {
            return v.i;
          });
        var colors = ['red', 'blue', 'gold', 'green', 'purple', 'orange'],
          parcels = [],
          orders = [];
        var _loop = function _loop() {
          var chunk = order.slice(_i, _i + options.capacity + 1),
            offset = Math.floor(random() * 6);
          chunk.forEach(function (id, k) {
            return parcels[id] = colors[(offset + k) % 6];
          });
          orders.push.apply(orders, [parcels[chunk[chunk.length - 1]]].concat(chunk.slice(0, -1).map(function (id) {
            return parcels[id];
          })));
        };
        for (var _i = 0; _i < order.length; _i += options.capacity + 1) {
          _loop();
        }
        var threads = positions.map(function (_ref2, i) {
          var r = _ref2[0],
            c = _ref2[1];
          return {
            id: "t" + i,
            parcel: parcels[i],
            cells: [[r, c * 2], [r, c * 2 + 1]]
          };
        });
        var level = _extends({}, options, {
          id: "endless-" + stage,
          name: "\u65E0\u9650\u95EF\u5173 \xB7 \u7B2C" + stage + "\u5173",
          hint: '逐排追踪出口，规划订单与暂存。',
          orders: orders,
          threads: threads
        });
        var solution = order.map(function (i) {
            return "t" + i;
          }),
          game = new PostGame(level, function () {
            return 0;
          });
        for (var _iterator2 = _createForOfIteratorHelperLoose(solution), _step2; !(_step2 = _iterator2()).done;) {
          var id = _step2.value;
          var move = game.begin(id);
          if (!move.ok) throw Error('Invalid fallback witness');
          game.finish(move.token);
        }
        if (!game.won) throw Error('Incomplete fallback witness');
        return {
          level: level,
          solution: solution
        };
      }
      function nextEndlessStage(progress) {
        var parse = function parse(id) {
          var match = /^endless-(\d+)$/.exec(id != null ? id : '');
          var value = match ? Number(match[1]) : 0;
          return Number.isSafeInteger(value) ? value : 0;
        };
        return Math.max.apply(Math, [1, parse(progress.lastLevel)].concat(progress.completed.map(function (id) {
          return parse(id) + 1;
        })));
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Home.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './active-clock.ts', './safe-layout.ts', './player-data.ts', './local-data.ts', './beads.ts', './differences.ts', './catalog.ts', './BeadView.ts', './DifferenceView.ts', './post.ts', './daily-post.ts', './endless-post.ts', './rewarded-ad.ts', './trial-export.ts'], function (exports) {
  var _inheritsLoose, _createForOfIteratorHelperLoose, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, profiler, Camera, view, ResolutionPolicy, UITransform, AudioSource, game, Game, resources, AudioClip, JsonAsset, sys, Graphics, Color, BlockInputEvents, Node, Label, Mask, Vec3, Component, ActiveClock, fitSafeLayout, PlayerData, localStoragePort, parseBeadLevels, parseDifferenceLevels, gamesInCategory, BeadView, DifferenceView, parsePostLevels, PostGame, dailyPost, nextEndlessStage, endlessPost, RewardedRequest, simulatedRewardedAd, trialExportLabel, exportTrialFile;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      profiler = module.profiler;
      Camera = module.Camera;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      UITransform = module.UITransform;
      AudioSource = module.AudioSource;
      game = module.game;
      Game = module.Game;
      resources = module.resources;
      AudioClip = module.AudioClip;
      JsonAsset = module.JsonAsset;
      sys = module.sys;
      Graphics = module.Graphics;
      Color = module.Color;
      BlockInputEvents = module.BlockInputEvents;
      Node = module.Node;
      Label = module.Label;
      Mask = module.Mask;
      Vec3 = module.Vec3;
      Component = module.Component;
    }, function (module) {
      ActiveClock = module.ActiveClock;
    }, function (module) {
      fitSafeLayout = module.fitSafeLayout;
    }, function (module) {
      PlayerData = module.PlayerData;
    }, function (module) {
      localStoragePort = module.localStoragePort;
    }, function (module) {
      parseBeadLevels = module.parseBeadLevels;
    }, function (module) {
      parseDifferenceLevels = module.parseDifferenceLevels;
    }, function (module) {
      gamesInCategory = module.gamesInCategory;
    }, function (module) {
      BeadView = module.BeadView;
    }, function (module) {
      DifferenceView = module.DifferenceView;
    }, function (module) {
      parsePostLevels = module.parsePostLevels;
      PostGame = module.PostGame;
    }, function (module) {
      dailyPost = module.dailyPost;
    }, function (module) {
      nextEndlessStage = module.nextEndlessStage;
      endlessPost = module.endlessPost;
    }, function (module) {
      RewardedRequest = module.RewardedRequest;
      simulatedRewardedAd = module.simulatedRewardedAd;
    }, function (module) {
      trialExportLabel = module.trialExportLabel;
      exportTrialFile = module.exportTrialFile;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2c771pDpUpDeZWrvdXQtAet", "Home", undefined);
      var ccclass = _decorator.ccclass;
      var ink = '#263F3B',
        muted = '#7A857D',
        paper = '#F7F3E9';
      var palette = {
        red: '#D56C58',
        blue: '#588CA8',
        gold: '#D5A13D',
        green: '#679878',
        purple: '#9A7EAF',
        orange: '#D58A4F'
      };
      var names = {
        red: '红',
        blue: '蓝',
        gold: '黄',
        green: '绿',
        purple: '紫',
        orange: '橙'
      };
      var MiniGameLabHome = exports('MiniGameLabHome', (_dec = ccclass('MiniGameLabHome'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniGameLabHome, _Component);
        function MiniGameLabHome() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.clock = new ActiveClock(function () {
            return performance.now();
          });
          _this.player = new PlayerData(localStoragePort, _this.clock.now);
          _this.hidden = false;
          _this.resumeOverlay = null;
          _this.screen = 'home';
          _this.beadChoices = [];
          _this.differenceChoices = [];
          _this.postMode = 'main';
          _this.homeCategory = 'all';
          _this.selectedGame = null;
          _this.beads = null;
          _this.differences = null;
          _this.levels = [];
          _this.campaign = [];
          _this.practice = [];
          _this.daily = null;
          _this.endlessStage = 0;
          _this.rewardRequest = new RewardedRequest();
          _this.postSession = 0;
          _this.rewardRefresh = false;
          _this.orderOverlay = false;
          _this.clockLabel = null;
          _this.timeoutShown = false;
          _this.game = null;
          _this.levelIndex = 0;
          _this.message = null;
          _this.board = null;
          _this.epoch = 0;
          _this.muted = false;
          _this.exportingRecords = false;
          _this.sound = void 0;
          _this.clips = new Map();
          _this.animation = null;
          return _this;
        }
        var _proto = MiniGameLabHome.prototype;
        _proto.start = function start() {
          var _this2 = this,
            _this$node$getCompone;
          this.muted = this.player.muted;
          profiler.hideStats();
          this.node.scene.getComponentsInChildren(Camera).forEach(function (c) {
            return c.clearColor = _this2.color(paper);
          });
          view.setDesignResolutionSize(720, 1280, ResolutionPolicy.SHOW_ALL);
          ((_this$node$getCompone = this.node.getComponent(UITransform)) != null ? _this$node$getCompone : this.node.addComponent(UITransform)).setContentSize(720, 1280);
          this.sound = this.node.addComponent(AudioSource);
          game.on(Game.EVENT_HIDE, this.onBackground, this);
          game.on(Game.EVENT_SHOW, this.onForeground, this);
          view.on('canvas-resize', this.applySafeLayout, this);
          this.applySafeLayout();
          ['pull', 'blocked', 'deliver', 'chain'].forEach(function (id) {
            return resources.load("post/audio/" + id, AudioClip, function (err, clip) {
              if (!err && _this2.isValid) _this2.clips.set(id, clip);
            });
          });
          this.showHome();
          resources.load('beads/levels', JsonAsset, function (err, asset) {
            if (err || !_this2.isValid) return;
            try {
              _this2.beadChoices = parseBeadLevels(asset.json).map(function (l) {
                return {
                  id: l.id,
                  name: l.name
                };
              });
              if (_this2.screen === 'home') _this2.showHome();
            } catch (e) {
              console.error(e);
            }
          });
          resources.load('differences/levels', JsonAsset, function (err, asset) {
            if (err || !_this2.isValid) return;
            try {
              _this2.differenceChoices = parseDifferenceLevels(asset.json).map(function (l) {
                return {
                  id: l.id,
                  name: l.name
                };
              });
              if (_this2.screen === 'home') _this2.showHome();
            } catch (e) {
              console.error(e);
            }
          });
          resources.load('post/practice-levels', JsonAsset, function (err, asset) {
            if (!err && _this2.isValid) {
              _this2.practice = parsePostLevels(asset.json).slice(0, 8);
              try {
                _this2.daily = dailyPost(new Date());
                _this2.practice = [].concat(_this2.practice, [_this2.daily]);
              } catch (e) {
                console.warn(e);
              }
              if (_this2.screen === 'home') _this2.showHome();
            }
          });
          resources.load('post/levels', JsonAsset, function (err, asset) {
            if (!_this2.isValid) return;
            try {
              if (err) throw err;
              _this2.campaign = parsePostLevels(asset.json);
              if (_this2.screen === 'home') {
                _this2.levels = _this2.campaign;
                _this2.showHome();
              }
            } catch (cause) {
              console.error(cause);
              _this2.say('关卡加载失败，请刷新重试');
            }
          });
        };
        _proto.onDestroy = function onDestroy() {
          game.off(Game.EVENT_HIDE, this.onBackground, this);
          game.off(Game.EVENT_SHOW, this.onForeground, this);
          view.off('canvas-resize', this.applySafeLayout, this);
          this.removeResumeOverlay();
        };
        _proto.applySafeLayout = function applySafeLayout() {
          var _this$resumeOverlay;
          var fit = fitSafeLayout(sys.getSafeAreaRect(false));
          this.node.setScale(fit.scale, fit.scale, 1);
          this.node.setPosition(fit.x, fit.y, 0);
          var card = (_this$resumeOverlay = this.resumeOverlay) == null ? void 0 : _this$resumeOverlay.getChildByName('ResumeCard');
          card == null || card.setScale(fit.scale, fit.scale, 1);
          card == null || card.setPosition(fit.x, fit.y, 0);
          if (this.resumeOverlay) this.drawResumeShade();
        };
        _proto.onBackground = function onBackground() {
          var _this$beads, _this$differences;
          this.hidden = true;
          this.clock.pause();
          (_this$beads = this.beads) == null || _this$beads.setPaused(true);
          (_this$differences = this.differences) == null || _this$differences.setPaused(true);
          this.sound.stop();
        };
        _proto.onForeground = function onForeground() {
          this.applySafeLayout();
          if (!this.hidden) return;
          this.hidden = false;
          if (this.screen === 'game') this.showResumeOverlay();else this.resumePlay();
        };
        _proto.removeResumeOverlay = function removeResumeOverlay() {
          var _this$resumeOverlay2, _this$resumeOverlay3;
          (_this$resumeOverlay2 = this.resumeOverlay) == null || _this$resumeOverlay2.removeFromParent();
          (_this$resumeOverlay3 = this.resumeOverlay) == null || _this$resumeOverlay3.destroy();
          this.resumeOverlay = null;
        };
        _proto.resumePlay = function resumePlay() {
          var _this$beads2, _this$differences2;
          if (this.hidden) return;
          this.removeResumeOverlay();
          this.clock.resume();
          (_this$beads2 = this.beads) == null || _this$beads2.setPaused(false);
          (_this$differences2 = this.differences) == null || _this$differences2.setPaused(false);
          if (this.rewardRefresh && this.screen === 'game' && this.game) {
            this.rewardRefresh = false;
            this.showGame();
          }
        };
        _proto.drawResumeShade = function drawResumeShade() {
          var overlay = this.resumeOverlay,
            size = view.getVisibleSize(),
            g = overlay.getComponent(Graphics);
          overlay.getComponent(UITransform).setContentSize(size.width, size.height);
          g.clear();
          g.fillColor = new Color(38, 63, 59, 185);
          g.rect(-size.width / 2, -size.height / 2, size.width, size.height);
          g.fill();
        };
        _proto.showResumeOverlay = function showResumeOverlay() {
          var _this3 = this;
          if (this.resumeOverlay) return;
          // A sibling survives asynchronous level rendering and always stays above the game/result window.
          var overlay = this.makeNode('ResumeOverlay', 0, 0, 720, 1280, this.node.parent);
          this.resumeOverlay = overlay;
          overlay.addComponent(Graphics);
          overlay.addComponent(BlockInputEvents);
          this.drawResumeShade();
          var card = this.panel('ResumeCard', 0, 0, 590, 460, paper, 30, overlay);
          this.text('欢迎回来', 0, 143, 38, ink, 500, 64, card);
          this.text('已暂停，准备好再继续', 0, 69, 27, ink, 500, 54, card);
          this.text('离开期间不计时，当前进度保留', 0, 12, 21, muted, 510, 48, card);
          this.button('ResumePlay', '继续游戏 →', 0, -83, 480, 76, function () {
            return _this3.resumePlay();
          }, true, ink, '#FFFFFF', card);
          this.button('ResumeHome', '返回游戏大厅', 0, -169, 480, 60, function () {
            if (_this3.hidden) return;
            _this3.resumePlay();
            _this3.showHome();
          }, true, '#E3E9DA', ink, card);
          this.applySafeLayout();
        };
        _proto.clear = function clear() {
          this.clockLabel = null;
          this.orderOverlay = false;
          ++this.epoch;
          this.animation = null;
          this.message = null;
          this.board = null;
          this.node.children.slice().forEach(function (child) {
            child.removeFromParent();
            child.destroy();
          });
          this.panel('Background', 0, 0, 720, 1280, paper, 0);
        };
        _proto.showHome = function showHome() {
          var _this$beads3,
            _this$differences3,
            _this4 = this;
          ++this.postSession;
          this.rewardRefresh = false;
          (_this$beads3 = this.beads) == null || _this$beads3.destroy();
          this.beads = null;
          (_this$differences3 = this.differences) == null || _this$differences3.destroy();
          this.differences = null;
          this.player.leave();
          this.screen = 'home';
          this.timeoutShown = false;
          this.game = null;
          this.levels = this.campaign;
          this.clear();
          this.text('MINIGAME LAB', -170, 549, 19, muted, 300, 48);
          this.audioButton();
          this.text('今天，玩点什么？', 0, 463, 46);
          this.text('按分类挑选游戏，选好后再开始。', 0, 401, 24, muted);
          var categories = [{
            id: 'all',
            name: '全部'
          }, {
            id: 'puzzle',
            name: '烧脑解谜'
          }, {
            id: 'creative',
            name: '轻松创作'
          }, {
            id: 'observation',
            name: '观察发现'
          }];
          categories.forEach(function (category, i) {
            return _this4.button("Category-" + category.id, category.name, -237 + i * 158, 320, 144, 54, function () {
              _this4.homeCategory = category.id;
              _this4.selectedGame = null;
              _this4.showHome();
            }, true, _this4.homeCategory === category.id ? ink : '#E9E4D8', _this4.homeCategory === category.id ? '#FFFFFF' : ink);
          });
          var visible = gamesInCategory(this.homeCategory).filter(function (game) {
            return game.available || _this4.homeCategory !== 'all';
          });
          visible.forEach(function (game, i) {
            return _this4.gameCard(game, 170 - i * 175);
          });
          if (!this.selectedGame) {
            this.text('先选择一款游戏', 0, -340, 29);
            this.text('点击卡片查看玩法，再开始这一局。', 0, -395, 22, muted);
          } else {
            var post = this.selectedGame === 'arrows',
              diff = this.selectedGame === 'differences';
            this.panel('GameDetails', 0, -365, 620, 120, '#E9ECDD', 24);
            this.text(post ? '线团邮局 · 挑战观察与规划' : diff ? '场景找不同 · 发现生活小细节' : '像素拼豆 · 拼出你的作品', 0, -340, 27);
            this.text(post ? '3 / 2 / 1 暂存位递进 · 可扩容与加时。' : diff ? '找形状、少物件与伪装小人的差异，可放大。' : '第三幅起精细图案 · 自动放大，可定位未填区域。', 0, -389, 21, muted, 570, 40);
            var choices = this.choices(this.selectedGame),
              continueMode = this.player.lastMode(this.selectedGame),
              saved = this.player.progress(this.selectedGame, continueMode).lastLevel;
            this.button('ChooseLevels', '选择关卡', -155, -455, 290, 44, function () {
              return _this4.showLevelSelect(_this4.selectedGame);
            }, !!choices.length, '#E4EBDC', ink);
            this.button('ContinueGame', '继续上次关卡', 155, -455, 290, 44, function () {
              return _this4.launch(_this4.selectedGame, saved, continueMode);
            }, !!saved && (this.choices(this.selectedGame, continueMode).some(function (l) {
              return l.id === saved;
            }) || post && /^endless-\d+$/.test(saved)), '#E4EBDC', ink);
            if (post) {
              this.button('StartPost', '新手教学', -240, -532, 148, 70, function () {
                _this4.postMode = 'main';
                _this4.levels = _this4.campaign;
                _this4.openLevel(0);
              }, !!this.campaign.length);
              this.button('StartChallenge', '主线挑战', -80, -532, 148, 70, function () {
                _this4.postMode = 'main';
                _this4.levels = _this4.campaign;
                _this4.openLevel(1);
              }, this.campaign.length > 1);
              this.button('StartDaily', '今日挑战', 80, -532, 148, 70, function () {
                try {
                  _this4.daily = dailyPost(new Date());
                  _this4.practice = [].concat(_this4.practice.filter(function (l) {
                    return !l.id.startsWith('daily-');
                  }), [_this4.daily]);
                  _this4.postMode = 'practice';
                  _this4.levels = [_this4.daily];
                  _this4.openLevel(0);
                } catch (_unused) {
                  _this4.say('今日挑战暂不可用，请玩主线。');
                }
              }, !!this.daily);
              this.button('StartPractice', '轻松练习', 240, -532, 148, 70, function () {
                _this4.postMode = 'practice';
                _this4.levels = _this4.practice.filter(function (l) {
                  return !l.id.startsWith('daily-');
                });
                _this4.openLevel(0);
              }, !!this.practice.length, '#E4EBDC', ink);
              var next = nextEndlessStage(this.player.progress('arrows', 'practice'));
              this.button('StartEndless', "\u65E0\u9650\u95EF\u5173 \xB7 " + (next > 1 ? '继续第' + next + '关' : '自动生成新关卡') + " \u2192", 0, -594, 610, 46, function () {
                return _this4.openEndless(next);
              }, true, ink, '#FFFFFF');
            } else if (diff) this.button('StartDifferences', '开始找不同 →', 0, -532, 600, 70, function () {
              return _this4.showDifferences();
            });else this.button('StartBeads', '开始拼豆 →', 0, -532, 600, 70, function () {
              return _this4.showBeads();
            });
          }
          if (this.selectedGame !== 'arrows') this.text(this.player.notice, 0, -586, 18, muted, 640, 30);
          this.button('LocalRecords', "\u8BD5\u73A9\u8BB0\u5F55 \xB7 " + this.player.eventCount + " \u6761", 0, this.selectedGame === 'arrows' ? -630 : -620, 360, this.selectedGame === 'arrows' ? 20 : 36, function () {
            return _this4.showRecords();
          }, true, '#E9E4D8', ink);
        };
        _proto.gameCard = function gameCard(game, y) {
          var _this5 = this;
          var selected = this.selectedGame === game.id,
            post = game.id === 'arrows';
          var card = this.panel("GameCard-" + game.id, 0, y, 620, 150, selected ? '#E4EBDC' : '#FFFDF6', 26);
          var graphics = card.getComponent(Graphics);
          if (selected) {
            graphics.strokeColor = this.color(ink);
            graphics.lineWidth = 3;
            graphics.roundRect(-310, -75, 620, 150, 26);
            graphics.stroke();
          }
          var tag = game.category === 'puzzle' ? '烧脑解谜' : game.category === 'creative' ? '轻松创作' : '观察发现';
          this.text(tag, 60, 48, 18, muted, 400, 30, card);
          this.text(game.title, 60, 7, 33, game.available ? ink : muted, 400, 48, card);
          this.text(post ? '30 / 40 / 50 条线 · 限时挑战' : game.id === 'beads' ? this.beadChoices.length + " \u5E45\u56FE\u6848 \xB7 \u53EF\u653E\u5927\u7CBE\u7EC6\u62FC\u8C46" : '五组温暖风景 · 放大找细节', 60, -35, 21, muted, 400, 40, card);
          var icon = this.makeNode('GameIcon', -230, 0, 110, 110, card),
            g = icon.addComponent(Graphics);
          if (post) {
            g.strokeColor = this.color(palette.red);
            g.lineWidth = 10;
            g.moveTo(-38, -30);
            g.lineTo(-10, -30);
            g.quadraticCurveTo(8, -30, 8, -10);
            g.lineTo(8, 28);
            g.lineTo(39, 28);
            g.stroke();
            g.moveTo(23, 41);
            g.lineTo(39, 28);
            g.lineTo(23, 15);
            g.stroke();
          } else if (game.id === 'beads') {
            for (var row = 0; row < 3; row++) for (var col = 0; col < 3; col++) {
              g.fillColor = this.color([palette.red, palette.gold, palette.blue][(row + col) % 3]);
              g.circle(-32 + col * 32, 32 - row * 32, 12);
              g.fill();
              g.fillColor = this.color(paper);
              g.circle(-32 + col * 32, 32 - row * 32, 4);
              g.fill();
            }
          } else {
            g.strokeColor = this.color(muted);
            g.lineWidth = 6;
            g.circle(-8, 9, 28);
            g.stroke();
            g.moveTo(13, -12);
            g.lineTo(39, -38);
            g.stroke();
          }
          if (selected) this.text('已选择 ✓', 216, 48, 17, ink, 150, 30, card);
          if (game.available) card.on(Node.EventType.TOUCH_END, function () {
            _this5.selectedGame = game.id;
            _this5.showHome();
          });
        };
        _proto.showBeads = function showBeads(startId) {
          var _this6 = this;
          this.screen = 'game';
          this.game = null;
          this.clear();
          this.beads = this.node.addComponent(BeadView);
          this.beads.open(function () {
            var view = _this6.beads;
            _this6.beads = null;
            view == null || view.destroy();
            _this6.showHome();
          }, function () {
            return _this6.muted;
          }, function () {
            _this6.toggleMuted();
          }, function (id) {
            return _this6.play(id);
          }, this.hooks('beads'), startId, this.clock.now);
        };
        _proto.showDifferences = function showDifferences(startId) {
          var _this7 = this;
          this.screen = 'game';
          this.game = null;
          this.clear();
          this.differences = this.node.addComponent(DifferenceView);
          this.differences.open(function () {
            var view = _this7.differences;
            _this7.differences = null;
            view == null || view.destroy();
            _this7.showHome();
          }, function () {
            return _this7.muted;
          }, function () {
            _this7.toggleMuted();
          }, function (id) {
            return _this7.play(id);
          }, this.hooks('differences'), startId);
        };
        _proto.toggleMuted = function toggleMuted() {
          this.muted = !this.muted;
          this.player.setMuted(this.muted);
        };
        _proto.hooks = function hooks(game, mode) {
          var _this8 = this;
          if (mode === void 0) {
            mode = 'main';
          }
          return {
            start: function start(id) {
              return _this8.player.start(game, mode, id);
            },
            action: function action() {
              return _this8.player.action();
            },
            win: function win(score, elapsed) {
              return _this8.player.win(score, elapsed);
            },
            retry: function retry() {
              return _this8.player.retry();
            },
            leave: function leave() {
              return _this8.player.leave();
            }
          };
        };
        _proto.choices = function choices(game, mode) {
          if (mode === void 0) {
            mode = 'main';
          }
          return game === 'arrows' ? mode === 'practice' ? this.practice : this.campaign : game === 'beads' ? this.beadChoices : this.differenceChoices;
        };
        _proto.launch = function launch(game, id, mode) {
          if (mode === void 0) {
            mode = 'main';
          }
          if (game === 'arrows' && mode === 'practice' && /^endless-\d+$/.test(id)) {
            this.openEndless(Number(id.slice(8)));
            return;
          }
          if (!this.choices(game, mode).some(function (l) {
            return l.id === id;
          })) return;
          if (game === 'beads') this.showBeads(id);else if (game === 'differences') this.showDifferences(id);else {
            this.postMode = mode;
            this.levels = mode === 'practice' ? this.practice : this.campaign;
            this.openLevel(this.levels.findIndex(function (l) {
              return l.id === id;
            }));
          }
        };
        _proto.showLevelSelect = function showLevelSelect(game, mode, page) {
          var _this9 = this;
          if (mode === void 0) {
            mode = 'main';
          }
          if (page === void 0) {
            page = 0;
          }
          this.screen = 'levels';
          this.clear();
          this.button('LevelsHome', '‹ 大厅', -242, 549, 150, 54, function () {
            return _this9.showHome();
          }, true, '#E9E4D8', ink);
          this.audioButton();
          this.text('选择关卡', 0, 474, 40);
          if (game === 'arrows') {
            this.button('LevelModeMain', '主线挑战', -159, 413, 296, 54, function () {
              return _this9.showLevelSelect(game, 'main');
            }, true, mode === 'main' ? ink : '#E4EBDC', mode === 'main' ? '#FFFFFF' : ink);
            this.button('LevelModePractice', '轻松练习', 159, 413, 296, 54, function () {
              return _this9.showLevelSelect(game, 'practice');
            }, true, mode === 'practice' ? ink : '#E4EBDC', mode === 'practice' ? '#FFFFFF' : ink);
          } else this.text(game === 'beads' ? "\u50CF\u7D20\u62FC\u8C46 \xB7 " + this.beadChoices.length + " \u5E45\u539F\u521B \xB7 12\uFF5E32 \u683C" : '场景找不同 · 五处生活风景', 0, 413, 23, muted);
          var levels = this.choices(game, mode),
            progress = this.player.progress(game, mode),
            pages = Math.max(1, Math.ceil(levels.length / 6));
          levels.slice(page * 6, page * 6 + 6).forEach(function (level, i) {
            var best = progress.best[level.id],
              completed = progress.completed.indexOf(level.id) >= 0;
            _this9.button("LevelChoice-" + level.id, (page * 6 + i + 1 < 10 ? '0' : '') + String(page * 6 + i + 1) + "  " + level.name + (completed ? '  ✓' : '') + (best ? '\n最佳 ' + best.score + ' 分 · ' + (best.elapsedMs / 1000).toFixed(1) + ' 秒' : ''), 0, 316 - i * 105, 620, 88, function () {
              return _this9.launch(game, level.id, mode);
            }, true, completed ? '#E3E9DA' : '#FFFDF6', ink);
          });
          var saved = progress.lastLevel;
          this.text("\u5DF2\u5B8C\u6210 " + levels.filter(function (l) {
            return progress.completed.indexOf(l.id) >= 0;
          }).length + " / " + levels.length + "  \xB7  \u7B2C " + (page + 1) + " / " + pages + " \u9875", 0, -352, 23, muted);
          if (pages > 1) {
            this.button('LevelsPrev', '上一页', -159, -432, 296, 62, function () {
              return _this9.showLevelSelect(game, mode, page - 1);
            }, page > 0, '#E4EBDC', ink);
            this.button('LevelsNext', '下一页', 159, -432, 296, 62, function () {
              return _this9.showLevelSelect(game, mode, page + 1);
            }, page + 1 < pages, '#E4EBDC', ink);
          }
          this.button('LevelsContinue', '继续上次关卡', 0, -533, 620, 70, function () {
            return _this9.launch(game, saved, mode);
          }, !!saved && levels.some(function (l) {
            return l.id === saved;
          }));
          this.text('关卡可自由选择 · 继续会重新开始这一局', 0, -607, 19, muted);
        };
        _proto.showRecords = function showRecords(confirmClear) {
          var _this10 = this;
          if (confirmClear === void 0) {
            confirmClear = false;
          }
          this.screen = 'records';
          this.clear();
          this.button('RecordsHome', '‹ 大厅', -242, 549, 150, 54, function () {
            return _this10.showHome();
          }, true, '#E9E4D8', ink);
          this.audioButton();
          this.text('本地试玩记录', 0, 473, 40);
          var events = this.player.events(),
            wins = events.filter(function (e) {
              return e.name === 'win';
            }).length;
          this.text(events.length + " \u6761\u8BB0\u5F55  \xB7  " + wins + " \u6B21\u901A\u5173", 0, 407, 26);
          this.text(this.player.notice, 0, 355, 20, muted, 620, 44);
          var labels = {
              start: '开始',
              first_action: '首次操作',
              win: '通关',
              fail: '遇到困局',
              retry: '重玩',
              exit: '返回大厅'
            },
            titles = {
              arrows: '线团邮局',
              beads: '像素拼豆',
              differences: '场景找不同'
            };
          events.slice(-4).reverse().forEach(function (event, i) {
            var _this10$choices$find$, _this10$choices$find;
            var levelName = (_this10$choices$find$ = (_this10$choices$find = _this10.choices(event.game, event.mode).find(function (level) {
              return level.id === event.level;
            })) == null ? void 0 : _this10$choices$find.name) != null ? _this10$choices$find$ : '已移除关卡';
            _this10.panel("Record-" + event.seq, 0, 245 - i * 115, 620, 98, '#FFFDF6', 18);
            _this10.text(titles[event.game] + " \xB7 " + (event.reason === 'timeout' ? '时间到' : labels[event.name]), 0, 263 - i * 115, 24);
            _this10.text("" + (event.mode === 'practice' ? '练习 · ' : '') + levelName + " \xB7 " + (event.elapsedMs / 1000).toFixed(1) + " \u79D2" + (event.score === undefined ? '' : ' · ' + event.score + ' 分'), 0, 225 - i * 115, 19, muted);
          });
          if (!events.length) this.text('玩一局后，这里会显示最近的记录。', 0, 120, 25, muted);
          this.button('ExportRecords', this.exportingRecords ? '正在处理…' : trialExportLabel(), 0, -349, 620, 76, function () {
            if (_this10.exportingRecords) return;
            _this10.exportingRecords = true;
            _this10.node.getChildByName('ExportRecords').getComponentInChildren(Label).string = '正在处理…';
            _this10.node.getChildByName('RecordNotice').getComponent(Label).string = '正在准备试玩记录，请稍候…';
            exportTrialFile(_this10.player.exportLog(), function (result) {
              _this10.exportingRecords = false;
              if (!_this10.isValid || _this10.screen !== 'records') return;
              var button = _this10.node.getChildByName('ExportRecords'),
                notice = _this10.node.getChildByName('RecordNotice');
              if (button) button.getComponentInChildren(Label).string = trialExportLabel();
              if (notice) notice.getComponent(Label).string = {
                downloaded: '已发起下载，可在浏览器下载列表查看。',
                copied: '已复制试玩记录，可粘贴到文本文件保存。',
                unsupported: '当前平台不支持导出或复制，请使用 Web 试玩版。',
                failed: '导出未完成，请重试；原记录没有改变。'
              }[result];
            });
          });
          this.button('ClearRecords', confirmClear ? '确认清空记录 · 不影响游戏进度' : '清空试玩记录', 0, -450, 620, 64, function () {
            if (confirmClear) {
              _this10.player.clearEvents();
              _this10.showRecords();
            } else _this10.showRecords(true);
          }, true, '#E9E4D8', ink);
          this.text('仅保存在本机，不上传；最多保留最近 500 条。', 0, -534, 20, muted, 620, 46);
          this.text('', 0, -595, 20, muted, 620, 52).node.name = 'RecordNotice';
        };
        _proto.audioButton = function audioButton() {
          var _this11 = this;
          var button = this.button('Sound', this.muted ? '声音：关' : '声音：开', 239, 549, 160, 54, function () {
            _this11.toggleMuted();
            button.getComponentInChildren(Label).string = _this11.muted ? '声音：关' : '声音：开';
          }, true, '#E9E4D8', ink);
        };
        _proto.openLevel = function openLevel(index) {
          var _exec$, _exec;
          if (!this.levels[index]) return;
          ++this.postSession;
          this.rewardRefresh = false;
          this.endlessStage = Number((_exec$ = (_exec = /^endless-(\d+)$/.exec(this.levels[index].id)) == null ? void 0 : _exec[1]) != null ? _exec$ : 0);
          this.screen = 'game';
          this.player.start('arrows', this.postMode, this.levels[index].id);
          this.timeoutShown = false;
          this.levelIndex = index;
          this.game = new PostGame(this.levels[index], this.clock.now);
          this.showGame();
        };
        _proto.openEndless = function openEndless(stage) {
          try {
            var _endlessPost = endlessPost(stage),
              level = _endlessPost.level;
            this.postMode = 'practice';
            this.levels = [level];
            this.openLevel(0);
          } catch (error) {
            console.error(error);
            this.showHome();
            this.text('关卡生成暂未成功，请重试无限闯关。', 0, -284, 22, palette.red, 650, 44);
          }
        };
        _proto.requestRewardTime = /*#__PURE__*/function () {
          var _requestRewardTime = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this12 = this;
            var game, session, result;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  game = this.game, session = this.postSession;
                  if (!(!game || !game.canRewardTime || this.clock.paused)) {
                    _context.next = 3;
                    break;
                  }
                  return _context.abrupt("return");
                case 3:
                  _context.next = 5;
                  return this.rewardRequest.request(simulatedRewardedAd, function () {
                    return _this12.isValid && _this12.game === game && _this12.postSession === session;
                  }, function () {
                    return game.rewardTime();
                  });
                case 5:
                  result = _context.sent;
                  if (result === 'granted') {
                    this.timeoutShown = false;
                    if (!this.clock.paused) this.showGame();else this.rewardRefresh = true;
                    this.say('模拟奖励已到账：增加30秒，本局仅一次。');
                  } else if (result === 'failed' || result === 'cancelled') this.say('未完成奖励流程，没有增加时间。');
                case 7:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function requestRewardTime() {
            return _requestRewardTime.apply(this, arguments);
          }
          return requestRewardTime;
        }();
        _proto.showGame = function showGame() {
          var _this13 = this;
          var game = this.game;
          if (!game) return;
          if (game.won) this.player.win();else if (game.timedOut) this.player.fail('timeout');else if (game.stuck) this.player.fail('stuck');
          this.clear();
          this.button('BackHome', '‹ 大厅', -242, 549, 150, 54, function () {
            return _this13.showHome();
          }, true, '#E9E4D8', ink);
          this.audioButton();
          this.clockLabel = this.text('', 0, 549, 27, ink, 220, 48);
          this.refreshClock();
          this.text('线团邮局', 0, 486, 36);
          this.text(this.endlessStage ? game.level.name : (this.levelIndex + 1 < 10 ? '0' + (this.levelIndex + 1) : this.levelIndex + 1) + " / " + (this.levels.length < 10 ? '0' + this.levels.length : this.levels.length) + "   " + game.level.name, 0, 431, 24, muted, 660, 34);
          this.panel('OrderCard', 0, 340, 660, 130, '#E6ECDC', 24);
          this.text(game.won ? '所有信件已送达' : '配送顺序  →', -185, 375, 21, ink, 224, 36);
          this.text(game.order + " / " + game.level.orders.length + " \u5DF2\u9001\u8FBE", 204, 375, 20, muted, 180, 36);
          var visible = game.level.orders.slice(game.order, game.order + 6);
          visible.forEach(function (parcel, i) {
            return _this13.badge(parcel, -248 + i * 93, 332, _this13.node, 46, i === 0);
          });
          this.button('AllOrders', '完整订单 · 提前规划', 0, 290, 336, 36, function () {
            if (!game.busy && !game.timedOut) _this13.showOrders();
          }, !game.timedOut, '#E6ECDC', ink);
          this.board = this.panel('Board', 0, -45, 660, 620, '#FFFDF6', 28);
          var dots = this.board.getComponent(Graphics);
          dots.fillColor = this.color('#E6E8DC');
          var size = game.level.size,
            center = (size - 1) / 2,
            pitch = 560 / (size - 1);
          for (var r = 0; r < size; r++) for (var c = 0; c < size; c++) {
            dots.circle((c - center) * pitch, (center - r) * pitch, 2);
            dots.fill();
          }
          var layer = this.makeNode('ThreadLayer', 0, 0, 660, 620, this.board);
          layer.addComponent(Mask).type = Mask.Type.GRAPHICS_RECT;
          for (var _iterator = _createForOfIteratorHelperLoose(game.threads), _step; !(_step = _iterator()).done;) {
            var thread = _step.value;
            var node = this.makeNode("Thread-" + thread.id, 0, 0, 660, 620, layer);
            this.drawThread(node, thread, 0);
            var head = thread.cells[thread.cells.length - 1];
            this.makeNode("Hit-" + thread.id, (head[1] - center) * pitch, (center - head[0]) * pitch, 48, 48, this.board);
          }
          this.board.on(Node.EventType.TOUCH_END, function (event) {
            var p = _this13.board.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y));
            var selected,
              nearest = 27;
            for (var _iterator2 = _createForOfIteratorHelperLoose(game.threads), _step2; !(_step2 = _iterator2()).done;) {
              var t = _step2.value;
              for (var i = 1; i < t.cells.length; i++) {
                var a = t.cells[i - 1],
                  b = t.cells[i],
                  ax = (a[1] - center) * pitch,
                  ay = (center - a[0]) * pitch,
                  bx = (b[1] - center) * pitch,
                  by = (center - b[0]) * pitch;
                var ratio = Math.max(0, Math.min(1, ((p.x - ax) * (bx - ax) + (p.y - ay) * (by - ay)) / (Math.pow(bx - ax, 2) + Math.pow(by - ay, 2))));
                var distance = Math.hypot(p.x - ax - ratio * (bx - ax), p.y - ay - ratio * (by - ay));
                if (distance < nearest) {
                  nearest = distance;
                  selected = t;
                }
              }
            }
            if (selected) _this13.move(selected);
          });
          this.text('暂存位', -251, -401, 21, muted, 120, 40);
          for (var i = 0; i < game.capacity; i++) {
            var x = -105 + i * 95;
            this.panel("Slot" + i, x, -401, 88, 70, '#E9E5D9', 17);
            if (game.buffer[i]) this.badge(game.buffer[i], x, -401, this.node, 50);else this.text('空', x, -401, 20, muted, 70, 40);
          }
          this.message = this.text(game.timedOut ? '时间到！重新整理，再挑战一次。' : game.won ? '送达！每一个包裹都有了去处。' : game.stuck ? '暂存满了，可扩容或撤销换个顺序。' : game.level.hint, 0, -456, 21, game.timedOut || game.stuck ? palette.red : muted, 650, 40);
          this.button('PostExpand', game.canExpand ? '扩容 +1 · 一次' : '扩容不可用', -210, -500, 198, 44, function () {
            if (!_this13.clock.paused && game.expandBuffer()) {
              _this13.showGame();
              _this13.say('本局增加一个暂存位，撤销不会重复获得道具。');
            }
          }, game.canExpand, '#E3E9DA', ink);
          this.button('PostExtend', game.canExtend ? '免费 +15秒' : '加时不可用', 0, -500, 198, 44, function () {
            if (!_this13.clock.paused && game.extendTime()) {
              _this13.showGame();
              _this13.say('已增加15秒，继续规划配送顺序。');
            }
          }, game.canExtend, '#E3E9DA', ink);
          this.button('PostRewardAd', game.canRewardTime ? '模拟广告 +30秒' : '奖励已用/不可用', 210, -500, 198, 44, function () {
            return void _this13.requestRewardTime();
          }, game.canRewardTime, '#E3E9DA', ink);
          this.button('Undo', '↶ 撤销', -159, -562, 296, 60, function () {
            if (game.undo()) _this13.showGame();
          }, game.canUndo, '#E3E9DA', ink);
          this.button('Restart', '重新整理', 159, -562, 296, 60, function () {
            ++_this13.postSession;
            _this13.player.retry();
            game.restart();
            _this13.player.start('arrows', _this13.postMode, game.level.id);
            _this13.timeoutShown = false;
            _this13.showGame();
          }, true, '#E3E9DA', ink);
          if (game.won) {
            this.panel('Victory', 0, -40, 530, 230, '#E4EBDC', 26);
            this.text(this.levelIndex === this.levels.length - 1 ? '今日信件，全部送达！' : '叮！配送完成', 0, 0, 32);
            this.text('顺序理清了，心情也轻了一点。', 0, -65, 22, muted);
            this.button('NextLevel', this.endlessStage ? '生成下一关 →' : this.levelIndex < this.levels.length - 1 ? '下一站 →' : '无限闯关 · 继续挑战 →', 0, -618, 614, 44, function () {
              return _this13.endlessStage ? _this13.openEndless(_this13.endlessStage + 1) : _this13.levelIndex < _this13.levels.length - 1 ? _this13.openLevel(_this13.levelIndex + 1) : _this13.openEndless(nextEndlessStage(_this13.player.progress('arrows', 'practice')));
            });
          } else if (game.timedOut) {
            this.panel('Timeout', 0, -60, 530, 300, '#F3DFD3', 26);
            this.text('时间到，急件没赶上！', 0, 0, 32, palette.red);
            this.text(game.canRewardTime ? '可模拟广告续时，或免费重新整理' : '本局奖励已用，可免费重新整理', 0, -65, 22, ink, 500, 44);
            this.button('PostReviveAd', game.canRewardTime ? '模拟广告续时 +30秒' : '本局奖励已用', 0, -135, 460, 60, function () {
              return void _this13.requestRewardTime();
            }, game.canRewardTime);
          } else this.text('点线条抽出 · 箭头指向出口 · 可随时重试', 0, -618, 20, muted, 660, 28);
        };
        _proto.showOrders = function showOrders(page) {
          var _this14 = this;
          if (page === void 0) {
            var _this$game$order, _this$game;
            page = Math.floor(((_this$game$order = (_this$game = this.game) == null ? void 0 : _this$game.order) != null ? _this$game$order : 0) / 24);
          }
          var game = this.game;
          if (!game || this.orderOverlay) return;
          this.orderOverlay = true;
          var cover = this.panel('OrderOverlay', 0, 0, 720, 1280, paper, 0);
          cover.on(Node.EventType.TOUCH_END, function (event) {
            return event.propagationStopped = true;
          });
          this.clockLabel = this.text('', 0, 549, 27, ink, 220, 48);
          this.refreshClock();
          this.text('完整配送顺序', 0, 474, 38);
          this.text("\u7B2C " + (page + 1) + " / " + Math.ceil(game.level.orders.length / 24) + " \u9875 \xB7 \u8BA1\u65F6\u7EE7\u7EED", 0, 409, 22, muted);
          game.level.orders.slice(page * 24, page * 24 + 24).forEach(function (parcel, local) {
            var i = page * 24 + local;
            var x = -240 + local % 6 * 96,
              y = 290 - Math.floor(local / 6) * 136;
            _this14.badge(parcel, x, y, _this14.node, 58, i === game.order);
            _this14.text(String(i + 1), x, y - 49, 21, i < game.order ? muted : ink, 70, 38);
          });
          var turn = function turn(next) {
            _this14.showGame();
            _this14.showOrders(next);
          };
          this.button('OrdersPrev', '上一页', -159, -358, 280, 62, function () {
            return turn(page - 1);
          }, page > 0, '#E3E9DA', ink);
          this.button('OrdersNext', '下一页', 159, -358, 280, 62, function () {
            return turn(page + 1);
          }, (page + 1) * 24 < game.level.orders.length, '#E3E9DA', ink);
          this.button('CloseOrders', '返回棋盘', 0, -488, 600, 76, function () {
            return _this14.showGame();
          });
        };
        _proto.drawThread = function drawThread(node, t, distance) {
          var _node$getComponent, _node$getChildByName;
          var g = (_node$getComponent = node.getComponent(Graphics)) != null ? _node$getComponent : node.addComponent(Graphics);
          g.clear();
          var size = this.game.level.size,
            center = (size - 1) / 2,
            pitch = 560 / (size - 1);
          var points = t.cells.map(function (cell) {
            return {
              x: (cell[1] - center) * pitch,
              y: (center - cell[0]) * pitch
            };
          });
          var end = points[points.length - 1],
            prev = points[points.length - 2];
          var dx = (end.x - prev.x) / pitch,
            dy = (end.y - prev.y) / pitch;
          var total = (points.length - 1) * pitch;
          var at = function at(s) {
            if (s >= total) return {
              x: end.x + dx * (s - total),
              y: end.y + dy * (s - total)
            };
            var position = s / pitch,
              index = Math.min(points.length - 2, Math.floor(position)),
              f = position - index;
            return {
              x: points[index].x + (points[index + 1].x - points[index].x) * f,
              y: points[index].y + (points[index + 1].y - points[index].y) * f
            };
          };
          var vertices = [at(distance)];
          for (var i = Math.floor(distance / pitch) + 1; i * pitch < distance + total; i++) vertices.push(at(i * pitch));
          vertices.push(at(distance + total));
          g.strokeColor = this.color(palette[t.parcel]);
          g.lineWidth = Math.min(13, pitch * .28);
          g.moveTo(vertices[0].x, vertices[0].y);
          for (var _i = 1; _i < vertices.length - 1; _i++) {
            var a = vertices[_i - 1],
              b = vertices[_i],
              c = vertices[_i + 1];
            if (Math.abs((b.x - a.x) * (c.y - b.y) - (b.y - a.y) * (c.x - b.x)) < .001) continue;
            var r = Math.min(19, Math.hypot(b.x - a.x, b.y - a.y) / 2, Math.hypot(c.x - b.x, c.y - b.y) / 2);
            var ab = Math.hypot(b.x - a.x, b.y - a.y),
              bc = Math.hypot(c.x - b.x, c.y - b.y);
            g.lineTo(b.x - (b.x - a.x) / ab * r, b.y - (b.y - a.y) / ab * r);
            g.quadraticCurveTo(b.x, b.y, b.x + (c.x - b.x) / bc * r, b.y + (c.y - b.y) / bc * r);
          }
          var arrow = Math.min(17, pitch * .4),
            wing = arrow * .76;
          var h = vertices[vertices.length - 1];
          g.lineTo(h.x, h.y);
          g.stroke();
          g.moveTo(h.x - dx * arrow - dy * wing, h.y - dy * arrow + dx * wing);
          g.lineTo(h.x, h.y);
          g.lineTo(h.x - dx * arrow + dy * wing, h.y - dy * arrow - dx * wing);
          g.stroke();
          var tail = vertices[0];
          g.fillColor = this.color(palette[t.parcel]);
          g.circle(tail.x, tail.y, Math.min(16, pitch * .35));
          g.fill();
          // Text labels allow matching parcels without relying only on colour.
          var label = (_node$getChildByName = node.getChildByName('ParcelName')) != null ? _node$getChildByName : this.text(names[t.parcel], tail.x, tail.y, Math.min(20, pitch * .64), '#FFFFFF', 32, 36, node).node;
          label.name = 'ParcelName';
          label.setPosition(tail.x, tail.y);
        };
        _proto.move = function move(thread) {
          var game = this.game;
          if (!game || this.orderOverlay || this.clock.paused || this.rewardRequest.busy) return;
          if (!game.busy && !game.won && !game.timedOut) this.player.action();
          var result = game.begin(thread.id);
          if (!result.ok) {
            if (result.reason === 'blocked') {
              this.say('这条线的出口被挡住了，先抽走挡路的线。', palette.red);
              this.play('blocked');
            }
            if (result.reason === 'full') {
              this.say('暂存位满了：先配送当前订单，或撤销一步。', palette.red);
              this.play('blocked');
            }
            return;
          }
          var node = this.board.getChildByName('ThreadLayer').getChildByName("Thread-" + thread.id);
          this.animation = {
            thread: thread,
            node: node,
            elapsed: 0,
            token: result.token,
            epoch: this.epoch,
            game: game
          };
          this.play('pull');
          this.say('包裹正在出发…');
        };
        _proto.refreshClock = function refreshClock() {
          var game = this.game;
          if (!this.clockLabel || !game) return;
          var left = game.remainingSeconds;
          this.clockLabel.string = game.won ? '配送完成' : left === null ? '不限时' : Math.floor(left / 60) + ":" + (left % 60 < 10 ? '0' : '') + left % 60;
          this.clockLabel.color = this.color(left !== null && left <= 20 ? palette.red : ink);
        };
        _proto.update = function update(dt) {
          var _this$game2;
          if (this.clock.paused) return;
          this.refreshClock();
          if ((_this$game2 = this.game) != null && _this$game2.timedOut && !this.timeoutShown) {
            if (this.animation) this.game.finish(this.animation.token);
            this.timeoutShown = true;
            this.showGame();
            return;
          }
          var a = this.animation;
          if (!a) return;
          a.elapsed += dt;
          this.drawThread(a.node, a.thread, Math.pow(Math.min(1, a.elapsed / .42), 2) * 850);
          if (a.elapsed >= .42) {
            this.animation = null;
            if (a.epoch !== this.epoch || a.game !== this.game) return;
            var delivered = a.game.finish(a.token);
            this.showGame();
            this.play(delivered > 1 ? 'chain' : delivered === 1 ? 'deliver' : 'pull');
            if (!a.game.won && !a.game.stuck) this.say(delivered > 1 ? "\u8FDE\u9001 " + delivered + " \u4EFD\uFF01\u6682\u5B58\u91CC\u7684\u5305\u88F9\u4E5F\u51FA\u53D1\u4E86\u3002" : delivered === 1 ? '送达！看看下一份订单。' : '包裹暂存好了。留意空位，继续找出口。');
          }
        };
        _proto.play = function play(id) {
          var clip = this.clips.get(id);
          if (!this.clock.paused && !this.muted && clip) this.sound.playOneShot(clip, .55);
        };
        _proto.badge = function badge(parcel, x, y, parent, size, active) {
          if (active === void 0) {
            active = false;
          }
          var n = this.makeNode("Parcel-" + parcel, x, y, size, size, parent),
            g = n.addComponent(Graphics);
          g.fillColor = this.color(palette[parcel]);
          g.roundRect(-size / 2, -size / 2, size, size, 13);
          g.fill();
          if (active) {
            g.strokeColor = this.color(ink);
            g.lineWidth = 3;
            g.roundRect(-size / 2 - 6, -size / 2 - 6, size + 12, size + 12, 17);
            g.stroke();
          }
          this.text(names[parcel], 0, 0, 24, '#FFFFFF', size, size, n);
        };
        _proto.say = function say(s, color) {
          if (color === void 0) {
            color = muted;
          }
          if (this.message) {
            this.message.string = s;
            this.message.color = this.color(color);
          }
        };
        _proto.color = function color(hex) {
          return new Color().fromHEX(hex);
        };
        _proto.makeNode = function makeNode(name, x, y, w, h, parent) {
          if (parent === void 0) {
            parent = this.node;
          }
          var n = new Node(name);
          n.layer = this.node.layer;
          n.setParent(parent);
          n.setPosition(x, y);
          n.addComponent(UITransform).setContentSize(w, h);
          return n;
        };
        _proto.panel = function panel(name, x, y, w, h, fill, r, parent) {
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.makeNode(name, x, y, w, h, parent),
            g = n.addComponent(Graphics);
          g.fillColor = this.color(fill);
          g.roundRect(-w / 2, -h / 2, w, h, r);
          g.fill();
          return n;
        };
        _proto.text = function text(value, x, y, size, color, width, height, parent) {
          if (color === void 0) {
            color = ink;
          }
          if (width === void 0) {
            width = 660;
          }
          if (height === void 0) {
            height = 64;
          }
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.makeNode('Text', x, y, width, height, parent),
            l = n.addComponent(Label);
          l.string = value;
          l.fontSize = size;
          l.lineHeight = size + 10;
          l.color = this.color(color);
          l.horizontalAlign = Label.HorizontalAlign.CENTER;
          l.verticalAlign = Label.VerticalAlign.CENTER;
          l.overflow = Label.Overflow.SHRINK;
          return l;
        };
        _proto.button = function button(name, value, x, y, w, h, action, enabled, fill, foreground, parent) {
          if (enabled === void 0) {
            enabled = true;
          }
          if (fill === void 0) {
            fill = ink;
          }
          if (foreground === void 0) {
            foreground = '#FFFDF6';
          }
          if (parent === void 0) {
            parent = this.node;
          }
          var n = this.panel(name, x, y, w, h, enabled ? fill : '#DEDCCD', 18, parent);
          this.text(value, 0, 0, 24, enabled ? foreground : muted, w - 16, h, n);
          if (enabled) n.on(Node.EventType.TOUCH_END, action);
          return n;
        };
        return MiniGameLabHome;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/local-data.ts", ['cc', './storage-value.ts', './trial-export.ts'], function (exports) {
  var cclegacy, sys, normalizeStoredValue;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      normalizeStoredValue = module.normalizeStoredValue;
    }, function (module) {
      var _setter = {};
      _setter.exportTrialFile = module.exportTrialFile;
      _setter.trialExportLabel = module.trialExportLabel;
      exports(_setter);
    }],
    execute: function () {
      cclegacy._RF.push({}, "970bbAlQRxLRodoU5zwqPMI", "local-data", undefined);
      /** Cocos selects its supported local storage; the rules layer never imports cc. */
      var localStoragePort = exports('localStoragePort', {
        get: function get(key) {
          return normalizeStoredValue(sys.localStorage.getItem(key));
        },
        set: function set(key, value) {
          return sys.localStorage.setItem(key, value);
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./migrate-canvas.ts', './active-clock.ts', './arrows.ts', './bead-viewport.ts', './beads.ts', './catalog.ts', './contracts.ts', './daily-post.ts', './differences.ts', './endless-post.ts', './player-data.ts', './post-generation.ts', './post.ts', './router.ts', './safe-layout.ts', './storage-value.ts', './local-data.ts', './rewarded-ad.ts', './trial-export.ts', './BeadView.ts', './DifferenceView.ts', './Home.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/migrate-canvas.ts", ['cc'], function () {
  var cclegacy, director, Director, Canvas, Camera, game, Node;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      Canvas = module.Canvas;
      Camera = module.Camera;
      game = module.game;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9527eozczlBLZ24WbR+rNpQ", "migrate-canvas", undefined);
      var customLayerMask = 0x000fffff;
      var builtinLayerMask = 0xfff00000;
      director.on(Director.EVENT_AFTER_SCENE_LAUNCH, function () {
        var _director$getScene, _director$getScene2, _director$getScene3;
        var roots = (_director$getScene = director.getScene()) == null ? void 0 : _director$getScene.children;
        var allCanvases = (_director$getScene2 = director.getScene()) == null ? void 0 : _director$getScene2.getComponentsInChildren(Canvas);
        if (allCanvases.length <= 1) {
          return;
        }
        allCanvases = allCanvases.filter(function (x) {
          return !!x.cameraComponent;
        });
        var allCameras = (_director$getScene3 = director.getScene()) == null ? void 0 : _director$getScene3.getComponentsInChildren(Camera);
        var usedLayer = 0;
        allCameras.forEach(function (x) {
          return usedLayer |= x.visibility & customLayerMask;
        });
        var persistCanvas = [];
        for (var i = 0, l = roots.length; i < l; i++) {
          var root = roots[i];
          if (!game.isPersistRootNode(root)) {
            continue;
          }
          var canvases = root.getComponentsInChildren(Canvas);
          if (canvases.length === 0) {
            continue;
          }
          persistCanvas.push.apply(persistCanvas, canvases.filter(function (x) {
            return !!x.cameraComponent;
          }));
        }
        persistCanvas.forEach(function (val) {
          var isLayerCollided = allCanvases.find(function (x) {
            return x !== val && x.cameraComponent.visibility & val.cameraComponent.visibility & customLayerMask;
          });
          if (isLayerCollided) {
            var availableLayers = ~usedLayer;
            var lastAvailableLayer = availableLayers & ~(availableLayers - 1);
            val.cameraComponent.visibility = lastAvailableLayer | val.cameraComponent.visibility & builtinLayerMask;
            setChildrenLayer(val.node, lastAvailableLayer);
            usedLayer |= availableLayers;
          }
        });
      });
      function setChildrenLayer(node, layer) {
        for (var i = 0, l = node.children.length; i < l; i++) {
          node.children[i].layer = layer;
          setChildrenLayer(node.children[i], layer);
        }
      }
      var setParentEngine = Node.prototype.setParent;
      {
        Node.prototype.setParent = function (value, keepWorldTransform) {
          setParentEngine.call(this, value, keepWorldTransform);
          if (!value) {
            return;
          }
          // find canvas
          var layer = getCanvasCameraLayer(this);
          if (layer) {
            this.layer = layer;
            setChildrenLayer(this, layer);
          }
        };
      }
      function getCanvasCameraLayer(node) {
        var layer = 0;
        var canvas = node.getComponent(Canvas);
        if (canvas && canvas.cameraComponent) {
          if (canvas.cameraComponent.visibility & canvas.node.layer) {
            layer = canvas.node.layer;
          } else {
            layer = canvas.cameraComponent.visibility & ~(canvas.cameraComponent.visibility - 1);
          }
          return layer;
        }
        if (node.parent) {
          layer = getCanvasCameraLayer(node.parent);
        }
        return layer;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/player-data.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _createClass, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('encodePlayerSave', encodePlayerSave);
      cclegacy._RF.push({}, "e7a1bel7AFMKaqTBXyy6z1m", "player-data", undefined);
      var SAVE_KEY = exports('SAVE_KEY', 'minigamelab.player.v1'),
        BACKUP_KEY = exports('BACKUP_KEY', SAVE_KEY + '.backup');
      var noPlayHooks = exports('noPlayHooks', {
        start: function start() {},
        action: function action() {},
        win: function win() {},
        retry: function retry() {},
        leave: function leave() {}
      });
      var games = ['arrows', 'beads', 'differences'],
        names = ['start', 'first_action', 'win', 'fail', 'retry', 'exit'];
      var validId = function validId(s) {
        return typeof s === 'string' && /^[a-z0-9][a-z0-9-]{0,79}$/.test(s);
      };
      var number = function number(n) {
        return typeof n === 'number' && Number.isFinite(n) && n >= 0 && n <= Number.MAX_SAFE_INTEGER;
      };
      var empty = function empty() {
        return {
          version: 1,
          muted: false,
          lastModes: {
            arrows: 'main',
            beads: 'main',
            differences: 'main'
          },
          progress: {},
          events: [],
          nextEventId: 1
        };
      };
      /** Detects accidental corruption, not a security signature. */
      function checksum(text) {
        var h = 2166136261;
        for (var i = 0; i < text.length; i++) {
          h ^= text.charCodeAt(i);
          h = Math.imul(h, 16777619);
        }
        return ('00000000' + (h >>> 0).toString(16)).slice(-8);
      }
      function encodePlayerSave(value) {
        var payload = JSON.stringify(value);
        return JSON.stringify({
          payload: payload,
          checksum: checksum(payload)
        });
      }
      function decode(text) {
        if (text.length > 2000000) throw Error('Oversized save');
        var envelope = JSON.parse(text);
        if (typeof envelope.payload !== 'string' || checksum(envelope.payload) !== envelope.checksum) throw Error('Checksum');
        var d = JSON.parse(envelope.payload);
        if ((d == null ? void 0 : d.version) > 1) throw Error('Newer save');
        if ((d == null ? void 0 : d.version) !== 1 || typeof d.muted !== 'boolean' || !d.progress || typeof d.progress !== 'object' || Array.isArray(d.progress) || !Array.isArray(d.events) || d.events.length > 500 || !Number.isSafeInteger(d.nextEventId) || d.nextEventId < 1) throw Error('Invalid save');
        var result = empty();
        result.muted = d.muted;
        result.nextEventId = d.nextEventId;
        if (d.lastModes !== undefined) {
          if (!d.lastModes || typeof d.lastModes !== 'object' || Object.keys(d.lastModes).some(function (k) {
            return games.indexOf(k) < 0;
          })) throw Error('Invalid last modes');
          for (var _i = 0, _games = games; _i < _games.length; _i++) {
            var game = _games[_i];
            var mode = d.lastModes[game];
            if (mode !== 'main' && !(game === 'arrows' && mode === 'practice')) throw Error('Invalid last mode');
            result.lastModes[game] = mode;
          }
        }
        for (var _i2 = 0, _Object$keys = Object.keys(d.progress); _i2 < _Object$keys.length; _i2++) {
          var key = _Object$keys[_i2];
          var value = d.progress[key];
          if (['arrows:main', 'arrows:practice', 'beads:main', 'differences:main'].indexOf(key) < 0) throw Error('Invalid mode');
          var p = value;
          if (!p || p.lastLevel !== null && !validId(p.lastLevel) || !Array.isArray(p.completed) || p.completed.length > 1000 || !p.completed.every(validId) || new Set(p.completed).size !== p.completed.length || !p.best || typeof p.best !== 'object' || Array.isArray(p.best) || Object.keys(p.best).length > 1000) throw Error('Invalid progress');
          var best = {};
          for (var _i3 = 0, _Object$keys2 = Object.keys(p.best); _i3 < _Object$keys2.length; _i3++) {
            var id = _Object$keys2[_i3];
            var b = p.best[id];
            if (!validId(id) || !b || !number(b.score) || b.score > 10000 || !number(b.elapsedMs)) throw Error('Invalid result');
            best[id] = {
              score: b.score,
              elapsedMs: b.elapsedMs
            };
          }
          result.progress[key] = {
            lastLevel: p.lastLevel,
            completed: p.completed.slice(),
            best: best
          };
        }
        var seq = 0;
        for (var _i4 = 0, _arr = d.events; _i4 < _arr.length; _i4++) {
          var e = _arr[_i4];
          if (!e || !Number.isSafeInteger(e.seq) || e.seq <= seq || e.seq >= d.nextEventId || !number(e.at) || !number(e.elapsedMs) || games.indexOf(e.game) < 0 || ['main', 'practice'].indexOf(e.mode) < 0 || e.mode === 'practice' && e.game !== 'arrows' || !validId(e.level) || typeof e.round !== 'string' || !/^\d+-\d+$/.test(e.round) || names.indexOf(e.name) < 0 || e.score !== undefined && (!number(e.score) || e.score > 10000) || e.reason !== undefined && ['stuck', 'timeout', 'home'].indexOf(e.reason) < 0) throw Error('Invalid event');
          seq = e.seq;
          result.events.push(_extends({
            seq: e.seq,
            at: e.at,
            round: e.round,
            game: e.game,
            mode: e.mode,
            level: e.level,
            name: e.name,
            elapsedMs: e.elapsedMs
          }, e.score === undefined ? {} : {
            score: e.score
          }, e.reason === undefined ? {} : {
            reason: e.reason
          }));
        }
        return result;
      }
      var PlayerData = exports('PlayerData', /*#__PURE__*/function () {
        function PlayerData(storage, now, wall) {
          if (now === void 0) {
            now = function now() {
              return performance.now();
            };
          }
          if (wall === void 0) {
            wall = function wall() {
              return Date.now();
            };
          }
          this.data = empty();
          this.round = null;
          this.readOnly = false;
          this.status = 'new';
          this.storage = void 0;
          this.now = void 0;
          this.wall = void 0;
          this.storage = storage;
          this.now = now;
          this.wall = wall;
          try {
            var main = storage.get(SAVE_KEY),
              backup = storage.get(BACKUP_KEY);
            for (var _iterator = _createForOfIteratorHelperLoose([main, backup].entries()), _step; !(_step = _iterator()).done;) {
              var _step$value = _step.value,
                i = _step$value[0],
                text = _step$value[1];
              if (text === null) continue;
              try {
                this.data = decode(text);
                this.status = i === 0 ? 'ok' : 'recovered';
                return;
              } catch (error) {
                if (error.message === 'Newer save') {
                  this.status = 'newer';
                  this.readOnly = true;
                  return;
                }
              }
            }
            this.status = main !== null || backup !== null ? 'reset' : 'new';
          } catch (_unused) {
            this.status = 'unavailable';
            this.readOnly = true;
          }
        }
        var _proto = PlayerData.prototype;
        _proto.lastMode = function lastMode(game) {
          return this.data.lastModes[game];
        };
        _proto.progress = function progress(game, mode) {
          var _this$data$progress;
          if (mode === void 0) {
            mode = 'main';
          }
          return JSON.parse(JSON.stringify((_this$data$progress = this.data.progress[game + ":" + mode]) != null ? _this$data$progress : {
            lastLevel: null,
            completed: [],
            best: {}
          }));
        };
        _proto.setMuted = function setMuted(value) {
          this.data.muted = value;
          this.persist();
        };
        _proto.persist = function persist() {
          if (this.readOnly) return;
          try {
            var old = this.storage.get(SAVE_KEY);
            var valid = false;
            if (old !== null) {
              try {
                decode(old);
                valid = true;
              } catch (e) {
                if (e.message === 'Newer save') {
                  this.readOnly = true;
                  this.status = 'newer';
                  return;
                }
              }
            }
            var next = encodePlayerSave(this.data);
            if (valid) this.storage.set(BACKUP_KEY, old);else {
              var backup = this.storage.get(BACKUP_KEY);
              var backupValid = false;
              if (backup !== null) {
                try {
                  decode(backup);
                  backupValid = true;
                } catch (_unused2) {}
              }
              if (!backupValid) this.storage.set(BACKUP_KEY, next);
            }
            this.storage.set(SAVE_KEY, next);
          } catch (_unused3) {
            this.status = 'unavailable';
            this.readOnly = true;
          }
        };
        _proto.start = function start(game, mode, level) {
          var _this$data$progress$k;
          if (games.indexOf(game) < 0 || !validId(level) || mode !== 'main' && mode !== 'practice' || mode === 'practice' && game !== 'arrows') throw Error('Invalid round');
          this.leave();
          this.data.lastModes[game] = mode;
          var key = game + ":" + mode,
            p = (_this$data$progress$k = this.data.progress[key]) != null ? _this$data$progress$k : {
              lastLevel: null,
              completed: [],
              best: {}
            };
          p.lastLevel = level;
          this.data.progress[key] = p;
          this.round = {
            game: game,
            mode: mode,
            level: level,
            id: Math.floor(this.wall()) + "-" + this.data.nextEventId,
            started: this.now(),
            acted: false,
            won: false,
            failed: new Set()
          };
          this.record('start');
        };
        _proto.action = function action() {
          if (!this.round || this.round.acted || this.round.won) return;
          this.round.acted = true;
          this.record('first_action');
        };
        _proto.win = function win(score, elapsedMs) {
          var r = this.round;
          if (!r || r.won) return;
          if (score !== undefined && (!number(score) || score > 10000)) throw Error('Invalid score');
          if (elapsedMs !== undefined && !number(elapsedMs)) throw Error('Invalid time');
          r.won = true;
          var p = this.data.progress[r.game + ":" + r.mode];
          if (p.completed.indexOf(r.level) < 0) p.completed.push(r.level);
          if (p.completed.length > 1000) p.completed = p.completed.slice(-1000);
          if (score !== undefined && elapsedMs !== undefined) {
            var old = p.best[r.level];
            if (!old || score > old.score || score === old.score && elapsedMs < old.elapsedMs) p.best[r.level] = {
              score: score,
              elapsedMs: elapsedMs
            };
          }
          this.record('win', score === undefined ? {} : {
            score: score
          }, elapsedMs);
        };
        _proto.fail = function fail(reason) {
          var r = this.round;
          if (!r || r.won || r.failed.has(reason)) return;
          r.failed.add(reason);
          this.record('fail', {
            reason: reason
          });
        };
        _proto.retry = function retry() {
          if (!this.round) return;
          this.record('retry');
          this.round = null;
        };
        _proto.leave = function leave() {
          if (!this.round) return;
          if (!this.round.won) this.record('exit', {
            reason: 'home'
          });
          this.round = null;
        };
        _proto.record = function record(name, extra, elapsedMs) {
          if (extra === void 0) {
            extra = {};
          }
          var r = this.round;
          this.data.events.push(_extends({
            seq: this.data.nextEventId++,
            at: Math.floor(this.wall()),
            round: r.id,
            game: r.game,
            mode: r.mode,
            level: r.level,
            name: name,
            elapsedMs: Math.round(elapsedMs != null ? elapsedMs : Math.max(0, this.now() - r.started))
          }, extra));
          this.data.events = this.data.events.slice(-500);
          this.persist();
        };
        _proto.events = function events() {
          return this.data.events.map(function (e) {
            return _extends({}, e);
          });
        };
        _proto.clearEvents = function clearEvents() {
          this.data.events = [];
          this.persist();
        };
        _proto.exportLog = function exportLog() {
          return JSON.stringify({
            format: 'minigamelab-trials',
            version: 1,
            exportedAt: Math.floor(this.wall()),
            limit: 500,
            events: this.events()
          }, null, 2);
        };
        _createClass(PlayerData, [{
          key: "muted",
          get: function get() {
            return this.data.muted;
          }
        }, {
          key: "eventCount",
          get: function get() {
            return this.data.events.length;
          }
        }, {
          key: "notice",
          get: function get() {
            return {
              "new": '进度自动保存在本机',
              ok: '进度自动保存在本机',
              recovered: '存档异常，已恢复上一份有效备份',
              reset: '存档与备份异常，已安全重建本地进度',
              unavailable: '本地保存不可用，本次进度暂不保存',
              newer: '存档来自较新版本，本次仅试玩，不覆盖原档'
            }[this.status];
          }
        }]);
        return PlayerData;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/post-generation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './post.ts'], function (exports) {
  var _extends, _createForOfIteratorHelperLoose, cclegacy, parsePostLevels, PostGame;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      parsePostLevels = module.parsePostLevels;
      PostGame = module.PostGame;
    }],
    execute: function () {
      exports({
        generatePostLevel: generatePostLevel,
        postFingerprint: postFingerprint,
        ratePostLevel: ratePostLevel,
        screenPostCandidates: screenPostCandidates,
        solvePostLevel: solvePostLevel
      });
      cclegacy._RF.push({}, "e0c4aqYpvRNpYExVVWZpGmM", "post-generation", undefined);
      // Precompute all ray blockers; the live game remains authoritative for each move.
      function dependencies(level) {
        var occupied = new Map();
        level.threads.forEach(function (t) {
          return t.cells.forEach(function (c) {
            return occupied.set(c.join(':'), t.id);
          });
        });
        return new Map(level.threads.map(function (t) {
          if (new PostGame(_extends({}, level, {
            threads: [t],
            orders: [t.parcel]
          }), function () {
            return 0;
          }).blocker(t.id)) return [t.id, [t.id]];
          var head = t.cells[t.cells.length - 1],
            prev = t.cells[t.cells.length - 2],
            dr = head[0] - prev[0],
            dc = head[1] - prev[1],
            ids = new Set();
          for (var r = head[0] + dr, c = head[1] + dc; r >= 0 && c >= 0 && r < level.size && c < level.size; r += dr, c += dc) {
            var id = occupied.get(r + ":" + c);
            if (id && id !== t.id) ids.add(id);
          }
          return [t.id, Array.from(ids)];
        }));
      }
      function solvePostLevel(input, maxNodes) {
        if (maxNodes === void 0) {
          maxNodes = 100000;
        }
        if (!Number.isInteger(maxNodes) || maxNodes < 1) throw Error('搜索节点上限必须为正整数');
        var level = parsePostLevels([input])[0],
          game = new PostGame(level, function () {
            return 0;
          }),
          deps = dependencies(level),
          failed = new Set(),
          trail = [];
        var unlock = new Map(level.threads.map(function (t) {
          return [t.id, Array.from(deps.values()).filter(function (ids) {
            return ids.indexOf(t.id) >= 0;
          }).length];
        }));
        var visited = 0,
          solution = [];
        function search() {
          if (game.won) {
            solution = trail.slice();
            return 'solved';
          }
          var remaining = game.threads,
            ids = new Set(remaining.map(function (t) {
              return t.id;
            }));
          // Buffer order has no effect on which colours can be automatically delivered.
          var key = JSON.stringify([remaining.map(function (t) {
            return t.id;
          }), game.order, game.buffer.slice().sort()]);
          if (failed.has(key)) return 'unsolvable';
          if (visited >= maxNodes) return 'limit';
          ++visited;
          var current = level.orders[game.order],
            hasSpace = game.buffer.length < level.capacity;
          var legal = remaining.filter(function (t) {
            return (hasSpace || t.parcel === current) && deps.get(t.id).every(function (id) {
              return !ids.has(id);
            });
          });
          legal.sort(function (a, b) {
            return Number(b.parcel === current) - Number(a.parcel === current) || unlock.get(b.id) - unlock.get(a.id) || a.id.localeCompare(b.id);
          });
          for (var _iterator = _createForOfIteratorHelperLoose(legal), _step; !(_step = _iterator()).done;) {
            var thread = _step.value;
            var move = game.begin(thread.id);
            if (!move.ok) throw Error('求解器与游戏阻挡规则不一致');
            game.finish(move.token);
            trail.push(thread.id);
            var result = search();
            trail.pop();
            game.undo();
            if (result !== 'unsolvable') return result;
          }
          failed.add(key);
          return 'unsolvable';
        }
        var status = search();
        return {
          status: status,
          steps: status === 'solved' ? solution : [],
          visited: visited
        };
      }
      function generatePostLevel(options) {
        var _options$capacity;
        var seed = options.seed,
          count = options.count,
          size = options.size,
          timeLimitSeconds = options.timeLimitSeconds;
        var capacity = (_options$capacity = options.capacity) != null ? _options$capacity : 3;
        if (!Number.isInteger(capacity) || capacity < 1 || capacity > 3) throw Error('暂存容量错误');
        if (!Number.isInteger(seed) || seed < 0 || seed > 0xFFFFFFFF || !Number.isInteger(size) || size < 3 || size > 18 || !Number.isInteger(count) || count < 3 || count > Math.floor(size * size / 2)) throw Error('生成参数错误');
        if (timeLimitSeconds !== undefined && (!Number.isInteger(timeLimitSeconds) || timeLimitSeconds < 1 || timeLimitSeconds > 3600)) throw Error('限时参数错误');
        var state = seed || 0x6D2B79F5;
        var random = function random() {
          state ^= state << 13;
          state ^= state >>> 17;
          state ^= state << 5;
          return (state >>> 0) / 4294967296;
        };
        var pick = function pick(items) {
          return items[Math.floor(random() * items.length)];
        };
        var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]],
          colors = ['red', 'blue', 'gold', 'green', 'purple', 'orange'];
        var _loop = function _loop() {
            var threads = [],
              occupied = new Set();
            var _loop2 = function _loop2() {
                var head = [Math.floor(random() * size), Math.floor(random() * size)],
                  dir = pick(dirs);
                if (occupied.has(head.join(':'))) return 0; // continue
                var clear = true;
                for (var r = head[0] + dir[0], c = head[1] + dir[1]; r >= 0 && c >= 0 && r < size && c < size; r += dir[0], c += dir[1]) if (occupied.has(r + ":" + c)) {
                  clear = false;
                  break;
                }
                if (!clear) return 0; // continue
                var chain = [head],
                  local = new Set([head.join(':')]),
                  length = 3 + Math.floor(random() * 4);
                var _loop4 = function _loop4() {
                  var prev = chain[chain.length - 1];
                  var choices = (k === 1 ? [[-dir[0], -dir[1]]] : dirs).map(function (_ref) {
                    var dr = _ref[0],
                      dc = _ref[1];
                    return [prev[0] + dr, prev[1] + dc];
                  }).filter(function (_ref2) {
                    var r = _ref2[0],
                      c = _ref2[1];
                    return r >= 0 && c >= 0 && r < size && c < size && !occupied.has(r + ":" + c) && !local.has(r + ":" + c);
                  });
                  if (!choices.length) return 1; // break
                  var cell = pick(choices);
                  chain.push(cell);
                  local.add(cell.join(':'));
                };
                for (var k = 1; k < length; k++) {
                  if (_loop4()) break;
                }
                if (chain.length < 2) return 0; // continue
                var thread = {
                  id: "t" + threads.length,
                  parcel: 'red',
                  cells: chain.reverse()
                };
                if (new PostGame({
                  id: 'self',
                  name: '',
                  hint: '',
                  size: size,
                  capacity: 3,
                  orders: ['red'],
                  threads: [thread]
                }, function () {
                  return 0;
                }).blocker(thread.id)) return 0; // continue
                threads.push(thread);
                thread.cells.forEach(function (c) {
                  return occupied.add(c.join(':'));
                });
              },
              _ret2;
            for (var attempt = 0; attempt < 10000 && threads.length < count; attempt++) {
              _ret2 = _loop2();
              if (_ret2 === 0) continue;
            }
            if (threads.length !== count) return 0; // continue
            var constructionSolution = threads.slice().reverse().map(function (t) {
                return t.id;
              }),
              orders = [],
              parcels = new Map();
            var _loop3 = function _loop3(_i) {
              var shuffled = colors.slice();
              for (var j = shuffled.length - 1; j > 0; j--) {
                var k = Math.floor(random() * (j + 1));
                var _ref3 = [shuffled[k], shuffled[j]];
                shuffled[j] = _ref3[0];
                shuffled[k] = _ref3[1];
              }
              var chunk = constructionSolution.slice(_i, _i + (_i === 0 ? capacity + 1 : 2 + Math.floor(random() * capacity)));
              chunk.forEach(function (id, k) {
                return parcels.set(id, shuffled[k]);
              });
              orders.push.apply(orders, [shuffled[chunk.length - 1]].concat(shuffled.slice(0, chunk.length - 1)));
              _i += chunk.length;
              i = _i;
            };
            for (var i = 0; i < count;) {
              _loop3(i);
            }
            var level = parsePostLevels([{
              id: "seed-" + seed + "-" + count,
              name: "\u79CD\u5B50 " + seed,
              hint: '追踪挡路的线，再安排订单和暂存。',
              size: size,
              capacity: capacity,
              timeLimitSeconds: timeLimitSeconds,
              orders: orders,
              threads: threads.map(function (t) {
                return _extends({}, t, {
                  parcel: parcels.get(t.id)
                });
              })
            }])[0];
            return {
              v: {
                level: level,
                constructionSolution: constructionSolution
              }
            };
          },
          _ret;
        for (var layout = 0; layout < 12; layout++) {
          _ret = _loop();
          if (_ret === 0) continue;
          if (_ret) return _ret.v;
        }
        throw Error('该种子无法放下指定线路数，请增大棋盘或更换种子');
      }
      function ratePostLevel(input, steps) {
        var level = parsePostLevels([input])[0],
          deps = dependencies(level),
          game = new PostGame(level, function () {
            return 0;
          });
        var peakBuffer = 0,
          maxChain = 0,
          branchTotal = 0,
          ambiguousChoices = 0;
        for (var _iterator2 = _createForOfIteratorHelperLoose(steps), _step2; !(_step2 = _iterator2()).done;) {
          var id = _step2.value;
          var legal = game.threads.filter(function (t) {
            return game.reason(t.id) === null;
          });
          branchTotal += Math.max(0, legal.length - 1);
          ambiguousChoices += legal.filter(function (t) {
            return t.parcel === level.orders[game.order];
          }).length > 1 ? 1 : 0;
          var move = game.begin(id);
          if (!move.ok) throw Error('评级步骤不是有效解法');
          maxChain = Math.max(maxChain, game.finish(move.token));
          peakBuffer = Math.max(peakBuffer, game.buffer.length);
        }
        if (!game.won) throw Error('评级需要完整通关解法');
        var cache = new Map();
        function depth(id, path) {
          if (path.has(id)) return 0;
          if (cache.has(id)) return cache.get(id);
          var next = new Set(path);
          next.add(id);
          var value = 1 + Math.max.apply(Math, [0].concat(deps.get(id).map(function (other) {
            return depth(other, next);
          })));
          cache.set(id, value);
          return value;
        }
        var maxBlockingDepth = Math.max.apply(Math, level.threads.map(function (t) {
            return depth(t.id, new Set());
          })),
          blockingEdges = Array.from(deps.values()).reduce(function (n, ids) {
            return n + ids.length;
          }, 0);
        var bends = level.threads.reduce(function (sum, t) {
          return sum + t.cells.slice(1, -1).filter(function (b, i) {
            var a = t.cells[i],
              c = t.cells[i + 2];
            return b[0] - a[0] !== c[0] - b[0] || b[1] - a[1] !== c[1] - b[1];
          }).length;
        }, 0);
        var secondsPerMove = level.timeLimitSeconds === undefined ? null : level.timeLimitSeconds / steps.length;
        var score = Math.round(steps.length + blockingEdges * .5 + maxBlockingDepth * 3 + branchTotal * .15 + ambiguousChoices + bends * .2 + peakBuffer * 4 + (secondsPerMove === null ? 0 : Math.max(0, 5 - secondsPerMove) * 5));
        return {
          score: score,
          tier: score < 45 ? '入门' : score < 95 ? '进阶' : '挑战',
          steps: steps.length,
          blockingEdges: blockingEdges,
          maxBlockingDepth: maxBlockingDepth,
          bends: bends,
          branchTotal: branchTotal,
          ambiguousChoices: ambiguousChoices,
          peakBuffer: peakBuffer,
          maxChain: maxChain,
          secondsPerMove: secondsPerMove,
          calibrated: false
        };
      }
      // Ignore metadata, IDs, time limits, colour renaming, rotation and reflection.
      function postFingerprint(input) {
        var level = parsePostLevels([input])[0],
          colors = new Map();
        level.orders.forEach(function (c) {
          if (!colors.has(c)) colors.set(c, colors.size);
        });
        var variants = [];
        var _loop5 = function _loop5(flip) {
          var _loop6 = function _loop6(rotation) {
            var transform = function transform(_ref4) {
              var row = _ref4[0],
                col = _ref4[1];
              var r = row,
                c = flip ? level.size - 1 - col : col;
              for (var i = 0; i < rotation; i++) {
                var _ref5 = [c, level.size - 1 - r];
                r = _ref5[0];
                c = _ref5[1];
              }
              return [r, c];
            };
            var threads = level.threads.map(function (t) {
              return JSON.stringify([colors.get(t.parcel), t.cells.map(transform)]);
            }).sort();
            variants.push(JSON.stringify([level.size, level.capacity, level.orders.map(function (c) {
              return colors.get(c);
            }), threads]));
          };
          for (var rotation = 0; rotation < 4; rotation++) {
            _loop6(rotation);
          }
        };
        for (var flip = 0; flip < 2; flip++) {
          _loop5(flip);
        }
        return variants.sort()[0];
      }
      function screenPostCandidates(candidates, maxNodes, minScore) {
        if (maxNodes === void 0) {
          maxNodes = 100000;
        }
        if (minScore === void 0) {
          minScore = 0;
        }
        if (!Number.isFinite(minScore) || minScore < 0 || !Number.isInteger(maxNodes) || maxNodes < 1) throw Error('筛选参数错误');
        var seen = new Set(),
          accepted = [],
          reports = [];
        candidates.forEach(function (candidate, index) {
          try {
            var level = parsePostLevels([candidate])[0],
              fingerprint = postFingerprint(level);
            if (seen.has(fingerprint)) {
              reports.push({
                index: index,
                id: level.id,
                status: 'duplicate'
              });
              return;
            }
            seen.add(fingerprint);
            if (accepted.some(function (other) {
              return other.id === level.id;
            })) {
              reports.push({
                index: index,
                id: level.id,
                status: 'duplicate-id'
              });
              return;
            }
            var solve = solvePostLevel(level, maxNodes);
            if (solve.status !== 'solved') {
              reports.push({
                index: index,
                id: level.id,
                status: solve.status,
                solve: solve
              });
              return;
            }
            var rating = ratePostLevel(level, solve.steps),
              status = rating.score < minScore ? 'below-score' : 'accepted';
            if (status === 'accepted') accepted.push(level);
            reports.push({
              index: index,
              id: level.id,
              status: status,
              solve: solve,
              rating: rating
            });
          } catch (error) {
            reports.push({
              index: index,
              status: 'invalid',
              error: error instanceof Error ? error.message : String(error)
            });
          }
        });
        return {
          accepted: accepted,
          reports: reports
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/post.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _createForOfIteratorHelperLoose, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('parsePostLevels', parsePostLevels);
      cclegacy._RF.push({}, "ffd5858d5ZFy5/rPacU59n3", "post", undefined); // row, column; tail to head
      var PostGame = exports('PostGame', /*#__PURE__*/function () {
        var _proto = PostGame.prototype;
        _proto.rewardTime = function rewardTime() {
          if (!this.canRewardTime) return false;
          this.rewarded = true;
          this.deadline = Math.max(this.deadline, this.now()) + 30000;
          return true;
        };
        _proto.expandBuffer = function expandBuffer() {
          if (!this.canExpand) return false;
          this.expanded = true;
          return true;
        };
        _proto.extendTime = function extendTime() {
          if (!this.canExtend) return false;
          this.extended = true;
          this.deadline += 15000;
          return true;
        };
        function PostGame(level, now) {
          if (now === void 0) {
            now = function now() {
              return Date.now();
            };
          }
          this.state = void 0;
          this.history = [];
          this.pending = null;
          this.serial = 0;
          this.deadline = null;
          this.expanded = false;
          this.extended = false;
          this.rewarded = false;
          this.now = void 0;
          this.level = void 0;
          this.now = now;
          this.level = JSON.parse(JSON.stringify(level));
          this.state = this.initial();
          this.resetClock();
        }
        _proto.initial = function initial() {
          return {
            remaining: this.level.threads.map(function (t) {
              return t.id;
            }),
            buffer: [],
            order: 0
          };
        };
        _proto.resetClock = function resetClock() {
          this.deadline = this.level.timeLimitSeconds === undefined ? null : this.now() + this.level.timeLimitSeconds * 1000;
        };
        _proto.blocker = function blocker(id) {
          var _this = this;
          var thread = this.threads.find(function (t) {
            return t.id === id;
          });
          if (!thread) return null;
          var head = thread.cells[thread.cells.length - 1],
            prev = thread.cells[thread.cells.length - 2];
          var dr = head[0] - prev[0],
            dc = head[1] - prev[1];
          var _loop = function _loop(r, c) {
              var hit = _this.threads.find(function (t) {
                return t.id !== id && t.cells.some(function (cell) {
                  return cell[0] === r && cell[1] === c;
                });
              });
              if (hit) return {
                v: hit.id
              };
              // At the kth head step, the first k tail cells have vacated.
              var k = Math.abs(r - head[0]) + Math.abs(c - head[1]);
              if (thread.cells.some(function (cell, i) {
                return i >= k && cell[0] === r && cell[1] === c;
              })) return {
                v: id
              };
            },
            _ret;
          for (var r = head[0] + dr, c = head[1] + dc; r >= 0 && c >= 0 && r < this.level.size && c < this.level.size; r += dr, c += dc) {
            _ret = _loop(r, c);
            if (_ret) return _ret.v;
          }
          return null;
        };
        _proto.reason = function reason(id) {
          if (this.timedOut) return 'timeout';
          if (this.busy) return 'busy';
          if (this.won) return 'won';
          var thread = this.threads.find(function (t) {
            return t.id === id;
          });
          if (!thread) return 'missing';
          if (this.blocker(id)) return 'blocked';
          if (thread.parcel !== this.level.orders[this.order] && this.buffer.length >= this.capacity) return 'full';
          return null;
        };
        _proto.begin = function begin(id) {
          var reason = this.reason(id);
          if (reason) return {
            ok: false,
            reason: reason
          };
          this.pending = {
            id: id,
            token: ++this.serial
          };
          return {
            ok: true,
            token: this.serial
          };
        };
        _proto.finish = function finish(token) {
          var _this2 = this;
          if (!this.pending || token !== this.pending.token) return -1;
          if (this.timedOut) {
            this.pending = null;
            ++this.serial;
            return -1;
          }
          this.history.push(JSON.parse(JSON.stringify(this.state)));
          var thread = this.threads.find(function (t) {
            return t.id === _this2.pending.id;
          });
          this.state.remaining = this.state.remaining.filter(function (id) {
            return id !== thread.id;
          });
          var before = this.order;
          if (thread.parcel === this.level.orders[this.order]) this.state.order++;else this.state.buffer.push(thread.parcel);
          while (this.order < this.level.orders.length) {
            var index = this.state.buffer.indexOf(this.level.orders[this.order]);
            if (index < 0) break;
            this.state.buffer.splice(index, 1);
            this.state.order++;
          }
          this.pending = null;
          return this.order - before;
        };
        _proto.undo = function undo() {
          if (!this.canUndo) return false;
          this.state = this.history.pop();
          return true;
        };
        _proto.restart = function restart() {
          ++this.serial;
          this.pending = null;
          this.history = [];
          this.expanded = false;
          this.extended = false;
          this.rewarded = false;
          this.state = this.initial();
          this.resetClock();
        };
        _createClass(PostGame, [{
          key: "canRewardTime",
          get: function get() {
            return !this.rewarded && this.deadline !== null && !this.busy && !this.won;
          }
        }, {
          key: "capacity",
          get: function get() {
            return this.level.capacity + Number(this.expanded);
          }
        }, {
          key: "canExpand",
          get: function get() {
            return !this.expanded && !this.busy && !this.won && !this.timedOut;
          }
        }, {
          key: "canExtend",
          get: function get() {
            return !this.extended && this.deadline !== null && !this.busy && !this.won && !this.timedOut;
          }
        }, {
          key: "remainingSeconds",
          get: function get() {
            return this.deadline === null ? null : Math.max(0, Math.ceil((this.deadline - this.now()) / 1000));
          }
        }, {
          key: "timedOut",
          get: function get() {
            return !this.won && this.remainingSeconds === 0;
          }
        }, {
          key: "threads",
          get: function get() {
            var _this3 = this;
            return this.level.threads.filter(function (t) {
              return _this3.state.remaining.indexOf(t.id) >= 0;
            });
          }
        }, {
          key: "buffer",
          get: function get() {
            return this.state.buffer.slice();
          }
        }, {
          key: "order",
          get: function get() {
            return this.state.order;
          }
        }, {
          key: "steps",
          get: function get() {
            return this.history.length;
          }
        }, {
          key: "busy",
          get: function get() {
            return this.pending !== null;
          }
        }, {
          key: "won",
          get: function get() {
            return this.state.order === this.level.orders.length && !this.threads.length && !this.buffer.length;
          }
        }, {
          key: "canUndo",
          get: function get() {
            return !this.busy && !this.timedOut && this.history.length > 0;
          }
        }, {
          key: "stuck",
          get: function get() {
            var _this4 = this;
            return !this.busy && !this.won && this.threads.every(function (t) {
              return _this4.reason(t.id) !== null;
            });
          }
        }]);
        return PostGame;
      }());
      function parsePostLevels(value) {
        if (!Array.isArray(value) || !value.length) throw Error('没有邮局关卡');
        var ids = new Set(),
          colors = ['red', 'blue', 'gold', 'green', 'purple', 'orange'];
        var _loop2 = function _loop2() {
          var level = _step.value;
          if (!level || typeof level.id !== 'string' || ids.has(level.id) || typeof level.name !== 'string' || typeof level.hint !== 'string') throw Error('关卡说明或 ID 错误');
          ids.add(level.id);
          if (!Number.isInteger(level.size) || level.size < 2 || level.size > 18 || !Number.isInteger(level.capacity) || level.capacity < 1 || level.capacity > 3) throw Error('尺寸或容量错误');
          if (level.timeLimitSeconds !== undefined && (!Number.isInteger(level.timeLimitSeconds) || level.timeLimitSeconds < 1 || level.timeLimitSeconds > 3600)) throw Error('限时参数错误');
          if (!Array.isArray(level.threads) || !level.threads.length || !Array.isArray(level.orders)) throw Error('线路或订单缺失');
          var occupied = new Set(),
            threadIds = new Set();
          var _loop3 = function _loop3() {
            var t = _step2.value;
            if (!t || typeof t.id !== 'string' || threadIds.has(t.id) || colors.indexOf(t.parcel) < 0 || !Array.isArray(t.cells) || t.cells.length < 2) throw Error('线路数据错误');
            threadIds.add(t.id);
            t.cells.forEach(function (cell, i) {
              if (!Array.isArray(cell) || cell.length !== 2 || cell.some(function (n) {
                return !Number.isInteger(n) || n < 0 || n >= level.size;
              })) throw Error('坐标越界');
              var key = cell.join(':');
              if (occupied.has(key)) throw Error('线路重叠');
              occupied.add(key);
              if (i && Math.abs(cell[0] - t.cells[i - 1][0]) + Math.abs(cell[1] - t.cells[i - 1][1]) !== 1) throw Error('线路不连续');
            });
          };
          for (var _iterator2 = _createForOfIteratorHelperLoose(level.threads), _step2; !(_step2 = _iterator2()).done;) {
            _loop3();
          }
          var payloads = level.threads.map(function (t) {
            return t.parcel;
          }).sort();
          if (JSON.stringify(payloads) !== JSON.stringify(level.orders.slice().sort())) throw Error('订单与包裹不匹配');
        };
        for (var _iterator = _createForOfIteratorHelperLoose(value), _step; !(_step = _iterator()).done;) {
          _loop2();
        }
        return JSON.parse(JSON.stringify(value));
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/rewarded-ad.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4d967f7QxNMYoBGol3AI7f", "rewarded-ad", undefined);
      /** Replace this port with a real rewarded-video adapter after platform approval.
       * A real adapter must resolve completed only for a verified full-view result.
       * Cancellation/errors must never be reported as completed. No SDK is called now.
       */
      var simulatedRewardedAd = exports('simulatedRewardedAd', {
        show: function () {
          var _show = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", 'completed');
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function show() {
            return _show.apply(this, arguments);
          }
          return show;
        }()
      });
      var RewardedRequest = exports('RewardedRequest', /*#__PURE__*/function () {
        function RewardedRequest() {
          this.pending = false;
        }
        var _proto = RewardedRequest.prototype;
        _proto.request = /*#__PURE__*/function () {
          var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(port, current, grant) {
            var result;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.pending) {
                    _context2.next = 2;
                    break;
                  }
                  return _context2.abrupt("return", 'busy');
                case 2:
                  this.pending = true;
                  _context2.prev = 3;
                  _context2.next = 6;
                  return port.show();
                case 6:
                  result = _context2.sent;
                  if (current()) {
                    _context2.next = 9;
                    break;
                  }
                  return _context2.abrupt("return", 'stale');
                case 9:
                  if (!(result !== 'completed')) {
                    _context2.next = 11;
                    break;
                  }
                  return _context2.abrupt("return", result);
                case 11:
                  return _context2.abrupt("return", grant() ? 'granted' : 'unavailable');
                case 14:
                  _context2.prev = 14;
                  _context2.t0 = _context2["catch"](3);
                  return _context2.abrupt("return", 'failed');
                case 17:
                  _context2.prev = 17;
                  this.pending = false;
                  return _context2.finish(17);
                case 20:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[3, 14, 17, 20]]);
          }));
          function request(_x, _x2, _x3) {
            return _request.apply(this, arguments);
          }
          return request;
        }();
        _createClass(RewardedRequest, [{
          key: "busy",
          get: function get() {
            return this.pending;
          }
        }]);
        return RewardedRequest;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/router.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, _extends, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
      _extends = module.extends;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "663396tCJdGza3X9w5ca3MC", "router", undefined);
      var Router = exports('Router', /*#__PURE__*/function () {
        function Router(catalog) {
          this.current = Object.freeze({
            screen: 'home'
          });
          this.catalog = void 0;
          this.catalog = catalog.map(function (item) {
            return _extends({}, item);
          });
        }
        var _proto = Router.prototype;
        _proto.open = function open(id) {
          if (!this.catalog.some(function (game) {
            return game.id === id && game.available;
          })) return false;
          this.current = Object.freeze({
            screen: 'game',
            gameId: id
          });
          return true;
        };
        _proto.home = function home() {
          this.current = Object.freeze({
            screen: 'home'
          });
        };
        _createClass(Router, [{
          key: "route",
          get: function get() {
            return this.current;
          }
        }]);
        return Router;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/safe-layout.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('fitSafeLayout', fitSafeLayout);
      cclegacy._RF.push({}, "1eabaQ74ElFO4T8d8P6AuIT", "safe-layout", undefined);
      /** Safe rect is in Cocos design coordinates, with a bottom-left origin. Letterbox space needs no extra inset. */
      function fitSafeLayout(safe, width, height) {
        if (width === void 0) {
          width = 720;
        }
        if (height === void 0) {
          height = 1280;
        }
        var normal = {
          scale: 1,
          x: 0,
          y: 0
        };
        if (![safe.x, safe.y, safe.width, safe.height].every(Number.isFinite) || safe.width <= 0 || safe.height <= 0) return normal;
        var left = Math.max(0, safe.x),
          bottom = Math.max(0, safe.y);
        var right = Math.min(width, safe.x + safe.width),
          top = Math.min(height, safe.y + safe.height);
        if (right <= left || top <= bottom) return normal;
        return {
          scale: Math.min((right - left) / width, (top - bottom) / height),
          x: (left + right - width) / 2,
          y: (bottom + top - height) / 2
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/storage-value.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('normalizeStoredValue', normalizeStoredValue);
      cclegacy._RF.push({}, "1e128oh3gRBSr5u1WkQKRTB", "storage-value", undefined);
      /** Some mini-game adapters return an empty string for a missing storage key. */
      function normalizeStoredValue(value) {
        if (value === null || value === undefined || value === '') return null;
        return typeof value === 'string' ? value : 'invalid-storage-value';
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/trial-export.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        exportTrialFile: exportTrialFile,
        trialExportLabel: trialExportLabel
      });
      cclegacy._RF.push({}, "1b509/HfOlHkq8spmjbcX9a", "trial-export", undefined);
      function trialExportLabel() {
        return typeof wx === 'undefined' ? '导出试玩记录' : '复制试玩记录';
      }
      /** A user click starts a local download or explicit clipboard write; no network request. */
      function exportTrialFile(contents, onResult, timeoutMs) {
        if (onResult === void 0) {
          onResult = function onResult() {};
        }
        if (timeoutMs === void 0) {
          timeoutMs = 10000;
        }
        var settled = false,
          timer = null;
        var finish = function finish(result) {
          if (settled) return;
          settled = true;
          if (timer !== null) clearTimeout(timer);
          onResult(result);
        };
        try {
          // Mini-game DOM shims are not browser download support. Prefer the actual host API.
          if (typeof wx !== 'undefined') {
            if (typeof wx.setClipboardData !== 'function') {
              finish('unsupported');
              return false;
            }
            timer = setTimeout(function () {
              return finish('failed');
            }, timeoutMs);
            wx.setClipboardData({
              data: contents,
              success: function success() {
                return finish('copied');
              },
              fail: function fail() {
                return finish('failed');
              }
            });
            return true;
          }
          if (typeof document === 'undefined' || typeof URL === 'undefined' || typeof Blob === 'undefined' || typeof URL.createObjectURL !== 'function') {
            finish('unsupported');
            return false;
          }
          var url = URL.createObjectURL(new Blob([contents], {
            type: 'application/json;charset=utf-8'
          }));
          var anchor = null;
          try {
            anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'MiniGameLab-trials.json';
            document.body.appendChild(anchor);
            anchor.click();
          } finally {
            var _anchor;
            (_anchor = anchor) == null || _anchor.remove();
            setTimeout(function () {
              return URL.revokeObjectURL(url);
            }, 1000);
          }
          finish('downloaded');
          return true;
        } catch (_unused) {
          finish('failed');
          return false;
        }
      }
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map