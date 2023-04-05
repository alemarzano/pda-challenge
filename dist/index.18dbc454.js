// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9tRox":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();
/* LIBRARIES */ var _bootstrap = require("bootstrap");
var _bootstrapDefault = parcelHelpers.interopDefault(_bootstrap);
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
/* COMPONENTES */ var _stepsJs = require("./steps.js");
var _progressCircleJs = require("./progress-circle.js");
var _carouselCompetenciasJs = require("./carousel-competencias.js");
var _accordionTendenciasJs = require("./accordion-tendencias.js");
"use strict";
let tooltipElement = document.querySelector("#user-competencias");
let tooltipText = "Es la capacidad para identificar relaciones entre situaciones que no est\xe1n expl\xedcitamente interrelacionadas, a trav\xe9s de un razonamiento creativo o conceptual.";
let tooltip = new (0, _bootstrapDefault.default).Tooltip(tooltipElement, {
    title: tooltipText,
    placement: "bottom"
});
/* Carousel en descripcion de perfil */ const splide = new (0, _splideDefault.default)("#limitaciones", {
    perPage: 1,
    perMove: 1,
    pagination: true,
    list: "ul",
    arrows: true,
    gap: "4rem",
    padding: {
        left: "4rem",
        right: "4rem"
    }
});
splide.mount();

},{"./steps.js":"fuO89","bootstrap":"gCRej","./progress-circle.js":"bdgp8","@splidejs/splide":"5CJev","./carousel-competencias.js":"ivXRr","./accordion-tendencias.js":"bzoC1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuO89":[function(require,module,exports) {
var _userDataJs = require("./user-data.js");
const dato = `${(0, _userDataJs.persona).consistencia}`;
let fraccion = null;
const rangos = {
    1: {
        inicio: 1,
        fin: 20
    },
    2: {
        inicio: 21,
        fin: 40
    },
    3: {
        inicio: 41,
        fin: 60
    },
    4: {
        inicio: 61,
        fin: 80
    },
    5: {
        inicio: 81,
        fin: 100
    }
};
for(const valor in rangos){
    const rango = rangos[valor];
    if (dato == 0) {
        fraccion = 0;
        break;
    } else if (dato > rango.inicio && dato <= rango.fin) {
        fraccion = Number(valor);
        break;
    }
}
let steps = document.querySelectorAll(".step");
for(let i = 0; i <= fraccion; i++)setTimeout(function() {
    steps[i].classList.add("step-color");
}, (i + 1) * 300);

},{"./user-data.js":"73Xvt"}],"73Xvt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "persona", ()=>persona);
const persona = {
    nombre: "Juan Manuel",
    apellido: "Bigioni",
    edad: 30,
    sexo: "masculino",
    email: "john@doe.com",
    consistencia: 60,
    compatibilidad: 72,
    competencias: [
        {
            "Comunicaci\xf3n": Math.floor(Math.random() * 101)
        },
        {
            "Resoluci\xf3n de problemas": Math.floor(Math.random() * 101)
        },
        {
            "Liderazgo": Math.floor(Math.random() * 101)
        },
        {
            "Trabajo en equipo": Math.floor(Math.random() * 101)
        },
        {
            "Adaptabilidad": Math.floor(Math.random() * 101)
        },
        {
            "Creatividad": Math.floor(Math.random() * 101)
        },
        {
            "Pensamiento cr\xedtico": Math.floor(Math.random() * 101)
        },
        {
            "Organizaci\xf3n": Math.floor(Math.random() * 101)
        },
        {
            "Innovaci\xf3n": Math.floor(Math.random() * 101)
        },
        {
            "Empat\xeda": Math.floor(Math.random() * 101)
        },
        {
            "Negociaci\xf3n": Math.floor(Math.random() * 101)
        },
        {
            "Toma de decisiones": Math.floor(Math.random() * 101)
        },
        {
            "Gesti\xf3n del tiempo": Math.floor(Math.random() * 101)
        },
        {
            "Comportamiento \xe9tico": Math.floor(Math.random() * 101)
        },
        {
            "Trabajo bajo presi\xf3n": Math.floor(Math.random() * 101)
        },
        {
            "Inteligencia emocional": Math.floor(Math.random() * 101)
        },
        {
            "Gesti\xf3n de conflictos": Math.floor(Math.random() * 101)
        },
        {
            "Atenci\xf3n al detalle": Math.floor(Math.random() * 101)
        },
        {
            "Creatividad digital": Math.floor(Math.random() * 101)
        },
        {
            "Pensamiento anal\xedtico": Math.floor(Math.random() * 101)
        },
        {
            "Comunicaci\xf3n digital": Math.floor(Math.random() * 101)
        },
        {
            "Capacidad de aprendizaje": Math.floor(Math.random() * 101)
        },
        {
            "Pensamiento estrat\xe9gico": Math.floor(Math.random() * 101)
        },
        {
            "Visi\xf3n de negocio": Math.floor(Math.random() * 101)
        },
        {
            "Gesti\xf3n de proyectos": Math.floor(Math.random() * 101)
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"gCRej":[function(require,module,exports) {
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    const t = "transitionend", e = (t)=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null;
        }
        return e;
    }, i = (t)=>{
        const i = e(t);
        return i && document.querySelector(i) ? i : null;
    }, n = (t)=>{
        const i = e(t);
        return i ? document.querySelector(i) : null;
    }, s = (e)=>{
        e.dispatchEvent(new Event(t));
    }, o = (t)=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), r = (t)=>o(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null, a = (t)=>{
        if (!o(t) || 0 === t.getClientRects().length) return !1;
        const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])");
        if (!i) return e;
        if (i !== t) {
            const e = t.closest("summary");
            if (e && e.parentNode !== i) return !1;
            if (null === e) return !1;
        }
        return e;
    }, l = (t)=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), c = (t)=>{
        if (!document.documentElement.attachShadow) return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null;
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    }, h = ()=>{}, d = (t)=>{
        t.offsetHeight;
    }, u = ()=>window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = ()=>"rtl" === document.documentElement.dir, g = (t)=>{
        var e;
        e = ()=>{
            const e = u();
            if (e) {
                const i = t.NAME, n = e.fn[i];
                e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = ()=>(e.fn[i] = n, t.jQueryInterface);
            }
        }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", ()=>{
            for (const t of f)t();
        }), f.push(e)) : e();
    }, m = (t)=>{
        "function" == typeof t && t();
    }, _ = (e, i, n = !0)=>{
        if (!n) return void m(e);
        const o = ((t)=>{
            if (!t) return 0;
            let { transitionDuration: e , transitionDelay: i  } = window.getComputedStyle(t);
            const n = Number.parseFloat(e), s = Number.parseFloat(i);
            return n || s ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(i) + 5;
        let r = !1;
        const a = ({ target: n  })=>{
            n === i && (r = !0, i.removeEventListener(t, a), m(e));
        };
        i.addEventListener(t, a), setTimeout(()=>{
            r || s(i);
        }, o);
    }, b = (t, e, i, n)=>{
        const s = t.length;
        let o = t.indexOf(e);
        return -1 === o ? !i && n ? t[s - 1] : t[0] : (o += i ? 1 : -1, n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
    let E = 1;
    const T = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, C = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
    ]);
    function O(t, e) {
        return e && `${e}::${E++}` || t.uidEvent || E++;
    }
    function x(t) {
        const e = O(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e];
    }
    function k(t, e, i = null) {
        return Object.values(t).find((t)=>t.callable === e && t.delegationSelector === i);
    }
    function L(t, e, i) {
        const n = "string" == typeof e, s = n ? i : e || i;
        let o = N(t);
        return C.has(o) || (o = t), [
            n,
            s,
            o
        ];
    }
    function D(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        let [o, r, a] = L(e, i, n);
        if (e in T) {
            const t = (t)=>function(e) {
                    if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
                };
            r = t(r);
        }
        const l = x(t), c = l[a] || (l[a] = {}), h = k(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = O(r, e.replace(v, "")), u = o ? function(t, e, i) {
            return function n(s) {
                const o = t.querySelectorAll(e);
                for(let { target: r  } = s; r && r !== this; r = r.parentNode)for (const a of o)if (a === r) return j(s, {
                    delegateTarget: r
                }), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [
                    s
                ]);
            };
        }(t, i, r) : function(t, e) {
            return function i(n) {
                return j(n, {
                    delegateTarget: t
                }), i.oneOff && P.off(t, n.type, e), e.apply(t, [
                    n
                ]);
            };
        }(t, r);
        u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = s, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
    }
    function S(t, e, i, n, s) {
        const o = k(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function I(t, e, i, n) {
        const s = e[i] || {};
        for (const o of Object.keys(s))if (o.includes(n)) {
            const n = s[o];
            S(t, e, i, n.callable, n.delegationSelector);
        }
    }
    function N(t) {
        return t = t.replace(y, ""), T[t] || t;
    }
    const P = {
        on (t, e, i, n) {
            D(t, e, i, n, !1);
        },
        one (t, e, i, n) {
            D(t, e, i, n, !0);
        },
        off (t, e, i, n) {
            if ("string" != typeof e || !t) return;
            const [s, o, r] = L(e, i, n), a = r !== e, l = x(t), c = l[r] || {}, h = e.startsWith(".");
            if (void 0 === o) {
                if (h) for (const i of Object.keys(l))I(t, l, i, e.slice(1));
                for (const i of Object.keys(c)){
                    const n = i.replace(w, "");
                    if (!a || e.includes(n)) {
                        const e = c[i];
                        S(t, l, r, e.callable, e.delegationSelector);
                    }
                }
            } else {
                if (!Object.keys(c).length) return;
                S(t, l, r, o, s ? i : null);
            }
        },
        trigger (t, e, i) {
            if ("string" != typeof e || !t) return null;
            const n = u();
            let s = null, o = !0, r = !0, a = !1;
            e !== N(e) && n && (s = n.Event(e, i), n(t).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
            let l = new Event(e, {
                bubbles: o,
                cancelable: !0
            });
            return l = j(l, i), a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
        }
    };
    function j(t, e) {
        for (const [i, n] of Object.entries(e || {}))try {
            t[i] = n;
        } catch (e) {
            Object.defineProperty(t, i, {
                configurable: !0,
                get: ()=>n
            });
        }
        return t;
    }
    const M = new Map, H = {
        set (t, e, i) {
            M.has(t) || M.set(t, new Map);
            const n = M.get(t);
            n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
        },
        get: (t, e)=>M.has(t) && M.get(t).get(e) || null,
        remove (t, e) {
            if (!M.has(t)) return;
            const i = M.get(t);
            i.delete(e), 0 === i.size && M.delete(t);
        }
    };
    function $(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function W(t) {
        return t.replace(/[A-Z]/g, (t)=>`-${t.toLowerCase()}`);
    }
    const B = {
        setDataAttribute (t, e, i) {
            t.setAttribute(`data-bs-${W(e)}`, i);
        },
        removeDataAttribute (t, e) {
            t.removeAttribute(`data-bs-${W(e)}`);
        },
        getDataAttributes (t) {
            if (!t) return {};
            const e = {}, i = Object.keys(t.dataset).filter((t)=>t.startsWith("bs") && !t.startsWith("bsConfig"));
            for (const n of i){
                let i = n.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = $(t.dataset[n]);
            }
            return e;
        },
        getDataAttribute: (t, e)=>$(t.getAttribute(`data-bs-${W(e)}`))
    };
    class F {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const i = o(e) ? B.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...o(e) ? B.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const n of Object.keys(e)){
                const s = e[n], r = t[n], a = o(r) ? "element" : null == (i = r) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(s).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
            }
            var i;
        }
    }
    class z extends F {
        constructor(t, e){
            super(), (t = r(t)) && (this._element = t, this._config = this._getConfig(e), H.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this))this[t] = null;
        }
        _queueCallback(t, e, i = !0) {
            _(t, e, i);
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null);
        }
        static get VERSION() {
            return "5.2.3";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const q = (t, e = "hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME;
        P.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
            if ([
                "A",
                "AREA"
            ].includes(this.tagName) && i.preventDefault(), l(this)) return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class R extends z {
        static get NAME() {
            return "alert";
        }
        close() {
            if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(), P.trigger(this._element, "closed.bs.alert"), this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = R.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    q(R, "close"), g(R);
    const V = '[data-bs-toggle="button"]';
    class K extends z {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = K.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    P.on(document, "click.bs.button.data-api", V, (t)=>{
        t.preventDefault();
        const e = t.target.closest(V);
        K.getOrCreateInstance(e).toggle();
    }), g(K);
    const Q = {
        find: (t, e = document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t, e = document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t, e)=>[].concat(...t.children).filter((t)=>t.matches(e)),
        parents (t, e) {
            const i = [];
            let n = t.parentNode.closest(e);
            for(; n;)i.push(n), n = n.parentNode.closest(e);
            return i;
        },
        prev (t, e) {
            let i = t.previousElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.previousElementSibling;
            }
            return [];
        },
        next (t, e) {
            let i = t.nextElementSibling;
            for(; i;){
                if (i.matches(e)) return [
                    i
                ];
                i = i.nextElementSibling;
            }
            return [];
        },
        focusableChildren (t) {
            const e = [
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "details",
                "[tabindex]",
                '[contenteditable="true"]'
            ].map((t)=>`${t}:not([tabindex^="-"])`).join(",");
            return this.find(e, t).filter((t)=>!l(t) && a(t));
        }
    }, X = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    }, Y = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
    class U extends F {
        constructor(t, e){
            super(), this._element = t, t && U.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
        }
        static get Default() {
            return X;
        }
        static get DefaultType() {
            return Y;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            P.off(this._element, ".bs.swipe");
        }
        _start(t) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback);
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
            this._supportPointerEvents ? (P.on(this._element, "pointerdown.bs.swipe", (t)=>this._start(t)), P.on(this._element, "pointerup.bs.swipe", (t)=>this._end(t)), this._element.classList.add("pointer-event")) : (P.on(this._element, "touchstart.bs.swipe", (t)=>this._start(t)), P.on(this._element, "touchmove.bs.swipe", (t)=>this._move(t)), P.on(this._element, "touchend.bs.swipe", (t)=>this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
    }
    const G = "next", J = "prev", Z = "left", tt = "right", et = "slid.bs.carousel", it = "carousel", nt = "active", st = {
        ArrowLeft: tt,
        ArrowRight: Z
    }, ot = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    }, rt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
    class at extends z {
        constructor(t, e){
            super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Q.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === it && this.cycle();
        }
        static get Default() {
            return ot;
        }
        static get DefaultType() {
            return rt;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(G);
        }
        nextWhenVisible() {
            !document.hidden && a(this._element) && this.next();
        }
        prev() {
            this._slide(J);
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? P.one(this._element, et, ()=>this.cycle()) : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void P.one(this._element, et, ()=>this.to(t));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const n = t > i ? G : J;
            this._slide(n, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.defaultInterval = t.interval, t;
        }
        _addEventListeners() {
            this._config.keyboard && P.on(this._element, "keydown.bs.carousel", (t)=>this._keydown(t)), "hover" === this._config.pause && (P.on(this._element, "mouseenter.bs.carousel", ()=>this.pause()), P.on(this._element, "mouseleave.bs.carousel", ()=>this._maybeEnableCycle())), this._config.touch && U.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of Q.find(".carousel-item img", this._element))P.on(t, "dragstart.bs.carousel", (t)=>t.preventDefault());
            const t = {
                leftCallback: ()=>this._slide(this._directionToOrder(Z)),
                rightCallback: ()=>this._slide(this._directionToOrder(tt)),
                endCallback: ()=>{
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), 500 + this._config.interval));
                }
            };
            this._swipeHelper = new U(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = st[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = Q.findOne(".active", this._indicatorsElement);
            e.classList.remove(nt), e.removeAttribute("aria-current");
            const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(nt), i.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(), n = t === G, s = e || b(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            const o = this._getItemIndex(s), r = (e)=>P.trigger(this._element, e, {
                    relatedTarget: s,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r("slide.bs.carousel").defaultPrevented) return;
            if (!i || !s) return;
            const a = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = s;
            const l = n ? "carousel-item-start" : "carousel-item-end", c = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(c), d(s), i.classList.add(l), s.classList.add(l), this._queueCallback(()=>{
                s.classList.remove(l, c), s.classList.add(nt), i.classList.remove(nt, c, l), this._isSliding = !1, r(et);
            }, i, this._isAnimated()), a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return Q.findOne(".active.carousel-item", this._element);
        }
        _getItems() {
            return Q.find(".carousel-item", this._element);
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(t) {
            return p() ? t === Z ? J : G : t === Z ? G : J;
        }
        _orderToDirection(t) {
            return p() ? t === J ? Z : tt : t === J ? tt : Z;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = at.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    P.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(t) {
        const e = n(this);
        if (!e || !e.classList.contains(it)) return;
        t.preventDefault();
        const i = at.getOrCreateInstance(e), s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
    }), P.on(window, "load.bs.carousel.data-api", ()=>{
        const t = Q.find('[data-bs-ride="carousel"]');
        for (const e of t)at.getOrCreateInstance(e);
    }), g(at);
    const lt = "show", ct = "collapse", ht = "collapsing", dt = '[data-bs-toggle="collapse"]', ut = {
        parent: null,
        toggle: !0
    }, ft = {
        parent: "(null|element)",
        toggle: "boolean"
    };
    class pt extends z {
        constructor(t, e){
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const n = Q.find(dt);
            for (const t of n){
                const e = i(t), n = Q.find(e).filter((t)=>t === this._element);
                null !== e && n.length && this._triggerArray.push(t);
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
            return ut;
        }
        static get DefaultType() {
            return ft;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t)=>t !== this._element).map((t)=>pt.getOrCreateInstance(t, {
                    toggle: !1
                }))), t.length && t[0]._isTransitioning) return;
            if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t)e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[e] = "", P.trigger(this._element, "shown.bs.collapse");
            }, this._element, !0), this._element.style[e] = `${this._element[i]}px`;
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, d(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
            for (const t of this._triggerArray){
                const e = n(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([
                    t
                ], !1);
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(()=>{
                this._isTransitioning = !1, this._element.classList.remove(ht), this._element.classList.add(ct), P.trigger(this._element, "hidden.bs.collapse");
            }, this._element, !0);
        }
        _isShown(t = this._element) {
            return t.classList.contains(lt);
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = r(t.parent), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(dt);
            for (const e of t){
                const t = n(e);
                t && this._addAriaAndCollapsedClass([
                    e
                ], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = Q.find(":scope .collapse .collapse", this._config.parent);
            return Q.find(t, this._config.parent).filter((t)=>!e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length) for (const i of t)i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    P.on(document, "click.bs.collapse.data-api", dt, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = i(this), n = Q.find(e);
        for (const t of n)pt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle();
    }), g(pt);
    var gt = "top", mt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [
        gt,
        mt,
        _t,
        bt
    ], wt = "start", At = "end", Et = "clippingParents", Tt = "viewport", Ct = "popper", Ot = "reference", xt = yt.reduce(function(t, e) {
        return t.concat([
            e + "-" + wt,
            e + "-" + At
        ]);
    }, []), kt = [].concat(yt, [
        vt
    ]).reduce(function(t, e) {
        return t.concat([
            e,
            e + "-" + wt,
            e + "-" + At
        ]);
    }, []), Lt = "beforeRead", Dt = "read", St = "afterRead", It = "beforeMain", Nt = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", $t = [
        Lt,
        Dt,
        St,
        It,
        Nt,
        Pt,
        jt,
        Mt,
        Ht
    ];
    function Wt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function Bt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e && e.defaultView || window;
        }
        return t;
    }
    function Ft(t) {
        return t instanceof Bt(t).Element || t instanceof Element;
    }
    function zt(t) {
        return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement;
    }
    function qt(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot);
    }
    const Rt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function(t) {
                var i = e.styles[t] || {}, n = e.attributes[t] || {}, s = e.elements[t];
                zt(s) && Wt(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(t) {
                    var e = n[t];
                    !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? "" : e);
                }));
            });
        },
        effect: function(t) {
            var e = t.state, i = {
                popper: {
                    position: e.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow), function() {
                Object.keys(e.elements).forEach(function(t) {
                    var n = e.elements[t], s = e.attributes[t] || {}, o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function(t, e) {
                        return t[e] = "", t;
                    }, {});
                    zt(n) && Wt(n) && (Object.assign(n.style, o), Object.keys(s).forEach(function(t) {
                        n.removeAttribute(t);
                    }));
                });
            };
        },
        requires: [
            "computeStyles"
        ]
    };
    function Vt(t) {
        return t.split("-")[0];
    }
    var Kt = Math.max, Qt = Math.min, Xt = Math.round;
    function Yt() {
        var t = navigator.userAgentData;
        return null != t && t.brands ? t.brands.map(function(t) {
            return t.brand + "/" + t.version;
        }).join(" ") : navigator.userAgent;
    }
    function Ut() {
        return !/^((?!chrome|android).)*safari/i.test(Yt());
    }
    function Gt(t, e, i) {
        void 0 === e && (e = !1), void 0 === i && (i = !1);
        var n = t.getBoundingClientRect(), s = 1, o = 1;
        e && zt(t) && (s = t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth || 1, o = t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight || 1);
        var r = (Ft(t) ? Bt(t) : window).visualViewport, a = !Ut() && i, l = (n.left + (a && r ? r.offsetLeft : 0)) / s, c = (n.top + (a && r ? r.offsetTop : 0)) / o, h = n.width / s, d = n.height / o;
        return {
            width: h,
            height: d,
            top: c,
            right: l + h,
            bottom: c + d,
            left: l,
            x: l,
            y: c
        };
    }
    function Jt(t) {
        var e = Gt(t), i = t.offsetWidth, n = t.offsetHeight;
        return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: i,
            height: n
        };
    }
    function Zt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            }while (n);
        }
        return !1;
    }
    function te(t) {
        return Bt(t).getComputedStyle(t);
    }
    function ee(t) {
        return [
            "table",
            "td",
            "th"
        ].indexOf(Wt(t)) >= 0;
    }
    function ie(t) {
        return ((Ft(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
    function ne(t) {
        return "html" === Wt(t) ? t : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t);
    }
    function se(t) {
        return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null;
    }
    function oe(t) {
        for(var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position;)i = se(i);
        return i && ("html" === Wt(i) || "body" === Wt(i) && "static" === te(i).position) ? e : i || function(t) {
            var e = /firefox/i.test(Yt());
            if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position) return null;
            var i = ne(t);
            for(qt(i) && (i = i.host); zt(i) && [
                "html",
                "body"
            ].indexOf(Wt(i)) < 0;){
                var n = te(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== [
                    "transform",
                    "perspective"
                ].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return i;
                i = i.parentNode;
            }
            return null;
        }(t) || e;
    }
    function re(t) {
        return [
            "top",
            "bottom"
        ].indexOf(t) >= 0 ? "x" : "y";
    }
    function ae(t, e, i) {
        return Kt(t, Qt(e, i));
    }
    function le(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t);
    }
    function ce(t, e) {
        return e.reduce(function(e, i) {
            return e[i] = t, e;
        }, {});
    }
    const he = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e, i = t.state, n = t.name, s = t.options, o = i.elements.arrow, r = i.modifiersData.popperOffsets, a = Vt(i.placement), l = re(a), c = [
                bt,
                _t
            ].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = function(t, e) {
                    return le("number" != typeof (t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                        placement: e.placement
                    })) : t) ? t : ce(t, yt));
                }(s.padding, i), d = Jt(o), u = "y" === l ? gt : bt, f = "y" === l ? mt : _t, p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c], g = r[l] - i.rects.reference[l], m = oe(o), _ = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0, b = p / 2 - g / 2, v = h[u], y = _ - d[c] - h[f], w = _ / 2 - d[c] / 2 + b, A = ae(v, w, y), E = l;
                i.modifiersData[n] = ((e = {})[E] = A, e.centerOffset = A - w, e);
            }
        },
        effect: function(t) {
            var e = t.state, i = t.options.element, n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = e.elements.popper.querySelector(n))) && Zt(e.elements.popper, n) && (e.elements.arrow = n);
        },
        requires: [
            "popperOffsets"
        ],
        requiresIfExists: [
            "preventOverflow"
        ]
    };
    function de(t) {
        return t.split("-")[1];
    }
    var ue = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };
    function fe(t) {
        var e, i = t.popper, n = t.popperRect, s = t.placement, o = t.variation, r = t.offsets, a = t.position, l = t.gpuAcceleration, c = t.adaptive, h = t.roundOffsets, d = t.isFixed, u = r.x, f = void 0 === u ? 0 : u, p = r.y, g = void 0 === p ? 0 : p, m = "function" == typeof h ? h({
            x: f,
            y: g
        }) : {
            x: f,
            y: g
        };
        f = m.x, g = m.y;
        var _ = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), v = bt, y = gt, w = window;
        if (c) {
            var A = oe(i), E = "clientHeight", T = "clientWidth";
            A === Bt(i) && "static" !== te(A = ie(i)).position && "absolute" === a && (E = "scrollHeight", T = "scrollWidth"), (s === gt || (s === bt || s === _t) && o === At) && (y = mt, g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height, g *= l ? 1 : -1), s !== bt && (s !== gt && s !== mt || o !== At) || (v = _t, f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width, f *= l ? 1 : -1);
        }
        var C, O = Object.assign({
            position: a
        }, c && ue), x = !0 === h ? function(t) {
            var e = t.x, i = t.y, n = window.devicePixelRatio || 1;
            return {
                x: Xt(e * n) / n || 0,
                y: Xt(i * n) / n || 0
            };
        }({
            x: f,
            y: g
        }) : {
            x: f,
            y: g
        };
        return f = x.x, g = x.y, l ? Object.assign({}, O, ((C = {})[y] = b ? "0" : "", C[v] = _ ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + g + "px)" : "translate3d(" + f + "px, " + g + "px, 0)", C)) : Object.assign({}, O, ((e = {})[y] = b ? g + "px" : "", e[v] = _ ? f + "px" : "", e.transform = "", e));
    }
    const pe = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(t) {
            var e = t.state, i = t.options, n = i.gpuAcceleration, s = void 0 === n || n, o = i.adaptive, r = void 0 === o || o, a = i.roundOffsets, l = void 0 === a || a, c = {
                placement: Vt(e.placement),
                variation: de(e.placement),
                popper: e.elements.popper,
                popperRect: e.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === e.options.strategy
            };
            null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, fe(Object.assign({}, c, {
                offsets: e.modifiersData.popperOffsets,
                position: e.options.strategy,
                adaptive: r,
                roundOffsets: l
            })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, fe(Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l
            })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-placement": e.placement
            });
        },
        data: {}
    };
    var ge = {
        passive: !0
    };
    const me = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(t) {
            var e = t.state, i = t.instance, n = t.options, s = n.scroll, o = void 0 === s || s, r = n.resize, a = void 0 === r || r, l = Bt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
            return o && c.forEach(function(t) {
                t.addEventListener("scroll", i.update, ge);
            }), a && l.addEventListener("resize", i.update, ge), function() {
                o && c.forEach(function(t) {
                    t.removeEventListener("scroll", i.update, ge);
                }), a && l.removeEventListener("resize", i.update, ge);
            };
        },
        data: {}
    };
    var _e = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };
    function be(t) {
        return t.replace(/left|right|bottom|top/g, function(t) {
            return _e[t];
        });
    }
    var ve = {
        start: "end",
        end: "start"
    };
    function ye(t) {
        return t.replace(/start|end/g, function(t) {
            return ve[t];
        });
    }
    function we(t) {
        var e = Bt(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        };
    }
    function Ae(t) {
        return Gt(ie(t)).left + we(t).scrollLeft;
    }
    function Ee(t) {
        var e = te(t), i = e.overflow, n = e.overflowX, s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Te(t) {
        return [
            "html",
            "body",
            "#document"
        ].indexOf(Wt(t)) >= 0 ? t.ownerDocument.body : zt(t) && Ee(t) ? t : Te(ne(t));
    }
    function Ce(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Te(t), s = n === (null == (i = t.ownerDocument) ? void 0 : i.body), o = Bt(n), r = s ? [
            o
        ].concat(o.visualViewport || [], Ee(n) ? n : []) : n, a = e.concat(r);
        return s ? a : a.concat(Ce(ne(r)));
    }
    function Oe(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        });
    }
    function xe(t, e, i) {
        return e === Tt ? Oe(function(t, e) {
            var i = Bt(t), n = ie(t), s = i.visualViewport, o = n.clientWidth, r = n.clientHeight, a = 0, l = 0;
            if (s) {
                o = s.width, r = s.height;
                var c = Ut();
                (c || !c && "fixed" === e) && (a = s.offsetLeft, l = s.offsetTop);
            }
            return {
                width: o,
                height: r,
                x: a + Ae(t),
                y: l
            };
        }(t, i)) : Ft(e) ? function(t, e) {
            var i = Gt(t, !1, "fixed" === e);
            return i.top = i.top + t.clientTop, i.left = i.left + t.clientLeft, i.bottom = i.top + t.clientHeight, i.right = i.left + t.clientWidth, i.width = t.clientWidth, i.height = t.clientHeight, i.x = i.left, i.y = i.top, i;
        }(e, i) : Oe(function(t) {
            var e, i = ie(t), n = we(t), s = null == (e = t.ownerDocument) ? void 0 : e.body, o = Kt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), r = Kt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), a = -n.scrollLeft + Ae(t), l = -n.scrollTop;
            return "rtl" === te(s || i).direction && (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o), {
                width: o,
                height: r,
                x: a,
                y: l
            };
        }(ie(t)));
    }
    function ke(t) {
        var e, i = t.reference, n = t.element, s = t.placement, o = s ? Vt(s) : null, r = s ? de(s) : null, a = i.x + i.width / 2 - n.width / 2, l = i.y + i.height / 2 - n.height / 2;
        switch(o){
            case gt:
                e = {
                    x: a,
                    y: i.y - n.height
                };
                break;
            case mt:
                e = {
                    x: a,
                    y: i.y + i.height
                };
                break;
            case _t:
                e = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case bt:
                e = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: i.x,
                    y: i.y
                };
        }
        var c = o ? re(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch(r){
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case At:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = void 0 === n ? t.placement : n, o = i.strategy, r = void 0 === o ? t.strategy : o, a = i.boundary, l = void 0 === a ? Et : a, c = i.rootBoundary, h = void 0 === c ? Tt : c, d = i.elementContext, u = void 0 === d ? Ct : d, f = i.altBoundary, p = void 0 !== f && f, g = i.padding, m = void 0 === g ? 0 : g, _ = le("number" != typeof m ? m : ce(m, yt)), b = u === Ct ? Ot : Ct, v = t.rects.popper, y = t.elements[p ? b : u], w = function(t, e, i, n) {
            var s = "clippingParents" === e ? function(t) {
                var e = Ce(ne(t)), i = [
                    "absolute",
                    "fixed"
                ].indexOf(te(t).position) >= 0 && zt(t) ? oe(t) : t;
                return Ft(i) ? e.filter(function(t) {
                    return Ft(t) && Zt(t, i) && "body" !== Wt(t);
                }) : [];
            }(t) : [].concat(e), o = [].concat(s, [
                i
            ]), r = o[0], a = o.reduce(function(e, i) {
                var s = xe(t, i, n);
                return e.top = Kt(s.top, e.top), e.right = Qt(s.right, e.right), e.bottom = Qt(s.bottom, e.bottom), e.left = Kt(s.left, e.left), e;
            }, xe(t, r, n));
            return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
        }(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r), A = Gt(t.elements.reference), E = ke({
            reference: A,
            element: v,
            strategy: "absolute",
            placement: s
        }), T = Oe(Object.assign({}, v, E)), C = u === Ct ? T : A, O = {
            top: w.top - C.top + _.top,
            bottom: C.bottom - w.bottom + _.bottom,
            left: w.left - C.left + _.left,
            right: C.right - w.right + _.right
        }, x = t.modifiersData.offset;
        if (u === Ct && x) {
            var k = x[s];
            Object.keys(O).forEach(function(t) {
                var e = [
                    _t,
                    mt
                ].indexOf(t) >= 0 ? 1 : -1, i = [
                    gt,
                    mt
                ].indexOf(t) >= 0 ? "y" : "x";
                O[t] += k[i] * e;
            });
        }
        return O;
    }
    function De(t, e) {
        void 0 === e && (e = {});
        var i = e, n = i.placement, s = i.boundary, o = i.rootBoundary, r = i.padding, a = i.flipVariations, l = i.allowedAutoPlacements, c = void 0 === l ? kt : l, h = de(n), d = h ? a ? xt : xt.filter(function(t) {
            return de(t) === h;
        }) : yt, u = d.filter(function(t) {
            return c.indexOf(t) >= 0;
        });
        0 === u.length && (u = d);
        var f = u.reduce(function(e, i) {
            return e[i] = Le(t, {
                placement: i,
                boundary: s,
                rootBoundary: o,
                padding: r
            })[Vt(i)], e;
        }, {});
        return Object.keys(f).sort(function(t, e) {
            return f[t] - f[e];
        });
    }
    const Se = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name;
            if (!e.modifiersData[n]._skip) {
                for(var s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 === r || r, l = i.fallbackPlacements, c = i.padding, h = i.boundary, d = i.rootBoundary, u = i.altBoundary, f = i.flipVariations, p = void 0 === f || f, g = i.allowedAutoPlacements, m = e.options.placement, _ = Vt(m), b = l || (_ !== m && p ? function(t) {
                    if (Vt(t) === vt) return [];
                    var e = be(t);
                    return [
                        ye(t),
                        e,
                        ye(e)
                    ];
                }(m) : [
                    be(m)
                ]), v = [
                    m
                ].concat(b).reduce(function(t, i) {
                    return t.concat(Vt(i) === vt ? De(e, {
                        placement: i,
                        boundary: h,
                        rootBoundary: d,
                        padding: c,
                        flipVariations: p,
                        allowedAutoPlacements: g
                    }) : i);
                }, []), y = e.rects.reference, w = e.rects.popper, A = new Map, E = !0, T = v[0], C = 0; C < v.length; C++){
                    var O = v[C], x = Vt(O), k = de(O) === wt, L = [
                        gt,
                        mt
                    ].indexOf(x) >= 0, D = L ? "width" : "height", S = Le(e, {
                        placement: O,
                        boundary: h,
                        rootBoundary: d,
                        altBoundary: u,
                        padding: c
                    }), I = L ? k ? _t : bt : k ? mt : gt;
                    y[D] > w[D] && (I = be(I));
                    var N = be(I), P = [];
                    if (o && P.push(S[x] <= 0), a && P.push(S[I] <= 0, S[N] <= 0), P.every(function(t) {
                        return t;
                    })) {
                        T = O, E = !1;
                        break;
                    }
                    A.set(O, P);
                }
                if (E) for(var j = function(t) {
                    var e = v.find(function(e) {
                        var i = A.get(e);
                        if (i) return i.slice(0, t).every(function(t) {
                            return t;
                        });
                    });
                    if (e) return T = e, "break";
                }, M = p ? 3 : 1; M > 0 && "break" !== j(M); M--);
                e.placement !== T && (e.modifiersData[n]._skip = !0, e.placement = T, e.reset = !0);
            }
        },
        requiresIfExists: [
            "offset"
        ],
        data: {
            _skip: !1
        }
    };
    function Ie(t, e, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - i.y,
            right: t.right - e.width + i.x,
            bottom: t.bottom - e.height + i.y,
            left: t.left - e.width - i.x
        };
    }
    function Ne(t) {
        return [
            gt,
            _t,
            mt,
            bt
        ].some(function(e) {
            return t[e] >= 0;
        });
    }
    const Pe = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: [
            "preventOverflow"
        ],
        fn: function(t) {
            var e = t.state, i = t.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = Le(e, {
                elementContext: "reference"
            }), a = Le(e, {
                altBoundary: !0
            }), l = Ie(r, n), c = Ie(a, s, o), h = Ne(l), d = Ne(c);
            e.modifiersData[i] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: h,
                hasPopperEscaped: d
            }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                "data-popper-reference-hidden": h,
                "data-popper-escaped": d
            });
        }
    }, je = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: [
            "popperOffsets"
        ],
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.offset, o = void 0 === s ? [
                0,
                0
            ] : s, r = kt.reduce(function(t, i) {
                return t[i] = function(t, e, i) {
                    var n = Vt(t), s = [
                        bt,
                        gt
                    ].indexOf(n) >= 0 ? -1 : 1, o = "function" == typeof i ? i(Object.assign({}, e, {
                        placement: t
                    })) : i, r = o[0], a = o[1];
                    return r = r || 0, a = (a || 0) * s, [
                        bt,
                        _t
                    ].indexOf(n) >= 0 ? {
                        x: a,
                        y: r
                    } : {
                        x: r,
                        y: a
                    };
                }(i, e.rects, o), t;
            }, {}), a = r[e.placement], l = a.x, c = a.y;
            null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[n] = r;
        }
    }, Me = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function(t) {
            var e = t.state, i = t.name;
            e.modifiersData[i] = ke({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement
            });
        },
        data: {}
    }, He = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function(t) {
            var e = t.state, i = t.options, n = t.name, s = i.mainAxis, o = void 0 === s || s, r = i.altAxis, a = void 0 !== r && r, l = i.boundary, c = i.rootBoundary, h = i.altBoundary, d = i.padding, u = i.tether, f = void 0 === u || u, p = i.tetherOffset, g = void 0 === p ? 0 : p, m = Le(e, {
                boundary: l,
                rootBoundary: c,
                padding: d,
                altBoundary: h
            }), _ = Vt(e.placement), b = de(e.placement), v = !b, y = re(_), w = "x" === y ? "y" : "x", A = e.modifiersData.popperOffsets, E = e.rects.reference, T = e.rects.popper, C = "function" == typeof g ? g(Object.assign({}, e.rects, {
                placement: e.placement
            })) : g, O = "number" == typeof C ? {
                mainAxis: C,
                altAxis: C
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, C), x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, k = {
                x: 0,
                y: 0
            };
            if (A) {
                if (o) {
                    var L, D = "y" === y ? gt : bt, S = "y" === y ? mt : _t, I = "y" === y ? "height" : "width", N = A[y], P = N + m[D], j = N - m[S], M = f ? -T[I] / 2 : 0, H = b === wt ? E[I] : T[I], $ = b === wt ? -T[I] : -E[I], W = e.elements.arrow, B = f && W ? Jt(W) : {
                        width: 0,
                        height: 0
                    }, F = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, z = F[D], q = F[S], R = ae(0, E[I], B[I]), V = v ? E[I] / 2 - M - R - z - O.mainAxis : H - R - z - O.mainAxis, K = v ? -E[I] / 2 + M + R + q + O.mainAxis : $ + R + q + O.mainAxis, Q = e.elements.arrow && oe(e.elements.arrow), X = Q ? "y" === y ? Q.clientTop || 0 : Q.clientLeft || 0 : 0, Y = null != (L = null == x ? void 0 : x[y]) ? L : 0, U = N + K - Y, G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
                    A[y] = G, k[y] = G - N;
                }
                if (a) {
                    var J, Z = "x" === y ? gt : bt, tt = "x" === y ? mt : _t, et = A[w], it = "y" === w ? "height" : "width", nt = et + m[Z], st = et - m[tt], ot = -1 !== [
                        gt,
                        bt
                    ].indexOf(_), rt = null != (J = null == x ? void 0 : x[w]) ? J : 0, at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis, lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st, ct = f && ot ? function(t, e, i) {
                        var n = ae(t, e, i);
                        return n > i ? i : n;
                    }(at, et, lt) : ae(f ? at : nt, et, f ? lt : st);
                    A[w] = ct, k[w] = ct - et;
                }
                e.modifiersData[n] = k;
            }
        },
        requiresIfExists: [
            "offset"
        ]
    };
    function $e(t, e, i) {
        void 0 === i && (i = !1);
        var n, s, o = zt(e), r = zt(e) && function(t) {
            var e = t.getBoundingClientRect(), i = Xt(e.width) / t.offsetWidth || 1, n = Xt(e.height) / t.offsetHeight || 1;
            return 1 !== i || 1 !== n;
        }(e), a = ie(e), l = Gt(t, r, i), c = {
            scrollLeft: 0,
            scrollTop: 0
        }, h = {
            x: 0,
            y: 0
        };
        return (o || !o && !i) && (("body" !== Wt(e) || Ee(a)) && (c = (n = e) !== Bt(n) && zt(n) ? {
            scrollLeft: (s = n).scrollLeft,
            scrollTop: s.scrollTop
        } : we(n)), zt(e) ? ((h = Gt(e, !0)).x += e.clientLeft, h.y += e.clientTop) : a && (h.x = Ae(a))), {
            x: l.left + c.scrollLeft - h.x,
            y: l.top + c.scrollTop - h.y,
            width: l.width,
            height: l.height
        };
    }
    function We(t) {
        var e = new Map, i = new Set, n = [];
        function s(t) {
            i.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                if (!i.has(t)) {
                    var n = e.get(t);
                    n && s(n);
                }
            }), n.push(t);
        }
        return t.forEach(function(t) {
            e.set(t.name, t);
        }), t.forEach(function(t) {
            i.has(t.name) || s(t);
        }), n;
    }
    var Be = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };
    function Fe() {
        for(var t = arguments.length, e = new Array(t), i = 0; i < t; i++)e[i] = arguments[i];
        return !e.some(function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function ze(t) {
        void 0 === t && (t = {});
        var e = t, i = e.defaultModifiers, n = void 0 === i ? [] : i, s = e.defaultOptions, o = void 0 === s ? Be : s;
        return function(t, e, i) {
            void 0 === i && (i = o);
            var s, r, a = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Be, o),
                modifiersData: {},
                elements: {
                    reference: t,
                    popper: e
                },
                attributes: {},
                styles: {}
            }, l = [], c = !1, h = {
                state: a,
                setOptions: function(i) {
                    var s = "function" == typeof i ? i(a.options) : i;
                    d(), a.options = Object.assign({}, o, a.options, s), a.scrollParents = {
                        reference: Ft(t) ? Ce(t) : t.contextElement ? Ce(t.contextElement) : [],
                        popper: Ce(e)
                    };
                    var r, c, u = function(t) {
                        var e = We(t);
                        return $t.reduce(function(t, i) {
                            return t.concat(e.filter(function(t) {
                                return t.phase === i;
                            }));
                        }, []);
                    }((r = [].concat(n, a.options.modifiers), c = r.reduce(function(t, e) {
                        var i = t[e.name];
                        return t[e.name] = i ? Object.assign({}, i, e, {
                            options: Object.assign({}, i.options, e.options),
                            data: Object.assign({}, i.data, e.data)
                        }) : e, t;
                    }, {}), Object.keys(c).map(function(t) {
                        return c[t];
                    })));
                    return a.orderedModifiers = u.filter(function(t) {
                        return t.enabled;
                    }), a.orderedModifiers.forEach(function(t) {
                        var e = t.name, i = t.options, n = void 0 === i ? {} : i, s = t.effect;
                        if ("function" == typeof s) {
                            var o = s({
                                state: a,
                                name: e,
                                instance: h,
                                options: n
                            });
                            l.push(o || function() {});
                        }
                    }), h.update();
                },
                forceUpdate: function() {
                    if (!c) {
                        var t = a.elements, e = t.reference, i = t.popper;
                        if (Fe(e, i)) {
                            a.rects = {
                                reference: $e(e, oe(i), "fixed" === a.options.strategy),
                                popper: Jt(i)
                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach(function(t) {
                                return a.modifiersData[t.name] = Object.assign({}, t.data);
                            });
                            for(var n = 0; n < a.orderedModifiers.length; n++)if (!0 !== a.reset) {
                                var s = a.orderedModifiers[n], o = s.fn, r = s.options, l = void 0 === r ? {} : r, d = s.name;
                                "function" == typeof o && (a = o({
                                    state: a,
                                    options: l,
                                    name: d,
                                    instance: h
                                }) || a);
                            } else a.reset = !1, n = -1;
                        }
                    }
                },
                update: (s = function() {
                    return new Promise(function(t) {
                        h.forceUpdate(), t(a);
                    });
                }, function() {
                    return r || (r = new Promise(function(t) {
                        Promise.resolve().then(function() {
                            r = void 0, t(s());
                        });
                    })), r;
                }),
                destroy: function() {
                    d(), c = !0;
                }
            };
            if (!Fe(t, e)) return h;
            function d() {
                l.forEach(function(t) {
                    return t();
                }), l = [];
            }
            return h.setOptions(i).then(function(t) {
                !c && i.onFirstUpdate && i.onFirstUpdate(t);
            }), h;
        };
    }
    var qe = ze(), Re = ze({
        defaultModifiers: [
            me,
            Me,
            pe,
            Rt
        ]
    }), Ve = ze({
        defaultModifiers: [
            me,
            Me,
            pe,
            Rt,
            je,
            Se,
            He,
            he,
            Pe
        ]
    });
    const Ke = Object.freeze(Object.defineProperty({
        __proto__: null,
        popperGenerator: ze,
        detectOverflow: Le,
        createPopperBase: qe,
        createPopper: Ve,
        createPopperLite: Re,
        top: gt,
        bottom: mt,
        right: _t,
        left: bt,
        auto: vt,
        basePlacements: yt,
        start: wt,
        end: At,
        clippingParents: Et,
        viewport: Tt,
        popper: Ct,
        reference: Ot,
        variationPlacements: xt,
        placements: kt,
        beforeRead: Lt,
        read: Dt,
        afterRead: St,
        beforeMain: It,
        main: Nt,
        afterMain: Pt,
        beforeWrite: jt,
        write: Mt,
        afterWrite: Ht,
        modifierPhases: $t,
        applyStyles: Rt,
        arrow: he,
        computeStyles: pe,
        eventListeners: me,
        flip: Se,
        hide: Pe,
        offset: je,
        popperOffsets: Me,
        preventOverflow: He
    }, Symbol.toStringTag, {
        value: "Module"
    })), Qe = "dropdown", Xe = "ArrowUp", Ye = "ArrowDown", Ue = "click.bs.dropdown.data-api", Ge = "keydown.bs.dropdown.data-api", Je = "show", Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', ti = `${Ze}.show`, ei = ".dropdown-menu", ii = p() ? "top-end" : "top-start", ni = p() ? "top-start" : "top-end", si = p() ? "bottom-end" : "bottom-start", oi = p() ? "bottom-start" : "bottom-end", ri = p() ? "left-start" : "right-start", ai = p() ? "right-start" : "left-start", li = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [
            0,
            2
        ],
        popperConfig: null,
        reference: "toggle"
    }, ci = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
    class hi extends z {
        constructor(t, e){
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Q.next(this._element, ei)[0] || Q.prev(this._element, ei)[0] || Q.findOne(ei, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ci;
        }
        static get NAME() {
            return Qe;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children))P.on(t, "mouseover", h);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Je), this._element.classList.add(Je), P.trigger(this._element, "shown.bs.dropdown", t);
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.off(t, "mouseover", h);
                this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), P.trigger(this._element, "hidden.bs.dropdown", t);
            }
        }
        _getConfig(t) {
            if ("object" == typeof (t = super._getConfig(t)).reference && !o(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t;
        }
        _createPopper() {
            if (void 0 === Ke) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : o(this._config.reference) ? t = r(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = Ve(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(Je);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? ni : ii : e ? oi : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t  } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }
                ]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [
                {
                    name: "applyStyles",
                    enabled: !1
                }
            ]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            };
        }
        _selectMenuItem({ key: t , target: e  }) {
            const i = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t)=>a(t));
            i.length && b(i, e, t === Ye, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = Q.find(ti);
            for (const i of e){
                const e = hi.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const n = t.composedPath(), s = n.includes(e._menu);
                if (n.includes(e._element) || "inside" === e._config.autoClose && !s || "outside" === e._config.autoClose && s) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, n = [
                Xe,
                Ye
            ].includes(t.key);
            if (!n && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const s = this.matches(Ze) ? this : Q.prev(this, Ze)[0] || Q.next(this, Ze)[0] || Q.findOne(Ze, t.delegateTarget.parentNode), o = hi.getOrCreateInstance(s);
            if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
        }
    }
    P.on(document, Ge, Ze, hi.dataApiKeydownHandler), P.on(document, Ge, ei, hi.dataApiKeydownHandler), P.on(document, Ue, hi.clearMenus), P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), P.on(document, Ue, Ze, function(t) {
        t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }), g(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top", fi = "padding-right", pi = "margin-right";
    class gi {
        constructor(){
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, fi, (e)=>e + t), this._setElementAttributes(di, fi, (e)=>e + t), this._setElementAttributes(ui, pi, (e)=>e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, fi), this._resetElementAttributes(di, fi), this._resetElementAttributes(ui, pi);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t)=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && B.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t)=>{
                const i = B.getDataAttribute(t, e);
                null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (o(t)) e(t);
            else for (const i of Q.find(t, this._element))e(i);
        }
    }
    const mi = "show", _i = "mousedown.bs.backdrop", bi = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    }, vi = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
    class yi extends F {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
        }
        static get Default() {
            return bi;
        }
        static get DefaultType() {
            return vi;
        }
        static get NAME() {
            return "backdrop";
        }
        show(t) {
            if (!this._config.isVisible) return void m(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && d(e), e.classList.add(mi), this._emulateAnimation(()=>{
                m(t);
            });
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(mi), this._emulateAnimation(()=>{
                this.dispose(), m(t);
            })) : m(t);
        }
        dispose() {
            this._isAppended && (P.off(this._element, _i), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t;
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return t.rootElement = r(t.rootElement), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), P.on(t, _i, ()=>{
                m(this._config.clickCallback);
            }), this._isAppended = !0;
        }
        _emulateAnimation(t) {
            _(t, this._getElement(), this._config.isAnimated);
        }
    }
    const wi = ".bs.focustrap", Ai = "backward", Ei = {
        autofocus: !0,
        trapElement: null
    }, Ti = {
        autofocus: "boolean",
        trapElement: "element"
    };
    class Ci extends F {
        constructor(t){
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
            return Ei;
        }
        static get DefaultType() {
            return Ti;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), P.off(document, wi), P.on(document, "focusin.bs.focustrap", (t)=>this._handleFocusin(t)), P.on(document, "keydown.tab.bs.focustrap", (t)=>this._handleKeydown(t)), this._isActive = !0);
        }
        deactivate() {
            this._isActive && (this._isActive = !1, P.off(document, wi));
        }
        _handleFocusin(t) {
            const { trapElement: e  } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = Q.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === Ai ? i[i.length - 1].focus() : i[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Ai : "forward");
        }
    }
    const Oi = "hidden.bs.modal", xi = "show.bs.modal", ki = "modal-open", Li = "show", Di = "modal-static", Si = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    }, Ii = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
    class Ni extends z {
        constructor(t, e){
            super(t, e), this._dialog = Q.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new gi, this._addEventListeners();
        }
        static get Default() {
            return Si;
        }
        static get DefaultType() {
            return Ii;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || this._isTransitioning || P.trigger(this._element, xi, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ki), this._adjustDialog(), this._backdrop.show(()=>this._showElement(t)));
        }
        hide() {
            this._isShown && !this._isTransitioning && (P.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Li), this._queueCallback(()=>this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
            for (const t of [
                window,
                this._dialog
            ])P.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new yi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            });
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            });
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = Q.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), d(this._element), this._element.classList.add(Li), this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, P.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                });
            }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.modal", (t)=>{
                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
            }), P.on(window, "resize.bs.modal", ()=>{
                this._isShown && !this._isTransitioning && this._adjustDialog();
            }), P.on(this._element, "mousedown.dismiss.bs.modal", (t)=>{
                P.one(this._element, "click.dismiss.bs.modal", (e)=>{
                    this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
                });
            });
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(()=>{
                document.body.classList.remove(ki), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Oi);
            });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(Di) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Di), this._queueCallback(()=>{
                this._element.classList.remove(Di), this._queueCallback(()=>{
                    this._element.style.overflowY = e;
                }, this._dialog);
            }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0;
            if (i && !t) {
                const t = p() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!i && t) {
                const t = p() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(t, e) {
            return this.each(function() {
                const i = Ni.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    P.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
        const e = n(this);
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), P.one(e, xi, (t)=>{
            t.defaultPrevented || P.one(e, Oi, ()=>{
                a(this) && this.focus();
            });
        });
        const i = Q.findOne(".modal.show");
        i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
    }), q(Ni), g(Ni);
    const Pi = "show", ji = "showing", Mi = "hiding", Hi = ".offcanvas.show", $i = "hidePrevented.bs.offcanvas", Wi = "hidden.bs.offcanvas", Bi = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }, Fi = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
    class zi extends z {
        constructor(t, e){
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
            return Bi;
        }
        static get DefaultType() {
            return Fi;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown || P.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new gi).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ji), this._queueCallback(()=>{
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Pi), this._element.classList.remove(ji), P.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                });
            }, this._element, !0));
        }
        hide() {
            this._isShown && (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Mi), this._backdrop.hide(), this._queueCallback(()=>{
                this._element.classList.remove(Pi, Mi), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new gi).reset(), P.trigger(this._element, Wi);
            }, this._element, !0)));
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new yi({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? ()=>{
                    "static" !== this._config.backdrop ? this.hide() : P.trigger(this._element, $i);
                } : null
            });
        }
        _initializeFocusTrap() {
            return new Ci({
                trapElement: this._element
            });
        }
        _addEventListeners() {
            P.on(this._element, "keydown.dismiss.bs.offcanvas", (t)=>{
                "Escape" === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, $i));
            });
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = zi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    P.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        const e = n(this);
        if ([
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this)) return;
        P.one(e, Wi, ()=>{
            a(this) && this.focus();
        });
        const i = Q.findOne(Hi);
        i && i !== e && zi.getInstance(i).hide(), zi.getOrCreateInstance(e).toggle(this);
    }), P.on(window, "load.bs.offcanvas.data-api", ()=>{
        for (const t of Q.find(Hi))zi.getOrCreateInstance(t).show();
    }), P.on(window, "resize.bs.offcanvas", ()=>{
        for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed" !== getComputedStyle(t).position && zi.getOrCreateInstance(t).hide();
    }), q(zi), g(zi);
    const qi = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
    ]), Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Vi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Ki = (t, e)=>{
        const i = t.nodeName.toLowerCase();
        return e.includes(i) ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue)) : e.filter((t)=>t instanceof RegExp).some((t)=>t.test(i));
    }, Qi = {
        "*": [
            "class",
            "dir",
            "id",
            "lang",
            "role",
            /^aria-[\w-]*$/i
        ],
        a: [
            "target",
            "href",
            "title",
            "rel"
        ],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: [
            "src",
            "srcset",
            "alt",
            "title",
            "width",
            "height"
        ],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    }, Xi = {
        allowList: Qi,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    }, Yi = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    }, Ui = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
    class Gi extends F {
        constructor(t){
            super(), this._config = this._getConfig(t);
        }
        static get Default() {
            return Xi;
        }
        static get DefaultType() {
            return Yi;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content).map((t)=>this._resolvePossibleFunction(t)).filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this;
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content))this._setContent(t, i, e);
            const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t))super._typeCheckConfig({
                selector: e,
                entry: i
            }, Ui);
        }
        _setContent(t, e, i) {
            const n = Q.findOne(i, t);
            n && ((e = this._resolvePossibleFunction(e)) ? o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? n.innerHTML = this._maybeSanitize(e) : n.textContent = e : n.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const n = (new window.DOMParser).parseFromString(t, "text/html"), s = [].concat(...n.body.querySelectorAll("*"));
                for (const t of s){
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue;
                    }
                    const n = [].concat(...t.attributes), s = [].concat(e["*"] || [], e[i] || []);
                    for (const e of n)Ki(e, s) || t.removeAttribute(e.nodeName);
                }
                return n.body.innerHTML;
            }(t, this._config.allowList, this._config.sanitizeFn) : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t;
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const Ji = new Set([
        "sanitize",
        "allowList",
        "sanitizeFn"
    ]), Zi = "fade", tn = "show", en = ".modal", nn = "hide.bs.modal", sn = "hover", on = "focus", rn = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: p() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: p() ? "right" : "left"
    }, an = {
        allowList: Qi,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: [
            "top",
            "right",
            "bottom",
            "left"
        ],
        html: !1,
        offset: [
            0,
            0
        ],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    }, ln = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
    class cn extends z {
        constructor(t, e){
            if (void 0 === Ke) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
            return an;
        }
        static get DefaultType() {
            return ln;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout), P.off(this._element.closest(en), nn, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = P.trigger(this._element, this.constructor.eventName("show")), e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const { container: n  } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(tn), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.on(t, "mouseover", h);
            this._queueCallback(()=>{
                P.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1;
            }, this.tip, this._isAnimated());
        }
        hide() {
            if (this._isShown() && !P.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                if (this._getTipElement().classList.remove(tn), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children))P.off(t, "mouseover", h);
                this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(()=>{
                    this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), P.trigger(this._element, this.constructor.eventName("hidden")));
                }, this.tip, this._isAnimated());
            }
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Zi, tn), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = ((t)=>{
                do t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Zi), e;
        }
        setContent(t) {
            this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Gi({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory;
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            };
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Zi);
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(tn);
        }
        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement, i = rn[e.toUpperCase()];
            return Ve(this._element, t, this._getPopperConfig(i));
        }
        _getOffset() {
            const { offset: t  } = this._config;
            return "string" == typeof t ? t.split(",").map((t)=>Number.parseInt(t, 10)) : "function" == typeof t ? (e)=>t(e, this._element) : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    },
                    {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t)=>{
                            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
                        }
                    }
                ]
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)if ("click" === e) P.on(this._element, this.constructor.eventName("click"), this._config.selector, (t)=>{
                this._initializeOnDelegatedTarget(t).toggle();
            });
            else if ("manual" !== e) {
                const t = e === sn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === sn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                P.on(this._element, t, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? on : sn] = !0, e._enter();
                }), P.on(this._element, i, this._config.selector, (t)=>{
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? on : sn] = e._element.contains(t.relatedTarget), e._leave();
                });
            }
            this._hideModalHandler = ()=>{
                this._element && this.hide();
            }, P.on(this._element.closest(en), nn, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(()=>{
                this._isHovered && this.show();
            }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(()=>{
                this._isHovered || this.hide();
            }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e))Ji.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : r(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
        }
        _getDelegateConfig() {
            const t = {};
            for(const e in this._config)this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t.selector = !1, t.trigger = "manual", t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = cn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(cn);
    const hn = {
        ...cn.Default,
        content: "",
        offset: [
            0,
            8
        ],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    }, dn = {
        ...cn.DefaultType,
        content: "(null|string|element|function)"
    };
    class un extends cn {
        static get Default() {
            return hn;
        }
        static get DefaultType() {
            return dn;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(un);
    const fn = "click.bs.scrollspy", pn = "active", gn = "[href]", mn = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [
            .1,
            .5,
            1
        ]
    }, _n = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array"
    };
    class bn extends z {
        constructor(t, e){
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh();
        }
        static get Default() {
            return mn;
        }
        static get DefaultType() {
            return _n;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values())this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return t.target = r(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t)=>Number.parseFloat(t))), t;
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (P.off(this._config.target, fn), P.on(this._config.target, fn, gn, (t)=>{
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window, n = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n;
                }
            }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin
            };
            return new IntersectionObserver((t)=>this._observerCallback(t), t);
        }
        _observerCallback(t) {
            const e = (t)=>this._targetLinks.get(`#${t.target.id}`), i = (t)=>{
                this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t));
            }, n = (this._rootElement || document.documentElement).scrollTop, s = n >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = n;
            for (const o of t){
                if (!o.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue;
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && t) {
                    if (i(o), !n) return;
                } else s || t || i(o);
            }
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = Q.find(gn, this._config.target);
            for (const e of t){
                if (!e.hash || l(e)) continue;
                const t = Q.findOne(e.hash, this._element);
                a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(pn), this._activateParents(t), P.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn);
            else for (const e of Q.parents(t, ".nav, .list-group"))for (const t of Q.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item"))t.classList.add(pn);
        }
        _clearActiveClass(t) {
            t.classList.remove(pn);
            const e = Q.find("[href].active", t);
            for (const t of e)t.classList.remove(pn);
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = bn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(window, "load.bs.scrollspy.data-api", ()=>{
        for (const t of Q.find('[data-bs-spy="scroll"]'))bn.getOrCreateInstance(t);
    }), g(bn);
    const vn = "ArrowLeft", yn = "ArrowRight", wn = "ArrowUp", An = "ArrowDown", En = "active", Tn = "fade", Cn = "show", On = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
    class kn extends z {
        constructor(t){
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, "keydown.bs.tab", (t)=>this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(), i = e ? P.trigger(e, "hide.bs.tab", {
                relatedTarget: t
            }) : null;
            P.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            t && (t.classList.add(En), this._activate(n(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), P.trigger(t, "shown.bs.tab", {
                    relatedTarget: e
                })) : t.classList.add(Cn);
            }, t, t.classList.contains(Tn)));
        }
        _deactivate(t, e) {
            t && (t.classList.remove(En), t.blur(), this._deactivate(n(t)), this._queueCallback(()=>{
                "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), P.trigger(t, "hidden.bs.tab", {
                    relatedTarget: e
                })) : t.classList.remove(Cn);
            }, t, t.classList.contains(Tn)));
        }
        _keydown(t) {
            if (![
                vn,
                yn,
                wn,
                An
            ].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [
                yn,
                An
            ].includes(t.key), i = b(this._getChildren().filter((t)=>!l(t)), t.target, e, !0);
            i && (i.focus({
                preventScroll: !0
            }), kn.getOrCreateInstance(i).show());
        }
        _getChildren() {
            return Q.find(xn, this._parent);
        }
        _getActiveElem() {
            return this._getChildren().find((t)=>this._elemIsActive(t)) || null;
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e)this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t), i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = n(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const n = (t, n)=>{
                const s = Q.findOne(t, i);
                s && s.classList.toggle(n, e);
            };
            n(".dropdown-toggle", En), n(".dropdown-menu", Cn), i.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i);
        }
        _elemIsActive(t) {
            return t.classList.contains(En);
        }
        _getInnerElement(t) {
            return t.matches(xn) ? t : Q.findOne(xn, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = kn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    P.on(document, "click.bs.tab", On, function(t) {
        [
            "A",
            "AREA"
        ].includes(this.tagName) && t.preventDefault(), l(this) || kn.getOrCreateInstance(this).show();
    }), P.on(window, "load.bs.tab", ()=>{
        for (const t of Q.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))kn.getOrCreateInstance(t);
    }), g(kn);
    const Ln = "hide", Dn = "show", Sn = "showing", In = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }, Nn = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class Pn extends z {
        constructor(t, e){
            super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
            return Nn;
        }
        static get DefaultType() {
            return In;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            P.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Ln), d(this._element), this._element.classList.add(Dn, Sn), this._queueCallback(()=>{
                this._element.classList.remove(Sn), P.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
            }, this._element, this._config.animation));
        }
        hide() {
            this.isShown() && (P.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(Sn), this._queueCallback(()=>{
                this._element.classList.add(Ln), this._element.classList.remove(Sn, Dn), P.trigger(this._element, "hidden.bs.toast");
            }, this._element, this._config.animation)));
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Dn), super.dispose();
        }
        isShown() {
            return this._element.classList.contains(Dn);
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide();
            }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch(t.type){
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide();
        }
        _setListeners() {
            P.on(this._element, "mouseover.bs.toast", (t)=>this._onInteraction(t, !0)), P.on(this._element, "mouseout.bs.toast", (t)=>this._onInteraction(t, !1)), P.on(this._element, "focusin.bs.toast", (t)=>this._onInteraction(t, !0)), P.on(this._element, "focusout.bs.toast", (t)=>this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(t) {
            return this.each(function() {
                const e = Pn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return q(Pn), g(Pn), {
        Alert: R,
        Button: K,
        Carousel: at,
        Collapse: pt,
        Dropdown: hi,
        Modal: Ni,
        Offcanvas: zi,
        Popover: un,
        ScrollSpy: bn,
        Tab: kn,
        Toast: Pn,
        Tooltip: cn
    };
});

},{}],"bdgp8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _progressbarJs = require("progressbar.js");
var _progressbarJsDefault = parcelHelpers.interopDefault(_progressbarJs);
var _userDataJs = require("./user-data.js");
let gradient = '<defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0075F6"/><stop offset="55%" stop-color="#40C4FF"/><stop offset="100%" stop-color="#0075F6/></linearGradient></defs>';
let progressValue = `${(0, _userDataJs.persona).compatibilidad}`;
let progressValueAnimation = progressValue / 100;
let progressLegend = "Compatibilidad del puesto";
let bar = new (0, _progressbarJsDefault.default).Circle("#progress-circle", {
    strokeWidth: 8,
    color: "url(#gradient)",
    trailColor: "#F2F3F3",
    trailWidth: 8,
    svgStyle: null,
    text: {
        className: "progress-circle__label"
    },
    step: function(state, circle) {
        var value = `${Math.round(circle.value() * 100)}%`;
        circle.setText(value + `<span class="progress-circle__label--text">${progressLegend}</span>`);
    }
});
bar.svg.insertAdjacentHTML("afterbegin", gradient);
bar.animate(progressValueAnimation, {
    duration: 1500,
    easing: "easeInOut"
});

},{"progressbar.js":"56i4J","./user-data.js":"73Xvt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"56i4J":[function(require,module,exports) {
module.exports = {
    // Higher level API, different shaped progress bars
    Line: require("6e47a9e8ea010f1c"),
    Circle: require("abeeb804a65bec1d"),
    SemiCircle: require("c979f03140d71c42"),
    Square: require("40ca79126a3936d4"),
    // Lower level API to use any SVG path
    Path: require("ce7260af637d46a3"),
    // Base-class for creating new custom shapes
    // to be in line with the API of built-in shapes
    // Undocumented.
    Shape: require("6eb767077c607c9e"),
    // Internal utils, undocumented.
    utils: require("2f11706f306af6a6")
};

},{"6e47a9e8ea010f1c":"duDep","abeeb804a65bec1d":"2NRnF","c979f03140d71c42":"hTFnR","40ca79126a3936d4":"ly6sR","ce7260af637d46a3":"3Ocpe","6eb767077c607c9e":"5Nujp","2f11706f306af6a6":"Xfn1P"}],"duDep":[function(require,module,exports) {
// Line shaped progress bar
var Shape = require("58d8b9b73728d081");
var utils = require("7ba276edfa2746bd");
var Line = function Line(container, options) {
    this._pathTemplate = "M 0,{center} L 100,{center}";
    Shape.apply(this, arguments);
};
Line.prototype = new Shape();
Line.prototype.constructor = Line;
Line.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute("viewBox", "0 0 100 " + opts.strokeWidth);
    svg.setAttribute("preserveAspectRatio", "none");
};
Line.prototype._pathString = function _pathString(opts) {
    return utils.render(this._pathTemplate, {
        center: opts.strokeWidth / 2
    });
};
Line.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};
module.exports = Line;

},{"58d8b9b73728d081":"5Nujp","7ba276edfa2746bd":"Xfn1P"}],"5Nujp":[function(require,module,exports) {
// Base object for different progress bar shapes
var Path = require("25d8b0704c19ec21");
var utils = require("c5c608773292831e");
var DESTROYED_ERROR = "Object is destroyed";
var Shape = function Shape(container, opts) {
    // Throw a better error if progress bars are not initialized with `new`
    // keyword
    if (!(this instanceof Shape)) throw new Error("Constructor was called without new keyword");
    // Prevent calling constructor without parameters so inheritance
    // works correctly. To understand, this is how Shape is inherited:
    //
    //   Line.prototype = new Shape();
    //
    // We just want to set the prototype for Line.
    if (arguments.length === 0) return;
    // Default parameters for progress bar creation
    this._opts = utils.extend({
        color: "#555",
        strokeWidth: 1.0,
        trailColor: null,
        trailWidth: null,
        fill: null,
        text: {
            style: {
                color: null,
                position: "absolute",
                left: "50%",
                top: "50%",
                padding: 0,
                margin: 0,
                transform: {
                    prefix: true,
                    value: "translate(-50%, -50%)"
                }
            },
            autoStyleContainer: true,
            alignToBottom: true,
            value: null,
            className: "progressbar-text"
        },
        svgStyle: {
            display: "block",
            width: "100%"
        },
        warnings: false
    }, opts, true); // Use recursive extend
    // If user specifies e.g. svgStyle or text style, the whole object
    // should replace the defaults to make working with styles easier
    if (utils.isObject(opts) && opts.svgStyle !== undefined) this._opts.svgStyle = opts.svgStyle;
    if (utils.isObject(opts) && utils.isObject(opts.text) && opts.text.style !== undefined) this._opts.text.style = opts.text.style;
    var svgView = this._createSvgView(this._opts);
    var element;
    if (utils.isString(container)) element = document.querySelector(container);
    else element = container;
    if (!element) throw new Error("Container does not exist: " + container);
    this._container = element;
    this._container.appendChild(svgView.svg);
    if (this._opts.warnings) this._warnContainerAspectRatio(this._container);
    if (this._opts.svgStyle) utils.setStyles(svgView.svg, this._opts.svgStyle);
    // Expose public attributes before Path initialization
    this.svg = svgView.svg;
    this.path = svgView.path;
    this.trail = svgView.trail;
    this.text = null;
    var newOpts = utils.extend({
        attachment: undefined,
        shape: this
    }, this._opts);
    this._progressPath = new Path(svgView.path, newOpts);
    if (utils.isObject(this._opts.text) && this._opts.text.value !== null) this.setText(this._opts.text.value);
};
Shape.prototype.animate = function animate(progress, opts, cb) {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    this._progressPath.animate(progress, opts, cb);
};
Shape.prototype.stop = function stop() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    // Don't crash if stop is called inside step function
    if (this._progressPath === undefined) return;
    this._progressPath.stop();
};
Shape.prototype.pause = function pause() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this._progressPath === undefined) return;
    if (!this._progressPath._tweenable) // It seems that we can't pause this
    return;
    this._progressPath._tweenable.pause();
};
Shape.prototype.resume = function resume() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this._progressPath === undefined) return;
    if (!this._progressPath._tweenable) // It seems that we can't resume this
    return;
    this._progressPath._tweenable.resume();
};
Shape.prototype.destroy = function destroy() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    this.stop();
    this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.path = null;
    this.trail = null;
    this._progressPath = null;
    if (this.text !== null) {
        this.text.parentNode.removeChild(this.text);
        this.text = null;
    }
};
Shape.prototype.set = function set(progress) {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    this._progressPath.set(progress);
};
Shape.prototype.value = function value() {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this._progressPath === undefined) return 0;
    return this._progressPath.value();
};
Shape.prototype.setText = function setText(newText) {
    if (this._progressPath === null) throw new Error(DESTROYED_ERROR);
    if (this.text === null) {
        // Create new text node
        this.text = this._createTextContainer(this._opts, this._container);
        this._container.appendChild(this.text);
    }
    // Remove previous text and add new
    if (utils.isObject(newText)) {
        utils.removeChildren(this.text);
        this.text.appendChild(newText);
    } else this.text.innerHTML = newText;
};
Shape.prototype._createSvgView = function _createSvgView(opts) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this._initializeSvg(svg, opts);
    var trailPath = null;
    // Each option listed in the if condition are 'triggers' for creating
    // the trail path
    if (opts.trailColor || opts.trailWidth) {
        trailPath = this._createTrail(opts);
        svg.appendChild(trailPath);
    }
    var path = this._createPath(opts);
    svg.appendChild(path);
    return {
        svg: svg,
        path: path,
        trail: trailPath
    };
};
Shape.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute("viewBox", "0 0 100 100");
};
Shape.prototype._createPath = function _createPath(opts) {
    var pathString = this._pathString(opts);
    return this._createPathElement(pathString, opts);
};
Shape.prototype._createTrail = function _createTrail(opts) {
    // Create path string with original passed options
    var pathString = this._trailString(opts);
    // Prevent modifying original
    var newOpts = utils.extend({}, opts);
    // Defaults for parameters which modify trail path
    if (!newOpts.trailColor) newOpts.trailColor = "#eee";
    if (!newOpts.trailWidth) newOpts.trailWidth = newOpts.strokeWidth;
    newOpts.color = newOpts.trailColor;
    newOpts.strokeWidth = newOpts.trailWidth;
    // When trail path is set, fill must be set for it instead of the
    // actual path to prevent trail stroke from clipping
    newOpts.fill = null;
    return this._createPathElement(pathString, newOpts);
};
Shape.prototype._createPathElement = function _createPathElement(pathString, opts) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathString);
    path.setAttribute("stroke", opts.color);
    path.setAttribute("stroke-width", opts.strokeWidth);
    if (opts.fill) path.setAttribute("fill", opts.fill);
    else path.setAttribute("fill-opacity", "0");
    return path;
};
Shape.prototype._createTextContainer = function _createTextContainer(opts, container) {
    var textContainer = document.createElement("div");
    textContainer.className = opts.text.className;
    var textStyle = opts.text.style;
    if (textStyle) {
        if (opts.text.autoStyleContainer) container.style.position = "relative";
        utils.setStyles(textContainer, textStyle);
        // Default text color to progress bar's color
        if (!textStyle.color) textContainer.style.color = opts.color;
    }
    this._initializeTextContainer(opts, container, textContainer);
    return textContainer;
};
// Give custom shapes possibility to modify text element
Shape.prototype._initializeTextContainer = function(opts, container, element) {
// By default, no-op
// Custom shapes should respect API options, such as text.style
};
Shape.prototype._pathString = function _pathString(opts) {
    throw new Error("Override this function for each progress bar");
};
Shape.prototype._trailString = function _trailString(opts) {
    throw new Error("Override this function for each progress bar");
};
Shape.prototype._warnContainerAspectRatio = function _warnContainerAspectRatio(container) {
    if (!this.containerAspectRatio) return;
    var computedStyle = window.getComputedStyle(container, null);
    var width = parseFloat(computedStyle.getPropertyValue("width"), 10);
    var height = parseFloat(computedStyle.getPropertyValue("height"), 10);
    if (!utils.floatEquals(this.containerAspectRatio, width / height)) {
        console.warn("Incorrect aspect ratio of container", "#" + container.id, "detected:", computedStyle.getPropertyValue("width") + "(width)", "/", computedStyle.getPropertyValue("height") + "(height)", "=", width / height);
        console.warn("Aspect ratio of should be", this.containerAspectRatio);
    }
};
module.exports = Shape;

},{"25d8b0704c19ec21":"3Ocpe","c5c608773292831e":"Xfn1P"}],"3Ocpe":[function(require,module,exports) {
// Lower level API to animate any kind of svg path
var shifty = require("ea7e67951e7010b5");
var utils = require("5a2254e7371be9a");
var Tweenable = shifty.Tweenable;
var EASING_ALIASES = {
    easeIn: "easeInCubic",
    easeOut: "easeOutCubic",
    easeInOut: "easeInOutCubic"
};
var Path = function Path(path, opts) {
    // Throw a better error if not initialized with `new` keyword
    if (!(this instanceof Path)) throw new Error("Constructor was called without new keyword");
    // Default parameters for animation
    opts = utils.extend({
        delay: 0,
        duration: 800,
        easing: "linear",
        from: {},
        to: {},
        step: function() {}
    }, opts);
    var element;
    if (utils.isString(path)) element = document.querySelector(path);
    else element = path;
    // Reveal .path as public attribute
    this.path = element;
    this._opts = opts;
    this._tweenable = null;
    // Set up the starting positions
    var length = this.path.getTotalLength();
    this.path.style.strokeDasharray = length + " " + length;
    this.set(0);
};
Path.prototype.value = function value() {
    var offset = this._getComputedDashOffset();
    var length = this.path.getTotalLength();
    var progress = 1 - offset / length;
    // Round number to prevent returning very small number like 1e-30, which
    // is practically 0
    return parseFloat(progress.toFixed(6), 10);
};
Path.prototype.set = function set(progress) {
    this.stop();
    this.path.style.strokeDashoffset = this._progressToOffset(progress);
    var step = this._opts.step;
    if (utils.isFunction(step)) {
        var easing = this._easing(this._opts.easing);
        var values = this._calculateTo(progress, easing);
        var reference = this._opts.shape || this;
        step(values, reference, this._opts.attachment);
    }
};
Path.prototype.stop = function stop() {
    this._stopTween();
    this.path.style.strokeDashoffset = this._getComputedDashOffset();
};
// Method introduced here:
// http://jakearchibald.com/2013/animated-line-drawing-svg/
Path.prototype.animate = function animate(progress, opts, cb) {
    opts = opts || {};
    if (utils.isFunction(opts)) {
        cb = opts;
        opts = {};
    }
    var passedOpts = utils.extend({}, opts);
    // Copy default opts to new object so defaults are not modified
    var defaultOpts = utils.extend({}, this._opts);
    opts = utils.extend(defaultOpts, opts);
    var shiftyEasing = this._easing(opts.easing);
    var values = this._resolveFromAndTo(progress, shiftyEasing, passedOpts);
    this.stop();
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    this.path.getBoundingClientRect();
    var offset = this._getComputedDashOffset();
    var newOffset = this._progressToOffset(progress);
    var self = this;
    this._tweenable = new Tweenable();
    this._tweenable.tween({
        from: utils.extend({
            offset: offset
        }, values.from),
        to: utils.extend({
            offset: newOffset
        }, values.to),
        duration: opts.duration,
        delay: opts.delay,
        easing: shiftyEasing,
        step: function(state) {
            self.path.style.strokeDashoffset = state.offset;
            var reference = opts.shape || self;
            opts.step(state, reference, opts.attachment);
        }
    }).then(function(state) {
        if (utils.isFunction(cb)) cb();
    });
};
Path.prototype._getComputedDashOffset = function _getComputedDashOffset() {
    var computedStyle = window.getComputedStyle(this.path, null);
    return parseFloat(computedStyle.getPropertyValue("stroke-dashoffset"), 10);
};
Path.prototype._progressToOffset = function _progressToOffset(progress) {
    var length = this.path.getTotalLength();
    return length - progress * length;
};
// Resolves from and to values for animation.
Path.prototype._resolveFromAndTo = function _resolveFromAndTo(progress, easing, opts) {
    if (opts.from && opts.to) return {
        from: opts.from,
        to: opts.to
    };
    return {
        from: this._calculateFrom(easing),
        to: this._calculateTo(progress, easing)
    };
};
// Calculate `from` values from options passed at initialization
Path.prototype._calculateFrom = function _calculateFrom(easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, this.value(), easing);
};
// Calculate `to` values from options passed at initialization
Path.prototype._calculateTo = function _calculateTo(progress, easing) {
    return shifty.interpolate(this._opts.from, this._opts.to, progress, easing);
};
Path.prototype._stopTween = function _stopTween() {
    if (this._tweenable !== null) {
        this._tweenable.stop();
        this._tweenable = null;
    }
};
Path.prototype._easing = function _easing(easing) {
    if (EASING_ALIASES.hasOwnProperty(easing)) return EASING_ALIASES[easing];
    return easing;
};
module.exports = Path;

},{"ea7e67951e7010b5":"6KaQI","5a2254e7371be9a":"Xfn1P"}],"6KaQI":[function(require,module,exports) {
/*! For license information please see shifty.js.LICENSE.txt */ !function(t, n) {
    module.exports = n();
}(self, function() {
    return function() {
        "use strict";
        var t = {
            720: function(t, n, e) {
                e.r(n), e.d(n, {
                    Scene: function() {
                        return sn;
                    },
                    Tweenable: function() {
                        return kt;
                    },
                    interpolate: function() {
                        return nn;
                    },
                    processTweens: function() {
                        return dt;
                    },
                    setBezierFunction: function() {
                        return $;
                    },
                    shouldScheduleUpdate: function() {
                        return bt;
                    },
                    tween: function() {
                        return Pt;
                    },
                    unsetBezierFunction: function() {
                        return L;
                    }
                });
                var r = {};
                e.r(r), e.d(r, {
                    bounce: function() {
                        return D;
                    },
                    bouncePast: function() {
                        return q;
                    },
                    easeFrom: function() {
                        return B;
                    },
                    easeFromTo: function() {
                        return Q;
                    },
                    easeInBack: function() {
                        return E;
                    },
                    easeInCirc: function() {
                        return j;
                    },
                    easeInCubic: function() {
                        return c;
                    },
                    easeInExpo: function() {
                        return w;
                    },
                    easeInOutBack: function() {
                        return T;
                    },
                    easeInOutCirc: function() {
                        return P;
                    },
                    easeInOutCubic: function() {
                        return l;
                    },
                    easeInOutExpo: function() {
                        return S;
                    },
                    easeInOutQuad: function() {
                        return s;
                    },
                    easeInOutQuart: function() {
                        return v;
                    },
                    easeInOutQuint: function() {
                        return d;
                    },
                    easeInOutSine: function() {
                        return b;
                    },
                    easeInQuad: function() {
                        return u;
                    },
                    easeInQuart: function() {
                        return h;
                    },
                    easeInQuint: function() {
                        return y;
                    },
                    easeInSine: function() {
                        return g;
                    },
                    easeOutBack: function() {
                        return A;
                    },
                    easeOutBounce: function() {
                        return M;
                    },
                    easeOutCirc: function() {
                        return k;
                    },
                    easeOutCubic: function() {
                        return f;
                    },
                    easeOutExpo: function() {
                        return O;
                    },
                    easeOutQuad: function() {
                        return a;
                    },
                    easeOutQuart: function() {
                        return p;
                    },
                    easeOutQuint: function() {
                        return _;
                    },
                    easeOutSine: function() {
                        return m;
                    },
                    easeTo: function() {
                        return N;
                    },
                    elastic: function() {
                        return I;
                    },
                    linear: function() {
                        return o;
                    },
                    swingFrom: function() {
                        return x;
                    },
                    swingFromTo: function() {
                        return F;
                    },
                    swingTo: function() {
                        return C;
                    }
                });
                var i = {};
                e.r(i), e.d(i, {
                    afterTween: function() {
                        return Jt;
                    },
                    beforeTween: function() {
                        return Ht;
                    },
                    doesApply: function() {
                        return Wt;
                    },
                    tweenCreated: function() {
                        return Gt;
                    }
                });
                var o = function(t) {
                    return t;
                }, u = function(t) {
                    return Math.pow(t, 2);
                }, a = function(t) {
                    return -(Math.pow(t - 1, 2) - 1);
                }, s = function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -0.5 * ((t -= 2) * t - 2);
                }, c = function(t) {
                    return Math.pow(t, 3);
                }, f = function(t) {
                    return Math.pow(t - 1, 3) + 1;
                }, l = function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2);
                }, h = function(t) {
                    return Math.pow(t, 4);
                }, p = function(t) {
                    return -(Math.pow(t - 1, 4) - 1);
                }, v = function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
                }, y = function(t) {
                    return Math.pow(t, 5);
                }, _ = function(t) {
                    return Math.pow(t - 1, 5) + 1;
                }, d = function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2);
                }, g = function(t) {
                    return 1 - Math.cos(t * (Math.PI / 2));
                }, m = function(t) {
                    return Math.sin(t * (Math.PI / 2));
                }, b = function(t) {
                    return -0.5 * (Math.cos(Math.PI * t) - 1);
                }, w = function(t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
                }, O = function(t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
                }, S = function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
                }, j = function(t) {
                    return -(Math.sqrt(1 - t * t) - 1);
                }, k = function(t) {
                    return Math.sqrt(1 - Math.pow(t - 1, 2));
                }, P = function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                }, M = function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
                }, E = function(t) {
                    var n = 1.70158;
                    return t * t * ((n + 1) * t - n);
                }, A = function(t) {
                    var n = 1.70158;
                    return (t -= 1) * t * ((n + 1) * t + n) + 1;
                }, T = function(t) {
                    var n = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (n *= 1.525)) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
                }, I = function(t) {
                    return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1;
                }, F = function(t) {
                    var n = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (n *= 1.525)) * t - n) * .5 : .5 * ((t -= 2) * t * ((1 + (n *= 1.525)) * t + n) + 2);
                }, x = function(t) {
                    var n = 1.70158;
                    return t * t * ((n + 1) * t - n);
                }, C = function(t) {
                    var n = 1.70158;
                    return (t -= 1) * t * ((n + 1) * t + n) + 1;
                }, D = function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
                }, q = function(t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
                }, Q = function(t) {
                    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
                }, B = function(t) {
                    return Math.pow(t, 4);
                }, N = function(t) {
                    return Math.pow(t, .25);
                };
                function R(t, n, e, r, i, o) {
                    var u, a, s, c, f, l = 0, h = 0, p = 0, v = function(t) {
                        return ((l * t + h) * t + p) * t;
                    }, y = function(t) {
                        return (3 * l * t + 2 * h) * t + p;
                    }, _ = function(t) {
                        return t >= 0 ? t : 0 - t;
                    };
                    return l = 1 - (p = 3 * n) - (h = 3 * (r - n) - p), s = 1 - (f = 3 * e) - (c = 3 * (i - e) - f), u = t, a = function(t) {
                        return 1 / (200 * t);
                    }(o), function(t) {
                        return ((s * t + c) * t + f) * t;
                    }(function(t, n) {
                        var e, r, i, o, u, a;
                        for(i = t, a = 0; a < 8; a++){
                            if (o = v(i) - t, _(o) < n) return i;
                            if (u = y(i), _(u) < 1e-6) break;
                            i -= o / u;
                        }
                        if ((i = t) < (e = 0)) return e;
                        if (i > (r = 1)) return r;
                        for(; e < r;){
                            if (o = v(i), _(o - t) < n) return i;
                            t > o ? e = i : r = i, i = .5 * (r - e) + e;
                        }
                        return i;
                    }(u, a));
                }
                var z, U = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .25, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .25, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .75, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .75;
                    return function(i) {
                        return R(i, t, n, e, r, 1);
                    };
                }, $ = function(t, n, e, r, i) {
                    var o = U(n, e, r, i);
                    return o.displayName = t, o.x1 = n, o.y1 = e, o.x2 = r, o.y2 = i, kt.formulas[t] = o;
                }, L = function(t) {
                    return delete kt.formulas[t];
                };
                function V(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }
                function W(t, n) {
                    for(var e = 0; e < n.length; e++){
                        var r = n[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function G(t) {
                    return G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t;
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                    }, G(t);
                }
                function H(t) {
                    return function(t) {
                        if (Array.isArray(t)) return J(t);
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                    }(t) || function(t, n) {
                        if (t) {
                            if ("string" == typeof t) return J(t, n);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? J(t, n) : void 0;
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }();
                }
                function J(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for(var e = 0, r = new Array(n); e < n; e++)r[e] = t[e];
                    return r;
                }
                function K(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter(function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable;
                        })), e.push.apply(e, r);
                    }
                    return e;
                }
                function X(t) {
                    for(var n = 1; n < arguments.length; n++){
                        var e = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? K(Object(e), !0).forEach(function(n) {
                            Y(t, n, e[n]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : K(Object(e)).forEach(function(n) {
                            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                        });
                    }
                    return t;
                }
                function Y(t, n, e) {
                    return n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e, t;
                }
                var Z, tt, nt, et = "linear", rt = "undefined" != typeof window ? window : e.g, it = "afterTween", ot = "afterTweenEnd", ut = "beforeTween", at = "tweenCreated", st = "function", ct = "string", ft = rt.requestAnimationFrame || rt.webkitRequestAnimationFrame || rt.oRequestAnimationFrame || rt.msRequestAnimationFrame || rt.mozCancelRequestAnimationFrame && rt.mozRequestAnimationFrame || setTimeout, lt = function() {}, ht = null, pt = null, vt = X({}, r), yt = function(t, n, e, r, i, o, u) {
                    var a, s, c, f = t < o ? 0 : (t - o) / i, l = !1;
                    for(var h in u && u.call && (l = !0, a = u(f)), n)l || (a = ((s = u[h]).call ? s : vt[s])(f)), c = e[h], n[h] = c + (r[h] - c) * a;
                    return n;
                }, _t = function(t, n) {
                    var e = t._timestamp, r = t._currentState, i = t._delay;
                    if (!(n < e + i)) {
                        var o = t._duration, u = t._targetState, a = e + i + o, s = n > a ? a : n;
                        t._hasEnded = s >= a;
                        var c = o - (a - s), f = t._filters.length > 0;
                        if (t._hasEnded) return t._render(u, t._data, c), t.stop(!0);
                        f && t._applyFilter(ut), s < e + i ? e = o = s = 1 : e += i, yt(s, r, t._originalState, u, o, e, t._easing), f && t._applyFilter(it), t._render(r, t._data, c);
                    }
                }, dt = function() {
                    for(var t, n = kt.now(), e = ht; e;)t = e._next, _t(e, n), e = t;
                }, gt = Date.now || function() {
                    return +new Date;
                }, mt = !1, bt = function(t) {
                    t && mt || (mt = t, t && wt());
                }, wt = function t() {
                    Z = gt(), mt && ft.call(rt, t, 16.666666666666668), dt();
                }, Ot = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : et, e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (Array.isArray(n)) {
                        var r = U.apply(void 0, H(n));
                        return r;
                    }
                    var i = G(n);
                    if (vt[n]) return vt[n];
                    if (i === ct || i === st) for(var o in t)e[o] = n;
                    else for(var u in t)e[u] = n[u] || et;
                    return e;
                }, St = function(t) {
                    t === ht ? (ht = t._next) ? ht._previous = null : pt = null : t === pt ? (pt = t._previous) ? pt._next = null : ht = null : (tt = t._previous, nt = t._next, tt._next = nt, nt._previous = tt), t._previous = t._next = null;
                }, jt = "function" == typeof Promise ? Promise : null;
                z = Symbol.toStringTag;
                var kt = function() {
                    function t() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        V(this, t), Y(this, z, "Promise"), this._config = {}, this._data = {}, this._delay = 0, this._filters = [], this._next = null, this._previous = null, this._timestamp = null, this._hasEnded = !1, this._resolve = null, this._reject = null, this._currentState = n || {}, this._originalState = {}, this._targetState = {}, this._start = lt, this._render = lt, this._promiseCtor = jt, e && this.setConfig(e);
                    }
                    var n, e;
                    return n = t, e = [
                        {
                            key: "_applyFilter",
                            value: function(t) {
                                for(var n = this._filters.length; n > 0; n--){
                                    var e = this._filters[n - n][t];
                                    e && e(this);
                                }
                            }
                        },
                        {
                            key: "tween",
                            value: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                                return this._isPlaying && this.stop(), !n && this._config || this.setConfig(n), this._pausedAtTime = null, this._timestamp = t.now(), this._start(this.get(), this._data), this._delay && this._render(this._currentState, this._data, 0), this._resume(this._timestamp);
                            }
                        },
                        {
                            key: "setConfig",
                            value: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = this._config;
                                for(var r in n)e[r] = n[r];
                                var i = e.promise, o = void 0 === i ? this._promiseCtor : i, u = e.start, a = void 0 === u ? lt : u, s = e.finish, c = e.render, f = void 0 === c ? this._config.step || lt : c, l = e.step, h = void 0 === l ? lt : l;
                                this._data = e.data || e.attachment || this._data, this._isPlaying = !1, this._pausedAtTime = null, this._scheduleId = null, this._delay = n.delay || 0, this._start = a, this._render = f || h, this._duration = e.duration || 500, this._promiseCtor = o, s && (this._resolve = s);
                                var p = n.from, v = n.to, y = void 0 === v ? {} : v, _ = this._currentState, d = this._originalState, g = this._targetState;
                                for(var m in p)_[m] = p[m];
                                var b = !1;
                                for(var w in _){
                                    var O = _[w];
                                    b || G(O) !== ct || (b = !0), d[w] = O, g[w] = y.hasOwnProperty(w) ? y[w] : O;
                                }
                                if (this._easing = Ot(this._currentState, e.easing, this._easing), this._filters.length = 0, b) {
                                    for(var S in t.filters)t.filters[S].doesApply(this) && this._filters.push(t.filters[S]);
                                    this._applyFilter(at);
                                }
                                return this;
                            }
                        },
                        {
                            key: "then",
                            value: function(t, n) {
                                var e = this;
                                return this._promise = new this._promiseCtor(function(t, n) {
                                    e._resolve = t, e._reject = n;
                                }), this._promise.then(t, n);
                            }
                        },
                        {
                            key: "catch",
                            value: function(t) {
                                return this.then().catch(t);
                            }
                        },
                        {
                            key: "finally",
                            value: function(t) {
                                return this.then().finally(t);
                            }
                        },
                        {
                            key: "get",
                            value: function() {
                                return X({}, this._currentState);
                            }
                        },
                        {
                            key: "set",
                            value: function(t) {
                                this._currentState = t;
                            }
                        },
                        {
                            key: "pause",
                            value: function() {
                                if (this._isPlaying) return this._pausedAtTime = t.now(), this._isPlaying = !1, St(this), this;
                            }
                        },
                        {
                            key: "resume",
                            value: function() {
                                return this._resume();
                            }
                        },
                        {
                            key: "_resume",
                            value: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.now();
                                return null === this._timestamp ? this.tween() : this._isPlaying ? this._promise : (this._pausedAtTime && (this._timestamp += n - this._pausedAtTime, this._pausedAtTime = null), this._isPlaying = !0, null === ht ? (ht = this, pt = this) : (this._previous = pt, pt._next = this, pt = this), this);
                            }
                        },
                        {
                            key: "seek",
                            value: function(n) {
                                n = Math.max(n, 0);
                                var e = t.now();
                                return this._timestamp + n === 0 || (this._timestamp = e - n, _t(this, e)), this;
                            }
                        },
                        {
                            key: "stop",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!this._isPlaying) return this;
                                this._isPlaying = !1, St(this);
                                var n = this._filters.length > 0;
                                return t && (n && this._applyFilter(ut), yt(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing), n && (this._applyFilter(it), this._applyFilter(ot))), this._resolve && this._resolve({
                                    data: this._data,
                                    state: this._currentState,
                                    tweenable: this
                                }), this._resolve = null, this._reject = null, this;
                            }
                        },
                        {
                            key: "cancel",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = this._currentState, e = this._data, r = this._isPlaying;
                                return r ? (this._reject && this._reject({
                                    data: e,
                                    state: n,
                                    tweenable: this
                                }), this._resolve = null, this._reject = null, this.stop(t)) : this;
                            }
                        },
                        {
                            key: "isPlaying",
                            value: function() {
                                return this._isPlaying;
                            }
                        },
                        {
                            key: "hasEnded",
                            value: function() {
                                return this._hasEnded;
                            }
                        },
                        {
                            key: "setScheduleFunction",
                            value: function(n) {
                                t.setScheduleFunction(n);
                            }
                        },
                        {
                            key: "data",
                            value: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                return t && (this._data = X({}, t)), this._data;
                            }
                        },
                        {
                            key: "dispose",
                            value: function() {
                                for(var t in this)delete this[t];
                            }
                        }
                    ], e && W(n.prototype, e), t;
                }();
                function Pt() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = new kt;
                    return n.tween(t), n.tweenable = n, n;
                }
                Y(kt, "now", function() {
                    return Z;
                }), Y(kt, "setScheduleFunction", function(t) {
                    return ft = t;
                }), Y(kt, "filters", {}), Y(kt, "formulas", vt), bt(!0);
                var Mt, Et, At = /(\d|-|\.)/, Tt = /([^\-0-9.]+)/g, It = /[0-9.-]+/g, Ft = (Mt = It.source, Et = /,\s*/.source, new RegExp("rgba?\\(".concat(Mt).concat(Et).concat(Mt).concat(Et).concat(Mt, "(").concat(Et).concat(Mt, ")?\\)"), "g")), xt = /^.*\(/, Ct = /#([0-9]|[a-f]){3,6}/gi, Dt = "VAL", qt = function(t, n) {
                    return t.map(function(t, e) {
                        return "_".concat(n, "_").concat(e);
                    });
                };
                function Qt(t) {
                    return parseInt(t, 16);
                }
                var Bt = function(t) {
                    var n;
                    return "rgb(".concat((n = t, 3 === (n = n.replace(/#/, "")).length && (n = (n = n.split(""))[0] + n[0] + n[1] + n[1] + n[2] + n[2]), [
                        Qt(n.substr(0, 2)),
                        Qt(n.substr(2, 2)),
                        Qt(n.substr(4, 2))
                    ]).join(","), ")");
                }, Nt = function(t, n, e) {
                    var r = n.match(t), i = n.replace(t, Dt);
                    return r && r.forEach(function(t) {
                        return i = i.replace(Dt, e(t));
                    }), i;
                }, Rt = function(t) {
                    for(var n in t){
                        var e = t[n];
                        "string" == typeof e && e.match(Ct) && (t[n] = Nt(Ct, e, Bt));
                    }
                }, zt = function(t) {
                    var n = t.match(It), e = n.slice(0, 3).map(Math.floor), r = t.match(xt)[0];
                    if (3 === n.length) return "".concat(r).concat(e.join(","), ")");
                    if (4 === n.length) return "".concat(r).concat(e.join(","), ",").concat(n[3], ")");
                    throw new Error("Invalid rgbChunk: ".concat(t));
                }, Ut = function(t) {
                    return t.match(It);
                }, $t = function(t, n) {
                    var e = {};
                    return n.forEach(function(n) {
                        e[n] = t[n], delete t[n];
                    }), e;
                }, Lt = function(t, n) {
                    return n.map(function(n) {
                        return t[n];
                    });
                }, Vt = function(t, n) {
                    return n.forEach(function(n) {
                        return t = t.replace(Dt, +n.toFixed(4));
                    }), t;
                }, Wt = function(t) {
                    for(var n in t._currentState)if ("string" == typeof t._currentState[n]) return !0;
                    return !1;
                };
                function Gt(t) {
                    var n = t._currentState;
                    [
                        n,
                        t._originalState,
                        t._targetState
                    ].forEach(Rt), t._tokenData = function(t) {
                        var n, e, r = {};
                        for(var i in t){
                            var o = t[i];
                            "string" == typeof o && (r[i] = {
                                formatString: (n = o, e = void 0, e = n.match(Tt), e ? (1 === e.length || n.charAt(0).match(At)) && e.unshift("") : e = [
                                    "",
                                    ""
                                ], e.join(Dt)),
                                chunkNames: qt(Ut(o), i)
                            });
                        }
                        return r;
                    }(n);
                }
                function Ht(t) {
                    var n = t._currentState, e = t._originalState, r = t._targetState, i = t._easing, o = t._tokenData;
                    !function(t, n) {
                        var e = function(e) {
                            var r = n[e].chunkNames, i = t[e];
                            if ("string" == typeof i) {
                                var o = i.split(" "), u = o[o.length - 1];
                                r.forEach(function(n, e) {
                                    return t[n] = o[e] || u;
                                });
                            } else r.forEach(function(n) {
                                return t[n] = i;
                            });
                            delete t[e];
                        };
                        for(var r in n)e(r);
                    }(i, o), [
                        n,
                        e,
                        r
                    ].forEach(function(t) {
                        return function(t, n) {
                            var e = function(e) {
                                Ut(t[e]).forEach(function(r, i) {
                                    return t[n[e].chunkNames[i]] = +r;
                                }), delete t[e];
                            };
                            for(var r in n)e(r);
                        }(t, o);
                    });
                }
                function Jt(t) {
                    var n = t._currentState, e = t._originalState, r = t._targetState, i = t._easing, o = t._tokenData;
                    [
                        n,
                        e,
                        r
                    ].forEach(function(t) {
                        return function(t, n) {
                            for(var e in n){
                                var r = n[e], i = r.chunkNames, o = r.formatString, u = Vt(o, Lt($t(t, i), i));
                                t[e] = Nt(Ft, u, zt);
                            }
                        }(t, o);
                    }), function(t, n) {
                        for(var e in n){
                            var r = n[e].chunkNames, i = t[r[0]];
                            t[e] = "string" == typeof i ? r.map(function(n) {
                                var e = t[n];
                                return delete t[n], e;
                            }).join(" ") : i;
                        }
                    }(i, o);
                }
                function Kt(t, n) {
                    var e = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        n && (r = r.filter(function(n) {
                            return Object.getOwnPropertyDescriptor(t, n).enumerable;
                        })), e.push.apply(e, r);
                    }
                    return e;
                }
                function Xt(t) {
                    for(var n = 1; n < arguments.length; n++){
                        var e = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? Kt(Object(e), !0).forEach(function(n) {
                            Yt(t, n, e[n]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : Kt(Object(e)).forEach(function(n) {
                            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                        });
                    }
                    return t;
                }
                function Yt(t, n, e) {
                    return n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e, t;
                }
                var Zt = new kt, tn = kt.filters, nn = function(t, n, e, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, o = Xt({}, t), u = Ot(t, r);
                    for(var a in Zt._filters.length = 0, Zt.set({}), Zt._currentState = o, Zt._originalState = t, Zt._targetState = n, Zt._easing = u, tn)tn[a].doesApply(Zt) && Zt._filters.push(tn[a]);
                    Zt._applyFilter("tweenCreated"), Zt._applyFilter("beforeTween");
                    var s = yt(e, o, t, n, 1, i, u);
                    return Zt._applyFilter("afterTween"), s;
                };
                function en(t, n) {
                    (null == n || n > t.length) && (n = t.length);
                    for(var e = 0, r = new Array(n); e < n; e++)r[e] = t[e];
                    return r;
                }
                function rn(t, n) {
                    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
                }
                function on(t, n) {
                    for(var e = 0; e < n.length; e++){
                        var r = n[e];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function un(t, n) {
                    var e = n.get(t);
                    if (!e) throw new TypeError("attempted to get private field on non-instance");
                    return e.get ? e.get.call(t) : e.value;
                }
                var an = new WeakMap, sn = function() {
                    function t() {
                        rn(this, t), an.set(this, {
                            writable: !0,
                            value: []
                        });
                        for(var n = arguments.length, e = new Array(n), r = 0; r < n; r++)e[r] = arguments[r];
                        e.forEach(this.add.bind(this));
                    }
                    var n, e;
                    return n = t, e = [
                        {
                            key: "add",
                            value: function(t) {
                                return un(this, an).push(t), t;
                            }
                        },
                        {
                            key: "remove",
                            value: function(t) {
                                var n = un(this, an).indexOf(t);
                                return ~n && un(this, an).splice(n, 1), t;
                            }
                        },
                        {
                            key: "empty",
                            value: function() {
                                return this.tweenables.map(this.remove.bind(this));
                            }
                        },
                        {
                            key: "isPlaying",
                            value: function() {
                                return un(this, an).some(function(t) {
                                    return t.isPlaying();
                                });
                            }
                        },
                        {
                            key: "play",
                            value: function() {
                                return un(this, an).forEach(function(t) {
                                    return t.tween();
                                }), this;
                            }
                        },
                        {
                            key: "pause",
                            value: function() {
                                return un(this, an).forEach(function(t) {
                                    return t.pause();
                                }), this;
                            }
                        },
                        {
                            key: "resume",
                            value: function() {
                                return this.playingTweenables.forEach(function(t) {
                                    return t.resume();
                                }), this;
                            }
                        },
                        {
                            key: "stop",
                            value: function(t) {
                                return un(this, an).forEach(function(n) {
                                    return n.stop(t);
                                }), this;
                            }
                        },
                        {
                            key: "tweenables",
                            get: function() {
                                var t;
                                return function(t) {
                                    if (Array.isArray(t)) return en(t);
                                }(t = un(this, an)) || function(t) {
                                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
                                }(t) || function(t, n) {
                                    if (t) {
                                        if ("string" == typeof t) return en(t, n);
                                        var e = Object.prototype.toString.call(t).slice(8, -1);
                                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? en(t, n) : void 0;
                                    }
                                }(t) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                }();
                            }
                        },
                        {
                            key: "playingTweenables",
                            get: function() {
                                return un(this, an).filter(function(t) {
                                    return !t.hasEnded();
                                });
                            }
                        },
                        {
                            key: "promises",
                            get: function() {
                                return un(this, an).map(function(t) {
                                    return t.then();
                                });
                            }
                        }
                    ], on(n.prototype, e), t;
                }();
                kt.filters.token = i;
            }
        }, n = {};
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                exports: {}
            };
            return t[r](i, i.exports, e), i.exports;
        }
        return e.d = function(t, n) {
            for(var r in n)e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: n[r]
            });
        }, e.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        }(), e.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, e(720);
    }();
});

},{}],"Xfn1P":[function(require,module,exports) {
// Utility functions
var PREFIXES = "Webkit Moz O ms".split(" ");
var FLOAT_COMPARISON_EPSILON = 0.001;
// Copy all attributes from source object to destination object.
// destination object is mutated.
function extend(destination, source, recursive) {
    destination = destination || {};
    source = source || {};
    recursive = recursive || false;
    for(var attrName in source)if (source.hasOwnProperty(attrName)) {
        var destVal = destination[attrName];
        var sourceVal = source[attrName];
        if (recursive && isObject(destVal) && isObject(sourceVal)) destination[attrName] = extend(destVal, sourceVal, recursive);
        else destination[attrName] = sourceVal;
    }
    return destination;
}
// Renders templates with given variables. Variables must be surrounded with
// braces without any spaces, e.g. {variable}
// All instances of variable placeholders will be replaced with given content
// Example:
// render('Hello, {message}!', {message: 'world'})
function render(template, vars) {
    var rendered = template;
    for(var key in vars)if (vars.hasOwnProperty(key)) {
        var val = vars[key];
        var regExpString = "\\{" + key + "\\}";
        var regExp = new RegExp(regExpString, "g");
        rendered = rendered.replace(regExp, val);
    }
    return rendered;
}
function setStyle(element, style, value) {
    var elStyle = element.style; // cache for performance
    for(var i = 0; i < PREFIXES.length; ++i){
        var prefix = PREFIXES[i];
        elStyle[prefix + capitalize(style)] = value;
    }
    elStyle[style] = value;
}
function setStyles(element, styles) {
    forEachObject(styles, function(styleValue, styleName) {
        // Allow disabling some individual styles by setting them
        // to null or undefined
        if (styleValue === null || styleValue === undefined) return;
        // If style's value is {prefix: true, value: '50%'},
        // Set also browser prefixed styles
        if (isObject(styleValue) && styleValue.prefix === true) setStyle(element, styleName, styleValue.value);
        else element.style[styleName] = styleValue;
    });
}
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function isString(obj) {
    return typeof obj === "string" || obj instanceof String;
}
function isFunction(obj) {
    return typeof obj === "function";
}
function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}
// Returns true if `obj` is object as in {a: 1, b: 2}, not if it's function or
// array
function isObject(obj) {
    if (isArray(obj)) return false;
    var type = typeof obj;
    return type === "object" && !!obj;
}
function forEachObject(object, callback) {
    for(var key in object)if (object.hasOwnProperty(key)) {
        var val = object[key];
        callback(val, key);
    }
}
function floatEquals(a, b) {
    return Math.abs(a - b) < FLOAT_COMPARISON_EPSILON;
}
// https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
function removeChildren(el) {
    while(el.firstChild)el.removeChild(el.firstChild);
}
module.exports = {
    extend: extend,
    render: render,
    setStyle: setStyle,
    setStyles: setStyles,
    capitalize: capitalize,
    isString: isString,
    isFunction: isFunction,
    isObject: isObject,
    forEachObject: forEachObject,
    floatEquals: floatEquals,
    removeChildren: removeChildren
};

},{}],"2NRnF":[function(require,module,exports) {
// Circle shaped progress bar
var Shape = require("ab5694bb9011a221");
var utils = require("1c4d0673e97f4e00");
var Circle = function Circle(container, options) {
    // Use two arcs to form a circle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}";
    this.containerAspectRatio = 1;
    Shape.apply(this, arguments);
};
Circle.prototype = new Shape();
Circle.prototype.constructor = Circle;
Circle.prototype._pathString = function _pathString(opts) {
    var widthOfWider = opts.strokeWidth;
    if (opts.trailWidth && opts.trailWidth > opts.strokeWidth) widthOfWider = opts.trailWidth;
    var r = 50 - widthOfWider / 2;
    return utils.render(this._pathTemplate, {
        radius: r,
        "2radius": r * 2
    });
};
Circle.prototype._trailString = function _trailString(opts) {
    return this._pathString(opts);
};
module.exports = Circle;

},{"ab5694bb9011a221":"5Nujp","1c4d0673e97f4e00":"Xfn1P"}],"hTFnR":[function(require,module,exports) {
// Semi-SemiCircle shaped progress bar
var Shape = require("cb8a0724005dd95");
var Circle = require("24e47ca12f6c787d");
var utils = require("d06ce9021ade0545");
var SemiCircle = function SemiCircle(container, options) {
    // Use one arc to form a SemiCircle
    // See this answer http://stackoverflow.com/a/10477334/1446092
    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0";
    this.containerAspectRatio = 2;
    Shape.apply(this, arguments);
};
SemiCircle.prototype = new Shape();
SemiCircle.prototype.constructor = SemiCircle;
SemiCircle.prototype._initializeSvg = function _initializeSvg(svg, opts) {
    svg.setAttribute("viewBox", "0 0 100 50");
};
SemiCircle.prototype._initializeTextContainer = function _initializeTextContainer(opts, container, textContainer) {
    if (opts.text.style) {
        // Reset top style
        textContainer.style.top = "auto";
        textContainer.style.bottom = "0";
        if (opts.text.alignToBottom) utils.setStyle(textContainer, "transform", "translate(-50%, 0)");
        else utils.setStyle(textContainer, "transform", "translate(-50%, 50%)");
    }
};
// Share functionality with Circle, just have different path
SemiCircle.prototype._pathString = Circle.prototype._pathString;
SemiCircle.prototype._trailString = Circle.prototype._trailString;
module.exports = SemiCircle;

},{"cb8a0724005dd95":"5Nujp","24e47ca12f6c787d":"2NRnF","d06ce9021ade0545":"Xfn1P"}],"ly6sR":[function(require,module,exports) {
// Square shaped progress bar
// Note: Square is not core part of API anymore. It's left here
//       for reference. square is not included to the progressbar
//       build anymore
var Shape = require("c312f041a17ddf1");
var utils = require("f18633a1993d2efe");
var Square = function Square(container, options) {
    this._pathTemplate = "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}";
    this._trailTemplate = "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}";
    Shape.apply(this, arguments);
};
Square.prototype = new Shape();
Square.prototype.constructor = Square;
Square.prototype._pathString = function _pathString(opts) {
    var w = 100 - opts.strokeWidth / 2;
    return utils.render(this._pathTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2
    });
};
Square.prototype._trailString = function _trailString(opts) {
    var w = 100 - opts.strokeWidth / 2;
    return utils.render(this._trailTemplate, {
        width: w,
        strokeWidth: opts.strokeWidth,
        halfOfStrokeWidth: opts.strokeWidth / 2,
        startMargin: opts.strokeWidth / 2 - opts.trailWidth / 2
    });
};
module.exports = Square;

},{"c312f041a17ddf1":"5Nujp","f18633a1993d2efe":"Xfn1P"}],"5CJev":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLASSES", ()=>CLASSES);
parcelHelpers.export(exports, "CLASS_ACTIVE", ()=>CLASS_ACTIVE);
parcelHelpers.export(exports, "CLASS_ARROW", ()=>CLASS_ARROW);
parcelHelpers.export(exports, "CLASS_ARROWS", ()=>CLASS_ARROWS);
parcelHelpers.export(exports, "CLASS_ARROW_NEXT", ()=>CLASS_ARROW_NEXT);
parcelHelpers.export(exports, "CLASS_ARROW_PREV", ()=>CLASS_ARROW_PREV);
parcelHelpers.export(exports, "CLASS_CLONE", ()=>CLASS_CLONE);
parcelHelpers.export(exports, "CLASS_CONTAINER", ()=>CLASS_CONTAINER);
parcelHelpers.export(exports, "CLASS_FOCUS_IN", ()=>CLASS_FOCUS_IN);
parcelHelpers.export(exports, "CLASS_INITIALIZED", ()=>CLASS_INITIALIZED);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST);
parcelHelpers.export(exports, "CLASS_LOADING", ()=>CLASS_LOADING);
parcelHelpers.export(exports, "CLASS_NEXT", ()=>CLASS_NEXT);
parcelHelpers.export(exports, "CLASS_OVERFLOW", ()=>CLASS_OVERFLOW);
parcelHelpers.export(exports, "CLASS_PAGINATION", ()=>CLASS_PAGINATION);
parcelHelpers.export(exports, "CLASS_PAGINATION_PAGE", ()=>CLASS_PAGINATION_PAGE);
parcelHelpers.export(exports, "CLASS_PREV", ()=>CLASS_PREV);
parcelHelpers.export(exports, "CLASS_PROGRESS", ()=>CLASS_PROGRESS);
parcelHelpers.export(exports, "CLASS_PROGRESS_BAR", ()=>CLASS_PROGRESS_BAR);
parcelHelpers.export(exports, "CLASS_ROOT", ()=>CLASS_ROOT);
parcelHelpers.export(exports, "CLASS_SLIDE", ()=>CLASS_SLIDE);
parcelHelpers.export(exports, "CLASS_SPINNER", ()=>CLASS_SPINNER);
parcelHelpers.export(exports, "CLASS_SR", ()=>CLASS_SR);
parcelHelpers.export(exports, "CLASS_TOGGLE", ()=>CLASS_TOGGLE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PAUSE", ()=>CLASS_TOGGLE_PAUSE);
parcelHelpers.export(exports, "CLASS_TOGGLE_PLAY", ()=>CLASS_TOGGLE_PLAY);
parcelHelpers.export(exports, "CLASS_TRACK", ()=>CLASS_TRACK);
parcelHelpers.export(exports, "CLASS_VISIBLE", ()=>CLASS_VISIBLE);
parcelHelpers.export(exports, "DEFAULTS", ()=>DEFAULTS);
parcelHelpers.export(exports, "EVENT_ACTIVE", ()=>EVENT_ACTIVE);
parcelHelpers.export(exports, "EVENT_ARROWS_MOUNTED", ()=>EVENT_ARROWS_MOUNTED);
parcelHelpers.export(exports, "EVENT_ARROWS_UPDATED", ()=>EVENT_ARROWS_UPDATED);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PAUSE", ()=>EVENT_AUTOPLAY_PAUSE);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAY", ()=>EVENT_AUTOPLAY_PLAY);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAYING", ()=>EVENT_AUTOPLAY_PLAYING);
parcelHelpers.export(exports, "EVENT_CLICK", ()=>EVENT_CLICK);
parcelHelpers.export(exports, "EVENT_DESTROY", ()=>EVENT_DESTROY);
parcelHelpers.export(exports, "EVENT_DRAG", ()=>EVENT_DRAG);
parcelHelpers.export(exports, "EVENT_DRAGGED", ()=>EVENT_DRAGGED);
parcelHelpers.export(exports, "EVENT_DRAGGING", ()=>EVENT_DRAGGING);
parcelHelpers.export(exports, "EVENT_END_INDEX_CHANGED", ()=>EVENT_END_INDEX_CHANGED);
parcelHelpers.export(exports, "EVENT_HIDDEN", ()=>EVENT_HIDDEN);
parcelHelpers.export(exports, "EVENT_INACTIVE", ()=>EVENT_INACTIVE);
parcelHelpers.export(exports, "EVENT_LAZYLOAD_LOADED", ()=>EVENT_LAZYLOAD_LOADED);
parcelHelpers.export(exports, "EVENT_MOUNTED", ()=>EVENT_MOUNTED);
parcelHelpers.export(exports, "EVENT_MOVE", ()=>EVENT_MOVE);
parcelHelpers.export(exports, "EVENT_MOVED", ()=>EVENT_MOVED);
parcelHelpers.export(exports, "EVENT_NAVIGATION_MOUNTED", ()=>EVENT_NAVIGATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_OVERFLOW", ()=>EVENT_OVERFLOW);
parcelHelpers.export(exports, "EVENT_PAGINATION_MOUNTED", ()=>EVENT_PAGINATION_MOUNTED);
parcelHelpers.export(exports, "EVENT_PAGINATION_UPDATED", ()=>EVENT_PAGINATION_UPDATED);
parcelHelpers.export(exports, "EVENT_READY", ()=>EVENT_READY);
parcelHelpers.export(exports, "EVENT_REFRESH", ()=>EVENT_REFRESH);
parcelHelpers.export(exports, "EVENT_RESIZE", ()=>EVENT_RESIZE);
parcelHelpers.export(exports, "EVENT_RESIZED", ()=>EVENT_RESIZED);
parcelHelpers.export(exports, "EVENT_SCROLL", ()=>EVENT_SCROLL);
parcelHelpers.export(exports, "EVENT_SCROLLED", ()=>EVENT_SCROLLED);
parcelHelpers.export(exports, "EVENT_SHIFTED", ()=>EVENT_SHIFTED);
parcelHelpers.export(exports, "EVENT_SLIDE_KEYDOWN", ()=>EVENT_SLIDE_KEYDOWN);
parcelHelpers.export(exports, "EVENT_UPDATED", ()=>EVENT_UPDATED);
parcelHelpers.export(exports, "EVENT_VISIBLE", ()=>EVENT_VISIBLE);
parcelHelpers.export(exports, "EventBinder", ()=>EventBinder);
parcelHelpers.export(exports, "EventInterface", ()=>EventInterface);
parcelHelpers.export(exports, "FADE", ()=>FADE);
parcelHelpers.export(exports, "LOOP", ()=>LOOP);
parcelHelpers.export(exports, "LTR", ()=>LTR);
parcelHelpers.export(exports, "RTL", ()=>RTL);
parcelHelpers.export(exports, "RequestInterval", ()=>RequestInterval);
parcelHelpers.export(exports, "SLIDE", ()=>SLIDE);
parcelHelpers.export(exports, "STATUS_CLASSES", ()=>STATUS_CLASSES);
parcelHelpers.export(exports, "Splide", ()=>Splide);
parcelHelpers.export(exports, "SplideRenderer", ()=>SplideRenderer);
parcelHelpers.export(exports, "State", ()=>State);
parcelHelpers.export(exports, "TTB", ()=>TTB);
parcelHelpers.export(exports, "Throttle", ()=>Throttle);
parcelHelpers.export(exports, "default", ()=>Splide);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
    CREATED: CREATED,
    MOUNTED: MOUNTED,
    IDLE: IDLE,
    MOVING: MOVING,
    SCROLLING: SCROLLING,
    DRAGGING: DRAGGING,
    DESTROYED: DESTROYED
};
function empty(array) {
    array.length = 0;
}
function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
    return func.bind.apply(func, [
        null
    ].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop() {};
function raf(func) {
    return requestAnimationFrame(func);
}
function typeOf(type, subject) {
    return typeof subject === type;
}
function isObject(subject) {
    return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
    return subject === null;
}
function isHTMLElement(subject) {
    try {
        return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e) {
        return false;
    }
}
function toArray(value) {
    return isArray(value) ? value : [
        value
    ];
}
function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
}
function includes(array, value) {
    return array.indexOf(value) > -1;
}
function push(array, items) {
    array.push.apply(array, toArray(items));
    return array;
}
function toggleClass(elm, classes, add) {
    if (elm) forEach(classes, function(name) {
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children) {
    forEach(children, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
    forEach(nodes, function(node) {
        var parent = (ref || node).parentNode;
        if (parent) parent.insertBefore(node, ref);
    });
}
function matches(elm, selector) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
    var children2 = parent ? slice(parent.children) : [];
    return selector ? children2.filter(function(child) {
        return matches(child, selector);
    }) : children2;
}
function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn(object, iteratee, right) {
    if (object) (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
    });
    return object;
}
function assign(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            object[key] = source[key];
        });
    });
    return object;
}
function merge(object) {
    slice(arguments, 1).forEach(function(source) {
        forOwn(source, function(value, key) {
            if (isArray(value)) object[key] = value.slice();
            else if (isObject(value)) object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
            else object[key] = value;
        });
    });
    return object;
}
function omit(object, keys) {
    forEach(keys || ownKeys(object), function(key) {
        delete object[key];
    });
}
function removeAttribute(elms, attrs) {
    forEach(elms, function(elm) {
        forEach(attrs, function(attr) {
            elm && elm.removeAttribute(attr);
        });
    });
}
function setAttribute(elms, attrs, value) {
    if (isObject(attrs)) forOwn(attrs, function(value2, name) {
        setAttribute(elms, name, value2);
    });
    else forEach(elms, function(elm) {
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
}
function create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    parent && append(parent, elm);
    return elm;
}
function style(elm, prop, value) {
    if (isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!isNull(value)) elm.style[prop] = "" + value;
}
function display(elm, display2) {
    style(elm, "display", display2);
}
function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
        preventScroll: true
    });
}
function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function rect(target) {
    return target.getBoundingClientRect();
}
function remove(nodes) {
    forEach(nodes, function(node) {
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}
function query(parent, selector) {
    return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
    return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
}
function timeOf(e) {
    return e.timeStamp;
}
function unit(value) {
    return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
    if (!condition) throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return min(max(minimum, number), maximum);
}
function sign(x) {
    return +(x > 0) - +(x < 0);
}
function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function format(string, replacements) {
    forEach(replacements, function(replacement) {
        string = string.replace("%s", "" + replacement);
    });
    return string;
}
function pad(number) {
    return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
    return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, function(target, event, namespace) {
            var isEventTarget = "addEventListener" in target;
            var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
            isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
            listeners.push([
                target,
                event,
                namespace,
                callback,
                remover
            ]);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, function(target, event, namespace) {
            listeners = listeners.filter(function(listener) {
                if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
                    listener[4]();
                    return false;
                }
                return true;
            });
        });
    }
    function dispatch(target, type, detail) {
        var e;
        var bubbles = true;
        if (typeof CustomEvent === "function") e = new CustomEvent(type, {
            bubbles: bubbles,
            detail: detail
        });
        else {
            e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, bubbles, false, detail);
        }
        target.dispatchEvent(e);
        return e;
    }
    function forEachEvent(targets, events, iteratee) {
        forEach(targets, function(target) {
            target && forEach(events, function(events2) {
                events2.split(" ").forEach(function(eventNS) {
                    var fragment = eventNS.split(".");
                    iteratee(target, fragment[0], fragment[1]);
                });
            });
        });
    }
    function destroy() {
        listeners.forEach(function(data) {
            data[4]();
        });
        empty(listeners);
    }
    return {
        bind: bind,
        unbind: unbind,
        dispatch: dispatch,
        destroy: destroy
    };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
        binder.bind(bus, toArray(events).join(" "), function(e) {
            callback.apply(callback, isArray(e.detail) ? e.detail : []);
        });
    }
    function emit(event) {
        binder.dispatch(bus, event, slice(arguments, 1));
    }
    if (Splide2) Splide2.event.on(EVENT_DESTROY, binder.destroy);
    return assign(binder, {
        bus: bus,
        on: on,
        off: apply(binder.unbind, bus),
        emit: emit
    });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
        if (!paused) {
            rate = interval ? min((now() - startTime) / interval, 1) : 1;
            onUpdate && onUpdate(rate);
            if (rate >= 1) {
                onInterval();
                startTime = now();
                if (limit && ++count >= limit) return pause();
            }
            id = raf(update);
        }
    }
    function start(resume) {
        resume || cancel();
        startTime = now() - (resume ? rate * interval : 0);
        paused = false;
        id = raf(update);
    }
    function pause() {
        paused = true;
    }
    function rewind() {
        startTime = now();
        rate = 0;
        if (onUpdate) onUpdate(rate);
    }
    function cancel() {
        id && cancelAnimationFrame(id);
        rate = 0;
        id = 0;
        paused = true;
    }
    function set(time) {
        interval = time;
    }
    function isPaused() {
        return paused;
    }
    return {
        start: start,
        rewind: rewind,
        pause: pause,
        cancel: cancel,
        set: set,
        isPaused: isPaused
    };
}
function State(initialState) {
    var state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return includes(toArray(states), state);
    }
    return {
        set: set,
        is: is
    };
}
function Throttle(func, duration) {
    var interval = RequestInterval(duration || 0, func, null, 1);
    return function() {
        interval.isPaused() && interval.start();
    };
}
function Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = EventBinder();
    var queries = [];
    function setup() {
        var isMin = options.mediaQuery === "min";
        ownKeys(breakpoints).sort(function(n, m) {
            return isMin ? +n - +m : +m - +n;
        }).forEach(function(key) {
            register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
        });
        register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
        update();
    }
    function destroy(completely) {
        if (completely) binder.destroy();
    }
    function register(options2, query) {
        var queryList = matchMedia(query);
        binder.bind(queryList, "change", update);
        queries.push([
            options2,
            queryList
        ]);
    }
    function update() {
        var destroyed = state.is(DESTROYED);
        var direction = options.direction;
        var merged = queries.reduce(function(merged2, entry) {
            return merge(merged2, entry[1].matches ? entry[0] : {});
        }, {});
        omit(options);
        set(merged);
        if (options.destroy) Splide2.destroy(options.destroy === "completely");
        else if (destroyed) {
            destroy(true);
            Splide2.mount();
        } else direction !== options.direction && Splide2.refresh();
    }
    function reduce(enable) {
        if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
    function set(opts, base, notify) {
        merge(options, opts);
        base && merge(Object.getPrototypeOf(options), opts);
        if (notify || !state.is(CREATED)) Splide2.emit(EVENT_UPDATED, options);
    }
    return {
        setup: setup,
        destroy: destroy,
        reduce: reduce,
        set: set
    };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
    width: [
        "height"
    ],
    left: [
        "top",
        "right"
    ],
    right: [
        "bottom",
        "left"
    ],
    x: [
        "y"
    ],
    X: [
        "Y"
    ],
    Y: [
        "X"
    ],
    ArrowLeft: [
        ARROW_UP,
        ARROW_RIGHT
    ],
    ArrowRight: [
        ARROW_DOWN,
        ARROW_LEFT
    ]
};
function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
        direction = direction || options.direction;
        var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
        return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
            var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
            return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
        });
    }
    function orient(value) {
        return value * (options.direction === RTL ? 1 : -1);
    }
    return {
        resolve: resolve,
        orient: orient
    };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [
    ROLE,
    TAB_INDEX,
    DISABLED,
    ARIA_CONTROLS,
    ARIA_CURRENT,
    ARIA_LABEL,
    ARIA_LABELLEDBY,
    ARIA_HIDDEN,
    ARIA_ORIENTATION,
    ARIA_ROLEDESCRIPTION
];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [
    CLASS_ACTIVE,
    CLASS_VISIBLE,
    CLASS_PREV,
    CLASS_NEXT,
    CLASS_LOADING,
    CLASS_FOCUS_IN,
    CLASS_OVERFLOW
];
var CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
};
function closest(from, selector) {
    if (isFunction(from.closest)) return from.closest(selector);
    var elm = from;
    while(elm && elm.nodeType === 1){
        if (matches(elm, selector)) break;
        elm = elm.parentElement;
    }
    return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
    var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
        collect();
        init();
        update();
    }
    function mount() {
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, setup);
        on(EVENT_UPDATED, update);
        bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
            isUsingKey = e.type === "keydown";
        }, {
            capture: true
        });
        bind(root, "focusin", function() {
            toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
        });
    }
    function destroy(completely) {
        var attrs = ALL_ATTRIBUTES.concat("style");
        empty(slides);
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        removeAttribute([
            track,
            list
        ], attrs);
        removeAttribute(root, completely ? attrs : [
            "style",
            ARIA_ROLEDESCRIPTION
        ]);
    }
    function update() {
        removeClass(root, rootClasses);
        removeClass(track, trackClasses);
        rootClasses = getClasses(CLASS_ROOT);
        trackClasses = getClasses(CLASS_TRACK);
        addClass(root, rootClasses);
        addClass(track, trackClasses);
        setAttribute(root, ARIA_LABEL, options.label);
        setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
        track = find("." + CLASS_TRACK);
        list = child(track, "." + CLASS_LIST);
        assert(track && list, "A track/list element is missing.");
        push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
        forOwn({
            arrows: CLASS_ARROWS,
            pagination: CLASS_PAGINATION,
            prev: CLASS_ARROW_PREV,
            next: CLASS_ARROW_NEXT,
            bar: CLASS_PROGRESS_BAR,
            toggle: CLASS_TOGGLE
        }, function(className, key) {
            elements[key] = find("." + className);
        });
        assign(elements, {
            root: root,
            track: track,
            list: list,
            slides: slides
        });
    }
    function init() {
        var id = root.id || uniqueId(PROJECT_CODE);
        var role = options.role;
        root.id = id;
        track.id = track.id || id + "-track";
        list.id = list.id || id + "-list";
        if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) setAttribute(root, ROLE, role);
        setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
        setAttribute(list, ROLE, "presentation");
    }
    function find(selector) {
        var elm = query(root, selector);
        return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
        return [
            base + "--" + options.type,
            base + "--" + options.direction,
            options.drag && base + "--draggable",
            options.isNavigation && base + "--nav",
            base === CLASS_ROOT && CLASS_ACTIVE
        ];
    }
    return assign(elements, {
        setup: setup,
        mount: mount,
        destroy: destroy
    });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = getAttribute(slide, "style");
    var label = getAttribute(slide, ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = child(slide, "." + CLASS_CONTAINER);
    var destroyed;
    function mount() {
        if (!isClone) {
            slide.id = root.id + "-slide" + pad(index + 1);
            setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
            setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
            setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [
                index + 1,
                Splide2.length
            ]));
        }
        listen();
    }
    function listen() {
        bind(slide, "click", apply(emit, EVENT_CLICK, self));
        bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
        on([
            EVENT_MOVED,
            EVENT_SHIFTED,
            EVENT_SCROLLED
        ], update);
        on(EVENT_NAVIGATION_MOUNTED, initNavigation);
        if (updateOnMove) on(EVENT_MOVE, onMove);
    }
    function destroy() {
        destroyed = true;
        event.destroy();
        removeClass(slide, STATUS_CLASSES);
        removeAttribute(slide, ALL_ATTRIBUTES);
        setAttribute(slide, "style", styles);
        setAttribute(slide, ARIA_LABEL, label || "");
    }
    function initNavigation() {
        var controls = Splide2.splides.map(function(target) {
            var Slide2 = target.splide.Components.Slides.getAt(index);
            return Slide2 ? Slide2.slide.id : "";
        }).join(" ");
        setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
        setAttribute(slide, ARIA_CONTROLS, controls);
        setAttribute(slide, ROLE, slideFocus ? "button" : "");
        slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
        if (!destroyed) update();
    }
    function update() {
        if (!destroyed) {
            var curr = Splide2.index;
            updateActivity();
            updateVisibility();
            toggleClass(slide, CLASS_PREV, index === curr - 1);
            toggleClass(slide, CLASS_NEXT, index === curr + 1);
        }
    }
    function updateActivity() {
        var active = isActive();
        if (active !== hasClass(slide, CLASS_ACTIVE)) {
            toggleClass(slide, CLASS_ACTIVE, active);
            setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
            emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
        }
    }
    function updateVisibility() {
        var visible = isVisible();
        var hidden = !visible && (!isActive() || isClone);
        if (!Splide2.state.is([
            MOVING,
            SCROLLING
        ])) setAttribute(slide, ARIA_HIDDEN, hidden || "");
        setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
        if (slideFocus) setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
        if (visible !== hasClass(slide, CLASS_VISIBLE)) {
            toggleClass(slide, CLASS_VISIBLE, visible);
            emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
        }
        if (!visible && document.activeElement === slide) {
            var Slide2 = Components.Slides.getAt(Splide2.index);
            Slide2 && focus(Slide2.slide);
        }
    }
    function style$1(prop, value, useContainer) {
        style(useContainer && container || slide, prop, value);
    }
    function isActive() {
        var curr = Splide2.index;
        return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
        if (Splide2.is(FADE)) return isActive();
        var trackRect = rect(Components.Elements.track);
        var slideRect = rect(slide);
        var left = resolve("left", true);
        var right = resolve("right", true);
        return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
        var diff = abs(from - index);
        if (!isClone && (options.rewind || Splide2.is(LOOP))) diff = min(diff, Splide2.length - diff);
        return diff <= distance;
    }
    var self = {
        index: index,
        slideIndex: slideIndex,
        slide: slide,
        container: container,
        isClone: isClone,
        mount: mount,
        destroy: destroy,
        update: update,
        style: style$1,
        isWithin: isWithin
    };
    return self;
}
function Slides(Splide2, Components2, options) {
    var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
        init();
        on(EVENT_REFRESH, destroy);
        on(EVENT_REFRESH, init);
    }
    function init() {
        slides.forEach(function(slide, index) {
            register(slide, index, -1);
        });
    }
    function destroy() {
        forEach$1(function(Slide2) {
            Slide2.destroy();
        });
        empty(Slides2);
    }
    function update() {
        forEach$1(function(Slide2) {
            Slide2.update();
        });
    }
    function register(slide, index, slideIndex) {
        var object = Slide$1(Splide2, index, slideIndex, slide);
        object.mount();
        Slides2.push(object);
        Slides2.sort(function(Slide1, Slide2) {
            return Slide1.index - Slide2.index;
        });
    }
    function get(excludeClones) {
        return excludeClones ? filter(function(Slide2) {
            return !Slide2.isClone;
        }) : Slides2;
    }
    function getIn(page) {
        var Controller = Components2.Controller;
        var index = Controller.toIndex(page);
        var max = Controller.hasFocus() ? 1 : options.perPage;
        return filter(function(Slide2) {
            return between(Slide2.index, index, index + max - 1);
        });
    }
    function getAt(index) {
        return filter(index)[0];
    }
    function add(items, index) {
        forEach(items, function(slide) {
            if (isString(slide)) slide = parseHtml(slide);
            if (isHTMLElement(slide)) {
                var ref = slides[index];
                ref ? before(slide, ref) : append(list, slide);
                addClass(slide, options.classes.slide);
                observeImages(slide, apply(emit, EVENT_RESIZE));
            }
        });
        emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
        remove(filter(matcher).map(function(Slide2) {
            return Slide2.slide;
        }));
        emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
        get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
        return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
            return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
        });
    }
    function style(prop, value, useContainer) {
        forEach$1(function(Slide2) {
            Slide2.style(prop, value, useContainer);
        });
    }
    function observeImages(elm, callback) {
        var images = queryAll(elm, "img");
        var length = images.length;
        if (length) images.forEach(function(img) {
            bind(img, "load error", function() {
                if (!--length) callback();
            });
        });
        else callback();
    }
    function getLength(excludeClones) {
        return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
        return Slides2.length > options.perPage;
    }
    return {
        mount: mount,
        destroy: destroy,
        update: update,
        register: register,
        get: get,
        getIn: getIn,
        getAt: getAt,
        add: add,
        remove: remove$1,
        forEach: forEach$1,
        filter: filter,
        style: style,
        getLength: getLength,
        isEnough: isEnough
    };
}
function Layout(Splide2, Components2, options) {
    var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides.getAt, styleSlides = Slides.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
        init();
        bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init);
        on(EVENT_RESIZE, resize);
    }
    function init() {
        vertical = options.direction === TTB;
        style(root, "maxWidth", unit(options.width));
        style(track, resolve("paddingLeft"), cssPadding(false));
        style(track, resolve("paddingRight"), cssPadding(true));
        resize(true);
    }
    function resize(force) {
        var newRect = rect(root);
        if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
            style(track, "height", cssTrackHeight());
            styleSlides(resolve("marginRight"), unit(options.gap));
            styleSlides("width", cssSlideWidth());
            styleSlides("height", cssSlideHeight(), true);
            rootRect = newRect;
            emit(EVENT_RESIZED);
            if (overflow !== (overflow = isOverflow())) {
                toggleClass(root, CLASS_OVERFLOW, overflow);
                emit(EVENT_OVERFLOW, overflow);
            }
        }
    }
    function cssPadding(right) {
        var padding = options.padding;
        var prop = resolve(right ? "right" : "left");
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
        var height = "";
        if (vertical) {
            height = cssHeight();
            assert(height, "height or heightRatio is missing.");
            height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
        }
        return height;
    }
    function cssHeight() {
        return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
        return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
        return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
        return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
        var Slide = getAt(index || 0);
        return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
        var Slide = getAt(index);
        if (Slide) {
            var right = rect(Slide.slide)[resolve("right")];
            var left = rect(list)[resolve("left")];
            return abs(right - left) + (withoutGap ? 0 : getGap());
        }
        return 0;
    }
    function sliderSize(withoutGap) {
        return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
        var Slide = getAt(0);
        return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
        return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
        return Splide2.is(FADE) || sliderSize(true) > listSize();
    }
    return {
        mount: mount,
        resize: resize,
        listSize: listSize,
        slideSize: slideSize,
        sliderSize: sliderSize,
        totalSize: totalSize,
        getPadding: getPadding,
        isOverflow: isOverflow
    };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on;
    var Elements = Components2.Elements, Slides = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
        on(EVENT_REFRESH, remount);
        on([
            EVENT_UPDATED,
            EVENT_RESIZE
        ], observe);
        if (cloneCount = computeCloneCount()) {
            generate(cloneCount);
            Components2.Layout.resize(true);
        }
    }
    function remount() {
        destroy();
        mount();
    }
    function destroy() {
        remove(clones);
        empty(clones);
        event.destroy();
    }
    function observe() {
        var count = computeCloneCount();
        if (cloneCount !== count) {
            if (cloneCount < count || !count) event.emit(EVENT_REFRESH);
        }
    }
    function generate(count) {
        var slides = Slides.get().slice();
        var length = slides.length;
        if (length) {
            while(slides.length < count)push(slides, slides);
            push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide, index) {
                var isHead = index < count;
                var clone = cloneDeep(Slide.slide, index);
                isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
                push(clones, clone);
                Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
            });
        }
    }
    function cloneDeep(elm, index) {
        var clone = elm.cloneNode(true);
        addClass(clone, options.classes.clone);
        clone.id = Splide2.root.id + "-clone" + pad(index + 1);
        return clone;
    }
    function computeCloneCount() {
        var clones2 = options.clones;
        if (!Splide2.is(LOOP)) clones2 = 0;
        else if (isUndefined(clones2)) {
            var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
            var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
            clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
        }
        return clones2;
    }
    return {
        mount: mount,
        destroy: destroy
    };
}
function Move(Splide2, Components2, options) {
    var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
        Transition = Components2.Transition;
        on([
            EVENT_MOUNTED,
            EVENT_RESIZED,
            EVENT_UPDATED,
            EVENT_REFRESH
        ], reposition);
    }
    function reposition() {
        if (!Components2.Controller.isBusy()) {
            Components2.Scroll.cancel();
            jump(Splide2.index);
            Components2.Slides.update();
        }
    }
    function move(dest, index, prev, callback) {
        if (dest !== index && canShift(dest > prev)) {
            cancel();
            translate(shift(getPosition(), dest > prev), true);
        }
        set(MOVING);
        emit(EVENT_MOVE, index, prev, dest);
        Transition.start(index, function() {
            set(IDLE);
            emit(EVENT_MOVED, index, prev, dest);
            callback && callback();
        });
    }
    function jump(index) {
        translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
        if (!Splide2.is(FADE)) {
            var destination = preventLoop ? position : loop(position);
            style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
            position !== destination && emit(EVENT_SHIFTED);
        }
    }
    function loop(position) {
        if (Splide2.is(LOOP)) {
            var index = toIndex(position);
            var exceededMax = index > Components2.Controller.getEnd();
            var exceededMin = index < 0;
            if (exceededMin || exceededMax) position = shift(position, exceededMax);
        }
        return position;
    }
    function shift(position, backwards) {
        var excess = position - getLimit(backwards);
        var size = sliderSize();
        position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
        return position;
    }
    function cancel() {
        translate(getPosition(), true);
        Transition.cancel();
    }
    function toIndex(position) {
        var Slides = Components2.Slides.get();
        var index = 0;
        var minDistance = Infinity;
        for(var i = 0; i < Slides.length; i++){
            var slideIndex = Slides[i].index;
            var distance = abs(toPosition(slideIndex, true) - position);
            if (distance <= minDistance) {
                minDistance = distance;
                index = slideIndex;
            } else break;
        }
        return index;
    }
    function toPosition(index, trimming) {
        var position = orient(totalSize(index - 1) - offset(index));
        return trimming ? trim(position) : position;
    }
    function getPosition() {
        var left = resolve("left");
        return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
        if (options.trimSpace && Splide2.is(SLIDE)) position = clamp(position, 0, orient(sliderSize(true) - listSize()));
        return position;
    }
    function offset(index) {
        var focus = options.focus;
        return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
    }
    function getLimit(max) {
        return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
        var shifted = orient(shift(getPosition(), backwards));
        return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
    }
    function exceededLimit(max, position) {
        position = isUndefined(position) ? getPosition() : position;
        var exceededMin = max !== true && orient(position) < orient(getLimit(false));
        var exceededMax = max !== false && orient(position) > orient(getLimit(true));
        return exceededMin || exceededMax;
    }
    return {
        mount: mount,
        move: move,
        jump: jump,
        translate: translate,
        shift: shift,
        cancel: cancel,
        toIndex: toIndex,
        toPosition: toPosition,
        getPosition: getPosition,
        getLimit: getLimit,
        exceededLimit: exceededLimit,
        reposition: reposition
    };
}
function Controller(Splide2, Components2, options) {
    var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, toPosition = Move.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is(LOOP);
    var isSlide = Splide2.is(SLIDE);
    var getNext = apply(getAdjacent, false);
    var getPrev = apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
        init();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], init);
        on(EVENT_RESIZED, onResized);
    }
    function init() {
        slideCount = getLength(true);
        perMove = options.perMove;
        perPage = options.perPage;
        endIndex = getEnd();
        var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
        if (index !== currIndex) {
            currIndex = index;
            Move.reposition();
        }
    }
    function onResized() {
        if (endIndex !== getEnd()) emit(EVENT_END_INDEX_CHANGED);
    }
    function go(control, allowSameIndex, callback) {
        if (!isBusy()) {
            var dest = parse(control);
            var index = loop(dest);
            if (index > -1 && (allowSameIndex || index !== currIndex)) {
                setIndex(index);
                Move.move(dest, index, prevIndex, callback);
            }
        }
    }
    function scroll(destination, duration, snap, callback) {
        Components2.Scroll.scroll(destination, duration, snap, function() {
            var index = loop(Move.toIndex(getPosition()));
            setIndex(omitEnd ? min(index, endIndex) : index);
            callback && callback();
        });
    }
    function parse(control) {
        var index = currIndex;
        if (isString(control)) {
            var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
            if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
            else if (indicator === ">") index = number ? toIndex(+number) : getNext(true);
            else if (indicator === "<") index = getPrev(true);
        } else index = isLoop ? control : clamp(control, 0, endIndex);
        return index;
    }
    function getAdjacent(prev, destination) {
        var number = perMove || (hasFocus() ? 1 : perPage);
        var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
        if (dest === -1 && isSlide) {
            if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : endIndex;
        }
        return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
        if (isEnough() || hasFocus()) {
            var index = computeMovableDestIndex(dest);
            if (index !== dest) {
                from = dest;
                dest = index;
                snapPage = false;
            }
            if (dest < 0 || dest > endIndex) {
                if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) dest = toIndex(toPage(dest));
                else {
                    if (isLoop) dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
                    else if (options.rewind) dest = dest < 0 ? endIndex : 0;
                    else dest = -1;
                }
            } else if (snapPage && dest !== from) dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        } else dest = -1;
        return dest;
    }
    function computeMovableDestIndex(dest) {
        if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
            var position = getPosition();
            while(position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind))dest < currIndex ? --dest : ++dest;
        }
        return dest;
    }
    function loop(index) {
        return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
        var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
        while(omitEnd && end-- > 0)if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
            end++;
            break;
        }
        return clamp(end, 0, slideCount - 1);
    }
    function toIndex(page) {
        return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
        return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
        var closest = Move.toIndex(destination);
        return isSlide ? clamp(closest, 0, endIndex) : closest;
    }
    function setIndex(index) {
        if (index !== currIndex) {
            prevIndex = currIndex;
            currIndex = index;
        }
    }
    function getIndex(prev) {
        return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
        return !isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
        return Splide2.state.is([
            MOVING,
            SCROLLING
        ]) && !!options.waitForTransition;
    }
    return {
        mount: mount,
        go: go,
        scroll: scroll,
        getNext: getNext,
        getPrev: getPrev,
        getAdjacent: getAdjacent,
        getEnd: getEnd,
        setIndex: setIndex,
        getIndex: getIndex,
        toIndex: toIndex,
        toPage: toPage,
        toDest: toDest,
        hasFocus: hasFocus,
        isBusy: isBusy
    };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements = Components2.Elements, Controller = Components2.Controller;
    var placeholder = Elements.arrows, track = Elements.track;
    var wrapper = placeholder;
    var prev = Elements.prev;
    var next = Elements.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
        init();
        on(EVENT_UPDATED, remount);
    }
    function remount() {
        destroy();
        mount();
    }
    function init() {
        var enabled = options.arrows;
        if (enabled && !(prev && next)) createArrows();
        if (prev && next) {
            assign(arrows, {
                prev: prev,
                next: next
            });
            display(wrapper, enabled ? "" : "none");
            addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
            if (enabled) {
                listen();
                update();
                setAttribute([
                    prev,
                    next
                ], ARIA_CONTROLS, track.id);
                emit(EVENT_ARROWS_MOUNTED, prev, next);
            }
        }
    }
    function destroy() {
        event.destroy();
        removeClass(wrapper, wrapperClasses);
        if (created) {
            remove(placeholder ? [
                prev,
                next
            ] : wrapper);
            prev = next = null;
        } else removeAttribute([
            prev,
            next
        ], ALL_ATTRIBUTES);
    }
    function listen() {
        on([
            EVENT_MOUNTED,
            EVENT_MOVED,
            EVENT_REFRESH,
            EVENT_SCROLLED,
            EVENT_END_INDEX_CHANGED
        ], update);
        bind(next, "click", apply(go, ">"));
        bind(prev, "click", apply(go, "<"));
    }
    function go(control) {
        Controller.go(control, true);
    }
    function createArrows() {
        wrapper = placeholder || create("div", classes.arrows);
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        append(wrapper, [
            prev,
            next
        ]);
        !placeholder && before(wrapper, track);
    }
    function createArrow(prev2) {
        var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
        return parseHtml(arrow);
    }
    function update() {
        if (prev && next) {
            var index = Splide2.index;
            var prevIndex = Controller.getPrev();
            var nextIndex = Controller.getNext();
            var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
            var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
            prev.disabled = prevIndex < 0;
            next.disabled = nextIndex < 0;
            setAttribute(prev, ARIA_LABEL, prevLabel);
            setAttribute(next, ARIA_LABEL, nextLabel);
            emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
        }
    }
    return {
        arrows: arrows,
        mount: mount,
        destroy: destroy,
        update: update
    };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
        if (autoplay) {
            listen();
            toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
            stopped || play();
            update();
        }
    }
    function listen() {
        if (options.pauseOnHover) bind(root, "mouseenter mouseleave", function(e) {
            hovered = e.type === "mouseenter";
            autoToggle();
        });
        if (options.pauseOnFocus) bind(root, "focusin focusout", function(e) {
            focused = e.type === "focusin";
            autoToggle();
        });
        if (toggle) bind(toggle, "click", function() {
            stopped ? play() : pause(true);
        });
        on([
            EVENT_MOVE,
            EVENT_SCROLL,
            EVENT_REFRESH
        ], interval.rewind);
        on(EVENT_MOVE, onMove);
    }
    function play() {
        if (isPaused() && Components2.Slides.isEnough()) {
            interval.start(!options.resetProgress);
            focused = hovered = stopped = false;
            update();
            emit(EVENT_AUTOPLAY_PLAY);
        }
    }
    function pause(stop) {
        if (stop === void 0) stop = true;
        stopped = !!stop;
        update();
        if (!isPaused()) {
            interval.pause();
            emit(EVENT_AUTOPLAY_PAUSE);
        }
    }
    function autoToggle() {
        if (!stopped) hovered || focused ? pause(false) : play();
    }
    function update() {
        if (toggle) {
            toggleClass(toggle, CLASS_ACTIVE, !stopped);
            setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
        }
    }
    function onAnimationFrame(rate) {
        var bar = Elements.bar;
        bar && style(bar, "width", rate * 100 + "%");
        emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
        var Slide = Components2.Slides.getAt(index);
        interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
        mount: mount,
        destroy: interval.cancel,
        play: play,
        pause: pause,
        isPaused: isPaused
    };
}
function Cover(Splide2, Components2, options) {
    var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
        if (options.cover) {
            on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
            on([
                EVENT_MOUNTED,
                EVENT_UPDATED,
                EVENT_REFRESH
            ], apply(cover, true));
        }
    }
    function cover(cover2) {
        Components2.Slides.forEach(function(Slide) {
            var img = child(Slide.container || Slide.slide, "img");
            if (img && img.src) toggle(cover2, img, Slide);
        });
    }
    function toggle(cover2, img, Slide) {
        Slide.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
        display(img, cover2 ? "none" : "");
    }
    return {
        mount: mount,
        destroy: apply(cover, false)
    };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
    var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set = Splide2.state.set;
    var Move = Components2.Move;
    var getPosition = Move.getPosition, getLimit = Move.getLimit, exceededLimit = Move.exceededLimit, translate = Move.translate;
    var isSlide = Splide2.is(SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
        on(EVENT_MOVE, clear);
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], cancel);
    }
    function scroll(destination, duration, snap, onScrolled, noConstrain) {
        var from = getPosition();
        clear();
        if (snap && (!isSlide || !exceededLimit())) {
            var size = Components2.Layout.sliderSize();
            var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
            destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
        }
        var noDistance = approximatelyEqual(from, destination, 1);
        friction = 1;
        duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
        callback = onScrolled;
        interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
        set(SCROLLING);
        emit(EVENT_SCROLL);
        interval.start();
    }
    function onEnd() {
        set(IDLE);
        callback && callback();
        emit(EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
        var position = getPosition();
        var target = from + (to - from) * easing(rate);
        var diff = (target - position) * friction;
        translate(position + diff);
        if (isSlide && !noConstrain && exceededLimit()) {
            friction *= FRICTION_FACTOR;
            if (abs(diff) < BOUNCE_DIFF_THRESHOLD) scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
        }
    }
    function clear() {
        if (interval) interval.cancel();
    }
    function cancel() {
        if (interval && !interval.isPaused()) {
            clear();
            onEnd();
        }
    }
    function easing(t) {
        var easingFunc = options.easingFunc;
        return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
        mount: mount,
        destroy: clear,
        scroll: scroll,
        cancel: cancel
    };
}
var SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
};
function Drag(Splide2, Components2, options) {
    var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move = Components2.Move, Scroll = Components2.Scroll, Controller = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition = Move.getPosition, exceededLimit = Move.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
        bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
        bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
        bind(track, "click", onClick, {
            capture: true
        });
        bind(track, "dragstart", prevent);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], init);
    }
    function init() {
        var drag = options.drag;
        disable(!drag);
        isFree = drag === "free";
    }
    function onPointerDown(e) {
        clickPrevented = false;
        if (!disabled) {
            var isTouch = isTouchEvent(e);
            if (isDraggable(e.target) && (isTouch || !e.button)) {
                if (!Controller.isBusy()) {
                    target = isTouch ? track : window;
                    dragging = state.is([
                        MOVING,
                        SCROLLING
                    ]);
                    prevBaseEvent = null;
                    bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
                    bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
                    Move.cancel();
                    Scroll.cancel();
                    save(e);
                } else prevent(e, true);
            }
        }
    }
    function onPointerMove(e) {
        if (!state.is(DRAGGING)) {
            state.set(DRAGGING);
            emit(EVENT_DRAG);
        }
        if (e.cancelable) {
            if (dragging) {
                Move.translate(basePosition + constrain(diffCoord(e)));
                var expired = diffTime(e) > LOG_INTERVAL;
                var hasExceeded = exceeded !== (exceeded = exceededLimit());
                if (expired || hasExceeded) save(e);
                clickPrevented = true;
                emit(EVENT_DRAGGING);
                prevent(e);
            } else if (isSliderDirection(e)) {
                dragging = shouldStart(e);
                prevent(e);
            }
        }
    }
    function onPointerUp(e) {
        if (state.is(DRAGGING)) {
            state.set(IDLE);
            emit(EVENT_DRAGGED);
        }
        if (dragging) {
            move(e);
            prevent(e);
        }
        unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
        unbind(target, POINTER_UP_EVENTS, onPointerUp);
        dragging = false;
    }
    function onClick(e) {
        if (!disabled && clickPrevented) prevent(e, true);
    }
    function save(e) {
        prevBaseEvent = baseEvent;
        baseEvent = e;
        basePosition = getPosition();
    }
    function move(e) {
        var velocity = computeVelocity(e);
        var destination = computeDestination(velocity);
        var rewind = options.rewind && options.rewindByDrag;
        reduce(false);
        if (isFree) Controller.scroll(destination, 0, options.snap);
        else if (Splide2.is(FADE)) Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
        else if (Splide2.is(SLIDE) && exceeded && rewind) Controller.go(exceededLimit(true) ? ">" : "<");
        else Controller.go(Controller.toDest(destination), true);
        reduce(true);
    }
    function shouldStart(e) {
        var thresholds = options.dragMinThreshold;
        var isObj = isObject(thresholds);
        var mouse = isObj && thresholds.mouse || 0;
        var touch = (isObj ? thresholds.touch : +thresholds) || 10;
        return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
    }
    function isSliderDirection(e) {
        return abs(diffCoord(e)) > abs(diffCoord(e, true));
    }
    function computeVelocity(e) {
        if (Splide2.is(LOOP) || !exceeded) {
            var time = diffTime(e);
            if (time && time < LOG_INTERVAL) return diffCoord(e) / time;
        }
        return 0;
    }
    function computeDestination(velocity) {
        return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e, orthogonal) {
        return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
    }
    function diffTime(e) {
        return timeOf(e) - timeOf(getBaseEvent(e));
    }
    function getBaseEvent(e) {
        return baseEvent === e && prevBaseEvent || baseEvent;
    }
    function coordOf(e, orthogonal) {
        return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
        return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isDraggable(target2) {
        var noDrag = options.noDrag;
        return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
    }
    function isTouchEvent(e) {
        return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
        return dragging;
    }
    function disable(value) {
        disabled = value;
    }
    return {
        mount: mount,
        disable: disable,
        isDragging: isDragging
    };
}
var NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: ARROW_RIGHT,
    Left: ARROW_LEFT,
    Up: ARROW_UP,
    Down: ARROW_DOWN
};
function normalizeKey(key) {
    key = isString(key) ? key : key.key;
    return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
        init();
        on(EVENT_UPDATED, destroy);
        on(EVENT_UPDATED, init);
        on(EVENT_MOVE, onMove);
    }
    function init() {
        var keyboard = options.keyboard;
        if (keyboard) {
            target = keyboard === "global" ? window : root;
            bind(target, KEYBOARD_EVENT, onKeydown);
        }
    }
    function destroy() {
        unbind(target, KEYBOARD_EVENT);
    }
    function disable(value) {
        disabled = value;
    }
    function onMove() {
        var _disabled = disabled;
        disabled = true;
        nextTick(function() {
            disabled = _disabled;
        });
    }
    function onKeydown(e) {
        if (!disabled) {
            var key = normalizeKey(e);
            if (key === resolve(ARROW_LEFT)) Splide2.go("<");
            else if (key === resolve(ARROW_RIGHT)) Splide2.go(">");
        }
    }
    return {
        mount: mount,
        destroy: destroy,
        disable: disable
    };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [
        EVENT_MOVED,
        EVENT_SCROLLED
    ];
    var entries = [];
    function mount() {
        if (options.lazyLoad) {
            init();
            on(EVENT_REFRESH, init);
        }
    }
    function init() {
        empty(entries);
        register();
        if (isSequential) loadNext();
        else {
            off(events);
            on(events, check);
            check();
        }
    }
    function register() {
        Components2.Slides.forEach(function(Slide) {
            queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function(img) {
                var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
                var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
                if (src !== img.src || srcset !== img.srcset) {
                    var className = options.classes.spinner;
                    var parent = img.parentElement;
                    var spinner = child(parent, "." + className) || create("span", className, parent);
                    entries.push([
                        img,
                        Slide,
                        spinner
                    ]);
                    img.src || display(img, "none");
                }
            });
        });
    }
    function check() {
        entries = entries.filter(function(data) {
            var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
            return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
        });
        entries.length || off(events);
    }
    function load(data) {
        var img = data[0];
        addClass(data[1].slide, CLASS_LOADING);
        bind(img, "load error", apply(onLoad, data));
        setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
        setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
        removeAttribute(img, SRC_DATA_ATTRIBUTE);
        removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e) {
        var img = data[0], Slide = data[1];
        removeClass(Slide.slide, CLASS_LOADING);
        if (e.type !== "error") {
            remove(data[2]);
            display(img, "");
            emit(EVENT_LAZYLOAD_LOADED, img, Slide);
            emit(EVENT_RESIZE);
        }
        isSequential && loadNext();
    }
    function loadNext() {
        entries.length && load(entries.shift());
    }
    return {
        mount: mount,
        destroy: apply(empty, entries),
        check: check
    };
}
function Pagination(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides = Components2.Slides, Elements = Components2.Elements, Controller = Components2.Controller;
    var hasFocus = Controller.hasFocus, getIndex = Controller.getIndex, go = Controller.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
        destroy();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_END_INDEX_CHANGED
        ], mount);
        var enabled = options.pagination;
        placeholder && display(placeholder, enabled ? "" : "none");
        if (enabled) {
            on([
                EVENT_MOVE,
                EVENT_SCROLL,
                EVENT_SCROLLED
            ], update);
            createPagination();
            update();
            emit(EVENT_PAGINATION_MOUNTED, {
                list: list,
                items: items
            }, getAt(Splide2.index));
        }
    }
    function destroy() {
        if (list) {
            remove(placeholder ? slice(list.children) : list);
            removeClass(list, paginationClasses);
            empty(items);
            list = null;
        }
        event.destroy();
    }
    function createPagination() {
        var length = Splide2.length;
        var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
        var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
        list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
        addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
        setAttribute(list, ROLE, "tablist");
        setAttribute(list, ARIA_LABEL, i18n.select);
        setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
        for(var i = 0; i < max; i++){
            var li = create("li", null, list);
            var button = create("button", {
                class: classes.page,
                type: "button"
            }, li);
            var controls = Slides.getIn(i).map(function(Slide) {
                return Slide.slide.id;
            });
            var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
            bind(button, "click", apply(onClick, i));
            if (options.paginationKeyboard) bind(button, "keydown", apply(onKeydown, i));
            setAttribute(li, ROLE, "presentation");
            setAttribute(button, ROLE, "tab");
            setAttribute(button, ARIA_CONTROLS, controls.join(" "));
            setAttribute(button, ARIA_LABEL, format(text, i + 1));
            setAttribute(button, TAB_INDEX, -1);
            items.push({
                li: li,
                button: button,
                page: i
            });
        }
    }
    function onClick(page) {
        go(">" + page, true);
    }
    function onKeydown(page, e) {
        var length = items.length;
        var key = normalizeKey(e);
        var dir = getDirection();
        var nextPage = -1;
        if (key === resolve(ARROW_RIGHT, false, dir)) nextPage = ++page % length;
        else if (key === resolve(ARROW_LEFT, false, dir)) nextPage = (--page + length) % length;
        else if (key === "Home") nextPage = 0;
        else if (key === "End") nextPage = length - 1;
        var item = items[nextPage];
        if (item) {
            focus(item.button);
            go(">" + nextPage);
            prevent(e, true);
        }
    }
    function getDirection() {
        return options.paginationDirection || options.direction;
    }
    function getAt(index) {
        return items[Controller.toPage(index)];
    }
    function update() {
        var prev = getAt(getIndex(true));
        var curr = getAt(getIndex());
        if (prev) {
            var button = prev.button;
            removeClass(button, CLASS_ACTIVE);
            removeAttribute(button, ARIA_SELECTED);
            setAttribute(button, TAB_INDEX, -1);
        }
        if (curr) {
            var _button = curr.button;
            addClass(_button, CLASS_ACTIVE);
            setAttribute(_button, ARIA_SELECTED, true);
            setAttribute(_button, TAB_INDEX, "");
        }
        emit(EVENT_PAGINATION_UPDATED, {
            list: list,
            items: items
        }, prev, curr);
    }
    return {
        items: items,
        mount: mount,
        destroy: destroy,
        getAt: getAt,
        update: update
    };
}
var TRIGGER_KEYS = [
    " ",
    "Enter"
];
function Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
        Splide2.splides.forEach(function(target) {
            if (!target.isParent) {
                sync(Splide2, target.splide);
                sync(target.splide, Splide2);
            }
        });
        if (isNavigation) navigate();
    }
    function destroy() {
        events.forEach(function(event) {
            event.destroy();
        });
        empty(events);
    }
    function remount() {
        destroy();
        mount();
    }
    function sync(splide, target) {
        var event = EventInterface(splide);
        event.on(EVENT_MOVE, function(index, prev, dest) {
            target.go(target.is(LOOP) ? dest : index);
        });
        events.push(event);
    }
    function navigate() {
        var event = EventInterface(Splide2);
        var on = event.on;
        on(EVENT_CLICK, onClick);
        on(EVENT_SLIDE_KEYDOWN, onKeydown);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], update);
        events.push(event);
        event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
        setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
    }
    function onClick(Slide) {
        Splide2.go(Slide.index);
    }
    function onKeydown(Slide, e) {
        if (includes(TRIGGER_KEYS, normalizeKey(e))) {
            onClick(Slide);
            prevent(e);
        }
    }
    return {
        setup: apply(Components2.Media.set, {
            slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
        }, true),
        mount: mount,
        destroy: destroy,
        remount: remount
    };
}
function Wheel(Splide2, Components2, options) {
    var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
        if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
    function onWheel(e) {
        if (e.cancelable) {
            var deltaY = e.deltaY;
            var backwards = deltaY < 0;
            var timeStamp = timeOf(e);
            var _min = options.wheelMinThreshold || 0;
            var sleep = options.wheelSleep || 0;
            if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
                Splide2.go(backwards ? "<" : ">");
                lastTime = timeStamp;
            }
            shouldPrevent(backwards) && prevent(e);
        }
    }
    function shouldPrevent(backwards) {
        return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
        mount: mount
    };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
    var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = create("span", CLASS_SR);
    var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
    function mount() {
        if (enabled) {
            disable(!Components2.Autoplay.isPaused());
            setAttribute(track, ARIA_ATOMIC, true);
            sr.textContent = "…";
            on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
            on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
            on([
                EVENT_MOVED,
                EVENT_SCROLLED
            ], apply(toggle, true));
        }
    }
    function toggle(active) {
        setAttribute(track, ARIA_BUSY, active);
        if (active) {
            append(track, sr);
            interval.start();
        } else {
            remove(sr);
            interval.cancel();
        }
    }
    function destroy() {
        removeAttribute(track, [
            ARIA_LIVE,
            ARIA_ATOMIC,
            ARIA_BUSY
        ]);
        remove(sr);
    }
    function disable(disabled) {
        if (enabled) setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
    return {
        mount: mount,
        disable: disable,
        destroy: destroy
    };
}
var ComponentConstructors = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Media: Media,
    Direction: Direction,
    Elements: Elements,
    Slides: Slides,
    Layout: Layout,
    Clones: Clones,
    Move: Move,
    Controller: Controller,
    Arrows: Arrows,
    Autoplay: Autoplay,
    Cover: Cover,
    Scroll: Scroll,
    Drag: Drag,
    Keyboard: Keyboard,
    LazyLoad: LazyLoad,
    Pagination: Pagination,
    Sync: Sync,
    Wheel: Wheel,
    Live: Live
});
var I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
};
var DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: CLASSES,
    i18n: I18N,
    reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause"
    }
};
function Fade(Splide2, Components2, options) {
    var Slides = Components2.Slides;
    function mount() {
        EventInterface(Splide2).on([
            EVENT_MOUNTED,
            EVENT_REFRESH
        ], init);
    }
    function init() {
        Slides.forEach(function(Slide) {
            Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
        });
    }
    function start(index, done) {
        Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
        nextTick(done);
    }
    return {
        mount: mount,
        start: start,
        cancel: noop
    };
}
function Slide(Splide2, Components2, options) {
    var Move = Components2.Move, Controller = Components2.Controller, Scroll = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = apply(style, list, "transition");
    var endCallback;
    function mount() {
        EventInterface(Splide2).bind(list, "transitionend", function(e) {
            if (e.target === list && endCallback) {
                cancel();
                endCallback();
            }
        });
    }
    function start(index, done) {
        var destination = Move.toPosition(index, true);
        var position = Move.getPosition();
        var speed = getSpeed(index);
        if (abs(destination - position) >= 1 && speed >= 1) {
            if (options.useScroll) Scroll.scroll(destination, speed, false, done);
            else {
                transition("transform " + speed + "ms " + options.easing);
                Move.translate(destination, true);
                endCallback = done;
            }
        } else {
            Move.jump(index);
            done();
        }
    }
    function cancel() {
        transition("");
        Scroll.cancel();
    }
    function getSpeed(index) {
        var rewindSpeed = options.rewindSpeed;
        if (Splide2.is(SLIDE) && rewindSpeed) {
            var prev = Controller.getIndex(true);
            var end = Controller.getEnd();
            if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
        }
        return options.speed;
    }
    return {
        mount: mount,
        start: start,
        cancel: cancel
    };
}
var _Splide = /*#__PURE__*/ function() {
    function _Splide(target, options) {
        this.event = EventInterface();
        this.Components = {};
        this.state = State(CREATED);
        this.splides = [];
        this._o = {};
        this._E = {};
        var root = isString(target) ? query(document, target) : target;
        assert(root, root + " is invalid.");
        this.root = root;
        options = merge({
            label: getAttribute(root, ARIA_LABEL) || "",
            labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
        }, DEFAULTS, _Splide.defaults, options || {});
        try {
            merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
        } catch (e) {
            assert(false, "Invalid JSON");
        }
        this._o = Object.create(merge({}, options));
    }
    var _proto = _Splide.prototype;
    _proto.mount = function mount(Extensions, Transition) {
        var _this = this;
        var state = this.state, Components2 = this.Components;
        assert(state.is([
            CREATED,
            DESTROYED
        ]), "Already mounted!");
        state.set(CREATED);
        this._C = Components2;
        this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
        this._E = Extensions || this._E;
        var Constructors = assign({}, ComponentConstructors, this._E, {
            Transition: this._T
        });
        forOwn(Constructors, function(Component, key) {
            var component = Component(_this, Components2, _this._o);
            Components2[key] = component;
            component.setup && component.setup();
        });
        forOwn(Components2, function(component) {
            component.mount && component.mount();
        });
        this.emit(EVENT_MOUNTED);
        addClass(this.root, CLASS_INITIALIZED);
        state.set(IDLE);
        this.emit(EVENT_READY);
        return this;
    };
    _proto.sync = function sync(splide) {
        this.splides.push({
            splide: splide
        });
        splide.splides.push({
            splide: this,
            isParent: true
        });
        if (this.state.is(IDLE)) {
            this._C.Sync.remount();
            splide.Components.Sync.remount();
        }
        return this;
    };
    _proto.go = function go(control) {
        this._C.Controller.go(control);
        return this;
    };
    _proto.on = function on(events, callback) {
        this.event.on(events, callback);
        return this;
    };
    _proto.off = function off(events) {
        this.event.off(events);
        return this;
    };
    _proto.emit = function emit(event) {
        var _this$event;
        (_this$event = this.event).emit.apply(_this$event, [
            event
        ].concat(slice(arguments, 1)));
        return this;
    };
    _proto.add = function add(slides, index) {
        this._C.Slides.add(slides, index);
        return this;
    };
    _proto.remove = function remove(matcher) {
        this._C.Slides.remove(matcher);
        return this;
    };
    _proto.is = function is(type) {
        return this._o.type === type;
    };
    _proto.refresh = function refresh() {
        this.emit(EVENT_REFRESH);
        return this;
    };
    _proto.destroy = function destroy(completely) {
        if (completely === void 0) completely = true;
        var event = this.event, state = this.state;
        if (state.is(CREATED)) EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
        else {
            forOwn(this._C, function(component) {
                component.destroy && component.destroy(completely);
            }, true);
            event.emit(EVENT_DESTROY);
            event.destroy();
            completely && empty(this.splides);
            state.set(DESTROYED);
        }
        return this;
    };
    _createClass(_Splide, [
        {
            key: "options",
            get: function get() {
                return this._o;
            },
            set: function set(options) {
                this._C.Media.set(options, true, true);
            }
        },
        {
            key: "length",
            get: function get() {
                return this._C.Slides.getLength(true);
            }
        },
        {
            key: "index",
            get: function get() {
                return this._C.Controller.getIndex();
            }
        }
    ]);
    return _Splide;
}();
var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
    listTag: "ul",
    slideTag: "li"
};
var Style = /*#__PURE__*/ function() {
    function Style(id, options) {
        this.styles = {};
        this.id = id;
        this.options = options;
    }
    var _proto2 = Style.prototype;
    _proto2.rule = function rule(selector, prop, value, breakpoint) {
        breakpoint = breakpoint || "default";
        var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
        var styles = selectors[selector] = selectors[selector] || {};
        styles[prop] = value;
    };
    _proto2.build = function build() {
        var _this2 = this;
        var css = "";
        if (this.styles.default) css += this.buildSelectors(this.styles.default);
        Object.keys(this.styles).sort(function(n, m) {
            return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
        }).forEach(function(breakpoint) {
            if (breakpoint !== "default") {
                css += "@media screen and (max-width: " + breakpoint + "px) {";
                css += _this2.buildSelectors(_this2.styles[breakpoint]);
                css += "}";
            }
        });
        return css;
    };
    _proto2.buildSelectors = function buildSelectors(selectors) {
        var _this3 = this;
        var css = "";
        forOwn(selectors, function(styles, selector) {
            selector = ("#" + _this3.id + " " + selector).trim();
            css += selector + " {";
            forOwn(styles, function(value, prop) {
                if (value || value === 0) css += prop + ": " + value + ";";
            });
            css += "}";
        });
        return css;
    };
    return Style;
}();
var SplideRenderer = /*#__PURE__*/ function() {
    function SplideRenderer(contents, options, config, defaults) {
        this.slides = [];
        this.options = {};
        this.breakpoints = [];
        merge(DEFAULTS, defaults || {});
        merge(merge(this.options, DEFAULTS), options || {});
        this.contents = contents;
        this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
        this.id = this.config.id || uniqueId("splide");
        this.Style = new Style(this.id, this.options);
        this.Direction = Direction(null, null, this.options);
        assert(this.contents.length, "Provide at least 1 content.");
        this.init();
    }
    SplideRenderer.clean = function clean(splide) {
        var _EventInterface14 = EventInterface(splide), on = _EventInterface14.on;
        var root = splide.root;
        var clones = queryAll(root, "." + CLASS_CLONE);
        on(EVENT_MOUNTED, function() {
            remove(child(root, "style"));
        });
        remove(clones);
    };
    var _proto3 = SplideRenderer.prototype;
    _proto3.init = function init() {
        this.parseBreakpoints();
        this.initSlides();
        this.registerRootStyles();
        this.registerTrackStyles();
        this.registerSlideStyles();
        this.registerListStyles();
    };
    _proto3.initSlides = function initSlides() {
        var _this4 = this;
        push(this.slides, this.contents.map(function(content, index) {
            content = isString(content) ? {
                html: content
            } : content;
            content.styles = content.styles || {};
            content.attrs = content.attrs || {};
            _this4.cover(content);
            var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
            assign(content.attrs, {
                class: (classes + " " + (content.attrs.class || "")).trim(),
                style: _this4.buildStyles(content.styles)
            });
            return content;
        }));
        if (this.isLoop()) this.generateClones(this.slides);
    };
    _proto3.registerRootStyles = function registerRootStyles() {
        var _this5 = this;
        this.breakpoints.forEach(function(_ref2) {
            var width = _ref2[0], options = _ref2[1];
            _this5.Style.rule(" ", "max-width", unit(options.width), width);
        });
    };
    _proto3.registerTrackStyles = function registerTrackStyles() {
        var _this6 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_TRACK;
        this.breakpoints.forEach(function(_ref3) {
            var width = _ref3[0], options = _ref3[1];
            Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
            Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
            Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
        });
    };
    _proto3.registerListStyles = function registerListStyles() {
        var _this7 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_LIST;
        this.breakpoints.forEach(function(_ref4) {
            var width = _ref4[0], options = _ref4[1];
            Style2.rule(selector, "transform", _this7.buildTranslate(options), width);
            if (!_this7.cssSlideHeight(options)) Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
        });
    };
    _proto3.registerSlideStyles = function registerSlideStyles() {
        var _this8 = this;
        var Style2 = this.Style;
        var selector = "." + CLASS_SLIDE;
        this.breakpoints.forEach(function(_ref5) {
            var width = _ref5[0], options = _ref5[1];
            Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
            Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
            Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
            Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
        });
    };
    _proto3.buildTranslate = function buildTranslate(options) {
        var _this$Direction = this.Direction, resolve = _this$Direction.resolve, orient = _this$Direction.orient;
        var values = [];
        values.push(this.cssOffsetClones(options));
        values.push(this.cssOffsetGaps(options));
        if (this.isCenter(options)) {
            values.push(this.buildCssValue(orient(-50), "%"));
            values.push.apply(values, this.cssOffsetCenter(options));
        }
        return values.filter(Boolean).map(function(value) {
            return "translate" + resolve("X") + "(" + value + ")";
        }).join(" ");
    };
    _proto3.cssOffsetClones = function cssOffsetClones(options) {
        var _this$Direction2 = this.Direction, resolve = _this$Direction2.resolve, orient = _this$Direction2.orient;
        var cloneCount = this.getCloneCount();
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue.value, unit2 = _this$parseCssValue.unit;
            return this.buildCssValue(orient(value) * cloneCount, unit2);
        }
        var percent = 100 * cloneCount / options.perPage;
        return orient(percent) + "%";
    };
    _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
        var _this$Direction3 = this.Direction, resolve = _this$Direction3.resolve, orient = _this$Direction3.orient;
        if (this.isFixedWidth(options)) {
            var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]), value = _this$parseCssValue2.value, unit2 = _this$parseCssValue2.unit;
            return [
                this.buildCssValue(orient(value / 2), unit2)
            ];
        }
        var values = [];
        var perPage = options.perPage, gap = options.gap;
        values.push(orient(50 / perPage) + "%");
        if (gap) {
            var _this$parseCssValue3 = this.parseCssValue(gap), _value = _this$parseCssValue3.value, _unit = _this$parseCssValue3.unit;
            var gapOffset = (_value / perPage - _value) / 2;
            values.push(this.buildCssValue(orient(gapOffset), _unit));
        }
        return values;
    };
    _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
        var cloneCount = this.getCloneCount();
        if (cloneCount && options.gap) {
            var orient = this.Direction.orient;
            var _this$parseCssValue4 = this.parseCssValue(options.gap), value = _this$parseCssValue4.value, unit2 = _this$parseCssValue4.unit;
            if (this.isFixedWidth(options)) return this.buildCssValue(orient(value * cloneCount), unit2);
            var perPage = options.perPage;
            var gaps = cloneCount / perPage;
            return this.buildCssValue(orient(gaps * value), unit2);
        }
        return "";
    };
    _proto3.resolve = function resolve(prop) {
        return camelToKebab(this.Direction.resolve(prop));
    };
    _proto3.cssPadding = function cssPadding(options, right) {
        var padding = options.padding;
        var prop = this.Direction.resolve(right ? "right" : "left", true);
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    };
    _proto3.cssTrackHeight = function cssTrackHeight(options) {
        var height = "";
        if (this.isVertical()) {
            height = this.cssHeight(options);
            assert(height, '"height" is missing.');
            height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
        }
        return height;
    };
    _proto3.cssHeight = function cssHeight(options) {
        return unit(options.height);
    };
    _proto3.cssSlideWidth = function cssSlideWidth(options) {
        return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
    };
    _proto3.cssSlideHeight = function cssSlideHeight(options) {
        return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
    };
    _proto3.cssSlideSize = function cssSlideSize(options) {
        var gap = unit(options.gap);
        return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    };
    _proto3.cssAspectRatio = function cssAspectRatio(options) {
        var heightRatio = options.heightRatio;
        return heightRatio ? "" + 1 / heightRatio : "";
    };
    _proto3.buildCssValue = function buildCssValue(value, unit2) {
        return "" + value + unit2;
    };
    _proto3.parseCssValue = function parseCssValue(value) {
        if (isString(value)) {
            var number = parseFloat(value) || 0;
            var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
            return {
                value: number,
                unit: unit2
            };
        }
        return {
            value: value,
            unit: "px"
        };
    };
    _proto3.parseBreakpoints = function parseBreakpoints() {
        var _this9 = this;
        var breakpoints = this.options.breakpoints;
        this.breakpoints.push([
            "default",
            this.options
        ]);
        if (breakpoints) forOwn(breakpoints, function(options, width) {
            _this9.breakpoints.push([
                width,
                merge(merge({}, _this9.options), options)
            ]);
        });
    };
    _proto3.isFixedWidth = function isFixedWidth(options) {
        return !!options[this.Direction.resolve("fixedWidth")];
    };
    _proto3.isLoop = function isLoop() {
        return this.options.type === LOOP;
    };
    _proto3.isCenter = function isCenter(options) {
        if (options.focus === "center") {
            if (this.isLoop()) return true;
            if (this.options.type === SLIDE) return !this.options.trimSpace;
        }
        return false;
    };
    _proto3.isVertical = function isVertical() {
        return this.options.direction === TTB;
    };
    _proto3.buildClasses = function buildClasses() {
        var options = this.options;
        return [
            CLASS_ROOT,
            CLASS_ROOT + "--" + options.type,
            CLASS_ROOT + "--" + options.direction,
            options.drag && CLASS_ROOT + "--draggable",
            options.isNavigation && CLASS_ROOT + "--nav",
            CLASS_ACTIVE,
            !this.config.hidden && CLASS_RENDERED
        ].filter(Boolean).join(" ");
    };
    _proto3.buildAttrs = function buildAttrs(attrs) {
        var attr = "";
        forOwn(attrs, function(value, key) {
            attr += value ? " " + camelToKebab(key) + '="' + value + '"' : "";
        });
        return attr.trim();
    };
    _proto3.buildStyles = function buildStyles(styles) {
        var style = "";
        forOwn(styles, function(value, key) {
            style += " " + camelToKebab(key) + ":" + value + ";";
        });
        return style.trim();
    };
    _proto3.renderSlides = function renderSlides() {
        var _this10 = this;
        var tag = this.config.slideTag;
        return this.slides.map(function(content) {
            return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
        }).join("");
    };
    _proto3.cover = function cover(content) {
        var styles = content.styles, _content$html = content.html, html = _content$html === void 0 ? "" : _content$html;
        if (this.options.cover && !this.options.lazyLoad) {
            var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
            if (src && src[2]) styles.background = "center/cover no-repeat url('" + src[2] + "')";
        }
    };
    _proto3.generateClones = function generateClones(contents) {
        var classes = this.options.classes;
        var count = this.getCloneCount();
        var slides = contents.slice();
        while(slides.length < count)push(slides, slides);
        push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function(content, index) {
            var attrs = assign({}, content.attrs, {
                class: content.attrs.class + " " + classes.clone
            });
            var clone = assign({}, content, {
                attrs: attrs
            });
            index < count ? contents.unshift(clone) : contents.push(clone);
        });
    };
    _proto3.getCloneCount = function getCloneCount() {
        if (this.isLoop()) {
            var options = this.options;
            if (options.clones) return options.clones;
            var perPage = max.apply(void 0, this.breakpoints.map(function(_ref6) {
                var options2 = _ref6[1];
                return options2.perPage;
            }));
            return perPage * ((options.flickMaxPages || 1) + 1);
        }
        return 0;
    };
    _proto3.renderArrows = function renderArrows() {
        var html = "";
        html += '<div class="' + this.options.classes.arrows + '">';
        html += this.renderArrow(true);
        html += this.renderArrow(false);
        html += "</div>";
        return html;
    };
    _proto3.renderArrow = function renderArrow(prev) {
        var _this$options = this.options, classes = _this$options.classes, i18n = _this$options.i18n;
        var attrs = {
            class: classes.arrow + " " + (prev ? classes.prev : classes.next),
            type: "button",
            ariaLabel: prev ? i18n.prev : i18n.next
        };
        return "<button " + this.buildAttrs(attrs) + '><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '"><path d="' + (this.options.arrowPath || PATH) + '" /></svg></button>';
    };
    _proto3.html = function html() {
        var _this$config = this.config, rootClass = _this$config.rootClass, listTag = _this$config.listTag, arrows = _this$config.arrows, beforeTrack = _this$config.beforeTrack, afterTrack = _this$config.afterTrack, slider = _this$config.slider, beforeSlider = _this$config.beforeSlider, afterSlider = _this$config.afterSlider;
        var html = "";
        html += '<div id="' + this.id + '" class="' + this.buildClasses() + " " + (rootClass || "") + '">';
        html += "<style>" + this.Style.build() + "</style>";
        if (slider) {
            html += beforeSlider || "";
            html += '<div class="splide__slider">';
        }
        html += beforeTrack || "";
        if (arrows) html += this.renderArrows();
        html += '<div class="splide__track">';
        html += "<" + listTag + ' class="splide__list">';
        html += this.renderSlides();
        html += "</" + listTag + ">";
        html += "</div>";
        html += afterTrack || "";
        if (slider) {
            html += "</div>";
            html += afterSlider || "";
        }
        html += "</div>";
        return html;
    };
    return SplideRenderer;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivXRr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _progressbarJs = require("progressbar.js");
var _progressbarJsDefault = parcelHelpers.interopDefault(_progressbarJs);
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
var _userDataJs = require("./user-data.js");
const container = document.querySelector("#carousel .splide__list");
const competencias = (0, _userDataJs.persona).competencias;
// Contador de elementos
let count = 0;
// Recorrer todas las competencias de la persona y crear un elemento div para cada una
competencias.forEach((competencia)=>{
    // Obtener el nombre de la competencia y el valor numérico correspondiente
    const nombre = Object.keys(competencia)[0];
    const valor = competencia[nombre];
    const colorValor = valor < 50 ? "#80BFFE" : "#0075FF";
    // Crear los elementos div necesarios para la barra de progreso
    const progressLine = document.createElement("div");
    progressLine.classList.add("progress-line");
    const h5 = document.createElement("h5");
    h5.classList.add("mb-0");
    h5.textContent = nombre;
    progressLine.appendChild(h5);
    const progressLineBar = document.createElement("div");
    progressLineBar.classList.add("progress-line__bar");
    progressLine.appendChild(progressLineBar);
    // Crear el ProgressBar.Line correspondiente y animarlo con el valor numérico
    const line = new (0, _progressbarJsDefault.default).Line(progressLineBar, {
        strokeWidth: 4,
        color: colorValor,
        trailColor: "#F2F3F3",
        trailWidth: 4,
        text: {
            style: null,
            autoStyleContainer: false,
            className: "progress-line__bar--value"
        },
        step: function(state, line) {
            var value = `${Math.round(line.value() * 100)}%`;
            line.setText(value);
        }
    });
    line.animate(valor / 100, {
        duration: 400,
        easing: "easeInOut"
    });
    // Si el contador llega a 5, crear un nuevo div con la clase 'list'
    if (count % 5 === 0) {
        const splide = document.createElement("li");
        splide.classList.add("splide__slide");
        const list = document.createElement("div");
        list.classList.add("list");
        splide.appendChild(list);
        container.appendChild(splide);
    }
    // Insertar el elemento de la barra de progreso en el último div creado
    const lists = document.querySelectorAll(".list");
    const list = lists[lists.length - 1];
    list.appendChild(progressLine);
    // Aumentar el contador de elementos
    count++;
});
const splide = new (0, _splideDefault.default)("#carousel", {
    perPage: 2,
    perMove: 1,
    pagination: true,
    list: "ul",
    arrows: false,
    gap: "8.75rem",
    breakpoints: {
        1024: {
            gap: "5rem"
        },
        640: {
            perPage: 1,
            gap: "0.5rem"
        }
    }
});
splide.mount();

},{"progressbar.js":"56i4J","@splidejs/splide":"5CJev","./user-data.js":"73Xvt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzoC1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _progressbarJs = require("progressbar.js");
var _progressbarJsDefault = parcelHelpers.interopDefault(_progressbarJs);
document.addEventListener("DOMContentLoaded", function() {
    let accordions = document.querySelectorAll(".accordion-tendencias > .accordion-item");
    accordions.forEach((accordion)=>{
        let textElement = accordion.querySelector(".text");
        let barContainer = accordion.querySelector(".line");
        let valor = Math.random().toFixed(1);
        let collapseElement = accordion.querySelector(".collapse");
        const across = new (0, _progressbarJsDefault.default).Line(barContainer, {
            strokeWidth: 4,
            color: "#0075FF",
            trailColor: "#F2F3F3",
            trailWidth: 4
        });
        across.animate(valor, {
            duration: 400,
            easing: "easeInOut"
        });
        collapseElement.addEventListener("show.bs.collapse", ()=>{
            textElement.classList.add("transition-text");
            barContainer.classList.add("active");
        });
        collapseElement.addEventListener("hidden.bs.collapse", ()=>{
            textElement.classList.remove("transition-text");
            barContainer.classList.remove("active");
        });
    });
});

},{"progressbar.js":"56i4J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9tRox","1SICI"], "1SICI", "parcelRequire7ac5")

//# sourceMappingURL=index.18dbc454.js.map
