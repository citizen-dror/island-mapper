// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Island.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import Point from './Point';
var Island = /*#__PURE__*/function () {
  function Island(key) {
    _classCallCheck(this, Island);

    this.key = key;
    this.points = new Map();
  }

  _createClass(Island, [{
    key: "addPoint",
    value: function addPoint(point) {
      this.points.set(point);
    }
  }]);

  return Island;
}();

var _default = Island;
exports.default = _default;
},{}],"Point.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "isNeighbor",
    value: function isNeighbor(otherPoint) {
      return Math.abs(this.x - otherPoint.x) <= 1 && Math.abs(this.y - otherPoint.y) <= 1;
    }
  }, {
    key: "getNeighbors",
    value: function getNeighbors() {
      var res = [];

      if (this.x > 0) {
        res.push(new Point(this.x - 1, this.y));
      }

      return res;
    }
  }]);

  return Point;
}();

var _default = Point;
exports.default = _default;
},{}],"Queue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue = /*#__PURE__*/function () {
  function Queue() {
    _classCallCheck(this, Queue);

    for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
      elements[_key] = arguments[_key];
    }

    // Initializing the queue with given arguments
    this.elements = [].concat(elements);
  } // Proxying the push/shift methods


  _createClass(Queue, [{
    key: "push",
    value: function push() {
      var _this$elements;

      return (_this$elements = this.elements).push.apply(_this$elements, arguments);
    }
  }, {
    key: "shift",
    value: function shift() {
      var _this$elements2;

      return (_this$elements2 = this.elements).shift.apply(_this$elements2, arguments);
    } // Add some length utility methods

  }, {
    key: "getLength",
    value: function getLength() {
      return this.elements.length;
    }
  }, {
    key: "setLength",
    value: function setLength(length) {
      this.elements.length = length;
    }
  }]);

  return Queue;
}();

var _default = Queue;
exports.default = _default;
},{}],"IslandCounter.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Island = _interopRequireDefault(require("./Island"));

var _Point = _interopRequireDefault(require("./Point"));

var _Queue = _interopRequireDefault(require("./Queue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function randoNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var IslandCounter = /*#__PURE__*/function () {
  function IslandCounter(hight, length) {
    _classCallCheck(this, IslandCounter);

    this.islandCount = 0; // this.map = [
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //   [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    // ];
    // this.map = [
    //   [0, 1, 0, 0],
    //   [0, 1, 0, 0],
    //   [0, 0, 0, 1],
    // ];

    this.map = IslandCounter.initMap(hight, length); // console.log(this.map);

    this.length = this.map[0].length;
    this.hight = this.map.length;
    this.islandMap = IslandCounter.initIslandMap(this.map); // const islandStrat = IslandCounter.copy2DArray(this.islandMap);
    // console.log(islandStrat);

    this.islandList = new Map();
  }

  _createClass(IslandCounter, [{
    key: "printMap",
    value: function printMap() {
      // eslint-disable-next-line no-console
      console.log(this.map);
    }
  }, {
    key: "printIslandMap",
    value: function printIslandMap() {
      // eslint-disable-next-line no-console
      console.log(this.islandMap);
    } //*

  }, {
    key: "findIslends",
    value: function findIslends() {
      for (var y = 0; y < this.map.length; y += 1) {
        for (var x = 0; x < this.map[y].length; x += 1) {
          if (this.isUnChartedLand(x, y)) {
            // this.islandMap[y][x] = 2;
            var island = this.addNewIsland();
            var point = new _Point.default(x, y);
            this.doMapIsland(point, island); // console.log(`point (${x}, ${y})`);
          }
        }
      }

      return this.islandCount;
    } // if val ===-1 - uncharted land
    // if 0 = sea,
    // if val > 0  -mapped Land

  }, {
    key: "isUnChartedLand",
    value: function isUnChartedLand(x, y) {
      return this.islandMap[y][x] < 0;
    } // isPointInSland(point, )

  }, {
    key: "doMapIsland",
    value: function doMapIsland(root, island) {
      var _this = this;

      var index = 0;
      var queueNewPoints = new _Queue.default(root);

      while (queueNewPoints.getLength() && index < 1000) {
        index += 1;
        var point = queueNewPoints.shift();
        this.addPointToIsland(point, island); // add neighbor land point to queue

        var neighbors = this.getNeighbors(point.x, point.y);
        neighbors.forEach(function (newPoint) {
          if (_this.isUnChartedLand(newPoint.x, newPoint.y)) {
            queueNewPoints.push(newPoint);
          }
        });
      }
    }
  }, {
    key: "getNeighbors",
    value: function getNeighbors(x, y) {
      var neighbors = [];

      if (x > 0) {
        if (y > 0) neighbors.push(new _Point.default(x - 1, y - 1));
        neighbors.push(new _Point.default(x - 1, y));
        if (y + 1 < this.hight) neighbors.push(new _Point.default(x - 1, y + 1));
      }

      if (y > 0) neighbors.push(new _Point.default(x, y - 1));
      if (y + 1 < this.hight) neighbors.push(new _Point.default(x, y + 1));

      if (x + 1 < this.length) {
        if (y > 0) neighbors.push(new _Point.default(x + 1, y - 1));
        neighbors.push(new _Point.default(x + 1, y));
        if (y + 1 < this.hight) neighbors.push(new _Point.default(x + 1, y + 1));
      }

      return neighbors;
    }
  }, {
    key: "addNewIsland",
    value: function addNewIsland() {
      this.islandCount += 1;
      var island = new _Island.default(this.islandCount); // console.log(`new island ${island.key}:`);

      return island;
    }
  }, {
    key: "addPointToIsland",
    value: function addPointToIsland(point, island) {
      // console.log(`${island.key}: ${point.x}, ${point.y}`);
      island.addPoint(point);
      this.islandMap[point.y][point.x] = island.key;
    }
  }], [{
    key: "initMap",
    value: function initMap(hight, length) {
      var arr = [];

      for (var i = 0; i < hight; i += 1) {
        arr[i] = Array.from({
          length: length
        }, function () {
          return randoNumber(0, 1);
        });
      }

      return arr;
    }
  }, {
    key: "copy2DArray",
    value: function copy2DArray(array) {
      var newArray = [];

      for (var i = 0; i < array.length; i += 1) {
        newArray[i] = array[i].slice();
      }

      return newArray;
    }
  }, {
    key: "initIslandMap",
    value: function initIslandMap(array) {
      var newArray = [];

      for (var i = 0; i < array.length; i += 1) {
        newArray[i] = array[i].map(function (x) {
          return x === 1 ? -1 : 0;
        });
      }

      return newArray;
    }
  }]);

  return IslandCounter;
}();

var _default = IslandCounter;
exports.default = _default;
},{"./Island":"Island.js","./Point":"Point.js","./Queue":"Queue.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _IslandCounter = _interopRequireDefault(require("./IslandCounter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var runCount = function runCount() {
  console.log('start count');
  var start = new Date().getTime();
  var islandCounter = new _IslandCounter.default(20, 20);
  islandCounter.printMap();
  var count = islandCounter.findIslends();
  islandCounter.printIslandMap();
  var timeDiff = new Date().getTime() - start;
  console.log('count: ', count);
  console.log('time:', timeDiff);
};

document.getElementById('btnCount').addEventListener('click', runCount, false);
},{"./IslandCounter":"IslandCounter.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54508" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map