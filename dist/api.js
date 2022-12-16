"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/axios/lib/helpers/bind.js
var require_bind = __commonJS({
  "node_modules/axios/lib/helpers/bind.js"(exports, module2) {
    "use strict";
    module2.exports = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };
  }
});

// node_modules/axios/lib/utils.js
var require_utils = __commonJS({
  "node_modules/axios/lib/utils.js"(exports, module2) {
    "use strict";
    var bind = require_bind();
    var toString = Object.prototype.toString;
    function isArray(val) {
      return toString.call(val) === "[object Array]";
    }
    function isUndefined(val) {
      return typeof val === "undefined";
    }
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
    }
    function isArrayBuffer(val) {
      return toString.call(val) === "[object ArrayBuffer]";
    }
    function isFormData(val) {
      return typeof FormData !== "undefined" && val instanceof FormData;
    }
    function isArrayBufferView(val) {
      var result;
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        result = ArrayBuffer.isView(val);
      } else {
        result = val && val.buffer && val.buffer instanceof ArrayBuffer;
      }
      return result;
    }
    function isString(val) {
      return typeof val === "string";
    }
    function isNumber(val) {
      return typeof val === "number";
    }
    function isObject(val) {
      return val !== null && typeof val === "object";
    }
    function isPlainObject(val) {
      if (toString.call(val) !== "[object Object]") {
        return false;
      }
      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }
    function isDate(val) {
      return toString.call(val) === "[object Date]";
    }
    function isFile(val) {
      return toString.call(val) === "[object File]";
    }
    function isBlob(val) {
      return toString.call(val) === "[object Blob]";
    }
    function isFunction(val) {
      return toString.call(val) === "[object Function]";
    }
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }
    function isURLSearchParams(val) {
      return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
    }
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    function isStandardBrowserEnv() {
      if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
        return false;
      }
      return typeof window !== "undefined" && typeof document !== "undefined";
    }
    function forEach(obj, fn) {
      if (obj === null || typeof obj === "undefined") {
        return;
      }
      if (typeof obj !== "object") {
        obj = [obj];
      }
      if (isArray(obj)) {
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }
    function merge() {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }
      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") {
          a[key] = bind(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }
    function stripBOM(content) {
      if (content.charCodeAt(0) === 65279) {
        content = content.slice(1);
      }
      return content;
    }
    module2.exports = {
      isArray,
      isArrayBuffer,
      isBuffer,
      isFormData,
      isArrayBufferView,
      isString,
      isNumber,
      isObject,
      isPlainObject,
      isUndefined,
      isDate,
      isFile,
      isBlob,
      isFunction,
      isStream,
      isURLSearchParams,
      isStandardBrowserEnv,
      forEach,
      merge,
      extend,
      trim,
      stripBOM
    };
  }
});

// node_modules/axios/lib/helpers/buildURL.js
var require_buildURL = __commonJS({
  "node_modules/axios/lib/helpers/buildURL.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function encode(val) {
      return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    }
    module2.exports = function buildURL(url, params, paramsSerializer) {
      if (!params) {
        return url;
      }
      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === "undefined") {
            return;
          }
          if (utils.isArray(val)) {
            key = key + "[]";
          } else {
            val = [val];
          }
          utils.forEach(val, function parseValue(v) {
            if (utils.isDate(v)) {
              v = v.toISOString();
            } else if (utils.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + "=" + encode(v));
          });
        });
        serializedParams = parts.join("&");
      }
      if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
      }
      return url;
    };
  }
});

// node_modules/axios/lib/core/InterceptorManager.js
var require_InterceptorManager = __commonJS({
  "node_modules/axios/lib/core/InterceptorManager.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    function InterceptorManager() {
      this.handlers = [];
    }
    InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled,
        rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };
    InterceptorManager.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };
    InterceptorManager.prototype.forEach = function forEach(fn) {
      utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };
    module2.exports = InterceptorManager;
  }
});

// node_modules/axios/lib/helpers/normalizeHeaderName.js
var require_normalizeHeaderName = __commonJS({
  "node_modules/axios/lib/helpers/normalizeHeaderName.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function normalizeHeaderName(headers, normalizedName) {
      utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };
  }
});

// node_modules/axios/lib/core/enhanceError.js
var require_enhanceError = __commonJS({
  "node_modules/axios/lib/core/enhanceError.js"(exports, module2) {
    "use strict";
    module2.exports = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }
      error.request = request;
      error.response = response;
      error.isAxiosError = true;
      error.toJSON = function toJSON() {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };
      return error;
    };
  }
});

// node_modules/axios/lib/core/createError.js
var require_createError = __commonJS({
  "node_modules/axios/lib/core/createError.js"(exports, module2) {
    "use strict";
    var enhanceError = require_enhanceError();
    module2.exports = function createError(message, config, code, request, response) {
      var error = new Error(message);
      return enhanceError(error, config, code, request, response);
    };
  }
});

// node_modules/axios/lib/core/settle.js
var require_settle = __commonJS({
  "node_modules/axios/lib/core/settle.js"(exports, module2) {
    "use strict";
    var createError = require_createError();
    module2.exports = function settle(resolve, reject, response) {
      var validateStatus = response.config.validateStatus;
      if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
      } else {
        reject(createError(
          "Request failed with status code " + response.status,
          response.config,
          null,
          response.request,
          response
        ));
      }
    };
  }
});

// node_modules/axios/lib/helpers/cookies.js
var require_cookies = __commonJS({
  "node_modules/axios/lib/helpers/cookies.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + "=" + encodeURIComponent(value));
          if (utils.isNumber(expires)) {
            cookie.push("expires=" + new Date(expires).toGMTString());
          }
          if (utils.isString(path)) {
            cookie.push("path=" + path);
          }
          if (utils.isString(domain)) {
            cookie.push("domain=" + domain);
          }
          if (secure === true) {
            cookie.push("secure");
          }
          document.cookie = cookie.join("; ");
        },
        read: function read(name) {
          var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
          return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
          this.write(name, "", Date.now() - 864e5);
        }
      };
    }() : function nonStandardBrowserEnv() {
      return {
        write: function write() {
        },
        read: function read() {
          return null;
        },
        remove: function remove() {
        }
      };
    }();
  }
});

// node_modules/axios/lib/helpers/isAbsoluteURL.js
var require_isAbsoluteURL = __commonJS({
  "node_modules/axios/lib/helpers/isAbsoluteURL.js"(exports, module2) {
    "use strict";
    module2.exports = function isAbsoluteURL(url) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
    };
  }
});

// node_modules/axios/lib/helpers/combineURLs.js
var require_combineURLs = __commonJS({
  "node_modules/axios/lib/helpers/combineURLs.js"(exports, module2) {
    "use strict";
    module2.exports = function combineURLs(baseURL, relativeURL) {
      return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
    };
  }
});

// node_modules/axios/lib/core/buildFullPath.js
var require_buildFullPath = __commonJS({
  "node_modules/axios/lib/core/buildFullPath.js"(exports, module2) {
    "use strict";
    var isAbsoluteURL = require_isAbsoluteURL();
    var combineURLs = require_combineURLs();
    module2.exports = function buildFullPath(baseURL, requestedURL) {
      if (baseURL && !isAbsoluteURL(requestedURL)) {
        return combineURLs(baseURL, requestedURL);
      }
      return requestedURL;
    };
  }
});

// node_modules/axios/lib/helpers/parseHeaders.js
var require_parseHeaders = __commonJS({
  "node_modules/axios/lib/helpers/parseHeaders.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var ignoreDuplicateOf = [
      "age",
      "authorization",
      "content-length",
      "content-type",
      "etag",
      "expires",
      "from",
      "host",
      "if-modified-since",
      "if-unmodified-since",
      "last-modified",
      "location",
      "max-forwards",
      "proxy-authorization",
      "referer",
      "retry-after",
      "user-agent"
    ];
    module2.exports = function parseHeaders(headers) {
      var parsed = {};
      var key;
      var val;
      var i;
      if (!headers) {
        return parsed;
      }
      utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
          if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
            return;
          }
          if (key === "set-cookie") {
            parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
          } else {
            parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
          }
        }
      });
      return parsed;
    };
  }
});

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var require_isURLSameOrigin = __commonJS({
  "node_modules/axios/lib/helpers/isURLSameOrigin.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement("a");
      var originURL;
      function resolveURL(url) {
        var href = url;
        if (msie) {
          urlParsingNode.setAttribute("href", href);
          href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
      }
      originURL = resolveURL(window.location.href);
      return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
      };
    }() : function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    }();
  }
});

// node_modules/axios/lib/cancel/Cancel.js
var require_Cancel = __commonJS({
  "node_modules/axios/lib/cancel/Cancel.js"(exports, module2) {
    "use strict";
    function Cancel(message) {
      this.message = message;
    }
    Cancel.prototype.toString = function toString() {
      return "Cancel" + (this.message ? ": " + this.message : "");
    };
    Cancel.prototype.__CANCEL__ = true;
    module2.exports = Cancel;
  }
});

// node_modules/axios/lib/adapters/xhr.js
var require_xhr = __commonJS({
  "node_modules/axios/lib/adapters/xhr.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var cookies = require_cookies();
    var buildURL = require_buildURL();
    var buildFullPath = require_buildFullPath();
    var parseHeaders = require_parseHeaders();
    var isURLSameOrigin = require_isURLSameOrigin();
    var createError = require_createError();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    module2.exports = function xhrAdapter(config) {
      return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        if (utils.isFormData(requestData)) {
          delete requestHeaders["Content-Type"];
        }
        var request = new XMLHttpRequest();
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
          requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        request.timeout = config.timeout;
        function onloadend() {
          if (!request) {
            return;
          }
          var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
          var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
          var response = {
            data: responseData,
            status: request.status,
            statusText: request.statusText,
            headers: responseHeaders,
            config,
            request
          };
          settle(function _resolve(value) {
            resolve(value);
            done();
          }, function _reject(err) {
            reject(err);
            done();
          }, response);
          request = null;
        }
        if ("onloadend" in request) {
          request.onloadend = onloadend;
        } else {
          request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
              return;
            }
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
              return;
            }
            setTimeout(onloadend);
          };
        }
        request.onabort = function handleAbort() {
          if (!request) {
            return;
          }
          reject(createError("Request aborted", config, "ECONNABORTED", request));
          request = null;
        };
        request.onerror = function handleError() {
          reject(createError("Network Error", config, null, request));
          request = null;
        };
        request.ontimeout = function handleTimeout() {
          var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
          var transitional = config.transitional || defaults.transitional;
          if (config.timeoutErrorMessage) {
            timeoutErrorMessage = config.timeoutErrorMessage;
          }
          reject(createError(
            timeoutErrorMessage,
            config,
            transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
            request
          ));
          request = null;
        };
        if (utils.isStandardBrowserEnv()) {
          var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
          if (xsrfValue) {
            requestHeaders[config.xsrfHeaderName] = xsrfValue;
          }
        }
        if ("setRequestHeader" in request) {
          utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
              delete requestHeaders[key];
            } else {
              request.setRequestHeader(key, val);
            }
          });
        }
        if (!utils.isUndefined(config.withCredentials)) {
          request.withCredentials = !!config.withCredentials;
        }
        if (responseType && responseType !== "json") {
          request.responseType = config.responseType;
        }
        if (typeof config.onDownloadProgress === "function") {
          request.addEventListener("progress", config.onDownloadProgress);
        }
        if (typeof config.onUploadProgress === "function" && request.upload) {
          request.upload.addEventListener("progress", config.onUploadProgress);
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (!request) {
              return;
            }
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
            request.abort();
            request = null;
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (!requestData) {
          requestData = null;
        }
        request.send(requestData);
      });
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream, stream && stream.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util = require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module2) {
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
        }
        if (typeof debug !== "function") {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module2) {
    var url = require("url");
    var URL = url.URL;
    var http = require("http");
    var https = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = /* @__PURE__ */ Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      "Redirected request failed"
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded"
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        self2._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      abortRequest(this._currentRequest);
      this.emit("abort");
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (typeof data === "function") {
        callback = data;
        data = encoding = null;
      } else if (typeof encoding === "function") {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
          self2._timeout = null;
        }
        self2.removeListener("abort", clearTimer);
        self2.removeListener("error", clearTimer);
        self2.removeListener("response", clearTimer);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!self2.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.substr(0, protocol.length - 1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      this._currentUrl = url.format(this._options);
      request._redirectable = this;
      for (var e = 0; e < events.length; e++) {
        request.on(events[e], eventHandlers[events[e]]);
      }
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          if (request === self2._currentRequest) {
            if (error) {
              self2.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
        return;
      }
      abortRequest(this._currentRequest);
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
      }
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
      var currentUrlParts = url.parse(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, { host: currentHost }));
      var redirectUrl;
      try {
        redirectUrl = url.resolve(currentUrl, location);
      } catch (cause) {
        this.emit("error", new RedirectionError(cause));
        return;
      }
      debug("redirecting to", redirectUrl);
      this._isRedirect = true;
      var redirectUrlParts = url.parse(redirectUrl);
      Object.assign(this._options, redirectUrlParts);
      if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
        removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
      }
      if (typeof this._options.beforeRedirect === "function") {
        var responseDetails = { headers: response.headers };
        try {
          this._options.beforeRedirect.call(null, this._options, responseDetails);
        } catch (err) {
          this.emit("error", err);
          return;
        }
        this._sanitizeOptions(this._options);
      }
      try {
        this._performRequest();
      } catch (cause) {
        this.emit("error", new RedirectionError(cause));
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (typeof input === "string") {
            var urlStr = input;
            try {
              input = urlToOptions(new URL(urlStr));
            } catch (err) {
              input = url.parse(urlStr);
            }
          } else if (URL && input instanceof URL) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = { protocol };
          }
          if (typeof options === "function") {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports2;
    }
    function noop() {
    }
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    function createErrorType(code, defaultMessage) {
      function CustomError(cause) {
        Error.captureStackTrace(this, this.constructor);
        if (!cause) {
          this.message = defaultMessage;
        } else {
          this.message = defaultMessage + ": " + cause.message;
          this.cause = cause;
        }
      }
      CustomError.prototype = new Error();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      CustomError.prototype.code = code;
      return CustomError;
    }
    function abortRequest(request) {
      for (var e = 0; e < events.length; e++) {
        request.removeListener(events[e], eventHandlers[events[e]]);
      }
      request.on("error", noop);
      request.abort();
    }
    function isSubdomain(subdomain, domain) {
      const dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }
    module2.exports = wrap({ http, https });
    module2.exports.wrap = wrap;
  }
});

// node_modules/axios/lib/env/data.js
var require_data = __commonJS({
  "node_modules/axios/lib/env/data.js"(exports, module2) {
    module2.exports = {
      "version": "0.24.0"
    };
  }
});

// node_modules/axios/lib/adapters/http.js
var require_http = __commonJS({
  "node_modules/axios/lib/adapters/http.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var settle = require_settle();
    var buildFullPath = require_buildFullPath();
    var buildURL = require_buildURL();
    var http = require("http");
    var https = require("https");
    var httpFollow = require_follow_redirects().http;
    var httpsFollow = require_follow_redirects().https;
    var url = require("url");
    var zlib = require("zlib");
    var VERSION = require_data().version;
    var createError = require_createError();
    var enhanceError = require_enhanceError();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    var isHttps = /https:?/;
    function setProxy(options, proxy, location) {
      options.hostname = proxy.host;
      options.host = proxy.host;
      options.port = proxy.port;
      options.path = location;
      if (proxy.auth) {
        var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
        options.headers["Proxy-Authorization"] = "Basic " + base64;
      }
      options.beforeRedirect = function beforeRedirect(redirection) {
        redirection.headers.host = redirection.host;
        setProxy(redirection, proxy, redirection.href);
      };
    }
    module2.exports = function httpAdapter(config) {
      return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
        var onCanceled;
        function done() {
          if (config.cancelToken) {
            config.cancelToken.unsubscribe(onCanceled);
          }
          if (config.signal) {
            config.signal.removeEventListener("abort", onCanceled);
          }
        }
        var resolve = function resolve2(value) {
          done();
          resolvePromise(value);
        };
        var reject = function reject2(value) {
          done();
          rejectPromise(value);
        };
        var data = config.data;
        var headers = config.headers;
        var headerNames = {};
        Object.keys(headers).forEach(function storeLowerName(name) {
          headerNames[name.toLowerCase()] = name;
        });
        if ("user-agent" in headerNames) {
          if (!headers[headerNames["user-agent"]]) {
            delete headers[headerNames["user-agent"]];
          }
        } else {
          headers["User-Agent"] = "axios/" + VERSION;
        }
        if (data && !utils.isStream(data)) {
          if (Buffer.isBuffer(data)) {
          } else if (utils.isArrayBuffer(data)) {
            data = Buffer.from(new Uint8Array(data));
          } else if (utils.isString(data)) {
            data = Buffer.from(data, "utf-8");
          } else {
            return reject(createError(
              "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
              config
            ));
          }
          if (!headerNames["content-length"]) {
            headers["Content-Length"] = data.length;
          }
        }
        var auth = void 0;
        if (config.auth) {
          var username = config.auth.username || "";
          var password = config.auth.password || "";
          auth = username + ":" + password;
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        var parsed = url.parse(fullPath);
        var protocol = parsed.protocol || "http:";
        if (!auth && parsed.auth) {
          var urlAuth = parsed.auth.split(":");
          var urlUsername = urlAuth[0] || "";
          var urlPassword = urlAuth[1] || "";
          auth = urlUsername + ":" + urlPassword;
        }
        if (auth && headerNames.authorization) {
          delete headers[headerNames.authorization];
        }
        var isHttpsRequest = isHttps.test(protocol);
        var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        var options = {
          path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
          method: config.method.toUpperCase(),
          headers,
          agent,
          agents: { http: config.httpAgent, https: config.httpsAgent },
          auth
        };
        if (config.socketPath) {
          options.socketPath = config.socketPath;
        } else {
          options.hostname = parsed.hostname;
          options.port = parsed.port;
        }
        var proxy = config.proxy;
        if (!proxy && proxy !== false) {
          var proxyEnv = protocol.slice(0, -1) + "_proxy";
          var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
          if (proxyUrl) {
            var parsedProxyUrl = url.parse(proxyUrl);
            var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
            var shouldProxy = true;
            if (noProxyEnv) {
              var noProxy = noProxyEnv.split(",").map(function trim(s) {
                return s.trim();
              });
              shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                if (!proxyElement) {
                  return false;
                }
                if (proxyElement === "*") {
                  return true;
                }
                if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                  return true;
                }
                return parsed.hostname === proxyElement;
              });
            }
            if (shouldProxy) {
              proxy = {
                host: parsedProxyUrl.hostname,
                port: parsedProxyUrl.port,
                protocol: parsedProxyUrl.protocol
              };
              if (parsedProxyUrl.auth) {
                var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                proxy.auth = {
                  username: proxyUrlAuth[0],
                  password: proxyUrlAuth[1]
                };
              }
            }
          }
        }
        if (proxy) {
          options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
          setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
        }
        var transport;
        var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
        if (config.transport) {
          transport = config.transport;
        } else if (config.maxRedirects === 0) {
          transport = isHttpsProxy ? https : http;
        } else {
          if (config.maxRedirects) {
            options.maxRedirects = config.maxRedirects;
          }
          transport = isHttpsProxy ? httpsFollow : httpFollow;
        }
        if (config.maxBodyLength > -1) {
          options.maxBodyLength = config.maxBodyLength;
        }
        if (config.insecureHTTPParser) {
          options.insecureHTTPParser = config.insecureHTTPParser;
        }
        var req = transport.request(options, function handleResponse(res) {
          if (req.aborted)
            return;
          var stream = res;
          var lastRequest = res.req || req;
          if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) {
            switch (res.headers["content-encoding"]) {
              case "gzip":
              case "compress":
              case "deflate":
                stream = stream.pipe(zlib.createUnzip());
                delete res.headers["content-encoding"];
                break;
            }
          }
          var response = {
            status: res.statusCode,
            statusText: res.statusMessage,
            headers: res.headers,
            config,
            request: lastRequest
          };
          if (config.responseType === "stream") {
            response.data = stream;
            settle(resolve, reject, response);
          } else {
            var responseBuffer = [];
            var totalResponseBytes = 0;
            stream.on("data", function handleStreamData(chunk) {
              responseBuffer.push(chunk);
              totalResponseBytes += chunk.length;
              if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                stream.destroy();
                reject(createError(
                  "maxContentLength size of " + config.maxContentLength + " exceeded",
                  config,
                  null,
                  lastRequest
                ));
              }
            });
            stream.on("error", function handleStreamError(err) {
              if (req.aborted)
                return;
              reject(enhanceError(err, config, null, lastRequest));
            });
            stream.on("end", function handleStreamEnd() {
              var responseData = Buffer.concat(responseBuffer);
              if (config.responseType !== "arraybuffer") {
                responseData = responseData.toString(config.responseEncoding);
                if (!config.responseEncoding || config.responseEncoding === "utf8") {
                  responseData = utils.stripBOM(responseData);
                }
              }
              response.data = responseData;
              settle(resolve, reject, response);
            });
          }
        });
        req.on("error", function handleRequestError(err) {
          if (req.aborted && err.code !== "ERR_FR_TOO_MANY_REDIRECTS")
            return;
          reject(enhanceError(err, config, null, req));
        });
        if (config.timeout) {
          var timeout = parseInt(config.timeout, 10);
          if (isNaN(timeout)) {
            reject(createError(
              "error trying to parse `config.timeout` to int",
              config,
              "ERR_PARSE_TIMEOUT",
              req
            ));
            return;
          }
          req.setTimeout(timeout, function handleRequestTimeout() {
            req.abort();
            var transitional = config.transitional || defaults.transitional;
            reject(createError(
              "timeout of " + timeout + "ms exceeded",
              config,
              transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
              req
            ));
          });
        }
        if (config.cancelToken || config.signal) {
          onCanceled = function(cancel) {
            if (req.aborted)
              return;
            req.abort();
            reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
          };
          config.cancelToken && config.cancelToken.subscribe(onCanceled);
          if (config.signal) {
            config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
          }
        }
        if (utils.isStream(data)) {
          data.on("error", function handleStreamError(err) {
            reject(enhanceError(err, config, null, req));
          }).pipe(req);
        } else {
          req.end(data);
        }
      });
    };
  }
});

// node_modules/axios/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/axios/lib/defaults.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var normalizeHeaderName = require_normalizeHeaderName();
    var enhanceError = require_enhanceError();
    var DEFAULT_CONTENT_TYPE = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    function setContentTypeIfUnset(headers, value) {
      if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
        headers["Content-Type"] = value;
      }
    }
    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== "undefined") {
        adapter = require_xhr();
      } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
        adapter = require_http();
      }
      return adapter;
    }
    function stringifySafely(rawValue, parser, encoder) {
      if (utils.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils.trim(rawValue);
        } catch (e) {
          if (e.name !== "SyntaxError") {
            throw e;
          }
        }
      }
      return (encoder || JSON.stringify)(rawValue);
    }
    var defaults = {
      transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
      },
      adapter: getDefaultAdapter(),
      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, "Accept");
        normalizeHeaderName(headers, "Content-Type");
        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
          return data;
        }
        if (utils.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
          return data.toString();
        }
        if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
          setContentTypeIfUnset(headers, "application/json");
          return stringifySafely(data);
        }
        return data;
      }],
      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
        if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === "SyntaxError") {
                throw enhanceError(e, this, "E_JSON_PARSE");
              }
              throw e;
            }
          }
        }
        return data;
      }],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      headers: {
        common: {
          "Accept": "application/json, text/plain, */*"
        }
      }
    };
    utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
      defaults.headers[method] = {};
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
    });
    module2.exports = defaults;
  }
});

// node_modules/axios/lib/core/transformData.js
var require_transformData = __commonJS({
  "node_modules/axios/lib/core/transformData.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var defaults = require_defaults();
    module2.exports = function transformData(data, headers, fns) {
      var context = this || defaults;
      utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });
      return data;
    };
  }
});

// node_modules/axios/lib/cancel/isCancel.js
var require_isCancel = __commonJS({
  "node_modules/axios/lib/cancel/isCancel.js"(exports, module2) {
    "use strict";
    module2.exports = function isCancel(value) {
      return !!(value && value.__CANCEL__);
    };
  }
});

// node_modules/axios/lib/core/dispatchRequest.js
var require_dispatchRequest = __commonJS({
  "node_modules/axios/lib/core/dispatchRequest.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var transformData = require_transformData();
    var isCancel = require_isCancel();
    var defaults = require_defaults();
    var Cancel = require_Cancel();
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }
      if (config.signal && config.signal.aborted) {
        throw new Cancel("canceled");
      }
    }
    module2.exports = function dispatchRequest(config) {
      throwIfCancellationRequested(config);
      config.headers = config.headers || {};
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );
      config.headers = utils.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );
      utils.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );
      var adapter = config.adapter || defaults.adapter;
      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );
        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }
        return Promise.reject(reason);
      });
    };
  }
});

// node_modules/axios/lib/core/mergeConfig.js
var require_mergeConfig = __commonJS({
  "node_modules/axios/lib/core/mergeConfig.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    module2.exports = function mergeConfig(config1, config2) {
      config2 = config2 || {};
      var config = {};
      function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
          return utils.merge(target, source);
        } else if (utils.isPlainObject(source)) {
          return utils.merge({}, source);
        } else if (utils.isArray(source)) {
          return source.slice();
        }
        return source;
      }
      function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        }
      }
      function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) {
          return getMergedValue(void 0, config2[prop]);
        } else if (!utils.isUndefined(config1[prop])) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(void 0, config1[prop]);
        }
      }
      var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
      };
      utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
      });
      return config;
    };
  }
});

// node_modules/axios/lib/helpers/validator.js
var require_validator = __commonJS({
  "node_modules/axios/lib/helpers/validator.js"(exports, module2) {
    "use strict";
    var VERSION = require_data().version;
    var validators = {};
    ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
      validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
      };
    });
    var deprecatedWarnings = {};
    validators.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
      }
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        }
        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          console.warn(
            formatMessage(
              opt,
              " has been deprecated since v" + version + " and will be removed in the near future"
            )
          );
        }
        return validator ? validator(value, opt, opts) : true;
      };
    };
    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== "object") {
        throw new TypeError("options must be an object");
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === void 0 || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError("option " + opt + " must be " + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error("Unknown option " + opt);
        }
      }
    }
    module2.exports = {
      assertOptions,
      validators
    };
  }
});

// node_modules/axios/lib/core/Axios.js
var require_Axios = __commonJS({
  "node_modules/axios/lib/core/Axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var buildURL = require_buildURL();
    var InterceptorManager = require_InterceptorManager();
    var dispatchRequest = require_dispatchRequest();
    var mergeConfig = require_mergeConfig();
    var validator = require_validator();
    var validators = validator.validators;
    function Axios(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    Axios.prototype.request = function request(config) {
      if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
      } else {
        config = config || {};
      }
      config = mergeConfig(this.defaults, config);
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = "get";
      }
      var transitional = config.transitional;
      if (transitional !== void 0) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
          return;
        }
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });
      var promise;
      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, void 0];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }
        return promise;
      }
      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }
      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }
      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }
      return promise;
    };
    Axios.prototype.getUri = function getUri(config) {
      config = mergeConfig(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
    };
    utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
      Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data: (config || {}).data
        }));
      };
    });
    utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
      Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
          method,
          url,
          data
        }));
      };
    });
    module2.exports = Axios;
  }
});

// node_modules/axios/lib/cancel/CancelToken.js
var require_CancelToken = __commonJS({
  "node_modules/axios/lib/cancel/CancelToken.js"(exports, module2) {
    "use strict";
    var Cancel = require_Cancel();
    function CancelToken(executor) {
      if (typeof executor !== "function") {
        throw new TypeError("executor must be a function.");
      }
      var resolvePromise;
      this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
      });
      var token = this;
      this.promise.then(function(cancel) {
        if (!token._listeners)
          return;
        var i;
        var l = token._listeners.length;
        for (i = 0; i < l; i++) {
          token._listeners[i](cancel);
        }
        token._listeners = null;
      });
      this.promise.then = function(onfulfilled) {
        var _resolve;
        var promise = new Promise(function(resolve) {
          token.subscribe(resolve);
          _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
          token.unsubscribe(_resolve);
        };
        return promise;
      };
      executor(function cancel(message) {
        if (token.reason) {
          return;
        }
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
      });
    }
    CancelToken.prototype.throwIfRequested = function throwIfRequested() {
      if (this.reason) {
        throw this.reason;
      }
    };
    CancelToken.prototype.subscribe = function subscribe(listener) {
      if (this.reason) {
        listener(this.reason);
        return;
      }
      if (this._listeners) {
        this._listeners.push(listener);
      } else {
        this._listeners = [listener];
      }
    };
    CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
      if (!this._listeners) {
        return;
      }
      var index = this._listeners.indexOf(listener);
      if (index !== -1) {
        this._listeners.splice(index, 1);
      }
    };
    CancelToken.source = function source() {
      var cancel;
      var token = new CancelToken(function executor(c) {
        cancel = c;
      });
      return {
        token,
        cancel
      };
    };
    module2.exports = CancelToken;
  }
});

// node_modules/axios/lib/helpers/spread.js
var require_spread = __commonJS({
  "node_modules/axios/lib/helpers/spread.js"(exports, module2) {
    "use strict";
    module2.exports = function spread(callback) {
      return function wrap(arr) {
        return callback.apply(null, arr);
      };
    };
  }
});

// node_modules/axios/lib/helpers/isAxiosError.js
var require_isAxiosError = __commonJS({
  "node_modules/axios/lib/helpers/isAxiosError.js"(exports, module2) {
    "use strict";
    module2.exports = function isAxiosError(payload) {
      return typeof payload === "object" && payload.isAxiosError === true;
    };
  }
});

// node_modules/axios/lib/axios.js
var require_axios = __commonJS({
  "node_modules/axios/lib/axios.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var bind = require_bind();
    var Axios = require_Axios();
    var mergeConfig = require_mergeConfig();
    var defaults = require_defaults();
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);
      utils.extend(instance, Axios.prototype, context);
      utils.extend(instance, context);
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };
      return instance;
    }
    var axios11 = createInstance(defaults);
    axios11.Axios = Axios;
    axios11.Cancel = require_Cancel();
    axios11.CancelToken = require_CancelToken();
    axios11.isCancel = require_isCancel();
    axios11.VERSION = require_data().version;
    axios11.all = function all(promises) {
      return Promise.all(promises);
    };
    axios11.spread = require_spread();
    axios11.isAxiosError = require_isAxiosError();
    module2.exports = axios11;
    module2.exports.default = axios11;
  }
});

// node_modules/axios/index.js
var require_axios2 = __commonJS({
  "node_modules/axios/index.js"(exports, module2) {
    module2.exports = require_axios();
  }
});

// node_modules/crypto-js/core.js
var require_core = __commonJS({
  "node_modules/crypto-js/core.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof require === "function") {
          try {
            crypto = require("crypto");
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = function() {
          return {
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            init: function() {
            },
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  }
});

// node_modules/crypto-js/x64-core.js
var require_x64_core = __commonJS({
  "node_modules/crypto-js/x64-core.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        var X64Word = C_x64.Word = Base.extend({
          init: function(high, low) {
            this.high = high;
            this.low = low;
          }
        });
        var X64WordArray = C_x64.WordArray = Base.extend({
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
          },
          toX32: function() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          clone: function() {
            var clone = Base.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }
            return clone;
          }
        });
      })();
      return CryptoJS;
    });
  }
});

// node_modules/crypto-js/lib-typedarrays.js
var require_lib_typedarrays = __commonJS({
  "node_modules/crypto-js/lib-typedarrays.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  }
});

// node_modules/crypto-js/enc-utf16.js
var require_enc_utf16 = __commonJS({
  "node_modules/crypto-js/enc-utf16.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        C_enc.Utf16LE = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS.enc.Utf16;
    });
  }
});

// node_modules/crypto-js/enc-base64.js
var require_enc_base64 = __commonJS({
  "node_modules/crypto-js/enc-base64.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  }
});

// node_modules/crypto-js/enc-base64url.js
var require_enc_base64url = __commonJS({
  "node_modules/crypto-js/enc-base64url.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64url = C_enc.Base64url = {
          stringify: function(wordArray, urlSafe = true) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          parse: function(base64Str, urlSafe = true) {
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  }
});

// node_modules/crypto-js/md5.js
var require_md5 = __commonJS({
  "node_modules/crypto-js/md5.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  }
});

// node_modules/crypto-js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/crypto-js/sha1.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  }
});

// node_modules/crypto-js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/crypto-js/sha256.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return (n2 - (n2 | 0)) * 4294967296 | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H2[0] = H2[0] + a | 0;
            H2[1] = H2[1] + b | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e | 0;
            H2[5] = H2[5] + f | 0;
            H2[6] = H2[6] + g | 0;
            H2[7] = H2[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  }
});

// node_modules/crypto-js/sha224.js
var require_sha224 = __commonJS({
  "node_modules/crypto-js/sha224.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_sha256());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      return CryptoJS.SHA224;
    });
  }
});

// node_modules/crypto-js/sha512.js
var require_sha512 = __commonJS({
  "node_modules/crypto-js/sha512.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [
          X64Word_create(1116352408, 3609767458),
          X64Word_create(1899447441, 602891725),
          X64Word_create(3049323471, 3964484399),
          X64Word_create(3921009573, 2173295548),
          X64Word_create(961987163, 4081628472),
          X64Word_create(1508970993, 3053834265),
          X64Word_create(2453635748, 2937671579),
          X64Word_create(2870763221, 3664609560),
          X64Word_create(3624381080, 2734883394),
          X64Word_create(310598401, 1164996542),
          X64Word_create(607225278, 1323610764),
          X64Word_create(1426881987, 3590304994),
          X64Word_create(1925078388, 4068182383),
          X64Word_create(2162078206, 991336113),
          X64Word_create(2614888103, 633803317),
          X64Word_create(3248222580, 3479774868),
          X64Word_create(3835390401, 2666613458),
          X64Word_create(4022224774, 944711139),
          X64Word_create(264347078, 2341262773),
          X64Word_create(604807628, 2007800933),
          X64Word_create(770255983, 1495990901),
          X64Word_create(1249150122, 1856431235),
          X64Word_create(1555081692, 3175218132),
          X64Word_create(1996064986, 2198950837),
          X64Word_create(2554220882, 3999719339),
          X64Word_create(2821834349, 766784016),
          X64Word_create(2952996808, 2566594879),
          X64Word_create(3210313671, 3203337956),
          X64Word_create(3336571891, 1034457026),
          X64Word_create(3584528711, 2466948901),
          X64Word_create(113926993, 3758326383),
          X64Word_create(338241895, 168717936),
          X64Word_create(666307205, 1188179964),
          X64Word_create(773529912, 1546045734),
          X64Word_create(1294757372, 1522805485),
          X64Word_create(1396182291, 2643833823),
          X64Word_create(1695183700, 2343527390),
          X64Word_create(1986661051, 1014477480),
          X64Word_create(2177026350, 1206759142),
          X64Word_create(2456956037, 344077627),
          X64Word_create(2730485921, 1290863460),
          X64Word_create(2820302411, 3158454273),
          X64Word_create(3259730800, 3505952657),
          X64Word_create(3345764771, 106217008),
          X64Word_create(3516065817, 3606008344),
          X64Word_create(3600352804, 1432725776),
          X64Word_create(4094571909, 1467031594),
          X64Word_create(275423344, 851169720),
          X64Word_create(430227734, 3100823752),
          X64Word_create(506948616, 1363258195),
          X64Word_create(659060556, 3750685593),
          X64Word_create(883997877, 3785050280),
          X64Word_create(958139571, 3318307427),
          X64Word_create(1322822218, 3812723403),
          X64Word_create(1537002063, 2003034995),
          X64Word_create(1747873779, 3602036899),
          X64Word_create(1955562222, 1575990012),
          X64Word_create(2024104815, 1125592928),
          X64Word_create(2227730452, 2716904306),
          X64Word_create(2361852424, 442776044),
          X64Word_create(2428436474, 593698344),
          X64Word_create(2756734187, 3733110249),
          X64Word_create(3204031479, 2999351573),
          X64Word_create(3329325298, 3815920427),
          X64Word_create(3391569614, 3928383900),
          X64Word_create(3515267271, 566280711),
          X64Word_create(3940187606, 3454069534),
          X64Word_create(4118630271, 4000239992),
          X64Word_create(116418474, 1914138554),
          X64Word_create(174292421, 2731055270),
          X64Word_create(289380356, 3203993006),
          X64Word_create(460393269, 320620315),
          X64Word_create(685471733, 587496836),
          X64Word_create(852142971, 1086792851),
          X64Word_create(1017036298, 365543100),
          X64Word_create(1126000580, 2618297676),
          X64Word_create(1288033470, 3409855158),
          X64Word_create(1501505948, 4234509866),
          X64Word_create(1607167915, 987167468),
          X64Word_create(1816402316, 1246189591)
        ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(1779033703, 4089235720),
              new X64Word.init(3144134277, 2227873595),
              new X64Word.init(1013904242, 4271175723),
              new X64Word.init(2773480762, 1595750129),
              new X64Word.init(1359893119, 2917565137),
              new X64Word.init(2600822924, 725511199),
              new X64Word.init(528734635, 4215389547),
              new X64Word.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = M[offset + i * 2] | 0;
                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil = Wil + gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil = Wil + Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 1024 / 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS.SHA512;
    });
  }
});

// node_modules/crypto-js/sha384.js
var require_sha384 = __commonJS({
  "node_modules/crypto-js/sha384.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_x64_core(), require_sha512());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./sha512"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(3418070365, 3238371032),
              new X64Word.init(1654270250, 914150663),
              new X64Word.init(2438529370, 812702999),
              new X64Word.init(355462360, 4144912697),
              new X64Word.init(1731405415, 4290775857),
              new X64Word.init(2394180231, 1750603025),
              new X64Word.init(3675008525, 1694076839),
              new X64Word.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS.SHA384;
    });
  }
});

// node_modules/crypto-js/sha3.js
var require_sha3 = __commonJS({
  "node_modules/crypto-js/sha3.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          }
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (LFSR & 1) {
                var bitPosition = (1 << j) - 1;
                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
              }
              if (LFSR & 128) {
                LFSR = LFSR << 1 ^ 113;
              } else {
                LFSR <<= 1;
              }
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS.SHA3;
    });
  }
});

// node_modules/crypto-js/ripemd160.js
var require_ripemd160 = __commonJS({
  "node_modules/crypto-js/ripemd160.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]);
        var _zr = WordArray.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]);
        var _sl = WordArray.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]);
        var _sr = WordArray.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]);
        var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                t += f5(bl, cl, dl) + hl[4];
              }
              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                t += f1(br, cr, dr) + hr[4];
              }
              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);
      return CryptoJS.RIPEMD160;
    });
  }
});

// node_modules/crypto-js/hmac.js
var require_hmac = __commonJS({
  "node_modules/crypto-js/hmac.js"(exports, module2) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
  }
});

// node_modules/crypto-js/pbkdf2.js
var require_pbkdf2 = __commonJS({
  "node_modules/crypto-js/pbkdf2.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_sha1(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA1 = C_algo.SHA1;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA1,
            iterations: 1
          }),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([1]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) {
                  blockWords[j] ^= intermediateWords[j];
                }
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.PBKDF2;
    });
  }
});

// node_modules/crypto-js/evpkdf.js
var require_evpkdf = __commonJS({
  "node_modules/crypto-js/evpkdf.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_sha1(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
          }),
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.EvpKDF;
    });
  }
});

// node_modules/crypto-js/cipher-core.js
var require_cipher_core = __commonJS({
  "node_modules/crypto-js/cipher-core.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_evpkdf());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./evpkdf"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.lib.Cipher || function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          cfg: Base.extend(),
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          finalize: function(dataUpdate) {
            if (dataUpdate) {
              this._append(dataUpdate);
            }
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function() {
            function selectCipherStrategy(key) {
              if (typeof key == "string") {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC2 = BlockCipherMode.extend();
          CBC2.Encryptor = CBC2.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC2.Decryptor = CBC2.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined2;
            } else {
              block = this._prevBlock;
            }
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }
          return CBC2;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              modeCreator = mode.createEncryptor;
            } else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) {
              this._mode.init(this, iv && iv.words);
            } else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          init: function(cipherParams) {
            this.mixIn(cipherParams);
          },
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) {
              wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
            } else {
              wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
          },
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({ ciphertext, salt });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext,
              key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          _parse: function(ciphertext, format) {
            if (typeof ciphertext == "string") {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          execute: function(password, keySize, ivSize, salt) {
            if (!salt) {
              salt = WordArray.random(64 / 8);
            }
            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            return CipherParams.create({ key, iv, salt });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  }
});

// node_modules/crypto-js/mode-cfb.js
var require_mode_cfb = __commonJS({
  "node_modules/crypto-js/mode-cfb.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else {
            keystream = this._prevBlock;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }
        return CFB;
      }();
      return CryptoJS.mode.CFB;
    });
  }
});

// node_modules/crypto-js/mode-ctr.js
var require_mode_ctr = __commonJS({
  "node_modules/crypto-js/mode-ctr.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS.mode.CTR;
    });
  }
});

// node_modules/crypto-js/mode-ctr-gladman.js
var require_mode_ctr_gladman = __commonJS({
  "node_modules/crypto-js/mode-ctr-gladman.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if ((word >> 24 & 255) === 255) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = word & 255;
            if (b1 === 255) {
              b1 = 0;
              if (b2 === 255) {
                b2 = 0;
                if (b3 === 255) {
                  b3 = 0;
                } else {
                  ++b3;
                }
              } else {
                ++b2;
              }
            } else {
              ++b1;
            }
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 1 << 24;
          }
          return word;
        }
        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            counter[1] = incWord(counter[1]);
          }
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS.mode.CTRGladman;
    });
  }
});

// node_modules/crypto-js/mode-ofb.js
var require_mode_ofb = __commonJS({
  "node_modules/crypto-js/mode-ofb.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS.mode.OFB;
    });
  }
});

// node_modules/crypto-js/mode-ecb.js
var require_mode_ecb = __commonJS({
  "node_modules/crypto-js/mode-ecb.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS.mode.ECB;
    });
  }
});

// node_modules/crypto-js/pad-ansix923.js
var require_pad_ansix923 = __commonJS({
  "node_modules/crypto-js/pad-ansix923.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
  }
});

// node_modules/crypto-js/pad-iso10126.js
var require_pad_iso10126 = __commonJS({
  "node_modules/crypto-js/pad-iso10126.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
  }
});

// node_modules/crypto-js/pad-iso97971.js
var require_pad_iso97971 = __commonJS({
  "node_modules/crypto-js/pad-iso97971.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
  }
});

// node_modules/crypto-js/pad-zeropadding.js
var require_pad_zeropadding = __commonJS({
  "node_modules/crypto-js/pad-zeropadding.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              data.sigBytes = i + 1;
              break;
            }
          }
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
  }
});

// node_modules/crypto-js/pad-nopadding.js
var require_pad_nopadding = __commonJS({
  "node_modules/crypto-js/pad-nopadding.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      CryptoJS.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      };
      return CryptoJS.pad.NoPadding;
    });
  }
});

// node_modules/crypto-js/format-hex.js
var require_format_hex = __commonJS({
  "node_modules/crypto-js/format-hex.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          parse: function(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({ ciphertext });
          }
        };
      })();
      return CryptoJS.format.Hex;
    });
  }
});

// node_modules/crypto-js/aes.js
var require_aes = __commonJS({
  "node_modules/crypto-js/aes.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 283;
            }
          }
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 255 ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = d[sx] * 257 ^ sx * 16843008;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })();
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = (nRounds + 1) * 4;
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                  t = t << 8 | t >>> 24;
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
              }
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
            var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
            var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
            var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS.AES;
    });
  }
});

// node_modules/crypto-js/tripledes.js
var require_tripledes = __commonJS({
  "node_modules/crypto-js/tripledes.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ];
        var PC2 = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ];
        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var SBOX_P = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ];
        var SBOX_MASK = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) {
                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            }
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS.TripleDES;
    });
  }
});

// node_modules/crypto-js/rc4.js
var require_rc4 = __commonJS({
  "node_modules/crypto-js/rc4.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) {
              S[i] = i;
            }
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS.RC4;
    });
  }
});

// node_modules/crypto-js/rabbit.js
var require_rabbit = __commonJS({
  "node_modules/crypto-js/rabbit.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
            }
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS.Rabbit;
    });
  }
});

// node_modules/crypto-js/rabbit-legacy.js
var require_rabbit_legacy = __commonJS({
  "node_modules/crypto-js/rabbit-legacy.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS.RabbitLegacy;
    });
  }
});

// node_modules/crypto-js/index.js
var require_crypto_js = __commonJS({
  "node_modules/crypto-js/index.js"(exports, module2) {
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module2.exports = exports = factory(require_core(), require_x64_core(), require_lib_typedarrays(), require_enc_utf16(), require_enc_base64(), require_enc_base64url(), require_md5(), require_sha1(), require_sha256(), require_sha224(), require_sha512(), require_sha384(), require_sha3(), require_ripemd160(), require_hmac(), require_pbkdf2(), require_evpkdf(), require_cipher_core(), require_mode_cfb(), require_mode_ctr(), require_mode_ctr_gladman(), require_mode_ofb(), require_mode_ecb(), require_pad_ansix923(), require_pad_iso10126(), require_pad_iso97971(), require_pad_zeropadding(), require_pad_nopadding(), require_format_hex(), require_aes(), require_tripledes(), require_rc4(), require_rabbit(), require_rabbit_legacy());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
      } else {
        root.CryptoJS = factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS) {
      return CryptoJS;
    });
  }
});

// node_modules/delayed-stream/lib/delayed_stream.js
var require_delayed_stream = __commonJS({
  "node_modules/delayed-stream/lib/delayed_stream.js"(exports, module2) {
    var Stream = require("stream").Stream;
    var util = require("util");
    module2.exports = DelayedStream;
    function DelayedStream() {
      this.source = null;
      this.dataSize = 0;
      this.maxDataSize = 1024 * 1024;
      this.pauseStream = true;
      this._maxDataSizeExceeded = false;
      this._released = false;
      this._bufferedEvents = [];
    }
    util.inherits(DelayedStream, Stream);
    DelayedStream.create = function(source, options) {
      var delayedStream = new this();
      options = options || {};
      for (var option in options) {
        delayedStream[option] = options[option];
      }
      delayedStream.source = source;
      var realEmit = source.emit;
      source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
      };
      source.on("error", function() {
      });
      if (delayedStream.pauseStream) {
        source.pause();
      }
      return delayedStream;
    };
    Object.defineProperty(DelayedStream.prototype, "readable", {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.source.readable;
      }
    });
    DelayedStream.prototype.setEncoding = function() {
      return this.source.setEncoding.apply(this.source, arguments);
    };
    DelayedStream.prototype.resume = function() {
      if (!this._released) {
        this.release();
      }
      this.source.resume();
    };
    DelayedStream.prototype.pause = function() {
      this.source.pause();
    };
    DelayedStream.prototype.release = function() {
      this._released = true;
      this._bufferedEvents.forEach(function(args) {
        this.emit.apply(this, args);
      }.bind(this));
      this._bufferedEvents = [];
    };
    DelayedStream.prototype.pipe = function() {
      var r = Stream.prototype.pipe.apply(this, arguments);
      this.resume();
      return r;
    };
    DelayedStream.prototype._handleEmit = function(args) {
      if (this._released) {
        this.emit.apply(this, args);
        return;
      }
      if (args[0] === "data") {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
      }
      this._bufferedEvents.push(args);
    };
    DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
      if (this._maxDataSizeExceeded) {
        return;
      }
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      this._maxDataSizeExceeded = true;
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this.emit("error", new Error(message));
    };
  }
});

// node_modules/combined-stream/lib/combined_stream.js
var require_combined_stream = __commonJS({
  "node_modules/combined-stream/lib/combined_stream.js"(exports, module2) {
    var util = require("util");
    var Stream = require("stream").Stream;
    var DelayedStream = require_delayed_stream();
    module2.exports = CombinedStream;
    function CombinedStream() {
      this.writable = false;
      this.readable = true;
      this.dataSize = 0;
      this.maxDataSize = 2 * 1024 * 1024;
      this.pauseStreams = true;
      this._released = false;
      this._streams = [];
      this._currentStream = null;
      this._insideLoop = false;
      this._pendingNext = false;
    }
    util.inherits(CombinedStream, Stream);
    CombinedStream.create = function(options) {
      var combinedStream = new this();
      options = options || {};
      for (var option in options) {
        combinedStream[option] = options[option];
      }
      return combinedStream;
    };
    CombinedStream.isStreamLike = function(stream) {
      return typeof stream !== "function" && typeof stream !== "string" && typeof stream !== "boolean" && typeof stream !== "number" && !Buffer.isBuffer(stream);
    };
    CombinedStream.prototype.append = function(stream) {
      var isStreamLike = CombinedStream.isStreamLike(stream);
      if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
          var newStream = DelayedStream.create(stream, {
            maxDataSize: Infinity,
            pauseStream: this.pauseStreams
          });
          stream.on("data", this._checkDataSize.bind(this));
          stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
          stream.pause();
        }
      }
      this._streams.push(stream);
      return this;
    };
    CombinedStream.prototype.pipe = function(dest, options) {
      Stream.prototype.pipe.call(this, dest, options);
      this.resume();
      return dest;
    };
    CombinedStream.prototype._getNext = function() {
      this._currentStream = null;
      if (this._insideLoop) {
        this._pendingNext = true;
        return;
      }
      this._insideLoop = true;
      try {
        do {
          this._pendingNext = false;
          this._realGetNext();
        } while (this._pendingNext);
      } finally {
        this._insideLoop = false;
      }
    };
    CombinedStream.prototype._realGetNext = function() {
      var stream = this._streams.shift();
      if (typeof stream == "undefined") {
        this.end();
        return;
      }
      if (typeof stream !== "function") {
        this._pipeNext(stream);
        return;
      }
      var getStream = stream;
      getStream(function(stream2) {
        var isStreamLike = CombinedStream.isStreamLike(stream2);
        if (isStreamLike) {
          stream2.on("data", this._checkDataSize.bind(this));
          this._handleErrors(stream2);
        }
        this._pipeNext(stream2);
      }.bind(this));
    };
    CombinedStream.prototype._pipeNext = function(stream) {
      this._currentStream = stream;
      var isStreamLike = CombinedStream.isStreamLike(stream);
      if (isStreamLike) {
        stream.on("end", this._getNext.bind(this));
        stream.pipe(this, { end: false });
        return;
      }
      var value = stream;
      this.write(value);
      this._getNext();
    };
    CombinedStream.prototype._handleErrors = function(stream) {
      var self2 = this;
      stream.on("error", function(err) {
        self2._emitError(err);
      });
    };
    CombinedStream.prototype.write = function(data) {
      this.emit("data", data);
    };
    CombinedStream.prototype.pause = function() {
      if (!this.pauseStreams) {
        return;
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function")
        this._currentStream.pause();
      this.emit("pause");
    };
    CombinedStream.prototype.resume = function() {
      if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function")
        this._currentStream.resume();
      this.emit("resume");
    };
    CombinedStream.prototype.end = function() {
      this._reset();
      this.emit("end");
    };
    CombinedStream.prototype.destroy = function() {
      this._reset();
      this.emit("close");
    };
    CombinedStream.prototype._reset = function() {
      this.writable = false;
      this._streams = [];
      this._currentStream = null;
    };
    CombinedStream.prototype._checkDataSize = function() {
      this._updateDataSize();
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this._emitError(new Error(message));
    };
    CombinedStream.prototype._updateDataSize = function() {
      this.dataSize = 0;
      var self2 = this;
      this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
          return;
        }
        self2.dataSize += stream.dataSize;
      });
      if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
      }
    };
    CombinedStream.prototype._emitError = function(err) {
      this._reset();
      this.emit("error", err);
    };
  }
});

// node_modules/mime-db/db.json
var require_db = __commonJS({
  "node_modules/mime-db/db.json"(exports, module2) {
    module2.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: true
      },
      "application/3gpphal+json": {
        source: "iana",
        compressible: true
      },
      "application/3gpphalforms+json": {
        source: "iana",
        compressible: true
      },
      "application/a2l": {
        source: "iana"
      },
      "application/ace+cbor": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: true
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/at+jwt": {
        source: "iana"
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: true
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: true
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: false
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/calendar+json": {
        source: "iana",
        compressible: true
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/captive+json": {
        source: "iana",
        compressible: true
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: true
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: true
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: true
      },
      "application/cfw": {
        source: "iana"
      },
      "application/clr": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: true
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: true
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: true
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: true
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: true
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/csvm+json": {
        source: "iana",
        compressible: true
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: true
      },
      "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpd"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: true
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: true
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: true
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: ["es", "ecma"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: false
      },
      "application/edifact": {
        source: "iana",
        compressible: false
      },
      "application/efi": {
        source: "iana"
      },
      "application/elm+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/elm+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: true
      },
      "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: true
      },
      "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: true
      },
      "application/express": {
        source: "iana",
        extensions: ["exp"]
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fido.trusted-apps+json": {
        compressible: true
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: false
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: true
      },
      "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: true
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: true
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: true
      },
      "application/jrd+json": {
        source: "iana",
        compressible: true
      },
      "application/jscalendar+json": {
        source: "iana",
        compressible: true
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: true
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: true
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: true
      },
      "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: false
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: true
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: true
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/missing-blocks+cbor-seq": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: true
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: true
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msword": {
        source: "iana",
        compressible: false,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: true
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: true
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/oauth-authz-req+jwt": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: true
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/opc-nodeset+xml": {
        source: "iana",
        compressible: true
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p21": {
        source: "iana"
      },
      "application/p21+zip": {
        source: "iana",
        compressible: false
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana"
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+xml": {
        source: "iana",
        compressible: true
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.cyn": {
        source: "iana",
        charset: "7-BIT"
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: false
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: true
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: true,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: true
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: true
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: true
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: true
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/sarif+json": {
        source: "iana",
        compressible: true
      },
      "application/sarif-external-properties+json": {
        source: "iana",
        compressible: true
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: true
      },
      "application/scim+json": {
        source: "iana",
        compressible: true
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: true
      },
      "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: true
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: true
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: true
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: true
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: true
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: ["srx"]
      },
      "application/spdx+json": {
        source: "iana",
        compressible: true
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: true
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: true
      },
      "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: true
      },
      "application/taxii+json": {
        source: "iana",
        compressible: true
      },
      "application/td+json": {
        source: "iana",
        compressible: true
      },
      "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: true
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/token-introspection+jwt": {
        source: "iana"
      },
      "application/toml": {
        compressible: true,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana",
        extensions: ["trig"]
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ubjson": {
        compressible: false,
        extensions: ["ubj"]
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["td"]
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vcard+json": {
        source: "iana",
        compressible: true
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: true
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.5gnas": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gtpc": {
        source: "iana"
      },
      "application/vnd.3gpp.interworking-data": {
        source: "iana"
      },
      "application/vnd.3gpp.lpp": {
        source: "iana"
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ngap": {
        source: "iana"
      },
      "application/vnd.3gpp.pfcp": {
        source: "iana"
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.s1ap": {
        source: "iana"
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.cmoca-cmresource": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-cmtable": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.age": {
        source: "iana",
        extensions: ["age"]
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.arrow.file": {
        source: "iana"
      },
      "application/vnd.apache.arrow.stream": {
        source: "iana"
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["key"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: false,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.cryptomator.encrypted": {
        source: "iana"
      },
      "application/vnd.cryptomator.vault": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.cyclonedx+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cyclonedx+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.d3m-dataset": {
        source: "iana"
      },
      "application/vnd.d3m-problem": {
        source: "iana"
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dbf": {
        source: "iana",
        extensions: ["dbf"]
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujifilm.fb.docuworks": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.binder": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.jfi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.slides": {
        source: "iana"
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: false,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: false,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: false,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: ["mvt"]
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-outlook": {
        compressible: false,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.nacamar.ybrid+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nebumind.line": {
        source: "iana"
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+cbor": {
        source: "iana"
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osm"]
      },
      "application/vnd.opentimestamps.ots": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana",
        extensions: ["rar"]
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.resilient.logic": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.seis+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.sycle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veritone.aion+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.dpp": {
        source: "iana"
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: true
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: true
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: false,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: false
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: true,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-iwork-keynote-sffkey": {
        extensions: ["key"]
      },
      "application/x-iwork-numbers-sffnumbers": {
        extensions: ["numbers"]
      },
      "application/x-iwork-pages-sffpages": {
        extensions: ["pages"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: true
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: false
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: true,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: true,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: true,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: true,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: true,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: false,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: true,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: true,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: true,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: true,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: true
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: true
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: true
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xsl", "xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: false,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana",
        extensions: ["amr"]
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: false
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: false,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["oga", "ogg", "spx", "opus"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/scip": {
        source: "iana"
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sofa": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/tsvcis": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: false
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: false
      },
      "audio/vorbis": {
        source: "iana",
        compressible: false
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: true,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: false,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana"
      },
      "image/avcs": {
        source: "iana"
      },
      "image/avif": {
        source: "iana",
        compressible: false,
        extensions: ["avif"]
      },
      "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: false,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/ktx2": {
        source: "iana",
        extensions: ["ktx2"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: false
      },
      "image/png": {
        source: "iana",
        compressible: false,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        compressible: true,
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.pco.b16": {
        source: "iana",
        extensions: ["b16"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: false
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: [
          "disposition-notification"
        ]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: false
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: true
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: false
      },
      "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/e57": {
        source: "iana"
      },
      "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: false,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/step": {
        source: "iana"
      },
      "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: ["stpx"]
      },
      "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpz"]
      },
      "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpxz"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: true
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.pytha.pyox": {
        source: "iana"
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.sap.vds": {
        source: "iana",
        extensions: ["vds"]
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: false
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: false
      },
      "multipart/form-data": {
        source: "iana",
        compressible: false
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: false
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: false
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: true
      },
      "text/cmd": {
        compressible: true
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/cql": {
        source: "iana"
      },
      "text/cql-expression": {
        source: "iana"
      },
      "text/cql-identifier": {
        source: "iana"
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: true,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/fhirpath": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/gff3": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: true,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: true
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: true,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: true,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: true,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: true,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shaclc": {
        source: "iana"
      },
      "text/shex": {
        source: "iana",
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/spdx": {
        source: "iana",
        extensions: ["spdx"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: ["ged"]
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hans": {
        source: "iana"
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: true
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: true
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: true,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: true,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: true,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: true,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        compressible: true,
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/av1": {
        source: "iana"
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/ffv1": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana",
        extensions: ["m4s"]
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/jxsv": {
        source: "iana"
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/scip": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/vp9": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: false,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: true
      },
      "x-shader/x-vertex": {
        compressible: true
      }
    };
  }
});

// node_modules/mime-db/index.js
var require_mime_db = __commonJS({
  "node_modules/mime-db/index.js"(exports, module2) {
    module2.exports = require_db();
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports) {
    "use strict";
    var db = require_mime_db();
    var extname = require("path").extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = /* @__PURE__ */ Object.create(null);
    exports.lookup = lookup;
    exports.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports.extensions, exports.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports.charset(mime);
        if (charset2)
          mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    function lookup(path) {
      if (!path || typeof path !== "string") {
        return false;
      }
      var extension2 = extname("x." + path).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports.types[extension2] || false;
    }
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      });
    }
  }
});

// node_modules/asynckit/lib/defer.js
var require_defer = __commonJS({
  "node_modules/asynckit/lib/defer.js"(exports, module2) {
    module2.exports = defer;
    function defer(fn) {
      var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
      if (nextTick) {
        nextTick(fn);
      } else {
        setTimeout(fn, 0);
      }
    }
  }
});

// node_modules/asynckit/lib/async.js
var require_async = __commonJS({
  "node_modules/asynckit/lib/async.js"(exports, module2) {
    var defer = require_defer();
    module2.exports = async;
    function async(callback) {
      var isAsync = false;
      defer(function() {
        isAsync = true;
      });
      return function async_callback(err, result) {
        if (isAsync) {
          callback(err, result);
        } else {
          defer(function nextTick_callback() {
            callback(err, result);
          });
        }
      };
    }
  }
});

// node_modules/asynckit/lib/abort.js
var require_abort = __commonJS({
  "node_modules/asynckit/lib/abort.js"(exports, module2) {
    module2.exports = abort;
    function abort(state) {
      Object.keys(state.jobs).forEach(clean.bind(state));
      state.jobs = {};
    }
    function clean(key) {
      if (typeof this.jobs[key] == "function") {
        this.jobs[key]();
      }
    }
  }
});

// node_modules/asynckit/lib/iterate.js
var require_iterate = __commonJS({
  "node_modules/asynckit/lib/iterate.js"(exports, module2) {
    var async = require_async();
    var abort = require_abort();
    module2.exports = iterate;
    function iterate(list, iterator, state, callback) {
      var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
      state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        if (!(key in state.jobs)) {
          return;
        }
        delete state.jobs[key];
        if (error) {
          abort(state);
        } else {
          state.results[key] = output;
        }
        callback(error, state.results);
      });
    }
    function runJob(iterator, key, item, callback) {
      var aborter;
      if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
      } else {
        aborter = iterator(item, key, async(callback));
      }
      return aborter;
    }
  }
});

// node_modules/asynckit/lib/state.js
var require_state = __commonJS({
  "node_modules/asynckit/lib/state.js"(exports, module2) {
    module2.exports = state;
    function state(list, sortMethod) {
      var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
      };
      if (sortMethod) {
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
          return sortMethod(list[a], list[b]);
        });
      }
      return initState;
    }
  }
});

// node_modules/asynckit/lib/terminator.js
var require_terminator = __commonJS({
  "node_modules/asynckit/lib/terminator.js"(exports, module2) {
    var abort = require_abort();
    var async = require_async();
    module2.exports = terminator;
    function terminator(callback) {
      if (!Object.keys(this.jobs).length) {
        return;
      }
      this.index = this.size;
      abort(this);
      async(callback)(null, this.results);
    }
  }
});

// node_modules/asynckit/parallel.js
var require_parallel = __commonJS({
  "node_modules/asynckit/parallel.js"(exports, module2) {
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = parallel;
    function parallel(list, iterator, callback) {
      var state = initState(list);
      while (state.index < (state["keyedList"] || list).length) {
        iterate(list, iterator, state, function(error, result) {
          if (error) {
            callback(error, result);
            return;
          }
          if (Object.keys(state.jobs).length === 0) {
            callback(null, state.results);
            return;
          }
        });
        state.index++;
      }
      return terminator.bind(state, callback);
    }
  }
});

// node_modules/asynckit/serialOrdered.js
var require_serialOrdered = __commonJS({
  "node_modules/asynckit/serialOrdered.js"(exports, module2) {
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = serialOrdered;
    module2.exports.ascending = ascending;
    module2.exports.descending = descending;
    function serialOrdered(list, iterator, sortMethod, callback) {
      var state = initState(list, sortMethod);
      iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
          callback(error, result);
          return;
        }
        state.index++;
        if (state.index < (state["keyedList"] || list).length) {
          iterate(list, iterator, state, iteratorHandler);
          return;
        }
        callback(null, state.results);
      });
      return terminator.bind(state, callback);
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    function descending(a, b) {
      return -1 * ascending(a, b);
    }
  }
});

// node_modules/asynckit/serial.js
var require_serial = __commonJS({
  "node_modules/asynckit/serial.js"(exports, module2) {
    var serialOrdered = require_serialOrdered();
    module2.exports = serial;
    function serial(list, iterator, callback) {
      return serialOrdered(list, iterator, null, callback);
    }
  }
});

// node_modules/asynckit/index.js
var require_asynckit = __commonJS({
  "node_modules/asynckit/index.js"(exports, module2) {
    module2.exports = {
      parallel: require_parallel(),
      serial: require_serial(),
      serialOrdered: require_serialOrdered()
    };
  }
});

// node_modules/form-data/lib/populate.js
var require_populate = __commonJS({
  "node_modules/form-data/lib/populate.js"(exports, module2) {
    module2.exports = function(dst, src) {
      Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop];
      });
      return dst;
    };
  }
});

// node_modules/form-data/lib/form_data.js
var require_form_data = __commonJS({
  "node_modules/form-data/lib/form_data.js"(exports, module2) {
    var CombinedStream = require_combined_stream();
    var util = require("util");
    var path = require("path");
    var http = require("http");
    var https = require("https");
    var parseUrl = require("url").parse;
    var fs = require("fs");
    var Stream = require("stream").Stream;
    var mime = require_mime_types();
    var asynckit = require_asynckit();
    var populate = require_populate();
    module2.exports = FormData2;
    util.inherits(FormData2, CombinedStream);
    function FormData2(options) {
      if (!(this instanceof FormData2)) {
        return new FormData2(options);
      }
      this._overheadLength = 0;
      this._valueLength = 0;
      this._valuesToMeasure = [];
      CombinedStream.call(this);
      options = options || {};
      for (var option in options) {
        this[option] = options[option];
      }
    }
    FormData2.LINE_BREAK = "\r\n";
    FormData2.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    FormData2.prototype.append = function(field, value, options) {
      options = options || {};
      if (typeof options == "string") {
        options = { filename: options };
      }
      var append = CombinedStream.prototype.append.bind(this);
      if (typeof value == "number") {
        value = "" + value;
      }
      if (util.isArray(value)) {
        this._error(new Error("Arrays are not supported."));
        return;
      }
      var header = this._multiPartHeader(field, value, options);
      var footer = this._multiPartFooter();
      append(header);
      append(value);
      append(footer);
      this._trackLength(header, value, options);
    };
    FormData2.prototype._trackLength = function(header, value, options) {
      var valueLength = 0;
      if (options.knownLength != null) {
        valueLength += +options.knownLength;
      } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
      } else if (typeof value === "string") {
        valueLength = Buffer.byteLength(value);
      }
      this._valueLength += valueLength;
      this._overheadLength += Buffer.byteLength(header) + FormData2.LINE_BREAK.length;
      if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion")) && !(value instanceof Stream)) {
        return;
      }
      if (!options.knownLength) {
        this._valuesToMeasure.push(value);
      }
    };
    FormData2.prototype._lengthRetriever = function(value, callback) {
      if (value.hasOwnProperty("fd")) {
        if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
          callback(null, value.end + 1 - (value.start ? value.start : 0));
        } else {
          fs.stat(value.path, function(err, stat) {
            var fileSize;
            if (err) {
              callback(err);
              return;
            }
            fileSize = stat.size - (value.start ? value.start : 0);
            callback(null, fileSize);
          });
        }
      } else if (value.hasOwnProperty("httpVersion")) {
        callback(null, +value.headers["content-length"]);
      } else if (value.hasOwnProperty("httpModule")) {
        value.on("response", function(response) {
          value.pause();
          callback(null, +response.headers["content-length"]);
        });
        value.resume();
      } else {
        callback("Unknown stream");
      }
    };
    FormData2.prototype._multiPartHeader = function(field, value, options) {
      if (typeof options.header == "string") {
        return options.header;
      }
      var contentDisposition = this._getContentDisposition(value, options);
      var contentType = this._getContentType(value, options);
      var contents = "";
      var headers = {
        "Content-Disposition": ["form-data", 'name="' + field + '"'].concat(contentDisposition || []),
        "Content-Type": [].concat(contentType || [])
      };
      if (typeof options.header == "object") {
        populate(headers, options.header);
      }
      var header;
      for (var prop in headers) {
        if (!headers.hasOwnProperty(prop))
          continue;
        header = headers[prop];
        if (header == null) {
          continue;
        }
        if (!Array.isArray(header)) {
          header = [header];
        }
        if (header.length) {
          contents += prop + ": " + header.join("; ") + FormData2.LINE_BREAK;
        }
      }
      return "--" + this.getBoundary() + FormData2.LINE_BREAK + contents + FormData2.LINE_BREAK;
    };
    FormData2.prototype._getContentDisposition = function(value, options) {
      var filename, contentDisposition;
      if (typeof options.filepath === "string") {
        filename = path.normalize(options.filepath).replace(/\\/g, "/");
      } else if (options.filename || value.name || value.path) {
        filename = path.basename(options.filename || value.name || value.path);
      } else if (value.readable && value.hasOwnProperty("httpVersion")) {
        filename = path.basename(value.client._httpMessage.path || "");
      }
      if (filename) {
        contentDisposition = 'filename="' + filename + '"';
      }
      return contentDisposition;
    };
    FormData2.prototype._getContentType = function(value, options) {
      var contentType = options.contentType;
      if (!contentType && value.name) {
        contentType = mime.lookup(value.name);
      }
      if (!contentType && value.path) {
        contentType = mime.lookup(value.path);
      }
      if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
        contentType = value.headers["content-type"];
      }
      if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
      }
      if (!contentType && typeof value == "object") {
        contentType = FormData2.DEFAULT_CONTENT_TYPE;
      }
      return contentType;
    };
    FormData2.prototype._multiPartFooter = function() {
      return function(next) {
        var footer = FormData2.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
          footer += this._lastBoundary();
        }
        next(footer);
      }.bind(this);
    };
    FormData2.prototype._lastBoundary = function() {
      return "--" + this.getBoundary() + "--" + FormData2.LINE_BREAK;
    };
    FormData2.prototype.getHeaders = function(userHeaders) {
      var header;
      var formHeaders = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
      for (header in userHeaders) {
        if (userHeaders.hasOwnProperty(header)) {
          formHeaders[header.toLowerCase()] = userHeaders[header];
        }
      }
      return formHeaders;
    };
    FormData2.prototype.setBoundary = function(boundary) {
      this._boundary = boundary;
    };
    FormData2.prototype.getBoundary = function() {
      if (!this._boundary) {
        this._generateBoundary();
      }
      return this._boundary;
    };
    FormData2.prototype.getBuffer = function() {
      var dataBuffer = new Buffer.alloc(0);
      var boundary = this.getBoundary();
      for (var i = 0, len = this._streams.length; i < len; i++) {
        if (typeof this._streams[i] !== "function") {
          if (Buffer.isBuffer(this._streams[i])) {
            dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
          } else {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
          }
          if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData2.LINE_BREAK)]);
          }
        }
      }
      return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
    };
    FormData2.prototype._generateBoundary = function() {
      var boundary = "--------------------------";
      for (var i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
      }
      this._boundary = boundary;
    };
    FormData2.prototype.getLengthSync = function() {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this.hasKnownLength()) {
        this._error(new Error("Cannot calculate proper length in synchronous way."));
      }
      return knownLength;
    };
    FormData2.prototype.hasKnownLength = function() {
      var hasKnownLength = true;
      if (this._valuesToMeasure.length) {
        hasKnownLength = false;
      }
      return hasKnownLength;
    };
    FormData2.prototype.getLength = function(cb) {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
      }
      asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
          cb(err);
          return;
        }
        values.forEach(function(length) {
          knownLength += length;
        });
        cb(null, knownLength);
      });
    };
    FormData2.prototype.submit = function(params, cb) {
      var request, options, defaults = { method: "post" };
      if (typeof params == "string") {
        params = parseUrl(params);
        options = populate({
          port: params.port,
          path: params.pathname,
          host: params.hostname,
          protocol: params.protocol
        }, defaults);
      } else {
        options = populate(params, defaults);
        if (!options.port) {
          options.port = options.protocol == "https:" ? 443 : 80;
        }
      }
      options.headers = this.getHeaders(params.headers);
      if (options.protocol == "https:") {
        request = https.request(options);
      } else {
        request = http.request(options);
      }
      this.getLength(function(err, length) {
        if (err && err !== "Unknown stream") {
          this._error(err);
          return;
        }
        if (length) {
          request.setHeader("Content-Length", length);
        }
        this.pipe(request);
        if (cb) {
          var onResponse;
          var callback = function(error, responce) {
            request.removeListener("error", callback);
            request.removeListener("response", onResponse);
            return cb.call(this, error, responce);
          };
          onResponse = callback.bind(this, null);
          request.on("error", callback);
          request.on("response", onResponse);
        }
      }.bind(this));
      return request;
    };
    FormData2.prototype._error = function(err) {
      if (!this.error) {
        this.error = err;
        this.pause();
        this.emit("error", err);
      }
    };
    FormData2.prototype.toString = function() {
      return "[object FormData]";
    };
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = "[object Function]";
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slice.call(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            args.concat(slice.call(arguments))
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        } else {
          return target.apply(
            that,
            args.concat(slice.call(arguments))
          );
        }
      };
      var boundLength = Math.max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs.push("$" + i);
      }
      bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/has/src/index.js
var require_src2 = __commonJS({
  "node_modules/has/src/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    module2.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_src2();
    var $concat = bind.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
    var $replace = bind.call(Function.call, String.prototype.replace);
    var $strSlice = bind.call(Function.call, String.prototype.slice);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var bind = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module2.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports, module2) {
    module2.exports = require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var inspectCustom = require_util_inspect().custom;
    var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function") {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ("cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function") {
          return obj[inspectSymbol]();
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = {
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
          out += string.charAt(i);
          continue;
        }
        if (c < 128) {
          out = out + hexTable[c];
          continue;
        }
        if (c < 2048) {
          out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
          continue;
        }
        if (c < 55296 || c >= 57344) {
          out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
          continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils2();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var split = String.prototype.split;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          if (generateArrayPrefix === "comma" && encodeValuesOnly) {
            var valuesArray = split.call(String(obj), ",");
            var valuesJoined = "";
            for (var i = 0; i < valuesArray.length; ++i) {
              valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults.encoder, charset, "value", format));
            }
            return [formatter(keyValue) + "=" + valuesJoined];
          }
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          strictNullHandling,
          skipNulls,
          encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if (opts && "indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = "indices";
      }
      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          options.strictNullHandling,
          options.skipNulls,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module2) {
    "use strict";
    var utils = require_utils2();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        if (has.call(obj, key)) {
          obj[key] = utils.combine(obj[key], val);
        } else {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var index = parseInt(cleanRoot, 10);
          if (!options.parseArrays && cleanRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (cleanRoot !== "__proto__") {
            obj[cleanRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// api.ts
var api_exports = {};
__export(api_exports, {
  APIS: () => APIS,
  AccountApi: () => AccountApi,
  AccountApiApiKeys: () => AccountApiApiKeys,
  AccountCreateRequest: () => AccountCreateRequest,
  AccountCreateResponse: () => AccountCreateResponse,
  AccountGetResponse: () => AccountGetResponse,
  AccountResponse: () => AccountResponse,
  AccountResponseQuotas: () => AccountResponseQuotas,
  AccountUpdateRequest: () => AccountUpdateRequest,
  AccountVerifyRequest: () => AccountVerifyRequest,
  AccountVerifyResponse: () => AccountVerifyResponse,
  AccountVerifyResponseAccount: () => AccountVerifyResponseAccount,
  ApiAppApi: () => ApiAppApi,
  ApiAppApiApiKeys: () => ApiAppApiApiKeys,
  ApiAppCreateRequest: () => ApiAppCreateRequest,
  ApiAppGetResponse: () => ApiAppGetResponse,
  ApiAppListResponse: () => ApiAppListResponse,
  ApiAppResponse: () => ApiAppResponse,
  ApiAppResponseOAuth: () => ApiAppResponseOAuth,
  ApiAppResponseOptions: () => ApiAppResponseOptions,
  ApiAppResponseOwnerAccount: () => ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions: () => ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest: () => ApiAppUpdateRequest,
  ApiKeyAuth: () => ApiKeyAuth,
  BulkSendJobApi: () => BulkSendJobApi,
  BulkSendJobApiApiKeys: () => BulkSendJobApiApiKeys,
  BulkSendJobGetResponse: () => BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests: () => BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse: () => BulkSendJobListResponse,
  BulkSendJobResponse: () => BulkSendJobResponse,
  BulkSendJobSendResponse: () => BulkSendJobSendResponse,
  EmbeddedApi: () => EmbeddedApi,
  EmbeddedApiApiKeys: () => EmbeddedApiApiKeys,
  EmbeddedEditUrlRequest: () => EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse: () => EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded: () => EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse: () => EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded: () => EmbeddedSignUrlResponseEmbedded,
  ErrorResponse: () => ErrorResponse,
  ErrorResponseError: () => ErrorResponseError,
  EventCallbackHelper: () => EventCallbackHelper,
  EventCallbackRequest: () => EventCallbackRequest,
  EventCallbackRequestEvent: () => EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata: () => EventCallbackRequestEventMetadata,
  FileResponse: () => FileResponse,
  FileResponseDataUri: () => FileResponseDataUri,
  HttpBasicAuth: () => HttpBasicAuth,
  HttpBearerAuth: () => HttpBearerAuth,
  HttpError: () => HttpError,
  ListInfoResponse: () => ListInfoResponse,
  OAuth: () => OAuth,
  OAuthApi: () => OAuthApi,
  OAuthApiApiKeys: () => OAuthApiApiKeys,
  OAuthTokenGenerateRequest: () => OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest: () => OAuthTokenRefreshRequest,
  OAuthTokenResponse: () => OAuthTokenResponse,
  ObjectSerializer: () => ObjectSerializer,
  ReportApi: () => ReportApi,
  ReportApiApiKeys: () => ReportApiApiKeys,
  ReportCreateRequest: () => ReportCreateRequest,
  ReportCreateResponse: () => ReportCreateResponse,
  ReportResponse: () => ReportResponse,
  SignatureRequestApi: () => SignatureRequestApi,
  SignatureRequestApiApiKeys: () => SignatureRequestApiApiKeys,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest: () => SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest: () => SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest: () => SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest: () => SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestGetResponse: () => SignatureRequestGetResponse,
  SignatureRequestListResponse: () => SignatureRequestListResponse,
  SignatureRequestRemindRequest: () => SignatureRequestRemindRequest,
  SignatureRequestResponse: () => SignatureRequestResponse,
  SignatureRequestResponseAttachment: () => SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase: () => SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox: () => SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText: () => SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseCustomFieldTypeEnum: () => SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataBase: () => SignatureRequestResponseDataBase,
  SignatureRequestResponseDataTypeEnum: () => SignatureRequestResponseDataTypeEnum,
  SignatureRequestResponseDataValueCheckbox: () => SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge: () => SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned: () => SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown: () => SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials: () => SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio: () => SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature: () => SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText: () => SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge: () => SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures: () => SignatureRequestResponseSignatures,
  SignatureRequestSendRequest: () => SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest: () => SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest: () => SignatureRequestUpdateRequest,
  SubAttachment: () => SubAttachment,
  SubBulkSignerList: () => SubBulkSignerList,
  SubBulkSignerListCustomField: () => SubBulkSignerListCustomField,
  SubCC: () => SubCC,
  SubCustomField: () => SubCustomField,
  SubEditorOptions: () => SubEditorOptions,
  SubFieldOptions: () => SubFieldOptions,
  SubFormFieldGroup: () => SubFormFieldGroup,
  SubFormFieldRule: () => SubFormFieldRule,
  SubFormFieldRuleAction: () => SubFormFieldRuleAction,
  SubFormFieldRuleTrigger: () => SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase: () => SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox: () => SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge: () => SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned: () => SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown: () => SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentHyperlink: () => SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials: () => SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio: () => SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature: () => SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText: () => SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge: () => SubFormFieldsPerDocumentTextMerge,
  SubFormFieldsPerDocumentTypeEnum: () => SubFormFieldsPerDocumentTypeEnum,
  SubMergeField: () => SubMergeField,
  SubOAuth: () => SubOAuth,
  SubOptions: () => SubOptions,
  SubSignatureRequestSigner: () => SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner: () => SubSignatureRequestTemplateSigner,
  SubSigningOptions: () => SubSigningOptions,
  SubTeamResponse: () => SubTeamResponse,
  SubTemplateRole: () => SubTemplateRole,
  SubUnclaimedDraftSigner: () => SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner: () => SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions: () => SubWhiteLabelingOptions,
  TeamAddMemberRequest: () => TeamAddMemberRequest,
  TeamApi: () => TeamApi,
  TeamApiApiKeys: () => TeamApiApiKeys,
  TeamCreateRequest: () => TeamCreateRequest,
  TeamGetInfoResponse: () => TeamGetInfoResponse,
  TeamGetResponse: () => TeamGetResponse,
  TeamInfoResponse: () => TeamInfoResponse,
  TeamInviteResponse: () => TeamInviteResponse,
  TeamInvitesResponse: () => TeamInvitesResponse,
  TeamMemberResponse: () => TeamMemberResponse,
  TeamMembersResponse: () => TeamMembersResponse,
  TeamParentResponse: () => TeamParentResponse,
  TeamRemoveMemberRequest: () => TeamRemoveMemberRequest,
  TeamResponse: () => TeamResponse,
  TeamSubTeamsResponse: () => TeamSubTeamsResponse,
  TeamUpdateRequest: () => TeamUpdateRequest,
  TemplateAddUserRequest: () => TemplateAddUserRequest,
  TemplateApi: () => TemplateApi,
  TemplateApiApiKeys: () => TemplateApiApiKeys,
  TemplateCreateEmbeddedDraftRequest: () => TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse: () => TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate: () => TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateEditResponse: () => TemplateEditResponse,
  TemplateGetResponse: () => TemplateGetResponse,
  TemplateListResponse: () => TemplateListResponse,
  TemplateRemoveUserRequest: () => TemplateRemoveUserRequest,
  TemplateResponse: () => TemplateResponse,
  TemplateResponseAccount: () => TemplateResponseAccount,
  TemplateResponseAccountQuota: () => TemplateResponseAccountQuota,
  TemplateResponseCCRole: () => TemplateResponseCCRole,
  TemplateResponseCustomField: () => TemplateResponseCustomField,
  TemplateResponseDocument: () => TemplateResponseDocument,
  TemplateResponseDocumentCustomField: () => TemplateResponseDocumentCustomField,
  TemplateResponseDocumentFieldGroup: () => TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFormField: () => TemplateResponseDocumentFormField,
  TemplateResponseDocumentStaticField: () => TemplateResponseDocumentStaticField,
  TemplateResponseFieldAvgTextLength: () => TemplateResponseFieldAvgTextLength,
  TemplateResponseNamedFormField: () => TemplateResponseNamedFormField,
  TemplateResponseSignerRole: () => TemplateResponseSignerRole,
  TemplateUpdateFilesRequest: () => TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse: () => TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate: () => TemplateUpdateFilesResponseTemplate,
  UnclaimedDraftApi: () => UnclaimedDraftApi,
  UnclaimedDraftApiApiKeys: () => UnclaimedDraftApiApiKeys,
  UnclaimedDraftCreateEmbeddedRequest: () => UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest: () => UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest: () => UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse: () => UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest: () => UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse: () => UnclaimedDraftResponse,
  VoidAuth: () => VoidAuth,
  WarningResponse: () => WarningResponse,
  generateFormData: () => generateFormData,
  queryParamsSerializer: () => queryParamsSerializer,
  toFormData: () => toFormData
});
module.exports = __toCommonJS(api_exports);

// api/accountApi.ts
var import_axios = __toESM(require_axios2());

// model/accountCreateRequest.ts
var _AccountCreateRequest = class {
  static getAttributeTypeMap() {
    return _AccountCreateRequest.attributeTypeMap;
  }
};
var AccountCreateRequest = _AccountCreateRequest;
AccountCreateRequest.discriminator = void 0;
AccountCreateRequest.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "clientSecret",
    baseName: "client_secret",
    type: "string"
  },
  {
    name: "locale",
    baseName: "locale",
    type: "string"
  }
];

// model/accountUpdateRequest.ts
var _AccountUpdateRequest = class {
  static getAttributeTypeMap() {
    return _AccountUpdateRequest.attributeTypeMap;
  }
};
var AccountUpdateRequest = _AccountUpdateRequest;
AccountUpdateRequest.discriminator = void 0;
AccountUpdateRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "locale",
    baseName: "locale",
    type: "string"
  }
];

// model/accountVerifyRequest.ts
var _AccountVerifyRequest = class {
  static getAttributeTypeMap() {
    return _AccountVerifyRequest.attributeTypeMap;
  }
};
var AccountVerifyRequest = _AccountVerifyRequest;
AccountVerifyRequest.discriminator = void 0;
AccountVerifyRequest.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/accountCreateResponse.ts
var _AccountCreateResponse = class {
  static getAttributeTypeMap() {
    return _AccountCreateResponse.attributeTypeMap;
  }
};
var AccountCreateResponse = _AccountCreateResponse;
AccountCreateResponse.discriminator = void 0;
AccountCreateResponse.attributeTypeMap = [
  {
    name: "account",
    baseName: "account",
    type: "AccountResponse"
  },
  {
    name: "oauthData",
    baseName: "oauth_data",
    type: "OAuthTokenResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/accountGetResponse.ts
var _AccountGetResponse = class {
  static getAttributeTypeMap() {
    return _AccountGetResponse.attributeTypeMap;
  }
};
var AccountGetResponse = _AccountGetResponse;
AccountGetResponse.discriminator = void 0;
AccountGetResponse.attributeTypeMap = [
  {
    name: "account",
    baseName: "account",
    type: "AccountResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/accountResponse.ts
var _AccountResponse = class {
  static getAttributeTypeMap() {
    return _AccountResponse.attributeTypeMap;
  }
};
var AccountResponse = _AccountResponse;
AccountResponse.discriminator = void 0;
AccountResponse.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "isLocked",
    baseName: "is_locked",
    type: "boolean"
  },
  {
    name: "isPaidHs",
    baseName: "is_paid_hs",
    type: "boolean"
  },
  {
    name: "isPaidHf",
    baseName: "is_paid_hf",
    type: "boolean"
  },
  {
    name: "quotas",
    baseName: "quotas",
    type: "AccountResponseQuotas"
  },
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "roleCode",
    baseName: "role_code",
    type: "string"
  },
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "locale",
    baseName: "locale",
    type: "string"
  }
];

// model/accountResponseQuotas.ts
var _AccountResponseQuotas = class {
  static getAttributeTypeMap() {
    return _AccountResponseQuotas.attributeTypeMap;
  }
};
var AccountResponseQuotas = _AccountResponseQuotas;
AccountResponseQuotas.discriminator = void 0;
AccountResponseQuotas.attributeTypeMap = [
  {
    name: "apiSignatureRequestsLeft",
    baseName: "api_signature_requests_left",
    type: "number"
  },
  {
    name: "documentsLeft",
    baseName: "documents_left",
    type: "number"
  },
  {
    name: "totalTemplates",
    baseName: "total_templates",
    type: "number"
  },
  {
    name: "templatesLeft",
    baseName: "templates_left",
    type: "number"
  },
  {
    name: "smsVerificationsLeft",
    baseName: "sms_verifications_left",
    type: "number"
  }
];

// model/accountVerifyResponse.ts
var _AccountVerifyResponse = class {
  static getAttributeTypeMap() {
    return _AccountVerifyResponse.attributeTypeMap;
  }
};
var AccountVerifyResponse = _AccountVerifyResponse;
AccountVerifyResponse.discriminator = void 0;
AccountVerifyResponse.attributeTypeMap = [
  {
    name: "account",
    baseName: "account",
    type: "AccountVerifyResponseAccount"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/accountVerifyResponseAccount.ts
var _AccountVerifyResponseAccount = class {
  static getAttributeTypeMap() {
    return _AccountVerifyResponseAccount.attributeTypeMap;
  }
};
var AccountVerifyResponseAccount = _AccountVerifyResponseAccount;
AccountVerifyResponseAccount.discriminator = void 0;
AccountVerifyResponseAccount.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/apiAppCreateRequest.ts
var _ApiAppCreateRequest = class {
  static getAttributeTypeMap() {
    return _ApiAppCreateRequest.attributeTypeMap;
  }
};
var ApiAppCreateRequest = _ApiAppCreateRequest;
ApiAppCreateRequest.discriminator = void 0;
ApiAppCreateRequest.attributeTypeMap = [
  {
    name: "domains",
    baseName: "domains",
    type: "Array<string>"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "customLogoFile",
    baseName: "custom_logo_file",
    type: "RequestFile"
  },
  {
    name: "oauth",
    baseName: "oauth",
    type: "SubOAuth"
  },
  {
    name: "options",
    baseName: "options",
    type: "SubOptions"
  },
  {
    name: "whiteLabelingOptions",
    baseName: "white_labeling_options",
    type: "SubWhiteLabelingOptions"
  }
];

// model/apiAppGetResponse.ts
var _ApiAppGetResponse = class {
  static getAttributeTypeMap() {
    return _ApiAppGetResponse.attributeTypeMap;
  }
};
var ApiAppGetResponse = _ApiAppGetResponse;
ApiAppGetResponse.discriminator = void 0;
ApiAppGetResponse.attributeTypeMap = [
  {
    name: "apiApp",
    baseName: "api_app",
    type: "ApiAppResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/apiAppListResponse.ts
var _ApiAppListResponse = class {
  static getAttributeTypeMap() {
    return _ApiAppListResponse.attributeTypeMap;
  }
};
var ApiAppListResponse = _ApiAppListResponse;
ApiAppListResponse.discriminator = void 0;
ApiAppListResponse.attributeTypeMap = [
  {
    name: "apiApps",
    baseName: "api_apps",
    type: "Array<ApiAppResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/apiAppResponse.ts
var _ApiAppResponse = class {
  static getAttributeTypeMap() {
    return _ApiAppResponse.attributeTypeMap;
  }
};
var ApiAppResponse = _ApiAppResponse;
ApiAppResponse.discriminator = void 0;
ApiAppResponse.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  },
  {
    name: "domains",
    baseName: "domains",
    type: "Array<string>"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "isApproved",
    baseName: "is_approved",
    type: "boolean"
  },
  {
    name: "oauth",
    baseName: "oauth",
    type: "ApiAppResponseOAuth"
  },
  {
    name: "options",
    baseName: "options",
    type: "ApiAppResponseOptions"
  },
  {
    name: "ownerAccount",
    baseName: "owner_account",
    type: "ApiAppResponseOwnerAccount"
  },
  {
    name: "whiteLabelingOptions",
    baseName: "white_labeling_options",
    type: "ApiAppResponseWhiteLabelingOptions"
  }
];

// model/apiAppResponseOAuth.ts
var _ApiAppResponseOAuth = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseOAuth.attributeTypeMap;
  }
};
var ApiAppResponseOAuth = _ApiAppResponseOAuth;
ApiAppResponseOAuth.discriminator = void 0;
ApiAppResponseOAuth.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "secret",
    baseName: "secret",
    type: "string"
  },
  {
    name: "scopes",
    baseName: "scopes",
    type: "Array<string>"
  },
  {
    name: "chargesUsers",
    baseName: "charges_users",
    type: "boolean"
  }
];

// model/apiAppResponseOptions.ts
var _ApiAppResponseOptions = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseOptions.attributeTypeMap;
  }
};
var ApiAppResponseOptions = _ApiAppResponseOptions;
ApiAppResponseOptions.discriminator = void 0;
ApiAppResponseOptions.attributeTypeMap = [
  {
    name: "canInsertEverywhere",
    baseName: "can_insert_everywhere",
    type: "boolean"
  }
];

// model/apiAppResponseOwnerAccount.ts
var _ApiAppResponseOwnerAccount = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseOwnerAccount.attributeTypeMap;
  }
};
var ApiAppResponseOwnerAccount = _ApiAppResponseOwnerAccount;
ApiAppResponseOwnerAccount.discriminator = void 0;
ApiAppResponseOwnerAccount.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/apiAppResponseWhiteLabelingOptions.ts
var _ApiAppResponseWhiteLabelingOptions = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseWhiteLabelingOptions.attributeTypeMap;
  }
};
var ApiAppResponseWhiteLabelingOptions = _ApiAppResponseWhiteLabelingOptions;
ApiAppResponseWhiteLabelingOptions.discriminator = void 0;
ApiAppResponseWhiteLabelingOptions.attributeTypeMap = [
  {
    name: "headerBackgroundColor",
    baseName: "header_background_color",
    type: "string"
  },
  {
    name: "legalVersion",
    baseName: "legal_version",
    type: "string"
  },
  {
    name: "linkColor",
    baseName: "link_color",
    type: "string"
  },
  {
    name: "pageBackgroundColor",
    baseName: "page_background_color",
    type: "string"
  },
  {
    name: "primaryButtonColor",
    baseName: "primary_button_color",
    type: "string"
  },
  {
    name: "primaryButtonColorHover",
    baseName: "primary_button_color_hover",
    type: "string"
  },
  {
    name: "primaryButtonTextColor",
    baseName: "primary_button_text_color",
    type: "string"
  },
  {
    name: "primaryButtonTextColorHover",
    baseName: "primary_button_text_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonColor",
    baseName: "secondary_button_color",
    type: "string"
  },
  {
    name: "secondaryButtonColorHover",
    baseName: "secondary_button_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonTextColor",
    baseName: "secondary_button_text_color",
    type: "string"
  },
  {
    name: "secondaryButtonTextColorHover",
    baseName: "secondary_button_text_color_hover",
    type: "string"
  },
  {
    name: "textColor1",
    baseName: "text_color1",
    type: "string"
  },
  {
    name: "textColor2",
    baseName: "text_color2",
    type: "string"
  }
];

// model/apiAppUpdateRequest.ts
var _ApiAppUpdateRequest = class {
  static getAttributeTypeMap() {
    return _ApiAppUpdateRequest.attributeTypeMap;
  }
};
var ApiAppUpdateRequest = _ApiAppUpdateRequest;
ApiAppUpdateRequest.discriminator = void 0;
ApiAppUpdateRequest.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "customLogoFile",
    baseName: "custom_logo_file",
    type: "RequestFile"
  },
  {
    name: "domains",
    baseName: "domains",
    type: "Array<string>"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "oauth",
    baseName: "oauth",
    type: "SubOAuth"
  },
  {
    name: "options",
    baseName: "options",
    type: "SubOptions"
  },
  {
    name: "whiteLabelingOptions",
    baseName: "white_labeling_options",
    type: "SubWhiteLabelingOptions"
  }
];

// model/bulkSendJobGetResponse.ts
var _BulkSendJobGetResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobGetResponse.attributeTypeMap;
  }
};
var BulkSendJobGetResponse = _BulkSendJobGetResponse;
BulkSendJobGetResponse.discriminator = void 0;
BulkSendJobGetResponse.attributeTypeMap = [
  {
    name: "bulkSendJob",
    baseName: "bulk_send_job",
    type: "BulkSendJobResponse"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "signatureRequests",
    baseName: "signature_requests",
    type: "Array<BulkSendJobGetResponseSignatureRequests>"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/bulkSendJobGetResponseSignatureRequests.ts
var _BulkSendJobGetResponseSignatureRequests = class {
  constructor() {
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _BulkSendJobGetResponseSignatureRequests.attributeTypeMap;
  }
};
var BulkSendJobGetResponseSignatureRequests = _BulkSendJobGetResponseSignatureRequests;
BulkSendJobGetResponseSignatureRequests.discriminator = void 0;
BulkSendJobGetResponseSignatureRequests.attributeTypeMap = [
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "signatureRequestId",
    baseName: "signature_request_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "originalTitle",
    baseName: "original_title",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "object"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "isComplete",
    baseName: "is_complete",
    type: "boolean"
  },
  {
    name: "isDeclined",
    baseName: "is_declined",
    type: "boolean"
  },
  {
    name: "hasError",
    baseName: "has_error",
    type: "boolean"
  },
  {
    name: "filesUrl",
    baseName: "files_url",
    type: "string"
  },
  {
    name: "signingUrl",
    baseName: "signing_url",
    type: "string"
  },
  {
    name: "detailsUrl",
    baseName: "details_url",
    type: "string"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SignatureRequestResponseCustomFieldBase>"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SignatureRequestResponseAttachment>"
  },
  {
    name: "responseData",
    baseName: "response_data",
    type: "Array<SignatureRequestResponseDataBase>"
  },
  {
    name: "signatures",
    baseName: "signatures",
    type: "Array<SignatureRequestResponseSignatures>"
  },
  {
    name: "bulkSendJobId",
    baseName: "bulk_send_job_id",
    type: "string"
  }
];

// model/bulkSendJobListResponse.ts
var _BulkSendJobListResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobListResponse.attributeTypeMap;
  }
};
var BulkSendJobListResponse = _BulkSendJobListResponse;
BulkSendJobListResponse.discriminator = void 0;
BulkSendJobListResponse.attributeTypeMap = [
  {
    name: "bulkSendJobs",
    baseName: "bulk_send_jobs",
    type: "Array<BulkSendJobResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/bulkSendJobResponse.ts
var _BulkSendJobResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobResponse.attributeTypeMap;
  }
};
var BulkSendJobResponse = _BulkSendJobResponse;
BulkSendJobResponse.discriminator = void 0;
BulkSendJobResponse.attributeTypeMap = [
  {
    name: "bulkSendJobId",
    baseName: "bulk_send_job_id",
    type: "string"
  },
  {
    name: "total",
    baseName: "total",
    type: "number"
  },
  {
    name: "isCreator",
    baseName: "is_creator",
    type: "boolean"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  }
];

// model/bulkSendJobSendResponse.ts
var _BulkSendJobSendResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobSendResponse.attributeTypeMap;
  }
};
var BulkSendJobSendResponse = _BulkSendJobSendResponse;
BulkSendJobSendResponse.discriminator = void 0;
BulkSendJobSendResponse.attributeTypeMap = [
  {
    name: "bulkSendJob",
    baseName: "bulk_send_job",
    type: "BulkSendJobResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/embeddedEditUrlRequest.ts
var _EmbeddedEditUrlRequest = class {
  constructor() {
    this["allowEditCcs"] = false;
    this["forceSignerRoles"] = false;
    this["forceSubjectMessage"] = false;
    this["previewOnly"] = false;
    this["showPreview"] = false;
    this["showProgressStepper"] = true;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _EmbeddedEditUrlRequest.attributeTypeMap;
  }
};
var EmbeddedEditUrlRequest = _EmbeddedEditUrlRequest;
EmbeddedEditUrlRequest.discriminator = void 0;
EmbeddedEditUrlRequest.attributeTypeMap = [
  {
    name: "allowEditCcs",
    baseName: "allow_edit_ccs",
    type: "boolean"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<string>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "forceSignerRoles",
    baseName: "force_signer_roles",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "mergeFields",
    baseName: "merge_fields",
    type: "Array<SubMergeField>"
  },
  {
    name: "previewOnly",
    baseName: "preview_only",
    type: "boolean"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/embeddedEditUrlResponse.ts
var _EmbeddedEditUrlResponse = class {
  static getAttributeTypeMap() {
    return _EmbeddedEditUrlResponse.attributeTypeMap;
  }
};
var EmbeddedEditUrlResponse = _EmbeddedEditUrlResponse;
EmbeddedEditUrlResponse.discriminator = void 0;
EmbeddedEditUrlResponse.attributeTypeMap = [
  {
    name: "embedded",
    baseName: "embedded",
    type: "EmbeddedEditUrlResponseEmbedded"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/embeddedEditUrlResponseEmbedded.ts
var _EmbeddedEditUrlResponseEmbedded = class {
  static getAttributeTypeMap() {
    return _EmbeddedEditUrlResponseEmbedded.attributeTypeMap;
  }
};
var EmbeddedEditUrlResponseEmbedded = _EmbeddedEditUrlResponseEmbedded;
EmbeddedEditUrlResponseEmbedded.discriminator = void 0;
EmbeddedEditUrlResponseEmbedded.attributeTypeMap = [
  {
    name: "editUrl",
    baseName: "edit_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/embeddedSignUrlResponse.ts
var _EmbeddedSignUrlResponse = class {
  static getAttributeTypeMap() {
    return _EmbeddedSignUrlResponse.attributeTypeMap;
  }
};
var EmbeddedSignUrlResponse = _EmbeddedSignUrlResponse;
EmbeddedSignUrlResponse.discriminator = void 0;
EmbeddedSignUrlResponse.attributeTypeMap = [
  {
    name: "embedded",
    baseName: "embedded",
    type: "EmbeddedSignUrlResponseEmbedded"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/embeddedSignUrlResponseEmbedded.ts
var _EmbeddedSignUrlResponseEmbedded = class {
  static getAttributeTypeMap() {
    return _EmbeddedSignUrlResponseEmbedded.attributeTypeMap;
  }
};
var EmbeddedSignUrlResponseEmbedded = _EmbeddedSignUrlResponseEmbedded;
EmbeddedSignUrlResponseEmbedded.discriminator = void 0;
EmbeddedSignUrlResponseEmbedded.attributeTypeMap = [
  {
    name: "signUrl",
    baseName: "sign_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/errorResponse.ts
var _ErrorResponse = class {
  static getAttributeTypeMap() {
    return _ErrorResponse.attributeTypeMap;
  }
};
var ErrorResponse = _ErrorResponse;
ErrorResponse.discriminator = void 0;
ErrorResponse.attributeTypeMap = [
  {
    name: "error",
    baseName: "error",
    type: "ErrorResponseError"
  }
];

// model/errorResponseError.ts
var _ErrorResponseError = class {
  static getAttributeTypeMap() {
    return _ErrorResponseError.attributeTypeMap;
  }
};
var ErrorResponseError = _ErrorResponseError;
ErrorResponseError.discriminator = void 0;
ErrorResponseError.attributeTypeMap = [
  {
    name: "errorMsg",
    baseName: "error_msg",
    type: "string"
  },
  {
    name: "errorName",
    baseName: "error_name",
    type: "string"
  },
  {
    name: "errorPath",
    baseName: "error_path",
    type: "string"
  }
];

// model/eventCallbackRequest.ts
var _EventCallbackRequest = class {
  static getAttributeTypeMap() {
    return _EventCallbackRequest.attributeTypeMap;
  }
};
var EventCallbackRequest = _EventCallbackRequest;
EventCallbackRequest.discriminator = void 0;
EventCallbackRequest.attributeTypeMap = [
  {
    name: "event",
    baseName: "event",
    type: "EventCallbackRequestEvent"
  },
  {
    name: "account",
    baseName: "account",
    type: "AccountResponse"
  },
  {
    name: "signatureRequest",
    baseName: "signature_request",
    type: "SignatureRequestResponse"
  },
  {
    name: "template",
    baseName: "template",
    type: "TemplateResponse"
  }
];

// model/eventCallbackRequestEvent.ts
var _EventCallbackRequestEvent = class {
  static getAttributeTypeMap() {
    return _EventCallbackRequestEvent.attributeTypeMap;
  }
};
var EventCallbackRequestEvent = _EventCallbackRequestEvent;
EventCallbackRequestEvent.discriminator = void 0;
EventCallbackRequestEvent.attributeTypeMap = [
  {
    name: "eventTime",
    baseName: "event_time",
    type: "string"
  },
  {
    name: "eventType",
    baseName: "event_type",
    type: "EventCallbackRequestEvent.EventTypeEnum"
  },
  {
    name: "eventHash",
    baseName: "event_hash",
    type: "string"
  },
  {
    name: "eventMetadata",
    baseName: "event_metadata",
    type: "EventCallbackRequestEventMetadata"
  }
];
((EventCallbackRequestEvent2) => {
  let EventTypeEnum;
  ((EventTypeEnum2) => {
    EventTypeEnum2["AccountConfirmed"] = "account_confirmed";
    EventTypeEnum2["UnknownError"] = "unknown_error";
    EventTypeEnum2["FileError"] = "file_error";
    EventTypeEnum2["SignUrlInvalid"] = "sign_url_invalid";
    EventTypeEnum2["SignatureRequestViewed"] = "signature_request_viewed";
    EventTypeEnum2["SignatureRequestSigned"] = "signature_request_signed";
    EventTypeEnum2["SignatureRequestSent"] = "signature_request_sent";
    EventTypeEnum2["SignatureRequestAllSigned"] = "signature_request_all_signed";
    EventTypeEnum2["SignatureRequestEmailBounce"] = "signature_request_email_bounce";
    EventTypeEnum2["SignatureRequestRemind"] = "signature_request_remind";
    EventTypeEnum2["SignatureRequestIncompleteQes"] = "signature_request_incomplete_qes";
    EventTypeEnum2["SignatureRequestDestroyed"] = "signature_request_destroyed";
    EventTypeEnum2["SignatureRequestCanceled"] = "signature_request_canceled";
    EventTypeEnum2["SignatureRequestDownloadable"] = "signature_request_downloadable";
    EventTypeEnum2["SignatureRequestDeclined"] = "signature_request_declined";
    EventTypeEnum2["SignatureRequestReassigned"] = "signature_request_reassigned";
    EventTypeEnum2["SignatureRequestInvalid"] = "signature_request_invalid";
    EventTypeEnum2["SignatureRequestPrepared"] = "signature_request_prepared";
    EventTypeEnum2["SignatureRequestExpired"] = "signature_request_expired";
    EventTypeEnum2["TemplateCreated"] = "template_created";
    EventTypeEnum2["TemplateError"] = "template_error";
  })(EventTypeEnum = EventCallbackRequestEvent2.EventTypeEnum || (EventCallbackRequestEvent2.EventTypeEnum = {}));
})(EventCallbackRequestEvent || (EventCallbackRequestEvent = {}));

// model/eventCallbackRequestEventMetadata.ts
var _EventCallbackRequestEventMetadata = class {
  static getAttributeTypeMap() {
    return _EventCallbackRequestEventMetadata.attributeTypeMap;
  }
};
var EventCallbackRequestEventMetadata = _EventCallbackRequestEventMetadata;
EventCallbackRequestEventMetadata.discriminator = void 0;
EventCallbackRequestEventMetadata.attributeTypeMap = [
  {
    name: "relatedSignatureId",
    baseName: "related_signature_id",
    type: "string"
  },
  {
    name: "reportedForAccountId",
    baseName: "reported_for_account_id",
    type: "string"
  },
  {
    name: "reportedForAppId",
    baseName: "reported_for_app_id",
    type: "string"
  },
  {
    name: "eventMessage",
    baseName: "event_message",
    type: "string"
  }
];

// model/fileResponse.ts
var _FileResponse = class {
  static getAttributeTypeMap() {
    return _FileResponse.attributeTypeMap;
  }
};
var FileResponse = _FileResponse;
FileResponse.discriminator = void 0;
FileResponse.attributeTypeMap = [
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/fileResponseDataUri.ts
var _FileResponseDataUri = class {
  static getAttributeTypeMap() {
    return _FileResponseDataUri.attributeTypeMap;
  }
};
var FileResponseDataUri = _FileResponseDataUri;
FileResponseDataUri.discriminator = void 0;
FileResponseDataUri.attributeTypeMap = [
  {
    name: "dataUri",
    baseName: "data_uri",
    type: "string"
  }
];

// model/listInfoResponse.ts
var _ListInfoResponse = class {
  static getAttributeTypeMap() {
    return _ListInfoResponse.attributeTypeMap;
  }
};
var ListInfoResponse = _ListInfoResponse;
ListInfoResponse.discriminator = void 0;
ListInfoResponse.attributeTypeMap = [
  {
    name: "numPages",
    baseName: "num_pages",
    type: "number"
  },
  {
    name: "numResults",
    baseName: "num_results",
    type: "number"
  },
  {
    name: "page",
    baseName: "page",
    type: "number"
  },
  {
    name: "pageSize",
    baseName: "page_size",
    type: "number"
  }
];

// model/oAuthTokenGenerateRequest.ts
var _OAuthTokenGenerateRequest = class {
  constructor() {
    this["grantType"] = "authorization_code";
  }
  static getAttributeTypeMap() {
    return _OAuthTokenGenerateRequest.attributeTypeMap;
  }
};
var OAuthTokenGenerateRequest = _OAuthTokenGenerateRequest;
OAuthTokenGenerateRequest.discriminator = void 0;
OAuthTokenGenerateRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "clientSecret",
    baseName: "client_secret",
    type: "string"
  },
  {
    name: "code",
    baseName: "code",
    type: "string"
  },
  {
    name: "grantType",
    baseName: "grant_type",
    type: "string"
  },
  {
    name: "state",
    baseName: "state",
    type: "string"
  }
];

// model/oAuthTokenRefreshRequest.ts
var _OAuthTokenRefreshRequest = class {
  constructor() {
    this["grantType"] = "refresh_token";
  }
  static getAttributeTypeMap() {
    return _OAuthTokenRefreshRequest.attributeTypeMap;
  }
};
var OAuthTokenRefreshRequest = _OAuthTokenRefreshRequest;
OAuthTokenRefreshRequest.discriminator = void 0;
OAuthTokenRefreshRequest.attributeTypeMap = [
  {
    name: "grantType",
    baseName: "grant_type",
    type: "string"
  },
  {
    name: "refreshToken",
    baseName: "refresh_token",
    type: "string"
  }
];

// model/oAuthTokenResponse.ts
var _OAuthTokenResponse = class {
  static getAttributeTypeMap() {
    return _OAuthTokenResponse.attributeTypeMap;
  }
};
var OAuthTokenResponse = _OAuthTokenResponse;
OAuthTokenResponse.discriminator = void 0;
OAuthTokenResponse.attributeTypeMap = [
  {
    name: "accessToken",
    baseName: "access_token",
    type: "string"
  },
  {
    name: "tokenType",
    baseName: "token_type",
    type: "string"
  },
  {
    name: "refreshToken",
    baseName: "refresh_token",
    type: "string"
  },
  {
    name: "expiresIn",
    baseName: "expires_in",
    type: "number"
  },
  {
    name: "state",
    baseName: "state",
    type: "string"
  }
];

// model/reportCreateRequest.ts
var _ReportCreateRequest = class {
  static getAttributeTypeMap() {
    return _ReportCreateRequest.attributeTypeMap;
  }
};
var ReportCreateRequest = _ReportCreateRequest;
ReportCreateRequest.discriminator = void 0;
ReportCreateRequest.attributeTypeMap = [
  {
    name: "endDate",
    baseName: "end_date",
    type: "string"
  },
  {
    name: "reportType",
    baseName: "report_type",
    type: "Array<ReportCreateRequest.ReportTypeEnum>"
  },
  {
    name: "startDate",
    baseName: "start_date",
    type: "string"
  }
];
((ReportCreateRequest2) => {
  let ReportTypeEnum;
  ((ReportTypeEnum2) => {
    ReportTypeEnum2["UserActivity"] = "user_activity";
    ReportTypeEnum2["DocumentStatus"] = "document_status";
  })(ReportTypeEnum = ReportCreateRequest2.ReportTypeEnum || (ReportCreateRequest2.ReportTypeEnum = {}));
})(ReportCreateRequest || (ReportCreateRequest = {}));

// model/reportCreateResponse.ts
var _ReportCreateResponse = class {
  static getAttributeTypeMap() {
    return _ReportCreateResponse.attributeTypeMap;
  }
};
var ReportCreateResponse = _ReportCreateResponse;
ReportCreateResponse.discriminator = void 0;
ReportCreateResponse.attributeTypeMap = [
  {
    name: "report",
    baseName: "report",
    type: "ReportResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/reportResponse.ts
var _ReportResponse = class {
  static getAttributeTypeMap() {
    return _ReportResponse.attributeTypeMap;
  }
};
var ReportResponse = _ReportResponse;
ReportResponse.discriminator = void 0;
ReportResponse.attributeTypeMap = [
  {
    name: "success",
    baseName: "success",
    type: "string"
  },
  {
    name: "startDate",
    baseName: "start_date",
    type: "string"
  },
  {
    name: "endDate",
    baseName: "end_date",
    type: "string"
  },
  {
    name: "reportType",
    baseName: "report_type",
    type: "Array<ReportResponse.ReportTypeEnum>"
  }
];
((ReportResponse2) => {
  let ReportTypeEnum;
  ((ReportTypeEnum2) => {
    ReportTypeEnum2["UserActivity"] = "user_activity";
    ReportTypeEnum2["DocumentStatus"] = "document_status";
  })(ReportTypeEnum = ReportResponse2.ReportTypeEnum || (ReportResponse2.ReportTypeEnum = {}));
})(ReportResponse || (ReportResponse = {}));

// model/signatureRequestBulkCreateEmbeddedWithTemplateRequest.ts
var _SignatureRequestBulkCreateEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestBulkCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
};
var SignatureRequestBulkCreateEmbeddedWithTemplateRequest = _SignatureRequestBulkCreateEmbeddedWithTemplateRequest;
SignatureRequestBulkCreateEmbeddedWithTemplateRequest.discriminator = void 0;
SignatureRequestBulkCreateEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "signerFile",
    baseName: "signer_file",
    type: "RequestFile"
  },
  {
    name: "signerList",
    baseName: "signer_list",
    type: "Array<SubBulkSignerList>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestBulkSendWithTemplateRequest.ts
var _SignatureRequestBulkSendWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestBulkSendWithTemplateRequest.attributeTypeMap;
  }
};
var SignatureRequestBulkSendWithTemplateRequest = _SignatureRequestBulkSendWithTemplateRequest;
SignatureRequestBulkSendWithTemplateRequest.discriminator = void 0;
SignatureRequestBulkSendWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "signerFile",
    baseName: "signer_file",
    type: "RequestFile"
  },
  {
    name: "signerList",
    baseName: "signer_list",
    type: "Array<SubBulkSignerList>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestCreateEmbeddedRequest.ts
var _SignatureRequestCreateEmbeddedRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["hideTextTags"] = false;
    this["testMode"] = false;
    this["useTextTags"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestCreateEmbeddedRequest.attributeTypeMap;
  }
};
var SignatureRequestCreateEmbeddedRequest = _SignatureRequestCreateEmbeddedRequest;
SignatureRequestCreateEmbeddedRequest.discriminator = void 0;
SignatureRequestCreateEmbeddedRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/signatureRequestCreateEmbeddedWithTemplateRequest.ts
var _SignatureRequestCreateEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
};
var SignatureRequestCreateEmbeddedWithTemplateRequest = _SignatureRequestCreateEmbeddedWithTemplateRequest;
SignatureRequestCreateEmbeddedWithTemplateRequest.discriminator = void 0;
SignatureRequestCreateEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  }
];

// model/signatureRequestGetResponse.ts
var _SignatureRequestGetResponse = class {
  static getAttributeTypeMap() {
    return _SignatureRequestGetResponse.attributeTypeMap;
  }
};
var SignatureRequestGetResponse = _SignatureRequestGetResponse;
SignatureRequestGetResponse.discriminator = void 0;
SignatureRequestGetResponse.attributeTypeMap = [
  {
    name: "signatureRequest",
    baseName: "signature_request",
    type: "SignatureRequestResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/signatureRequestListResponse.ts
var _SignatureRequestListResponse = class {
  static getAttributeTypeMap() {
    return _SignatureRequestListResponse.attributeTypeMap;
  }
};
var SignatureRequestListResponse = _SignatureRequestListResponse;
SignatureRequestListResponse.discriminator = void 0;
SignatureRequestListResponse.attributeTypeMap = [
  {
    name: "signatureRequests",
    baseName: "signature_requests",
    type: "Array<SignatureRequestResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/signatureRequestRemindRequest.ts
var _SignatureRequestRemindRequest = class {
  static getAttributeTypeMap() {
    return _SignatureRequestRemindRequest.attributeTypeMap;
  }
};
var SignatureRequestRemindRequest = _SignatureRequestRemindRequest;
SignatureRequestRemindRequest.discriminator = void 0;
SignatureRequestRemindRequest.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/signatureRequestResponse.ts
var _SignatureRequestResponse = class {
  constructor() {
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestResponse.attributeTypeMap;
  }
};
var SignatureRequestResponse = _SignatureRequestResponse;
SignatureRequestResponse.discriminator = void 0;
SignatureRequestResponse.attributeTypeMap = [
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "signatureRequestId",
    baseName: "signature_request_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "originalTitle",
    baseName: "original_title",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "object"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "isComplete",
    baseName: "is_complete",
    type: "boolean"
  },
  {
    name: "isDeclined",
    baseName: "is_declined",
    type: "boolean"
  },
  {
    name: "hasError",
    baseName: "has_error",
    type: "boolean"
  },
  {
    name: "filesUrl",
    baseName: "files_url",
    type: "string"
  },
  {
    name: "signingUrl",
    baseName: "signing_url",
    type: "string"
  },
  {
    name: "detailsUrl",
    baseName: "details_url",
    type: "string"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SignatureRequestResponseCustomFieldBase>"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SignatureRequestResponseAttachment>"
  },
  {
    name: "responseData",
    baseName: "response_data",
    type: "Array<SignatureRequestResponseDataBase>"
  },
  {
    name: "signatures",
    baseName: "signatures",
    type: "Array<SignatureRequestResponseSignatures>"
  }
];

// model/signatureRequestResponseAttachment.ts
var _SignatureRequestResponseAttachment = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseAttachment.attributeTypeMap;
  }
};
var SignatureRequestResponseAttachment = _SignatureRequestResponseAttachment;
SignatureRequestResponseAttachment.discriminator = void 0;
SignatureRequestResponseAttachment.attributeTypeMap = [
  {
    name: "id",
    baseName: "id",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "instructions",
    baseName: "instructions",
    type: "string"
  },
  {
    name: "uploadedAt",
    baseName: "uploaded_at",
    type: "number"
  }
];

// model/signatureRequestResponseCustomFieldBase.ts
var _SignatureRequestResponseCustomFieldBase = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseCustomFieldBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "SignatureRequestResponseCustomFieldCheckbox";
    }
    if (value === "text") {
      return "SignatureRequestResponseCustomFieldText";
    }
    return null;
  }
};
var SignatureRequestResponseCustomFieldBase = _SignatureRequestResponseCustomFieldBase;
SignatureRequestResponseCustomFieldBase.discriminator = "type";
SignatureRequestResponseCustomFieldBase.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "editor",
    baseName: "editor",
    type: "string"
  }
];

// model/signatureRequestResponseCustomFieldCheckbox.ts
var _SignatureRequestResponseCustomFieldCheckbox = class extends SignatureRequestResponseCustomFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseCustomFieldCheckbox.attributeTypeMap);
  }
};
var SignatureRequestResponseCustomFieldCheckbox = _SignatureRequestResponseCustomFieldCheckbox;
SignatureRequestResponseCustomFieldCheckbox.discriminator = void 0;
SignatureRequestResponseCustomFieldCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "boolean"
  }
];

// model/signatureRequestResponseCustomFieldText.ts
var _SignatureRequestResponseCustomFieldText = class extends SignatureRequestResponseCustomFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseCustomFieldText.attributeTypeMap);
  }
};
var SignatureRequestResponseCustomFieldText = _SignatureRequestResponseCustomFieldText;
SignatureRequestResponseCustomFieldText.discriminator = void 0;
SignatureRequestResponseCustomFieldText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseCustomFieldTypeEnum.ts
var SignatureRequestResponseCustomFieldTypeEnum = /* @__PURE__ */ ((SignatureRequestResponseCustomFieldTypeEnum2) => {
  SignatureRequestResponseCustomFieldTypeEnum2["Text"] = "text";
  SignatureRequestResponseCustomFieldTypeEnum2["Checkbox"] = "checkbox";
  return SignatureRequestResponseCustomFieldTypeEnum2;
})(SignatureRequestResponseCustomFieldTypeEnum || {});

// model/signatureRequestResponseDataBase.ts
var _SignatureRequestResponseDataBase = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseDataBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "SignatureRequestResponseDataValueCheckbox";
    }
    if (value === "checkbox-merge") {
      return "SignatureRequestResponseDataValueCheckboxMerge";
    }
    if (value === "date_signed") {
      return "SignatureRequestResponseDataValueDateSigned";
    }
    if (value === "dropdown") {
      return "SignatureRequestResponseDataValueDropdown";
    }
    if (value === "initials") {
      return "SignatureRequestResponseDataValueInitials";
    }
    if (value === "radio") {
      return "SignatureRequestResponseDataValueRadio";
    }
    if (value === "signature") {
      return "SignatureRequestResponseDataValueSignature";
    }
    if (value === "text") {
      return "SignatureRequestResponseDataValueText";
    }
    if (value === "text-merge") {
      return "SignatureRequestResponseDataValueTextMerge";
    }
    return null;
  }
};
var SignatureRequestResponseDataBase = _SignatureRequestResponseDataBase;
SignatureRequestResponseDataBase.discriminator = "type";
SignatureRequestResponseDataBase.attributeTypeMap = [
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "signatureId",
    baseName: "signature_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/signatureRequestResponseDataTypeEnum.ts
var SignatureRequestResponseDataTypeEnum = /* @__PURE__ */ ((SignatureRequestResponseDataTypeEnum2) => {
  SignatureRequestResponseDataTypeEnum2["Text"] = "text";
  SignatureRequestResponseDataTypeEnum2["Checkbox"] = "checkbox";
  SignatureRequestResponseDataTypeEnum2["DateSigned"] = "date_signed";
  SignatureRequestResponseDataTypeEnum2["Dropdown"] = "dropdown";
  SignatureRequestResponseDataTypeEnum2["Initials"] = "initials";
  SignatureRequestResponseDataTypeEnum2["Radio"] = "radio";
  SignatureRequestResponseDataTypeEnum2["Signature"] = "signature";
  SignatureRequestResponseDataTypeEnum2["TextMerge"] = "text-merge";
  SignatureRequestResponseDataTypeEnum2["CheckboxMerge"] = "checkbox-merge";
  return SignatureRequestResponseDataTypeEnum2;
})(SignatureRequestResponseDataTypeEnum || {});

// model/signatureRequestResponseDataValueCheckbox.ts
var _SignatureRequestResponseDataValueCheckbox = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueCheckbox.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueCheckbox = _SignatureRequestResponseDataValueCheckbox;
SignatureRequestResponseDataValueCheckbox.discriminator = void 0;
SignatureRequestResponseDataValueCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "boolean"
  }
];

// model/signatureRequestResponseDataValueCheckboxMerge.ts
var _SignatureRequestResponseDataValueCheckboxMerge = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueCheckboxMerge.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueCheckboxMerge = _SignatureRequestResponseDataValueCheckboxMerge;
SignatureRequestResponseDataValueCheckboxMerge.discriminator = void 0;
SignatureRequestResponseDataValueCheckboxMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueDateSigned.ts
var _SignatureRequestResponseDataValueDateSigned = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "date_signed";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueDateSigned.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueDateSigned = _SignatureRequestResponseDataValueDateSigned;
SignatureRequestResponseDataValueDateSigned.discriminator = void 0;
SignatureRequestResponseDataValueDateSigned.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueDropdown.ts
var _SignatureRequestResponseDataValueDropdown = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "dropdown";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueDropdown.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueDropdown = _SignatureRequestResponseDataValueDropdown;
SignatureRequestResponseDataValueDropdown.discriminator = void 0;
SignatureRequestResponseDataValueDropdown.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueInitials.ts
var _SignatureRequestResponseDataValueInitials = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "initials";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueInitials.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueInitials = _SignatureRequestResponseDataValueInitials;
SignatureRequestResponseDataValueInitials.discriminator = void 0;
SignatureRequestResponseDataValueInitials.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueRadio.ts
var _SignatureRequestResponseDataValueRadio = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "radio";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueRadio.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueRadio = _SignatureRequestResponseDataValueRadio;
SignatureRequestResponseDataValueRadio.discriminator = void 0;
SignatureRequestResponseDataValueRadio.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "boolean"
  }
];

// model/signatureRequestResponseDataValueSignature.ts
var _SignatureRequestResponseDataValueSignature = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "signature";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueSignature.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueSignature = _SignatureRequestResponseDataValueSignature;
SignatureRequestResponseDataValueSignature.discriminator = void 0;
SignatureRequestResponseDataValueSignature.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueText.ts
var _SignatureRequestResponseDataValueText = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueText.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueText = _SignatureRequestResponseDataValueText;
SignatureRequestResponseDataValueText.discriminator = void 0;
SignatureRequestResponseDataValueText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueTextMerge.ts
var _SignatureRequestResponseDataValueTextMerge = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "text-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueTextMerge.attributeTypeMap);
  }
};
var SignatureRequestResponseDataValueTextMerge = _SignatureRequestResponseDataValueTextMerge;
SignatureRequestResponseDataValueTextMerge.discriminator = void 0;
SignatureRequestResponseDataValueTextMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseSignatures.ts
var _SignatureRequestResponseSignatures = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseSignatures.attributeTypeMap;
  }
};
var SignatureRequestResponseSignatures = _SignatureRequestResponseSignatures;
SignatureRequestResponseSignatures.discriminator = void 0;
SignatureRequestResponseSignatures.attributeTypeMap = [
  {
    name: "signatureId",
    baseName: "signature_id",
    type: "string"
  },
  {
    name: "signerEmailAddress",
    baseName: "signer_email_address",
    type: "string"
  },
  {
    name: "signerName",
    baseName: "signer_name",
    type: "string"
  },
  {
    name: "signerRole",
    baseName: "signer_role",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  },
  {
    name: "statusCode",
    baseName: "status_code",
    type: "string"
  },
  {
    name: "declineReason",
    baseName: "decline_reason",
    type: "string"
  },
  {
    name: "signedAt",
    baseName: "signed_at",
    type: "number"
  },
  {
    name: "lastViewedAt",
    baseName: "last_viewed_at",
    type: "number"
  },
  {
    name: "lastRemindedAt",
    baseName: "last_reminded_at",
    type: "number"
  },
  {
    name: "hasPin",
    baseName: "has_pin",
    type: "boolean"
  },
  {
    name: "hasSmsAuth",
    baseName: "has_sms_auth",
    type: "boolean"
  },
  {
    name: "hasSmsDelivery",
    baseName: "has_sms_delivery",
    type: "boolean"
  },
  {
    name: "smsPhoneNumber",
    baseName: "sms_phone_number",
    type: "string"
  },
  {
    name: "reassignedBy",
    baseName: "reassigned_by",
    type: "string"
  },
  {
    name: "reassignmentReason",
    baseName: "reassignment_reason",
    type: "string"
  },
  {
    name: "reassignedFrom",
    baseName: "reassigned_from",
    type: "string"
  },
  {
    name: "error",
    baseName: "error",
    type: "string"
  }
];

// model/signatureRequestSendRequest.ts
var _SignatureRequestSendRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["hideTextTags"] = false;
    this["isQualifiedSignature"] = false;
    this["testMode"] = false;
    this["useTextTags"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestSendRequest.attributeTypeMap;
  }
};
var SignatureRequestSendRequest = _SignatureRequestSendRequest;
SignatureRequestSendRequest.discriminator = void 0;
SignatureRequestSendRequest.attributeTypeMap = [
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "isQualifiedSignature",
    baseName: "is_qualified_signature",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/signatureRequestSendWithTemplateRequest.ts
var _SignatureRequestSendWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["isQualifiedSignature"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestSendWithTemplateRequest.attributeTypeMap;
  }
};
var SignatureRequestSendWithTemplateRequest = _SignatureRequestSendWithTemplateRequest;
SignatureRequestSendWithTemplateRequest.discriminator = void 0;
SignatureRequestSendWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "isQualifiedSignature",
    baseName: "is_qualified_signature",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestUpdateRequest.ts
var _SignatureRequestUpdateRequest = class {
  static getAttributeTypeMap() {
    return _SignatureRequestUpdateRequest.attributeTypeMap;
  }
};
var SignatureRequestUpdateRequest = _SignatureRequestUpdateRequest;
SignatureRequestUpdateRequest.discriminator = void 0;
SignatureRequestUpdateRequest.attributeTypeMap = [
  {
    name: "signatureId",
    baseName: "signature_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/subAttachment.ts
var _SubAttachment = class {
  constructor() {
    this["required"] = false;
  }
  static getAttributeTypeMap() {
    return _SubAttachment.attributeTypeMap;
  }
};
var SubAttachment = _SubAttachment;
SubAttachment.discriminator = void 0;
SubAttachment.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "signerIndex",
    baseName: "signer_index",
    type: "number"
  },
  {
    name: "instructions",
    baseName: "instructions",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  }
];

// model/subBulkSignerList.ts
var _SubBulkSignerList = class {
  static getAttributeTypeMap() {
    return _SubBulkSignerList.attributeTypeMap;
  }
};
var SubBulkSignerList = _SubBulkSignerList;
SubBulkSignerList.discriminator = void 0;
SubBulkSignerList.attributeTypeMap = [
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubBulkSignerListCustomField>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  }
];

// model/subBulkSignerListCustomField.ts
var _SubBulkSignerListCustomField = class {
  static getAttributeTypeMap() {
    return _SubBulkSignerListCustomField.attributeTypeMap;
  }
};
var SubBulkSignerListCustomField = _SubBulkSignerListCustomField;
SubBulkSignerListCustomField.discriminator = void 0;
SubBulkSignerListCustomField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/subCC.ts
var _SubCC = class {
  static getAttributeTypeMap() {
    return _SubCC.attributeTypeMap;
  }
};
var SubCC = _SubCC;
SubCC.discriminator = void 0;
SubCC.attributeTypeMap = [
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/subCustomField.ts
var _SubCustomField = class {
  constructor() {
    this["required"] = false;
  }
  static getAttributeTypeMap() {
    return _SubCustomField.attributeTypeMap;
  }
};
var SubCustomField = _SubCustomField;
SubCustomField.discriminator = void 0;
SubCustomField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "editor",
    baseName: "editor",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/subEditorOptions.ts
var _SubEditorOptions = class {
  constructor() {
    this["allowEditSigners"] = false;
    this["allowEditDocuments"] = false;
  }
  static getAttributeTypeMap() {
    return _SubEditorOptions.attributeTypeMap;
  }
};
var SubEditorOptions = _SubEditorOptions;
SubEditorOptions.discriminator = void 0;
SubEditorOptions.attributeTypeMap = [
  {
    name: "allowEditSigners",
    baseName: "allow_edit_signers",
    type: "boolean"
  },
  {
    name: "allowEditDocuments",
    baseName: "allow_edit_documents",
    type: "boolean"
  }
];

// model/subFieldOptions.ts
var _SubFieldOptions = class {
  static getAttributeTypeMap() {
    return _SubFieldOptions.attributeTypeMap;
  }
};
var SubFieldOptions = _SubFieldOptions;
SubFieldOptions.discriminator = void 0;
SubFieldOptions.attributeTypeMap = [
  {
    name: "dateFormat",
    baseName: "date_format",
    type: "SubFieldOptions.DateFormatEnum"
  }
];
((SubFieldOptions2) => {
  let DateFormatEnum;
  ((DateFormatEnum2) => {
    DateFormatEnum2["MMDDYYYY"] = "MM / DD / YYYY";
    DateFormatEnum2["MM_DD_YYYY"] = "MM - DD - YYYY";
    DateFormatEnum2["DDMMYYYY"] = "DD / MM / YYYY";
    DateFormatEnum2["DD_MM_YYYY"] = "DD - MM - YYYY";
    DateFormatEnum2["YYYYMMDD"] = "YYYY / MM / DD";
    DateFormatEnum2["YYYY_MM_DD"] = "YYYY - MM - DD";
  })(DateFormatEnum = SubFieldOptions2.DateFormatEnum || (SubFieldOptions2.DateFormatEnum = {}));
})(SubFieldOptions || (SubFieldOptions = {}));

// model/subFormFieldGroup.ts
var _SubFormFieldGroup = class {
  static getAttributeTypeMap() {
    return _SubFormFieldGroup.attributeTypeMap;
  }
};
var SubFormFieldGroup = _SubFormFieldGroup;
SubFormFieldGroup.discriminator = void 0;
SubFormFieldGroup.attributeTypeMap = [
  {
    name: "groupId",
    baseName: "group_id",
    type: "string"
  },
  {
    name: "groupLabel",
    baseName: "group_label",
    type: "string"
  },
  {
    name: "requirement",
    baseName: "requirement",
    type: "string"
  }
];

// model/subFormFieldRule.ts
var _SubFormFieldRule = class {
  constructor() {
    this["triggerOperator"] = "AND";
  }
  static getAttributeTypeMap() {
    return _SubFormFieldRule.attributeTypeMap;
  }
};
var SubFormFieldRule = _SubFormFieldRule;
SubFormFieldRule.discriminator = void 0;
SubFormFieldRule.attributeTypeMap = [
  {
    name: "id",
    baseName: "id",
    type: "string"
  },
  {
    name: "triggerOperator",
    baseName: "trigger_operator",
    type: "string"
  },
  {
    name: "triggers",
    baseName: "triggers",
    type: "Array<SubFormFieldRuleTrigger>"
  },
  {
    name: "actions",
    baseName: "actions",
    type: "Array<SubFormFieldRuleAction>"
  }
];

// model/subFormFieldRuleAction.ts
var _SubFormFieldRuleAction = class {
  static getAttributeTypeMap() {
    return _SubFormFieldRuleAction.attributeTypeMap;
  }
};
var SubFormFieldRuleAction = _SubFormFieldRuleAction;
SubFormFieldRuleAction.discriminator = void 0;
SubFormFieldRuleAction.attributeTypeMap = [
  {
    name: "hidden",
    baseName: "hidden",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "SubFormFieldRuleAction.TypeEnum"
  },
  {
    name: "fieldId",
    baseName: "field_id",
    type: "string"
  },
  {
    name: "groupId",
    baseName: "group_id",
    type: "string"
  }
];
((SubFormFieldRuleAction2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["FieldVisibility"] = "change-field-visibility";
    TypeEnum2["GroupVisibility"] = "change-group-visibility";
  })(TypeEnum = SubFormFieldRuleAction2.TypeEnum || (SubFormFieldRuleAction2.TypeEnum = {}));
})(SubFormFieldRuleAction || (SubFormFieldRuleAction = {}));

// model/subFormFieldRuleTrigger.ts
var _SubFormFieldRuleTrigger = class {
  static getAttributeTypeMap() {
    return _SubFormFieldRuleTrigger.attributeTypeMap;
  }
};
var SubFormFieldRuleTrigger = _SubFormFieldRuleTrigger;
SubFormFieldRuleTrigger.discriminator = void 0;
SubFormFieldRuleTrigger.attributeTypeMap = [
  {
    name: "id",
    baseName: "id",
    type: "string"
  },
  {
    name: "operator",
    baseName: "operator",
    type: "SubFormFieldRuleTrigger.OperatorEnum"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  },
  {
    name: "values",
    baseName: "values",
    type: "Array<string>"
  }
];
((SubFormFieldRuleTrigger2) => {
  let OperatorEnum;
  ((OperatorEnum2) => {
    OperatorEnum2["Any"] = "any";
    OperatorEnum2["Is"] = "is";
    OperatorEnum2["Match"] = "match";
    OperatorEnum2["None"] = "none";
    OperatorEnum2["Not"] = "not";
  })(OperatorEnum = SubFormFieldRuleTrigger2.OperatorEnum || (SubFormFieldRuleTrigger2.OperatorEnum = {}));
})(SubFormFieldRuleTrigger || (SubFormFieldRuleTrigger = {}));

// model/subFormFieldsPerDocumentBase.ts
var _SubFormFieldsPerDocumentBase = class {
  static getAttributeTypeMap() {
    return _SubFormFieldsPerDocumentBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "SubFormFieldsPerDocumentCheckbox";
    }
    if (value === "checkbox-merge") {
      return "SubFormFieldsPerDocumentCheckboxMerge";
    }
    if (value === "date_signed") {
      return "SubFormFieldsPerDocumentDateSigned";
    }
    if (value === "dropdown") {
      return "SubFormFieldsPerDocumentDropdown";
    }
    if (value === "hyperlink") {
      return "SubFormFieldsPerDocumentHyperlink";
    }
    if (value === "initials") {
      return "SubFormFieldsPerDocumentInitials";
    }
    if (value === "radio") {
      return "SubFormFieldsPerDocumentRadio";
    }
    if (value === "signature") {
      return "SubFormFieldsPerDocumentSignature";
    }
    if (value === "text") {
      return "SubFormFieldsPerDocumentText";
    }
    if (value === "text-merge") {
      return "SubFormFieldsPerDocumentTextMerge";
    }
    return null;
  }
};
var SubFormFieldsPerDocumentBase = _SubFormFieldsPerDocumentBase;
SubFormFieldsPerDocumentBase.discriminator = "type";
SubFormFieldsPerDocumentBase.attributeTypeMap = [
  {
    name: "documentIndex",
    baseName: "document_index",
    type: "number"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "page",
    baseName: "page",
    type: "number"
  }
];

// model/subFormFieldsPerDocumentCheckbox.ts
var _SubFormFieldsPerDocumentCheckbox = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentCheckbox.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentCheckbox = _SubFormFieldsPerDocumentCheckbox;
SubFormFieldsPerDocumentCheckbox.discriminator = void 0;
SubFormFieldsPerDocumentCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "isChecked",
    baseName: "is_checked",
    type: "boolean"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentCheckboxMerge.ts
var _SubFormFieldsPerDocumentCheckboxMerge = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentCheckboxMerge.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentCheckboxMerge = _SubFormFieldsPerDocumentCheckboxMerge;
SubFormFieldsPerDocumentCheckboxMerge.discriminator = void 0;
SubFormFieldsPerDocumentCheckboxMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentDateSigned.ts
var _SubFormFieldsPerDocumentDateSigned = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "date_signed";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentDateSigned.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentDateSigned = _SubFormFieldsPerDocumentDateSigned;
SubFormFieldsPerDocumentDateSigned.discriminator = void 0;
SubFormFieldsPerDocumentDateSigned.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentDropdown.ts
var _SubFormFieldsPerDocumentDropdown = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "dropdown";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentDropdown.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentDropdown = _SubFormFieldsPerDocumentDropdown;
SubFormFieldsPerDocumentDropdown.discriminator = void 0;
SubFormFieldsPerDocumentDropdown.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "options",
    baseName: "options",
    type: "Array<string>"
  },
  {
    name: "content",
    baseName: "content",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentHyperlink.ts
var _SubFormFieldsPerDocumentHyperlink = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "hyperlink";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentHyperlink.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentHyperlink = _SubFormFieldsPerDocumentHyperlink;
SubFormFieldsPerDocumentHyperlink.discriminator = void 0;
SubFormFieldsPerDocumentHyperlink.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "content",
    baseName: "content",
    type: "string"
  },
  {
    name: "contentUrl",
    baseName: "content_url",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentInitials.ts
var _SubFormFieldsPerDocumentInitials = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "initials";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentInitials.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentInitials = _SubFormFieldsPerDocumentInitials;
SubFormFieldsPerDocumentInitials.discriminator = void 0;
SubFormFieldsPerDocumentInitials.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentRadio.ts
var _SubFormFieldsPerDocumentRadio = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "radio";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentRadio.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentRadio = _SubFormFieldsPerDocumentRadio;
SubFormFieldsPerDocumentRadio.discriminator = void 0;
SubFormFieldsPerDocumentRadio.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "isChecked",
    baseName: "is_checked",
    type: "boolean"
  }
];

// model/subFormFieldsPerDocumentSignature.ts
var _SubFormFieldsPerDocumentSignature = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "signature";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentSignature.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentSignature = _SubFormFieldsPerDocumentSignature;
SubFormFieldsPerDocumentSignature.discriminator = void 0;
SubFormFieldsPerDocumentSignature.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentText.ts
var _SubFormFieldsPerDocumentText = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentText.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentText = _SubFormFieldsPerDocumentText;
SubFormFieldsPerDocumentText.discriminator = void 0;
SubFormFieldsPerDocumentText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "placeholder",
    baseName: "placeholder",
    type: "string"
  },
  {
    name: "autoFillType",
    baseName: "auto_fill_type",
    type: "string"
  },
  {
    name: "linkId",
    baseName: "link_id",
    type: "string"
  },
  {
    name: "masked",
    baseName: "masked",
    type: "boolean"
  },
  {
    name: "validationType",
    baseName: "validation_type",
    type: "SubFormFieldsPerDocumentText.ValidationTypeEnum"
  },
  {
    name: "validationCustomRegex",
    baseName: "validation_custom_regex",
    type: "string"
  },
  {
    name: "validationCustomRegexFormatLabel",
    baseName: "validation_custom_regex_format_label",
    type: "string"
  }
];
((SubFormFieldsPerDocumentText2) => {
  let ValidationTypeEnum;
  ((ValidationTypeEnum2) => {
    ValidationTypeEnum2["NumbersOnly"] = "numbers_only";
    ValidationTypeEnum2["LettersOnly"] = "letters_only";
    ValidationTypeEnum2["PhoneNumber"] = "phone_number";
    ValidationTypeEnum2["BankRoutingNumber"] = "bank_routing_number";
    ValidationTypeEnum2["BankAccountNumber"] = "bank_account_number";
    ValidationTypeEnum2["EmailAddress"] = "email_address";
    ValidationTypeEnum2["ZipCode"] = "zip_code";
    ValidationTypeEnum2["SocialSecurityNumber"] = "social_security_number";
    ValidationTypeEnum2["EmployerIdentificationNumber"] = "employer_identification_number";
    ValidationTypeEnum2["CustomRegex"] = "custom_regex";
  })(ValidationTypeEnum = SubFormFieldsPerDocumentText2.ValidationTypeEnum || (SubFormFieldsPerDocumentText2.ValidationTypeEnum = {}));
})(SubFormFieldsPerDocumentText || (SubFormFieldsPerDocumentText = {}));

// model/subFormFieldsPerDocumentTextMerge.ts
var _SubFormFieldsPerDocumentTextMerge = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "text-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentTextMerge.attributeTypeMap);
  }
};
var SubFormFieldsPerDocumentTextMerge = _SubFormFieldsPerDocumentTextMerge;
SubFormFieldsPerDocumentTextMerge.discriminator = void 0;
SubFormFieldsPerDocumentTextMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentTypeEnum.ts
var SubFormFieldsPerDocumentTypeEnum = /* @__PURE__ */ ((SubFormFieldsPerDocumentTypeEnum2) => {
  SubFormFieldsPerDocumentTypeEnum2["Checkbox"] = "checkbox";
  SubFormFieldsPerDocumentTypeEnum2["CheckboxMerge"] = "checkbox-merge";
  SubFormFieldsPerDocumentTypeEnum2["DateSigned"] = "date_signed";
  SubFormFieldsPerDocumentTypeEnum2["Dropdown"] = "dropdown";
  SubFormFieldsPerDocumentTypeEnum2["Hyperlink"] = "hyperlink";
  SubFormFieldsPerDocumentTypeEnum2["Initials"] = "initials";
  SubFormFieldsPerDocumentTypeEnum2["Signature"] = "signature";
  SubFormFieldsPerDocumentTypeEnum2["Radio"] = "radio";
  SubFormFieldsPerDocumentTypeEnum2["Text"] = "text";
  SubFormFieldsPerDocumentTypeEnum2["TextMerge"] = "text-merge";
  return SubFormFieldsPerDocumentTypeEnum2;
})(SubFormFieldsPerDocumentTypeEnum || {});

// model/subMergeField.ts
var _SubMergeField = class {
  static getAttributeTypeMap() {
    return _SubMergeField.attributeTypeMap;
  }
};
var SubMergeField = _SubMergeField;
SubMergeField.discriminator = void 0;
SubMergeField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "SubMergeField.TypeEnum"
  }
];
((SubMergeField2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["Text"] = "text";
    TypeEnum2["Checkbox"] = "checkbox";
  })(TypeEnum = SubMergeField2.TypeEnum || (SubMergeField2.TypeEnum = {}));
})(SubMergeField || (SubMergeField = {}));

// model/subOAuth.ts
var _SubOAuth = class {
  static getAttributeTypeMap() {
    return _SubOAuth.attributeTypeMap;
  }
};
var SubOAuth = _SubOAuth;
SubOAuth.discriminator = void 0;
SubOAuth.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "scopes",
    baseName: "scopes",
    type: "Array<SubOAuth.ScopesEnum>"
  }
];
((SubOAuth2) => {
  let ScopesEnum;
  ((ScopesEnum2) => {
    ScopesEnum2["RequestSignature"] = "request_signature";
    ScopesEnum2["BasicAccountInfo"] = "basic_account_info";
    ScopesEnum2["AccountAccess"] = "account_access";
    ScopesEnum2["SignatureRequestAccess"] = "signature_request_access";
    ScopesEnum2["TemplateAccess"] = "template_access";
    ScopesEnum2["TeamAccess"] = "team_access";
    ScopesEnum2["ApiAppAccess"] = "api_app_access";
    ScopesEnum2["Empty"] = "";
  })(ScopesEnum = SubOAuth2.ScopesEnum || (SubOAuth2.ScopesEnum = {}));
})(SubOAuth || (SubOAuth = {}));

// model/subOptions.ts
var _SubOptions = class {
  constructor() {
    this["canInsertEverywhere"] = false;
  }
  static getAttributeTypeMap() {
    return _SubOptions.attributeTypeMap;
  }
};
var SubOptions = _SubOptions;
SubOptions.discriminator = void 0;
SubOptions.attributeTypeMap = [
  {
    name: "canInsertEverywhere",
    baseName: "can_insert_everywhere",
    type: "boolean"
  }
];

// model/subSignatureRequestSigner.ts
var _SubSignatureRequestSigner = class {
  static getAttributeTypeMap() {
    return _SubSignatureRequestSigner.attributeTypeMap;
  }
};
var SubSignatureRequestSigner = _SubSignatureRequestSigner;
SubSignatureRequestSigner.discriminator = void 0;
SubSignatureRequestSigner.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  },
  {
    name: "pin",
    baseName: "pin",
    type: "string"
  },
  {
    name: "smsPhoneNumber",
    baseName: "sms_phone_number",
    type: "string"
  },
  {
    name: "smsPhoneNumberType",
    baseName: "sms_phone_number_type",
    type: "SubSignatureRequestSigner.SmsPhoneNumberTypeEnum"
  }
];
((SubSignatureRequestSigner2) => {
  let SmsPhoneNumberTypeEnum;
  ((SmsPhoneNumberTypeEnum2) => {
    SmsPhoneNumberTypeEnum2["Authentication"] = "authentication";
    SmsPhoneNumberTypeEnum2["Delivery"] = "delivery";
  })(SmsPhoneNumberTypeEnum = SubSignatureRequestSigner2.SmsPhoneNumberTypeEnum || (SubSignatureRequestSigner2.SmsPhoneNumberTypeEnum = {}));
})(SubSignatureRequestSigner || (SubSignatureRequestSigner = {}));

// model/subSignatureRequestTemplateSigner.ts
var _SubSignatureRequestTemplateSigner = class {
  static getAttributeTypeMap() {
    return _SubSignatureRequestTemplateSigner.attributeTypeMap;
  }
};
var SubSignatureRequestTemplateSigner = _SubSignatureRequestTemplateSigner;
SubSignatureRequestTemplateSigner.discriminator = void 0;
SubSignatureRequestTemplateSigner.attributeTypeMap = [
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "pin",
    baseName: "pin",
    type: "string"
  },
  {
    name: "smsPhoneNumber",
    baseName: "sms_phone_number",
    type: "string"
  },
  {
    name: "smsPhoneNumberType",
    baseName: "sms_phone_number_type",
    type: "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum"
  }
];
((SubSignatureRequestTemplateSigner2) => {
  let SmsPhoneNumberTypeEnum;
  ((SmsPhoneNumberTypeEnum2) => {
    SmsPhoneNumberTypeEnum2["Authentication"] = "authentication";
    SmsPhoneNumberTypeEnum2["Delivery"] = "delivery";
  })(SmsPhoneNumberTypeEnum = SubSignatureRequestTemplateSigner2.SmsPhoneNumberTypeEnum || (SubSignatureRequestTemplateSigner2.SmsPhoneNumberTypeEnum = {}));
})(SubSignatureRequestTemplateSigner || (SubSignatureRequestTemplateSigner = {}));

// model/subSigningOptions.ts
var _SubSigningOptions = class {
  constructor() {
    this["draw"] = false;
    this["phone"] = false;
    this["type"] = false;
    this["upload"] = false;
  }
  static getAttributeTypeMap() {
    return _SubSigningOptions.attributeTypeMap;
  }
};
var SubSigningOptions = _SubSigningOptions;
SubSigningOptions.discriminator = void 0;
SubSigningOptions.attributeTypeMap = [
  {
    name: "defaultType",
    baseName: "default_type",
    type: "SubSigningOptions.DefaultTypeEnum"
  },
  {
    name: "draw",
    baseName: "draw",
    type: "boolean"
  },
  {
    name: "phone",
    baseName: "phone",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "boolean"
  },
  {
    name: "upload",
    baseName: "upload",
    type: "boolean"
  }
];
((SubSigningOptions2) => {
  let DefaultTypeEnum;
  ((DefaultTypeEnum2) => {
    DefaultTypeEnum2["Draw"] = "draw";
    DefaultTypeEnum2["Phone"] = "phone";
    DefaultTypeEnum2["Type"] = "type";
    DefaultTypeEnum2["Upload"] = "upload";
  })(DefaultTypeEnum = SubSigningOptions2.DefaultTypeEnum || (SubSigningOptions2.DefaultTypeEnum = {}));
})(SubSigningOptions || (SubSigningOptions = {}));

// model/subTeamResponse.ts
var _SubTeamResponse = class {
  static getAttributeTypeMap() {
    return _SubTeamResponse.attributeTypeMap;
  }
};
var SubTeamResponse = _SubTeamResponse;
SubTeamResponse.discriminator = void 0;
SubTeamResponse.attributeTypeMap = [
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/subTemplateRole.ts
var _SubTemplateRole = class {
  static getAttributeTypeMap() {
    return _SubTemplateRole.attributeTypeMap;
  }
};
var SubTemplateRole = _SubTemplateRole;
SubTemplateRole.discriminator = void 0;
SubTemplateRole.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/subUnclaimedDraftSigner.ts
var _SubUnclaimedDraftSigner = class {
  static getAttributeTypeMap() {
    return _SubUnclaimedDraftSigner.attributeTypeMap;
  }
};
var SubUnclaimedDraftSigner = _SubUnclaimedDraftSigner;
SubUnclaimedDraftSigner.discriminator = void 0;
SubUnclaimedDraftSigner.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/subUnclaimedDraftTemplateSigner.ts
var _SubUnclaimedDraftTemplateSigner = class {
  static getAttributeTypeMap() {
    return _SubUnclaimedDraftTemplateSigner.attributeTypeMap;
  }
};
var SubUnclaimedDraftTemplateSigner = _SubUnclaimedDraftTemplateSigner;
SubUnclaimedDraftTemplateSigner.discriminator = void 0;
SubUnclaimedDraftTemplateSigner.attributeTypeMap = [
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/subWhiteLabelingOptions.ts
var _SubWhiteLabelingOptions = class {
  constructor() {
    this["headerBackgroundColor"] = "#1A1A1A";
    this["legalVersion"] = _SubWhiteLabelingOptions.LegalVersionEnum.Terms1;
    this["linkColor"] = "#00B3E6";
    this["pageBackgroundColor"] = "#F7F8F9";
    this["primaryButtonColor"] = "#00B3E6";
    this["primaryButtonColorHover"] = "#00B3E6";
    this["primaryButtonTextColor"] = "#FFFFFF";
    this["primaryButtonTextColorHover"] = "#FFFFFF";
    this["secondaryButtonColor"] = "#FFFFFF";
    this["secondaryButtonColorHover"] = "#FFFFFF";
    this["secondaryButtonTextColor"] = "#00B3E6";
    this["secondaryButtonTextColorHover"] = "#00B3E6";
    this["textColor1"] = "#808080";
    this["textColor2"] = "#FFFFFF";
  }
  static getAttributeTypeMap() {
    return _SubWhiteLabelingOptions.attributeTypeMap;
  }
};
var SubWhiteLabelingOptions = _SubWhiteLabelingOptions;
SubWhiteLabelingOptions.discriminator = void 0;
SubWhiteLabelingOptions.attributeTypeMap = [
  {
    name: "headerBackgroundColor",
    baseName: "header_background_color",
    type: "string"
  },
  {
    name: "legalVersion",
    baseName: "legal_version",
    type: "SubWhiteLabelingOptions.LegalVersionEnum"
  },
  {
    name: "linkColor",
    baseName: "link_color",
    type: "string"
  },
  {
    name: "pageBackgroundColor",
    baseName: "page_background_color",
    type: "string"
  },
  {
    name: "primaryButtonColor",
    baseName: "primary_button_color",
    type: "string"
  },
  {
    name: "primaryButtonColorHover",
    baseName: "primary_button_color_hover",
    type: "string"
  },
  {
    name: "primaryButtonTextColor",
    baseName: "primary_button_text_color",
    type: "string"
  },
  {
    name: "primaryButtonTextColorHover",
    baseName: "primary_button_text_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonColor",
    baseName: "secondary_button_color",
    type: "string"
  },
  {
    name: "secondaryButtonColorHover",
    baseName: "secondary_button_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonTextColor",
    baseName: "secondary_button_text_color",
    type: "string"
  },
  {
    name: "secondaryButtonTextColorHover",
    baseName: "secondary_button_text_color_hover",
    type: "string"
  },
  {
    name: "textColor1",
    baseName: "text_color1",
    type: "string"
  },
  {
    name: "textColor2",
    baseName: "text_color2",
    type: "string"
  },
  {
    name: "resetToDefault",
    baseName: "reset_to_default",
    type: "boolean"
  }
];
((SubWhiteLabelingOptions2) => {
  let LegalVersionEnum;
  ((LegalVersionEnum2) => {
    LegalVersionEnum2["Terms1"] = "terms1";
    LegalVersionEnum2["Terms2"] = "terms2";
  })(LegalVersionEnum = SubWhiteLabelingOptions2.LegalVersionEnum || (SubWhiteLabelingOptions2.LegalVersionEnum = {}));
})(SubWhiteLabelingOptions || (SubWhiteLabelingOptions = {}));

// model/teamAddMemberRequest.ts
var _TeamAddMemberRequest = class {
  static getAttributeTypeMap() {
    return _TeamAddMemberRequest.attributeTypeMap;
  }
};
var TeamAddMemberRequest = _TeamAddMemberRequest;
TeamAddMemberRequest.discriminator = void 0;
TeamAddMemberRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "role",
    baseName: "role",
    type: "TeamAddMemberRequest.RoleEnum"
  }
];
((TeamAddMemberRequest2) => {
  let RoleEnum;
  ((RoleEnum2) => {
    RoleEnum2["Member"] = "Member";
    RoleEnum2["Developer"] = "Developer";
    RoleEnum2["TeamManager"] = "Team Manager";
    RoleEnum2["Admin"] = "Admin";
  })(RoleEnum = TeamAddMemberRequest2.RoleEnum || (TeamAddMemberRequest2.RoleEnum = {}));
})(TeamAddMemberRequest || (TeamAddMemberRequest = {}));

// model/teamCreateRequest.ts
var _TeamCreateRequest = class {
  constructor() {
    this["name"] = "Untitled Team";
  }
  static getAttributeTypeMap() {
    return _TeamCreateRequest.attributeTypeMap;
  }
};
var TeamCreateRequest = _TeamCreateRequest;
TeamCreateRequest.discriminator = void 0;
TeamCreateRequest.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/teamGetInfoResponse.ts
var _TeamGetInfoResponse = class {
  static getAttributeTypeMap() {
    return _TeamGetInfoResponse.attributeTypeMap;
  }
};
var TeamGetInfoResponse = _TeamGetInfoResponse;
TeamGetInfoResponse.discriminator = void 0;
TeamGetInfoResponse.attributeTypeMap = [
  {
    name: "team",
    baseName: "team",
    type: "TeamInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamGetResponse.ts
var _TeamGetResponse = class {
  static getAttributeTypeMap() {
    return _TeamGetResponse.attributeTypeMap;
  }
};
var TeamGetResponse = _TeamGetResponse;
TeamGetResponse.discriminator = void 0;
TeamGetResponse.attributeTypeMap = [
  {
    name: "team",
    baseName: "team",
    type: "TeamResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamInfoResponse.ts
var _TeamInfoResponse = class {
  static getAttributeTypeMap() {
    return _TeamInfoResponse.attributeTypeMap;
  }
};
var TeamInfoResponse = _TeamInfoResponse;
TeamInfoResponse.discriminator = void 0;
TeamInfoResponse.attributeTypeMap = [
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "teamParent",
    baseName: "team_parent",
    type: "TeamParentResponse"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "numMembers",
    baseName: "num_members",
    type: "number"
  },
  {
    name: "numSubTeams",
    baseName: "num_sub_teams",
    type: "number"
  }
];

// model/teamInviteResponse.ts
var _TeamInviteResponse = class {
  static getAttributeTypeMap() {
    return _TeamInviteResponse.attributeTypeMap;
  }
};
var TeamInviteResponse = _TeamInviteResponse;
TeamInviteResponse.discriminator = void 0;
TeamInviteResponse.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "sentAt",
    baseName: "sent_at",
    type: "number"
  },
  {
    name: "redeemedAt",
    baseName: "redeemed_at",
    type: "number"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/teamInvitesResponse.ts
var _TeamInvitesResponse = class {
  static getAttributeTypeMap() {
    return _TeamInvitesResponse.attributeTypeMap;
  }
};
var TeamInvitesResponse = _TeamInvitesResponse;
TeamInvitesResponse.discriminator = void 0;
TeamInvitesResponse.attributeTypeMap = [
  {
    name: "teamInvites",
    baseName: "team_invites",
    type: "Array<TeamInviteResponse>"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamMemberResponse.ts
var _TeamMemberResponse = class {
  static getAttributeTypeMap() {
    return _TeamMemberResponse.attributeTypeMap;
  }
};
var TeamMemberResponse = _TeamMemberResponse;
TeamMemberResponse.discriminator = void 0;
TeamMemberResponse.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "role",
    baseName: "role",
    type: "string"
  }
];

// model/teamMembersResponse.ts
var _TeamMembersResponse = class {
  static getAttributeTypeMap() {
    return _TeamMembersResponse.attributeTypeMap;
  }
};
var TeamMembersResponse = _TeamMembersResponse;
TeamMembersResponse.discriminator = void 0;
TeamMembersResponse.attributeTypeMap = [
  {
    name: "teamMembers",
    baseName: "team_members",
    type: "Array<TeamMemberResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamParentResponse.ts
var _TeamParentResponse = class {
  static getAttributeTypeMap() {
    return _TeamParentResponse.attributeTypeMap;
  }
};
var TeamParentResponse = _TeamParentResponse;
TeamParentResponse.discriminator = void 0;
TeamParentResponse.attributeTypeMap = [
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/teamRemoveMemberRequest.ts
var _TeamRemoveMemberRequest = class {
  static getAttributeTypeMap() {
    return _TeamRemoveMemberRequest.attributeTypeMap;
  }
};
var TeamRemoveMemberRequest = _TeamRemoveMemberRequest;
TeamRemoveMemberRequest.discriminator = void 0;
TeamRemoveMemberRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "newOwnerEmailAddress",
    baseName: "new_owner_email_address",
    type: "string"
  },
  {
    name: "newTeamId",
    baseName: "new_team_id",
    type: "string"
  },
  {
    name: "newRole",
    baseName: "new_role",
    type: "TeamRemoveMemberRequest.NewRoleEnum"
  }
];
((TeamRemoveMemberRequest2) => {
  let NewRoleEnum;
  ((NewRoleEnum2) => {
    NewRoleEnum2["Member"] = "Member";
    NewRoleEnum2["Developer"] = "Developer";
    NewRoleEnum2["TeamManager"] = "Team Manager";
    NewRoleEnum2["Admin"] = "Admin";
  })(NewRoleEnum = TeamRemoveMemberRequest2.NewRoleEnum || (TeamRemoveMemberRequest2.NewRoleEnum = {}));
})(TeamRemoveMemberRequest || (TeamRemoveMemberRequest = {}));

// model/teamResponse.ts
var _TeamResponse = class {
  static getAttributeTypeMap() {
    return _TeamResponse.attributeTypeMap;
  }
};
var TeamResponse = _TeamResponse;
TeamResponse.discriminator = void 0;
TeamResponse.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "accounts",
    baseName: "accounts",
    type: "Array<AccountResponse>"
  },
  {
    name: "invitedAccounts",
    baseName: "invited_accounts",
    type: "Array<AccountResponse>"
  }
];

// model/teamSubTeamsResponse.ts
var _TeamSubTeamsResponse = class {
  static getAttributeTypeMap() {
    return _TeamSubTeamsResponse.attributeTypeMap;
  }
};
var TeamSubTeamsResponse = _TeamSubTeamsResponse;
TeamSubTeamsResponse.discriminator = void 0;
TeamSubTeamsResponse.attributeTypeMap = [
  {
    name: "subTeams",
    baseName: "sub_teams",
    type: "Array<SubTeamResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamUpdateRequest.ts
var _TeamUpdateRequest = class {
  static getAttributeTypeMap() {
    return _TeamUpdateRequest.attributeTypeMap;
  }
};
var TeamUpdateRequest = _TeamUpdateRequest;
TeamUpdateRequest.discriminator = void 0;
TeamUpdateRequest.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/templateAddUserRequest.ts
var _TemplateAddUserRequest = class {
  constructor() {
    this["skipNotification"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateAddUserRequest.attributeTypeMap;
  }
};
var TemplateAddUserRequest = _TemplateAddUserRequest;
TemplateAddUserRequest.discriminator = void 0;
TemplateAddUserRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "skipNotification",
    baseName: "skip_notification",
    type: "boolean"
  }
];

// model/templateCreateEmbeddedDraftRequest.ts
var _TemplateCreateEmbeddedDraftRequest = class {
  constructor() {
    this["allowCcs"] = true;
    this["allowReassign"] = false;
    this["forceSignerRoles"] = false;
    this["forceSubjectMessage"] = false;
    this["showPreview"] = false;
    this["showProgressStepper"] = true;
    this["skipMeNow"] = false;
    this["testMode"] = false;
    this["usePreexistingFields"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateCreateEmbeddedDraftRequest.attributeTypeMap;
  }
};
var TemplateCreateEmbeddedDraftRequest = _TemplateCreateEmbeddedDraftRequest;
TemplateCreateEmbeddedDraftRequest.discriminator = void 0;
TemplateCreateEmbeddedDraftRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "allowCcs",
    baseName: "allow_ccs",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<string>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "forceSignerRoles",
    baseName: "force_signer_roles",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "mergeFields",
    baseName: "merge_fields",
    type: "Array<SubMergeField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signerRoles",
    baseName: "signer_roles",
    type: "Array<SubTemplateRole>"
  },
  {
    name: "skipMeNow",
    baseName: "skip_me_now",
    type: "boolean"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  }
];

// model/templateCreateEmbeddedDraftResponse.ts
var _TemplateCreateEmbeddedDraftResponse = class {
  static getAttributeTypeMap() {
    return _TemplateCreateEmbeddedDraftResponse.attributeTypeMap;
  }
};
var TemplateCreateEmbeddedDraftResponse = _TemplateCreateEmbeddedDraftResponse;
TemplateCreateEmbeddedDraftResponse.discriminator = void 0;
TemplateCreateEmbeddedDraftResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateCreateEmbeddedDraftResponseTemplate"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateCreateEmbeddedDraftResponseTemplate.ts
var _TemplateCreateEmbeddedDraftResponseTemplate = class {
  static getAttributeTypeMap() {
    return _TemplateCreateEmbeddedDraftResponseTemplate.attributeTypeMap;
  }
};
var TemplateCreateEmbeddedDraftResponseTemplate = _TemplateCreateEmbeddedDraftResponseTemplate;
TemplateCreateEmbeddedDraftResponseTemplate.discriminator = void 0;
TemplateCreateEmbeddedDraftResponseTemplate.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  },
  {
    name: "editUrl",
    baseName: "edit_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateEditResponse.ts
var _TemplateEditResponse = class {
  static getAttributeTypeMap() {
    return _TemplateEditResponse.attributeTypeMap;
  }
};
var TemplateEditResponse = _TemplateEditResponse;
TemplateEditResponse.discriminator = void 0;
TemplateEditResponse.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  }
];

// model/templateGetResponse.ts
var _TemplateGetResponse = class {
  static getAttributeTypeMap() {
    return _TemplateGetResponse.attributeTypeMap;
  }
};
var TemplateGetResponse = _TemplateGetResponse;
TemplateGetResponse.discriminator = void 0;
TemplateGetResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateListResponse.ts
var _TemplateListResponse = class {
  static getAttributeTypeMap() {
    return _TemplateListResponse.attributeTypeMap;
  }
};
var TemplateListResponse = _TemplateListResponse;
TemplateListResponse.discriminator = void 0;
TemplateListResponse.attributeTypeMap = [
  {
    name: "templates",
    baseName: "templates",
    type: "Array<TemplateResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateRemoveUserRequest.ts
var _TemplateRemoveUserRequest = class {
  static getAttributeTypeMap() {
    return _TemplateRemoveUserRequest.attributeTypeMap;
  }
};
var TemplateRemoveUserRequest = _TemplateRemoveUserRequest;
TemplateRemoveUserRequest.discriminator = void 0;
TemplateRemoveUserRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/templateResponse.ts
var _TemplateResponse = class {
  static getAttributeTypeMap() {
    return _TemplateResponse.attributeTypeMap;
  }
};
var TemplateResponse = _TemplateResponse;
TemplateResponse.discriminator = void 0;
TemplateResponse.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "updatedAt",
    baseName: "updated_at",
    type: "number"
  },
  {
    name: "isEmbedded",
    baseName: "is_embedded",
    type: "boolean"
  },
  {
    name: "isCreator",
    baseName: "is_creator",
    type: "boolean"
  },
  {
    name: "canEdit",
    baseName: "can_edit",
    type: "boolean"
  },
  {
    name: "isLocked",
    baseName: "is_locked",
    type: "boolean"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "object"
  },
  {
    name: "signerRoles",
    baseName: "signer_roles",
    type: "Array<TemplateResponseSignerRole>"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<TemplateResponseCCRole>"
  },
  {
    name: "documents",
    baseName: "documents",
    type: "Array<TemplateResponseDocument>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<TemplateResponseCustomField>"
  },
  {
    name: "namedFormFields",
    baseName: "named_form_fields",
    type: "Array<TemplateResponseNamedFormField>"
  },
  {
    name: "accounts",
    baseName: "accounts",
    type: "Array<TemplateResponseAccount>"
  }
];

// model/templateResponseAccount.ts
var _TemplateResponseAccount = class {
  static getAttributeTypeMap() {
    return _TemplateResponseAccount.attributeTypeMap;
  }
};
var TemplateResponseAccount = _TemplateResponseAccount;
TemplateResponseAccount.discriminator = void 0;
TemplateResponseAccount.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "isLocked",
    baseName: "is_locked",
    type: "boolean"
  },
  {
    name: "isPaidHs",
    baseName: "is_paid_hs",
    type: "boolean"
  },
  {
    name: "isPaidHf",
    baseName: "is_paid_hf",
    type: "boolean"
  },
  {
    name: "quotas",
    baseName: "quotas",
    type: "TemplateResponseAccountQuota"
  }
];

// model/templateResponseAccountQuota.ts
var _TemplateResponseAccountQuota = class {
  static getAttributeTypeMap() {
    return _TemplateResponseAccountQuota.attributeTypeMap;
  }
};
var TemplateResponseAccountQuota = _TemplateResponseAccountQuota;
TemplateResponseAccountQuota.discriminator = void 0;
TemplateResponseAccountQuota.attributeTypeMap = [
  {
    name: "templatesLeft",
    baseName: "templates_left",
    type: "number"
  },
  {
    name: "apiSignatureRequestsLeft",
    baseName: "api_signature_requests_left",
    type: "number"
  },
  {
    name: "documentsLeft",
    baseName: "documents_left",
    type: "number"
  },
  {
    name: "smsVerificationsLeft",
    baseName: "sms_verifications_left",
    type: "number"
  }
];

// model/templateResponseCCRole.ts
var _TemplateResponseCCRole = class {
  static getAttributeTypeMap() {
    return _TemplateResponseCCRole.attributeTypeMap;
  }
};
var TemplateResponseCCRole = _TemplateResponseCCRole;
TemplateResponseCCRole.discriminator = void 0;
TemplateResponseCCRole.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/templateResponseCustomField.ts
var _TemplateResponseCustomField = class {
  static getAttributeTypeMap() {
    return _TemplateResponseCustomField.attributeTypeMap;
  }
};
var TemplateResponseCustomField = _TemplateResponseCustomField;
TemplateResponseCustomField.discriminator = void 0;
TemplateResponseCustomField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "TemplateResponseCustomField.TypeEnum"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  }
];
((TemplateResponseCustomField2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["Text"] = "text";
    TypeEnum2["Checkbox"] = "checkbox";
  })(TypeEnum = TemplateResponseCustomField2.TypeEnum || (TemplateResponseCustomField2.TypeEnum = {}));
})(TemplateResponseCustomField || (TemplateResponseCustomField = {}));

// model/templateResponseDocument.ts
var _TemplateResponseDocument = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocument.attributeTypeMap;
  }
};
var TemplateResponseDocument = _TemplateResponseDocument;
TemplateResponseDocument.discriminator = void 0;
TemplateResponseDocument.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "index",
    baseName: "index",
    type: "number"
  },
  {
    name: "fieldGroups",
    baseName: "field_groups",
    type: "Array<TemplateResponseDocumentFieldGroup>"
  },
  {
    name: "formFields",
    baseName: "form_fields",
    type: "Array<TemplateResponseDocumentFormField>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<TemplateResponseDocumentCustomField>"
  },
  {
    name: "staticFields",
    baseName: "static_fields",
    type: "Array<TemplateResponseDocumentStaticField>"
  }
];

// model/templateResponseDocumentCustomField.ts
var _TemplateResponseDocumentCustomField = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentCustomField.attributeTypeMap;
  }
};
var TemplateResponseDocumentCustomField = _TemplateResponseDocumentCustomField;
TemplateResponseDocumentCustomField.discriminator = void 0;
TemplateResponseDocumentCustomField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "TemplateResponseDocumentCustomField.TypeEnum"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  },
  {
    name: "namedFormFields",
    baseName: "named_form_fields",
    type: "object"
  },
  {
    name: "reusableFormId",
    baseName: "reusable_form_id",
    type: "string"
  }
];
((TemplateResponseDocumentCustomField2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["Text"] = "text";
    TypeEnum2["Checkbox"] = "checkbox";
  })(TypeEnum = TemplateResponseDocumentCustomField2.TypeEnum || (TemplateResponseDocumentCustomField2.TypeEnum = {}));
})(TemplateResponseDocumentCustomField || (TemplateResponseDocumentCustomField = {}));

// model/templateResponseDocumentFieldGroup.ts
var _TemplateResponseDocumentFieldGroup = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentFieldGroup.attributeTypeMap;
  }
};
var TemplateResponseDocumentFieldGroup = _TemplateResponseDocumentFieldGroup;
TemplateResponseDocumentFieldGroup.discriminator = void 0;
TemplateResponseDocumentFieldGroup.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "rule",
    baseName: "rule",
    type: "string"
  }
];

// model/templateResponseDocumentFormField.ts
var _TemplateResponseDocumentFormField = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentFormField.attributeTypeMap;
  }
};
var TemplateResponseDocumentFormField = _TemplateResponseDocumentFormField;
TemplateResponseDocumentFormField.discriminator = void 0;
TemplateResponseDocumentFormField.attributeTypeMap = [
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "TemplateResponseDocumentFormField.TypeEnum"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  }
];
((TemplateResponseDocumentFormField2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["Checkbox"] = "checkbox";
    TypeEnum2["CheckboxMerge"] = "checkbox-merge";
    TypeEnum2["DateSigned"] = "date_signed";
    TypeEnum2["Dropdown"] = "dropdown";
    TypeEnum2["Hyperlink"] = "hyperlink";
    TypeEnum2["Initials"] = "initials";
    TypeEnum2["Signature"] = "signature";
    TypeEnum2["Radio"] = "radio";
    TypeEnum2["Text"] = "text";
    TypeEnum2["TextMerge"] = "text-merge";
  })(TypeEnum = TemplateResponseDocumentFormField2.TypeEnum || (TemplateResponseDocumentFormField2.TypeEnum = {}));
})(TemplateResponseDocumentFormField || (TemplateResponseDocumentFormField = {}));

// model/templateResponseDocumentStaticField.ts
var _TemplateResponseDocumentStaticField = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentStaticField.attributeTypeMap;
  }
};
var TemplateResponseDocumentStaticField = _TemplateResponseDocumentStaticField;
TemplateResponseDocumentStaticField.discriminator = void 0;
TemplateResponseDocumentStaticField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  }
];

// model/templateResponseFieldAvgTextLength.ts
var _TemplateResponseFieldAvgTextLength = class {
  static getAttributeTypeMap() {
    return _TemplateResponseFieldAvgTextLength.attributeTypeMap;
  }
};
var TemplateResponseFieldAvgTextLength = _TemplateResponseFieldAvgTextLength;
TemplateResponseFieldAvgTextLength.discriminator = void 0;
TemplateResponseFieldAvgTextLength.attributeTypeMap = [
  {
    name: "numLines",
    baseName: "num_lines",
    type: "number"
  },
  {
    name: "numCharsPerLine",
    baseName: "num_chars_per_line",
    type: "number"
  }
];

// model/templateResponseNamedFormField.ts
var _TemplateResponseNamedFormField = class {
  static getAttributeTypeMap() {
    return _TemplateResponseNamedFormField.attributeTypeMap;
  }
};
var TemplateResponseNamedFormField = _TemplateResponseNamedFormField;
TemplateResponseNamedFormField.discriminator = void 0;
TemplateResponseNamedFormField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  }
];

// model/templateResponseSignerRole.ts
var _TemplateResponseSignerRole = class {
  static getAttributeTypeMap() {
    return _TemplateResponseSignerRole.attributeTypeMap;
  }
};
var TemplateResponseSignerRole = _TemplateResponseSignerRole;
TemplateResponseSignerRole.discriminator = void 0;
TemplateResponseSignerRole.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/templateUpdateFilesRequest.ts
var _TemplateUpdateFilesRequest = class {
  constructor() {
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateUpdateFilesRequest.attributeTypeMap;
  }
};
var TemplateUpdateFilesRequest = _TemplateUpdateFilesRequest;
TemplateUpdateFilesRequest.discriminator = void 0;
TemplateUpdateFilesRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/templateUpdateFilesResponse.ts
var _TemplateUpdateFilesResponse = class {
  static getAttributeTypeMap() {
    return _TemplateUpdateFilesResponse.attributeTypeMap;
  }
};
var TemplateUpdateFilesResponse = _TemplateUpdateFilesResponse;
TemplateUpdateFilesResponse.discriminator = void 0;
TemplateUpdateFilesResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateUpdateFilesResponseTemplate"
  }
];

// model/templateUpdateFilesResponseTemplate.ts
var _TemplateUpdateFilesResponseTemplate = class {
  static getAttributeTypeMap() {
    return _TemplateUpdateFilesResponseTemplate.attributeTypeMap;
  }
};
var TemplateUpdateFilesResponseTemplate = _TemplateUpdateFilesResponseTemplate;
TemplateUpdateFilesResponseTemplate.discriminator = void 0;
TemplateUpdateFilesResponseTemplate.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/unclaimedDraftCreateEmbeddedRequest.ts
var _UnclaimedDraftCreateEmbeddedRequest = class {
  constructor() {
    this["allowCcs"] = true;
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["forceSignerPage"] = false;
    this["forceSubjectMessage"] = false;
    this["hideTextTags"] = false;
    this["holdRequest"] = false;
    this["isForEmbeddedSigning"] = false;
    this["showProgressStepper"] = true;
    this["skipMeNow"] = false;
    this["testMode"] = false;
    this["type"] = _UnclaimedDraftCreateEmbeddedRequest.TypeEnum.RequestSignature;
    this["usePreexistingFields"] = false;
    this["useTextTags"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateEmbeddedRequest.attributeTypeMap;
  }
};
var UnclaimedDraftCreateEmbeddedRequest = _UnclaimedDraftCreateEmbeddedRequest;
UnclaimedDraftCreateEmbeddedRequest.discriminator = void 0;
UnclaimedDraftCreateEmbeddedRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "allowCcs",
    baseName: "allow_ccs",
    type: "boolean"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "forceSignerPage",
    baseName: "force_signer_page",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "holdRequest",
    baseName: "hold_request",
    type: "boolean"
  },
  {
    name: "isForEmbeddedSigning",
    baseName: "is_for_embedded_signing",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubUnclaimedDraftSigner>"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "skipMeNow",
    baseName: "skip_me_now",
    type: "boolean"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "UnclaimedDraftCreateEmbeddedRequest.TypeEnum"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];
((UnclaimedDraftCreateEmbeddedRequest2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["SendDocument"] = "send_document";
    TypeEnum2["RequestSignature"] = "request_signature";
  })(TypeEnum = UnclaimedDraftCreateEmbeddedRequest2.TypeEnum || (UnclaimedDraftCreateEmbeddedRequest2.TypeEnum = {}));
})(UnclaimedDraftCreateEmbeddedRequest || (UnclaimedDraftCreateEmbeddedRequest = {}));

// model/unclaimedDraftCreateEmbeddedWithTemplateRequest.ts
var _UnclaimedDraftCreateEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["forceSignerRoles"] = false;
    this["forceSubjectMessage"] = false;
    this["holdRequest"] = false;
    this["isForEmbeddedSigning"] = false;
    this["previewOnly"] = false;
    this["showPreview"] = false;
    this["showProgressStepper"] = true;
    this["skipMeNow"] = false;
    this["testMode"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
};
var UnclaimedDraftCreateEmbeddedWithTemplateRequest = _UnclaimedDraftCreateEmbeddedWithTemplateRequest;
UnclaimedDraftCreateEmbeddedWithTemplateRequest.discriminator = void 0;
UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "forceSignerRoles",
    baseName: "force_signer_roles",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "holdRequest",
    baseName: "hold_request",
    type: "boolean"
  },
  {
    name: "isForEmbeddedSigning",
    baseName: "is_for_embedded_signing",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "previewOnly",
    baseName: "preview_only",
    type: "boolean"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubUnclaimedDraftTemplateSigner>"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "skipMeNow",
    baseName: "skip_me_now",
    type: "boolean"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  }
];

// model/unclaimedDraftCreateRequest.ts
var _UnclaimedDraftCreateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["hideTextTags"] = false;
    this["showProgressStepper"] = true;
    this["testMode"] = false;
    this["usePreexistingFields"] = false;
    this["useTextTags"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateRequest.attributeTypeMap;
  }
};
var UnclaimedDraftCreateRequest = _UnclaimedDraftCreateRequest;
UnclaimedDraftCreateRequest.discriminator = void 0;
UnclaimedDraftCreateRequest.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "UnclaimedDraftCreateRequest.TypeEnum"
  },
  {
    name: "file",
    baseName: "file",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "Array<string>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubUnclaimedDraftSigner>"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];
((UnclaimedDraftCreateRequest2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["SendDocument"] = "send_document";
    TypeEnum2["RequestSignature"] = "request_signature";
  })(TypeEnum = UnclaimedDraftCreateRequest2.TypeEnum || (UnclaimedDraftCreateRequest2.TypeEnum = {}));
})(UnclaimedDraftCreateRequest || (UnclaimedDraftCreateRequest = {}));

// model/unclaimedDraftCreateResponse.ts
var _UnclaimedDraftCreateResponse = class {
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateResponse.attributeTypeMap;
  }
};
var UnclaimedDraftCreateResponse = _UnclaimedDraftCreateResponse;
UnclaimedDraftCreateResponse.discriminator = void 0;
UnclaimedDraftCreateResponse.attributeTypeMap = [
  {
    name: "unclaimedDraft",
    baseName: "unclaimed_draft",
    type: "UnclaimedDraftResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/unclaimedDraftEditAndResendRequest.ts
var _UnclaimedDraftEditAndResendRequest = class {
  constructor() {
    this["showProgressStepper"] = true;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftEditAndResendRequest.attributeTypeMap;
  }
};
var UnclaimedDraftEditAndResendRequest = _UnclaimedDraftEditAndResendRequest;
UnclaimedDraftEditAndResendRequest.discriminator = void 0;
UnclaimedDraftEditAndResendRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "isForEmbeddedSigning",
    baseName: "is_for_embedded_signing",
    type: "boolean"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/unclaimedDraftResponse.ts
var _UnclaimedDraftResponse = class {
  static getAttributeTypeMap() {
    return _UnclaimedDraftResponse.attributeTypeMap;
  }
};
var UnclaimedDraftResponse = _UnclaimedDraftResponse;
UnclaimedDraftResponse.discriminator = void 0;
UnclaimedDraftResponse.attributeTypeMap = [
  {
    name: "signatureRequestId",
    baseName: "signature_request_id",
    type: "string"
  },
  {
    name: "claimUrl",
    baseName: "claim_url",
    type: "string"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/warningResponse.ts
var _WarningResponse = class {
  static getAttributeTypeMap() {
    return _WarningResponse.attributeTypeMap;
  }
};
var WarningResponse = _WarningResponse;
WarningResponse.discriminator = void 0;
WarningResponse.attributeTypeMap = [
  {
    name: "warningMsg",
    baseName: "warning_msg",
    type: "string"
  },
  {
    name: "warningName",
    baseName: "warning_name",
    type: "string"
  }
];

// model/eventCallbackHelper.ts
var import_crypto_js = __toESM(require_crypto_js());
var _EventCallbackHelper = class {
};
var EventCallbackHelper = _EventCallbackHelper;
EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK = "account_callback";
EventCallbackHelper.EVENT_TYPE_APP_CALLBACK = "app_callback";
EventCallbackHelper.isValid = (apiKey, eventCallback) => {
  const hash = (0, import_crypto_js.HmacSHA256)(
    `${eventCallback.event.eventTime}${eventCallback.event.eventType}`,
    apiKey
  );
  return eventCallback.event.eventHash === hash.toString();
};
EventCallbackHelper.getCallbackType = (eventCallback) => {
  if (!eventCallback.event.eventMetadata.reportedForAppId) {
    return _EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK;
  }
  return _EventCallbackHelper.EVENT_TYPE_APP_CALLBACK;
};

// model/models.ts
var primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any"
];
var enumsMap = {
  "EventCallbackRequestEvent.EventTypeEnum": EventCallbackRequestEvent.EventTypeEnum,
  "ReportCreateRequest.ReportTypeEnum": ReportCreateRequest.ReportTypeEnum,
  "ReportResponse.ReportTypeEnum": ReportResponse.ReportTypeEnum,
  SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataTypeEnum,
  "SubFieldOptions.DateFormatEnum": SubFieldOptions.DateFormatEnum,
  "SubFormFieldRuleAction.TypeEnum": SubFormFieldRuleAction.TypeEnum,
  "SubFormFieldRuleTrigger.OperatorEnum": SubFormFieldRuleTrigger.OperatorEnum,
  "SubFormFieldsPerDocumentText.ValidationTypeEnum": SubFormFieldsPerDocumentText.ValidationTypeEnum,
  SubFormFieldsPerDocumentTypeEnum,
  "SubMergeField.TypeEnum": SubMergeField.TypeEnum,
  "SubOAuth.ScopesEnum": SubOAuth.ScopesEnum,
  "SubSignatureRequestSigner.SmsPhoneNumberTypeEnum": SubSignatureRequestSigner.SmsPhoneNumberTypeEnum,
  "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum": SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum,
  "SubSigningOptions.DefaultTypeEnum": SubSigningOptions.DefaultTypeEnum,
  "SubWhiteLabelingOptions.LegalVersionEnum": SubWhiteLabelingOptions.LegalVersionEnum,
  "TeamAddMemberRequest.RoleEnum": TeamAddMemberRequest.RoleEnum,
  "TeamRemoveMemberRequest.NewRoleEnum": TeamRemoveMemberRequest.NewRoleEnum,
  "TemplateResponseCustomField.TypeEnum": TemplateResponseCustomField.TypeEnum,
  "TemplateResponseDocumentCustomField.TypeEnum": TemplateResponseDocumentCustomField.TypeEnum,
  "TemplateResponseDocumentFormField.TypeEnum": TemplateResponseDocumentFormField.TypeEnum,
  "UnclaimedDraftCreateEmbeddedRequest.TypeEnum": UnclaimedDraftCreateEmbeddedRequest.TypeEnum,
  "UnclaimedDraftCreateRequest.TypeEnum": UnclaimedDraftCreateRequest.TypeEnum
};
var typeMap = {
  AccountCreateRequest,
  AccountCreateResponse,
  AccountGetResponse,
  AccountResponse,
  AccountResponseQuotas,
  AccountUpdateRequest,
  AccountVerifyRequest,
  AccountVerifyResponse,
  AccountVerifyResponseAccount,
  ApiAppCreateRequest,
  ApiAppGetResponse,
  ApiAppListResponse,
  ApiAppResponse,
  ApiAppResponseOAuth,
  ApiAppResponseOptions,
  ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest,
  BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse,
  BulkSendJobResponse,
  BulkSendJobSendResponse,
  EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded,
  ErrorResponse,
  ErrorResponseError,
  EventCallbackRequest,
  EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata,
  FileResponse,
  FileResponseDataUri,
  ListInfoResponse,
  OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest,
  OAuthTokenResponse,
  ReportCreateRequest,
  ReportCreateResponse,
  ReportResponse,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestGetResponse,
  SignatureRequestListResponse,
  SignatureRequestRemindRequest,
  SignatureRequestResponse,
  SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseDataBase,
  SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures,
  SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest,
  SubAttachment,
  SubBulkSignerList,
  SubBulkSignerListCustomField,
  SubCC,
  SubCustomField,
  SubEditorOptions,
  SubFieldOptions,
  SubFormFieldGroup,
  SubFormFieldRule,
  SubFormFieldRuleAction,
  SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge,
  SubMergeField,
  SubOAuth,
  SubOptions,
  SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner,
  SubSigningOptions,
  SubTeamResponse,
  SubTemplateRole,
  SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions,
  TeamAddMemberRequest,
  TeamCreateRequest,
  TeamGetInfoResponse,
  TeamGetResponse,
  TeamInfoResponse,
  TeamInviteResponse,
  TeamInvitesResponse,
  TeamMemberResponse,
  TeamMembersResponse,
  TeamParentResponse,
  TeamRemoveMemberRequest,
  TeamResponse,
  TeamSubTeamsResponse,
  TeamUpdateRequest,
  TemplateAddUserRequest,
  TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateEditResponse,
  TemplateGetResponse,
  TemplateListResponse,
  TemplateRemoveUserRequest,
  TemplateResponse,
  TemplateResponseAccount,
  TemplateResponseAccountQuota,
  TemplateResponseCCRole,
  TemplateResponseCustomField,
  TemplateResponseDocument,
  TemplateResponseDocumentCustomField,
  TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFormField,
  TemplateResponseDocumentStaticField,
  TemplateResponseFieldAvgTextLength,
  TemplateResponseNamedFormField,
  TemplateResponseSignerRole,
  TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate,
  UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse,
  WarningResponse
};
var ObjectSerializer = class {
  static findCorrectType(data, expectedType) {
    if (data == void 0) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }
      if (!typeMap[expectedType]) {
        return expectedType;
      }
      let discriminatorProperty = typeMap[expectedType].discriminator;
      let discriminatorValue = data[discriminatorProperty];
      if (typeMap[expectedType].hasOwnProperty("discriminatorClassName")) {
        let discriminatorClass = typeMap[expectedType].discriminatorClassName(discriminatorValue);
        if (discriminatorClass) {
          return discriminatorClass;
        }
      }
      if (discriminatorProperty == null) {
        return expectedType;
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType;
          } else {
            return expectedType;
          }
        } else {
          return expectedType;
        }
      }
    }
  }
  static serialize(data, type) {
    if (data == void 0) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      let subType = type.replace("Array<", "");
      subType = subType.substring(0, subType.length - 1);
      let transformedData = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        return data;
      }
      type = this.findCorrectType(data, type);
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        let value = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
        if (value !== void 0) {
          instance[attributeType.baseName] = value;
        }
      }
      return instance;
    }
  }
  static deserialize(data, type) {
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == void 0) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      let subType = type.replace("Array<", "");
      subType = subType.substring(0, subType.length - 1);
      let transformedData = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type
        );
      }
      return instance;
    }
  }
};
var HttpBasicAuth = class {
  constructor() {
    this.username = "";
    this.password = "";
  }
  applyToRequest(requestOptions) {
    requestOptions.auth = {
      username: this.username,
      password: this.password
    };
  }
};
var HttpBearerAuth = class {
  constructor() {
    this.accessToken = "";
  }
  applyToRequest(requestOptions) {
    if (requestOptions && requestOptions.headers) {
      const accessToken = typeof this.accessToken === "function" ? this.accessToken() : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
};
var ApiKeyAuth = class {
  constructor(location, paramName) {
    this.location = location;
    this.paramName = paramName;
    this.apiKey = "";
  }
  applyToRequest(requestOptions) {
    if (this.location == "query") {
      requestOptions.params[this.paramName] = this.apiKey;
    } else if (this.location == "header" && requestOptions && requestOptions.headers) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (this.location == "cookie" && requestOptions && requestOptions.headers) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] += "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] = this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
};
var OAuth = class {
  constructor() {
    this.accessToken = "";
  }
  applyToRequest(requestOptions) {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
};
var VoidAuth = class {
  constructor() {
    this.username = "";
    this.password = "";
  }
  applyToRequest(_) {
  }
};

// api/accountApi.ts
var defaultBasePath = "https://api.hellosign.com/v3";
var AccountApiApiKeys = /* @__PURE__ */ ((AccountApiApiKeys2) => {
})(AccountApiApiKeys || {});
var AccountApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  accountCreate(_0) {
    return __async(this, arguments, function* (accountCreateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/account/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountCreateRequest === null || accountCreateRequest === void 0) {
        throw new Error(
          "Required parameter accountCreateRequest was null or undefined when calling accountCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        accountCreateRequest,
        AccountCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          accountCreateRequest,
          "AccountCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "AccountCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "AccountCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  accountGet(_0, _1) {
    return __async(this, arguments, function* (accountId, emailAddress, options = { headers: {} }) {
      const localVarPath = this.basePath + "/account";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountId !== void 0) {
        localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
          accountId,
          "string"
        );
      }
      if (emailAddress !== void 0) {
        localVarQueryParameters["email_address"] = ObjectSerializer.serialize(
          emailAddress,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "AccountGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "AccountGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  accountUpdate(_0) {
    return __async(this, arguments, function* (accountUpdateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/account";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountUpdateRequest === null || accountUpdateRequest === void 0) {
        throw new Error(
          "Required parameter accountUpdateRequest was null or undefined when calling accountUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        accountUpdateRequest,
        AccountUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          accountUpdateRequest,
          "AccountUpdateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "AccountGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "AccountGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  accountVerify(_0) {
    return __async(this, arguments, function* (accountVerifyRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/account/verify";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountVerifyRequest === null || accountVerifyRequest === void 0) {
        throw new Error(
          "Required parameter accountVerifyRequest was null or undefined when calling accountVerify."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        accountVerifyRequest,
        AccountVerifyRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          accountVerifyRequest,
          "AccountVerifyRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "AccountVerifyResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "AccountVerifyResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/apiAppApi.ts
var import_axios2 = __toESM(require_axios2());
var defaultBasePath2 = "https://api.hellosign.com/v3";
var ApiAppApiApiKeys = /* @__PURE__ */ ((ApiAppApiApiKeys2) => {
})(ApiAppApiApiKeys || {});
var ApiAppApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath2;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  apiAppCreate(_0) {
    return __async(this, arguments, function* (apiAppCreateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (apiAppCreateRequest === null || apiAppCreateRequest === void 0) {
        throw new Error(
          "Required parameter apiAppCreateRequest was null or undefined when calling apiAppCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        apiAppCreateRequest,
        ApiAppCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          apiAppCreateRequest,
          "ApiAppCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios2.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  apiAppDelete(_0) {
    return __async(this, arguments, function* (clientId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (clientId === null || clientId === void 0) {
        throw new Error(
          "Required parameter clientId was null or undefined when calling apiAppDelete."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "DELETE",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios2.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
            }
          );
        });
      });
    });
  }
  apiAppGet(_0) {
    return __async(this, arguments, function* (clientId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (clientId === null || clientId === void 0) {
        throw new Error(
          "Required parameter clientId was null or undefined when calling apiAppGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios2.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  apiAppList(_0, _1) {
    return __async(this, arguments, function* (page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios2.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppListResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppListResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  apiAppUpdate(_0, _1) {
    return __async(this, arguments, function* (clientId, apiAppUpdateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (clientId === null || clientId === void 0) {
        throw new Error(
          "Required parameter clientId was null or undefined when calling apiAppUpdate."
        );
      }
      if (apiAppUpdateRequest === null || apiAppUpdateRequest === void 0) {
        throw new Error(
          "Required parameter apiAppUpdateRequest was null or undefined when calling apiAppUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        apiAppUpdateRequest,
        ApiAppUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          apiAppUpdateRequest,
          "ApiAppUpdateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios2.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
};

// api/bulkSendJobApi.ts
var import_axios3 = __toESM(require_axios2());
var defaultBasePath3 = "https://api.hellosign.com/v3";
var BulkSendJobApiApiKeys = /* @__PURE__ */ ((BulkSendJobApiApiKeys2) => {
})(BulkSendJobApiApiKeys || {});
var BulkSendJobApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath3;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  bulkSendJobGet(_0) {
    return __async(this, arguments, function* (bulkSendJobId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/bulk_send_job/{bulk_send_job_id}".replace(
        "{bulk_send_job_id}",
        encodeURIComponent(String(bulkSendJobId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (bulkSendJobId === null || bulkSendJobId === void 0) {
        throw new Error(
          "Required parameter bulkSendJobId was null or undefined when calling bulkSendJobGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios3.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  bulkSendJobList(_0, _1) {
    return __async(this, arguments, function* (page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/bulk_send_job/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios3.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobListResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobListResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/embeddedApi.ts
var import_axios4 = __toESM(require_axios2());
var defaultBasePath4 = "https://api.hellosign.com/v3";
var EmbeddedApiApiKeys = /* @__PURE__ */ ((EmbeddedApiApiKeys2) => {
})(EmbeddedApiApiKeys || {});
var EmbeddedApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath4;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  embeddedEditUrl(_0, _1) {
    return __async(this, arguments, function* (templateId, embeddedEditUrlRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/embedded/edit_url/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling embeddedEditUrl."
        );
      }
      if (embeddedEditUrlRequest === null || embeddedEditUrlRequest === void 0) {
        throw new Error(
          "Required parameter embeddedEditUrlRequest was null or undefined when calling embeddedEditUrl."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        embeddedEditUrlRequest,
        EmbeddedEditUrlRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          embeddedEditUrlRequest,
          "EmbeddedEditUrlRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios4.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "EmbeddedEditUrlResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "EmbeddedEditUrlResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  embeddedSignUrl(_0) {
    return __async(this, arguments, function* (signatureId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/embedded/sign_url/{signature_id}".replace(
        "{signature_id}",
        encodeURIComponent(String(signatureId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureId === null || signatureId === void 0) {
        throw new Error(
          "Required parameter signatureId was null or undefined when calling embeddedSignUrl."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios4.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "EmbeddedSignUrlResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "EmbeddedSignUrlResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/oAuthApi.ts
var import_axios5 = __toESM(require_axios2());
var defaultBasePath5 = "https://api.hellosign.com/v3";
var OAuthApiApiKeys = /* @__PURE__ */ ((OAuthApiApiKeys2) => {
})(OAuthApiApiKeys || {});
var OAuthApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath5;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  oauthTokenGenerate(_0) {
    return __async(this, arguments, function* (oAuthTokenGenerateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/oauth/token";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (oAuthTokenGenerateRequest === null || oAuthTokenGenerateRequest === void 0) {
        throw new Error(
          "Required parameter oAuthTokenGenerateRequest was null or undefined when calling oauthTokenGenerate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        oAuthTokenGenerateRequest,
        OAuthTokenGenerateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          oAuthTokenGenerateRequest,
          "OAuthTokenGenerateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios5.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "OAuthTokenResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "OAuthTokenResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  oauthTokenRefresh(_0) {
    return __async(this, arguments, function* (oAuthTokenRefreshRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/oauth/token?refresh";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (oAuthTokenRefreshRequest === null || oAuthTokenRefreshRequest === void 0) {
        throw new Error(
          "Required parameter oAuthTokenRefreshRequest was null or undefined when calling oauthTokenRefresh."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        oAuthTokenRefreshRequest,
        OAuthTokenRefreshRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          oAuthTokenRefreshRequest,
          "OAuthTokenRefreshRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios5.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "OAuthTokenResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "OAuthTokenResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
};

// api/reportApi.ts
var import_axios6 = __toESM(require_axios2());
var defaultBasePath6 = "https://api.hellosign.com/v3";
var ReportApiApiKeys = /* @__PURE__ */ ((ReportApiApiKeys2) => {
})(ReportApiApiKeys || {});
var ReportApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath6;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  reportCreate(_0) {
    return __async(this, arguments, function* (reportCreateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/report/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (reportCreateRequest === null || reportCreateRequest === void 0) {
        throw new Error(
          "Required parameter reportCreateRequest was null or undefined when calling reportCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        reportCreateRequest,
        ReportCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          reportCreateRequest,
          "ReportCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios6.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "ReportCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ReportCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/signatureRequestApi.ts
var import_axios7 = __toESM(require_axios2());
var defaultBasePath7 = "https://api.hellosign.com/v3";
var SignatureRequestApiApiKeys = /* @__PURE__ */ ((SignatureRequestApiApiKeys2) => {
})(SignatureRequestApiApiKeys || {});
var SignatureRequestApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath7;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  signatureRequestBulkCreateEmbeddedWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestBulkCreateEmbeddedWithTemplateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/bulk_create_embedded_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestBulkCreateEmbeddedWithTemplateRequest === null || signatureRequestBulkCreateEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestBulkCreateEmbeddedWithTemplateRequest was null or undefined when calling signatureRequestBulkCreateEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestBulkCreateEmbeddedWithTemplateRequest,
        SignatureRequestBulkCreateEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestBulkCreateEmbeddedWithTemplateRequest,
          "SignatureRequestBulkCreateEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobSendResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobSendResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestBulkSendWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestBulkSendWithTemplateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/bulk_send_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestBulkSendWithTemplateRequest === null || signatureRequestBulkSendWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestBulkSendWithTemplateRequest was null or undefined when calling signatureRequestBulkSendWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestBulkSendWithTemplateRequest,
        SignatureRequestBulkSendWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestBulkSendWithTemplateRequest,
          "SignatureRequestBulkSendWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobSendResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobSendResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestCancel(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/cancel/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestCancel."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios7.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
            }
          );
        });
      });
    });
  }
  signatureRequestCreateEmbedded(_0) {
    return __async(this, arguments, function* (signatureRequestCreateEmbeddedRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/create_embedded";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestCreateEmbeddedRequest === null || signatureRequestCreateEmbeddedRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestCreateEmbeddedRequest was null or undefined when calling signatureRequestCreateEmbedded."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestCreateEmbeddedRequest,
        SignatureRequestCreateEmbeddedRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestCreateEmbeddedRequest,
          "SignatureRequestCreateEmbeddedRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestCreateEmbeddedWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestCreateEmbeddedWithTemplateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/create_embedded_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestCreateEmbeddedWithTemplateRequest === null || signatureRequestCreateEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestCreateEmbeddedWithTemplateRequest was null or undefined when calling signatureRequestCreateEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestCreateEmbeddedWithTemplateRequest,
        SignatureRequestCreateEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestCreateEmbeddedWithTemplateRequest,
          "SignatureRequestCreateEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestFiles(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, fileType, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/files/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/pdf", "application/zip", "application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestFiles."
        );
      }
      if (fileType !== void 0) {
        localVarQueryParameters["file_type"] = ObjectSerializer.serialize(
          fileType,
          "'pdf' | 'zip'"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "arraybuffer"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios7.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "Buffer");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(response.data, "RequestFile");
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  signatureRequestFilesAsDataUri(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/files_as_data_uri/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestFilesAsDataUri."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "FileResponseDataUri"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "FileResponseDataUri"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestFilesAsFileUrl(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/files_as_file_url/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestFilesAsFileUrl."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios7.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "FileResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "FileResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  signatureRequestGet(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestList(_0, _1, _2, _3) {
    return __async(this, arguments, function* (accountId, page, pageSize, query, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountId !== void 0) {
        localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
          accountId,
          "string"
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      if (query !== void 0) {
        localVarQueryParameters["query"] = ObjectSerializer.serialize(
          query,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestListResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestListResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestReleaseHold(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/release_hold/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestReleaseHold."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestRemind(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestRemindRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/remind/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestRemind."
        );
      }
      if (signatureRequestRemindRequest === null || signatureRequestRemindRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestRemindRequest was null or undefined when calling signatureRequestRemind."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestRemindRequest,
        SignatureRequestRemindRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestRemindRequest,
          "SignatureRequestRemindRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestRemove(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/remove/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestRemove."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios7.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
            }
          );
        });
      });
    });
  }
  signatureRequestSend(_0) {
    return __async(this, arguments, function* (signatureRequestSendRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/send";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestSendRequest === null || signatureRequestSendRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestSendRequest was null or undefined when calling signatureRequestSend."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestSendRequest,
        SignatureRequestSendRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestSendRequest,
          "SignatureRequestSendRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestSendWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestSendWithTemplateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/send_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestSendWithTemplateRequest === null || signatureRequestSendWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestSendWithTemplateRequest was null or undefined when calling signatureRequestSendWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestSendWithTemplateRequest,
        SignatureRequestSendWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestSendWithTemplateRequest,
          "SignatureRequestSendWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  signatureRequestUpdate(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestUpdateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/update/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestUpdate."
        );
      }
      if (signatureRequestUpdateRequest === null || signatureRequestUpdateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestUpdateRequest was null or undefined when calling signatureRequestUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestUpdateRequest,
        SignatureRequestUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestUpdateRequest,
          "SignatureRequestUpdateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios7.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/teamApi.ts
var import_axios8 = __toESM(require_axios2());
var defaultBasePath8 = "https://api.hellosign.com/v3";
var TeamApiApiKeys = /* @__PURE__ */ ((TeamApiApiKeys2) => {
})(TeamApiApiKeys || {});
var TeamApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath8;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  teamAddMember(_0, _1) {
    return __async(this, arguments, function* (teamAddMemberRequest, teamId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/add_member";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamAddMemberRequest === null || teamAddMemberRequest === void 0) {
        throw new Error(
          "Required parameter teamAddMemberRequest was null or undefined when calling teamAddMember."
        );
      }
      if (teamId !== void 0) {
        localVarQueryParameters["team_id"] = ObjectSerializer.serialize(
          teamId,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamAddMemberRequest,
        TeamAddMemberRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          teamAddMemberRequest,
          "TeamAddMemberRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios8.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  teamCreate(_0) {
    return __async(this, arguments, function* (teamCreateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamCreateRequest === null || teamCreateRequest === void 0) {
        throw new Error(
          "Required parameter teamCreateRequest was null or undefined when calling teamCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamCreateRequest,
        TeamCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(teamCreateRequest, "TeamCreateRequest");
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios8.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  teamDelete() {
    return __async(this, arguments, function* (options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/destroy";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "DELETE",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios8.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
            }
          );
        });
      });
    });
  }
  teamGet() {
    return __async(this, arguments, function* (options = { headers: {} }) {
      const localVarPath = this.basePath + "/team";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios8.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  teamInfo(_0) {
    return __async(this, arguments, function* (teamId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/info";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamId !== void 0) {
        localVarQueryParameters["team_id"] = ObjectSerializer.serialize(
          teamId,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios8.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamGetInfoResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamGetInfoResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  teamInvites(_0) {
    return __async(this, arguments, function* (emailAddress, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/invites";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (emailAddress !== void 0) {
        localVarQueryParameters["email_address"] = ObjectSerializer.serialize(
          emailAddress,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios8.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamInvitesResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamInvitesResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  teamMembers(_0, _1, _2) {
    return __async(this, arguments, function* (teamId, page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/members/{team_id}".replace(
        "{team_id}",
        encodeURIComponent(String(teamId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamId === null || teamId === void 0) {
        throw new Error(
          "Required parameter teamId was null or undefined when calling teamMembers."
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios8.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamMembersResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamMembersResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  teamRemoveMember(_0) {
    return __async(this, arguments, function* (teamRemoveMemberRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/remove_member";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamRemoveMemberRequest === null || teamRemoveMemberRequest === void 0) {
        throw new Error(
          "Required parameter teamRemoveMemberRequest was null or undefined when calling teamRemoveMember."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamRemoveMemberRequest,
        TeamRemoveMemberRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          teamRemoveMemberRequest,
          "TeamRemoveMemberRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios8.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  teamSubTeams(_0, _1, _2) {
    return __async(this, arguments, function* (teamId, page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/sub_teams/{team_id}".replace(
        "{team_id}",
        encodeURIComponent(String(teamId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamId === null || teamId === void 0) {
        throw new Error(
          "Required parameter teamId was null or undefined when calling teamSubTeams."
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios8.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamSubTeamsResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamSubTeamsResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  teamUpdate(_0) {
    return __async(this, arguments, function* (teamUpdateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamUpdateRequest === null || teamUpdateRequest === void 0) {
        throw new Error(
          "Required parameter teamUpdateRequest was null or undefined when calling teamUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamUpdateRequest,
        TeamUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(teamUpdateRequest, "TeamUpdateRequest");
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios8.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
};

// api/templateApi.ts
var import_axios9 = __toESM(require_axios2());
var defaultBasePath9 = "https://api.hellosign.com/v3";
var TemplateApiApiKeys = /* @__PURE__ */ ((TemplateApiApiKeys2) => {
})(TemplateApiApiKeys || {});
var TemplateApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath9;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  templateAddUser(_0, _1) {
    return __async(this, arguments, function* (templateId, templateAddUserRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/add_user/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateAddUser."
        );
      }
      if (templateAddUserRequest === null || templateAddUserRequest === void 0) {
        throw new Error(
          "Required parameter templateAddUserRequest was null or undefined when calling templateAddUser."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateAddUserRequest,
        TemplateAddUserRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateAddUserRequest,
          "TemplateAddUserRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  templateCreateEmbeddedDraft(_0) {
    return __async(this, arguments, function* (templateCreateEmbeddedDraftRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/create_embedded_draft";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateCreateEmbeddedDraftRequest === null || templateCreateEmbeddedDraftRequest === void 0) {
        throw new Error(
          "Required parameter templateCreateEmbeddedDraftRequest was null or undefined when calling templateCreateEmbeddedDraft."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateCreateEmbeddedDraftRequest,
        TemplateCreateEmbeddedDraftRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateCreateEmbeddedDraftRequest,
          "TemplateCreateEmbeddedDraftRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateCreateEmbeddedDraftResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateCreateEmbeddedDraftResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  templateDelete(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/delete/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateDelete."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios9.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
            }
          );
        });
      });
    });
  }
  templateFiles(_0, _1) {
    return __async(this, arguments, function* (templateId, fileType, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/files/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/pdf", "application/zip", "application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateFiles."
        );
      }
      if (fileType !== void 0) {
        localVarQueryParameters["file_type"] = ObjectSerializer.serialize(
          fileType,
          "'pdf' | 'zip'"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "arraybuffer"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios9.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "Buffer");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(response.data, "RequestFile");
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  templateFilesAsDataUri(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/files_as_data_uri/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateFilesAsDataUri."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "FileResponseDataUri"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "FileResponseDataUri"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  templateFilesAsFileUrl(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/files_as_file_url/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateFilesAsFileUrl."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          import_axios9.default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "FileResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "FileResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
            }
          );
        });
      });
    });
  }
  templateGet(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  templateList(_0, _1, _2, _3) {
    return __async(this, arguments, function* (accountId, page, pageSize, query, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountId !== void 0) {
        localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
          accountId,
          "string"
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      if (query !== void 0) {
        localVarQueryParameters["query"] = ObjectSerializer.serialize(
          query,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateListResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateListResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  templateRemoveUser(_0, _1) {
    return __async(this, arguments, function* (templateId, templateRemoveUserRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/remove_user/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateRemoveUser."
        );
      }
      if (templateRemoveUserRequest === null || templateRemoveUserRequest === void 0) {
        throw new Error(
          "Required parameter templateRemoveUserRequest was null or undefined when calling templateRemoveUser."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateRemoveUserRequest,
        TemplateRemoveUserRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateRemoveUserRequest,
          "TemplateRemoveUserRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  templateUpdateFiles(_0, _1) {
    return __async(this, arguments, function* (templateId, templateUpdateFilesRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/update_files/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateUpdateFiles."
        );
      }
      if (templateUpdateFilesRequest === null || templateUpdateFilesRequest === void 0) {
        throw new Error(
          "Required parameter templateUpdateFilesRequest was null or undefined when calling templateUpdateFiles."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateUpdateFilesRequest,
        TemplateUpdateFilesRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateUpdateFilesRequest,
          "TemplateUpdateFilesRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios9.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateUpdateFilesResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateUpdateFilesResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/unclaimedDraftApi.ts
var import_axios10 = __toESM(require_axios2());
var defaultBasePath10 = "https://api.hellosign.com/v3";
var UnclaimedDraftApiApiKeys = /* @__PURE__ */ ((UnclaimedDraftApiApiKeys2) => {
})(UnclaimedDraftApiApiKeys || {});
var UnclaimedDraftApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath10;
    this._defaultHeaders = {};
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  unclaimedDraftCreate(_0) {
    return __async(this, arguments, function* (unclaimedDraftCreateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/unclaimed_draft/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (unclaimedDraftCreateRequest === null || unclaimedDraftCreateRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftCreateRequest was null or undefined when calling unclaimedDraftCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftCreateRequest,
        UnclaimedDraftCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftCreateRequest,
          "UnclaimedDraftCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios10.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  unclaimedDraftCreateEmbedded(_0) {
    return __async(this, arguments, function* (unclaimedDraftCreateEmbeddedRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/unclaimed_draft/create_embedded";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (unclaimedDraftCreateEmbeddedRequest === null || unclaimedDraftCreateEmbeddedRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftCreateEmbeddedRequest was null or undefined when calling unclaimedDraftCreateEmbedded."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftCreateEmbeddedRequest,
        UnclaimedDraftCreateEmbeddedRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftCreateEmbeddedRequest,
          "UnclaimedDraftCreateEmbeddedRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios10.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  unclaimedDraftCreateEmbeddedWithTemplate(_0) {
    return __async(this, arguments, function* (unclaimedDraftCreateEmbeddedWithTemplateRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/unclaimed_draft/create_embedded_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (unclaimedDraftCreateEmbeddedWithTemplateRequest === null || unclaimedDraftCreateEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftCreateEmbeddedWithTemplateRequest was null or undefined when calling unclaimedDraftCreateEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftCreateEmbeddedWithTemplateRequest,
        UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftCreateEmbeddedWithTemplateRequest,
          "UnclaimedDraftCreateEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios10.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
  unclaimedDraftEditAndResend(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, unclaimedDraftEditAndResendRequest, options = { headers: {} }) {
      const localVarPath = this.basePath + "/unclaimed_draft/edit_and_resend/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling unclaimedDraftEditAndResend."
        );
      }
      if (unclaimedDraftEditAndResendRequest === null || unclaimedDraftEditAndResendRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftEditAndResendRequest was null or undefined when calling unclaimedDraftEditAndResend."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftEditAndResendRequest,
        UnclaimedDraftEditAndResendRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftEditAndResendRequest,
          "UnclaimedDraftEditAndResendRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            import_axios10.default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
              }
            );
          }
        );
      });
    });
  }
};

// api/apis.ts
var import_form_data = __toESM(require_form_data());
var import_qs = __toESM(require_lib());
var HttpError = class extends Error {
  constructor(response, body, statusCode) {
    super("HTTP request failed");
    this.response = response;
    this.body = body;
    this.statusCode = statusCode;
    this.name = "HttpError";
  }
};
var queryParamsSerializer = (params) => {
  return import_qs.default.stringify(params, { arrayFormat: "brackets" });
};
var APIS = [
  AccountApi,
  ApiAppApi,
  BulkSendJobApi,
  EmbeddedApi,
  OAuthApi,
  ReportApi,
  SignatureRequestApi,
  TeamApi,
  TemplateApi,
  UnclaimedDraftApi
];
var generateFormData = (obj, typemap) => {
  const data = {};
  let localVarUseFormData = false;
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return {
      localVarUseFormData,
      data
    };
  }
  typemap.forEach((paramInfo) => {
    if (obj[paramInfo.name] === void 0) {
      return;
    }
    if (paramInfo.type.indexOf("RequestFile") !== -1) {
      localVarUseFormData = true;
      if (Array.isArray(obj[paramInfo.name])) {
        obj[paramInfo.name].forEach((childObject, i) => {
          const key = `${paramInfo.baseName}[${i}]`;
          data[key] = childObject;
        });
        return;
      }
      data[paramInfo.baseName] = obj[paramInfo.name];
      return;
    }
    if (paramInfo.type.indexOf("boolean") !== -1) {
      data[paramInfo.baseName] = JSON.stringify(obj[paramInfo.name]);
      return;
    }
    const serialized = ObjectSerializer.serialize(
      obj[paramInfo.name],
      paramInfo.type
    );
    data[paramInfo.baseName] = shouldJsonify(serialized) ? JSON.stringify(serialized) : serialized;
  });
  return {
    localVarUseFormData,
    data
  };
};
var toFormData = (obj) => {
  const form = new import_form_data.default();
  Object.keys(obj).forEach((key) => {
    form.append(key, obj[key]);
  });
  return form;
};
var shouldJsonify = (val) => val === Object(val);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APIS,
  AccountApi,
  AccountApiApiKeys,
  AccountCreateRequest,
  AccountCreateResponse,
  AccountGetResponse,
  AccountResponse,
  AccountResponseQuotas,
  AccountUpdateRequest,
  AccountVerifyRequest,
  AccountVerifyResponse,
  AccountVerifyResponseAccount,
  ApiAppApi,
  ApiAppApiApiKeys,
  ApiAppCreateRequest,
  ApiAppGetResponse,
  ApiAppListResponse,
  ApiAppResponse,
  ApiAppResponseOAuth,
  ApiAppResponseOptions,
  ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest,
  ApiKeyAuth,
  BulkSendJobApi,
  BulkSendJobApiApiKeys,
  BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse,
  BulkSendJobResponse,
  BulkSendJobSendResponse,
  EmbeddedApi,
  EmbeddedApiApiKeys,
  EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded,
  ErrorResponse,
  ErrorResponseError,
  EventCallbackHelper,
  EventCallbackRequest,
  EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata,
  FileResponse,
  FileResponseDataUri,
  HttpBasicAuth,
  HttpBearerAuth,
  HttpError,
  ListInfoResponse,
  OAuth,
  OAuthApi,
  OAuthApiApiKeys,
  OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest,
  OAuthTokenResponse,
  ObjectSerializer,
  ReportApi,
  ReportApiApiKeys,
  ReportCreateRequest,
  ReportCreateResponse,
  ReportResponse,
  SignatureRequestApi,
  SignatureRequestApiApiKeys,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestGetResponse,
  SignatureRequestListResponse,
  SignatureRequestRemindRequest,
  SignatureRequestResponse,
  SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataBase,
  SignatureRequestResponseDataTypeEnum,
  SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures,
  SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest,
  SubAttachment,
  SubBulkSignerList,
  SubBulkSignerListCustomField,
  SubCC,
  SubCustomField,
  SubEditorOptions,
  SubFieldOptions,
  SubFormFieldGroup,
  SubFormFieldRule,
  SubFormFieldRuleAction,
  SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge,
  SubFormFieldsPerDocumentTypeEnum,
  SubMergeField,
  SubOAuth,
  SubOptions,
  SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner,
  SubSigningOptions,
  SubTeamResponse,
  SubTemplateRole,
  SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions,
  TeamAddMemberRequest,
  TeamApi,
  TeamApiApiKeys,
  TeamCreateRequest,
  TeamGetInfoResponse,
  TeamGetResponse,
  TeamInfoResponse,
  TeamInviteResponse,
  TeamInvitesResponse,
  TeamMemberResponse,
  TeamMembersResponse,
  TeamParentResponse,
  TeamRemoveMemberRequest,
  TeamResponse,
  TeamSubTeamsResponse,
  TeamUpdateRequest,
  TemplateAddUserRequest,
  TemplateApi,
  TemplateApiApiKeys,
  TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateEditResponse,
  TemplateGetResponse,
  TemplateListResponse,
  TemplateRemoveUserRequest,
  TemplateResponse,
  TemplateResponseAccount,
  TemplateResponseAccountQuota,
  TemplateResponseCCRole,
  TemplateResponseCustomField,
  TemplateResponseDocument,
  TemplateResponseDocumentCustomField,
  TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFormField,
  TemplateResponseDocumentStaticField,
  TemplateResponseFieldAvgTextLength,
  TemplateResponseNamedFormField,
  TemplateResponseSignerRole,
  TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate,
  UnclaimedDraftApi,
  UnclaimedDraftApiApiKeys,
  UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse,
  VoidAuth,
  WarningResponse,
  generateFormData,
  queryParamsSerializer,
  toFormData
});
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
