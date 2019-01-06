webpackJsonp([0],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__ = __webpack_require__(632);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ada000f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(645);
function injectStyle (ssrContext) {
  __webpack_require__(636)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1ada000f_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(607);
var isBuffer = __webpack_require__(615);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(605);
var normalizeHeaderName = __webpack_require__(617);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(608);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(608);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);
var settle = __webpack_require__(618);
var buildURL = __webpack_require__(620);
var parseHeaders = __webpack_require__(621);
var isURLSameOrigin = __webpack_require__(622);
var createError = __webpack_require__(609);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(623);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("production" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(624);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(619);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);


const baseUrl = 'https://hadia-backend.herokuapp.com/';

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {

    // window.location.href = `/?#/auth/login`

    this.$router.push({ path: '/auth/login' });
    return false;
    // console.log(main)
  } else {
    return Promise.reject(error);
  }
});

/* harmony default export */ __webpack_exports__["a"] = ({
  currentBaseUrl() {
    return baseUrl;
  },

  // signup
  signup(agentData) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${baseUrl}agent/signup`, agentData).then(response => {
      return response.data;
    }).catch(error => {
      return error.response.data;
    });
  },
  login(cred) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${baseUrl}agent/login`, cred).then(response => {
      return response.data;
    }).catch(error => {
      return error.response;
    });
  },
  status(cred) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${baseUrl}agent/status`, cred).then(response => {
      return response.data;
    }).catch(error => {
      return error.response;
    });
  }, answerCall(cred) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(`${baseUrl}call/answer-call`, cred).then(response => {
      return response.data;
    }).catch(error => {
      return error.response;
    });
  }
});

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(614);

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);
var bind = __webpack_require__(607);
var Axios = __webpack_require__(616);
var defaults = __webpack_require__(606);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(611);
axios.CancelToken = __webpack_require__(630);
axios.isCancel = __webpack_require__(610);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(631);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 615:
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(606);
var utils = __webpack_require__(605);
var InterceptorManager = __webpack_require__(625);
var dispatchRequest = __webpack_require__(626);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(609);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
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
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);
var transformData = __webpack_require__(627);
var isCancel = __webpack_require__(610);
var defaults = __webpack_require__(606);
var isAbsoluteURL = __webpack_require__(628);
var combineURLs = __webpack_require__(629);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(605);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(611);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_pusher__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_api__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_basix_modal_BasixModal_vue__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_agora_rtc_sdk__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_agora_rtc_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_agora_rtc_sdk__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






let appId = '168bb4cac34a49f3b25378cbbfc8dbb7',
    client = __WEBPACK_IMPORTED_MODULE_4_agora_rtc_sdk___default.a.createClient({ mode: 'live', codec: "h264" }),
    clientToken,
    localStream,
    remoteStream,
    localAudio = 'agentsaudio',
    remoteAudio = 'usersaudio';
/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'dashboard',
    components: {
        BasixModal: __WEBPACK_IMPORTED_MODULE_2__components_basix_modal_BasixModal_vue__["a" /* default */]

    },
    data() {
        return {
            currentUser: {
                call_page_origin: ''
            },
            show: '',
            apiUrl: 'https://vuetable.ratiw.net/api/users',
            apiMode: true,
            paginationPath: '',
            callingUsersArray: JSON.parse(localStorage.getItem('callingUsers') || '[]'),
            agentDetails: JSON.parse(localStorage.getItem('loginCred') || null),
            oncall: false
        };
    },
    computed: {
        revuser() {
            return this.callingUsersArray.reverse();
        }
    },
    methods: {

        showLargeModal() {
            this.$refs.largeModal.open();
        },
        notify(val) {
            // this.$refs.largeModal.open()
            this.$notify({ group: 'call', title: `Call from User`, type: 'success', data: { call: val }, duration: -1 });
        },
        suscribeChannel() {
            try {
                __WEBPACK_IMPORTED_MODULE_0__assets_js_pusher__["a" /* default */].suscribechannel(this.agentDetails.page[0]._id);
                __WEBPACK_IMPORTED_MODULE_0__assets_js_pusher__["a" /* default */].events('incoming-call', data => {
                    this.notify(data);
                    data.state = 'new';
                    let idx = this.callingUsersArray.findIndex(val => {
                        return val._id === data._id;
                    }),
                        value;
                    if (idx === -1) {

                        this.callingUsersArray.push(data);
                    } else {
                        value = this.callingUsersArray[idx];
                        value.state = 'new';
                        __WEBPACK_IMPORTED_MODULE_3_vue__["default"].set(this.callingUsersArray, idx, value);
                    }
                });
                __WEBPACK_IMPORTED_MODULE_0__assets_js_pusher__["a" /* default */].events('picked-call', data => {
                    this.callingUsersArray.find((val, idx) => {
                        if (val._id === data.user) {
                            val.agent = data._id;
                            val.state = 'picked';
                            return __WEBPACK_IMPORTED_MODULE_3_vue__["default"].set(this.callingUsersArray, idx, val);
                        }
                    });
                });
            } catch (e) {
                this.$router.push({ path: '/auth/login' });
            }
        },
        pickCall(data, props) {
            if (props) props.close();
            this.currentUser = props.item.data.call;
            __WEBPACK_IMPORTED_MODULE_1__assets_js_api__["a" /* default */].answerCall({ agent: this.agentDetails._id, user: data.call._id, page: this.agentDetails.page[0] }).then(response => {
                if (response.success) {
                    this.showLargeModal();
                    this.initializeJoinAndCall(response.channel_cred.channel_name, response.channel_cred.channel_key, response.channel_cred.uid);
                }
                console.log(response);
            });
        },
        checkSupport() {
            return __WEBPACK_IMPORTED_MODULE_4_agora_rtc_sdk___default.a.checkSystemRequirements();
        },
        initializeJoinAndCall(channelName, channelKey, uid) {
            if (this.checkSupport()) {
                //initialize agora
                client.init(appId, () => {
                    // join agent in room
                    client.join(channelKey, channelName, uid, uid => {
                        //get audio stream
                        this.oncall = true;
                        console.log("User " + uid + " join channel successfully");
                        localStream = __WEBPACK_IMPORTED_MODULE_4_agora_rtc_sdk___default.a.createStream({
                            streamID: uid,
                            audio: true,
                            video: false,
                            screen: false });
                        localStream.init(function () {
                            console.log("getUserMedia successfully");
                            localStream.play('user');
                            client.publish(localStream, function (err) {
                                console.log("Publish local stream error: " + err);
                            });
                            client.on('stream-published', function (evt) {
                                console.log("Publish local stream successfully", evt);
                            });
                        }, function (err) {
                            console.log("getUserMedia failed", err);
                        });
                    }, function (err) {
                        console.log("Join agents channel failed", err);
                    });
                }, function (err) {
                    console.log("AgoraRTC client init failed", err);
                });
                // on error error
                client.on('error', function (err) {
                    console.log("Got error msg:", err.reason);
                    // if (err.reason === 'DYNAMIC_KEY_TIMEOUT') {
                    //     client.renewChannelKey(channelKey, function(){
                    //         console.log("Renew channel key successfully");
                    //     }, function(err){
                    //         console.log("Renew channel key failed: ", err);
                    //     });
                    // }
                });
                //stream added
                client.on('stream-subscribed', function (evt) {
                    let remoteStream = evt.stream;
                    remoteStream.play('agent');
                    mode = 'conversing';
                    main_page_widget.create();
                });
                client.on('stream-added', function (evt) {
                    let stream = evt.stream;
                    console.log("New stream added: " + stream.getId());

                    client.subscribe(stream, function (err) {
                        console.log("Subscribe stream failed", err);
                    });
                    //suscribed stream
                });

                //todo changes to be made to event
                client.on('stream-removed', function (evt) {
                    var stream = evt.stream;
                    stream.stop();
                    localStream.stop();
                    console.log("Remote stream is removed " + stream.getId());
                });
                client.on('peer-leave', function (evt) {
                    this.oncall = false;
                    var stream = evt.stream;
                    if (stream) {
                        stream.stop();
                        localStream.stop();
                        // $('#agora_remote' + stream.getId()).remove();
                        console.log(evt.uid + " leaved from this channel");
                    }
                });
            }
        }, hangUp() {
            if (client) client.leave(() => {
                this.oncall = false;
                this.callingUsersArray.find((val, idx) => {
                    if (val._id === this.currentUser._id) {
                        val.state = 'ended';
                        return __WEBPACK_IMPORTED_MODULE_3_vue__["default"].set(this.callingUsersArray, idx, val);
                    }
                });
            }, function (err) {
                console.log("Leave channel failed");
            });
        }
    },
    mounted() {
        try {
            this.suscribeChannel();
            __WEBPACK_IMPORTED_MODULE_1__assets_js_api__["a" /* default */].status({ agent: this.agentDetails._id, available: 'yes', online: 'yes', page: this.agentDetails.page[0]._id }).then(response => {});
        } catch (e) {

            this.$router.push({ path: '/auth/login' });
        }

        window.addEventListener('beforeunload', () => {
            this.hangUp();
            this.callingUsersArray.forEach(val => {
                val.state = 'closed';
            });
            localStorage.setItem('callingUsers', JSON.stringify(this.callingUsersArray || []));
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open("POST", `${__WEBPACK_IMPORTED_MODULE_1__assets_js_api__["a" /* default */].currentBaseUrl()}agent/status`, false); //the false is for making the call synchronous
            xmlhttp.setRequestHeader("Content-type", "application/json");
            console.log({ agent: this.agentDetails._id, available: 'no', online: 'no', page: this.agentDetails.page[0]._id });
            xmlhttp.send(JSON.stringify({ page: this.agentDetails.page[0]._id, agent: this.agentDetails._id, available: 'no', online: 'no' }));
            console.log(xmlhttp);
            // // Chrome requires returnValue to be set.
            event.returnValue = '';
        });
    }
});

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'basix-modal',
  props: {
    transition: {
      type: String,
      default: 'modal'
    },
    oncall: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    force: {
      type: Boolean,
      default: false
    },
    okText: {
      type: String,
      default: 'CONFIRM'
    },
    cancelText: {
      type: String,
      default: 'CANCEL'
    },
    okClass: {
      type: String,
      default: 'btn btn-primary'
    },
    cancelClass: {
      type: String,
      default: 'btn btn-secondary'
    }
  },
  data() {
    return {
      show: false,
      duration: 200
    };
  },
  computed: {
    modalClass() {
      return {
        'modal-lg': this.large,
        'modal-sm': this.small
      };
    }
  },
  created() {
    if (this.show) {
      document.body.className += ' modal-open';
    }
  },
  beforeDestroy() {
    document.body.className = document.body.className.replace(/\s?modal-open/, '');
  },
  watch: {
    show(value) {
      if (value) {
        document.body.className += ' modal-open';
      } else {
        window.setTimeout(() => {
          document.body.className = document.body.className.replace(/\s?modal-open/, '');
        }, this.duration);
      }
    }
  },
  methods: {
    ok() {
      this.$emit('ok');
      this.show = false;
    },
    cancel() {
      this.$emit('cancel');
      this.show = false;
    },
    clickMask() {
      if (!this.force) {
        this.cancel();
      }
    },
    open() {
      this.show = true;
    }
  }
});

/***/ }),

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("438507ed", content, true, {});

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".notification.n-light{margin:10px;margin-bottom:0;border-radius:3px;font-size:13px;padding:10px 20px;color:#495061;background:#eaf4fe;border:1px solid #d4e8fd}.notification.n-light .notification-title{letter-spacing:1px;text-transform:uppercase;font-size:10px;color:#2589f3}.custom-template{display:flex;flex-direction:row;flex-wrap:nowrap;text-align:left;font-size:13px;margin:5px;margin-bottom:0;align-items:center;justify-content:center;background:#e8f9f0;border:2px solid #d0f2e1}.custom-template,.custom-template>div{box-sizing:border-box}.custom-template .custom-template-icon{flex:0 1 auto;color:#15c371;font-size:32px;padding:0 10px}.custom-template .custom-template-close{flex:0 1 auto;padding:0 20px;font-size:16px;opacity:.2;cursor:pointer}.custom-template .custom-template-close:hover{opacity:.8}.custom-template .custom-template-content{padding:10px;flex:1 0 auto}.custom-template .custom-template-content .custom-template-title{letter-spacing:1px;text-transform:uppercase;font-size:10px;font-weight:600}.v-fade-left-enter-active,.v-fade-left-leave-active,.v-fade-left-move{transition:all .5s}.v-fade-left-enter,.v-fade-left-leave-to{opacity:0;transform:translateX(500px) scale(.2)}.modal-lg{height:100%!important}.hidden{display:none}.modal-body{display:flex;flex-direction:column;justify-content:center}li{list-style-type:none;display:flex;flex-direction:row;justify-content:space-between}", ""]);

// exports


/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pusher_js__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pusher_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pusher_js__);


const pushercred = { appId: '680396',
  key: 'a7808805b311e73d5b87',
  secret: '8b046937055a9d564ad7',
  cluster: 'us2',
  encrypted: true };
console.log(pushercred);
const pusher = new __WEBPACK_IMPORTED_MODULE_0_pusher_js___default.a(pushercred.key, pushercred);
let channel = {};
(function () {
  // defaults
  pusher.logToConsole = true;
  pusher.connection.bind('error', function (err) {
    if (err.error.data.code === 4004) {
      console.log('>>> detected limit error');
    }
    console.log('error', err);
  });
  pusher.connection.bind('state_change', function (states) {
    // states = {previous: 'oldState', current: 'newState'}
    console.log(states.current);
  });
})();

/* harmony default export */ __webpack_exports__["a"] = ({
  suscribechannel(val) {
    channel = pusher.subscribe(`customerService-${val}`);
  },
  events(name, callback) {
    channel.bind(name, callback);
  }
});

/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Pusher JavaScript Library v4.3.1
 * https://pusher.com/
 *
 * Copyright 2017, Pusher
 * Released under the MIT licence.
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pusher"] = factory();
	else
		root["Pusher"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var pusher_1 = __webpack_require__(1);
	module.exports = pusher_1["default"];


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var Collections = __webpack_require__(9);
	var dispatcher_1 = __webpack_require__(24);
	var timeline_1 = __webpack_require__(39);
	var level_1 = __webpack_require__(40);
	var StrategyBuilder = __webpack_require__(41);
	var timers_1 = __webpack_require__(12);
	var defaults_1 = __webpack_require__(5);
	var DefaultConfig = __webpack_require__(71);
	var logger_1 = __webpack_require__(8);
	var factory_1 = __webpack_require__(43);
	var url_store_1 = __webpack_require__(14);
	var Pusher = (function () {
	    function Pusher(app_key, options) {
	        var _this = this;
	        checkAppKey(app_key);
	        options = options || {};
	        if (!options.cluster && !(options.wsHost || options.httpHost)) {
	            var suffix = url_store_1["default"].buildLogSuffix("javascriptQuickStart");
	            logger_1["default"].warn("You should always specify a cluster when connecting. " + suffix);
	        }
	        this.key = app_key;
	        this.config = Collections.extend(DefaultConfig.getGlobalConfig(), options.cluster ? DefaultConfig.getClusterConfig(options.cluster) : {}, options);
	        this.channels = factory_1["default"].createChannels();
	        this.global_emitter = new dispatcher_1["default"]();
	        this.sessionID = Math.floor(Math.random() * 1000000000);
	        this.timeline = new timeline_1["default"](this.key, this.sessionID, {
	            cluster: this.config.cluster,
	            features: Pusher.getClientFeatures(),
	            params: this.config.timelineParams || {},
	            limit: 50,
	            level: level_1["default"].INFO,
	            version: defaults_1["default"].VERSION
	        });
	        if (!this.config.disableStats) {
	            this.timelineSender = factory_1["default"].createTimelineSender(this.timeline, {
	                host: this.config.statsHost,
	                path: "/timeline/v2/" + runtime_1["default"].TimelineTransport.name
	            });
	        }
	        var getStrategy = function (options) {
	            var config = Collections.extend({}, _this.config, options);
	            return StrategyBuilder.build(runtime_1["default"].getDefaultStrategy(config), config);
	        };
	        this.connection = factory_1["default"].createConnectionManager(this.key, Collections.extend({ getStrategy: getStrategy,
	            timeline: this.timeline,
	            activityTimeout: this.config.activity_timeout,
	            pongTimeout: this.config.pong_timeout,
	            unavailableTimeout: this.config.unavailable_timeout
	        }, this.config, { useTLS: this.shouldUseTLS() }));
	        this.connection.bind('connected', function () {
	            _this.subscribeAll();
	            if (_this.timelineSender) {
	                _this.timelineSender.send(_this.connection.isUsingTLS());
	            }
	        });
	        this.connection.bind('message', function (params) {
	            var internal = (params.event.indexOf('pusher_internal:') === 0);
	            if (params.channel) {
	                var channel = _this.channel(params.channel);
	                if (channel) {
	                    channel.handleEvent(params.event, params.data);
	                }
	            }
	            if (!internal) {
	                _this.global_emitter.emit(params.event, params.data);
	            }
	        });
	        this.connection.bind('connecting', function () {
	            _this.channels.disconnect();
	        });
	        this.connection.bind('disconnected', function () {
	            _this.channels.disconnect();
	        });
	        this.connection.bind('error', function (err) {
	            logger_1["default"].warn('Error', err);
	        });
	        Pusher.instances.push(this);
	        this.timeline.info({ instances: Pusher.instances.length });
	        if (Pusher.isReady) {
	            this.connect();
	        }
	    }
	    Pusher.ready = function () {
	        Pusher.isReady = true;
	        for (var i = 0, l = Pusher.instances.length; i < l; i++) {
	            Pusher.instances[i].connect();
	        }
	    };
	    Pusher.log = function (message) {
	        if (Pusher.logToConsole && (window).console && (window).console.log) {
	            (window).console.log(message);
	        }
	    };
	    Pusher.getClientFeatures = function () {
	        return Collections.keys(Collections.filterObject({ "ws": runtime_1["default"].Transports.ws }, function (t) { return t.isSupported({}); }));
	    };
	    Pusher.prototype.channel = function (name) {
	        return this.channels.find(name);
	    };
	    Pusher.prototype.allChannels = function () {
	        return this.channels.all();
	    };
	    Pusher.prototype.connect = function () {
	        this.connection.connect();
	        if (this.timelineSender) {
	            if (!this.timelineSenderTimer) {
	                var usingTLS = this.connection.isUsingTLS();
	                var timelineSender = this.timelineSender;
	                this.timelineSenderTimer = new timers_1.PeriodicTimer(60000, function () {
	                    timelineSender.send(usingTLS);
	                });
	            }
	        }
	    };
	    Pusher.prototype.disconnect = function () {
	        this.connection.disconnect();
	        if (this.timelineSenderTimer) {
	            this.timelineSenderTimer.ensureAborted();
	            this.timelineSenderTimer = null;
	        }
	    };
	    Pusher.prototype.bind = function (event_name, callback, context) {
	        this.global_emitter.bind(event_name, callback, context);
	        return this;
	    };
	    Pusher.prototype.unbind = function (event_name, callback, context) {
	        this.global_emitter.unbind(event_name, callback, context);
	        return this;
	    };
	    Pusher.prototype.bind_global = function (callback) {
	        this.global_emitter.bind_global(callback);
	        return this;
	    };
	    Pusher.prototype.unbind_global = function (callback) {
	        this.global_emitter.unbind_global(callback);
	        return this;
	    };
	    Pusher.prototype.unbind_all = function (callback) {
	        this.global_emitter.unbind_all();
	        return this;
	    };
	    Pusher.prototype.subscribeAll = function () {
	        var channelName;
	        for (channelName in this.channels.channels) {
	            if (this.channels.channels.hasOwnProperty(channelName)) {
	                this.subscribe(channelName);
	            }
	        }
	    };
	    Pusher.prototype.subscribe = function (channel_name) {
	        var channel = this.channels.add(channel_name, this);
	        if (channel.subscriptionPending && channel.subscriptionCancelled) {
	            channel.reinstateSubscription();
	        }
	        else if (!channel.subscriptionPending && this.connection.state === "connected") {
	            channel.subscribe();
	        }
	        return channel;
	    };
	    Pusher.prototype.unsubscribe = function (channel_name) {
	        var channel = this.channels.find(channel_name);
	        if (channel && channel.subscriptionPending) {
	            channel.cancelSubscription();
	        }
	        else {
	            channel = this.channels.remove(channel_name);
	            if (channel && this.connection.state === "connected") {
	                channel.unsubscribe();
	            }
	        }
	    };
	    Pusher.prototype.send_event = function (event_name, data, channel) {
	        return this.connection.send_event(event_name, data, channel);
	    };
	    Pusher.prototype.shouldUseTLS = function () {
	        if (runtime_1["default"].getProtocol() === "https:") {
	            return true;
	        }
	        else if (this.config.forceTLS === true) {
	            return true;
	        }
	        else {
	            return Boolean(this.config.encrypted);
	        }
	    };
	    Pusher.instances = [];
	    Pusher.isReady = false;
	    Pusher.logToConsole = false;
	    Pusher.Runtime = runtime_1["default"];
	    Pusher.ScriptReceivers = runtime_1["default"].ScriptReceivers;
	    Pusher.DependenciesReceivers = runtime_1["default"].DependenciesReceivers;
	    Pusher.auth_callbacks = runtime_1["default"].auth_callbacks;
	    return Pusher;
	}());
	exports.__esModule = true;
	exports["default"] = Pusher;
	function checkAppKey(key) {
	    if (key === null || key === undefined) {
	        throw "You must pass your app key when you instantiate Pusher.";
	    }
	}
	runtime_1["default"].setup(Pusher);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dependencies_1 = __webpack_require__(3);
	var xhr_auth_1 = __webpack_require__(7);
	var jsonp_auth_1 = __webpack_require__(15);
	var script_request_1 = __webpack_require__(16);
	var jsonp_request_1 = __webpack_require__(17);
	var script_receiver_factory_1 = __webpack_require__(4);
	var jsonp_timeline_1 = __webpack_require__(18);
	var transports_1 = __webpack_require__(19);
	var net_info_1 = __webpack_require__(26);
	var default_strategy_1 = __webpack_require__(27);
	var transport_connection_initializer_1 = __webpack_require__(28);
	var http_1 = __webpack_require__(29);
	var Runtime = {
	    nextAuthCallbackID: 1,
	    auth_callbacks: {},
	    ScriptReceivers: script_receiver_factory_1.ScriptReceivers,
	    DependenciesReceivers: dependencies_1.DependenciesReceivers,
	    getDefaultStrategy: default_strategy_1["default"],
	    Transports: transports_1["default"],
	    transportConnectionInitializer: transport_connection_initializer_1["default"],
	    HTTPFactory: http_1["default"],
	    TimelineTransport: jsonp_timeline_1["default"],
	    getXHRAPI: function () {
	        return window.XMLHttpRequest;
	    },
	    getWebSocketAPI: function () {
	        return window.WebSocket || window.MozWebSocket;
	    },
	    setup: function (PusherClass) {
	        var _this = this;
	        window.Pusher = PusherClass;
	        var initializeOnDocumentBody = function () {
	            _this.onDocumentBody(PusherClass.ready);
	        };
	        if (!window.JSON) {
	            dependencies_1.Dependencies.load("json2", {}, initializeOnDocumentBody);
	        }
	        else {
	            initializeOnDocumentBody();
	        }
	    },
	    getDocument: function () {
	        return document;
	    },
	    getProtocol: function () {
	        return this.getDocument().location.protocol;
	    },
	    getAuthorizers: function () {
	        return { ajax: xhr_auth_1["default"], jsonp: jsonp_auth_1["default"] };
	    },
	    onDocumentBody: function (callback) {
	        var _this = this;
	        if (document.body) {
	            callback();
	        }
	        else {
	            setTimeout(function () {
	                _this.onDocumentBody(callback);
	            }, 0);
	        }
	    },
	    createJSONPRequest: function (url, data) {
	        return new jsonp_request_1["default"](url, data);
	    },
	    createScriptRequest: function (src) {
	        return new script_request_1["default"](src);
	    },
	    getLocalStorage: function () {
	        try {
	            return window.localStorage;
	        }
	        catch (e) {
	            return undefined;
	        }
	    },
	    createXHR: function () {
	        if (this.getXHRAPI()) {
	            return this.createXMLHttpRequest();
	        }
	        else {
	            return this.createMicrosoftXHR();
	        }
	    },
	    createXMLHttpRequest: function () {
	        var Constructor = this.getXHRAPI();
	        return new Constructor();
	    },
	    createMicrosoftXHR: function () {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	    },
	    getNetwork: function () {
	        return net_info_1.Network;
	    },
	    createWebSocket: function (url) {
	        var Constructor = this.getWebSocketAPI();
	        return new Constructor(url);
	    },
	    createSocketRequest: function (method, url) {
	        if (this.isXHRSupported()) {
	            return this.HTTPFactory.createXHR(method, url);
	        }
	        else if (this.isXDRSupported(url.indexOf("https:") === 0)) {
	            return this.HTTPFactory.createXDR(method, url);
	        }
	        else {
	            throw "Cross-origin HTTP requests are not supported";
	        }
	    },
	    isXHRSupported: function () {
	        var Constructor = this.getXHRAPI();
	        return Boolean(Constructor) && (new Constructor()).withCredentials !== undefined;
	    },
	    isXDRSupported: function (useTLS) {
	        var protocol = useTLS ? "https:" : "http:";
	        var documentProtocol = this.getProtocol();
	        return Boolean((window['XDomainRequest'])) && documentProtocol === protocol;
	    },
	    addUnloadListener: function (listener) {
	        if (window.addEventListener !== undefined) {
	            window.addEventListener("unload", listener, false);
	        }
	        else if (window.attachEvent !== undefined) {
	            window.attachEvent("onunload", listener);
	        }
	    },
	    removeUnloadListener: function (listener) {
	        if (window.addEventListener !== undefined) {
	            window.removeEventListener("unload", listener, false);
	        }
	        else if (window.detachEvent !== undefined) {
	            window.detachEvent("onunload", listener);
	        }
	    }
	};
	exports.__esModule = true;
	exports["default"] = Runtime;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var script_receiver_factory_1 = __webpack_require__(4);
	var defaults_1 = __webpack_require__(5);
	var dependency_loader_1 = __webpack_require__(6);
	exports.DependenciesReceivers = new script_receiver_factory_1.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers");
	exports.Dependencies = new dependency_loader_1["default"]({
	    cdn_http: defaults_1["default"].cdn_http,
	    cdn_https: defaults_1["default"].cdn_https,
	    version: defaults_1["default"].VERSION,
	    suffix: defaults_1["default"].dependency_suffix,
	    receivers: exports.DependenciesReceivers
	});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";
	var ScriptReceiverFactory = (function () {
	    function ScriptReceiverFactory(prefix, name) {
	        this.lastId = 0;
	        this.prefix = prefix;
	        this.name = name;
	    }
	    ScriptReceiverFactory.prototype.create = function (callback) {
	        this.lastId++;
	        var number = this.lastId;
	        var id = this.prefix + number;
	        var name = this.name + "[" + number + "]";
	        var called = false;
	        var callbackWrapper = function () {
	            if (!called) {
	                callback.apply(null, arguments);
	                called = true;
	            }
	        };
	        this[number] = callbackWrapper;
	        return { number: number, id: id, name: name, callback: callbackWrapper };
	    };
	    ScriptReceiverFactory.prototype.remove = function (receiver) {
	        delete this[receiver.number];
	    };
	    return ScriptReceiverFactory;
	}());
	exports.ScriptReceiverFactory = ScriptReceiverFactory;
	exports.ScriptReceivers = new ScriptReceiverFactory("_pusher_script_", "Pusher.ScriptReceivers");


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	var Defaults = {
	    VERSION: "4.3.1",
	    PROTOCOL: 7,
	    host: 'ws.pusherapp.com',
	    ws_port: 80,
	    wss_port: 443,
	    ws_path: '',
	    sockjs_host: 'sockjs.pusher.com',
	    sockjs_http_port: 80,
	    sockjs_https_port: 443,
	    sockjs_path: "/pusher",
	    stats_host: 'stats.pusher.com',
	    channel_auth_endpoint: '/pusher/auth',
	    channel_auth_transport: 'ajax',
	    activity_timeout: 120000,
	    pong_timeout: 30000,
	    unavailable_timeout: 10000,
	    cdn_http: 'http://js.pusher.com',
	    cdn_https: 'https://js.pusher.com',
	    dependency_suffix: ''
	};
	exports.__esModule = true;
	exports["default"] = Defaults;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var script_receiver_factory_1 = __webpack_require__(4);
	var runtime_1 = __webpack_require__(2);
	var DependencyLoader = (function () {
	    function DependencyLoader(options) {
	        this.options = options;
	        this.receivers = options.receivers || script_receiver_factory_1.ScriptReceivers;
	        this.loading = {};
	    }
	    DependencyLoader.prototype.load = function (name, options, callback) {
	        var self = this;
	        if (self.loading[name] && self.loading[name].length > 0) {
	            self.loading[name].push(callback);
	        }
	        else {
	            self.loading[name] = [callback];
	            var request = runtime_1["default"].createScriptRequest(self.getPath(name, options));
	            var receiver = self.receivers.create(function (error) {
	                self.receivers.remove(receiver);
	                if (self.loading[name]) {
	                    var callbacks = self.loading[name];
	                    delete self.loading[name];
	                    var successCallback = function (wasSuccessful) {
	                        if (!wasSuccessful) {
	                            request.cleanup();
	                        }
	                    };
	                    for (var i = 0; i < callbacks.length; i++) {
	                        callbacks[i](error, successCallback);
	                    }
	                }
	            });
	            request.send(receiver);
	        }
	    };
	    DependencyLoader.prototype.getRoot = function (options) {
	        var cdn;
	        var protocol = runtime_1["default"].getDocument().location.protocol;
	        if ((options && options.useTLS) || protocol === "https:") {
	            cdn = this.options.cdn_https;
	        }
	        else {
	            cdn = this.options.cdn_http;
	        }
	        return cdn.replace(/\/*$/, "") + "/" + this.options.version;
	    };
	    DependencyLoader.prototype.getPath = function (name, options) {
	        return this.getRoot(options) + '/' + name + this.options.suffix + '.js';
	    };
	    ;
	    return DependencyLoader;
	}());
	exports.__esModule = true;
	exports["default"] = DependencyLoader;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(8);
	var runtime_1 = __webpack_require__(2);
	var url_store_1 = __webpack_require__(14);
	var ajax = function (context, socketId, callback) {
	    var self = this, xhr;
	    xhr = runtime_1["default"].createXHR();
	    xhr.open("POST", self.options.authEndpoint, true);
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	    for (var headerName in this.authOptions.headers) {
	        xhr.setRequestHeader(headerName, this.authOptions.headers[headerName]);
	    }
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	                var data, parsed = false;
	                try {
	                    data = JSON.parse(xhr.responseText);
	                    parsed = true;
	                }
	                catch (e) {
	                    callback(true, 'JSON returned from webapp was invalid, yet status code was 200. Data was: ' + xhr.responseText);
	                }
	                if (parsed) {
	                    callback(false, data);
	                }
	            }
	            else {
	                var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
	                logger_1["default"].warn(("Couldn't retrieve authentication info. " + xhr.status) +
	                    ("Clients must be authenticated to join private or presence channels. " + suffix));
	                callback(true, xhr.status);
	            }
	        }
	    };
	    xhr.send(this.composeQuery(socketId));
	    return xhr;
	};
	exports.__esModule = true;
	exports["default"] = ajax;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var collections_1 = __webpack_require__(9);
	var pusher_1 = __webpack_require__(1);
	var Logger = {
	    debug: function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        if (!pusher_1["default"].log) {
	            return;
	        }
	        pusher_1["default"].log(collections_1.stringify.apply(this, arguments));
	    },
	    warn: function () {
	        var args = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            args[_i - 0] = arguments[_i];
	        }
	        var message = collections_1.stringify.apply(this, arguments);
	        if (pusher_1["default"].log) {
	            pusher_1["default"].log(message);
	        }
	        else if ((window).console) {
	            if ((window).console.warn) {
	                (window).console.warn(message);
	            }
	            else if ((window).console.log) {
	                (window).console.log(message);
	            }
	        }
	    }
	};
	exports.__esModule = true;
	exports["default"] = Logger;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var base64_1 = __webpack_require__(10);
	var util_1 = __webpack_require__(11);
	function extend(target) {
	    var sources = [];
	    for (var _i = 1; _i < arguments.length; _i++) {
	        sources[_i - 1] = arguments[_i];
	    }
	    for (var i = 0; i < sources.length; i++) {
	        var extensions = sources[i];
	        for (var property in extensions) {
	            if (extensions[property] && extensions[property].constructor &&
	                extensions[property].constructor === Object) {
	                target[property] = extend(target[property] || {}, extensions[property]);
	            }
	            else {
	                target[property] = extensions[property];
	            }
	        }
	    }
	    return target;
	}
	exports.extend = extend;
	function stringify() {
	    var m = ["Pusher"];
	    for (var i = 0; i < arguments.length; i++) {
	        if (typeof arguments[i] === "string") {
	            m.push(arguments[i]);
	        }
	        else {
	            m.push(safeJSONStringify(arguments[i]));
	        }
	    }
	    return m.join(" : ");
	}
	exports.stringify = stringify;
	function arrayIndexOf(array, item) {
	    var nativeIndexOf = Array.prototype.indexOf;
	    if (array === null) {
	        return -1;
	    }
	    if (nativeIndexOf && array.indexOf === nativeIndexOf) {
	        return array.indexOf(item);
	    }
	    for (var i = 0, l = array.length; i < l; i++) {
	        if (array[i] === item) {
	            return i;
	        }
	    }
	    return -1;
	}
	exports.arrayIndexOf = arrayIndexOf;
	function objectApply(object, f) {
	    for (var key in object) {
	        if (Object.prototype.hasOwnProperty.call(object, key)) {
	            f(object[key], key, object);
	        }
	    }
	}
	exports.objectApply = objectApply;
	function keys(object) {
	    var keys = [];
	    objectApply(object, function (_, key) {
	        keys.push(key);
	    });
	    return keys;
	}
	exports.keys = keys;
	function values(object) {
	    var values = [];
	    objectApply(object, function (value) {
	        values.push(value);
	    });
	    return values;
	}
	exports.values = values;
	function apply(array, f, context) {
	    for (var i = 0; i < array.length; i++) {
	        f.call(context || (window), array[i], i, array);
	    }
	}
	exports.apply = apply;
	function map(array, f) {
	    var result = [];
	    for (var i = 0; i < array.length; i++) {
	        result.push(f(array[i], i, array, result));
	    }
	    return result;
	}
	exports.map = map;
	function mapObject(object, f) {
	    var result = {};
	    objectApply(object, function (value, key) {
	        result[key] = f(value);
	    });
	    return result;
	}
	exports.mapObject = mapObject;
	function filter(array, test) {
	    test = test || function (value) { return !!value; };
	    var result = [];
	    for (var i = 0; i < array.length; i++) {
	        if (test(array[i], i, array, result)) {
	            result.push(array[i]);
	        }
	    }
	    return result;
	}
	exports.filter = filter;
	function filterObject(object, test) {
	    var result = {};
	    objectApply(object, function (value, key) {
	        if ((test && test(value, key, object, result)) || Boolean(value)) {
	            result[key] = value;
	        }
	    });
	    return result;
	}
	exports.filterObject = filterObject;
	function flatten(object) {
	    var result = [];
	    objectApply(object, function (value, key) {
	        result.push([key, value]);
	    });
	    return result;
	}
	exports.flatten = flatten;
	function any(array, test) {
	    for (var i = 0; i < array.length; i++) {
	        if (test(array[i], i, array)) {
	            return true;
	        }
	    }
	    return false;
	}
	exports.any = any;
	function all(array, test) {
	    for (var i = 0; i < array.length; i++) {
	        if (!test(array[i], i, array)) {
	            return false;
	        }
	    }
	    return true;
	}
	exports.all = all;
	function encodeParamsObject(data) {
	    return mapObject(data, function (value) {
	        if (typeof value === "object") {
	            value = safeJSONStringify(value);
	        }
	        return encodeURIComponent(base64_1["default"](value.toString()));
	    });
	}
	exports.encodeParamsObject = encodeParamsObject;
	function buildQueryString(data) {
	    var params = filterObject(data, function (value) {
	        return value !== undefined;
	    });
	    var query = map(flatten(encodeParamsObject(params)), util_1["default"].method("join", "=")).join("&");
	    return query;
	}
	exports.buildQueryString = buildQueryString;
	function decycleObject(object) {
	    var objects = [], paths = [];
	    return (function derez(value, path) {
	        var i, name, nu;
	        switch (typeof value) {
	            case 'object':
	                if (!value) {
	                    return null;
	                }
	                for (i = 0; i < objects.length; i += 1) {
	                    if (objects[i] === value) {
	                        return { $ref: paths[i] };
	                    }
	                }
	                objects.push(value);
	                paths.push(path);
	                if (Object.prototype.toString.apply(value) === '[object Array]') {
	                    nu = [];
	                    for (i = 0; i < value.length; i += 1) {
	                        nu[i] = derez(value[i], path + '[' + i + ']');
	                    }
	                }
	                else {
	                    nu = {};
	                    for (name in value) {
	                        if (Object.prototype.hasOwnProperty.call(value, name)) {
	                            nu[name] = derez(value[name], path + '[' + JSON.stringify(name) + ']');
	                        }
	                    }
	                }
	                return nu;
	            case 'number':
	            case 'string':
	            case 'boolean':
	                return value;
	        }
	    }(object, '$'));
	}
	exports.decycleObject = decycleObject;
	function safeJSONStringify(source) {
	    try {
	        return JSON.stringify(source);
	    }
	    catch (e) {
	        return JSON.stringify(decycleObject(source));
	    }
	}
	exports.safeJSONStringify = safeJSONStringify;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function encode(s) {
	    return btoa(utob(s));
	}
	exports.__esModule = true;
	exports["default"] = encode;
	var fromCharCode = String.fromCharCode;
	var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	var b64tab = {};
	for (var i = 0, l = b64chars.length; i < l; i++) {
	    b64tab[b64chars.charAt(i)] = i;
	}
	var cb_utob = function (c) {
	    var cc = c.charCodeAt(0);
	    return cc < 0x80 ? c
	        : cc < 0x800 ? fromCharCode(0xc0 | (cc >>> 6)) +
	            fromCharCode(0x80 | (cc & 0x3f))
	            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
	                fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
	                fromCharCode(0x80 | (cc & 0x3f));
	};
	var utob = function (u) {
	    return u.replace(/[^\x00-\x7F]/g, cb_utob);
	};
	var cb_encode = function (ccc) {
	    var padlen = [0, 2, 1][ccc.length % 3];
	    var ord = ccc.charCodeAt(0) << 16
	        | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
	        | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0));
	    var chars = [
	        b64chars.charAt(ord >>> 18),
	        b64chars.charAt((ord >>> 12) & 63),
	        padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
	        padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
	    ];
	    return chars.join('');
	};
	var btoa = (window).btoa || function (b) {
	    return b.replace(/[\s\S]{1,3}/g, cb_encode);
	};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var timers_1 = __webpack_require__(12);
	var Util = {
	    now: function () {
	        if (Date.now) {
	            return Date.now();
	        }
	        else {
	            return new Date().valueOf();
	        }
	    },
	    defer: function (callback) {
	        return new timers_1.OneOffTimer(0, callback);
	    },
	    method: function (name) {
	        var args = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            args[_i - 1] = arguments[_i];
	        }
	        var boundArguments = Array.prototype.slice.call(arguments, 1);
	        return function (object) {
	            return object[name].apply(object, boundArguments.concat(arguments));
	        };
	    }
	};
	exports.__esModule = true;
	exports["default"] = Util;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_timer_1 = __webpack_require__(13);
	function clearTimeout(timer) {
	    (window).clearTimeout(timer);
	}
	function clearInterval(timer) {
	    (window).clearInterval(timer);
	}
	var OneOffTimer = (function (_super) {
	    __extends(OneOffTimer, _super);
	    function OneOffTimer(delay, callback) {
	        _super.call(this, setTimeout, clearTimeout, delay, function (timer) {
	            callback();
	            return null;
	        });
	    }
	    return OneOffTimer;
	}(abstract_timer_1["default"]));
	exports.OneOffTimer = OneOffTimer;
	var PeriodicTimer = (function (_super) {
	    __extends(PeriodicTimer, _super);
	    function PeriodicTimer(delay, callback) {
	        _super.call(this, setInterval, clearInterval, delay, function (timer) {
	            callback();
	            return timer;
	        });
	    }
	    return PeriodicTimer;
	}(abstract_timer_1["default"]));
	exports.PeriodicTimer = PeriodicTimer;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";
	var Timer = (function () {
	    function Timer(set, clear, delay, callback) {
	        var _this = this;
	        this.clear = clear;
	        this.timer = set(function () {
	            if (_this.timer) {
	                _this.timer = callback(_this.timer);
	            }
	        }, delay);
	    }
	    Timer.prototype.isRunning = function () {
	        return this.timer !== null;
	    };
	    Timer.prototype.ensureAborted = function () {
	        if (this.timer) {
	            this.clear(this.timer);
	            this.timer = null;
	        }
	    };
	    return Timer;
	}());
	exports.__esModule = true;
	exports["default"] = Timer;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	var urlStore = {
	    baseUrl: "https://pusher.com",
	    urls: {
	        authenticationEndpoint: {
	            path: "/docs/authenticating_users"
	        },
	        javascriptQuickStart: {
	            path: "/docs/javascript_quick_start"
	        }
	    }
	};
	var buildLogSuffix = function (key) {
	    var urlPrefix = "See:";
	    var urlObj = urlStore.urls[key];
	    if (!urlObj)
	        return "";
	    var url;
	    if (urlObj.fullUrl) {
	        url = urlObj.fullUrl;
	    }
	    else if (urlObj.path) {
	        url = urlStore.baseUrl + urlObj.path;
	    }
	    if (!url)
	        return "";
	    return urlPrefix + " " + url;
	};
	exports.__esModule = true;
	exports["default"] = { buildLogSuffix: buildLogSuffix };


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var logger_1 = __webpack_require__(8);
	var jsonp = function (context, socketId, callback) {
	    if (this.authOptions.headers !== undefined) {
	        logger_1["default"].warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
	    }
	    var callbackName = context.nextAuthCallbackID.toString();
	    context.nextAuthCallbackID++;
	    var document = context.getDocument();
	    var script = document.createElement("script");
	    context.auth_callbacks[callbackName] = function (data) {
	        callback(false, data);
	    };
	    var callback_name = "Pusher.auth_callbacks['" + callbackName + "']";
	    script.src = this.options.authEndpoint +
	        '?callback=' +
	        encodeURIComponent(callback_name) +
	        '&' +
	        this.composeQuery(socketId);
	    var head = document.getElementsByTagName("head")[0] || document.documentElement;
	    head.insertBefore(script, head.firstChild);
	};
	exports.__esModule = true;
	exports["default"] = jsonp;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	var ScriptRequest = (function () {
	    function ScriptRequest(src) {
	        this.src = src;
	    }
	    ScriptRequest.prototype.send = function (receiver) {
	        var self = this;
	        var errorString = "Error loading " + self.src;
	        self.script = document.createElement("script");
	        self.script.id = receiver.id;
	        self.script.src = self.src;
	        self.script.type = "text/javascript";
	        self.script.charset = "UTF-8";
	        if (self.script.addEventListener) {
	            self.script.onerror = function () {
	                receiver.callback(errorString);
	            };
	            self.script.onload = function () {
	                receiver.callback(null);
	            };
	        }
	        else {
	            self.script.onreadystatechange = function () {
	                if (self.script.readyState === 'loaded' ||
	                    self.script.readyState === 'complete') {
	                    receiver.callback(null);
	                }
	            };
	        }
	        if (self.script.async === undefined && document.attachEvent &&
	            /opera/i.test(navigator.userAgent)) {
	            self.errorScript = document.createElement("script");
	            self.errorScript.id = receiver.id + "_error";
	            self.errorScript.text = receiver.name + "('" + errorString + "');";
	            self.script.async = self.errorScript.async = false;
	        }
	        else {
	            self.script.async = true;
	        }
	        var head = document.getElementsByTagName('head')[0];
	        head.insertBefore(self.script, head.firstChild);
	        if (self.errorScript) {
	            head.insertBefore(self.errorScript, self.script.nextSibling);
	        }
	    };
	    ScriptRequest.prototype.cleanup = function () {
	        if (this.script) {
	            this.script.onload = this.script.onerror = null;
	            this.script.onreadystatechange = null;
	        }
	        if (this.script && this.script.parentNode) {
	            this.script.parentNode.removeChild(this.script);
	        }
	        if (this.errorScript && this.errorScript.parentNode) {
	            this.errorScript.parentNode.removeChild(this.errorScript);
	        }
	        this.script = null;
	        this.errorScript = null;
	    };
	    return ScriptRequest;
	}());
	exports.__esModule = true;
	exports["default"] = ScriptRequest;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var runtime_1 = __webpack_require__(2);
	var JSONPRequest = (function () {
	    function JSONPRequest(url, data) {
	        this.url = url;
	        this.data = data;
	    }
	    JSONPRequest.prototype.send = function (receiver) {
	        if (this.request) {
	            return;
	        }
	        var query = Collections.buildQueryString(this.data);
	        var url = this.url + "/" + receiver.number + "?" + query;
	        this.request = runtime_1["default"].createScriptRequest(url);
	        this.request.send(receiver);
	    };
	    JSONPRequest.prototype.cleanup = function () {
	        if (this.request) {
	            this.request.cleanup();
	        }
	    };
	    return JSONPRequest;
	}());
	exports.__esModule = true;
	exports["default"] = JSONPRequest;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var script_receiver_factory_1 = __webpack_require__(4);
	var getAgent = function (sender, useTLS) {
	    return function (data, callback) {
	        var scheme = "http" + (useTLS ? "s" : "") + "://";
	        var url = scheme + (sender.host || sender.options.host) + sender.options.path;
	        var request = runtime_1["default"].createJSONPRequest(url, data);
	        var receiver = runtime_1["default"].ScriptReceivers.create(function (error, result) {
	            script_receiver_factory_1.ScriptReceivers.remove(receiver);
	            request.cleanup();
	            if (result && result.host) {
	                sender.host = result.host;
	            }
	            if (callback) {
	                callback(error, result);
	            }
	        });
	        request.send(receiver);
	    };
	};
	var jsonp = {
	    name: 'jsonp',
	    getAgent: getAgent
	};
	exports.__esModule = true;
	exports["default"] = jsonp;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var transports_1 = __webpack_require__(20);
	var transport_1 = __webpack_require__(22);
	var URLSchemes = __webpack_require__(21);
	var runtime_1 = __webpack_require__(2);
	var dependencies_1 = __webpack_require__(3);
	var Collections = __webpack_require__(9);
	var SockJSTransport = new transport_1["default"]({
	    file: "sockjs",
	    urls: URLSchemes.sockjs,
	    handlesActivityChecks: true,
	    supportsPing: false,
	    isSupported: function () {
	        return true;
	    },
	    isInitialized: function () {
	        return window.SockJS !== undefined;
	    },
	    getSocket: function (url, options) {
	        return new window.SockJS(url, null, {
	            js_path: dependencies_1.Dependencies.getPath("sockjs", {
	                useTLS: options.useTLS
	            }),
	            ignore_null_origin: options.ignoreNullOrigin
	        });
	    },
	    beforeOpen: function (socket, path) {
	        socket.send(JSON.stringify({
	            path: path
	        }));
	    }
	});
	var xdrConfiguration = {
	    isSupported: function (environment) {
	        var yes = runtime_1["default"].isXDRSupported(environment.useTLS);
	        return yes;
	    }
	};
	var XDRStreamingTransport = new transport_1["default"](Collections.extend({}, transports_1.streamingConfiguration, xdrConfiguration));
	var XDRPollingTransport = new transport_1["default"](Collections.extend({}, transports_1.pollingConfiguration, xdrConfiguration));
	transports_1["default"].xdr_streaming = XDRStreamingTransport;
	transports_1["default"].xdr_polling = XDRPollingTransport;
	transports_1["default"].sockjs = SockJSTransport;
	exports.__esModule = true;
	exports["default"] = transports_1["default"];


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var URLSchemes = __webpack_require__(21);
	var transport_1 = __webpack_require__(22);
	var Collections = __webpack_require__(9);
	var runtime_1 = __webpack_require__(2);
	var WSTransport = new transport_1["default"]({
	    urls: URLSchemes.ws,
	    handlesActivityChecks: false,
	    supportsPing: false,
	    isInitialized: function () {
	        return Boolean(runtime_1["default"].getWebSocketAPI());
	    },
	    isSupported: function () {
	        return Boolean(runtime_1["default"].getWebSocketAPI());
	    },
	    getSocket: function (url) {
	        return runtime_1["default"].createWebSocket(url);
	    }
	});
	var httpConfiguration = {
	    urls: URLSchemes.http,
	    handlesActivityChecks: false,
	    supportsPing: true,
	    isInitialized: function () {
	        return true;
	    }
	};
	exports.streamingConfiguration = Collections.extend({ getSocket: function (url) {
	        return runtime_1["default"].HTTPFactory.createStreamingSocket(url);
	    }
	}, httpConfiguration);
	exports.pollingConfiguration = Collections.extend({ getSocket: function (url) {
	        return runtime_1["default"].HTTPFactory.createPollingSocket(url);
	    }
	}, httpConfiguration);
	var xhrConfiguration = {
	    isSupported: function () {
	        return runtime_1["default"].isXHRSupported();
	    }
	};
	var XHRStreamingTransport = new transport_1["default"](Collections.extend({}, exports.streamingConfiguration, xhrConfiguration));
	var XHRPollingTransport = new transport_1["default"](Collections.extend({}, exports.pollingConfiguration, xhrConfiguration));
	var Transports = {
	    ws: WSTransport,
	    xhr_streaming: XHRStreamingTransport,
	    xhr_polling: XHRPollingTransport
	};
	exports.__esModule = true;
	exports["default"] = Transports;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var defaults_1 = __webpack_require__(5);
	function getGenericURL(baseScheme, params, path) {
	    var scheme = baseScheme + (params.useTLS ? "s" : "");
	    var host = params.useTLS ? params.hostTLS : params.hostNonTLS;
	    return scheme + "://" + host + path;
	}
	function getGenericPath(key, queryString) {
	    var path = "/app/" + key;
	    var query = "?protocol=" + defaults_1["default"].PROTOCOL +
	        "&client=js" +
	        "&version=" + defaults_1["default"].VERSION +
	        (queryString ? ("&" + queryString) : "");
	    return path + query;
	}
	exports.ws = {
	    getInitial: function (key, params) {
	        var path = (params.httpPath || "") + getGenericPath(key, "flash=false");
	        return getGenericURL("ws", params, path);
	    }
	};
	exports.http = {
	    getInitial: function (key, params) {
	        var path = (params.httpPath || "/pusher") + getGenericPath(key);
	        return getGenericURL("http", params, path);
	    }
	};
	exports.sockjs = {
	    getInitial: function (key, params) {
	        return getGenericURL("http", params, params.httpPath || "/pusher");
	    },
	    getPath: function (key, params) {
	        return getGenericPath(key);
	    }
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var transport_connection_1 = __webpack_require__(23);
	var Transport = (function () {
	    function Transport(hooks) {
	        this.hooks = hooks;
	    }
	    Transport.prototype.isSupported = function (environment) {
	        return this.hooks.isSupported(environment);
	    };
	    Transport.prototype.createConnection = function (name, priority, key, options) {
	        return new transport_connection_1["default"](this.hooks, name, priority, key, options);
	    };
	    return Transport;
	}());
	exports.__esModule = true;
	exports["default"] = Transport;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(11);
	var Collections = __webpack_require__(9);
	var dispatcher_1 = __webpack_require__(24);
	var logger_1 = __webpack_require__(8);
	var runtime_1 = __webpack_require__(2);
	var TransportConnection = (function (_super) {
	    __extends(TransportConnection, _super);
	    function TransportConnection(hooks, name, priority, key, options) {
	        _super.call(this);
	        this.initialize = runtime_1["default"].transportConnectionInitializer;
	        this.hooks = hooks;
	        this.name = name;
	        this.priority = priority;
	        this.key = key;
	        this.options = options;
	        this.state = "new";
	        this.timeline = options.timeline;
	        this.activityTimeout = options.activityTimeout;
	        this.id = this.timeline.generateUniqueID();
	    }
	    TransportConnection.prototype.handlesActivityChecks = function () {
	        return Boolean(this.hooks.handlesActivityChecks);
	    };
	    TransportConnection.prototype.supportsPing = function () {
	        return Boolean(this.hooks.supportsPing);
	    };
	    TransportConnection.prototype.connect = function () {
	        var _this = this;
	        if (this.socket || this.state !== "initialized") {
	            return false;
	        }
	        var url = this.hooks.urls.getInitial(this.key, this.options);
	        try {
	            this.socket = this.hooks.getSocket(url, this.options);
	        }
	        catch (e) {
	            util_1["default"].defer(function () {
	                _this.onError(e);
	                _this.changeState("closed");
	            });
	            return false;
	        }
	        this.bindListeners();
	        logger_1["default"].debug("Connecting", { transport: this.name, url: url });
	        this.changeState("connecting");
	        return true;
	    };
	    TransportConnection.prototype.close = function () {
	        if (this.socket) {
	            this.socket.close();
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    TransportConnection.prototype.send = function (data) {
	        var _this = this;
	        if (this.state === "open") {
	            util_1["default"].defer(function () {
	                if (_this.socket) {
	                    _this.socket.send(data);
	                }
	            });
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    TransportConnection.prototype.ping = function () {
	        if (this.state === "open" && this.supportsPing()) {
	            this.socket.ping();
	        }
	    };
	    TransportConnection.prototype.onOpen = function () {
	        if (this.hooks.beforeOpen) {
	            this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options));
	        }
	        this.changeState("open");
	        this.socket.onopen = undefined;
	    };
	    TransportConnection.prototype.onError = function (error) {
	        this.emit("error", { type: 'WebSocketError', error: error });
	        this.timeline.error(this.buildTimelineMessage({ error: error.toString() }));
	    };
	    TransportConnection.prototype.onClose = function (closeEvent) {
	        if (closeEvent) {
	            this.changeState("closed", {
	                code: closeEvent.code,
	                reason: closeEvent.reason,
	                wasClean: closeEvent.wasClean
	            });
	        }
	        else {
	            this.changeState("closed");
	        }
	        this.unbindListeners();
	        this.socket = undefined;
	    };
	    TransportConnection.prototype.onMessage = function (message) {
	        this.emit("message", message);
	    };
	    TransportConnection.prototype.onActivity = function () {
	        this.emit("activity");
	    };
	    TransportConnection.prototype.bindListeners = function () {
	        var _this = this;
	        this.socket.onopen = function () {
	            _this.onOpen();
	        };
	        this.socket.onerror = function (error) {
	            _this.onError(error);
	        };
	        this.socket.onclose = function (closeEvent) {
	            _this.onClose(closeEvent);
	        };
	        this.socket.onmessage = function (message) {
	            _this.onMessage(message);
	        };
	        if (this.supportsPing()) {
	            this.socket.onactivity = function () { _this.onActivity(); };
	        }
	    };
	    TransportConnection.prototype.unbindListeners = function () {
	        if (this.socket) {
	            this.socket.onopen = undefined;
	            this.socket.onerror = undefined;
	            this.socket.onclose = undefined;
	            this.socket.onmessage = undefined;
	            if (this.supportsPing()) {
	                this.socket.onactivity = undefined;
	            }
	        }
	    };
	    TransportConnection.prototype.changeState = function (state, params) {
	        this.state = state;
	        this.timeline.info(this.buildTimelineMessage({
	            state: state,
	            params: params
	        }));
	        this.emit(state, params);
	    };
	    TransportConnection.prototype.buildTimelineMessage = function (message) {
	        return Collections.extend({ cid: this.id }, message);
	    };
	    return TransportConnection;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = TransportConnection;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var callback_registry_1 = __webpack_require__(25);
	var Dispatcher = (function () {
	    function Dispatcher(failThrough) {
	        this.callbacks = new callback_registry_1["default"]();
	        this.global_callbacks = [];
	        this.failThrough = failThrough;
	    }
	    Dispatcher.prototype.bind = function (eventName, callback, context) {
	        this.callbacks.add(eventName, callback, context);
	        return this;
	    };
	    Dispatcher.prototype.bind_global = function (callback) {
	        this.global_callbacks.push(callback);
	        return this;
	    };
	    Dispatcher.prototype.unbind = function (eventName, callback, context) {
	        this.callbacks.remove(eventName, callback, context);
	        return this;
	    };
	    Dispatcher.prototype.unbind_global = function (callback) {
	        if (!callback) {
	            this.global_callbacks = [];
	            return this;
	        }
	        this.global_callbacks = Collections.filter(this.global_callbacks || [], function (c) { return c !== callback; });
	        return this;
	    };
	    Dispatcher.prototype.unbind_all = function () {
	        this.unbind();
	        this.unbind_global();
	        return this;
	    };
	    Dispatcher.prototype.emit = function (eventName, data) {
	        var i;
	        for (i = 0; i < this.global_callbacks.length; i++) {
	            this.global_callbacks[i](eventName, data);
	        }
	        var callbacks = this.callbacks.get(eventName);
	        if (callbacks && callbacks.length > 0) {
	            for (i = 0; i < callbacks.length; i++) {
	                callbacks[i].fn.call(callbacks[i].context || (window), data);
	            }
	        }
	        else if (this.failThrough) {
	            this.failThrough(eventName, data);
	        }
	        return this;
	    };
	    return Dispatcher;
	}());
	exports.__esModule = true;
	exports["default"] = Dispatcher;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var CallbackRegistry = (function () {
	    function CallbackRegistry() {
	        this._callbacks = {};
	    }
	    CallbackRegistry.prototype.get = function (name) {
	        return this._callbacks[prefix(name)];
	    };
	    CallbackRegistry.prototype.add = function (name, callback, context) {
	        var prefixedEventName = prefix(name);
	        this._callbacks[prefixedEventName] = this._callbacks[prefixedEventName] || [];
	        this._callbacks[prefixedEventName].push({
	            fn: callback,
	            context: context
	        });
	    };
	    CallbackRegistry.prototype.remove = function (name, callback, context) {
	        if (!name && !callback && !context) {
	            this._callbacks = {};
	            return;
	        }
	        var names = name ? [prefix(name)] : Collections.keys(this._callbacks);
	        if (callback || context) {
	            this.removeCallback(names, callback, context);
	        }
	        else {
	            this.removeAllCallbacks(names);
	        }
	    };
	    CallbackRegistry.prototype.removeCallback = function (names, callback, context) {
	        Collections.apply(names, function (name) {
	            this._callbacks[name] = Collections.filter(this._callbacks[name] || [], function (binding) {
	                return (callback && callback !== binding.fn) ||
	                    (context && context !== binding.context);
	            });
	            if (this._callbacks[name].length === 0) {
	                delete this._callbacks[name];
	            }
	        }, this);
	    };
	    CallbackRegistry.prototype.removeAllCallbacks = function (names) {
	        Collections.apply(names, function (name) {
	            delete this._callbacks[name];
	        }, this);
	    };
	    return CallbackRegistry;
	}());
	exports.__esModule = true;
	exports["default"] = CallbackRegistry;
	function prefix(name) {
	    return "_" + name;
	}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(24);
	var NetInfo = (function (_super) {
	    __extends(NetInfo, _super);
	    function NetInfo() {
	        _super.call(this);
	        var self = this;
	        if (window.addEventListener !== undefined) {
	            window.addEventListener("online", function () {
	                self.emit('online');
	            }, false);
	            window.addEventListener("offline", function () {
	                self.emit('offline');
	            }, false);
	        }
	    }
	    NetInfo.prototype.isOnline = function () {
	        if (window.navigator.onLine === undefined) {
	            return true;
	        }
	        else {
	            return window.navigator.onLine;
	        }
	    };
	    return NetInfo;
	}(dispatcher_1["default"]));
	exports.NetInfo = NetInfo;
	exports.Network = new NetInfo();


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	"use strict";
	var getDefaultStrategy = function (config) {
	    var wsStrategy;
	    if (config.useTLS) {
	        wsStrategy = [
	            ":best_connected_ever",
	            ":ws_loop",
	            [":delayed", 2000, [":http_fallback_loop"]]
	        ];
	    }
	    else {
	        wsStrategy = [
	            ":best_connected_ever",
	            ":ws_loop",
	            [":delayed", 2000, [":wss_loop"]],
	            [":delayed", 5000, [":http_fallback_loop"]]
	        ];
	    }
	    return [
	        [":def", "ws_options", {
	                hostNonTLS: config.wsHost + ":" + config.wsPort,
	                hostTLS: config.wsHost + ":" + config.wssPort,
	                httpPath: config.wsPath
	            }],
	        [":def", "wss_options", [":extend", ":ws_options", {
	                    useTLS: true
	                }]],
	        [":def", "sockjs_options", {
	                hostNonTLS: config.httpHost + ":" + config.httpPort,
	                hostTLS: config.httpHost + ":" + config.httpsPort,
	                httpPath: config.httpPath
	            }],
	        [":def", "timeouts", {
	                loop: true,
	                timeout: 15000,
	                timeoutLimit: 60000
	            }],
	        [":def", "ws_manager", [":transport_manager", {
	                    lives: 2,
	                    minPingDelay: 10000,
	                    maxPingDelay: config.activity_timeout
	                }]],
	        [":def", "streaming_manager", [":transport_manager", {
	                    lives: 2,
	                    minPingDelay: 10000,
	                    maxPingDelay: config.activity_timeout
	                }]],
	        [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
	        [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
	        [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
	        [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
	        [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
	        [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
	        [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
	        [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
	        [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
	        [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
	        [":def", "streaming_loop", [":sequential", ":timeouts",
	                [":if", [":is_supported", ":xhr_streaming"],
	                    ":xhr_streaming",
	                    ":xdr_streaming"
	                ]
	            ]],
	        [":def", "polling_loop", [":sequential", ":timeouts",
	                [":if", [":is_supported", ":xhr_polling"],
	                    ":xhr_polling",
	                    ":xdr_polling"
	                ]
	            ]],
	        [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"], [
	                    ":best_connected_ever",
	                    ":streaming_loop",
	                    [":delayed", 4000, [":polling_loop"]]
	                ], [
	                    ":polling_loop"
	                ]]],
	        [":def", "http_fallback_loop",
	            [":if", [":is_supported", ":http_loop"], [
	                    ":http_loop"
	                ], [
	                    ":sockjs_loop"
	                ]]
	        ],
	        [":def", "strategy",
	            [":cached", 1800000,
	                [":first_connected",
	                    [":if", [":is_supported", ":ws"],
	                        wsStrategy,
	                        ":http_fallback_loop"
	                    ]
	                ]
	            ]
	        ]
	    ];
	};
	exports.__esModule = true;
	exports["default"] = getDefaultStrategy;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var dependencies_1 = __webpack_require__(3);
	function default_1() {
	    var self = this;
	    self.timeline.info(self.buildTimelineMessage({
	        transport: self.name + (self.options.useTLS ? "s" : "")
	    }));
	    if (self.hooks.isInitialized()) {
	        self.changeState("initialized");
	    }
	    else if (self.hooks.file) {
	        self.changeState("initializing");
	        dependencies_1.Dependencies.load(self.hooks.file, { useTLS: self.options.useTLS }, function (error, callback) {
	            if (self.hooks.isInitialized()) {
	                self.changeState("initialized");
	                callback(true);
	            }
	            else {
	                if (error) {
	                    self.onError(error);
	                }
	                self.onClose();
	                callback(false);
	            }
	        });
	    }
	    else {
	        self.onClose();
	    }
	}
	exports.__esModule = true;
	exports["default"] = default_1;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var http_xdomain_request_1 = __webpack_require__(30);
	var http_1 = __webpack_require__(32);
	http_1["default"].createXDR = function (method, url) {
	    return this.createRequest(http_xdomain_request_1["default"], method, url);
	};
	exports.__esModule = true;
	exports["default"] = http_1["default"];


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Errors = __webpack_require__(31);
	var hooks = {
	    getRequest: function (socket) {
	        var xdr = new window.XDomainRequest();
	        xdr.ontimeout = function () {
	            socket.emit("error", new Errors.RequestTimedOut());
	            socket.close();
	        };
	        xdr.onerror = function (e) {
	            socket.emit("error", e);
	            socket.close();
	        };
	        xdr.onprogress = function () {
	            if (xdr.responseText && xdr.responseText.length > 0) {
	                socket.onChunk(200, xdr.responseText);
	            }
	        };
	        xdr.onload = function () {
	            if (xdr.responseText && xdr.responseText.length > 0) {
	                socket.onChunk(200, xdr.responseText);
	            }
	            socket.emit("finished", 200);
	            socket.close();
	        };
	        return xdr;
	    },
	    abortRequest: function (xdr) {
	        xdr.ontimeout = xdr.onerror = xdr.onprogress = xdr.onload = null;
	        xdr.abort();
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BadEventName = (function (_super) {
	    __extends(BadEventName, _super);
	    function BadEventName() {
	        _super.apply(this, arguments);
	    }
	    return BadEventName;
	}(Error));
	exports.BadEventName = BadEventName;
	var RequestTimedOut = (function (_super) {
	    __extends(RequestTimedOut, _super);
	    function RequestTimedOut() {
	        _super.apply(this, arguments);
	    }
	    return RequestTimedOut;
	}(Error));
	exports.RequestTimedOut = RequestTimedOut;
	var TransportPriorityTooLow = (function (_super) {
	    __extends(TransportPriorityTooLow, _super);
	    function TransportPriorityTooLow() {
	        _super.apply(this, arguments);
	    }
	    return TransportPriorityTooLow;
	}(Error));
	exports.TransportPriorityTooLow = TransportPriorityTooLow;
	var TransportClosed = (function (_super) {
	    __extends(TransportClosed, _super);
	    function TransportClosed() {
	        _super.apply(this, arguments);
	    }
	    return TransportClosed;
	}(Error));
	exports.TransportClosed = TransportClosed;
	var UnsupportedFeature = (function (_super) {
	    __extends(UnsupportedFeature, _super);
	    function UnsupportedFeature() {
	        _super.apply(this, arguments);
	    }
	    return UnsupportedFeature;
	}(Error));
	exports.UnsupportedFeature = UnsupportedFeature;
	var UnsupportedTransport = (function (_super) {
	    __extends(UnsupportedTransport, _super);
	    function UnsupportedTransport() {
	        _super.apply(this, arguments);
	    }
	    return UnsupportedTransport;
	}(Error));
	exports.UnsupportedTransport = UnsupportedTransport;
	var UnsupportedStrategy = (function (_super) {
	    __extends(UnsupportedStrategy, _super);
	    function UnsupportedStrategy() {
	        _super.apply(this, arguments);
	    }
	    return UnsupportedStrategy;
	}(Error));
	exports.UnsupportedStrategy = UnsupportedStrategy;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var http_request_1 = __webpack_require__(33);
	var http_socket_1 = __webpack_require__(34);
	var http_streaming_socket_1 = __webpack_require__(36);
	var http_polling_socket_1 = __webpack_require__(37);
	var http_xhr_request_1 = __webpack_require__(38);
	var HTTP = {
	    createStreamingSocket: function (url) {
	        return this.createSocket(http_streaming_socket_1["default"], url);
	    },
	    createPollingSocket: function (url) {
	        return this.createSocket(http_polling_socket_1["default"], url);
	    },
	    createSocket: function (hooks, url) {
	        return new http_socket_1["default"](hooks, url);
	    },
	    createXHR: function (method, url) {
	        return this.createRequest(http_xhr_request_1["default"], method, url);
	    },
	    createRequest: function (hooks, method, url) {
	        return new http_request_1["default"](hooks, method, url);
	    }
	};
	exports.__esModule = true;
	exports["default"] = HTTP;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var runtime_1 = __webpack_require__(2);
	var dispatcher_1 = __webpack_require__(24);
	var MAX_BUFFER_LENGTH = 256 * 1024;
	var HTTPRequest = (function (_super) {
	    __extends(HTTPRequest, _super);
	    function HTTPRequest(hooks, method, url) {
	        _super.call(this);
	        this.hooks = hooks;
	        this.method = method;
	        this.url = url;
	    }
	    HTTPRequest.prototype.start = function (payload) {
	        var _this = this;
	        this.position = 0;
	        this.xhr = this.hooks.getRequest(this);
	        this.unloader = function () {
	            _this.close();
	        };
	        runtime_1["default"].addUnloadListener(this.unloader);
	        this.xhr.open(this.method, this.url, true);
	        if (this.xhr.setRequestHeader) {
	            this.xhr.setRequestHeader("Content-Type", "application/json");
	        }
	        this.xhr.send(payload);
	    };
	    HTTPRequest.prototype.close = function () {
	        if (this.unloader) {
	            runtime_1["default"].removeUnloadListener(this.unloader);
	            this.unloader = null;
	        }
	        if (this.xhr) {
	            this.hooks.abortRequest(this.xhr);
	            this.xhr = null;
	        }
	    };
	    HTTPRequest.prototype.onChunk = function (status, data) {
	        while (true) {
	            var chunk = this.advanceBuffer(data);
	            if (chunk) {
	                this.emit("chunk", { status: status, data: chunk });
	            }
	            else {
	                break;
	            }
	        }
	        if (this.isBufferTooLong(data)) {
	            this.emit("buffer_too_long");
	        }
	    };
	    HTTPRequest.prototype.advanceBuffer = function (buffer) {
	        var unreadData = buffer.slice(this.position);
	        var endOfLinePosition = unreadData.indexOf("\n");
	        if (endOfLinePosition !== -1) {
	            this.position += endOfLinePosition + 1;
	            return unreadData.slice(0, endOfLinePosition);
	        }
	        else {
	            return null;
	        }
	    };
	    HTTPRequest.prototype.isBufferTooLong = function (buffer) {
	        return this.position === buffer.length && buffer.length > MAX_BUFFER_LENGTH;
	    };
	    return HTTPRequest;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = HTTPRequest;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var state_1 = __webpack_require__(35);
	var util_1 = __webpack_require__(11);
	var runtime_1 = __webpack_require__(2);
	var autoIncrement = 1;
	var HTTPSocket = (function () {
	    function HTTPSocket(hooks, url) {
	        this.hooks = hooks;
	        this.session = randomNumber(1000) + "/" + randomString(8);
	        this.location = getLocation(url);
	        this.readyState = state_1["default"].CONNECTING;
	        this.openStream();
	    }
	    HTTPSocket.prototype.send = function (payload) {
	        return this.sendRaw(JSON.stringify([payload]));
	    };
	    HTTPSocket.prototype.ping = function () {
	        this.hooks.sendHeartbeat(this);
	    };
	    HTTPSocket.prototype.close = function (code, reason) {
	        this.onClose(code, reason, true);
	    };
	    HTTPSocket.prototype.sendRaw = function (payload) {
	        if (this.readyState === state_1["default"].OPEN) {
	            try {
	                runtime_1["default"].createSocketRequest("POST", getUniqueURL(getSendURL(this.location, this.session))).start(payload);
	                return true;
	            }
	            catch (e) {
	                return false;
	            }
	        }
	        else {
	            return false;
	        }
	    };
	    HTTPSocket.prototype.reconnect = function () {
	        this.closeStream();
	        this.openStream();
	    };
	    ;
	    HTTPSocket.prototype.onClose = function (code, reason, wasClean) {
	        this.closeStream();
	        this.readyState = state_1["default"].CLOSED;
	        if (this.onclose) {
	            this.onclose({
	                code: code,
	                reason: reason,
	                wasClean: wasClean
	            });
	        }
	    };
	    HTTPSocket.prototype.onChunk = function (chunk) {
	        if (chunk.status !== 200) {
	            return;
	        }
	        if (this.readyState === state_1["default"].OPEN) {
	            this.onActivity();
	        }
	        var payload;
	        var type = chunk.data.slice(0, 1);
	        switch (type) {
	            case 'o':
	                payload = JSON.parse(chunk.data.slice(1) || '{}');
	                this.onOpen(payload);
	                break;
	            case 'a':
	                payload = JSON.parse(chunk.data.slice(1) || '[]');
	                for (var i = 0; i < payload.length; i++) {
	                    this.onEvent(payload[i]);
	                }
	                break;
	            case 'm':
	                payload = JSON.parse(chunk.data.slice(1) || 'null');
	                this.onEvent(payload);
	                break;
	            case 'h':
	                this.hooks.onHeartbeat(this);
	                break;
	            case 'c':
	                payload = JSON.parse(chunk.data.slice(1) || '[]');
	                this.onClose(payload[0], payload[1], true);
	                break;
	        }
	    };
	    HTTPSocket.prototype.onOpen = function (options) {
	        if (this.readyState === state_1["default"].CONNECTING) {
	            if (options && options.hostname) {
	                this.location.base = replaceHost(this.location.base, options.hostname);
	            }
	            this.readyState = state_1["default"].OPEN;
	            if (this.onopen) {
	                this.onopen();
	            }
	        }
	        else {
	            this.onClose(1006, "Server lost session", true);
	        }
	    };
	    HTTPSocket.prototype.onEvent = function (event) {
	        if (this.readyState === state_1["default"].OPEN && this.onmessage) {
	            this.onmessage({ data: event });
	        }
	    };
	    HTTPSocket.prototype.onActivity = function () {
	        if (this.onactivity) {
	            this.onactivity();
	        }
	    };
	    HTTPSocket.prototype.onError = function (error) {
	        if (this.onerror) {
	            this.onerror(error);
	        }
	    };
	    HTTPSocket.prototype.openStream = function () {
	        var _this = this;
	        this.stream = runtime_1["default"].createSocketRequest("POST", getUniqueURL(this.hooks.getReceiveURL(this.location, this.session)));
	        this.stream.bind("chunk", function (chunk) {
	            _this.onChunk(chunk);
	        });
	        this.stream.bind("finished", function (status) {
	            _this.hooks.onFinished(_this, status);
	        });
	        this.stream.bind("buffer_too_long", function () {
	            _this.reconnect();
	        });
	        try {
	            this.stream.start();
	        }
	        catch (error) {
	            util_1["default"].defer(function () {
	                _this.onError(error);
	                _this.onClose(1006, "Could not start streaming", false);
	            });
	        }
	    };
	    HTTPSocket.prototype.closeStream = function () {
	        if (this.stream) {
	            this.stream.unbind_all();
	            this.stream.close();
	            this.stream = null;
	        }
	    };
	    return HTTPSocket;
	}());
	function getLocation(url) {
	    var parts = /([^\?]*)\/*(\??.*)/.exec(url);
	    return {
	        base: parts[1],
	        queryString: parts[2]
	    };
	}
	function getSendURL(url, session) {
	    return url.base + "/" + session + "/xhr_send";
	}
	function getUniqueURL(url) {
	    var separator = (url.indexOf('?') === -1) ? "?" : "&";
	    return url + separator + "t=" + (+new Date()) + "&n=" + autoIncrement++;
	}
	function replaceHost(url, hostname) {
	    var urlParts = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(url);
	    return urlParts[1] + hostname + urlParts[3];
	}
	function randomNumber(max) {
	    return Math.floor(Math.random() * max);
	}
	function randomString(length) {
	    var result = [];
	    for (var i = 0; i < length; i++) {
	        result.push(randomNumber(32).toString(32));
	    }
	    return result.join('');
	}
	exports.__esModule = true;
	exports["default"] = HTTPSocket;


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	var State;
	(function (State) {
	    State[State["CONNECTING"] = 0] = "CONNECTING";
	    State[State["OPEN"] = 1] = "OPEN";
	    State[State["CLOSED"] = 3] = "CLOSED";
	})(State || (State = {}));
	exports.__esModule = true;
	exports["default"] = State;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	var hooks = {
	    getReceiveURL: function (url, session) {
	        return url.base + "/" + session + "/xhr_streaming" + url.queryString;
	    },
	    onHeartbeat: function (socket) {
	        socket.sendRaw("[]");
	    },
	    sendHeartbeat: function (socket) {
	        socket.sendRaw("[]");
	    },
	    onFinished: function (socket, status) {
	        socket.onClose(1006, "Connection interrupted (" + status + ")", false);
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

	"use strict";
	var hooks = {
	    getReceiveURL: function (url, session) {
	        return url.base + "/" + session + "/xhr" + url.queryString;
	    },
	    onHeartbeat: function () {
	    },
	    sendHeartbeat: function (socket) {
	        socket.sendRaw("[]");
	    },
	    onFinished: function (socket, status) {
	        if (status === 200) {
	            socket.reconnect();
	        }
	        else {
	            socket.onClose(1006, "Connection interrupted (" + status + ")", false);
	        }
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var hooks = {
	    getRequest: function (socket) {
	        var Constructor = runtime_1["default"].getXHRAPI();
	        var xhr = new Constructor();
	        xhr.onreadystatechange = xhr.onprogress = function () {
	            switch (xhr.readyState) {
	                case 3:
	                    if (xhr.responseText && xhr.responseText.length > 0) {
	                        socket.onChunk(xhr.status, xhr.responseText);
	                    }
	                    break;
	                case 4:
	                    if (xhr.responseText && xhr.responseText.length > 0) {
	                        socket.onChunk(xhr.status, xhr.responseText);
	                    }
	                    socket.emit("finished", xhr.status);
	                    socket.close();
	                    break;
	            }
	        };
	        return xhr;
	    },
	    abortRequest: function (xhr) {
	        xhr.onreadystatechange = null;
	        xhr.abort();
	    }
	};
	exports.__esModule = true;
	exports["default"] = hooks;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var level_1 = __webpack_require__(40);
	var Timeline = (function () {
	    function Timeline(key, session, options) {
	        this.key = key;
	        this.session = session;
	        this.events = [];
	        this.options = options || {};
	        this.sent = 0;
	        this.uniqueID = 0;
	    }
	    Timeline.prototype.log = function (level, event) {
	        if (level <= this.options.level) {
	            this.events.push(Collections.extend({}, event, { timestamp: util_1["default"].now() }));
	            if (this.options.limit && this.events.length > this.options.limit) {
	                this.events.shift();
	            }
	        }
	    };
	    Timeline.prototype.error = function (event) {
	        this.log(level_1["default"].ERROR, event);
	    };
	    Timeline.prototype.info = function (event) {
	        this.log(level_1["default"].INFO, event);
	    };
	    Timeline.prototype.debug = function (event) {
	        this.log(level_1["default"].DEBUG, event);
	    };
	    Timeline.prototype.isEmpty = function () {
	        return this.events.length === 0;
	    };
	    Timeline.prototype.send = function (sendfn, callback) {
	        var _this = this;
	        var data = Collections.extend({
	            session: this.session,
	            bundle: this.sent + 1,
	            key: this.key,
	            lib: "js",
	            version: this.options.version,
	            cluster: this.options.cluster,
	            features: this.options.features,
	            timeline: this.events
	        }, this.options.params);
	        this.events = [];
	        sendfn(data, function (error, result) {
	            if (!error) {
	                _this.sent++;
	            }
	            if (callback) {
	                callback(error, result);
	            }
	        });
	        return true;
	    };
	    Timeline.prototype.generateUniqueID = function () {
	        this.uniqueID++;
	        return this.uniqueID;
	    };
	    return Timeline;
	}());
	exports.__esModule = true;
	exports["default"] = Timeline;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

	"use strict";
	var TimelineLevel;
	(function (TimelineLevel) {
	    TimelineLevel[TimelineLevel["ERROR"] = 3] = "ERROR";
	    TimelineLevel[TimelineLevel["INFO"] = 6] = "INFO";
	    TimelineLevel[TimelineLevel["DEBUG"] = 7] = "DEBUG";
	})(TimelineLevel || (TimelineLevel = {}));
	exports.__esModule = true;
	exports["default"] = TimelineLevel;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var transport_manager_1 = __webpack_require__(42);
	var Errors = __webpack_require__(31);
	var transport_strategy_1 = __webpack_require__(64);
	var sequential_strategy_1 = __webpack_require__(65);
	var best_connected_ever_strategy_1 = __webpack_require__(66);
	var cached_strategy_1 = __webpack_require__(67);
	var delayed_strategy_1 = __webpack_require__(68);
	var if_strategy_1 = __webpack_require__(69);
	var first_connected_strategy_1 = __webpack_require__(70);
	var runtime_1 = __webpack_require__(2);
	var Transports = runtime_1["default"].Transports;
	exports.build = function (scheme, options) {
	    var context = Collections.extend({}, globalContext, options);
	    return evaluate(scheme, context)[1].strategy;
	};
	var UnsupportedStrategy = {
	    isSupported: function () {
	        return false;
	    },
	    connect: function (_, callback) {
	        var deferred = util_1["default"].defer(function () {
	            callback(new Errors.UnsupportedStrategy());
	        });
	        return {
	            abort: function () {
	                deferred.ensureAborted();
	            },
	            forceMinPriority: function () { }
	        };
	    }
	};
	function returnWithOriginalContext(f) {
	    return function (context) {
	        return [f.apply(this, arguments), context];
	    };
	}
	var globalContext = {
	    extend: function (context, first, second) {
	        return [Collections.extend({}, first, second), context];
	    },
	    def: function (context, name, value) {
	        if (context[name] !== undefined) {
	            throw "Redefining symbol " + name;
	        }
	        context[name] = value;
	        return [undefined, context];
	    },
	    def_transport: function (context, name, type, priority, options, manager) {
	        var transportClass = Transports[type];
	        if (!transportClass) {
	            throw new Errors.UnsupportedTransport(type);
	        }
	        var enabled = (!context.enabledTransports ||
	            Collections.arrayIndexOf(context.enabledTransports, name) !== -1) &&
	            (!context.disabledTransports ||
	                Collections.arrayIndexOf(context.disabledTransports, name) === -1);
	        var transport;
	        if (enabled) {
	            transport = new transport_strategy_1["default"](name, priority, manager ? manager.getAssistant(transportClass) : transportClass, Collections.extend({
	                key: context.key,
	                useTLS: context.useTLS,
	                timeline: context.timeline,
	                ignoreNullOrigin: context.ignoreNullOrigin
	            }, options));
	        }
	        else {
	            transport = UnsupportedStrategy;
	        }
	        var newContext = context.def(context, name, transport)[1];
	        newContext.Transports = context.Transports || {};
	        newContext.Transports[name] = transport;
	        return [undefined, newContext];
	    },
	    transport_manager: returnWithOriginalContext(function (_, options) {
	        return new transport_manager_1["default"](options);
	    }),
	    sequential: returnWithOriginalContext(function (_, options) {
	        var strategies = Array.prototype.slice.call(arguments, 2);
	        return new sequential_strategy_1["default"](strategies, options);
	    }),
	    cached: returnWithOriginalContext(function (context, ttl, strategy) {
	        return new cached_strategy_1["default"](strategy, context.Transports, {
	            ttl: ttl,
	            timeline: context.timeline,
	            useTLS: context.useTLS
	        });
	    }),
	    first_connected: returnWithOriginalContext(function (_, strategy) {
	        return new first_connected_strategy_1["default"](strategy);
	    }),
	    best_connected_ever: returnWithOriginalContext(function () {
	        var strategies = Array.prototype.slice.call(arguments, 1);
	        return new best_connected_ever_strategy_1["default"](strategies);
	    }),
	    delayed: returnWithOriginalContext(function (_, delay, strategy) {
	        return new delayed_strategy_1["default"](strategy, { delay: delay });
	    }),
	    "if": returnWithOriginalContext(function (_, test, trueBranch, falseBranch) {
	        return new if_strategy_1["default"](test, trueBranch, falseBranch);
	    }),
	    is_supported: returnWithOriginalContext(function (_, strategy) {
	        return function () {
	            return strategy.isSupported();
	        };
	    })
	};
	function isSymbol(expression) {
	    return (typeof expression === "string") && expression.charAt(0) === ":";
	}
	function getSymbolValue(expression, context) {
	    return context[expression.slice(1)];
	}
	function evaluateListOfExpressions(expressions, context) {
	    if (expressions.length === 0) {
	        return [[], context];
	    }
	    var head = evaluate(expressions[0], context);
	    var tail = evaluateListOfExpressions(expressions.slice(1), head[1]);
	    return [[head[0]].concat(tail[0]), tail[1]];
	}
	function evaluateString(expression, context) {
	    if (!isSymbol(expression)) {
	        return [expression, context];
	    }
	    var value = getSymbolValue(expression, context);
	    if (value === undefined) {
	        throw "Undefined symbol " + expression;
	    }
	    return [value, context];
	}
	function evaluateArray(expression, context) {
	    if (isSymbol(expression[0])) {
	        var f = getSymbolValue(expression[0], context);
	        if (expression.length > 1) {
	            if (typeof f !== "function") {
	                throw "Calling non-function " + expression[0];
	            }
	            var args = [Collections.extend({}, context)].concat(Collections.map(expression.slice(1), function (arg) {
	                return evaluate(arg, Collections.extend({}, context))[0];
	            }));
	            return f.apply(this, args);
	        }
	        else {
	            return [f, context];
	        }
	    }
	    else {
	        return evaluateListOfExpressions(expression, context);
	    }
	}
	function evaluate(expression, context) {
	    if (typeof expression === "string") {
	        return evaluateString(expression, context);
	    }
	    else if (typeof expression === "object") {
	        if (expression instanceof Array && expression.length > 0) {
	            return evaluateArray(expression, context);
	        }
	    }
	    return [expression, context];
	}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var factory_1 = __webpack_require__(43);
	var TransportManager = (function () {
	    function TransportManager(options) {
	        this.options = options || {};
	        this.livesLeft = this.options.lives || Infinity;
	    }
	    TransportManager.prototype.getAssistant = function (transport) {
	        return factory_1["default"].createAssistantToTheTransportManager(this, transport, {
	            minPingDelay: this.options.minPingDelay,
	            maxPingDelay: this.options.maxPingDelay
	        });
	    };
	    TransportManager.prototype.isAlive = function () {
	        return this.livesLeft > 0;
	    };
	    TransportManager.prototype.reportDeath = function () {
	        this.livesLeft -= 1;
	    };
	    return TransportManager;
	}());
	exports.__esModule = true;
	exports["default"] = TransportManager;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var assistant_to_the_transport_manager_1 = __webpack_require__(44);
	var handshake_1 = __webpack_require__(45);
	var pusher_authorizer_1 = __webpack_require__(48);
	var timeline_sender_1 = __webpack_require__(49);
	var presence_channel_1 = __webpack_require__(50);
	var private_channel_1 = __webpack_require__(51);
	var encrypted_channel_1 = __webpack_require__(54);
	var channel_1 = __webpack_require__(52);
	var connection_manager_1 = __webpack_require__(62);
	var channels_1 = __webpack_require__(63);
	var Factory = {
	    createChannels: function () {
	        return new channels_1["default"]();
	    },
	    createConnectionManager: function (key, options) {
	        return new connection_manager_1["default"](key, options);
	    },
	    createChannel: function (name, pusher) {
	        return new channel_1["default"](name, pusher);
	    },
	    createPrivateChannel: function (name, pusher) {
	        return new private_channel_1["default"](name, pusher);
	    },
	    createPresenceChannel: function (name, pusher) {
	        return new presence_channel_1["default"](name, pusher);
	    },
	    createEncryptedChannel: function (name, pusher) {
	        return new encrypted_channel_1["default"](name, pusher);
	    },
	    createTimelineSender: function (timeline, options) {
	        return new timeline_sender_1["default"](timeline, options);
	    },
	    createAuthorizer: function (channel, options) {
	        if (options.authorizer) {
	            return options.authorizer(channel, options);
	        }
	        return new pusher_authorizer_1["default"](channel, options);
	    },
	    createHandshake: function (transport, callback) {
	        return new handshake_1["default"](transport, callback);
	    },
	    createAssistantToTheTransportManager: function (manager, transport, options) {
	        return new assistant_to_the_transport_manager_1["default"](manager, transport, options);
	    }
	};
	exports.__esModule = true;
	exports["default"] = Factory;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(11);
	var Collections = __webpack_require__(9);
	var AssistantToTheTransportManager = (function () {
	    function AssistantToTheTransportManager(manager, transport, options) {
	        this.manager = manager;
	        this.transport = transport;
	        this.minPingDelay = options.minPingDelay;
	        this.maxPingDelay = options.maxPingDelay;
	        this.pingDelay = undefined;
	    }
	    AssistantToTheTransportManager.prototype.createConnection = function (name, priority, key, options) {
	        var _this = this;
	        options = Collections.extend({}, options, {
	            activityTimeout: this.pingDelay
	        });
	        var connection = this.transport.createConnection(name, priority, key, options);
	        var openTimestamp = null;
	        var onOpen = function () {
	            connection.unbind("open", onOpen);
	            connection.bind("closed", onClosed);
	            openTimestamp = util_1["default"].now();
	        };
	        var onClosed = function (closeEvent) {
	            connection.unbind("closed", onClosed);
	            if (closeEvent.code === 1002 || closeEvent.code === 1003) {
	                _this.manager.reportDeath();
	            }
	            else if (!closeEvent.wasClean && openTimestamp) {
	                var lifespan = util_1["default"].now() - openTimestamp;
	                if (lifespan < 2 * _this.maxPingDelay) {
	                    _this.manager.reportDeath();
	                    _this.pingDelay = Math.max(lifespan / 2, _this.minPingDelay);
	                }
	            }
	        };
	        connection.bind("open", onOpen);
	        return connection;
	    };
	    AssistantToTheTransportManager.prototype.isSupported = function (environment) {
	        return this.manager.isAlive() && this.transport.isSupported(environment);
	    };
	    return AssistantToTheTransportManager;
	}());
	exports.__esModule = true;
	exports["default"] = AssistantToTheTransportManager;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var Protocol = __webpack_require__(46);
	var connection_1 = __webpack_require__(47);
	var Handshake = (function () {
	    function Handshake(transport, callback) {
	        this.transport = transport;
	        this.callback = callback;
	        this.bindListeners();
	    }
	    Handshake.prototype.close = function () {
	        this.unbindListeners();
	        this.transport.close();
	    };
	    Handshake.prototype.bindListeners = function () {
	        var _this = this;
	        this.onMessage = function (m) {
	            _this.unbindListeners();
	            var result;
	            try {
	                result = Protocol.processHandshake(m);
	            }
	            catch (e) {
	                _this.finish("error", { error: e });
	                _this.transport.close();
	                return;
	            }
	            if (result.action === "connected") {
	                _this.finish("connected", {
	                    connection: new connection_1["default"](result.id, _this.transport),
	                    activityTimeout: result.activityTimeout
	                });
	            }
	            else {
	                _this.finish(result.action, { error: result.error });
	                _this.transport.close();
	            }
	        };
	        this.onClosed = function (closeEvent) {
	            _this.unbindListeners();
	            var action = Protocol.getCloseAction(closeEvent) || "backoff";
	            var error = Protocol.getCloseError(closeEvent);
	            _this.finish(action, { error: error });
	        };
	        this.transport.bind("message", this.onMessage);
	        this.transport.bind("closed", this.onClosed);
	    };
	    Handshake.prototype.unbindListeners = function () {
	        this.transport.unbind("message", this.onMessage);
	        this.transport.unbind("closed", this.onClosed);
	    };
	    Handshake.prototype.finish = function (action, params) {
	        this.callback(Collections.extend({ transport: this.transport, action: action }, params));
	    };
	    return Handshake;
	}());
	exports.__esModule = true;
	exports["default"] = Handshake;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	exports.decodeMessage = function (message) {
	    try {
	        var params = JSON.parse(message.data);
	        if (typeof params.data === 'string') {
	            try {
	                params.data = JSON.parse(params.data);
	            }
	            catch (e) {
	                if (!(e instanceof SyntaxError)) {
	                    throw e;
	                }
	            }
	        }
	        return params;
	    }
	    catch (e) {
	        throw { type: 'MessageParseError', error: e, data: message.data };
	    }
	};
	exports.encodeMessage = function (message) {
	    return JSON.stringify(message);
	};
	exports.processHandshake = function (message) {
	    message = exports.decodeMessage(message);
	    if (message.event === "pusher:connection_established") {
	        if (!message.data.activity_timeout) {
	            throw "No activity timeout specified in handshake";
	        }
	        return {
	            action: "connected",
	            id: message.data.socket_id,
	            activityTimeout: message.data.activity_timeout * 1000
	        };
	    }
	    else if (message.event === "pusher:error") {
	        return {
	            action: this.getCloseAction(message.data),
	            error: this.getCloseError(message.data)
	        };
	    }
	    else {
	        throw "Invalid handshake";
	    }
	};
	exports.getCloseAction = function (closeEvent) {
	    if (closeEvent.code < 4000) {
	        if (closeEvent.code >= 1002 && closeEvent.code <= 1004) {
	            return "backoff";
	        }
	        else {
	            return null;
	        }
	    }
	    else if (closeEvent.code === 4000) {
	        return "tls_only";
	    }
	    else if (closeEvent.code < 4100) {
	        return "refused";
	    }
	    else if (closeEvent.code < 4200) {
	        return "backoff";
	    }
	    else if (closeEvent.code < 4300) {
	        return "retry";
	    }
	    else {
	        return "refused";
	    }
	};
	exports.getCloseError = function (closeEvent) {
	    if (closeEvent.code !== 1000 && closeEvent.code !== 1001) {
	        return {
	            type: 'PusherError',
	            data: {
	                code: closeEvent.code,
	                message: closeEvent.reason || closeEvent.message
	            }
	        };
	    }
	    else {
	        return null;
	    }
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Collections = __webpack_require__(9);
	var dispatcher_1 = __webpack_require__(24);
	var Protocol = __webpack_require__(46);
	var logger_1 = __webpack_require__(8);
	var Connection = (function (_super) {
	    __extends(Connection, _super);
	    function Connection(id, transport) {
	        _super.call(this);
	        this.id = id;
	        this.transport = transport;
	        this.activityTimeout = transport.activityTimeout;
	        this.bindListeners();
	    }
	    Connection.prototype.handlesActivityChecks = function () {
	        return this.transport.handlesActivityChecks();
	    };
	    Connection.prototype.send = function (data) {
	        return this.transport.send(data);
	    };
	    Connection.prototype.send_event = function (name, data, channel) {
	        var message = { event: name, data: data };
	        if (channel) {
	            message.channel = channel;
	        }
	        logger_1["default"].debug('Event sent', message);
	        return this.send(Protocol.encodeMessage(message));
	    };
	    Connection.prototype.ping = function () {
	        if (this.transport.supportsPing()) {
	            this.transport.ping();
	        }
	        else {
	            this.send_event('pusher:ping', {});
	        }
	    };
	    Connection.prototype.close = function () {
	        this.transport.close();
	    };
	    Connection.prototype.bindListeners = function () {
	        var _this = this;
	        var listeners = {
	            message: function (m) {
	                var message;
	                try {
	                    message = Protocol.decodeMessage(m);
	                }
	                catch (e) {
	                    _this.emit('error', {
	                        type: 'MessageParseError',
	                        error: e,
	                        data: m.data
	                    });
	                }
	                if (message !== undefined) {
	                    logger_1["default"].debug('Event recd', message);
	                    switch (message.event) {
	                        case 'pusher:error':
	                            _this.emit('error', { type: 'PusherError', data: message.data });
	                            break;
	                        case 'pusher:ping':
	                            _this.emit("ping");
	                            break;
	                        case 'pusher:pong':
	                            _this.emit("pong");
	                            break;
	                    }
	                    _this.emit('message', message);
	                }
	            },
	            activity: function () {
	                _this.emit("activity");
	            },
	            error: function (error) {
	                _this.emit("error", { type: "WebSocketError", error: error });
	            },
	            closed: function (closeEvent) {
	                unbindListeners();
	                if (closeEvent && closeEvent.code) {
	                    _this.handleCloseEvent(closeEvent);
	                }
	                _this.transport = null;
	                _this.emit("closed");
	            }
	        };
	        var unbindListeners = function () {
	            Collections.objectApply(listeners, function (listener, event) {
	                _this.transport.unbind(event, listener);
	            });
	        };
	        Collections.objectApply(listeners, function (listener, event) {
	            _this.transport.bind(event, listener);
	        });
	    };
	    Connection.prototype.handleCloseEvent = function (closeEvent) {
	        var action = Protocol.getCloseAction(closeEvent);
	        var error = Protocol.getCloseError(closeEvent);
	        if (error) {
	            this.emit('error', error);
	        }
	        if (action) {
	            this.emit(action, { action: action, error: error });
	        }
	    };
	    return Connection;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = Connection;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var PusherAuthorizer = (function () {
	    function PusherAuthorizer(channel, options) {
	        this.channel = channel;
	        var authTransport = options.authTransport;
	        if (typeof runtime_1["default"].getAuthorizers()[authTransport] === "undefined") {
	            throw "'" + authTransport + "' is not a recognized auth transport";
	        }
	        this.type = authTransport;
	        this.options = options;
	        this.authOptions = (options || {}).auth || {};
	    }
	    PusherAuthorizer.prototype.composeQuery = function (socketId) {
	        var query = 'socket_id=' + encodeURIComponent(socketId) +
	            '&channel_name=' + encodeURIComponent(this.channel.name);
	        for (var i in this.authOptions.params) {
	            query += "&" + encodeURIComponent(i) + "=" + encodeURIComponent(this.authOptions.params[i]);
	        }
	        return query;
	    };
	    PusherAuthorizer.prototype.authorize = function (socketId, callback) {
	        PusherAuthorizer.authorizers = PusherAuthorizer.authorizers || runtime_1["default"].getAuthorizers();
	        return PusherAuthorizer.authorizers[this.type].call(this, runtime_1["default"], socketId, callback);
	    };
	    return PusherAuthorizer;
	}());
	exports.__esModule = true;
	exports["default"] = PusherAuthorizer;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var runtime_1 = __webpack_require__(2);
	var TimelineSender = (function () {
	    function TimelineSender(timeline, options) {
	        this.timeline = timeline;
	        this.options = options || {};
	    }
	    TimelineSender.prototype.send = function (useTLS, callback) {
	        if (this.timeline.isEmpty()) {
	            return;
	        }
	        this.timeline.send(runtime_1["default"].TimelineTransport.getAgent(this, useTLS), callback);
	    };
	    return TimelineSender;
	}());
	exports.__esModule = true;
	exports["default"] = TimelineSender;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var private_channel_1 = __webpack_require__(51);
	var logger_1 = __webpack_require__(8);
	var members_1 = __webpack_require__(53);
	var url_store_1 = __webpack_require__(14);
	var PresenceChannel = (function (_super) {
	    __extends(PresenceChannel, _super);
	    function PresenceChannel(name, pusher) {
	        _super.call(this, name, pusher);
	        this.members = new members_1["default"]();
	    }
	    PresenceChannel.prototype.authorize = function (socketId, callback) {
	        var _this = this;
	        _super.prototype.authorize.call(this, socketId, function (error, authData) {
	            if (!error) {
	                if (authData.channel_data === undefined) {
	                    var suffix = url_store_1["default"].buildLogSuffix("authenticationEndpoint");
	                    logger_1["default"].warn(("Invalid auth response for channel '" + _this.name + "',") +
	                        ("expected 'channel_data' field. " + suffix));
	                    callback("Invalid auth response");
	                    return;
	                }
	                var channelData = JSON.parse(authData.channel_data);
	                _this.members.setMyID(channelData.user_id);
	            }
	            callback(error, authData);
	        });
	    };
	    PresenceChannel.prototype.handleEvent = function (event, data) {
	        switch (event) {
	            case "pusher_internal:subscription_succeeded":
	                this.subscriptionPending = false;
	                this.subscribed = true;
	                if (this.subscriptionCancelled) {
	                    this.pusher.unsubscribe(this.name);
	                }
	                else {
	                    this.members.onSubscription(data);
	                    this.emit("pusher:subscription_succeeded", this.members);
	                }
	                break;
	            case "pusher_internal:member_added":
	                var addedMember = this.members.addMember(data);
	                this.emit('pusher:member_added', addedMember);
	                break;
	            case "pusher_internal:member_removed":
	                var removedMember = this.members.removeMember(data);
	                if (removedMember) {
	                    this.emit('pusher:member_removed', removedMember);
	                }
	                break;
	            default:
	                private_channel_1["default"].prototype.handleEvent.call(this, event, data);
	        }
	    };
	    PresenceChannel.prototype.disconnect = function () {
	        this.members.reset();
	        _super.prototype.disconnect.call(this);
	    };
	    return PresenceChannel;
	}(private_channel_1["default"]));
	exports.__esModule = true;
	exports["default"] = PresenceChannel;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var factory_1 = __webpack_require__(43);
	var channel_1 = __webpack_require__(52);
	var PrivateChannel = (function (_super) {
	    __extends(PrivateChannel, _super);
	    function PrivateChannel() {
	        _super.apply(this, arguments);
	    }
	    PrivateChannel.prototype.authorize = function (socketId, callback) {
	        var authorizer = factory_1["default"].createAuthorizer(this, this.pusher.config);
	        return authorizer.authorize(socketId, callback);
	    };
	    return PrivateChannel;
	}(channel_1["default"]));
	exports.__esModule = true;
	exports["default"] = PrivateChannel;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(24);
	var Errors = __webpack_require__(31);
	var logger_1 = __webpack_require__(8);
	var Channel = (function (_super) {
	    __extends(Channel, _super);
	    function Channel(name, pusher) {
	        _super.call(this, function (event, data) {
	            logger_1["default"].debug('No callbacks on ' + name + ' for ' + event);
	        });
	        this.name = name;
	        this.pusher = pusher;
	        this.subscribed = false;
	        this.subscriptionPending = false;
	        this.subscriptionCancelled = false;
	    }
	    Channel.prototype.authorize = function (socketId, callback) {
	        return callback(false, {});
	    };
	    Channel.prototype.trigger = function (event, data) {
	        if (event.indexOf("client-") !== 0) {
	            throw new Errors.BadEventName("Event '" + event + "' does not start with 'client-'");
	        }
	        return this.pusher.send_event(event, data, this.name);
	    };
	    Channel.prototype.disconnect = function () {
	        this.subscribed = false;
	        this.subscriptionPending = false;
	    };
	    Channel.prototype.handleEvent = function (event, data) {
	        if (event.indexOf("pusher_internal:") === 0) {
	            if (event === "pusher_internal:subscription_succeeded") {
	                this.subscriptionPending = false;
	                this.subscribed = true;
	                if (this.subscriptionCancelled) {
	                    this.pusher.unsubscribe(this.name);
	                }
	                else {
	                    this.emit("pusher:subscription_succeeded", data);
	                }
	            }
	        }
	        else {
	            this.emit(event, data);
	        }
	    };
	    Channel.prototype.subscribe = function () {
	        var _this = this;
	        if (this.subscribed) {
	            return;
	        }
	        this.subscriptionPending = true;
	        this.subscriptionCancelled = false;
	        this.authorize(this.pusher.connection.socket_id, function (error, data) {
	            if (error) {
	                _this.handleEvent('pusher:subscription_error', data);
	            }
	            else {
	                _this.pusher.send_event('pusher:subscribe', {
	                    auth: data.auth,
	                    channel_data: data.channel_data,
	                    channel: _this.name
	                });
	            }
	        });
	    };
	    Channel.prototype.unsubscribe = function () {
	        this.subscribed = false;
	        this.pusher.send_event('pusher:unsubscribe', {
	            channel: this.name
	        });
	    };
	    Channel.prototype.cancelSubscription = function () {
	        this.subscriptionCancelled = true;
	    };
	    Channel.prototype.reinstateSubscription = function () {
	        this.subscriptionCancelled = false;
	    };
	    return Channel;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = Channel;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var Members = (function () {
	    function Members() {
	        this.reset();
	    }
	    Members.prototype.get = function (id) {
	        if (Object.prototype.hasOwnProperty.call(this.members, id)) {
	            return {
	                id: id,
	                info: this.members[id]
	            };
	        }
	        else {
	            return null;
	        }
	    };
	    Members.prototype.each = function (callback) {
	        var _this = this;
	        Collections.objectApply(this.members, function (member, id) {
	            callback(_this.get(id));
	        });
	    };
	    Members.prototype.setMyID = function (id) {
	        this.myID = id;
	    };
	    Members.prototype.onSubscription = function (subscriptionData) {
	        this.members = subscriptionData.presence.hash;
	        this.count = subscriptionData.presence.count;
	        this.me = this.get(this.myID);
	    };
	    Members.prototype.addMember = function (memberData) {
	        if (this.get(memberData.user_id) === null) {
	            this.count++;
	        }
	        this.members[memberData.user_id] = memberData.user_info;
	        return this.get(memberData.user_id);
	    };
	    Members.prototype.removeMember = function (memberData) {
	        var member = this.get(memberData.user_id);
	        if (member) {
	            delete this.members[memberData.user_id];
	            this.count--;
	        }
	        return member;
	    };
	    Members.prototype.reset = function () {
	        this.members = {};
	        this.count = 0;
	        this.myID = null;
	        this.me = null;
	    };
	    return Members;
	}());
	exports.__esModule = true;
	exports["default"] = Members;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var private_channel_1 = __webpack_require__(51);
	var Errors = __webpack_require__(31);
	var logger_1 = __webpack_require__(8);
	var tweetnacl_1 = __webpack_require__(55);
	var tweetnacl_util_1 = __webpack_require__(57);
	var EncryptedChannel = (function (_super) {
	    __extends(EncryptedChannel, _super);
	    function EncryptedChannel() {
	        _super.apply(this, arguments);
	        this.key = null;
	    }
	    EncryptedChannel.prototype.authorize = function (socketId, callback) {
	        var _this = this;
	        _super.prototype.authorize.call(this, socketId, function (error, authData) {
	            if (error) {
	                callback(true, authData);
	                return;
	            }
	            var sharedSecret = authData["shared_secret"];
	            if (!sharedSecret) {
	                var errorMsg = "No shared_secret key in auth payload for encrypted channel: " + _this.name;
	                callback(true, errorMsg);
	                logger_1["default"].warn("Error: " + errorMsg);
	                return;
	            }
	            _this.key = tweetnacl_util_1.decodeBase64(sharedSecret);
	            delete authData["shared_secret"];
	            callback(false, authData);
	        });
	    };
	    EncryptedChannel.prototype.trigger = function (event, data) {
	        throw new Errors.UnsupportedFeature('Client events are not currently supported for encrypted channels');
	    };
	    EncryptedChannel.prototype.handleEvent = function (event, data) {
	        if (event.indexOf("pusher_internal:") === 0 || event.indexOf("pusher:") === 0) {
	            _super.prototype.handleEvent.call(this, event, data);
	            return;
	        }
	        this.handleEncryptedEvent(event, data);
	    };
	    EncryptedChannel.prototype.handleEncryptedEvent = function (event, data) {
	        var _this = this;
	        if (!this.key) {
	            logger_1["default"].debug('Received encrypted event before key has been retrieved from the authEndpoint');
	            return;
	        }
	        if (!data.ciphertext || !data.nonce) {
	            logger_1["default"].warn('Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: ' + data);
	            return;
	        }
	        var cipherText = tweetnacl_util_1.decodeBase64(data.ciphertext);
	        if (cipherText.length < tweetnacl_1.secretbox.overheadLength) {
	            logger_1["default"].warn("Expected encrypted event ciphertext length to be " + tweetnacl_1.secretbox.overheadLength + ", got: " + cipherText.length);
	            return;
	        }
	        var nonce = tweetnacl_util_1.decodeBase64(data.nonce);
	        if (nonce.length < tweetnacl_1.secretbox.nonceLength) {
	            logger_1["default"].warn("Expected encrypted event nonce length to be " + tweetnacl_1.secretbox.nonceLength + ", got: " + nonce.length);
	            return;
	        }
	        var bytes = tweetnacl_1.secretbox.open(cipherText, nonce, this.key);
	        if (bytes === null) {
	            logger_1["default"].debug('Failed to decrypted an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint...');
	            this.authorize(this.pusher.connection.socket_id, function (error, authData) {
	                if (error) {
	                    logger_1["default"].warn("Failed to make a request to the authEndpoint: " + authData + ". Unable to fetch new key, so dropping encrypted event");
	                    return;
	                }
	                bytes = tweetnacl_1.secretbox.open(cipherText, nonce, _this.key);
	                if (bytes === null) {
	                    logger_1["default"].warn("Failed to decrypt event with new key. Dropping encrypted event");
	                    return;
	                }
	                _this.emitJSON(event, tweetnacl_util_1.encodeUTF8(bytes));
	                return;
	            });
	            return;
	        }
	        this.emitJSON(event, tweetnacl_util_1.encodeUTF8(bytes));
	    };
	    EncryptedChannel.prototype.emitJSON = function (eventName, data) {
	        try {
	            this.emit(eventName, JSON.parse(data));
	        }
	        catch (e) {
	            this.emit(eventName, data);
	        }
	        return this;
	    };
	    return EncryptedChannel;
	}(private_channel_1["default"]));
	exports.__esModule = true;
	exports["default"] = EncryptedChannel;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	(function(nacl) {
	'use strict';

	// Ported in 2014 by Dmitry Chestnykh and Devi Mandiri.
	// Public domain.
	//
	// Implementation derived from TweetNaCl version 20140427.
	// See for details: http://tweetnacl.cr.yp.to/

	var gf = function(init) {
	  var i, r = new Float64Array(16);
	  if (init) for (i = 0; i < init.length; i++) r[i] = init[i];
	  return r;
	};

	//  Pluggable, initialized in high-level API below.
	var randombytes = function(/* x, n */) { throw new Error('no PRNG'); };

	var _0 = new Uint8Array(16);
	var _9 = new Uint8Array(32); _9[0] = 9;

	var gf0 = gf(),
	    gf1 = gf([1]),
	    _121665 = gf([0xdb41, 1]),
	    D = gf([0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070, 0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203]),
	    D2 = gf([0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0, 0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406]),
	    X = gf([0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c, 0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169]),
	    Y = gf([0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666]),
	    I = gf([0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43, 0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83]);

	function ts64(x, i, h, l) {
	  x[i]   = (h >> 24) & 0xff;
	  x[i+1] = (h >> 16) & 0xff;
	  x[i+2] = (h >>  8) & 0xff;
	  x[i+3] = h & 0xff;
	  x[i+4] = (l >> 24)  & 0xff;
	  x[i+5] = (l >> 16)  & 0xff;
	  x[i+6] = (l >>  8)  & 0xff;
	  x[i+7] = l & 0xff;
	}

	function vn(x, xi, y, yi, n) {
	  var i,d = 0;
	  for (i = 0; i < n; i++) d |= x[xi+i]^y[yi+i];
	  return (1 & ((d - 1) >>> 8)) - 1;
	}

	function crypto_verify_16(x, xi, y, yi) {
	  return vn(x,xi,y,yi,16);
	}

	function crypto_verify_32(x, xi, y, yi) {
	  return vn(x,xi,y,yi,32);
	}

	function core_salsa20(o, p, k, c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }
	   x0 =  x0 +  j0 | 0;
	   x1 =  x1 +  j1 | 0;
	   x2 =  x2 +  j2 | 0;
	   x3 =  x3 +  j3 | 0;
	   x4 =  x4 +  j4 | 0;
	   x5 =  x5 +  j5 | 0;
	   x6 =  x6 +  j6 | 0;
	   x7 =  x7 +  j7 | 0;
	   x8 =  x8 +  j8 | 0;
	   x9 =  x9 +  j9 | 0;
	  x10 = x10 + j10 | 0;
	  x11 = x11 + j11 | 0;
	  x12 = x12 + j12 | 0;
	  x13 = x13 + j13 | 0;
	  x14 = x14 + j14 | 0;
	  x15 = x15 + j15 | 0;

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x1 >>>  0 & 0xff;
	  o[ 5] = x1 >>>  8 & 0xff;
	  o[ 6] = x1 >>> 16 & 0xff;
	  o[ 7] = x1 >>> 24 & 0xff;

	  o[ 8] = x2 >>>  0 & 0xff;
	  o[ 9] = x2 >>>  8 & 0xff;
	  o[10] = x2 >>> 16 & 0xff;
	  o[11] = x2 >>> 24 & 0xff;

	  o[12] = x3 >>>  0 & 0xff;
	  o[13] = x3 >>>  8 & 0xff;
	  o[14] = x3 >>> 16 & 0xff;
	  o[15] = x3 >>> 24 & 0xff;

	  o[16] = x4 >>>  0 & 0xff;
	  o[17] = x4 >>>  8 & 0xff;
	  o[18] = x4 >>> 16 & 0xff;
	  o[19] = x4 >>> 24 & 0xff;

	  o[20] = x5 >>>  0 & 0xff;
	  o[21] = x5 >>>  8 & 0xff;
	  o[22] = x5 >>> 16 & 0xff;
	  o[23] = x5 >>> 24 & 0xff;

	  o[24] = x6 >>>  0 & 0xff;
	  o[25] = x6 >>>  8 & 0xff;
	  o[26] = x6 >>> 16 & 0xff;
	  o[27] = x6 >>> 24 & 0xff;

	  o[28] = x7 >>>  0 & 0xff;
	  o[29] = x7 >>>  8 & 0xff;
	  o[30] = x7 >>> 16 & 0xff;
	  o[31] = x7 >>> 24 & 0xff;

	  o[32] = x8 >>>  0 & 0xff;
	  o[33] = x8 >>>  8 & 0xff;
	  o[34] = x8 >>> 16 & 0xff;
	  o[35] = x8 >>> 24 & 0xff;

	  o[36] = x9 >>>  0 & 0xff;
	  o[37] = x9 >>>  8 & 0xff;
	  o[38] = x9 >>> 16 & 0xff;
	  o[39] = x9 >>> 24 & 0xff;

	  o[40] = x10 >>>  0 & 0xff;
	  o[41] = x10 >>>  8 & 0xff;
	  o[42] = x10 >>> 16 & 0xff;
	  o[43] = x10 >>> 24 & 0xff;

	  o[44] = x11 >>>  0 & 0xff;
	  o[45] = x11 >>>  8 & 0xff;
	  o[46] = x11 >>> 16 & 0xff;
	  o[47] = x11 >>> 24 & 0xff;

	  o[48] = x12 >>>  0 & 0xff;
	  o[49] = x12 >>>  8 & 0xff;
	  o[50] = x12 >>> 16 & 0xff;
	  o[51] = x12 >>> 24 & 0xff;

	  o[52] = x13 >>>  0 & 0xff;
	  o[53] = x13 >>>  8 & 0xff;
	  o[54] = x13 >>> 16 & 0xff;
	  o[55] = x13 >>> 24 & 0xff;

	  o[56] = x14 >>>  0 & 0xff;
	  o[57] = x14 >>>  8 & 0xff;
	  o[58] = x14 >>> 16 & 0xff;
	  o[59] = x14 >>> 24 & 0xff;

	  o[60] = x15 >>>  0 & 0xff;
	  o[61] = x15 >>>  8 & 0xff;
	  o[62] = x15 >>> 16 & 0xff;
	  o[63] = x15 >>> 24 & 0xff;
	}

	function core_hsalsa20(o,p,k,c) {
	  var j0  = c[ 0] & 0xff | (c[ 1] & 0xff)<<8 | (c[ 2] & 0xff)<<16 | (c[ 3] & 0xff)<<24,
	      j1  = k[ 0] & 0xff | (k[ 1] & 0xff)<<8 | (k[ 2] & 0xff)<<16 | (k[ 3] & 0xff)<<24,
	      j2  = k[ 4] & 0xff | (k[ 5] & 0xff)<<8 | (k[ 6] & 0xff)<<16 | (k[ 7] & 0xff)<<24,
	      j3  = k[ 8] & 0xff | (k[ 9] & 0xff)<<8 | (k[10] & 0xff)<<16 | (k[11] & 0xff)<<24,
	      j4  = k[12] & 0xff | (k[13] & 0xff)<<8 | (k[14] & 0xff)<<16 | (k[15] & 0xff)<<24,
	      j5  = c[ 4] & 0xff | (c[ 5] & 0xff)<<8 | (c[ 6] & 0xff)<<16 | (c[ 7] & 0xff)<<24,
	      j6  = p[ 0] & 0xff | (p[ 1] & 0xff)<<8 | (p[ 2] & 0xff)<<16 | (p[ 3] & 0xff)<<24,
	      j7  = p[ 4] & 0xff | (p[ 5] & 0xff)<<8 | (p[ 6] & 0xff)<<16 | (p[ 7] & 0xff)<<24,
	      j8  = p[ 8] & 0xff | (p[ 9] & 0xff)<<8 | (p[10] & 0xff)<<16 | (p[11] & 0xff)<<24,
	      j9  = p[12] & 0xff | (p[13] & 0xff)<<8 | (p[14] & 0xff)<<16 | (p[15] & 0xff)<<24,
	      j10 = c[ 8] & 0xff | (c[ 9] & 0xff)<<8 | (c[10] & 0xff)<<16 | (c[11] & 0xff)<<24,
	      j11 = k[16] & 0xff | (k[17] & 0xff)<<8 | (k[18] & 0xff)<<16 | (k[19] & 0xff)<<24,
	      j12 = k[20] & 0xff | (k[21] & 0xff)<<8 | (k[22] & 0xff)<<16 | (k[23] & 0xff)<<24,
	      j13 = k[24] & 0xff | (k[25] & 0xff)<<8 | (k[26] & 0xff)<<16 | (k[27] & 0xff)<<24,
	      j14 = k[28] & 0xff | (k[29] & 0xff)<<8 | (k[30] & 0xff)<<16 | (k[31] & 0xff)<<24,
	      j15 = c[12] & 0xff | (c[13] & 0xff)<<8 | (c[14] & 0xff)<<16 | (c[15] & 0xff)<<24;

	  var x0 = j0, x1 = j1, x2 = j2, x3 = j3, x4 = j4, x5 = j5, x6 = j6, x7 = j7,
	      x8 = j8, x9 = j9, x10 = j10, x11 = j11, x12 = j12, x13 = j13, x14 = j14,
	      x15 = j15, u;

	  for (var i = 0; i < 20; i += 2) {
	    u = x0 + x12 | 0;
	    x4 ^= u<<7 | u>>>(32-7);
	    u = x4 + x0 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x4 | 0;
	    x12 ^= u<<13 | u>>>(32-13);
	    u = x12 + x8 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x1 | 0;
	    x9 ^= u<<7 | u>>>(32-7);
	    u = x9 + x5 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x9 | 0;
	    x1 ^= u<<13 | u>>>(32-13);
	    u = x1 + x13 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x6 | 0;
	    x14 ^= u<<7 | u>>>(32-7);
	    u = x14 + x10 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x14 | 0;
	    x6 ^= u<<13 | u>>>(32-13);
	    u = x6 + x2 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x11 | 0;
	    x3 ^= u<<7 | u>>>(32-7);
	    u = x3 + x15 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x3 | 0;
	    x11 ^= u<<13 | u>>>(32-13);
	    u = x11 + x7 | 0;
	    x15 ^= u<<18 | u>>>(32-18);

	    u = x0 + x3 | 0;
	    x1 ^= u<<7 | u>>>(32-7);
	    u = x1 + x0 | 0;
	    x2 ^= u<<9 | u>>>(32-9);
	    u = x2 + x1 | 0;
	    x3 ^= u<<13 | u>>>(32-13);
	    u = x3 + x2 | 0;
	    x0 ^= u<<18 | u>>>(32-18);

	    u = x5 + x4 | 0;
	    x6 ^= u<<7 | u>>>(32-7);
	    u = x6 + x5 | 0;
	    x7 ^= u<<9 | u>>>(32-9);
	    u = x7 + x6 | 0;
	    x4 ^= u<<13 | u>>>(32-13);
	    u = x4 + x7 | 0;
	    x5 ^= u<<18 | u>>>(32-18);

	    u = x10 + x9 | 0;
	    x11 ^= u<<7 | u>>>(32-7);
	    u = x11 + x10 | 0;
	    x8 ^= u<<9 | u>>>(32-9);
	    u = x8 + x11 | 0;
	    x9 ^= u<<13 | u>>>(32-13);
	    u = x9 + x8 | 0;
	    x10 ^= u<<18 | u>>>(32-18);

	    u = x15 + x14 | 0;
	    x12 ^= u<<7 | u>>>(32-7);
	    u = x12 + x15 | 0;
	    x13 ^= u<<9 | u>>>(32-9);
	    u = x13 + x12 | 0;
	    x14 ^= u<<13 | u>>>(32-13);
	    u = x14 + x13 | 0;
	    x15 ^= u<<18 | u>>>(32-18);
	  }

	  o[ 0] = x0 >>>  0 & 0xff;
	  o[ 1] = x0 >>>  8 & 0xff;
	  o[ 2] = x0 >>> 16 & 0xff;
	  o[ 3] = x0 >>> 24 & 0xff;

	  o[ 4] = x5 >>>  0 & 0xff;
	  o[ 5] = x5 >>>  8 & 0xff;
	  o[ 6] = x5 >>> 16 & 0xff;
	  o[ 7] = x5 >>> 24 & 0xff;

	  o[ 8] = x10 >>>  0 & 0xff;
	  o[ 9] = x10 >>>  8 & 0xff;
	  o[10] = x10 >>> 16 & 0xff;
	  o[11] = x10 >>> 24 & 0xff;

	  o[12] = x15 >>>  0 & 0xff;
	  o[13] = x15 >>>  8 & 0xff;
	  o[14] = x15 >>> 16 & 0xff;
	  o[15] = x15 >>> 24 & 0xff;

	  o[16] = x6 >>>  0 & 0xff;
	  o[17] = x6 >>>  8 & 0xff;
	  o[18] = x6 >>> 16 & 0xff;
	  o[19] = x6 >>> 24 & 0xff;

	  o[20] = x7 >>>  0 & 0xff;
	  o[21] = x7 >>>  8 & 0xff;
	  o[22] = x7 >>> 16 & 0xff;
	  o[23] = x7 >>> 24 & 0xff;

	  o[24] = x8 >>>  0 & 0xff;
	  o[25] = x8 >>>  8 & 0xff;
	  o[26] = x8 >>> 16 & 0xff;
	  o[27] = x8 >>> 24 & 0xff;

	  o[28] = x9 >>>  0 & 0xff;
	  o[29] = x9 >>>  8 & 0xff;
	  o[30] = x9 >>> 16 & 0xff;
	  o[31] = x9 >>> 24 & 0xff;
	}

	function crypto_core_salsa20(out,inp,k,c) {
	  core_salsa20(out,inp,k,c);
	}

	function crypto_core_hsalsa20(out,inp,k,c) {
	  core_hsalsa20(out,inp,k,c);
	}

	var sigma = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
	            // "expand 32-byte k"

	function crypto_stream_salsa20_xor(c,cpos,m,mpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	    mpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = m[mpos+i] ^ x[i];
	  }
	  return 0;
	}

	function crypto_stream_salsa20(c,cpos,b,n,k) {
	  var z = new Uint8Array(16), x = new Uint8Array(64);
	  var u, i;
	  for (i = 0; i < 16; i++) z[i] = 0;
	  for (i = 0; i < 8; i++) z[i] = n[i];
	  while (b >= 64) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < 64; i++) c[cpos+i] = x[i];
	    u = 1;
	    for (i = 8; i < 16; i++) {
	      u = u + (z[i] & 0xff) | 0;
	      z[i] = u & 0xff;
	      u >>>= 8;
	    }
	    b -= 64;
	    cpos += 64;
	  }
	  if (b > 0) {
	    crypto_core_salsa20(x,z,k,sigma);
	    for (i = 0; i < b; i++) c[cpos+i] = x[i];
	  }
	  return 0;
	}

	function crypto_stream(c,cpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20(c,cpos,d,sn,s);
	}

	function crypto_stream_xor(c,cpos,m,mpos,d,n,k) {
	  var s = new Uint8Array(32);
	  crypto_core_hsalsa20(s,n,k,sigma);
	  var sn = new Uint8Array(8);
	  for (var i = 0; i < 8; i++) sn[i] = n[i+16];
	  return crypto_stream_salsa20_xor(c,cpos,m,mpos,d,sn,s);
	}

	/*
	* Port of Andrew Moon's Poly1305-donna-16. Public domain.
	* https://github.com/floodyberry/poly1305-donna
	*/

	var poly1305 = function(key) {
	  this.buffer = new Uint8Array(16);
	  this.r = new Uint16Array(10);
	  this.h = new Uint16Array(10);
	  this.pad = new Uint16Array(8);
	  this.leftover = 0;
	  this.fin = 0;

	  var t0, t1, t2, t3, t4, t5, t6, t7;

	  t0 = key[ 0] & 0xff | (key[ 1] & 0xff) << 8; this.r[0] = ( t0                     ) & 0x1fff;
	  t1 = key[ 2] & 0xff | (key[ 3] & 0xff) << 8; this.r[1] = ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	  t2 = key[ 4] & 0xff | (key[ 5] & 0xff) << 8; this.r[2] = ((t1 >>> 10) | (t2 <<  6)) & 0x1f03;
	  t3 = key[ 6] & 0xff | (key[ 7] & 0xff) << 8; this.r[3] = ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	  t4 = key[ 8] & 0xff | (key[ 9] & 0xff) << 8; this.r[4] = ((t3 >>>  4) | (t4 << 12)) & 0x00ff;
	  this.r[5] = ((t4 >>>  1)) & 0x1ffe;
	  t5 = key[10] & 0xff | (key[11] & 0xff) << 8; this.r[6] = ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	  t6 = key[12] & 0xff | (key[13] & 0xff) << 8; this.r[7] = ((t5 >>> 11) | (t6 <<  5)) & 0x1f81;
	  t7 = key[14] & 0xff | (key[15] & 0xff) << 8; this.r[8] = ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	  this.r[9] = ((t7 >>>  5)) & 0x007f;

	  this.pad[0] = key[16] & 0xff | (key[17] & 0xff) << 8;
	  this.pad[1] = key[18] & 0xff | (key[19] & 0xff) << 8;
	  this.pad[2] = key[20] & 0xff | (key[21] & 0xff) << 8;
	  this.pad[3] = key[22] & 0xff | (key[23] & 0xff) << 8;
	  this.pad[4] = key[24] & 0xff | (key[25] & 0xff) << 8;
	  this.pad[5] = key[26] & 0xff | (key[27] & 0xff) << 8;
	  this.pad[6] = key[28] & 0xff | (key[29] & 0xff) << 8;
	  this.pad[7] = key[30] & 0xff | (key[31] & 0xff) << 8;
	};

	poly1305.prototype.blocks = function(m, mpos, bytes) {
	  var hibit = this.fin ? 0 : (1 << 11);
	  var t0, t1, t2, t3, t4, t5, t6, t7, c;
	  var d0, d1, d2, d3, d4, d5, d6, d7, d8, d9;

	  var h0 = this.h[0],
	      h1 = this.h[1],
	      h2 = this.h[2],
	      h3 = this.h[3],
	      h4 = this.h[4],
	      h5 = this.h[5],
	      h6 = this.h[6],
	      h7 = this.h[7],
	      h8 = this.h[8],
	      h9 = this.h[9];

	  var r0 = this.r[0],
	      r1 = this.r[1],
	      r2 = this.r[2],
	      r3 = this.r[3],
	      r4 = this.r[4],
	      r5 = this.r[5],
	      r6 = this.r[6],
	      r7 = this.r[7],
	      r8 = this.r[8],
	      r9 = this.r[9];

	  while (bytes >= 16) {
	    t0 = m[mpos+ 0] & 0xff | (m[mpos+ 1] & 0xff) << 8; h0 += ( t0                     ) & 0x1fff;
	    t1 = m[mpos+ 2] & 0xff | (m[mpos+ 3] & 0xff) << 8; h1 += ((t0 >>> 13) | (t1 <<  3)) & 0x1fff;
	    t2 = m[mpos+ 4] & 0xff | (m[mpos+ 5] & 0xff) << 8; h2 += ((t1 >>> 10) | (t2 <<  6)) & 0x1fff;
	    t3 = m[mpos+ 6] & 0xff | (m[mpos+ 7] & 0xff) << 8; h3 += ((t2 >>>  7) | (t3 <<  9)) & 0x1fff;
	    t4 = m[mpos+ 8] & 0xff | (m[mpos+ 9] & 0xff) << 8; h4 += ((t3 >>>  4) | (t4 << 12)) & 0x1fff;
	    h5 += ((t4 >>>  1)) & 0x1fff;
	    t5 = m[mpos+10] & 0xff | (m[mpos+11] & 0xff) << 8; h6 += ((t4 >>> 14) | (t5 <<  2)) & 0x1fff;
	    t6 = m[mpos+12] & 0xff | (m[mpos+13] & 0xff) << 8; h7 += ((t5 >>> 11) | (t6 <<  5)) & 0x1fff;
	    t7 = m[mpos+14] & 0xff | (m[mpos+15] & 0xff) << 8; h8 += ((t6 >>>  8) | (t7 <<  8)) & 0x1fff;
	    h9 += ((t7 >>> 5)) | hibit;

	    c = 0;

	    d0 = c;
	    d0 += h0 * r0;
	    d0 += h1 * (5 * r9);
	    d0 += h2 * (5 * r8);
	    d0 += h3 * (5 * r7);
	    d0 += h4 * (5 * r6);
	    c = (d0 >>> 13); d0 &= 0x1fff;
	    d0 += h5 * (5 * r5);
	    d0 += h6 * (5 * r4);
	    d0 += h7 * (5 * r3);
	    d0 += h8 * (5 * r2);
	    d0 += h9 * (5 * r1);
	    c += (d0 >>> 13); d0 &= 0x1fff;

	    d1 = c;
	    d1 += h0 * r1;
	    d1 += h1 * r0;
	    d1 += h2 * (5 * r9);
	    d1 += h3 * (5 * r8);
	    d1 += h4 * (5 * r7);
	    c = (d1 >>> 13); d1 &= 0x1fff;
	    d1 += h5 * (5 * r6);
	    d1 += h6 * (5 * r5);
	    d1 += h7 * (5 * r4);
	    d1 += h8 * (5 * r3);
	    d1 += h9 * (5 * r2);
	    c += (d1 >>> 13); d1 &= 0x1fff;

	    d2 = c;
	    d2 += h0 * r2;
	    d2 += h1 * r1;
	    d2 += h2 * r0;
	    d2 += h3 * (5 * r9);
	    d2 += h4 * (5 * r8);
	    c = (d2 >>> 13); d2 &= 0x1fff;
	    d2 += h5 * (5 * r7);
	    d2 += h6 * (5 * r6);
	    d2 += h7 * (5 * r5);
	    d2 += h8 * (5 * r4);
	    d2 += h9 * (5 * r3);
	    c += (d2 >>> 13); d2 &= 0x1fff;

	    d3 = c;
	    d3 += h0 * r3;
	    d3 += h1 * r2;
	    d3 += h2 * r1;
	    d3 += h3 * r0;
	    d3 += h4 * (5 * r9);
	    c = (d3 >>> 13); d3 &= 0x1fff;
	    d3 += h5 * (5 * r8);
	    d3 += h6 * (5 * r7);
	    d3 += h7 * (5 * r6);
	    d3 += h8 * (5 * r5);
	    d3 += h9 * (5 * r4);
	    c += (d3 >>> 13); d3 &= 0x1fff;

	    d4 = c;
	    d4 += h0 * r4;
	    d4 += h1 * r3;
	    d4 += h2 * r2;
	    d4 += h3 * r1;
	    d4 += h4 * r0;
	    c = (d4 >>> 13); d4 &= 0x1fff;
	    d4 += h5 * (5 * r9);
	    d4 += h6 * (5 * r8);
	    d4 += h7 * (5 * r7);
	    d4 += h8 * (5 * r6);
	    d4 += h9 * (5 * r5);
	    c += (d4 >>> 13); d4 &= 0x1fff;

	    d5 = c;
	    d5 += h0 * r5;
	    d5 += h1 * r4;
	    d5 += h2 * r3;
	    d5 += h3 * r2;
	    d5 += h4 * r1;
	    c = (d5 >>> 13); d5 &= 0x1fff;
	    d5 += h5 * r0;
	    d5 += h6 * (5 * r9);
	    d5 += h7 * (5 * r8);
	    d5 += h8 * (5 * r7);
	    d5 += h9 * (5 * r6);
	    c += (d5 >>> 13); d5 &= 0x1fff;

	    d6 = c;
	    d6 += h0 * r6;
	    d6 += h1 * r5;
	    d6 += h2 * r4;
	    d6 += h3 * r3;
	    d6 += h4 * r2;
	    c = (d6 >>> 13); d6 &= 0x1fff;
	    d6 += h5 * r1;
	    d6 += h6 * r0;
	    d6 += h7 * (5 * r9);
	    d6 += h8 * (5 * r8);
	    d6 += h9 * (5 * r7);
	    c += (d6 >>> 13); d6 &= 0x1fff;

	    d7 = c;
	    d7 += h0 * r7;
	    d7 += h1 * r6;
	    d7 += h2 * r5;
	    d7 += h3 * r4;
	    d7 += h4 * r3;
	    c = (d7 >>> 13); d7 &= 0x1fff;
	    d7 += h5 * r2;
	    d7 += h6 * r1;
	    d7 += h7 * r0;
	    d7 += h8 * (5 * r9);
	    d7 += h9 * (5 * r8);
	    c += (d7 >>> 13); d7 &= 0x1fff;

	    d8 = c;
	    d8 += h0 * r8;
	    d8 += h1 * r7;
	    d8 += h2 * r6;
	    d8 += h3 * r5;
	    d8 += h4 * r4;
	    c = (d8 >>> 13); d8 &= 0x1fff;
	    d8 += h5 * r3;
	    d8 += h6 * r2;
	    d8 += h7 * r1;
	    d8 += h8 * r0;
	    d8 += h9 * (5 * r9);
	    c += (d8 >>> 13); d8 &= 0x1fff;

	    d9 = c;
	    d9 += h0 * r9;
	    d9 += h1 * r8;
	    d9 += h2 * r7;
	    d9 += h3 * r6;
	    d9 += h4 * r5;
	    c = (d9 >>> 13); d9 &= 0x1fff;
	    d9 += h5 * r4;
	    d9 += h6 * r3;
	    d9 += h7 * r2;
	    d9 += h8 * r1;
	    d9 += h9 * r0;
	    c += (d9 >>> 13); d9 &= 0x1fff;

	    c = (((c << 2) + c)) | 0;
	    c = (c + d0) | 0;
	    d0 = c & 0x1fff;
	    c = (c >>> 13);
	    d1 += c;

	    h0 = d0;
	    h1 = d1;
	    h2 = d2;
	    h3 = d3;
	    h4 = d4;
	    h5 = d5;
	    h6 = d6;
	    h7 = d7;
	    h8 = d8;
	    h9 = d9;

	    mpos += 16;
	    bytes -= 16;
	  }
	  this.h[0] = h0;
	  this.h[1] = h1;
	  this.h[2] = h2;
	  this.h[3] = h3;
	  this.h[4] = h4;
	  this.h[5] = h5;
	  this.h[6] = h6;
	  this.h[7] = h7;
	  this.h[8] = h8;
	  this.h[9] = h9;
	};

	poly1305.prototype.finish = function(mac, macpos) {
	  var g = new Uint16Array(10);
	  var c, mask, f, i;

	  if (this.leftover) {
	    i = this.leftover;
	    this.buffer[i++] = 1;
	    for (; i < 16; i++) this.buffer[i] = 0;
	    this.fin = 1;
	    this.blocks(this.buffer, 0, 16);
	  }

	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  for (i = 2; i < 10; i++) {
	    this.h[i] += c;
	    c = this.h[i] >>> 13;
	    this.h[i] &= 0x1fff;
	  }
	  this.h[0] += (c * 5);
	  c = this.h[0] >>> 13;
	  this.h[0] &= 0x1fff;
	  this.h[1] += c;
	  c = this.h[1] >>> 13;
	  this.h[1] &= 0x1fff;
	  this.h[2] += c;

	  g[0] = this.h[0] + 5;
	  c = g[0] >>> 13;
	  g[0] &= 0x1fff;
	  for (i = 1; i < 10; i++) {
	    g[i] = this.h[i] + c;
	    c = g[i] >>> 13;
	    g[i] &= 0x1fff;
	  }
	  g[9] -= (1 << 13);

	  mask = (c ^ 1) - 1;
	  for (i = 0; i < 10; i++) g[i] &= mask;
	  mask = ~mask;
	  for (i = 0; i < 10; i++) this.h[i] = (this.h[i] & mask) | g[i];

	  this.h[0] = ((this.h[0]       ) | (this.h[1] << 13)                    ) & 0xffff;
	  this.h[1] = ((this.h[1] >>>  3) | (this.h[2] << 10)                    ) & 0xffff;
	  this.h[2] = ((this.h[2] >>>  6) | (this.h[3] <<  7)                    ) & 0xffff;
	  this.h[3] = ((this.h[3] >>>  9) | (this.h[4] <<  4)                    ) & 0xffff;
	  this.h[4] = ((this.h[4] >>> 12) | (this.h[5] <<  1) | (this.h[6] << 14)) & 0xffff;
	  this.h[5] = ((this.h[6] >>>  2) | (this.h[7] << 11)                    ) & 0xffff;
	  this.h[6] = ((this.h[7] >>>  5) | (this.h[8] <<  8)                    ) & 0xffff;
	  this.h[7] = ((this.h[8] >>>  8) | (this.h[9] <<  5)                    ) & 0xffff;

	  f = this.h[0] + this.pad[0];
	  this.h[0] = f & 0xffff;
	  for (i = 1; i < 8; i++) {
	    f = (((this.h[i] + this.pad[i]) | 0) + (f >>> 16)) | 0;
	    this.h[i] = f & 0xffff;
	  }

	  mac[macpos+ 0] = (this.h[0] >>> 0) & 0xff;
	  mac[macpos+ 1] = (this.h[0] >>> 8) & 0xff;
	  mac[macpos+ 2] = (this.h[1] >>> 0) & 0xff;
	  mac[macpos+ 3] = (this.h[1] >>> 8) & 0xff;
	  mac[macpos+ 4] = (this.h[2] >>> 0) & 0xff;
	  mac[macpos+ 5] = (this.h[2] >>> 8) & 0xff;
	  mac[macpos+ 6] = (this.h[3] >>> 0) & 0xff;
	  mac[macpos+ 7] = (this.h[3] >>> 8) & 0xff;
	  mac[macpos+ 8] = (this.h[4] >>> 0) & 0xff;
	  mac[macpos+ 9] = (this.h[4] >>> 8) & 0xff;
	  mac[macpos+10] = (this.h[5] >>> 0) & 0xff;
	  mac[macpos+11] = (this.h[5] >>> 8) & 0xff;
	  mac[macpos+12] = (this.h[6] >>> 0) & 0xff;
	  mac[macpos+13] = (this.h[6] >>> 8) & 0xff;
	  mac[macpos+14] = (this.h[7] >>> 0) & 0xff;
	  mac[macpos+15] = (this.h[7] >>> 8) & 0xff;
	};

	poly1305.prototype.update = function(m, mpos, bytes) {
	  var i, want;

	  if (this.leftover) {
	    want = (16 - this.leftover);
	    if (want > bytes)
	      want = bytes;
	    for (i = 0; i < want; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    bytes -= want;
	    mpos += want;
	    this.leftover += want;
	    if (this.leftover < 16)
	      return;
	    this.blocks(this.buffer, 0, 16);
	    this.leftover = 0;
	  }

	  if (bytes >= 16) {
	    want = bytes - (bytes % 16);
	    this.blocks(m, mpos, want);
	    mpos += want;
	    bytes -= want;
	  }

	  if (bytes) {
	    for (i = 0; i < bytes; i++)
	      this.buffer[this.leftover + i] = m[mpos+i];
	    this.leftover += bytes;
	  }
	};

	function crypto_onetimeauth(out, outpos, m, mpos, n, k) {
	  var s = new poly1305(k);
	  s.update(m, mpos, n);
	  s.finish(out, outpos);
	  return 0;
	}

	function crypto_onetimeauth_verify(h, hpos, m, mpos, n, k) {
	  var x = new Uint8Array(16);
	  crypto_onetimeauth(x,0,m,mpos,n,k);
	  return crypto_verify_16(h,hpos,x,0);
	}

	function crypto_secretbox(c,m,d,n,k) {
	  var i;
	  if (d < 32) return -1;
	  crypto_stream_xor(c,0,m,0,d,n,k);
	  crypto_onetimeauth(c, 16, c, 32, d - 32, c);
	  for (i = 0; i < 16; i++) c[i] = 0;
	  return 0;
	}

	function crypto_secretbox_open(m,c,d,n,k) {
	  var i;
	  var x = new Uint8Array(32);
	  if (d < 32) return -1;
	  crypto_stream(x,0,32,n,k);
	  if (crypto_onetimeauth_verify(c, 16,c, 32,d - 32,x) !== 0) return -1;
	  crypto_stream_xor(m,0,c,0,d,n,k);
	  for (i = 0; i < 32; i++) m[i] = 0;
	  return 0;
	}

	function set25519(r, a) {
	  var i;
	  for (i = 0; i < 16; i++) r[i] = a[i]|0;
	}

	function car25519(o) {
	  var i, v, c = 1;
	  for (i = 0; i < 16; i++) {
	    v = o[i] + c + 65535;
	    c = Math.floor(v / 65536);
	    o[i] = v - c * 65536;
	  }
	  o[0] += c-1 + 37 * (c-1);
	}

	function sel25519(p, q, b) {
	  var t, c = ~(b-1);
	  for (var i = 0; i < 16; i++) {
	    t = c & (p[i] ^ q[i]);
	    p[i] ^= t;
	    q[i] ^= t;
	  }
	}

	function pack25519(o, n) {
	  var i, j, b;
	  var m = gf(), t = gf();
	  for (i = 0; i < 16; i++) t[i] = n[i];
	  car25519(t);
	  car25519(t);
	  car25519(t);
	  for (j = 0; j < 2; j++) {
	    m[0] = t[0] - 0xffed;
	    for (i = 1; i < 15; i++) {
	      m[i] = t[i] - 0xffff - ((m[i-1]>>16) & 1);
	      m[i-1] &= 0xffff;
	    }
	    m[15] = t[15] - 0x7fff - ((m[14]>>16) & 1);
	    b = (m[15]>>16) & 1;
	    m[14] &= 0xffff;
	    sel25519(t, m, 1-b);
	  }
	  for (i = 0; i < 16; i++) {
	    o[2*i] = t[i] & 0xff;
	    o[2*i+1] = t[i]>>8;
	  }
	}

	function neq25519(a, b) {
	  var c = new Uint8Array(32), d = new Uint8Array(32);
	  pack25519(c, a);
	  pack25519(d, b);
	  return crypto_verify_32(c, 0, d, 0);
	}

	function par25519(a) {
	  var d = new Uint8Array(32);
	  pack25519(d, a);
	  return d[0] & 1;
	}

	function unpack25519(o, n) {
	  var i;
	  for (i = 0; i < 16; i++) o[i] = n[2*i] + (n[2*i+1] << 8);
	  o[15] &= 0x7fff;
	}

	function A(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] + b[i];
	}

	function Z(o, a, b) {
	  for (var i = 0; i < 16; i++) o[i] = a[i] - b[i];
	}

	function M(o, a, b) {
	  var v, c,
	     t0 = 0,  t1 = 0,  t2 = 0,  t3 = 0,  t4 = 0,  t5 = 0,  t6 = 0,  t7 = 0,
	     t8 = 0,  t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0,
	    t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0,
	    t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0,
	    b0 = b[0],
	    b1 = b[1],
	    b2 = b[2],
	    b3 = b[3],
	    b4 = b[4],
	    b5 = b[5],
	    b6 = b[6],
	    b7 = b[7],
	    b8 = b[8],
	    b9 = b[9],
	    b10 = b[10],
	    b11 = b[11],
	    b12 = b[12],
	    b13 = b[13],
	    b14 = b[14],
	    b15 = b[15];

	  v = a[0];
	  t0 += v * b0;
	  t1 += v * b1;
	  t2 += v * b2;
	  t3 += v * b3;
	  t4 += v * b4;
	  t5 += v * b5;
	  t6 += v * b6;
	  t7 += v * b7;
	  t8 += v * b8;
	  t9 += v * b9;
	  t10 += v * b10;
	  t11 += v * b11;
	  t12 += v * b12;
	  t13 += v * b13;
	  t14 += v * b14;
	  t15 += v * b15;
	  v = a[1];
	  t1 += v * b0;
	  t2 += v * b1;
	  t3 += v * b2;
	  t4 += v * b3;
	  t5 += v * b4;
	  t6 += v * b5;
	  t7 += v * b6;
	  t8 += v * b7;
	  t9 += v * b8;
	  t10 += v * b9;
	  t11 += v * b10;
	  t12 += v * b11;
	  t13 += v * b12;
	  t14 += v * b13;
	  t15 += v * b14;
	  t16 += v * b15;
	  v = a[2];
	  t2 += v * b0;
	  t3 += v * b1;
	  t4 += v * b2;
	  t5 += v * b3;
	  t6 += v * b4;
	  t7 += v * b5;
	  t8 += v * b6;
	  t9 += v * b7;
	  t10 += v * b8;
	  t11 += v * b9;
	  t12 += v * b10;
	  t13 += v * b11;
	  t14 += v * b12;
	  t15 += v * b13;
	  t16 += v * b14;
	  t17 += v * b15;
	  v = a[3];
	  t3 += v * b0;
	  t4 += v * b1;
	  t5 += v * b2;
	  t6 += v * b3;
	  t7 += v * b4;
	  t8 += v * b5;
	  t9 += v * b6;
	  t10 += v * b7;
	  t11 += v * b8;
	  t12 += v * b9;
	  t13 += v * b10;
	  t14 += v * b11;
	  t15 += v * b12;
	  t16 += v * b13;
	  t17 += v * b14;
	  t18 += v * b15;
	  v = a[4];
	  t4 += v * b0;
	  t5 += v * b1;
	  t6 += v * b2;
	  t7 += v * b3;
	  t8 += v * b4;
	  t9 += v * b5;
	  t10 += v * b6;
	  t11 += v * b7;
	  t12 += v * b8;
	  t13 += v * b9;
	  t14 += v * b10;
	  t15 += v * b11;
	  t16 += v * b12;
	  t17 += v * b13;
	  t18 += v * b14;
	  t19 += v * b15;
	  v = a[5];
	  t5 += v * b0;
	  t6 += v * b1;
	  t7 += v * b2;
	  t8 += v * b3;
	  t9 += v * b4;
	  t10 += v * b5;
	  t11 += v * b6;
	  t12 += v * b7;
	  t13 += v * b8;
	  t14 += v * b9;
	  t15 += v * b10;
	  t16 += v * b11;
	  t17 += v * b12;
	  t18 += v * b13;
	  t19 += v * b14;
	  t20 += v * b15;
	  v = a[6];
	  t6 += v * b0;
	  t7 += v * b1;
	  t8 += v * b2;
	  t9 += v * b3;
	  t10 += v * b4;
	  t11 += v * b5;
	  t12 += v * b6;
	  t13 += v * b7;
	  t14 += v * b8;
	  t15 += v * b9;
	  t16 += v * b10;
	  t17 += v * b11;
	  t18 += v * b12;
	  t19 += v * b13;
	  t20 += v * b14;
	  t21 += v * b15;
	  v = a[7];
	  t7 += v * b0;
	  t8 += v * b1;
	  t9 += v * b2;
	  t10 += v * b3;
	  t11 += v * b4;
	  t12 += v * b5;
	  t13 += v * b6;
	  t14 += v * b7;
	  t15 += v * b8;
	  t16 += v * b9;
	  t17 += v * b10;
	  t18 += v * b11;
	  t19 += v * b12;
	  t20 += v * b13;
	  t21 += v * b14;
	  t22 += v * b15;
	  v = a[8];
	  t8 += v * b0;
	  t9 += v * b1;
	  t10 += v * b2;
	  t11 += v * b3;
	  t12 += v * b4;
	  t13 += v * b5;
	  t14 += v * b6;
	  t15 += v * b7;
	  t16 += v * b8;
	  t17 += v * b9;
	  t18 += v * b10;
	  t19 += v * b11;
	  t20 += v * b12;
	  t21 += v * b13;
	  t22 += v * b14;
	  t23 += v * b15;
	  v = a[9];
	  t9 += v * b0;
	  t10 += v * b1;
	  t11 += v * b2;
	  t12 += v * b3;
	  t13 += v * b4;
	  t14 += v * b5;
	  t15 += v * b6;
	  t16 += v * b7;
	  t17 += v * b8;
	  t18 += v * b9;
	  t19 += v * b10;
	  t20 += v * b11;
	  t21 += v * b12;
	  t22 += v * b13;
	  t23 += v * b14;
	  t24 += v * b15;
	  v = a[10];
	  t10 += v * b0;
	  t11 += v * b1;
	  t12 += v * b2;
	  t13 += v * b3;
	  t14 += v * b4;
	  t15 += v * b5;
	  t16 += v * b6;
	  t17 += v * b7;
	  t18 += v * b8;
	  t19 += v * b9;
	  t20 += v * b10;
	  t21 += v * b11;
	  t22 += v * b12;
	  t23 += v * b13;
	  t24 += v * b14;
	  t25 += v * b15;
	  v = a[11];
	  t11 += v * b0;
	  t12 += v * b1;
	  t13 += v * b2;
	  t14 += v * b3;
	  t15 += v * b4;
	  t16 += v * b5;
	  t17 += v * b6;
	  t18 += v * b7;
	  t19 += v * b8;
	  t20 += v * b9;
	  t21 += v * b10;
	  t22 += v * b11;
	  t23 += v * b12;
	  t24 += v * b13;
	  t25 += v * b14;
	  t26 += v * b15;
	  v = a[12];
	  t12 += v * b0;
	  t13 += v * b1;
	  t14 += v * b2;
	  t15 += v * b3;
	  t16 += v * b4;
	  t17 += v * b5;
	  t18 += v * b6;
	  t19 += v * b7;
	  t20 += v * b8;
	  t21 += v * b9;
	  t22 += v * b10;
	  t23 += v * b11;
	  t24 += v * b12;
	  t25 += v * b13;
	  t26 += v * b14;
	  t27 += v * b15;
	  v = a[13];
	  t13 += v * b0;
	  t14 += v * b1;
	  t15 += v * b2;
	  t16 += v * b3;
	  t17 += v * b4;
	  t18 += v * b5;
	  t19 += v * b6;
	  t20 += v * b7;
	  t21 += v * b8;
	  t22 += v * b9;
	  t23 += v * b10;
	  t24 += v * b11;
	  t25 += v * b12;
	  t26 += v * b13;
	  t27 += v * b14;
	  t28 += v * b15;
	  v = a[14];
	  t14 += v * b0;
	  t15 += v * b1;
	  t16 += v * b2;
	  t17 += v * b3;
	  t18 += v * b4;
	  t19 += v * b5;
	  t20 += v * b6;
	  t21 += v * b7;
	  t22 += v * b8;
	  t23 += v * b9;
	  t24 += v * b10;
	  t25 += v * b11;
	  t26 += v * b12;
	  t27 += v * b13;
	  t28 += v * b14;
	  t29 += v * b15;
	  v = a[15];
	  t15 += v * b0;
	  t16 += v * b1;
	  t17 += v * b2;
	  t18 += v * b3;
	  t19 += v * b4;
	  t20 += v * b5;
	  t21 += v * b6;
	  t22 += v * b7;
	  t23 += v * b8;
	  t24 += v * b9;
	  t25 += v * b10;
	  t26 += v * b11;
	  t27 += v * b12;
	  t28 += v * b13;
	  t29 += v * b14;
	  t30 += v * b15;

	  t0  += 38 * t16;
	  t1  += 38 * t17;
	  t2  += 38 * t18;
	  t3  += 38 * t19;
	  t4  += 38 * t20;
	  t5  += 38 * t21;
	  t6  += 38 * t22;
	  t7  += 38 * t23;
	  t8  += 38 * t24;
	  t9  += 38 * t25;
	  t10 += 38 * t26;
	  t11 += 38 * t27;
	  t12 += 38 * t28;
	  t13 += 38 * t29;
	  t14 += 38 * t30;
	  // t15 left as is

	  // first car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  // second car
	  c = 1;
	  v =  t0 + c + 65535; c = Math.floor(v / 65536);  t0 = v - c * 65536;
	  v =  t1 + c + 65535; c = Math.floor(v / 65536);  t1 = v - c * 65536;
	  v =  t2 + c + 65535; c = Math.floor(v / 65536);  t2 = v - c * 65536;
	  v =  t3 + c + 65535; c = Math.floor(v / 65536);  t3 = v - c * 65536;
	  v =  t4 + c + 65535; c = Math.floor(v / 65536);  t4 = v - c * 65536;
	  v =  t5 + c + 65535; c = Math.floor(v / 65536);  t5 = v - c * 65536;
	  v =  t6 + c + 65535; c = Math.floor(v / 65536);  t6 = v - c * 65536;
	  v =  t7 + c + 65535; c = Math.floor(v / 65536);  t7 = v - c * 65536;
	  v =  t8 + c + 65535; c = Math.floor(v / 65536);  t8 = v - c * 65536;
	  v =  t9 + c + 65535; c = Math.floor(v / 65536);  t9 = v - c * 65536;
	  v = t10 + c + 65535; c = Math.floor(v / 65536); t10 = v - c * 65536;
	  v = t11 + c + 65535; c = Math.floor(v / 65536); t11 = v - c * 65536;
	  v = t12 + c + 65535; c = Math.floor(v / 65536); t12 = v - c * 65536;
	  v = t13 + c + 65535; c = Math.floor(v / 65536); t13 = v - c * 65536;
	  v = t14 + c + 65535; c = Math.floor(v / 65536); t14 = v - c * 65536;
	  v = t15 + c + 65535; c = Math.floor(v / 65536); t15 = v - c * 65536;
	  t0 += c-1 + 37 * (c-1);

	  o[ 0] = t0;
	  o[ 1] = t1;
	  o[ 2] = t2;
	  o[ 3] = t3;
	  o[ 4] = t4;
	  o[ 5] = t5;
	  o[ 6] = t6;
	  o[ 7] = t7;
	  o[ 8] = t8;
	  o[ 9] = t9;
	  o[10] = t10;
	  o[11] = t11;
	  o[12] = t12;
	  o[13] = t13;
	  o[14] = t14;
	  o[15] = t15;
	}

	function S(o, a) {
	  M(o, a, a);
	}

	function inv25519(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 253; a >= 0; a--) {
	    S(c, c);
	    if(a !== 2 && a !== 4) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function pow2523(o, i) {
	  var c = gf();
	  var a;
	  for (a = 0; a < 16; a++) c[a] = i[a];
	  for (a = 250; a >= 0; a--) {
	      S(c, c);
	      if(a !== 1) M(c, c, i);
	  }
	  for (a = 0; a < 16; a++) o[a] = c[a];
	}

	function crypto_scalarmult(q, n, p) {
	  var z = new Uint8Array(32);
	  var x = new Float64Array(80), r, i;
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf();
	  for (i = 0; i < 31; i++) z[i] = n[i];
	  z[31]=(n[31]&127)|64;
	  z[0]&=248;
	  unpack25519(x,p);
	  for (i = 0; i < 16; i++) {
	    b[i]=x[i];
	    d[i]=a[i]=c[i]=0;
	  }
	  a[0]=d[0]=1;
	  for (i=254; i>=0; --i) {
	    r=(z[i>>>3]>>>(i&7))&1;
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	    A(e,a,c);
	    Z(a,a,c);
	    A(c,b,d);
	    Z(b,b,d);
	    S(d,e);
	    S(f,a);
	    M(a,c,a);
	    M(c,b,e);
	    A(e,a,c);
	    Z(a,a,c);
	    S(b,a);
	    Z(c,d,f);
	    M(a,c,_121665);
	    A(a,a,d);
	    M(c,c,a);
	    M(a,d,f);
	    M(d,b,x);
	    S(b,e);
	    sel25519(a,b,r);
	    sel25519(c,d,r);
	  }
	  for (i = 0; i < 16; i++) {
	    x[i+16]=a[i];
	    x[i+32]=c[i];
	    x[i+48]=b[i];
	    x[i+64]=d[i];
	  }
	  var x32 = x.subarray(32);
	  var x16 = x.subarray(16);
	  inv25519(x32,x32);
	  M(x16,x16,x32);
	  pack25519(q,x16);
	  return 0;
	}

	function crypto_scalarmult_base(q, n) {
	  return crypto_scalarmult(q, n, _9);
	}

	function crypto_box_keypair(y, x) {
	  randombytes(x, 32);
	  return crypto_scalarmult_base(y, x);
	}

	function crypto_box_beforenm(k, y, x) {
	  var s = new Uint8Array(32);
	  crypto_scalarmult(s, x, y);
	  return crypto_core_hsalsa20(k, _0, s, sigma);
	}

	var crypto_box_afternm = crypto_secretbox;
	var crypto_box_open_afternm = crypto_secretbox_open;

	function crypto_box(c, m, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_afternm(c, m, d, n, k);
	}

	function crypto_box_open(m, c, d, n, y, x) {
	  var k = new Uint8Array(32);
	  crypto_box_beforenm(k, y, x);
	  return crypto_box_open_afternm(m, c, d, n, k);
	}

	var K = [
	  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	];

	function crypto_hashblocks_hl(hh, hl, m, n) {
	  var wh = new Int32Array(16), wl = new Int32Array(16),
	      bh0, bh1, bh2, bh3, bh4, bh5, bh6, bh7,
	      bl0, bl1, bl2, bl3, bl4, bl5, bl6, bl7,
	      th, tl, i, j, h, l, a, b, c, d;

	  var ah0 = hh[0],
	      ah1 = hh[1],
	      ah2 = hh[2],
	      ah3 = hh[3],
	      ah4 = hh[4],
	      ah5 = hh[5],
	      ah6 = hh[6],
	      ah7 = hh[7],

	      al0 = hl[0],
	      al1 = hl[1],
	      al2 = hl[2],
	      al3 = hl[3],
	      al4 = hl[4],
	      al5 = hl[5],
	      al6 = hl[6],
	      al7 = hl[7];

	  var pos = 0;
	  while (n >= 128) {
	    for (i = 0; i < 16; i++) {
	      j = 8 * i + pos;
	      wh[i] = (m[j+0] << 24) | (m[j+1] << 16) | (m[j+2] << 8) | m[j+3];
	      wl[i] = (m[j+4] << 24) | (m[j+5] << 16) | (m[j+6] << 8) | m[j+7];
	    }
	    for (i = 0; i < 80; i++) {
	      bh0 = ah0;
	      bh1 = ah1;
	      bh2 = ah2;
	      bh3 = ah3;
	      bh4 = ah4;
	      bh5 = ah5;
	      bh6 = ah6;
	      bh7 = ah7;

	      bl0 = al0;
	      bl1 = al1;
	      bl2 = al2;
	      bl3 = al3;
	      bl4 = al4;
	      bl5 = al5;
	      bl6 = al6;
	      bl7 = al7;

	      // add
	      h = ah7;
	      l = al7;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma1
	      h = ((ah4 >>> 14) | (al4 << (32-14))) ^ ((ah4 >>> 18) | (al4 << (32-18))) ^ ((al4 >>> (41-32)) | (ah4 << (32-(41-32))));
	      l = ((al4 >>> 14) | (ah4 << (32-14))) ^ ((al4 >>> 18) | (ah4 << (32-18))) ^ ((ah4 >>> (41-32)) | (al4 << (32-(41-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Ch
	      h = (ah4 & ah5) ^ (~ah4 & ah6);
	      l = (al4 & al5) ^ (~al4 & al6);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // K
	      h = K[i*2];
	      l = K[i*2+1];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // w
	      h = wh[i%16];
	      l = wl[i%16];

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      th = c & 0xffff | d << 16;
	      tl = a & 0xffff | b << 16;

	      // add
	      h = th;
	      l = tl;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      // Sigma0
	      h = ((ah0 >>> 28) | (al0 << (32-28))) ^ ((al0 >>> (34-32)) | (ah0 << (32-(34-32)))) ^ ((al0 >>> (39-32)) | (ah0 << (32-(39-32))));
	      l = ((al0 >>> 28) | (ah0 << (32-28))) ^ ((ah0 >>> (34-32)) | (al0 << (32-(34-32)))) ^ ((ah0 >>> (39-32)) | (al0 << (32-(39-32))));

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      // Maj
	      h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
	      l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh7 = (c & 0xffff) | (d << 16);
	      bl7 = (a & 0xffff) | (b << 16);

	      // add
	      h = bh3;
	      l = bl3;

	      a = l & 0xffff; b = l >>> 16;
	      c = h & 0xffff; d = h >>> 16;

	      h = th;
	      l = tl;

	      a += l & 0xffff; b += l >>> 16;
	      c += h & 0xffff; d += h >>> 16;

	      b += a >>> 16;
	      c += b >>> 16;
	      d += c >>> 16;

	      bh3 = (c & 0xffff) | (d << 16);
	      bl3 = (a & 0xffff) | (b << 16);

	      ah1 = bh0;
	      ah2 = bh1;
	      ah3 = bh2;
	      ah4 = bh3;
	      ah5 = bh4;
	      ah6 = bh5;
	      ah7 = bh6;
	      ah0 = bh7;

	      al1 = bl0;
	      al2 = bl1;
	      al3 = bl2;
	      al4 = bl3;
	      al5 = bl4;
	      al6 = bl5;
	      al7 = bl6;
	      al0 = bl7;

	      if (i%16 === 15) {
	        for (j = 0; j < 16; j++) {
	          // add
	          h = wh[j];
	          l = wl[j];

	          a = l & 0xffff; b = l >>> 16;
	          c = h & 0xffff; d = h >>> 16;

	          h = wh[(j+9)%16];
	          l = wl[(j+9)%16];

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma0
	          th = wh[(j+1)%16];
	          tl = wl[(j+1)%16];
	          h = ((th >>> 1) | (tl << (32-1))) ^ ((th >>> 8) | (tl << (32-8))) ^ (th >>> 7);
	          l = ((tl >>> 1) | (th << (32-1))) ^ ((tl >>> 8) | (th << (32-8))) ^ ((tl >>> 7) | (th << (32-7)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          // sigma1
	          th = wh[(j+14)%16];
	          tl = wl[(j+14)%16];
	          h = ((th >>> 19) | (tl << (32-19))) ^ ((tl >>> (61-32)) | (th << (32-(61-32)))) ^ (th >>> 6);
	          l = ((tl >>> 19) | (th << (32-19))) ^ ((th >>> (61-32)) | (tl << (32-(61-32)))) ^ ((tl >>> 6) | (th << (32-6)));

	          a += l & 0xffff; b += l >>> 16;
	          c += h & 0xffff; d += h >>> 16;

	          b += a >>> 16;
	          c += b >>> 16;
	          d += c >>> 16;

	          wh[j] = (c & 0xffff) | (d << 16);
	          wl[j] = (a & 0xffff) | (b << 16);
	        }
	      }
	    }

	    // add
	    h = ah0;
	    l = al0;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[0];
	    l = hl[0];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[0] = ah0 = (c & 0xffff) | (d << 16);
	    hl[0] = al0 = (a & 0xffff) | (b << 16);

	    h = ah1;
	    l = al1;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[1];
	    l = hl[1];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[1] = ah1 = (c & 0xffff) | (d << 16);
	    hl[1] = al1 = (a & 0xffff) | (b << 16);

	    h = ah2;
	    l = al2;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[2];
	    l = hl[2];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[2] = ah2 = (c & 0xffff) | (d << 16);
	    hl[2] = al2 = (a & 0xffff) | (b << 16);

	    h = ah3;
	    l = al3;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[3];
	    l = hl[3];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[3] = ah3 = (c & 0xffff) | (d << 16);
	    hl[3] = al3 = (a & 0xffff) | (b << 16);

	    h = ah4;
	    l = al4;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[4];
	    l = hl[4];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[4] = ah4 = (c & 0xffff) | (d << 16);
	    hl[4] = al4 = (a & 0xffff) | (b << 16);

	    h = ah5;
	    l = al5;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[5];
	    l = hl[5];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[5] = ah5 = (c & 0xffff) | (d << 16);
	    hl[5] = al5 = (a & 0xffff) | (b << 16);

	    h = ah6;
	    l = al6;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[6];
	    l = hl[6];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[6] = ah6 = (c & 0xffff) | (d << 16);
	    hl[6] = al6 = (a & 0xffff) | (b << 16);

	    h = ah7;
	    l = al7;

	    a = l & 0xffff; b = l >>> 16;
	    c = h & 0xffff; d = h >>> 16;

	    h = hh[7];
	    l = hl[7];

	    a += l & 0xffff; b += l >>> 16;
	    c += h & 0xffff; d += h >>> 16;

	    b += a >>> 16;
	    c += b >>> 16;
	    d += c >>> 16;

	    hh[7] = ah7 = (c & 0xffff) | (d << 16);
	    hl[7] = al7 = (a & 0xffff) | (b << 16);

	    pos += 128;
	    n -= 128;
	  }

	  return n;
	}

	function crypto_hash(out, m, n) {
	  var hh = new Int32Array(8),
	      hl = new Int32Array(8),
	      x = new Uint8Array(256),
	      i, b = n;

	  hh[0] = 0x6a09e667;
	  hh[1] = 0xbb67ae85;
	  hh[2] = 0x3c6ef372;
	  hh[3] = 0xa54ff53a;
	  hh[4] = 0x510e527f;
	  hh[5] = 0x9b05688c;
	  hh[6] = 0x1f83d9ab;
	  hh[7] = 0x5be0cd19;

	  hl[0] = 0xf3bcc908;
	  hl[1] = 0x84caa73b;
	  hl[2] = 0xfe94f82b;
	  hl[3] = 0x5f1d36f1;
	  hl[4] = 0xade682d1;
	  hl[5] = 0x2b3e6c1f;
	  hl[6] = 0xfb41bd6b;
	  hl[7] = 0x137e2179;

	  crypto_hashblocks_hl(hh, hl, m, n);
	  n %= 128;

	  for (i = 0; i < n; i++) x[i] = m[b-n+i];
	  x[n] = 128;

	  n = 256-128*(n<112?1:0);
	  x[n-9] = 0;
	  ts64(x, n-8,  (b / 0x20000000) | 0, b << 3);
	  crypto_hashblocks_hl(hh, hl, x, n);

	  for (i = 0; i < 8; i++) ts64(out, 8*i, hh[i], hl[i]);

	  return 0;
	}

	function add(p, q) {
	  var a = gf(), b = gf(), c = gf(),
	      d = gf(), e = gf(), f = gf(),
	      g = gf(), h = gf(), t = gf();

	  Z(a, p[1], p[0]);
	  Z(t, q[1], q[0]);
	  M(a, a, t);
	  A(b, p[0], p[1]);
	  A(t, q[0], q[1]);
	  M(b, b, t);
	  M(c, p[3], q[3]);
	  M(c, c, D2);
	  M(d, p[2], q[2]);
	  A(d, d, d);
	  Z(e, b, a);
	  Z(f, d, c);
	  A(g, d, c);
	  A(h, b, a);

	  M(p[0], e, f);
	  M(p[1], h, g);
	  M(p[2], g, f);
	  M(p[3], e, h);
	}

	function cswap(p, q, b) {
	  var i;
	  for (i = 0; i < 4; i++) {
	    sel25519(p[i], q[i], b);
	  }
	}

	function pack(r, p) {
	  var tx = gf(), ty = gf(), zi = gf();
	  inv25519(zi, p[2]);
	  M(tx, p[0], zi);
	  M(ty, p[1], zi);
	  pack25519(r, ty);
	  r[31] ^= par25519(tx) << 7;
	}

	function scalarmult(p, q, s) {
	  var b, i;
	  set25519(p[0], gf0);
	  set25519(p[1], gf1);
	  set25519(p[2], gf1);
	  set25519(p[3], gf0);
	  for (i = 255; i >= 0; --i) {
	    b = (s[(i/8)|0] >> (i&7)) & 1;
	    cswap(p, q, b);
	    add(q, p);
	    add(p, p);
	    cswap(p, q, b);
	  }
	}

	function scalarbase(p, s) {
	  var q = [gf(), gf(), gf(), gf()];
	  set25519(q[0], X);
	  set25519(q[1], Y);
	  set25519(q[2], gf1);
	  M(q[3], X, Y);
	  scalarmult(p, q, s);
	}

	function crypto_sign_keypair(pk, sk, seeded) {
	  var d = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()];
	  var i;

	  if (!seeded) randombytes(sk, 32);
	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  scalarbase(p, d);
	  pack(pk, p);

	  for (i = 0; i < 32; i++) sk[i+32] = pk[i];
	  return 0;
	}

	var L = new Float64Array([0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2, 0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10]);

	function modL(r, x) {
	  var carry, i, j, k;
	  for (i = 63; i >= 32; --i) {
	    carry = 0;
	    for (j = i - 32, k = i - 12; j < k; ++j) {
	      x[j] += carry - 16 * x[i] * L[j - (i - 32)];
	      carry = (x[j] + 128) >> 8;
	      x[j] -= carry * 256;
	    }
	    x[j] += carry;
	    x[i] = 0;
	  }
	  carry = 0;
	  for (j = 0; j < 32; j++) {
	    x[j] += carry - (x[31] >> 4) * L[j];
	    carry = x[j] >> 8;
	    x[j] &= 255;
	  }
	  for (j = 0; j < 32; j++) x[j] -= carry * L[j];
	  for (i = 0; i < 32; i++) {
	    x[i+1] += x[i] >> 8;
	    r[i] = x[i] & 255;
	  }
	}

	function reduce(r) {
	  var x = new Float64Array(64), i;
	  for (i = 0; i < 64; i++) x[i] = r[i];
	  for (i = 0; i < 64; i++) r[i] = 0;
	  modL(r, x);
	}

	// Note: difference from C - smlen returned, not passed as argument.
	function crypto_sign(sm, m, n, sk) {
	  var d = new Uint8Array(64), h = new Uint8Array(64), r = new Uint8Array(64);
	  var i, j, x = new Float64Array(64);
	  var p = [gf(), gf(), gf(), gf()];

	  crypto_hash(d, sk, 32);
	  d[0] &= 248;
	  d[31] &= 127;
	  d[31] |= 64;

	  var smlen = n + 64;
	  for (i = 0; i < n; i++) sm[64 + i] = m[i];
	  for (i = 0; i < 32; i++) sm[32 + i] = d[32 + i];

	  crypto_hash(r, sm.subarray(32), n+32);
	  reduce(r);
	  scalarbase(p, r);
	  pack(sm, p);

	  for (i = 32; i < 64; i++) sm[i] = sk[i];
	  crypto_hash(h, sm, n + 64);
	  reduce(h);

	  for (i = 0; i < 64; i++) x[i] = 0;
	  for (i = 0; i < 32; i++) x[i] = r[i];
	  for (i = 0; i < 32; i++) {
	    for (j = 0; j < 32; j++) {
	      x[i+j] += h[i] * d[j];
	    }
	  }

	  modL(sm.subarray(32), x);
	  return smlen;
	}

	function unpackneg(r, p) {
	  var t = gf(), chk = gf(), num = gf(),
	      den = gf(), den2 = gf(), den4 = gf(),
	      den6 = gf();

	  set25519(r[2], gf1);
	  unpack25519(r[1], p);
	  S(num, r[1]);
	  M(den, num, D);
	  Z(num, num, r[2]);
	  A(den, r[2], den);

	  S(den2, den);
	  S(den4, den2);
	  M(den6, den4, den2);
	  M(t, den6, num);
	  M(t, t, den);

	  pow2523(t, t);
	  M(t, t, num);
	  M(t, t, den);
	  M(t, t, den);
	  M(r[0], t, den);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) M(r[0], r[0], I);

	  S(chk, r[0]);
	  M(chk, chk, den);
	  if (neq25519(chk, num)) return -1;

	  if (par25519(r[0]) === (p[31]>>7)) Z(r[0], gf0, r[0]);

	  M(r[3], r[0], r[1]);
	  return 0;
	}

	function crypto_sign_open(m, sm, n, pk) {
	  var i, mlen;
	  var t = new Uint8Array(32), h = new Uint8Array(64);
	  var p = [gf(), gf(), gf(), gf()],
	      q = [gf(), gf(), gf(), gf()];

	  mlen = -1;
	  if (n < 64) return -1;

	  if (unpackneg(q, pk)) return -1;

	  for (i = 0; i < n; i++) m[i] = sm[i];
	  for (i = 0; i < 32; i++) m[i+32] = pk[i];
	  crypto_hash(h, m, n);
	  reduce(h);
	  scalarmult(p, q, h);

	  scalarbase(q, sm.subarray(32));
	  add(p, q);
	  pack(t, p);

	  n -= 64;
	  if (crypto_verify_32(sm, 0, t, 0)) {
	    for (i = 0; i < n; i++) m[i] = 0;
	    return -1;
	  }

	  for (i = 0; i < n; i++) m[i] = sm[i + 64];
	  mlen = n;
	  return mlen;
	}

	var crypto_secretbox_KEYBYTES = 32,
	    crypto_secretbox_NONCEBYTES = 24,
	    crypto_secretbox_ZEROBYTES = 32,
	    crypto_secretbox_BOXZEROBYTES = 16,
	    crypto_scalarmult_BYTES = 32,
	    crypto_scalarmult_SCALARBYTES = 32,
	    crypto_box_PUBLICKEYBYTES = 32,
	    crypto_box_SECRETKEYBYTES = 32,
	    crypto_box_BEFORENMBYTES = 32,
	    crypto_box_NONCEBYTES = crypto_secretbox_NONCEBYTES,
	    crypto_box_ZEROBYTES = crypto_secretbox_ZEROBYTES,
	    crypto_box_BOXZEROBYTES = crypto_secretbox_BOXZEROBYTES,
	    crypto_sign_BYTES = 64,
	    crypto_sign_PUBLICKEYBYTES = 32,
	    crypto_sign_SECRETKEYBYTES = 64,
	    crypto_sign_SEEDBYTES = 32,
	    crypto_hash_BYTES = 64;

	nacl.lowlevel = {
	  crypto_core_hsalsa20: crypto_core_hsalsa20,
	  crypto_stream_xor: crypto_stream_xor,
	  crypto_stream: crypto_stream,
	  crypto_stream_salsa20_xor: crypto_stream_salsa20_xor,
	  crypto_stream_salsa20: crypto_stream_salsa20,
	  crypto_onetimeauth: crypto_onetimeauth,
	  crypto_onetimeauth_verify: crypto_onetimeauth_verify,
	  crypto_verify_16: crypto_verify_16,
	  crypto_verify_32: crypto_verify_32,
	  crypto_secretbox: crypto_secretbox,
	  crypto_secretbox_open: crypto_secretbox_open,
	  crypto_scalarmult: crypto_scalarmult,
	  crypto_scalarmult_base: crypto_scalarmult_base,
	  crypto_box_beforenm: crypto_box_beforenm,
	  crypto_box_afternm: crypto_box_afternm,
	  crypto_box: crypto_box,
	  crypto_box_open: crypto_box_open,
	  crypto_box_keypair: crypto_box_keypair,
	  crypto_hash: crypto_hash,
	  crypto_sign: crypto_sign,
	  crypto_sign_keypair: crypto_sign_keypair,
	  crypto_sign_open: crypto_sign_open,

	  crypto_secretbox_KEYBYTES: crypto_secretbox_KEYBYTES,
	  crypto_secretbox_NONCEBYTES: crypto_secretbox_NONCEBYTES,
	  crypto_secretbox_ZEROBYTES: crypto_secretbox_ZEROBYTES,
	  crypto_secretbox_BOXZEROBYTES: crypto_secretbox_BOXZEROBYTES,
	  crypto_scalarmult_BYTES: crypto_scalarmult_BYTES,
	  crypto_scalarmult_SCALARBYTES: crypto_scalarmult_SCALARBYTES,
	  crypto_box_PUBLICKEYBYTES: crypto_box_PUBLICKEYBYTES,
	  crypto_box_SECRETKEYBYTES: crypto_box_SECRETKEYBYTES,
	  crypto_box_BEFORENMBYTES: crypto_box_BEFORENMBYTES,
	  crypto_box_NONCEBYTES: crypto_box_NONCEBYTES,
	  crypto_box_ZEROBYTES: crypto_box_ZEROBYTES,
	  crypto_box_BOXZEROBYTES: crypto_box_BOXZEROBYTES,
	  crypto_sign_BYTES: crypto_sign_BYTES,
	  crypto_sign_PUBLICKEYBYTES: crypto_sign_PUBLICKEYBYTES,
	  crypto_sign_SECRETKEYBYTES: crypto_sign_SECRETKEYBYTES,
	  crypto_sign_SEEDBYTES: crypto_sign_SEEDBYTES,
	  crypto_hash_BYTES: crypto_hash_BYTES
	};

	/* High-level API */

	function checkLengths(k, n) {
	  if (k.length !== crypto_secretbox_KEYBYTES) throw new Error('bad key size');
	  if (n.length !== crypto_secretbox_NONCEBYTES) throw new Error('bad nonce size');
	}

	function checkBoxLengths(pk, sk) {
	  if (pk.length !== crypto_box_PUBLICKEYBYTES) throw new Error('bad public key size');
	  if (sk.length !== crypto_box_SECRETKEYBYTES) throw new Error('bad secret key size');
	}

	function checkArrayTypes() {
	  for (var i = 0; i < arguments.length; i++) {
	    if (!(arguments[i] instanceof Uint8Array))
	      throw new TypeError('unexpected type, use Uint8Array');
	  }
	}

	function cleanup(arr) {
	  for (var i = 0; i < arr.length; i++) arr[i] = 0;
	}

	nacl.randomBytes = function(n) {
	  var b = new Uint8Array(n);
	  randombytes(b, n);
	  return b;
	};

	nacl.secretbox = function(msg, nonce, key) {
	  checkArrayTypes(msg, nonce, key);
	  checkLengths(key, nonce);
	  var m = new Uint8Array(crypto_secretbox_ZEROBYTES + msg.length);
	  var c = new Uint8Array(m.length);
	  for (var i = 0; i < msg.length; i++) m[i+crypto_secretbox_ZEROBYTES] = msg[i];
	  crypto_secretbox(c, m, m.length, nonce, key);
	  return c.subarray(crypto_secretbox_BOXZEROBYTES);
	};

	nacl.secretbox.open = function(box, nonce, key) {
	  checkArrayTypes(box, nonce, key);
	  checkLengths(key, nonce);
	  var c = new Uint8Array(crypto_secretbox_BOXZEROBYTES + box.length);
	  var m = new Uint8Array(c.length);
	  for (var i = 0; i < box.length; i++) c[i+crypto_secretbox_BOXZEROBYTES] = box[i];
	  if (c.length < 32) return null;
	  if (crypto_secretbox_open(m, c, c.length, nonce, key) !== 0) return null;
	  return m.subarray(crypto_secretbox_ZEROBYTES);
	};

	nacl.secretbox.keyLength = crypto_secretbox_KEYBYTES;
	nacl.secretbox.nonceLength = crypto_secretbox_NONCEBYTES;
	nacl.secretbox.overheadLength = crypto_secretbox_BOXZEROBYTES;

	nacl.scalarMult = function(n, p) {
	  checkArrayTypes(n, p);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  if (p.length !== crypto_scalarmult_BYTES) throw new Error('bad p size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult(q, n, p);
	  return q;
	};

	nacl.scalarMult.base = function(n) {
	  checkArrayTypes(n);
	  if (n.length !== crypto_scalarmult_SCALARBYTES) throw new Error('bad n size');
	  var q = new Uint8Array(crypto_scalarmult_BYTES);
	  crypto_scalarmult_base(q, n);
	  return q;
	};

	nacl.scalarMult.scalarLength = crypto_scalarmult_SCALARBYTES;
	nacl.scalarMult.groupElementLength = crypto_scalarmult_BYTES;

	nacl.box = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox(msg, nonce, k);
	};

	nacl.box.before = function(publicKey, secretKey) {
	  checkArrayTypes(publicKey, secretKey);
	  checkBoxLengths(publicKey, secretKey);
	  var k = new Uint8Array(crypto_box_BEFORENMBYTES);
	  crypto_box_beforenm(k, publicKey, secretKey);
	  return k;
	};

	nacl.box.after = nacl.secretbox;

	nacl.box.open = function(msg, nonce, publicKey, secretKey) {
	  var k = nacl.box.before(publicKey, secretKey);
	  return nacl.secretbox.open(msg, nonce, k);
	};

	nacl.box.open.after = nacl.secretbox.open;

	nacl.box.keyPair = function() {
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_box_SECRETKEYBYTES);
	  crypto_box_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.box.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_box_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_box_PUBLICKEYBYTES);
	  crypto_scalarmult_base(pk, secretKey);
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.box.publicKeyLength = crypto_box_PUBLICKEYBYTES;
	nacl.box.secretKeyLength = crypto_box_SECRETKEYBYTES;
	nacl.box.sharedKeyLength = crypto_box_BEFORENMBYTES;
	nacl.box.nonceLength = crypto_box_NONCEBYTES;
	nacl.box.overheadLength = nacl.secretbox.overheadLength;

	nacl.sign = function(msg, secretKey) {
	  checkArrayTypes(msg, secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var signedMsg = new Uint8Array(crypto_sign_BYTES+msg.length);
	  crypto_sign(signedMsg, msg, msg.length, secretKey);
	  return signedMsg;
	};

	nacl.sign.open = function(signedMsg, publicKey) {
	  checkArrayTypes(signedMsg, publicKey);
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var tmp = new Uint8Array(signedMsg.length);
	  var mlen = crypto_sign_open(tmp, signedMsg, signedMsg.length, publicKey);
	  if (mlen < 0) return null;
	  var m = new Uint8Array(mlen);
	  for (var i = 0; i < m.length; i++) m[i] = tmp[i];
	  return m;
	};

	nacl.sign.detached = function(msg, secretKey) {
	  var signedMsg = nacl.sign(msg, secretKey);
	  var sig = new Uint8Array(crypto_sign_BYTES);
	  for (var i = 0; i < sig.length; i++) sig[i] = signedMsg[i];
	  return sig;
	};

	nacl.sign.detached.verify = function(msg, sig, publicKey) {
	  checkArrayTypes(msg, sig, publicKey);
	  if (sig.length !== crypto_sign_BYTES)
	    throw new Error('bad signature size');
	  if (publicKey.length !== crypto_sign_PUBLICKEYBYTES)
	    throw new Error('bad public key size');
	  var sm = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var m = new Uint8Array(crypto_sign_BYTES + msg.length);
	  var i;
	  for (i = 0; i < crypto_sign_BYTES; i++) sm[i] = sig[i];
	  for (i = 0; i < msg.length; i++) sm[i+crypto_sign_BYTES] = msg[i];
	  return (crypto_sign_open(m, sm, sm.length, publicKey) >= 0);
	};

	nacl.sign.keyPair = function() {
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  crypto_sign_keypair(pk, sk);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.keyPair.fromSecretKey = function(secretKey) {
	  checkArrayTypes(secretKey);
	  if (secretKey.length !== crypto_sign_SECRETKEYBYTES)
	    throw new Error('bad secret key size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  for (var i = 0; i < pk.length; i++) pk[i] = secretKey[32+i];
	  return {publicKey: pk, secretKey: new Uint8Array(secretKey)};
	};

	nacl.sign.keyPair.fromSeed = function(seed) {
	  checkArrayTypes(seed);
	  if (seed.length !== crypto_sign_SEEDBYTES)
	    throw new Error('bad seed size');
	  var pk = new Uint8Array(crypto_sign_PUBLICKEYBYTES);
	  var sk = new Uint8Array(crypto_sign_SECRETKEYBYTES);
	  for (var i = 0; i < 32; i++) sk[i] = seed[i];
	  crypto_sign_keypair(pk, sk, true);
	  return {publicKey: pk, secretKey: sk};
	};

	nacl.sign.publicKeyLength = crypto_sign_PUBLICKEYBYTES;
	nacl.sign.secretKeyLength = crypto_sign_SECRETKEYBYTES;
	nacl.sign.seedLength = crypto_sign_SEEDBYTES;
	nacl.sign.signatureLength = crypto_sign_BYTES;

	nacl.hash = function(msg) {
	  checkArrayTypes(msg);
	  var h = new Uint8Array(crypto_hash_BYTES);
	  crypto_hash(h, msg, msg.length);
	  return h;
	};

	nacl.hash.hashLength = crypto_hash_BYTES;

	nacl.verify = function(x, y) {
	  checkArrayTypes(x, y);
	  // Zero length arguments are considered not equal.
	  if (x.length === 0 || y.length === 0) return false;
	  if (x.length !== y.length) return false;
	  return (vn(x, 0, y, 0, x.length) === 0) ? true : false;
	};

	nacl.setPRNG = function(fn) {
	  randombytes = fn;
	};

	(function() {
	  // Initialize PRNG if environment provides CSPRNG.
	  // If not, methods calling randombytes will throw.
	  var crypto = typeof self !== 'undefined' ? (self.crypto || self.msCrypto) : null;
	  if (crypto && crypto.getRandomValues) {
	    // Browsers.
	    var QUOTA = 65536;
	    nacl.setPRNG(function(x, n) {
	      var i, v = new Uint8Array(n);
	      for (i = 0; i < n; i += QUOTA) {
	        crypto.getRandomValues(v.subarray(i, i + Math.min(n - i, QUOTA)));
	      }
	      for (i = 0; i < n; i++) x[i] = v[i];
	      cleanup(v);
	    });
	  } else if (true) {
	    // Node.js.
	    crypto = __webpack_require__(56);
	    if (crypto && crypto.randomBytes) {
	      nacl.setPRNG(function(x, n) {
	        var i, v = crypto.randomBytes(n);
	        for (i = 0; i < n; i++) x[i] = v[i];
	        cleanup(v);
	      });
	    }
	  }
	})();

	})(typeof module !== 'undefined' && module.exports ? module.exports : (self.nacl = self.nacl || {}));


/***/ }),
/* 56 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Written in 2014-2016 by Dmitry Chestnykh and Devi Mandiri.
	// Public domain.
	(function(root, f) {
	  'use strict';
	  if (typeof module !== 'undefined' && module.exports) module.exports = f();
	  else if (root.nacl) root.nacl.util = f();
	  else {
	    root.nacl = {};
	    root.nacl.util = f();
	  }
	}(this, function() {
	  'use strict';

	  var util = {};

	  function validateBase64(s) {
	    if (!(/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(s))) {
	      throw new TypeError('invalid encoding');
	    }
	  }

	  util.decodeUTF8 = function(s) {
	    if (typeof s !== 'string') throw new TypeError('expected string');
	    var i, d = unescape(encodeURIComponent(s)), b = new Uint8Array(d.length);
	    for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
	    return b;
	  };

	  util.encodeUTF8 = function(arr) {
	    var i, s = [];
	    for (i = 0; i < arr.length; i++) s.push(String.fromCharCode(arr[i]));
	    return decodeURIComponent(escape(s.join('')));
	  };

	  if (typeof atob === 'undefined') {
	    // Node.js

	    if (typeof Buffer.from !== 'undefined') {
	       // Node v6 and later
	      util.encodeBase64 = function (arr) { // v6 and later
	          return Buffer.from(arr).toString('base64');
	      };

	      util.decodeBase64 = function (s) {
	        validateBase64(s);
	        return new Uint8Array(Array.prototype.slice.call(Buffer.from(s, 'base64'), 0));
	      };

	    } else {
	      // Node earlier than v6
	      util.encodeBase64 = function (arr) { // v6 and later
	        return (new Buffer(arr)).toString('base64');
	      };

	      util.decodeBase64 = function(s) {
	        validateBase64(s);
	        return new Uint8Array(Array.prototype.slice.call(new Buffer(s, 'base64'), 0));
	      };
	    }

	  } else {
	    // Browsers

	    util.encodeBase64 = function(arr) {
	      var i, s = [], len = arr.length;
	      for (i = 0; i < len; i++) s.push(String.fromCharCode(arr[i]));
	      return btoa(s.join(''));
	    };

	    util.decodeBase64 = function(s) {
	      validateBase64(s);
	      var i, d = atob(s), b = new Uint8Array(d.length);
	      for (i = 0; i < d.length; i++) b[i] = d.charCodeAt(i);
	      return b;
	    };

	  }

	  return util;

	}));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(58).Buffer))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(59)
	var ieee754 = __webpack_require__(60)
	var isArray = __webpack_require__(61)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = (window).TYPED_ARRAY_SUPPORT !== undefined
	  ? (window).TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function getLens (b64) {
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=')
	  if (validLen === -1) validLen = len

	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4)

	  return [validLen, placeHoldersLen]
	}

	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function toByteArray (b64) {
	  var tmp
	  var lens = getLens(b64)
	  var validLen = lens[0]
	  var placeHoldersLen = lens[1]

	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

	  var curByte = 0

	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen

	  for (var i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)]
	    arr[curByte++] = (tmp >> 16) & 0xFF
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }

	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[curByte++] = tmp & 0xFF
	  }

	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[curByte++] = (tmp >> 8) & 0xFF
	    arr[curByte++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] +
	    lookup[num >> 12 & 0x3F] +
	    lookup[num >> 6 & 0x3F] +
	    lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF)
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(
	      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
	    ))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    )
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    )
	  }

	  return parts.join('')
	}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = (nBytes * 8) - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ }),
/* 61 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var dispatcher_1 = __webpack_require__(24);
	var timers_1 = __webpack_require__(12);
	var logger_1 = __webpack_require__(8);
	var Collections = __webpack_require__(9);
	var runtime_1 = __webpack_require__(2);
	var ConnectionManager = (function (_super) {
	    __extends(ConnectionManager, _super);
	    function ConnectionManager(key, options) {
	        var _this = this;
	        _super.call(this);
	        this.key = key;
	        this.options = options || {};
	        this.state = "initialized";
	        this.connection = null;
	        this.usingTLS = !!options.useTLS;
	        this.timeline = this.options.timeline;
	        this.errorCallbacks = this.buildErrorCallbacks();
	        this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks);
	        this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
	        var Network = runtime_1["default"].getNetwork();
	        Network.bind("online", function () {
	            _this.timeline.info({ netinfo: "online" });
	            if (_this.state === "connecting" || _this.state === "unavailable") {
	                _this.retryIn(0);
	            }
	        });
	        Network.bind("offline", function () {
	            _this.timeline.info({ netinfo: "offline" });
	            if (_this.connection) {
	                _this.sendActivityCheck();
	            }
	        });
	        this.updateStrategy();
	    }
	    ConnectionManager.prototype.connect = function () {
	        if (this.connection || this.runner) {
	            return;
	        }
	        if (!this.strategy.isSupported()) {
	            this.updateState("failed");
	            return;
	        }
	        this.updateState("connecting");
	        this.startConnecting();
	        this.setUnavailableTimer();
	    };
	    ;
	    ConnectionManager.prototype.send = function (data) {
	        if (this.connection) {
	            return this.connection.send(data);
	        }
	        else {
	            return false;
	        }
	    };
	    ;
	    ConnectionManager.prototype.send_event = function (name, data, channel) {
	        if (this.connection) {
	            return this.connection.send_event(name, data, channel);
	        }
	        else {
	            return false;
	        }
	    };
	    ;
	    ConnectionManager.prototype.disconnect = function () {
	        this.disconnectInternally();
	        this.updateState("disconnected");
	    };
	    ;
	    ConnectionManager.prototype.isUsingTLS = function () {
	        return this.usingTLS;
	    };
	    ;
	    ConnectionManager.prototype.startConnecting = function () {
	        var _this = this;
	        var callback = function (error, handshake) {
	            if (error) {
	                _this.runner = _this.strategy.connect(0, callback);
	            }
	            else {
	                if (handshake.action === "error") {
	                    _this.emit("error", { type: "HandshakeError", error: handshake.error });
	                    _this.timeline.error({ handshakeError: handshake.error });
	                }
	                else {
	                    _this.abortConnecting();
	                    _this.handshakeCallbacks[handshake.action](handshake);
	                }
	            }
	        };
	        this.runner = this.strategy.connect(0, callback);
	    };
	    ;
	    ConnectionManager.prototype.abortConnecting = function () {
	        if (this.runner) {
	            this.runner.abort();
	            this.runner = null;
	        }
	    };
	    ;
	    ConnectionManager.prototype.disconnectInternally = function () {
	        this.abortConnecting();
	        this.clearRetryTimer();
	        this.clearUnavailableTimer();
	        if (this.connection) {
	            var connection = this.abandonConnection();
	            connection.close();
	        }
	    };
	    ;
	    ConnectionManager.prototype.updateStrategy = function () {
	        this.strategy = this.options.getStrategy({
	            key: this.key,
	            timeline: this.timeline,
	            useTLS: this.usingTLS
	        });
	    };
	    ;
	    ConnectionManager.prototype.retryIn = function (delay) {
	        var _this = this;
	        this.timeline.info({ action: "retry", delay: delay });
	        if (delay > 0) {
	            this.emit("connecting_in", Math.round(delay / 1000));
	        }
	        this.retryTimer = new timers_1.OneOffTimer(delay || 0, function () {
	            _this.disconnectInternally();
	            _this.connect();
	        });
	    };
	    ;
	    ConnectionManager.prototype.clearRetryTimer = function () {
	        if (this.retryTimer) {
	            this.retryTimer.ensureAborted();
	            this.retryTimer = null;
	        }
	    };
	    ;
	    ConnectionManager.prototype.setUnavailableTimer = function () {
	        var _this = this;
	        this.unavailableTimer = new timers_1.OneOffTimer(this.options.unavailableTimeout, function () {
	            _this.updateState("unavailable");
	        });
	    };
	    ;
	    ConnectionManager.prototype.clearUnavailableTimer = function () {
	        if (this.unavailableTimer) {
	            this.unavailableTimer.ensureAborted();
	        }
	    };
	    ;
	    ConnectionManager.prototype.sendActivityCheck = function () {
	        var _this = this;
	        this.stopActivityCheck();
	        this.connection.ping();
	        this.activityTimer = new timers_1.OneOffTimer(this.options.pongTimeout, function () {
	            _this.timeline.error({ pong_timed_out: _this.options.pongTimeout });
	            _this.retryIn(0);
	        });
	    };
	    ;
	    ConnectionManager.prototype.resetActivityCheck = function () {
	        var _this = this;
	        this.stopActivityCheck();
	        if (this.connection && !this.connection.handlesActivityChecks()) {
	            this.activityTimer = new timers_1.OneOffTimer(this.activityTimeout, function () {
	                _this.sendActivityCheck();
	            });
	        }
	    };
	    ;
	    ConnectionManager.prototype.stopActivityCheck = function () {
	        if (this.activityTimer) {
	            this.activityTimer.ensureAborted();
	        }
	    };
	    ;
	    ConnectionManager.prototype.buildConnectionCallbacks = function (errorCallbacks) {
	        var _this = this;
	        return Collections.extend({}, errorCallbacks, {
	            message: function (message) {
	                _this.resetActivityCheck();
	                _this.emit('message', message);
	            },
	            ping: function () {
	                _this.send_event('pusher:pong', {});
	            },
	            activity: function () {
	                _this.resetActivityCheck();
	            },
	            error: function (error) {
	                _this.emit("error", { type: "WebSocketError", error: error });
	            },
	            closed: function () {
	                _this.abandonConnection();
	                if (_this.shouldRetry()) {
	                    _this.retryIn(1000);
	                }
	            }
	        });
	    };
	    ;
	    ConnectionManager.prototype.buildHandshakeCallbacks = function (errorCallbacks) {
	        var _this = this;
	        return Collections.extend({}, errorCallbacks, {
	            connected: function (handshake) {
	                _this.activityTimeout = Math.min(_this.options.activityTimeout, handshake.activityTimeout, handshake.connection.activityTimeout || Infinity);
	                _this.clearUnavailableTimer();
	                _this.setConnection(handshake.connection);
	                _this.socket_id = _this.connection.id;
	                _this.updateState("connected", { socket_id: _this.socket_id });
	            }
	        });
	    };
	    ;
	    ConnectionManager.prototype.buildErrorCallbacks = function () {
	        var _this = this;
	        var withErrorEmitted = function (callback) {
	            return function (result) {
	                if (result.error) {
	                    _this.emit("error", { type: "WebSocketError", error: result.error });
	                }
	                callback(result);
	            };
	        };
	        return {
	            tls_only: withErrorEmitted(function () {
	                _this.usingTLS = true;
	                _this.updateStrategy();
	                _this.retryIn(0);
	            }),
	            refused: withErrorEmitted(function () {
	                _this.disconnect();
	            }),
	            backoff: withErrorEmitted(function () {
	                _this.retryIn(1000);
	            }),
	            retry: withErrorEmitted(function () {
	                _this.retryIn(0);
	            })
	        };
	    };
	    ;
	    ConnectionManager.prototype.setConnection = function (connection) {
	        this.connection = connection;
	        for (var event in this.connectionCallbacks) {
	            this.connection.bind(event, this.connectionCallbacks[event]);
	        }
	        this.resetActivityCheck();
	    };
	    ;
	    ConnectionManager.prototype.abandonConnection = function () {
	        if (!this.connection) {
	            return;
	        }
	        this.stopActivityCheck();
	        for (var event in this.connectionCallbacks) {
	            this.connection.unbind(event, this.connectionCallbacks[event]);
	        }
	        var connection = this.connection;
	        this.connection = null;
	        return connection;
	    };
	    ConnectionManager.prototype.updateState = function (newState, data) {
	        var previousState = this.state;
	        this.state = newState;
	        if (previousState !== newState) {
	            var newStateDescription = newState;
	            if (newStateDescription === "connected") {
	                newStateDescription += " with new socket ID " + data.socket_id;
	            }
	            logger_1["default"].debug('State changed', previousState + ' -> ' + newStateDescription);
	            this.timeline.info({ state: newState, params: data });
	            this.emit('state_change', { previous: previousState, current: newState });
	            this.emit(newState, data);
	        }
	    };
	    ConnectionManager.prototype.shouldRetry = function () {
	        return this.state === "connecting" || this.state === "connected";
	    };
	    return ConnectionManager;
	}(dispatcher_1["default"]));
	exports.__esModule = true;
	exports["default"] = ConnectionManager;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var factory_1 = __webpack_require__(43);
	var Errors = __webpack_require__(31);
	var Channels = (function () {
	    function Channels() {
	        this.channels = {};
	    }
	    Channels.prototype.add = function (name, pusher) {
	        if (!this.channels[name]) {
	            this.channels[name] = createChannel(name, pusher);
	        }
	        return this.channels[name];
	    };
	    Channels.prototype.all = function () {
	        return Collections.values(this.channels);
	    };
	    Channels.prototype.find = function (name) {
	        return this.channels[name];
	    };
	    Channels.prototype.remove = function (name) {
	        var channel = this.channels[name];
	        delete this.channels[name];
	        return channel;
	    };
	    Channels.prototype.disconnect = function () {
	        Collections.objectApply(this.channels, function (channel) {
	            channel.disconnect();
	        });
	    };
	    return Channels;
	}());
	exports.__esModule = true;
	exports["default"] = Channels;
	function createChannel(name, pusher) {
	    if (name.indexOf('private-encrypted-') === 0) {
	        if (navigator.product == "ReactNative") {
	            var errorMsg = "Encrypted channels are not yet supported when using React Native builds.";
	            throw new Errors.UnsupportedFeature(errorMsg);
	        }
	        return factory_1["default"].createEncryptedChannel(name, pusher);
	    }
	    else if (name.indexOf('private-') === 0) {
	        return factory_1["default"].createPrivateChannel(name, pusher);
	    }
	    else if (name.indexOf('presence-') === 0) {
	        return factory_1["default"].createPresenceChannel(name, pusher);
	    }
	    else {
	        return factory_1["default"].createChannel(name, pusher);
	    }
	}


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var factory_1 = __webpack_require__(43);
	var util_1 = __webpack_require__(11);
	var Errors = __webpack_require__(31);
	var Collections = __webpack_require__(9);
	var TransportStrategy = (function () {
	    function TransportStrategy(name, priority, transport, options) {
	        this.name = name;
	        this.priority = priority;
	        this.transport = transport;
	        this.options = options || {};
	    }
	    TransportStrategy.prototype.isSupported = function () {
	        return this.transport.isSupported({
	            useTLS: this.options.useTLS
	        });
	    };
	    TransportStrategy.prototype.connect = function (minPriority, callback) {
	        var _this = this;
	        if (!this.isSupported()) {
	            return failAttempt(new Errors.UnsupportedStrategy(), callback);
	        }
	        else if (this.priority < minPriority) {
	            return failAttempt(new Errors.TransportPriorityTooLow(), callback);
	        }
	        var connected = false;
	        var transport = this.transport.createConnection(this.name, this.priority, this.options.key, this.options);
	        var handshake = null;
	        var onInitialized = function () {
	            transport.unbind("initialized", onInitialized);
	            transport.connect();
	        };
	        var onOpen = function () {
	            handshake = factory_1["default"].createHandshake(transport, function (result) {
	                connected = true;
	                unbindListeners();
	                callback(null, result);
	            });
	        };
	        var onError = function (error) {
	            unbindListeners();
	            callback(error);
	        };
	        var onClosed = function () {
	            unbindListeners();
	            var serializedTransport;
	            serializedTransport = Collections.safeJSONStringify(transport);
	            callback(new Errors.TransportClosed(serializedTransport));
	        };
	        var unbindListeners = function () {
	            transport.unbind("initialized", onInitialized);
	            transport.unbind("open", onOpen);
	            transport.unbind("error", onError);
	            transport.unbind("closed", onClosed);
	        };
	        transport.bind("initialized", onInitialized);
	        transport.bind("open", onOpen);
	        transport.bind("error", onError);
	        transport.bind("closed", onClosed);
	        transport.initialize();
	        return {
	            abort: function () {
	                if (connected) {
	                    return;
	                }
	                unbindListeners();
	                if (handshake) {
	                    handshake.close();
	                }
	                else {
	                    transport.close();
	                }
	            },
	            forceMinPriority: function (p) {
	                if (connected) {
	                    return;
	                }
	                if (_this.priority < p) {
	                    if (handshake) {
	                        handshake.close();
	                    }
	                    else {
	                        transport.close();
	                    }
	                }
	            }
	        };
	    };
	    return TransportStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = TransportStrategy;
	function failAttempt(error, callback) {
	    util_1["default"].defer(function () {
	        callback(error);
	    });
	    return {
	        abort: function () { },
	        forceMinPriority: function () { }
	    };
	}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var timers_1 = __webpack_require__(12);
	var SequentialStrategy = (function () {
	    function SequentialStrategy(strategies, options) {
	        this.strategies = strategies;
	        this.loop = Boolean(options.loop);
	        this.failFast = Boolean(options.failFast);
	        this.timeout = options.timeout;
	        this.timeoutLimit = options.timeoutLimit;
	    }
	    SequentialStrategy.prototype.isSupported = function () {
	        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
	    };
	    SequentialStrategy.prototype.connect = function (minPriority, callback) {
	        var _this = this;
	        var strategies = this.strategies;
	        var current = 0;
	        var timeout = this.timeout;
	        var runner = null;
	        var tryNextStrategy = function (error, handshake) {
	            if (handshake) {
	                callback(null, handshake);
	            }
	            else {
	                current = current + 1;
	                if (_this.loop) {
	                    current = current % strategies.length;
	                }
	                if (current < strategies.length) {
	                    if (timeout) {
	                        timeout = timeout * 2;
	                        if (_this.timeoutLimit) {
	                            timeout = Math.min(timeout, _this.timeoutLimit);
	                        }
	                    }
	                    runner = _this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: _this.failFast }, tryNextStrategy);
	                }
	                else {
	                    callback(true);
	                }
	            }
	        };
	        runner = this.tryStrategy(strategies[current], minPriority, { timeout: timeout, failFast: this.failFast }, tryNextStrategy);
	        return {
	            abort: function () {
	                runner.abort();
	            },
	            forceMinPriority: function (p) {
	                minPriority = p;
	                if (runner) {
	                    runner.forceMinPriority(p);
	                }
	            }
	        };
	    };
	    SequentialStrategy.prototype.tryStrategy = function (strategy, minPriority, options, callback) {
	        var timer = null;
	        var runner = null;
	        if (options.timeout > 0) {
	            timer = new timers_1.OneOffTimer(options.timeout, function () {
	                runner.abort();
	                callback(true);
	            });
	        }
	        runner = strategy.connect(minPriority, function (error, handshake) {
	            if (error && timer && timer.isRunning() && !options.failFast) {
	                return;
	            }
	            if (timer) {
	                timer.ensureAborted();
	            }
	            callback(error, handshake);
	        });
	        return {
	            abort: function () {
	                if (timer) {
	                    timer.ensureAborted();
	                }
	                runner.abort();
	            },
	            forceMinPriority: function (p) {
	                runner.forceMinPriority(p);
	            }
	        };
	    };
	    return SequentialStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = SequentialStrategy;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var Collections = __webpack_require__(9);
	var util_1 = __webpack_require__(11);
	var BestConnectedEverStrategy = (function () {
	    function BestConnectedEverStrategy(strategies) {
	        this.strategies = strategies;
	    }
	    BestConnectedEverStrategy.prototype.isSupported = function () {
	        return Collections.any(this.strategies, util_1["default"].method("isSupported"));
	    };
	    BestConnectedEverStrategy.prototype.connect = function (minPriority, callback) {
	        return connect(this.strategies, minPriority, function (i, runners) {
	            return function (error, handshake) {
	                runners[i].error = error;
	                if (error) {
	                    if (allRunnersFailed(runners)) {
	                        callback(true);
	                    }
	                    return;
	                }
	                Collections.apply(runners, function (runner) {
	                    runner.forceMinPriority(handshake.transport.priority);
	                });
	                callback(null, handshake);
	            };
	        });
	    };
	    return BestConnectedEverStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = BestConnectedEverStrategy;
	function connect(strategies, minPriority, callbackBuilder) {
	    var runners = Collections.map(strategies, function (strategy, i, _, rs) {
	        return strategy.connect(minPriority, callbackBuilder(i, rs));
	    });
	    return {
	        abort: function () {
	            Collections.apply(runners, abortRunner);
	        },
	        forceMinPriority: function (p) {
	            Collections.apply(runners, function (runner) {
	                runner.forceMinPriority(p);
	            });
	        }
	    };
	}
	function allRunnersFailed(runners) {
	    return Collections.all(runners, function (runner) {
	        return Boolean(runner.error);
	    });
	}
	function abortRunner(runner) {
	    if (!runner.error && !runner.aborted) {
	        runner.abort();
	        runner.aborted = true;
	    }
	}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var util_1 = __webpack_require__(11);
	var runtime_1 = __webpack_require__(2);
	var sequential_strategy_1 = __webpack_require__(65);
	var Collections = __webpack_require__(9);
	var CachedStrategy = (function () {
	    function CachedStrategy(strategy, transports, options) {
	        this.strategy = strategy;
	        this.transports = transports;
	        this.ttl = options.ttl || 1800 * 1000;
	        this.usingTLS = options.useTLS;
	        this.timeline = options.timeline;
	    }
	    CachedStrategy.prototype.isSupported = function () {
	        return this.strategy.isSupported();
	    };
	    CachedStrategy.prototype.connect = function (minPriority, callback) {
	        var usingTLS = this.usingTLS;
	        var info = fetchTransportCache(usingTLS);
	        var strategies = [this.strategy];
	        if (info && info.timestamp + this.ttl >= util_1["default"].now()) {
	            var transport = this.transports[info.transport];
	            if (transport) {
	                this.timeline.info({
	                    cached: true,
	                    transport: info.transport,
	                    latency: info.latency
	                });
	                strategies.push(new sequential_strategy_1["default"]([transport], {
	                    timeout: info.latency * 2 + 1000,
	                    failFast: true
	                }));
	            }
	        }
	        var startTimestamp = util_1["default"].now();
	        var runner = strategies.pop().connect(minPriority, function cb(error, handshake) {
	            if (error) {
	                flushTransportCache(usingTLS);
	                if (strategies.length > 0) {
	                    startTimestamp = util_1["default"].now();
	                    runner = strategies.pop().connect(minPriority, cb);
	                }
	                else {
	                    callback(error);
	                }
	            }
	            else {
	                storeTransportCache(usingTLS, handshake.transport.name, util_1["default"].now() - startTimestamp);
	                callback(null, handshake);
	            }
	        });
	        return {
	            abort: function () {
	                runner.abort();
	            },
	            forceMinPriority: function (p) {
	                minPriority = p;
	                if (runner) {
	                    runner.forceMinPriority(p);
	                }
	            }
	        };
	    };
	    return CachedStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = CachedStrategy;
	function getTransportCacheKey(usingTLS) {
	    return "pusherTransport" + (usingTLS ? "TLS" : "NonTLS");
	}
	function fetchTransportCache(usingTLS) {
	    var storage = runtime_1["default"].getLocalStorage();
	    if (storage) {
	        try {
	            var serializedCache = storage[getTransportCacheKey(usingTLS)];
	            if (serializedCache) {
	                return JSON.parse(serializedCache);
	            }
	        }
	        catch (e) {
	            flushTransportCache(usingTLS);
	        }
	    }
	    return null;
	}
	function storeTransportCache(usingTLS, transport, latency) {
	    var storage = runtime_1["default"].getLocalStorage();
	    if (storage) {
	        try {
	            storage[getTransportCacheKey(usingTLS)] = Collections.safeJSONStringify({
	                timestamp: util_1["default"].now(),
	                transport: transport,
	                latency: latency
	            });
	        }
	        catch (e) {
	        }
	    }
	}
	function flushTransportCache(usingTLS) {
	    var storage = runtime_1["default"].getLocalStorage();
	    if (storage) {
	        try {
	            delete storage[getTransportCacheKey(usingTLS)];
	        }
	        catch (e) {
	        }
	    }
	}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var timers_1 = __webpack_require__(12);
	var DelayedStrategy = (function () {
	    function DelayedStrategy(strategy, _a) {
	        var number = _a.delay;
	        this.strategy = strategy;
	        this.options = { delay: number };
	    }
	    DelayedStrategy.prototype.isSupported = function () {
	        return this.strategy.isSupported();
	    };
	    DelayedStrategy.prototype.connect = function (minPriority, callback) {
	        var strategy = this.strategy;
	        var runner;
	        var timer = new timers_1.OneOffTimer(this.options.delay, function () {
	            runner = strategy.connect(minPriority, callback);
	        });
	        return {
	            abort: function () {
	                timer.ensureAborted();
	                if (runner) {
	                    runner.abort();
	                }
	            },
	            forceMinPriority: function (p) {
	                minPriority = p;
	                if (runner) {
	                    runner.forceMinPriority(p);
	                }
	            }
	        };
	    };
	    return DelayedStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = DelayedStrategy;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

	"use strict";
	var IfStrategy = (function () {
	    function IfStrategy(test, trueBranch, falseBranch) {
	        this.test = test;
	        this.trueBranch = trueBranch;
	        this.falseBranch = falseBranch;
	    }
	    IfStrategy.prototype.isSupported = function () {
	        var branch = this.test() ? this.trueBranch : this.falseBranch;
	        return branch.isSupported();
	    };
	    IfStrategy.prototype.connect = function (minPriority, callback) {
	        var branch = this.test() ? this.trueBranch : this.falseBranch;
	        return branch.connect(minPriority, callback);
	    };
	    return IfStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = IfStrategy;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

	"use strict";
	var FirstConnectedStrategy = (function () {
	    function FirstConnectedStrategy(strategy) {
	        this.strategy = strategy;
	    }
	    FirstConnectedStrategy.prototype.isSupported = function () {
	        return this.strategy.isSupported();
	    };
	    FirstConnectedStrategy.prototype.connect = function (minPriority, callback) {
	        var runner = this.strategy.connect(minPriority, function (error, handshake) {
	            if (handshake) {
	                runner.abort();
	            }
	            callback(error, handshake);
	        });
	        return runner;
	    };
	    return FirstConnectedStrategy;
	}());
	exports.__esModule = true;
	exports["default"] = FirstConnectedStrategy;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var defaults_1 = __webpack_require__(5);
	exports.getGlobalConfig = function () {
	    return {
	        wsHost: defaults_1["default"].host,
	        wsPort: defaults_1["default"].ws_port,
	        wssPort: defaults_1["default"].wss_port,
	        wsPath: defaults_1["default"].ws_path,
	        httpHost: defaults_1["default"].sockjs_host,
	        httpPort: defaults_1["default"].sockjs_http_port,
	        httpsPort: defaults_1["default"].sockjs_https_port,
	        httpPath: defaults_1["default"].sockjs_path,
	        statsHost: defaults_1["default"].stats_host,
	        authEndpoint: defaults_1["default"].channel_auth_endpoint,
	        authTransport: defaults_1["default"].channel_auth_transport,
	        activity_timeout: defaults_1["default"].activity_timeout,
	        pong_timeout: defaults_1["default"].pong_timeout,
	        unavailable_timeout: defaults_1["default"].unavailable_timeout
	    };
	};
	exports.getClusterConfig = function (clusterName) {
	    return {
	        wsHost: "ws-" + clusterName + ".pusher.com",
	        httpHost: "sockjs-" + clusterName + ".pusher.com"
	    };
	};


/***/ })
/******/ ])
});
;

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BasixModal_vue__ = __webpack_require__(633);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d8de89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BasixModal_vue__ = __webpack_require__(643);
function injectStyle (ssrContext) {
  __webpack_require__(641)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_BasixModal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9d8de89a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_BasixModal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 641:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(642);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("0c80f594", content, true, {});

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".slide-enter-active{animation:slide-in 3s fade forwards}.slide-leave-active{animation:slide-out 3s fade forwards}@keyframes slide-in{0%{transform:translateY(250px)}to{transform:translateY(0)}}@keyframes slide-out{0%{transform:translateY(0)}to{transform:translateY(250px)}}.modal{display:block}.modal-backdrop,.modal-dialog{transition:all .5s ease}.modal-enter .modal-dialog,.modal-leave-active .modal-dialog{opacity:0;transform:translateY(-30%)}.modal-enter .modal-backdrop,.modal-leave-active .modal-backdrop{opacity:0}.modal-backdrop{opacity:.5}.modal-header{height:55px;padding:0 1.6rem;border-bottom:2px solid #eee;font-size:1.2rem;display:flex;align-items:center}.modal-content{border-radius:0}.modal-footer{justify-content:center;padding:0 2px;padding-bottom:5px;flex-wrap:wrap}.modal-footer .btn{margin:0 10px 20px}", ""]);

// exports


/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"slide","duration":_vm.duration}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"modal-container"},[_c('div',{staticClass:"modal",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.clickMask($event)}}},[_c('div',{staticClass:"modal-dialog",class:_vm.modalClass},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_vm._t("header",[_c('div',{staticClass:"modal-title"},[_vm._t("title")],2)])],2),_vm._v(" "),_c('div',{staticClass:"modal-body"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_vm._t("footer",[_c('button',{staticClass:"mt-3",class:_vm.okClass,attrs:{"type":"button"},on:{"click":_vm.ok}},[_vm._v(_vm._s(_vm.okText))]),_vm._v(" "),_c('button',{staticClass:"mt-3",class:_vm.cancelClass,attrs:{"type":"button","data-dismiss":"modal"},on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.cancelText))])])],2)])])]),_vm._v(" "),_c('div',{staticClass:"modal-backdrop"})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

/*! AgoraRTC|BUILD v2.5.0-beta-0-gb3ebe40 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("AgoraRTC",[],t):"object"==typeof exports?exports.AgoraRTC=t():e.AgoraRTC=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=18)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(19),r=i(8),a=i(2),s=i(4),d=0,c="free",u=[],l=!1;setInterval(function(){l&&p.info("console log upload")},9e5);var p=function(){var e,t,i,p,f,g,m,v,S=["DEBUG","INFO","WARNING","ERROR","NONE"],_=0;e=function(e){e>4?e=4:e<0&&(e=0),_=e},m=function(){l=!0},v=function(){l=!1};var E=function(e,t,i){try{(0,r.post)(a.LOG_UPLOAD_SERVER,{sdk_version:a.VERSION,process_id:(0,s.getProcessId)(),log_item_id:d++,log_level:e.log_level,payload_str:e.payload},function(e){"OK"===e?t&&t(e):i&&i(e)},function(e){i&&i(e)},{withCredentials:!0})}catch(e){i&&i(e)}},I=function e(t){c="uploading",E(t,function(){0!==u.length?e(u.shift()):c="free"},function(){0!==u.length?e(u.shift()):c="free"})},h=function(e,t){if(l)try{var t=Array.prototype.slice.call(t),i="";t.forEach(function(e){"object"===(void 0===e?"undefined":n(e))&&(e=JSON.stringify(e)),i=i+e+" "});var o={payload:i,log_level:e};"uploading"===c?u.push(o):I(o)}catch(e){}};return t=function(){var e=arguments[0],t=arguments;if(t[0]=(0,o.getTimestamp)()+" Agora-SDK ["+(S[e]||"DEFAULT")+"]:",h(e,t),!(e<_))switch(e){case 0:case 1:console.log.apply(console,t);break;case 2:console.warn.apply(console,t);break;case 3:console.error.apply(console,t);break;default:return void console.log.apply(console,t)}},i=function(){for(var e=[0],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},p=function(){for(var e=[1],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},f=function(){for(var e=[2],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},g=function(){for(var e=[3],i=0;i<arguments.length;i++)e.push(arguments[i]);t.apply(this,e)},{DEBUG:0,INFO:1,WARNING:2,ERROR:3,NONE:4,enableLogUpload:m,disableLogUpload:v,setLogLevel:e,log:t,debug:i,info:p,warning:f,error:g}}();t.default=p},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={};return e.dispatcher={},e.dispatcher.eventListeners={},e.addEventListener=function(t,i){void 0===e.dispatcher.eventListeners[t]&&(e.dispatcher.eventListeners[t]=[]),e.dispatcher.eventListeners[t].push(i)},e.hasListeners=function(t){return!(!e.dispatcher.eventListeners[t]||!e.dispatcher.eventListeners[t].length)},e.on=e.addEventListener,e.removeEventListener=function(t,i){var n;-1!==(n=e.dispatcher.eventListeners[t].indexOf(i))&&e.dispatcher.eventListeners[t].splice(n,1)},e.dispatchEvent=function(t){var i;for(i in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(i)&&"function"==typeof e.dispatcher.eventListeners[t.type][i]&&e.dispatcher.eventListeners[t.type][i](t)},e.dispatchSocketEvent=function(t){var i;for(i in e.dispatcher.eventListeners[t.type])e.dispatcher.eventListeners[t.type].hasOwnProperty(i)&&"function"==typeof e.dispatcher.eventListeners[t.type][i]&&e.dispatcher.eventListeners[t.type][i](t.msg)},e},o=function(e){var t={};return t.type=e.type,t},r=function(e){var t=o(e);return t.stream=e.stream,t.reason=e.reason,t.msg=e.msg,t},a=function(e){var t=o(e);return t.uid=e.uid,t.attr=e.attr,t.stream=e.stream,t},s=function(e){var t=o(e);return t.msg=e.msg,t},d=function(e){var t=o(e);return t.url=e.url,t.reason=e.reason,t};t.EventDispatcher=n,t.StreamEvent=r,t.ClientEvent=a,t.MediaEvent=s,t.LiveStreamingEvent=d},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["ap-web-1.agora.io","ap-web-2.agoraio.cn"],o=["ap-web-3.agora.io","ap-web-4.agoraio.cn"],r={"90p_1":[160,90],"120p_1":[160,120],"120p_3":[120,120],"120p_4":[212,120],"180p_1":[320,180],"180p_3":[180,180],"180p_4":[240,180],"240p_1":[320,240],"240p_3":[240,240],"240p_4":[424,240],"360p_1":[640,360],"360p_3":[360,360],"360p_4":[640,360],"360p_6":[360,360],"360p_7":[480,360],"360p_8":[480,360],"360p_9":[640,360],"360p_10":[640,360],"360p_11":[640,360],"480p_1":[640,480],"480p_2":[640,480],"480p_3":[480,480],"480p_4":[640,480],"480p_6":[480,480],"480p_8":[848,480],"480p_9":[848,480],"480p_10":[640,480],"720p_1":[1280,720],"720p_2":[1280,720],"720p_3":[1280,720],"720p_5":[960,720],"720p_6":[960,720],"1080p_1":[1920,1080],"1080p_2":[1920,1080],"1080p_3":[1920,1080],"1080p_5":[1920,1080],"1440p_1":[2560,1440],"1440p_2":[2560,1440],"4k_1":[3840,2160],"4k_3":[3840,2160]};t.BUILD="v2.5.0-beta-0-gb3ebe40",t.VERSION="2.5.0",t.WEBCS_DOMAIN=n,t.WEBCS_DOMAIN_BACKUP_LIST=o,t.EVENT_REPORT_DOMAIN="webcollector-1.agora.io",t.EVENT_REPORT_BACKUP_DOMAIN="webcollector-2.agora.io",t.WEBCS_BACKUP_CONNECT_TIMEOUT=6e3,t.HTTP_CONNECT_TIMEOUT=5e3,t.SUPPORT_RESOLUTION_LIST=r,t.LOG_UPLOAD_SERVER="https://logservice.agora.io/upload"},function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var o,r=(o={FAILED:"FAILED",INVALID_KEY:"INVALID_KEY",INVALID_CLIENT_MODE:"INVALID_CLIENT_MODE",INVALID_CLIENT_CODEC:"INVALID_CLIENT_CODEC",CLIENT_MODE_CODEC_MISMATCH:"CLIENT_MODE_CODEC_MISMATCH",WEB_API_NOT_SUPPORTED:"WEB_API_NOT_SUPPORTED",INVALID_PARAMETER:"INVALID_PARAMETER",INVALID_OPERATION:"INVALID_OPERATION"},n(o,"INVALID_PARAMETER","INVALID_PARAMETER"),n(o,"INVALID_LOCAL_STREAM","INVALID_LOCAL_STREAM"),n(o,"INVALID_REMOTE_STREAM","INVALID_REMOTE_STREAM"),n(o,"INVALID_DYNAMIC_KEY","INVALID_DYNAMIC_KEY"),n(o,"DYNAMIC_KEY_TIMEOUT","DYNAMIC_KEY_TIMEOUT"),n(o,"NO_VOCS_AVAILABLE","NO_VOCS_AVAILABLE"),n(o,"NO_VOS_AVAILABLE","ERR_NO_VOS_AVAILABLE"),n(o,"JOIN_CHANNEL_TIMEOUT","ERR_JOIN_CHANNEL_TIMEOUT"),n(o,"NO_AVAILABLE_CHANNEL","NO_AVAILABLE_CHANNEL"),n(o,"LOOKUP_CHANNEL_TIMEOUT","LOOKUP_CHANNEL_TIMEOUT"),n(o,"LOOKUP_CHANNEL_REJECTED","LOOKUP_CHANNEL_REJECTED"),n(o,"OPEN_CHANNEL_TIMEOUT","OPEN_CHANNEL_TIMEOUT"),n(o,"OPEN_CHANNEL_REJECTED","OPEN_CHANNEL_REJECTED"),n(o,"REQUEST_DEFERRED","REQUEST_DEFERRED"),n(o,"STREAM_ALREADY_PUBLISHED","STREAM_ALREADY_PUBLISHED"),n(o,"STREAM_NOT_YET_PUBLISHED","STREAM_NOT_YET_PUBLISHED"),n(o,"JOIN_TOO_FREQUENT","JOIN_TOO_FREQUENT"),n(o,"SOCKET_ERROR","SOCKET_ERROR"),n(o,"SOCKET_DISCONNECTED","SOCKET_DISCONNECTED"),n(o,"PEERCONNECTION_FAILED","PEERCONNECTION_FAILED"),n(o,"CONNECT_GATEWAY_ERROR","CONNECT_GATEWAY_ERROR"),n(o,"SERVICE_NOT_AVAILABLE","SERVICE_NOT_AVAILABLE"),n(o,"JOIN_CHANNEL_FAILED","JOIN_CHANNEL_FAILED"),n(o,"PUBLISH_STREAM_FAILED","PUBLISH_STREAM_FAILED"),n(o,"UNPUBLISH_STREAM_FAILED","UNPUBLISH_STREAM_FAILED"),n(o,"SUBSCRIBE_STREAM_FAILED","SUBSCRIBE_STREAM_FAILED"),n(o,"UNSUBSCRIBE_STREAM_FAILED","UNSUBSCRIBE_STREAM_FAILED"),n(o,"NO_SUCH_REMOTE_STREAM","NO_SUCH_REMOTE_STREAM"),n(o,"ERR_FAILED","1"),n(o,"ERR_INVALID_VENDOR_KEY","101"),n(o,"ERR_INVALID_CHANNEL_NAME","102"),n(o,"WARN_NO_AVAILABLE_CHANNEL","103"),n(o,"WARN_LOOKUP_CHANNEL_TIMEOUT","104"),n(o,"WARN_LOOKUP_CHANNEL_REJECTED","105"),n(o,"WARN_OPEN_CHANNEL_TIMEOUT","106"),n(o,"WARN_OPEN_CHANNEL_REJECTED","107"),n(o,"WARN_REQUEST_DEFERRED","108"),n(o,"ERR_DYNAMIC_KEY_TIMEOUT","109"),n(o,"ERR_INVALID_DYNAMIC_KEY","110"),n(o,"ERR_NO_VOCS_AVAILABLE","2000"),n(o,"ERR_NO_VOS_AVAILABLE","2001"),n(o,"ERR_JOIN_CHANNEL_TIMEOUT","2002"),n(o,"IOS_NOT_SUPPORT","IOS_NOT_SUPPORT"),n(o,"WECHAT_NOT_SUPPORT","WECHAT_NOT_SUPPORT"),n(o,"SHARING_SCREEN_NOT_SUPPORT","SHARING_SCREEN_NOT_SUPPORT"),n(o,"STILL_ON_PUBLISHING","STILL_ON_PUBLISHING"),n(o,"LOW_STREAM_ALREADY_PUBLISHED","LOW_STREAM_ALREADY_PUBLISHED"),n(o,"LOW_STREAM_NOT_YET_PUBLISHED","LOW_STREAM_ALREADY_PUBLISHED"),n(o,"HIGH_STREAM_NOT_VIDEO_TRACE","HIGH_STREAM_NOT_VIDEO_TRACE"),n(o,"NOT_FIND_DEVICE_BY_LABEL","NOT_FIND_DEVICE_BY_LABEL"),n(o,"ENABLE_DUALSTREAM_FAILED","ENABLE_DUALSTREAM_FAILED"),n(o,"DISABLE_DUALSTREAM_FAILED","DISABLE_DUALSTREAM_FAILED"),n(o,"PLAYER_NOT_FOUND","PLAYER_NOT_FOUND"),n(o,"ELECTRON_NOT_SUPPORT_SHARING_SCREEN","ELECTRON_NOT_SUPPORT_SHARING_SCREEN"),n(o,"BAD_ENVIRONMENT","BAD_ENVIRONMENT"),o),a={101100:"NO_FLAG_SET",101101:"FLAG_SET_BUT_EMPTY",101102:"INVALID_FALG_SET",101203:"NO_SERVICE_AVIABLE",0:"OK_CODE",5:"INVALID_VENDOR_KEY",7:"INVALID_CHANNEL_NAME",8:"INTERNAL_ERROR",9:"NO_AUTHORIZED",10:"DYNAMIC_KEY_TIMEOUT",11:"NO_ACTIVE_STATUS",13:"DYNAMIC_KEY_EXPIRED",14:"STATIC_USE_DYANMIC_KEY",15:"DYNAMIC_USE_STATIC_KEY"},s={2000:"ERR_NO_VOCS_AVAILABLE",2001:"ERR_NO_VOS_AVAILABLE",2002:"ERR_JOIN_CHANNEL_TIMEOUT",2003:"WARN_REPEAT_JOIN",2004:"ERR_JOIN_BY_MULTI_IP",101:"ERR_INVALID_VENDOR_KEY",102:"ERR_INVALID_CHANNEL_NAME",103:"WARN_NO_AVAILABLE_CHANNEL",104:"WARN_LOOKUP_CHANNEL_TIMEOUT",105:"WARN_LOOKUP_CHANNEL_REJECTED",106:"WARN_OPEN_CHANNEL_TIMEOUT",107:"WARN_OPEN_CHANNEL_REJECTED",108:"WARN_REQUEST_DEFERRED",109:"ERR_DYNAMIC_KEY_TIMEOUT",110:"ERR_NO_AUTHORIZED",111:"ERR_VOM_SERVICE_UNAVAILABLE",112:"ERR_NO_CHANNEL_AVAILABLE_CODE",113:"ERR_TOO_MANY_USERS",114:"ERR_MASTER_VOCS_UNAVAILABLE",115:"ERR_INTERNAL_ERROR",116:"ERR_NO_ACTIVE_STATUS",117:"ERR_INVALID_UID",118:"ERR_DYNAMIC_KEY_EXPIRED",119:"ERR_STATIC_USE_DYANMIC_KE",120:"ERR_DYNAMIC_USE_STATIC_KE",2:"K_TIMESTAMP_EXPIRED",3:"K_CHANNEL_PERMISSION_INVALID",4:"K_CERTIFICATE_INVALID",5:"K_CHANNEL_NAME_EMPTY",6:"K_CHANNEL_NOT_FOUND",7:"K_TICKET_INVALID",8:"K_CHANNEL_CONFLICTED",9:"K_SERVICE_NOT_READY",10:"K_SERVICE_TOO_HEAVY",14:"K_UID_BANNED",15:"K_IP_BANNED",16:"K_CHANNEL_BANNED"},d=["ERR_NO_VOCS_AVAILABLE","ERR_NO_VOS_AVAILABLE","ERR_JOIN_CHANNEL_TIMEOUT","WARN_LOOKUP_CHANNEL_TIMEOUT","WARN_OPEN_CHANNEL_TIMEOUT","ERR_VOM_SERVICE_UNAVAILABLE","ERR_TOO_MANY_USERS","ERR_MASTER_VOCS_UNAVAILABLE","ERR_INTERNAL_ERROR"],c=["NO_SERVICE_AVIABLE"];t.default=r,t.APErrorCode=a,t.GatewayErrorCode=s,t.JOIN_GS_TRYNEXT_LIST=d,t.JOIN_CS_RETRY_LIST=c},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getProcessId=t.SUBSCRIBE=t.PUBLISH=t.JOIN_GATEWAY=t.JOIN_CHOOSE_SERVER=t.SESSION_INIT=t.report=void 0;var o=i(2),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(o),a=i(0),s=n(a),d=i(8),c=i(11),u=n(c),l={type:null,sid:null,lts:null,succ:null,cname:null,uid:null,peerid:null,cid:null,elaps:null,extend:null,vid:0},p=null,f=function(){return p||(p="process-"+(0,u.default)(),s.default.info("processId: "+p)),p},g=function(){var e={};return e.list={},e.url=(0,d.shouldUseHttps)()?"https://"+r.EVENT_REPORT_DOMAIN+":6443/events/report":"http://"+r.EVENT_REPORT_DOMAIN+":6080/events/report",e.urlBackup=(0,d.shouldUseHttps)()?"https://"+r.EVENT_REPORT_BACKUP_DOMAIN+":6443/events/report":"http://"+r.EVENT_REPORT_BACKUP_DOMAIN+":6080/events/report",e.setProxyServer=function(t){t&&(e.url=(0,d.shouldUseHttps)()?"https://"+t+"/rs/?h="+r.EVENT_REPORT_DOMAIN+"&p=6443&d=events/report":"http://"+t+"/rs/?h="+r.EVENT_REPORT_DOMAIN+"&p=6080&d=events/report",e.urlBackup=(0,d.shouldUseHttps)()?"https://"+t+"/rs/?h="+r.EVENT_REPORT_BACKUP_DOMAIN+"&p=6443&d=events/report":"http://"+t+"/rs/?h="+r.EVENT_REPORT_BACKUP_DOMAIN+"&p=6080&d=events/report",s.default.debug("reportProxyServerURL: "+e.url),s.default.debug("reportProxyServerBackupURL: "+e.urlBackup))},e.sessionInit=function(t,i){i.sid=t;var n=Object.assign({},l),o=Object.assign(n,i);e.list[t]||(o.startTime=+new Date);var a=Object.assign({},o);delete o.appid,delete o.mode,e.list[t]=o,a.extend=null,a.ver=r.VERSION,a.build=r.BUILD,a.type="session_init",a.browser=navigator.userAgent,a.lts=+new Date,a.elaps=a.lts-a.startTime,a.process=f(),e.send(a)},e.joinChooseServer=function(t,i,n){var o;o=n?Object.assign(e.list[t],i):Object.assign({},e.list[t],i),o.type="join_choose_server";var r=+new Date;o.ev_elaps=r-o.lts,o.elaps=r-o.startTime,o.lts=r,o.serverList=JSON.stringify(o.serverList),e.send(o)},e.joinGateway=function(t,i){var n=Object.assign(e.list[t],i);n.type="join_gateway";var o=+new Date;n.ev_elaps=o-n.lts,n.elaps=o-n.startTime,n.lts=o,e.send(n)},e.publish=function(t,i){var n=Object.assign({},e.list[t],i);n.type="publish";var o=+new Date;n.ev_elaps=o-n.lts,n.elaps=o-n.startTime,n.lts=o,e.send(n)},e.subscribe=function(t,i){var n=Object.assign({},e.list[t],i);n.type="subscribe";var o=+new Date;n.ev_elaps=o-n.lts,n.elaps=o-n.startTime,n.lts=o,e.send(n)},e.firstRemoteFrame=function(t,i){var n=Object.assign({},e.list[t],i);n.type="first_remote_frame",n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.streamSwitch=function(t,i){var n=Object.assign({},e.list[t],i);n.type="stream_switch",n.isdual=i.isdual,n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.audioSendingStopped=function(t,i){var n=Object.assign({},e.list[t],i);n.type="audio_sending_stopped",n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.videoSendingStopped=function(t,i){var n=Object.assign({},e.list[t],i);n.type="video_sending_stopped",n.lts=+new Date,n.elaps=n.lts-n.startTime,e.send(n)},e.send=function(t){try{(0,d.post)(e.url,t,null,function(i){(0,d.post)(e.urlBackup,t,null,function(e){},{timeout:1e4})},{timeout:1e4})}catch(e){}},e}();t.report=g,t.SESSION_INIT="session_init",t.JOIN_CHOOSE_SERVER="join_choose_server",t.JOIN_GATEWAY="join_gateway",t.PUBLISH="publish",t.SUBSCRIBE="subscribe",t.getProcessId=f},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=v();return e.name&&"Chrome"===e.name},o=function(){var e=v();return e.name&&"Safari"===e.name},r=function(){var e=v();return e.name&&"Firefox"===e.name},a=function(){var e=v();return e.name&&"OPR"===e.name},s=function(){var e=v();return e.name&&"QQBrowser"===e.name},d=function(){var e=v();return e.name&&"MicroMessenger"===e.name},c=function(){var e=p();return"Linux"===e||"Mac OS X"===e||"Mac OS"===e||-1!==e.indexOf("Windows")},u=function(){var e=p();return"Android"===e||"iOS"===e},l=function(){return v().version},p=function(){return v().os},f=function(){return!!navigator.userAgent.match(/chrome\/[\d]./i)},g=function(){var e=navigator.userAgent,t=e.match(/chrome\/[\d]./i);return t&&t[0]&&t[0].split("/")[1]},m=function(){var e,t=navigator.userAgent,i=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];"Chrome"===i[1]&&null!=(e=t.match(/(OPR(?=\/))\/?(\d+)/i))&&(i=e),"Safari"===i[1]&&null!=(e=t.match(/version\/(\d+)/i))&&(i[2]=e[1]),~t.toLowerCase().indexOf("qqbrowser")&&null!=(e=t.match(/(qqbrowser(?=\/))\/?(\d+)/i))&&(i=e),~t.toLowerCase().indexOf("micromessenger")&&null!=(e=t.match(/(micromessenger(?=\/))\/?(\d+)/i))&&(i=e),~t.toLowerCase().indexOf("edge")&&null!=(e=t.match(/(edge(?=\/))\/?(\d+)/i))&&(i=e),~t.toLowerCase().indexOf("trident")&&null!=(e=/\brv[ :]+(\d+)/g.exec(t)||[])&&(i=[null,"IE",e[1]]);var n=void 0,o=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Windows Vista",r:/Windows NT 6.0/},{s:"Windows Server 2003",r:/Windows NT 5.2/},{s:"Windows XP",r:/(Windows NT 5.1|Windows XP)/},{s:"Windows 2000",r:/(Windows NT 5.0|Windows 2000)/},{s:"Windows ME",r:/(Win 9x 4.90|Windows ME)/},{s:"Windows 98",r:/(Windows 98|Win98)/},{s:"Windows 95",r:/(Windows 95|Win95|Windows_95)/},{s:"Windows NT 4.0",r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},{s:"Windows CE",r:/Windows CE/},{s:"Windows 3.11",r:/Win16/},{s:"Android",r:/Android/},{s:"Open BSD",r:/OpenBSD/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},{s:"QNX",r:/QNX/},{s:"UNIX",r:/UNIX/},{s:"BeOS",r:/BeOS/},{s:"OS/2",r:/OS\/2/},{s:"Search Bot",r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}];for(var r in o){var a=o[r];if(a.r.test(navigator.userAgent)){n=a.s;break}}return{name:i[1],version:i[2],os:n}},v=function(){var e=m();return function(){return e}}();t.getBrowserInfo=v,t.getBrowserVersion=l,t.getBrowserOS=p,t.isChrome=n,t.isSafari=o,t.isFireFox=r,t.isOpera=a,t.isQQBrowser=s,t.isWeChatBrowser=d,t.isSupportedPC=c,t.isSupportedMobile=u,t.getChromeKernelVersion=g,t.isChromeKernel=f},function(e,t,i){"use strict";function n(e){return new Promise(function(t,i){r(e,t,i)})}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=null,a=null,s=null,d=null,c=null,u=null,l=null,p=null,f=null,g=null,m={addStream:null},v={log:function(){},extractVersion:function(e,t,i){var n=e.match(t);return n&&n.length>=i&&parseInt(n[i])}};if("object"==("undefined"==typeof window?"undefined":o(window))?(!window.HTMLMediaElement||"srcObject"in window.HTMLMediaElement.prototype?(p=function(e,t){e.srcObject=t},f=function(e){return e.srcObject}):(p=function(e,t){"mozSrcObject"in e?e.mozSrcObject=t:(e._srcObject=t,e.src=t?URL.createObjectURL(t):null)},f=function(e){return"mozSrcObject"in e?e.mozSrcObject:e._srcObject}),r=window.navigator&&window.navigator.getUserMedia):(p=function(e,t){e.srcObject=t},f=function(e){return e.srcObject}),a=function(e,t){p(e,t)},s=function(e,t){p(e,f(t))},"undefined"!=typeof window&&window.navigator)if(navigator.mozGetUserMedia&&window.mozRTCPeerConnection){v.log("This appears to be Firefox"),d="firefox",c=v.extractVersion(navigator.userAgent,/Firefox\/([0-9]+)\./,1),u=31,g=mozRTCPeerConnection;for(var S in m)m[S]=g.prototype[S];if(l=function(e,t){if(c<38&&e&&e.iceServers){for(var i=[],n=0;n<e.iceServers.length;n++){var o=e.iceServers[n];if(o.hasOwnProperty("urls"))for(var r=0;r<o.urls.length;r++){var a={url:o.urls[r]};0===o.urls[r].indexOf("turn")&&(a.username=o.username,a.credential=o.credential),i.push(a)}else i.push(e.iceServers[n])}e.iceServers=i}var s=new g(e,t);for(var d in m)s[d]=m[d];return s},window.RTCSessionDescription||(window.RTCSessionDescription=mozRTCSessionDescription),window.RTCIceCandidate||(window.RTCIceCandidate=mozRTCIceCandidate),r=function(e,t,i){var n=function(e){if("object"!==(void 0===e?"undefined":o(e))||e.require)return e;var t=[];return Object.keys(e).forEach(function(i){if("require"!==i&&"advanced"!==i&&"mediaSource"!==i){var n=e[i]="object"===o(e[i])?e[i]:{ideal:e[i]};if(void 0===n.min&&void 0===n.max&&void 0===n.exact||t.push(i),void 0!==n.exact&&("number"==typeof n.exact?n.min=n.max=n.exact:e[i]=n.exact,delete n.exact),void 0!==n.ideal){e.advanced=e.advanced||[];var r={};"number"==typeof n.ideal?r[i]={min:n.ideal,max:n.ideal}:r[i]=n.ideal,e.advanced.push(r),delete n.ideal,Object.keys(n).length||delete e[i]}}}),t.length&&(e.require=t),e};return c<38&&(v.log("spec: "+JSON.stringify(e)),e.audio&&(e.audio=n(e.audio)),e.video&&(e.video=n(e.video)),v.log("ff37: "+JSON.stringify(e))),navigator.mozGetUserMedia(e,t,i)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,addEventListener:function(){},removeEventListener:function(){}}),navigator.mediaDevices.enumerateDevices=navigator.mediaDevices.enumerateDevices||function(){return new Promise(function(e){e([{kind:"audioinput",deviceId:"default",label:"",groupId:""},{kind:"videoinput",deviceId:"default",label:"",groupId:""}])})},c<41){var _=navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);navigator.mediaDevices.enumerateDevices=function(){return _().then(void 0,function(e){if("NotFoundError"===e.name)return[];throw e})}}}else if(navigator.webkitGetUserMedia&&window.webkitRTCPeerConnection){v.log("This appears to be Chrome"),d="chrome",c=v.extractVersion(navigator.userAgent,/Chrom(e|ium)\/([0-9]+)\./,2),u=38,g=webkitRTCPeerConnection;for(var S in m)m[S]=g.prototype[S];l=function(e,t){e&&e.iceTransportPolicy&&(e.iceTransports=e.iceTransportPolicy);var i=new g(e,t);for(var n in m)i[n]=m[n];var o=i.getStats.bind(i);return i.getStats=function(e,t,i){var n=this,r=arguments;if(arguments.length>0&&"function"==typeof e)return o(e,t);var a=function(e){var t={};return e.result().forEach(function(e){var i={id:e.id,timestamp:e.timestamp,type:e.type};e.names().forEach(function(t){i[t]=e.stat(t)}),t[i.id]=i}),t};if(arguments.length>=2){var s=function(e){r[1](a(e))};return o.apply(this,[s,arguments[0]])}return new Promise(function(t,i){1===r.length&&null===e?o.apply(n,[function(e){t.apply(null,[a(e)])},i]):o.apply(n,[t,i])})},i},["createOffer","createAnswer"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=this;if(arguments.length<1||1===arguments.length&&"object"===o(arguments[0])){var i=1===arguments.length?arguments[0]:void 0;return new Promise(function(n,o){t.apply(e,[n,o,i])})}return t.apply(this,arguments)}}),["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(e){var t=webkitRTCPeerConnection.prototype[e];webkitRTCPeerConnection.prototype[e]=function(){var e=arguments,i=this;return new Promise(function(n,o){t.apply(i,[e[0],function(){n(),e.length>=2&&e[1].apply(null,[])},function(t){o(t),e.length>=3&&e[2].apply(null,[t])}])})}});var E=function(e){if("object"!==(void 0===e?"undefined":o(e))||e.mandatory||e.optional)return e;var t={};return Object.keys(e).forEach(function(i){if("require"!==i&&"advanced"!==i&&"mediaSource"!==i){var n="object"===o(e[i])?e[i]:{ideal:e[i]};void 0!==n.exact&&"number"==typeof n.exact&&(n.min=n.max=n.exact);var r=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t};if(void 0!==n.ideal){t.optional=t.optional||[];var a={};"number"==typeof n.ideal?(a[r("min",i)]=n.ideal,t.optional.push(a),a={},a[r("max",i)]=n.ideal,t.optional.push(a)):(a[r("",i)]=n.ideal,t.optional.push(a))}void 0!==n.exact&&"number"!=typeof n.exact?(t.mandatory=t.mandatory||{},t.mandatory[r("",i)]=n.exact):["min","max"].forEach(function(e){void 0!==n[e]&&(t.mandatory=t.mandatory||{},t.mandatory[r(e,i)]=n[e])})}}),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t};if(r=function(e,t,i){return e.audio&&(e.audio=E(e.audio)),e.video&&(e.video=E(e.video)),v.log("chrome: "+JSON.stringify(e)),navigator.webkitGetUserMedia(e,t,i)},navigator.getUserMedia=r,navigator.mediaDevices||(navigator.mediaDevices={getUserMedia:n,enumerateDevices:function(){return new Promise(function(e){var t={audio:"audioinput",video:"videoinput"};return MediaStreamTrack.getSources(function(i){e(i.map(function(e){return{label:e.label,kind:t[e.kind],deviceId:e.id,groupId:""}}))})})}}),navigator.mediaDevices.getUserMedia){var I=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=function(e){return v.log("spec:   "+JSON.stringify(e)),e.audio=E(e.audio),e.video=E(e.video),v.log("chrome: "+JSON.stringify(e)),I(e)}}else navigator.mediaDevices.getUserMedia=function(e){return n(e)};void 0===navigator.mediaDevices.addEventListener&&(navigator.mediaDevices.addEventListener=function(){v.log("Dummy mediaDevices.addEventListener called.")}),void 0===navigator.mediaDevices.removeEventListener&&(navigator.mediaDevices.removeEventListener=function(){v.log("Dummy mediaDevices.removeEventListener called.")}),a=function(e,t){c>=43?p(e,t):void 0!==e.src?e.src=t?URL.createObjectURL(t):null:v.log("Error attaching stream to element.")},s=function(e,t){c>=43?p(e,f(t)):e.src=t.src}}else navigator.mediaDevices&&navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)?(v.log("This appears to be Edge"),d="edge",c=v.extractVersion(navigator.userAgent,/Edge\/(\d+).(\d+)$/,2),u=12):v.log("Browser does not appear to be WebRTC-capable");else v.log("This does not appear to be a browser"),d="not a browser";var h={};try{Object.defineProperty(h,"version",{set:function(e){c=e}})}catch(e){}var y;l?y=l:"undefined"!=typeof window&&(y=window.RTCPeerConnection),e.exports={RTCPeerConnection:y,getUserMedia:r,attachMediaStream:a,reattachMediaStream:s,setSrcObject:p,getSrcObject:f,webrtcDetectedBrowser:d,webrtcDetectedVersion:c,webrtcMinimumVersion:u,webrtcTesting:h,webrtcUtils:v}},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(0,l.default)().replace(/-/g,"").toUpperCase()}Object.defineProperty(t,"__esModule",{value:!0}),t.popBanTip=t.random=t.safeCall=t.is32Uint=t.vsResHack=t.audioLevelHelper=t.generateSessionId=t.isLiveTranscodingValid=t.checkSystemRequirements=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=i(5),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(a),d=i(0),c=n(d),u=i(11),l=n(u),p=i(12),f=i(6),g=null,m=function(){return g||(g=(0,p.createAudioContext)()),g},v=function(){var e=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.mediaDevices&&navigator.mediaDevices.getUserMedia,i=window.WebSocket,n=!!e&&!!t&&!!i,o=!1;return c.default.debug(s.getBrowserInfo(),"isAPISupport:"+n),s.isChrome()&&s.getBrowserVersion()>=58&&"iOS"!==s.getBrowserOS()&&(o=!0),s.isFireFox()&&s.getBrowserVersion()>=56&&(o=!0),s.isOpera()&&s.getBrowserVersion()>=45&&(o=!0),s.isSafari()&&s.getBrowserVersion()>=11&&(o=!0),(s.isWeChatBrowser()||s.isQQBrowser())&&"iOS"!==s.getBrowserOS()&&(o=!0),s.isSupportedPC()||s.isSupportedMobile()||(o=!1),n&&o},S=function(){var e=arguments[0];if("function"==typeof e){var t=Array.prototype.slice.call(arguments,1);e.apply(null,t)}},_=function(e){return this.audioContext=m(),this.sourceNode=e.otWebkitAudioSource||this.audioContext.createMediaStreamSource(e),this.analyser=this.audioContext.createAnalyser(),this.timeDomainData=new Uint8Array(this.analyser.frequencyBinCount),this.sourceNode.connect(this.analyser),this.getAudioLevel=function(){if(this.analyser){this.analyser.getByteTimeDomainData(this.timeDomainData);for(var e=0,t=0;t<this.timeDomainData.length;t++)e=Math.max(e,Math.abs(this.timeDomainData[t]-128));return e/128}return c.default.warning("can't find analyser in audioLevelHelper"),0},this},E=function(e,t,i){try{var n=document.createElement("video");n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.setAttribute("style","position: absolute; top: 0; left: 0; width:1px; high:1px;"),document.body.appendChild(n),n.addEventListener("playing",function(e){s.isFireFox()?n.videoWidth&&(t(n.videoWidth,n.videoHeight),document.body.removeChild(n)):(t(n.videoWidth,n.videoHeight),document.body.removeChild(n))}),(0,f.setSrcObject)(n,e)}catch(e){i(e)}},I=function(e){return!!(0<=e&&e<=4294967295)},h=function(e){var t=["lowLatency","userConfigExtraInfo","transcodingUsers"];for(var i in e)if("lowLatency"===i&&"boolean"!=typeof e[i]||"userConfigExtraInfo"===i&&"object"!==r(e[i])||"transcodingUsers"===i&&!y(e[i])||!~t.indexOf(i)&&"number"!=typeof e[i])throw new Error("Param ["+i+"] is inVaild");return!0},y=function(e){for(var t=0;t<e.length;t++)for(var i in e[t])if("number"!=typeof e[t][i])throw new Error("Param user["+t+"] - ["+i+"] is inVaild");return!0},R=function(e){isNaN(e)&&(e=1e3);var t=+new Date;t=(9301*t+49297)%233280;var i=t/233280;return Math.ceil(i*e)},b=function(){if(!document.getElementById("agora-ban-tip")){var e=document.createElement("div");e.id="agora-ban-tip",e.style="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; color: #fff;",document.querySelector("body").prepend(e);var t=document.createElement("div");t.style="background: #000; width: 346px; height: 116px; z-index: 100000; opacity: 0.6; border-radius: 10px; box-shadow: 0 2px 4px #000;",e.append(t);var i=document.createElement("div");i.style="height: 76px; display: flex; justify-content: center; align-items: center;";var n=document.createElement("span");n.style="height: 28px; width: 28px; color: #000; text-align: center; line-height: 30px; background: #fff; border-radius: 50%; font-weight: 600; font-size: 20px;margin-right: 5px;",n.innerText="!";var o=document.createElement("span");o.innerText="This browser does not support webRTC",i.append(n),i.append(o);var r=document.createElement("div");r.style="height: 38px; display: flex; border-top: #fff 1px solid; justify-content: center; align-items: center;",r.innerText="OK",t.append(i),t.append(r),r.onclick=function(){var e=document.getElementById("agora-ban-tip");e.parentNode.removeChild(e)}}};t.checkSystemRequirements=v,t.isLiveTranscodingValid=h,t.generateSessionId=o,t.audioLevelHelper=_,t.vsResHack=E,t.is32Uint=I,t.safeCall=S,t.random=R,t.popBanTip=b},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shouldUseHttps=t.post=void 0;var n=i(2),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(n),r=function(e,t,i,n,r){var a=new XMLHttpRequest;if(a.timeout=t.timeout||o.HTTP_CONNECT_TIMEOUT,a.open("POST",e,!0),a.setRequestHeader("Content-type","application/json; charset=utf-8"),r)for(var s in r)"withCredentials"==s?a.withCredentials=!0:a.setRequestHeader(s,r[s]);a.onload=function(e){i&&i(a.responseText)},a.onerror=function(t){n&&n(t,e)},a.ontimeout=function(t){n&&n(t,e)},a.send(JSON.stringify(t))},a=function(){return"https:"==document.location.protocol};t.post=r,t.shouldUseHttps=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createStream=t.Stream=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(22),a=n(r),s=i(13),d=i(1),c=i(0),u=n(c),l=i(5),p=i(14),f=i(7),g=i(4),m=i(3),v=n(m),S=i(12),_=i(10),E=function(e){function t(){return null!==window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)&&window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<=35}function i(){return null!==window.navigator.userAgent.match("Firefox")}function n(e,t){return{width:{ideal:e},height:{ideal:t}}}var r=(0,d.EventDispatcher)();if(r.params=Object.assign({},e),r.stream=e.stream,r.url=e.url,r.onClose=void 0,r.local=!1,r.videoSource=e.videoSource,r.audioSource=e.audioSource,r.video=!!e.video,r.audio=!!e.audio,r.screen=!!e.screen,r.screenAttributes={width:1920,height:1080,maxFr:5,minFr:1},r.videoSize=e.videoSize,r.player=void 0,r.audioLevelHelper=null,e.attributes=e.attributes||{},r.attributes=e.attributes,r.microphoneId=e.microphoneId,r.cameraId=e.cameraId,r.inSwitchDevice=!1,r.videoEnabled=!0,r.audioEnabled=!0,r.lowStream=null,r.videoWidth=0,r.videoHeight=0,r.streamId=null,r.streamId=e.streamID,r.userId=null,r.mirror=!1!==e.mirror,r.DTX=e.audioProcessing&&e.audioProcessing.DTX,r.audioProcessing=e.audioProcessing,r.highQuality=!1,r.stereo=!1,r.speech=!1,r.audioMixing={state:"UNINIT",muted:!0,states:{UNINIT:"UNINIT",IDLE:"IDLE",STARTING:"STARTING",BUSY:"BUSY",PAUSED:"PAUSED"},inEarMonitoring:"FILE",inEarMonitoringModes:{NONE:"NONE",FILE:"FILE",MICROPHONE:"MOCROPHONE",ALL:"ALL"},volume:100,startAt:null,startOffset:null,pauseAt:null,pauseOffset:null,resumeAt:null,resumeOffset:null,stopAt:null,ctx:null,mediaStreamSource:null,mediaStreamDest:null,options:null,buffer:{},source:[]},!(void 0===r.videoSize||r.videoSize instanceof Array&&4===r.videoSize.length))throw Error("Invalid Video Size");r.videoSize=[640,480,640,480],void 0!==e.local&&!0!==e.local||(r.local=!0),r.initialized=!r.local,r.on("collectStats",function(e){e.promises.push(r._getPCStats()),e.promises.push(new Promise(function(e){var t={};r.pc&&r.pc.isSubscriber?i()&&((0,p.setStat)(t,"videoReceiveResolutionHeight",r.videoHeight),(0,p.setStat)(t,"videoReceiveResolutionWidth",r.videoWidth)):r.pc&&!r.pc.isSubscriber&&(((0,l.isSafari)()||(0,l.isFireFox)())&&((0,p.setStat)(t,"videoSendResolutionHeight",r.videoHeight),(0,p.setStat)(t,"videoSendResolutionWidth",r.videoWidth)),((0,l.isSafari)()||(0,l.isFireFox)())&&r.uplinkStats&&(0,p.setStat)(t,"videoSendPacketsLost",r.uplinkStats.uplink_cumulative_lost)),e(t)})),e.promises.push(new Promise(function(e){var t={};return r.traffic_stats&&r.pc&&r.pc.isSubscriber?((0,p.setStat)(t,"accessDelay",r.traffic_stats.access_delay),(0,p.setStat)(t,"endToEndDelay",r.traffic_stats.e2e_delay),(0,p.setStat)(t,"videoReceiveDelay",r.traffic_stats.video_delay),(0,p.setStat)(t,"audioReceiveDelay",r.traffic_stats.audio_delay)):r.traffic_stats&&r.pc&&!r.pc.isSubscriber&&(0,p.setStat)(t,"accessDelay",r.traffic_stats.access_delay),e(t)}))});var c={true:!0,unspecified:!0,"90p_1":n(160,90),"120p_1":n(160,120),"120p_3":n(120,120),"120p_4":n(212,120),"180p_1":n(320,180),"180p_3":n(180,180),"180p_4":n(240,180),"240p_1":n(320,240),"240p_3":n(240,240),"240p_4":n(424,240),"360p_1":n(640,360),"360p_3":n(360,360),"360p_4":n(640,360),"360p_6":n(360,360),"360p_7":n(480,360),"360p_8":n(480,360),"360p_9":n(640,360),"360p_10":n(640,360),"360p_11":n(640,360),"480p_1":n(640,480),"480p_2":n(640,480),"480p_3":n(480,480),"480p_4":n(640,480),"480p_6":n(480,480),"480p_8":n(848,480),"480p_9":n(848,480),"480p_10":n(640,480),"720p_1":n(1280,720),"720p_2":n(1280,720),"720p_3":n(1280,720),"720p_5":n(960,720),"720p_6":n(960,720),"1080p_1":n(1920,1080),"1080p_2":n(1920,1080),"1080p_3":n(1920,1080),"1080p_5":n(1920,1080),"1440p_1":n(2560,1440),"1440p_2":n(2560,1440),"4k_1":n(3840,2160),"4k_3":n(3840,2160)};return r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0,r.setVideoResolution=function(t){return t+="",void 0!==c[t]&&(e.video=c[t],e.attributes=e.attributes||{},e.attributes.resolution=t,!0)},r.setVideoFrameRate=function(t){return!(0,l.isFireFox)()&&("object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minFrameRate=t[0],e.attributes.maxFrameRate=t[1],!0))},r.setVideoBitRate=function(t){return"object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.attributes=e.attributes||{},e.attributes.minVideoBW=t[0],e.attributes.maxVideoBW=t[1],!0)},r.setScreenBitRate=function(t){return"object"===(void 0===t?"undefined":o(t))&&t instanceof Array&&t.length>1&&(e.screenAttributes=e.screenAttributes||{},e.screenAttributes.minVideoBW=t[0],e.screenAttributes.maxVideoBW=t[1],!0)},r.setScreenProfile=function(e){if("string"==typeof e&&r.screen){switch(e){case"480p_1":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"480p_2":r.screenAttributes.width=640,r.screenAttributes.height=480,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"720p_1":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"720p_2":r.screenAttributes.width=1280,r.screenAttributes.height=720,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25;break;case"1080p_1":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=5,r.screenAttributes.minFr=1;break;case"1080p_2":r.screenAttributes.width=1920,r.screenAttributes.height=1080,r.screenAttributes.maxFr=30,r.screenAttributes.minFr=25}return!0}return!1},r.setVideoProfileCustom=function(e){r.setVideoResolution(e[0]),r.setVideoFrameRate([e[1],e[1]]),r.setVideoBitRate([e[2],e[2]])},r.setVideoProfileCustomPlus=function(t){console.log(t),e.video=n(t.width,t.height),e.attributes=e.attributes||{},e.attributes.resolution=t.width+"x"+t.height,r.setVideoFrameRate([t.framerate,t.framerate]),r.setVideoBitRate([t.bitrate,t.bitrate])},r.setVideoProfile=function(e){if(r.profile=e,"string"==typeof e&&r.video){switch(e){case"120p":case"120P":case"120p_1":case"120P_1":r.setVideoResolution("120p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,65]);break;case"120p_3":case"120P_3":r.setVideoResolution("120p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,50]);break;case"180p":case"180P":case"180p_1":case"180P_1":r.setVideoResolution("180p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"180p_3":case"180P_3":r.setVideoResolution("180p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,100]);break;case"180p_4":case"180P_4":r.setVideoResolution("180p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,120]);break;case"240p":case"240P":case"240p_1":case"240P_1":r.setVideoResolution("240p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,200]);break;case"240p_3":case"240P_3":r.setVideoResolution("240p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,140]);break;case"240p_4":case"240P_4":r.setVideoResolution("240p_4"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([10,220]);break;case"360p":case"360P":case"360p_1":case"360P_1":r.setVideoResolution("360p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"360p_3":case"360P_3":r.setVideoResolution("360p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,260]);break;case"360p_4":case"360P_4":r.setVideoResolution("360p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"360p_6":case"360P_6":r.setVideoResolution("360p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,400]);break;case"360p_7":case"360P_7":r.setVideoResolution("360p_7"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,320]);break;case"360p_8":case"360P_8":r.setVideoResolution("360p_8"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,490]);break;case"360p_9":case"360P_9":r.setVideoResolution("360p_9"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,800]);break;case"360p_10":case"360P_10":r.setVideoResolution("360p_10"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,800]);break;case"360p_11":case"360P_11":r.setVideoResolution("360p_11"),r.setVideoFrameRate([24,24]),r.setVideoBitRate([20,1e3]);break;case"480p":case"480P":case"480p_1":case"480P_1":r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500]);break;case"480p_2":case"480P_2":r.setVideoResolution("480p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,1e3]);break;case"480p_3":case"480P_3":r.setVideoResolution("480p_3"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,400]);break;case"480p_4":case"480P_4":r.setVideoResolution("480p_4"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,750]);break;case"480p_6":case"480P_6":r.setVideoResolution("480p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,600]);break;case"480p_8":case"480P_8":r.setVideoResolution("480p_8"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,610]);break;case"480p_9":case"480P_9":r.setVideoResolution("480p_9"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([20,930]);break;case"480p_10":case"480P_10":r.setVideoResolution("480p_10"),r.setVideoFrameRate([10,10]),r.setVideoBitRate([20,400]);break;case"720p":case"720P":case"720p_1":case"720P_1":r.setVideoResolution("720p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,1130]);break;case"720p_2":case"720P_2":r.setVideoResolution("720p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,2e3]);break;case"720p_3":case"720P_3":r.setVideoResolution("720p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1710]);break;case"720p_5":case"720P_5":r.setVideoResolution("720p_5"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([30,910]);break;case"720p_6":case"720P_6":r.setVideoResolution("720p_6"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([30,1380]);break;case"1080p":case"1080P":case"1080p_1":case"1080P_1":r.setVideoResolution("1080p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([50,2080]);break;case"1080p_2":case"1080P_2":r.setVideoResolution("1080p_2"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3e3]);break;case"1080p_3":case"1080P_3":r.setVideoResolution("1080p_3"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,3150]);break;case"1080p_5":case"1080P_5":r.setVideoResolution("1080p_5"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,4780]);break;case"1440p":case"1440P":case"1440p_1":case"1440P_1":r.setVideoResolution("1440p_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,4850]);break;case"1440p_2":case"1440P_2":r.setVideoResolution("1440p_2"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,7350]);break;case"4k":case"4K":case"4k_1":case"4K_1":r.setVideoResolution("4k_1"),r.setVideoFrameRate([30,30]),r.setVideoBitRate([50,8910]);break;case"4k_3":case"4K_3":r.setVideoResolution("4k_3"),r.setVideoFrameRate([60,60]),r.setVideoBitRate([50,13500]);break;default:r.setVideoResolution("480p_1"),r.setVideoFrameRate([15,15]),r.setVideoBitRate([20,500])}return!0}return!1},r.setAudioProfile=function(e){if(r.audioProfile=e,"string"==typeof e&&r.audio){switch(e){case"speech_low_quality":r.highQuality=!1,r.stereo=!1,r.speech=!0,r.lowQuality=!0;break;case"speech_standard":r.highQuality=!1,r.stereo=!1,r.speech=!0,r.lowQuality=!1;break;case"music_standard":r.highQuality=!1,r.stereo=!1,r.speech=!1,r.lowQuality=!1;break;case"standard_stereo":r.highQuality=!1,r.stereo=!0,r.speech=!1,r.lowQuality=!1;break;case"high_quality":r.highQuality=!0,r.stereo=!1,r.speech=!1,r.lowQuality=!1;break;case"high_quality_stereo":r.highQuality=!0,r.stereo=!0,r.speech=!1,r.lowQuality=!1;break;default:r.highQuality=!1,r.stereo=!1,r.speech=!1,r.lowQuality=!1}return!0}return!1},r.getId=function(){return r.streamId},r.getUserId=function(){return r.userId},r.setUserId=function(e){r.userId&&u.default.warning("Stream.userId "+r.userId+" => "+e),r.userId=e},r.getAttributes=function(){return e.screen?r.screenAttributes:e.attributes},r.hasAudio=function(){return r.audio},r.hasVideo=function(){return r.video},r.hasScreen=function(){return r.screen},r.isVideoOn=function(){return(r.hasVideo()||r.hasScreen())&&r.videoEnabled},r.isAudioOn=function(){return r.hasAudio()&&r.audioEnabled},r.init=function(i,n){var a=((new Date).getTime(),arguments[2]);if(void 0===a&&(a=2),!0===r.initialized)return void("function"==typeof n&&n({type:"warning",msg:"STREAM_ALREADY_INITIALIZED"}));if(!0!==r.local)return void("function"==typeof n&&n({type:"warning",msg:"STREAM_NOT_LOCAL"}));if(r.videoSource||r.audioSource){var d=new MediaStream;return r.videoSource&&(u.default.debug("Added videoSource"),d.addTrack(r.videoSource),r.video=!0),r.audioSource&&(u.default.debug("Added audioSource"),d.addTrack(r.audioSource),r.audio=!0),r.hasVideo()?(0,f.vsResHack)(d,function(e,t){u.default.info("Video Source width "+e+" height "+t),r.stream=d,r.initialized=!0,i&&i()},function(e){u.default.warning("Failed to get width & height from video source",e),r.stream=d,r.initialized=!0,i&&i()}):(r.stream=d,r.initialized=!0,i&&i())}try{if((e.audio||e.video||e.screen)&&void 0===e.url){u.default.debug("Requested access to local media");var c=e.video;if(e.screen)var p={video:c,audio:!1,screen:!0,data:!0,extensionId:e.extensionId,attributes:r.screenAttributes,fake:e.fake,mediaSource:e.mediaSource};else{var p={video:c,audio:e.audio,fake:e.fake};if(!t()){var g=30,m=30;if(void 0!==e.attributes.minFrameRate&&(g=e.attributes.minFrameRate),void 0!==e.attributes.maxFrameRate&&(m=e.attributes.maxFrameRate),!0===p.audio){p.audio=!e.microphoneId||{deviceId:{exact:e.microphoneId}};var v={};r.audioProcessing&&(void 0!==r.audioProcessing.AGC&&((0,l.isFireFox)()?v.autoGainControl=r.audioProcessing.AGC:(0,l.isChrome)()&&(v.googAutoGainControl=r.audioProcessing.AGC,v.googAutoGainControl2=r.audioProcessing.AGC)),void 0!==r.audioProcessing.AEC&&(v.echoCancellation=r.audioProcessing.AEC),void 0!==r.audioProcessing.ANS&&((0,l.isFireFox)()?v.noiseSuppression=r.audioProcessing.ANS:(0,l.isChrome)()&&(v.googNoiseSuppression=r.audioProcessing.ANS))),r.stereo&&(0,l.isChrome)()&&(v.googAutoGainControl=!1,v.googAutoGainControl2=!1,v.echoCancellation=!1,v.googNoiseSuppression=!1),0!==Object.keys(v).length&&(!0===p.audio?p.audio={mandatory:v}:p.audio=Object.assign(p.audio,v))}!0===p.video?(p.video={width:{ideal:r.videoSize[0]},height:{ideal:r.videoSize[1]},frameRate:{ideal:g,max:m}},r.setVideoBitRate([500,500]),p.video.deviceId=e.cameraId?{exact:e.cameraId}:void 0):"object"===o(p.video)&&(p.video.frameRate={ideal:g,max:m},p.video.deviceId=e.cameraId?{exact:e.cameraId}:void 0)}}u.default.debug(p);var S=Object.assign({},p);if(r.constraints=p,(0,s.GetUserMedia)(S,function(t){r.screenAudioTrack&&t.addTrack(r.screenAudioTrack);var o=t.getVideoTracks().length>0,a=t.getAudioTracks().length>0;return S.video&&!o&&S.audio&&!a?(u.default.error("Media access: NO_CAMERA_MIC_PERMISSION"),n&&n("NO_CAMERA_MIC_PERMISSION")):S.video&&!o?(u.default.error("Media access: NO_CAMERA_PERMISSION"),n&&n("NO_CAMERA_PERMISSION")):S.screen&&!o?(u.default.error("Media access: NO_SCREEN_PERMISSION"),n&&n("NO_SCREEN_PERMISSION")):S.audio&&!a?(u.default.error("Media access: NO_MIC_PERMISSION"),n&&n("NO_MIC_PERMISSION")):(u.default.debug("User has granted access to local media"),r.dispatchEvent({type:"accessAllowed"}),r.stream=t,r.initialized=!0,e.video||e.screen||e.videoSource?r.videoEnabled=!0:r.videoEnabled=!1,e.audio||e.audioSource?r.audioEnabled=!0:r.audioEnabled=!1,e.screen&&e.audio&&!r.screenAudioTrack||i&&i(),r.hasVideo()&&(0,f.vsResHack)(t,function(e,t){r.videoWidth=e,r.videoHeight=t},function(e){u.default.warning("vsResHack failed:"+e)}),void(e.screen&&(0,l.isChrome)()&&r.stream&&r.stream.getVideoTracks()[0]&&(r.stream.getVideoTracks()[0].onended=function(){r.dispatchEvent({type:"stopScreenSharing"})})))},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,a>0)return void setTimeout(function(){r.init(i,n,a-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":r.dispatchEvent({type:"accessDenied"});break;case"InvalidStateError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}if(u.default.error("Media access:",t.msg),"function"==typeof n)return n(t)}),e.screen&&e.audio){var _=!e.microphoneId||{deviceId:{exact:e.microphoneId}},v={};r.audioProcessing&&(void 0!==r.audioProcessing.AGC&&((0,l.isFireFox)()?v.autoGainControl=r.audioProcessing.AGC:(0,l.isChrome)()&&(v.googAutoGainControl=r.audioProcessing.AGC,v.googAutoGainControl2=r.audioProcessing.AGC)),void 0!==r.audioProcessing.AEC&&(v.echoCancellation=r.audioProcessing.AEC),void 0!==r.audioProcessing.ANS&&((0,l.isFireFox)()?v.noiseSuppression=r.audioProcessing.ANS:(0,l.isChrome)()&&(v.googNoiseSuppression=r.audioProcessing.ANS))),r.stereo&&(0,l.isChrome)()&&(v.googAutoGainControl=!1,v.googAutoGainControl2=!1,v.echoCancellation=!1,v.googNoiseSuppression=!1),0!==Object.keys(v).length&&(_=!0===_?{mandatory:v}:Object.assign(_,v));var E={video:!1,audio:_};u.default.debug(E),(0,s.GetUserMedia)(E,function(e){u.default.info("User has granted access to auxiliary local media."),r.dispatchEvent({type:"accessAllowed"});var t=e.getAudioTracks()[0];r.stream?(r.stream.addTrack(t),i&&i()):r.screenAudioTrack=t},function(e){var t={type:"error",msg:e.name||e};switch(t.msg){case"Starting video failed":case"TrackStartError":if(r.videoSize=void 0,a>0)return void setTimeout(function(){r.init(i,n,a-1)},1);t.msg="MEDIA_OPTION_INVALID";break;case"DevicesNotFoundError":t.msg="DEVICES_NOT_FOUND";break;case"NotSupportedError":t.msg="NOT_SUPPORTED";break;case"PermissionDeniedError":case"InvalidStateError":t.msg="PERMISSION_DENIED",r.dispatchEvent({type:"accessDenied"});break;case"PERMISSION_DENIED":case"NotAllowedError":r.dispatchEvent({type:"accessDenied"});break;case"ConstraintNotSatisfiedError":t.msg="CONSTRAINT_NOT_SATISFIED";break;default:t.msg||(t.msg="UNDEFINED")}u.default.error("Media access:",t.msg),"function"==typeof n&&n(t)})}}else"function"==typeof n&&n({type:"warning",msg:"STREAM_HAS_NO_MEDIA_ATTRIBUTES"})}catch(e){u.default.error("Stream init:",e),"function"==typeof n&&n({type:"error",msg:e.message||e})}},r.close=function(){if(u.default.debug("Close stream with id",r.streamId),void 0!==r.stream){var e=r.stream.getTracks();for(var t in e)e.hasOwnProperty(t)&&e[t].stop();r.stream=void 0}if((0,l.isSafari)()&&r.pc&&r.pc.peerConnection&&r.pc.peerConnection.removeTrack&&r.pc.peerConnection.getSenders){r.pc.peerConnection.getSenders().forEach(function(e){e&&(u.default.debug("Remove Track",e),r.pc.peerConnection.removeTrack(e))})}r.initialized=!1,r.unmuteAudio=void 0,r.muteAudio=void 0,r.unmuteVideo=void 0,r.muteVideo=void 0,r.lowStream&&r.lowStream.close()},r.enableAudio=function(){return u.default.debug("Enable audio stream with id",r.streamId),r._flushAudioMixingMuteStatus(!1),!(!r.hasAudio()||!r.initialized||void 0===r.stream||!0===r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.unmuteAudio&&r.unmuteAudio(),r.audioEnabled=!0,r.stream.getAudioTracks()[0].enabled=!0,!0)},r.disableAudio=function(){return u.default.debug("Disable audio stream with id",r.streamId),r._flushAudioMixingMuteStatus(!0),!!(r.hasAudio()&&r.initialized&&void 0!==r.stream&&r.stream.getAudioTracks()[0].enabled)&&(void 0!==r.muteAudio&&r.muteAudio(),r.audioEnabled=!1,r.stream.getAudioTracks()[0].enabled=!1,r.sid&&g.report.audioSendingStopped(r.sid,{succ:!0,reason:"muteAudio"}),!0)},r.enableVideo=function(){return u.default.debug("Enable video stream with id",r.streamId),!(!r.initialized||void 0===r.stream||!r.stream.getVideoTracks().length||!0===r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.unmuteVideo&&r.unmuteVideo(),r.pc&&(r.pc.isVideoMute=!1),r.videoEnabled=!0,r.stream.getVideoTracks()[0].enabled=!0,r.lowStream&&r.lowStream.enableVideo(),!0)},r.disableVideo=function(){return u.default.debug("Disable video stream with id",r.streamId),!!(r.initialized&&void 0!==r.stream&&r.stream.getVideoTracks().length&&r.stream.getVideoTracks()[0].enabled)&&(void 0!==r.muteVideo&&r.muteVideo(),r.pc&&(r.pc.isVideoMute=!0),r.videoEnabled=!1,r.stream.getVideoTracks()[0].enabled=!1,r.lowStream&&r.lowStream.disableVideo(),r.sid&&g.report.videoSendingStopped(r.sid,{succ:!0,reason:"muteVideo"}),!0)},r.addTrack=function(e){if(r.pc&&r.pc.addTrack(e,r.stream),"audio"==e.kind){var t=new MediaStream;t.addTrack(e);var i=r.stream.getVideoTracks()[0];i&&t.addTrack(i),r.stream=t,r.player&&r.player.video&&(r.player.video.srcObject=r.stream)}else r.stream.addTrack(e)},r.removeTrack=function(e){r.pc&&r.pc.removeTrack(e,r.stream),r.stream.removeTrack(e),"live"==e.readyState&&(e.stop(),u.default.debug("Track "+e.kind+" Stopped"))},r.setAudioOutput=function(e,t,i){return"string"!=typeof e?(u.default.error("setAudioOutput Invalid Parameter",e),i&&i(v.default.INVALID_PARAMETER)):(r.audioOutput=e,r.player?void r.player.setAudioOutput(e,t,i):t&&t())},r.play=function(e,t){r.elementID=e,r.playOptions=t,r.isPlaying()?u.default.error("Stream.play(): Stream is already playing"):!r.local||r.video||r.screen?void 0!==e&&(r.player=new a.default({id:r.getId(),stream:r,elementID:e,options:t})):r.hasAudio()&&(r.player=new a.default({id:r.getId(),stream:r,elementID:e,options:t})),r.audioOutput&&r.player.setAudioOutput(r.audioOutput),void 0!==r.audioLevel&&r.player.setAudioVolume(r.audioLevel),r._flushAudioMixingMuteStatus(!1)},r.stop=function(){u.default.debug("Stop stream player with id",r.streamId),r.player?(r.player.destroy(),delete r.player):u.default.error("Stream.stop(): Stream is not playing"),r._flushAudioMixingMuteStatus(!0)},r.isPlaying=function(){return!!r.player},r.getVideoTrack=function(){if(r.stream&&r.stream.getVideoTracks){var e=r.stream.getVideoTracks()[0];if(e)return u.default.info("getVideoTrack",e),e}u.default.info("getVideoTrack None")},r.getAudioTrack=function(){if(r.stream&&r.stream.getAudioTracks){var e=r.stream.getAudioTracks()[0];if(e)return u.default.info("getAudioTracks",e),e}u.default.info("getAudioTracks None")},r._replaceMediaStreamTrack=function(e,t,i){if(r.stream){if("video"==e.kind){var n=r.stream.getVideoTracks()[0];if(n)return r.stream.removeTrack(n),r.stream.addTrack(e),u.default.debug("_replaceMediaStreamTrack "+e.kind+" SUCCESS"),"live"==n.readyState&&(n.stop(),u.default.debug("Track "+n.kind+" Stopped")),t&&t();var o="MEDIASTREAM_TRACK_NOT_FOUND";return u.default.error("MEDIASTREAM_TRACK_NOT_FOUND "+e.kind),i(o)}if("audio"==e.kind){var n=r.stream.getAudioTracks()[0];if(n)return r.stream.removeTrack(n),r.stream.addTrack(e),u.default.debug("_replaceMediaStreamTrack SUCCESS"),"live"==n.readyState&&(n.stop(),u.default.debug("Track "+n.kind+" Stopped")),t&&t();var o="MEDIASTREAM_TRACK_NOT_FOUND";return u.default.error("MEDIASTREAM_TRACK_NOT_FOUND "+e.kind),i(o)}var o="INVALID_TRACK_TYPE";return u.default.error("_replaceMediaStreamTrack "+o+" "+e.kind),i&&i(o)}var o="NO_STREAM_FOUND";return u.default.error("_replaceMediaStreamTrack "+o),i&&i(o)},r.replaceTrack=function(e,t,i){return e&&e.kind?r.pc&&r.pc.hasSender&&r.pc.hasSender(e.kind)?void r.pc.replaceTrack(e,function(){return u.default.debug("PeerConnection.replaceTrack "+e.kind+" SUCCESS"),r._replaceMediaStreamTrack(e,t,i)},function(t){return u.default.error("PeerConnection.replaceTrack "+e.kind+" Failed "+t),i&&i(t)}):r._replaceMediaStreamTrack(e,t,i):i&&i("INVALID_TRACK")},r.setAudioVolume=function(e){e>=0&&e<=100?(r.audioLevel=e,r.player&&r.player.setAudioVolume(e)):u.default.error("Invalid audio level: "+e)},r.getStats=function(e,t){var i={type:"collectStats",promises:[]};r.dispatchEvent(i),Promise.all(i.promises).then(function(t){var i=Object.assign.apply(Object,t);e&&setTimeout(e.bind(r,i),0)}).catch(function(e){t&&setTimeout(t.bind(r,e),0)})},r._getPCStats=function(){return new Promise(function(e,t){if(!r.pc||"established"!==r.pc.state||!r.pc.getStats){return t("PEER_CONNECTION_NOT_ESTABLISHED")}r.pc.getStats(function(i){if(!r.pc||"established"!==r.pc.state||!r.pc.getStats){return t("PEER_CONNECTION_STATE_CHANGE")}var n=r.pc.isSubscriber?(0,p.subscribeStatsFilter)(i):(0,p.publishStatsFilter)(i);return e(n)})}).then(function(e){return r.pc.isSubscriber?(0,l.isFireFox)()&&((0,p.setStat)(e,"videoReceiveResolutionHeight",r.videoHeight),(0,p.setStat)(e,"videoReceiveResolutionWidth",r.videoWidth)):(((0,l.isSafari)()||(0,l.isFireFox)())&&((0,p.setStat)(e,"videoSendResolutionHeight",r.videoHeight),(0,p.setStat)(e,"videoSendResolutionWidth",r.videoWidth)),((0,l.isSafari)()||(0,l.isFireFox)())&&r.uplinkStats&&(0,p.setStat)(e,"videoSendPacketsLost",r.uplinkStats.uplink_cumulative_lost)),Promise.resolve(e)})},r.getAudioLevel=function(){return r.audioLevelHelper?r.audioLevelHelper.getAudioLevel():r.stream?0!==r.stream.getAudioTracks().length?(r.audioLevelHelper=new f.audioLevelHelper(r.stream),r.audioLevelHelper.getAudioLevel()):void u.default.warning("can't get audioLevel beacuse no audio trace in stream"):(u.default.warning("can't get audioLevel beacuse no stream exist"),0)},r.loadAudioBuffer=function(e,t,i){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(n.status>400){var t=n.statusText;return u.default.error("loadAudioBuffer Failed: "+t),i(t)}var o=n.response;r.audioMixing.state==r.audioMixing.states.UNINIT&&r._initAudioContext(),r.audioMixing.ctx.decodeAudioData(o,function(t){r.audioMixing.buffer[e]=t,i(null)},function(e){u.default.error("decodeAudioData Failed:",e),i(e)})},n.send()},r.createAudioBufferSource=function(e){if(r.audioMixing.buffer[e.id]){var t=r.audioMixing.buffer[e.id],i=r.audioMixing.ctx.createBufferSource();i.buffer=t;var n=r.audioMixing.ctx.createGain();if(i.connect(n),n.connect(r.audioMixing.mediaStreamDest),i.gainNode=n,e.loop)i.loop=!0,i.start(0,e.playTime/1e3);else if(e.cycle>1)if((0,l.isChrome)()){i.loop=!0;var o=e.cycle*t.duration*1e3-(e.playTime||0);i.start(0,e.playTime/1e3,o/1e3)}else u.default.warning("Cycle Param is ignored by current browser"),i.start(0,e.playTime/1e3);else i.start(0,e.playTime/1e3);return r.audioMixing.source.push(i),r._flushAudioMixingMuteStatus(),i.addEventListener("ended",function(){for(var e=r.audioMixing.source.length-1;e>=0;e--)i==r.audioMixing.source[e]&&r.audioMixing.source.splice(e,1);r.dispatchEvent({type:"audioSourceEnded",source:i})}),i}return u.default.error("AUDIOBUFFER_NOT_FOUND",e.id),!1},r.on("audioSourceEnded",function(e){0!=r.audioMixing.source.length||r.audioMixing.state!=r.audioMixing.states.BUSY||r.pauseAt||(r.audioMixing.state=r.audioMixing.states.IDLE,r.audioMixing.startAt=null,r.audioMixing.startOffset=null,r.audioMixing.resumeAt=null,r.audioMixing.resumeOffset=null,r.audioMixing.mediaStreamSource.connect(r.audioMixing.mediaStreamDest))}),r.clearAudioBufferSource=function(){r.audioBufferSource.forEach(function(e){e.stop()})},r._initAudioContext=function(){if(r.audioMixing.state!==r.audioMixing.states.UNINIT)throw new Error("Failed to init audio context "+r.audioMixing.state);if(!r.stream)throw new Error("Failed to init audio context. Local Stream not initialized");r.audioMixing.ctx=(0,S.createAudioContext)(),r.audioMixing.mediaStreamSource=r.audioMixing.ctx.createMediaStreamSource(r.stream),r.audioMixing.mediaStreamDest=r.audioMixing.ctx.createMediaStreamDestination(),r.audioMixing.mediaStreamSource.connect(r.audioMixing.mediaStreamDest);var e=r.stream.getVideoTracks()[0];if(e&&r.audioMixing.mediaStreamDest.stream.addTrack(e),r.stream=r.audioMixing.mediaStreamDest.stream,r.pc&&r.pc.peerConnection&&r.pc.peerConnection){var t=r.pc.peerConnection&&r.pc.peerConnection.getSenders(),i=t.find(function(e){return e&&e.track&&"audio"==e.track.kind}),n=r.audioMixing.mediaStreamDest.stream.getAudioTracks()[0];i&&i.replaceTrack&&n&&i.replaceTrack(n)}r.audioMixing.state=r.audioMixing.states.IDLE},r._reloadInEarMonitoringMode=function(e){if(e){if(!r.audioMixing.inEarMonitoringModes[e])return u.default.error("Invalid InEarMonitoringMode "+e);r.audioMixing.inEarMonitoring=e}switch(r.audioMixing.state==r.audioMixing.states.UNINIT&&r._initAudioContext(),r.audioMixing.inEarMonitoring){case r.audioMixing.inEarMonitoringModes.FILE:r.audioMixing.mediaStreamSource.connectedToDestination&&(r.audioMixing.mediaStreamSource.disconnect(r.audioMixing.ctx.destination),r.audioMixing.mediaStreamSource.connectedToDestination=!1);case r.audioMixing.inEarMonitoringModes.ALL:r.audioMixing.source.forEach(function(e){e.connectedToDestination||(e.gainNode.connect(r.audioMixing.ctx.destination),e.connectedToDestination=!0)})}switch(r.audioMixing.inEarMonitoring){case r.audioMixing.inEarMonitoringModes.MICROPHONE:r.audioMixing.source.forEach(function(e){e.connectedToDestination&&(e.gainNode.disconnect(r.audioMixing.ctx.destination),e.connectedToDestination=!1)});case r.audioMixing.inEarMonitoringModes.ALL:r.audioMixing.mediaStreamSource.connectedToDestination||(r.audioMixing.mediaStreamSource.connect(r.audioMixing.ctx.destination),r.audioMixing.mediaStreamSource.connectedToDestination=!0)}},r._startAudioMixingBufferSource=function(e){r.audioMixing.state==r.audioMixing.states.UNINIT&&r._initAudioContext();var t={id:e.filePath,loop:e.loop,cycle:e.cycle,playTime:e.playTime},i=e.replace,n=r.createAudioBufferSource(t);return n?(r._reloadInEarMonitoringMode(),i&&r.audioMixing.mediaStreamSource.disconnect(r.audioMixing.mediaStreamDest),n):null},r._stopAudioMixingBufferSource=function(){var e=r.audioMixing.source[0];return e?(r.audioMixing.mediaStreamSource.connect(r.audioMixing.mediaStreamDest),e.stop(),e):null},r._flushAudioMixingMuteStatus=function(e){void 0!==e&&(r.audioMixing.muted=!!e),r.audioMixing.source.forEach(function(e){r.audioMixing.muted?e.gainNode.gain.value=0:e.gainNode.gain.value=r.audioMixing.volume/100})},r.startAudioMixing=function(e,t){if((0,l.isSafari)()&&(0,l.getBrowserVersion)()<12){var i="BROWSER_NOT_SUPPORT";return u.default.error("Cannot startAudioMixing: ",i),t(i)}if(r.audioMixing.state==r.audioMixing.states.UNINIT&&r._initAudioContext(),r.audioMixing.state!==r.audioMixing.states.IDLE){var i=r.audioMixing.state;return u.default.error("Cannot startAudioMixing: ",i),t(i)}if(void 0!==e.cycle&&!e.cycle>0){var i="Invalid Parmeter cycle: "+e.cycle;return u.default.error(i),t(i)}if(r.audioMixing.state=r.audioMixing.states.STARTING,r.audioMixing.options=e,r.audioMixing.buffer[e.filePath]){if(r._startAudioMixingBufferSource(e))return r.audioMixing.startAt=Date.now(),r.audioMixing.resumeAt=null,r.audioMixing.pauseOffset=null,r.audioMixing.pauseAt=null,r.audioMixing.resumeOffset=null,r.audioMixing.stopAt=null,r.audioMixing.startOffset=e.playTime||0,r.audioMixing.state=r.audioMixing.states.BUSY,t&&t(null);r.audioMixing.state=r.audioMixing.states.IDLE;var n="CREATE_BUFFERSOURCE_FAILED";if(t)return t(n);u.default.error(n)}else r.loadAudioBuffer(e.filePath,e.filePath,function(i){if(i)r.audioMixing.state=r.audioMixing.states.IDLE,t?t(i):u.default.error(i);else{if(r._startAudioMixingBufferSource(e))return r.audioMixing.startAt=Date.now(),r.audioMixing.resumeAt=null,r.audioMixing.pauseOffset=null,r.audioMixing.pauseAt=null,r.audioMixing.resumeOffset=null,r.audioMixing.stopAt=null,r.audioMixing.startOffset=e.playTime||0,r.audioMixing.state=r.audioMixing.states.BUSY,t&&t(null);r.audioMixing.state=r.audioMixing.states.IDLE;var i="CREATE_BUFFERSOURCE_FAILED";if(t)return t(i);u.default.error(i)}})},r.stopAudioMixing=function(){r.audioMixing.state==r.audioMixing.states.BUSY||r.audioMixing.state==r.audioMixing.states.PAUSED?(r._stopAudioMixingBufferSource(),r.audioMixing.stopAt=Date.now(),r.audioMixing.state=r.audioMixing.states.IDLE):u.default.error("Invalid state for stopAudioMixing "+r.audioMixing.state)},r.pauseAudioMixing=function(){r.audioMixing.state==r.audioMixing.states.BUSY?(r._stopAudioMixingBufferSource(),r.audioMixing.pauseAt=Date.now(),r.audioMixing.state=r.audioMixing.states.PAUSED,r.audioMixing.resumeAt?r.audioMixing.pauseOffset=r.audioMixing.pauseAt-r.audioMixing.resumeAt+r.audioMixing.resumeOffset:r.audioMixing.pauseOffset=r.audioMixing.pauseAt-r.audioMixing.startAt+r.audioMixing.startOffset):u.default.error("Invalid State for pauseAudioMixing "+r.audioMixing.state)},r.resumeAudioMixing=function(){if(r.audioMixing.state==r.audioMixing.states.PAUSED){var e={filePath:r.audioMixing.options.filePath,cycle:r.audioMixing.options.cycle,loop:r.audioMixing.options.loop,playTime:r.audioMixing.pauseOffset,replace:r.audioMixing.options.replace};r._startAudioMixingBufferSource(e),r.audioMixing.resumeAt=Date.now(),r.audioMixing.resumeOffset=r.audioMixing.pauseOffset,r.audioMixing.state=r.audioMixing.states.BUSY,r.audioMixing.pauseAt=null,r.audioMixing.pauseOffset=null}else u.default.error("Invalid State for resumeAudioMixing "+r.audioMixing.state)},r.adjustAudioMixingVolume=function(e){r.audioMixing.volume=e,r._flushAudioMixingMuteStatus()},r.getAudioMixingDuration=function(){if(r.audioMixing.options&&r.audioMixing.options.filePath&&r.audioMixing.buffer[r.audioMixing.options.filePath]){return 1e3*r.audioMixing.buffer[r.audioMixing.options.filePath].duration}return null},r.getAudioMixingCurrentPosition=function(){if(r.audioMixing.state==r.audioMixing.states.PAUSED)return r.audioMixing.pausedPosition%r.getAudioMixingDuration();if(r.audioMixing.state==r.audioMixing.states.BUSY){return(Date.now()-r.audioMixing.startAt+r.audioMixing.startOffset)%r.getAudioMixingDuration()}u.default.error("Invalid State for getAudioMixingCurrentPosition "+r.audioMixing.state)},r.setAudioMixingPosition=function(e){if(r.audioMixing.state==r.audioMixing.states.BUSY){r._stopAudioMixingBufferSource();var t={filePath:r.audioMixing.options.filePath,loop:r.audioMixing.options.loop,cycle:r.audioMixing.options.cycle,playTime:e};r._startAudioMixingBufferSource(t),r.audioMixing.startAt=Date.now(),r.audioMixing.startOffset=e,r.audioMixing.resumeAt=null,r.audioMixing.resumeOffset=null,r.audioMixing.pauseOffset=null,r.audioMixing.pauseAt=null}else r.audioMixing.state==r.audioMixing.states.PAUSED?r.audioMixing.pauseOffset=e:u.default.error("Invalid State for setAudioMixingPosition "+r.audioMixing.state)},r.setVideoProfile("480P"),r._switchVideoDevice=function(e,t,i){if(e===r.cameraId)return t&&t();r.constraints.video.deviceId={exact:e},u.default.debug(r.constraints);var n=Object.assign({},r.constraints);(0,s.GetUserMedia)(n,function(n){try{(0,l.isSafari)()&&"11"===(0,l.getBrowserVersion)()?r.replaceTrack(n.getVideoTracks()[0],t,i):(r.removeTrack(r.stream.getVideoTracks()[0]),r.addTrack(n.getVideoTracks()[0]),r.isPlaying()&&(r.stop(),r.elementID&&r.play(r.elementID)),r.cameraId=e,t&&t())}catch(e){return i&&i(e)}},function(e){return i&&i(e)})},r._switchAudioDevice=function(e,t,i){if(e===r.microphoneId)return t&&t();!0===r.constraints.audio?r.constraints.audio={deviceId:{exact:e}}:r.constraints.audio.deviceId={exact:e},u.default.debug(r.constraints);var n=Object.assign({},r.constraints);(0,s.GetUserMedia)(n,function(n){try{(0,l.isSafari)()&&"11"===(0,l.getBrowserVersion)()?r.replaceTrack(n.getAudioTracks()[0],t,i):(r.removeTrack(r.stream.getAudioTracks()[0]),r.addTrack(n.getAudioTracks()[0]),r.isPlaying()&&(r.stop(),r.elementID&&r.play(r.elementID)),r.microphoneId=e,t&&t())}catch(e){return i&&i(e)}},function(e){return i&&i(e)})},r.switchDevice=function(e,t,i,n){var o=function(){return r.inSwitchDevice=!1,i&&i()},a=function(e){r.inSwitchDevice=!1,n&&"function"==typeof n?n(e):u.default.error(e)};return r.inSwitchDevice?n&&n("Device switch is in process."):(r.inSwitchDevice=!0,r.local?r.screen&&"video"===e?a("The device cannot be switched during screen-sharing."):r.videoSource||r.audioSource?a("The device cannot be switched when using videoSource or audioSource."):r.lowStream?a("The device cannot be switched when using lowstream."):r.audioMixing.state!==r.audioMixing.states.UNINIT&&r.audioMixing.state!==r.audioMixing.states.IDLE?a("The device cannot be switched when using audio Mixing."):void _.deviceManager.getDeviceById(t,function(){if("video"===e)r._switchVideoDevice(t,o,a);else{if("audio"!==e)return a("Invalid type.");r._switchAudioDevice(t,o,a)}},function(){return a("The device does not exist.")}):a("Only the local stream can switch the device."))},r},I=function(e){return u.default.debug("Create stream"),E(e)};t.Stream=E,t.createStream=I},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deviceManager=void 0;var o=i(1),r=i(0),a=n(r),s=i(3),d=n(s),c=function(){var e=(0,o.EventDispatcher)();return e.devicesHistory={},e.states={UNINIT:"UNINIT",INITING:"INITING",INITED:"INITED"},e.state=e.states.UNINIT,e.deviceStates={ACTIVE:"ACTIVE",INACTIVE:"INACTIVE"},e.deviceReloadTimer=null,e._init=function(t,i){e.state=e.states.INITING,e.devicesHistory={},e._reloadDevicesInfo(function(){e.state=e.states.INITED,e.dispatchEvent({type:"inited"}),t&&t()},function(t){a.default.warning("Device Detection functionality cannot start properly."),e.state=e.states.UNINIT,i&&i(t)})},e._enumerateDevices=function(e,t){if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices)return a.default.warning("enumerateDevices() not supported."),t&&t("enumerateDevices() not supported");navigator.mediaDevices.enumerateDevices().then(function(t){e&&setTimeout(function(){e(t)},0)}).catch(function(e){t&&t(e)})},e._reloadDevicesInfo=function(t,i){var n=[];e._enumerateDevices(function(i){var o=Date.now();i.forEach(function(t){var i=e.devicesHistory[t.deviceId];if((i?i.state:e.deviceStates.INACTIVE)!=e.deviceStates.ACTIVE){var r=i||{initAt:o};r.device=t,r.state=e.deviceStates.ACTIVE,n.push(r),e.devicesHistory[t.deviceId]=r}e.devicesHistory[t.deviceId].lastReloadAt=o});for(var r in e.devicesHistory){var s=e.devicesHistory[r];s&&s.state==e.deviceStates.ACTIVE&&s.lastReloadAt!==o&&(s.state=e.deviceStates.INACTIVE,n.push(s)),s.lastReloadAt=o}e.state==e.states.INITED&&n.forEach(function(t){var i=Object.assign({},t);switch(t.device.kind){case"audioinput":i.type="recordingDeviceChanged";break;case"audiooutput":i.type="playoutDeviceChanged";break;case"videoinput":i.type="cameraChanged";break;default:a.default.warning("Unknown device change",i),i.type="unknownDeviceChanged"}e.dispatchEvent(i)}),t&&t()},i)},e.getDeviceById=function(t,i,n){e.getDevices(function(e){for(var o=0;o<e.length;o++){var r=e[o];if(r&&r.deviceId===t)return i&&i(r)}return n&&n()})},e.getDevices=function(t,i){e._enumerateDevices(t,function(e){i&&i(e.name+": "+e.message)})},e.getVideoCameraIdByLabel=function(t,i,n){e.getCameras(function(e){var o=!0,r=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){var u=s.value;if(u.label===t)return i&&i(u.deviceId)}}catch(e){r=!0,a=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw a}}return n&&n(d.default.NOT_FIND_DEVICE_BY_LABEL)},n)},e.getRecordingDevices=function(t,i){return e._enumerateDevices(function(e){var i=e.filter(function(e){return"audioinput"==e.kind});t&&t(i)},function(e){i&&i(e)})},e.getPlayoutDevices=function(t,i){return e._enumerateDevices(function(e){var i=e.filter(function(e){return"audiooutput"==e.kind});t&&t(i)},function(e){i&&i(e)})},e.getCameras=function(t,i){return e._enumerateDevices(function(e){var i=e.filter(function(e){return"videoinput"==e.kind});t&&t(i)},function(e){i&&i(e)})},e._init(function(){navigator.mediaDevices&&navigator.mediaDevices.addEventListener&&navigator.mediaDevices.addEventListener("devicechange",function(){e._reloadDevicesInfo()}),e.deviceReloadTimer=setInterval(e._reloadDevicesInfo,5e3)}),e},u=new c;t.deviceManager=u},function(e,t,i){function n(e,t,i){var n=t&&i||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null),e=e||{};var a=e.random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var s=0;s<16;++s)t[n+s]=a[s];return t||r(a)}var o=i(20),r=i(21);e.exports=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=window.AudioContext||window.webkitAudioContext,o=function(){if(n)return new n;throw new Error("AUDIO_CONTEXT_NOT_SUPPORTED")},r=function(){return!!n};t.createAudioContext=o,t.checkAudioContext=r},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.GetUserMedia=t.Connection=void 0;var o=i(24),r=n(o),a=i(25),s=n(a),d=i(26),c=n(d),u=i(27),l=n(u),p=i(28),f=n(p),g=i(0),m=n(g),v=i(29),S=n(v),_=i(3),E=103,I=function(e){var t={};if(e.session_id=E+=1,"undefined"!=typeof window&&window.navigator)if(null!==window.navigator.userAgent.match("Firefox"))t.browser="mozilla",t=(0,f.default)(e);else if(window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome"))m.default.debug("Safari"),t=(0,c.default)(e),t.browser="safari";else if(window.navigator.userAgent.indexOf("MSIE "))t=(0,s.default)(e),t.browser="ie";else if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]>=26)t=(0,s.default)(e),t.browser="chrome-stable";else{if(!(window.navigator.userAgent.toLowerCase().indexOf("chrome")>=40))throw t.browser="none","WebRTC stack not available";t=(0,r.default)(e),t.browser="chrome-canary"}else m.default.error("Publish/subscribe video/audio streams not supported yet"),t=(0,l.default)(e);return t},h=function(e,t,i){if({}.config=e,navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,e.screen){var n=null;try{n=window.require("electron")}catch(e){}if(n)return void(n.desktopCapturer?new S.default(e,t,i).shareScreen(n):i(_.ErrorCodes.ELECTRON_NOT_SUPPORT_SHARING_SCREEN));if(m.default.debug("Screen access requested"),null!==window.navigator.userAgent.match("Firefox")){if(!~["screen","window","application"].indexOf(e.mediaSource))return i&&i("Invalid mediaSource, mediaSource should be one of [screen, window, application]");if(!e.attributes)return i&&i("Share screen attributes is null");var o={};o.video={frameRate:{ideal:e.attributes.mxaFr,max:e.attributes.mxaFr},height:{ideal:e.attributes.height},width:{ideal:e.attributes.width},mediaSource:e.mediaSource},navigator.getMedia(o,t,i)}else if(null!==window.navigator.userAgent.match("Chrome")){if(window.navigator.appVersion.match(/Chrome\/([\w\W]*?)\./)[1]<34)return void i({code:"This browser does not support screen sharing"});var r="okeephmleflklcdebijnponpabbmmgeo";e.extensionId&&(m.default.debug("extensionId supplied, using "+e.extensionId),r=e.extensionId),m.default.debug("Screen access on chrome stable, looking for extension");try{chrome.runtime.sendMessage(r,{getStream:!0},function(n){if(void 0===n)return m.default.debug("Access to screen denied"),void i({code:"Access to screen denied"});var r=n.streamId,a=e.attributes.width,s=e.attributes.height,d=e.attributes.maxFr,c=e.attributes.minFr;o={video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:r,maxHeight:s,maxWidth:a,maxFrameRate:d,minFrameRate:c}}},navigator.getMedia(o,t,i)})}catch(e){m.default.debug("AgoraRTC screensharing plugin is not accessible");var a={code:"no_plugin_present"};return void i(a)}}else m.default.debug("This browser does not support screenSharing")}else window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?navigator.mediaDevices.getUserMedia(e).then(t).catch(i):"undefined"!=typeof navigator&&navigator.getMedia?navigator.getMedia(e,t,i):m.default.error("Video/audio streams not supported yet")};t.Connection=I,t.GetUserMedia=h},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.subscribeStatsFilter=t.publishStatsFilter=t.setStat=void 0;var n=i(0),o=(function(e){e&&e.__esModule}(n),function(e,t,i){if(["End2EndDelay","TransportDelay","PacketLossRate","RecvLevel","RecvBitrate","CodecType","MuteState","RecordingLevel","SendLevel","SamplingRate","SendBitrate","CodecType","MuteState","End2EndDelay","TransportDelay","PacketLossRate","RecvBitrate","RecvResolutionWidth","RecvResolutionHeight","RenderFrameRate","TargetSendBitrate","SendFrameRate","SendFrameRate","SendBitrate","SendResolutionWidth","SendResolutionHeight","EncodeDelay","MuteState","RTT","accessDelay","audioSendBytes","audioSendPackets","videoSendBytes","videoSendPackets","videoSendPacketsLost","videoSendFrameRate","audioSendPacketsLost","videoSendResolutionWidth","videoSendResolutionHeight","accessDelay","audioReceiveBytes","audioReceivePackets","audioReceivePacketsLost","videoReceiveBytes","videoReceivePackets","videoReceivePacketsLost","videoReceiveFrameRate","videoReceiveDecodeFrameRate","videoReceiveResolutionWidth","videoReceiveResolutionHeight","endToEndDelay","videoReceiveDelay","audioReceiveDelay"].indexOf(t)>-1&&("string"==typeof i||isFinite(i)))return e[t]=""+i}),r=function(e){var t={};return e.forEach(function(e){e.id&&(-1===e.id.indexOf("send")&&-1===e.id.indexOf("outbound_rtp")&&-1===e.id.indexOf("OutboundRTP")||("audio"===e.mediaType?(o(t,"audioSendBytes",e.bytesSent),o(t,"audioSendPackets",e.packetsSent),o(t,"audioSendPacketsLost",e.packetsLost)):(o(t,"videoSendBytes",e.bytesSent),o(t,"videoSendPackets",e.packetsSent),o(t,"videoSendPacketsLost",e.packetsLost),o(t,"videoSendFrameRate",e.googFrameRateSent),o(t,"videoSendResolutionWidth",e.googFrameWidthSent),o(t,"videoSendResolutionHeight",e.googFrameHeightSent))))}),t},a=function(e){var t={};return e.forEach(function(e){e.id&&(-1===e.id.indexOf("recv")&&-1===e.id.indexOf("inbound_rtp")&&-1===e.id.indexOf("InboundRTP")||("audio"===e.mediaType?(o(t,"audioReceiveBytes",e.bytesReceived),o(t,"audioReceivePackets",e.packetsReceived),o(t,"audioReceivePacketsLost",e.packetsLost)):(o(t,"videoReceiveBytes",e.bytesReceived),o(t,"videoReceivePacketsLost",e.packetsLost),o(t,"videoReceivePackets",e.packetsReceived),o(t,"videoReceiveFrameRate",e.googFrameRateReceived),o(t,"videoReceiveDecodeFrameRate",e.googFrameRateDecoded),o(t,"videoReceiveResolutionWidth",e.googFrameWidthReceived),o(t,"videoReceiveResolutionHeight",e.googFrameHeightReceived))))}),t};t.setStat=o,t.publishStatsFilter=r,t.subscribeStatsFilter=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["live","rtc","web","interop","h264_interop","web-only"],o=["vp8","h264"],r=["aes-128-xts","aes-256-xts","aes-128-ecb"];t.AUDIO_SAMPLE_RATE_32000=32e3,t.AUDIO_SAMPLE_RATE_44100=44100,t.AUDIO_SAMPLE_RATE_48000=48e3,t.VIDEO_CODEC_PROFILE_BASELINE=66,t.VIDEO_CODEC_PROFILE_MAIN=77,t.VIDEO_CODEC_PROFILE_HIGH=100,t.REMOTE_VIDEO_STREAM_HIGH=0,t.REMOTE_VIDEO_STREAM_LOW=1,t.REMOTE_VIDEO_STREAM_MEDIUM=2,t.CLIENT_MODE_LIVE="live",t.CLIENT_MODE_RTC="rtc",t.CLIENT_MODE_WEB="web",t.CLIENT_MODE_INTEROP="interop",t.CLIENT_MODE_H264_INTEROP="h264_interop",t.CLIENT_MODE_WEBONLY="web-only",t.CLIENT_MODES=n,t.CLIENT_CODEC_VP8="vp8",t.CLIENT_CODEC_H264="h264",t.CLIENT_CODECS=o,t.ENCRYPTION_MODES=r,t.ENCRYPTION_MODE_AES128XTS="aes-128-xts",t.ENCRYPTION_MODE_AES256XTS="aes-256-xts",t.ENCRYPTION_MODE_AES128ECB="aes-128-ecb",t.ENCRYPTION_MODE_NONE="none"},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e&&e.apply(this,[].slice.call(arguments,1))};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getGatewayList=void 0;var n=i(2),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(n),r=i(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),s=i(8),d=i(4),c=i(3),u=function(e,t,i,n){var o=(new Date).getTime(),r="";t.multiIP&&t.multiIP.gateway_ip&&(r={vocs_ip:[t.multiIP.uni_lbs_ip],vos_ip:[t.multiIP.gateway_ip]});var u={flag:4,ts:+new Date,key:t.appId,cname:t.cname,detail:{},uid:t.uid||0};r&&(u.detail[5]=JSON.stringify(r)),(0,s.post)(e,u,function(r){try{var s=JSON.parse(r).res,u=s.code}catch(e){var l="requestChooseServer failed with unexpected body "+r;return a.default.error(l),n(l)}if(u){var p=c.APErrorCode[s.code]||u;return d.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:e,serverList:null,ec:p}),n("Get server node failed ["+p+"]",e,p)}var f,g=[];if(f=s.detail&&"CN"==s.detail[3]?".agoraio.cn":".agora.io",s.addresses.forEach(function(e){var t;e.ip&&e.port?(e.ip.match(/^[\.\:\d]+$/)?t="webrtc-"+e.ip.replace(/[^\d]/g,"-")+f+":"+e.port:(a.default.info("Cannot recognized as IP address "+e.ip+". Used As Host instead"),t=e.ip+":"+e.port),g.push(t)):a.default.error("Invalid address format ",e)}),!g.length){a.default.error("Empty Address response",s);var p="EMPTY_ADDRESS_RESPONSE";return d.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:e,serverList:null,ec:p}),n("Get server node failed ["+p+"]",e,p)}var m={gateway_addr:g,uid:s.uid,cid:s.cid,uni_lbs_ip:s.detail};return i(m,e)},function(e,i){"timeout"===e.type?(d.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:i,serverList:null,ec:"timeout"}),n("Connect choose server timeout",i)):d.report.joinChooseServer(t.sid,{lts:o,succ:!1,csAddr:i,serverList:null,ec:"server_wrong"})},{"X-Packet-Service-Type":0,"X-Packet-URI":44})},l=function(e,t,i){for(var n=(new Date).getTime(),r=!1,s=!0,l=function(i,o){if(r)d.report.joinChooseServer(e.sid,{lts:n,succ:!0,csAddr:o,serverList:i.gateway_addr,cid:i.cid+"",uid:i.uid+"",ec:null},!1);else{if(clearTimeout(S),r=!0,a.default.debug("Get gateway address:",i.gateway_addr),e.proxyServer){for(var s=i.gateway_addr,c=0;c<s.length;c++){var u=s[c].split(":");i.gateway_addr[c]=e.proxyServer+"/ws/?h="+u[0]+"&p="+u[1]}a.default.debug("Get gateway address:",i.gateway_addr)}t(i),d.report.joinChooseServer(e.sid,{lts:n,succ:!0,csAddr:o,serverList:i.gateway_addr,cid:i.cid+"",uid:i.uid+"",ec:null},!0)}},p=function(e,t,n){s&&(a.default.error(e,t,n),n&&!c.JOIN_CS_RETRY_LIST.includes(n)&&(s=!1,i(n)))},f=o.WEBCS_DOMAIN,g=0;g<f.length;++g){var m;if("string"==typeof f[g]){var v=f[g];m=e.proxyServer?"https://"+e.proxyServer+"/ap/?url="+v+"/api/v1":"https://"+v+"/api/v1",a.default.debug("Connect to choose_server: "+m),u(m,e,l,p)}else a.default.error("Invalid Host",f[g])}var S=setTimeout(function(){if(!r)for(var t=o.WEBCS_DOMAIN_BACKUP_LIST,i=0;i<t.length;++i){if("string"==typeof t[i]){var n=t[i];m=e.proxyServer?"https://"+e.proxyServer+"/ap/?url="+n+"/api/v1":"https://"+n+"/api/v1",a.default.debug("Connect to backup_choose_server: "+m),u(m,e,l,p)}else a.default.error("Invalid Host",t[i])}},1e3);setTimeout(function(){!r&&s&&i()},o.WEBCS_BACKUP_CONNECT_TIMEOUT)},p=function(e,t,i){var n=!1,o=null,r=1;!function i(){n||l(e,function(e){n=!0,clearTimeout(o),t(e)},function(e){if(e)return void a.default.info("Join failed: "+e);a.default.debug("Request gateway list will be restart in "+r+"s"),o=setTimeout(function(){i()},1e3*r),r=r>=3600?3600:2*r})}()};t.getGatewayList=p},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(2),o=i(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=i(7),s=i(9),d=i(10),c=i(15),u=i(30),l=d.deviceManager.getDevices;t.default={TranscodingUser:u.TranscodingUser,LiveTranscoding:u.LiveTranscoding,createClient:u.createClient,createStream:s.createStream,Logger:r.default,getDevices:l,checkSystemRequirements:a.checkSystemRequirements,VERSION:n.VERSION,BUILD:n.BUILD,AUDIO_SAMPLE_RATE_32000:c.AUDIO_SAMPLE_RATE_32000,AUDIO_SAMPLE_RATE_44100:c.AUDIO_SAMPLE_RATE_44100,AUDIO_SAMPLE_RATE_48000:c.AUDIO_SAMPLE_RATE_48000,VIDEO_CODEC_PROFILE_BASELINE:c.VIDEO_CODEC_PROFILE_BASELINE,VIDEO_CODEC_PROFILE_MAIN:c.VIDEO_CODEC_PROFILE_MAIN,VIDEO_CODEC_PROFILE_HIGH:c.VIDEO_CODEC_PROFILE_HIGH,REMOTE_VIDEO_STREAM_HIGH:c.REMOTE_VIDEO_STREAM_HIGH,REMOTE_VIDEO_STREAM_LOW:c.REMOTE_VIDEO_STREAM_LOW,REMOTE_VIDEO_STREAM_MEDIUM:c.REMOTE_VIDEO_STREAM_MEDIUM}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=new Date;return e.toTimeString().split(" ")[0]+":"+e.getMilliseconds()};t.getTimestamp=n},function(e,t){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var n=new Uint8Array(16);e.exports=function(){return i(n),n}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},function(e,t){function i(e,t){var i=t||0,o=n;return[o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],"-",o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]],o[e[i++]]].join("")}for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=i},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(5),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(o),a=i(23),s=n(a),d=i(0),c=n(d),u=i(6),l=i(3),p=n(l),f=function(e){var t=(0,s.default)({});if(t.id=e.id,t.fit=e.options&&e.options.fit,"contain"!==t.fit&&"cover"!==t.fit&&(t.fit=null),t.url=e.url,t.stream=e.stream.stream,t.elementID=e.elementID,t.setAudioOutput=function(e,i,n){var o=t.video||t.audio;return o?o.setSinkId?void o.setSinkId(e).then(function(){return c.default.debug("video "+t.id+" setAudioOutput "+e+" SUCCESS"),o==t.video&&t.audio?t.audio.setSinkId(e):Promise.resolve()}).then(function(){return c.default.debug("audio "+t.id+" setAudioOutput "+e+" SUCCESS"),i&&i()}).catch(function(e){return c.default.error("VideoPlayer.setAudioOutput",e),n&&n(e)}):(c.default.error(p.default.WEB_API_NOT_SUPPORTED),n&&n(p.default.WEB_API_NOT_SUPPORTED)):(c.default.error(p.default.PLAYER_NOT_FOUND),n&&n(p.default.PLAYER_NOT_FOUND))},t.destroy=function(){(0,u.setSrcObject)(t.video,null),(0,u.setSrcObject)(t.audio,null),t.video.pause(),delete t.resizer,document.getElementById(t.div.id)&&t.parentNode.contains(t.div)&&t.parentNode.removeChild(t.div)},t.div=document.createElement("div"),t.div.setAttribute("id","player_"+t.id),e.stream.video?t.div.setAttribute("style","width: 100%; height: 100%; position: relative; background-color: black; overflow: hidden;"):t.div.setAttribute("style","width: 100%; height: 100%; position: relative; overflow: hidden;"),t.video=document.createElement("video"),t.video.setAttribute("id","video"+t.id),e.stream.local&&!e.stream.screen?e.stream.mirror?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; transform: rotateY(180deg); object-fit: "+(t.fit||"cover")+";"):t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; object-fit: "+(t.fit||"cover")+";"):e.stream.video?(t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; object-fit: "+(t.fit||"cover")+";"),window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")&&t.video.setAttribute("controls","")):e.stream.screen?t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; object-fit: "+(t.fit||"contain")):t.video.setAttribute("style","width: 100%; height: 100%; position: absolute; display: none; object-fit: "+(t.fit||"cover")),t.video.setAttribute("autoplay",""),t.video.setAttribute("muted",""),t.video.setAttribute("playsinline",""),e.stream.local&&(t.video.volume=0,t.video.setAttribute("muted","")),t.audio=document.createElement("audio"),t.audio.setAttribute("id","audio"+t.id),t.audio.setAttribute("autoplay",""),e.stream.local&&(t.audio.volume=0,t.audio.setAttribute("muted","")),void 0!==t.elementID?(document.getElementById(t.elementID).appendChild(t.div),t.container=document.getElementById(t.elementID)):(document.body.appendChild(t.div),t.container=document.body),t.parentNode=t.div.parentNode,t.video.addEventListener("playing",function(e){!function e(){if(t.video.videoWidth*t.video.videoHeight>4)return void c.default.debug("video dimensions:",t.video.videoWidth,t.video.videoHeight);setTimeout(e,50)}()}),e.stream.hasVideo()||e.stream.hasScreen())t.div.appendChild(t.video),t.div.appendChild(t.audio),(0,u.attachMediaStream)(t.video,e.stream.stream),(0,u.attachMediaStream)(t.audio,e.stream.stream);else if(!e.stream.local&&t.video.removeAttribute("muted"),t.div.appendChild(t.video),window.MediaStream&&r.isSafari()){var i=new MediaStream(e.stream.stream.getAudioTracks());(0,u.setSrcObject)(t.video,i)}else(0,u.setSrcObject)(t.video,e.stream.stream);return t.setAudioVolume=function(e){var i=parseInt(e)/100;isFinite(i)&&(i<0?i=0:i>1&&(i=1),t.video&&(t.video.volume=i),t.audio&&(t.audio.volume=i))},t};t.default=f},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),o=function(e){var t=(0,n.EventDispatcher)(e);return t.url=".",t};t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=(i(6),function(e){var t={},i=webkitRTCPeerConnection;t.pc_config={iceServers:[]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.password,url:e.turnServer.url}))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new i(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){e.candidate?t.iceCandidateCount+=1:(o.default.debug("PeerConnection State: "+t.peerConnection.iceGatheringState),void 0===t.ices&&(t.ices=0),t.ices=t.ices+1,t.ices>=1&&t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded()))};var n=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};return t.processSignalingMessage=function(e){var i,o=JSON.parse(e);t.incomingMessage=o,"new"===t.state?"OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===o.messageType?(i={sdp:o.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===o.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state))},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=n(e.sdp),o.default.debug("Changed",e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t._getSender=function(e){if(t.peerConnection&&t.peerConnection.getSenders){var i=t.peerConnection.getSenders(),n=i.find(function(t){return t.track.kind==e});if(n)return n}return null},t.hasSender=function(e){return!!t._getSender(e)},t.replaceTrack=function(e,i,n){var o=t._getSender(e.kind);if(!o){return n("NO_SENDER_FOUND")}try{o.replaceTrack(e)}catch(e){return n&&n(e)}setTimeout(function(){return i&&i()},50)},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.onopen=function(){t.onopen&&t.onopen()},t.peerConnection.onaddstream=function(e){t.onaddstream&&t.onaddstream(e)},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t});t.default=r},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(6),a=function(e){var t={},i=r.RTCPeerConnection;t.uid=e.uid,t.isVideoMute=e.isVideoMute,t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[{url:"stun:webcs.agora.io:3478"}]},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&(t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.credential,credentialType:"password",urls:"turn:"+e.turnServer.url+":"+e.turnServer.udpport+"?transport=udp"}),"string"==typeof e.turnServer.tcpport&&""!==e.turnServer.tcpport&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.credential,credentialType:"password",urls:"turn:"+e.turnServer.url+":"+e.turnServer.tcpport+"?transport=tcp"}),!0===e.turnServer.forceturn&&(t.pc_config.iceTransportPolicy="relay")))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new i(t.pc_config,t.con),t.peerConnection.onicecandidate=function(e){var i,n,r,a;i=t.peerConnection.localDescription.sdp,n=i.match(/a=candidate:.+typ\ssrflx.+\r\n/),r=i.match(/a=candidate:.+typ\shost.+\r\n/),a=i.match(/a=candidate:.+typ\srelay.+\r\n/),0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),null===n&&null===r&&null===a||void 0!==t.ice||(o.default.debug("srflx candidate : "+n+" relay candidate: "+a+" host candidate : "+r),clearTimeout(t.timeout),t.ice=0,t.moreIceComing=!1,t.markActionNeeded()),t.iceCandidateCount=t.iceCandidateCount+1},o.default.debug('Created webkitRTCPeerConnnection with config "'+JSON.stringify(t.pc_config)+'".');var n=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},a=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};return t.processSignalingMessage=function(e){var i,o=JSON.parse(e);t.incomingMessage=o,"new"===t.state?"OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),i.sdp=a(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.sendOK(),t.state="established"):"pr-answer"===o.messageType?(i={sdp:o.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):"offer"===o.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===o.messageType?(i={sdp:o.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(i)),t.state="offer-received",t.markActionNeeded()):"ANSWER"===o.messageType?(i={sdp:o.sdp,type:"answer"},i.sdp=n(i.sdp),i.sdp=a(i.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(i))):t.error("Illegal message for this state: "+o.messageType+" in state "+t.state))},t.getVideoRelatedStats=function(e){t.peerConnection.getStats(null,function(i){Object.keys(i).forEach(function(n){var o=i[n];t.isSubscriber?"video"===o.mediaType&&o.id&&~o.id.indexOf("recv")&&e&&e({mediaType:"video",peerId:t.uid,isVideoMute:t.isVideoMute,frameRateReceived:o.googFrameRateReceived,frameRateDecoded:o.googFrameRateDecoded}):"video"===o.mediaType&&o.id&&~o.id.indexOf("send")&&e&&e({mediaType:"video",isVideoMute:t.isVideoMute,frameRateInput:o.googFrameRateInput,frameRateSent:o.googFrameRateSent})})})},t.getStatsRate=function(e){t.getStats(function(t){e(t)})},t.getStats=function(e){t.peerConnection.getStats(null,function(i){var n=[],o=[],r=null;Object.keys(i).forEach(function(e){var t=i[e];o.push(t),"ssrc"!==t.type&&"VideoBwe"!==t.type||(r=t.timestamp,n.push(t))}),n.push({id:"time",startTime:t.connectedTime,timestamp:r||new Date}),e(n,o)})},t.addTrack=function(e,i){t.peerConnection.addTrack(e,i)},t.removeTrack=function(e,i){t.peerConnection.removeTrack(t.peerConnection.getSenders().find(function(t){return t.track==e}))},t.addStream=function(e){t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var e;if(t.actionNeeded){if("new"===t.state||"established"===t.state)t.peerConnection.createOffer(function(e){if(e.sdp=a(e.sdp),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("peer connection create offer failed ",e)},t.mediaConstraints);else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.prevOffer=t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g,"a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;e=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t._getSender=function(e){if(t.peerConnection&&t.peerConnection.getSenders){var i=t.peerConnection.getSenders(),n=i.find(function(t){return t.track.kind==e});if(n)return n}return null},t.hasSender=function(e){return!!t._getSender(e)},t.replaceTrack=function(e,i,n){var o=t._getSender(e.kind);if(!o){return n("NO_SENDER_FOUND")}try{o.replaceTrack(e)}catch(e){return n&&n(e)}setTimeout(function(){return i&&i()},50)},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&(t.onaddstream(e,"ontrack"),t.peerConnection.onaddstream=null)},t.peerConnection.onaddstream=function(e){t.onaddstream&&(t.onaddstream(e,"onaddstream"),t.peerConnection.ontrack=null)},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.peerConnection.onnegotiationneeded=function(){void 0!==t.prevOffer&&t.peerConnection.createOffer().then(function(e){return e.sdp=e.sdp.replace(/a=recvonly\r\n/g,"a=inactive\r\n"),t.peerConnection.setLocalDescription(e)}).then(function(){t.onnegotiationneeded&&t.onnegotiationneeded(t.peerConnection.localDescription.sdp)}).catch(function(e){console.log("createOffer error: ",e)})},t.onaddstream=null,t.onremovestream=null,t.onnegotiationneeded=null,t.state="new",t.markActionNeeded(),t};t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(6),a=function(e){var t={};r.RTCPeerConnection;t.uid=e.uid,t.isVideoMute=e.isVideoMute,t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[{urls:["stun:webcs.agora.io:3478","stun:stun.l.google.com:19302"]}],bundlePolicy:"max-bundle"},t.con={optional:[{DtlsSrtpKeyAgreement:!0}]},e.iceServers instanceof Array?t.pc_config.iceServers=e.iceServers:(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&(e.turnServer instanceof Array?e.turnServer.map(function(e){"string"==typeof e.url&&""!==e.url&&t.pc_config.iceServers.push({username:e.username,credential:e.password,url:e.url})}):"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&(t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.credential,credentialType:"password",urls:["turn:"+e.turnServer.url+":"+e.turnServer.udpport+"?transport=udp"]}),"string"==typeof e.turnServer.tcpport&&""!==e.turnServer.tcpport&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.credential,credentialType:"password",urls:["turn:"+e.turnServer.url+":"+e.turnServer.tcpport+"?transport=tcp"]}),!0===e.turnServer.forceturn&&(t.pc_config.iceTransportPolicy="relay")))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={mandatory:{OfferToReceiveVideo:e.video,OfferToReceiveAudio:e.audio}},t.roapSessionId=103,t.peerConnection=new r.RTCPeerConnection(t.pc_config),o.default.debug('safari Created RTCPeerConnnection with config "'+JSON.stringify(t.pc_config)+'".'),t.peerConnection.onicecandidate=function(e){var i,n,r,a;i=t.peerConnection.localDescription.sdp,n=i.match(/a=candidate:.+typ\ssrflx.+\r\n/),r=i.match(/a=candidate:.+typ\shost.+\r\n/),a=i.match(/a=candidate:.+typ\srelay.+\r\n/),0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),null===n&&null===r&&null===a||void 0!==t.ice||(o.default.debug("srflx candidate : "+n+" relay candidate: "+a+" host candidate : "+r),clearTimeout(t.timeout),t.ice=0,t.moreIceComing=!1,t.markActionNeeded()),t.iceCandidateCount=t.iceCandidateCount+1};var i=function(t){return e.screen&&(t=t.replace("a=x-google-flag:conference\r\n","")),t},n=function(t){var i,n;return e.minVideoBW&&e.maxVideoBW&&(i=t.match(/m=video.*\r\n/),n=i[0]+"b=AS:"+e.maxVideoBW+"\r\n",t=t.replace(i[0],n),o.default.debug("Set Video Bitrate - min:"+e.minVideoBW+" max:"+e.maxVideoBW)),e.maxAudioBW&&(i=t.match(/m=audio.*\r\n/),n=i[0]+"b=AS:"+e.maxAudioBW+"\r\n",t=t.replace(i[0],n)),t};t.processSignalingMessage=function(e){var o,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(o={sdp:r.sdp,type:"answer"},o.sdp=i(o.sdp),o.sdp=n(o.sdp),o.sdp=o.sdp.replace(/a=x-google-flag:conference\r\n/g,""),t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(o={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(o={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new RTCSessionDescription(o)),t.state="offer-received",t.markActionNeeded()):"ANSWER"===r.messageType?(o={sdp:r.sdp,type:"answer"},o.sdp=i(o.sdp),o.sdp=n(o.sdp),t.peerConnection.setRemoteDescription(new RTCSessionDescription(o))):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var a={id:"",type:"",mediaType:"",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},s={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0",googFramesEncoded:"0"},d={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},c={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googFramesDecoded:"0",googFrameReceived:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0"},u={id:"bweforvideo",type:"VideoBwe",googAvailableSendBandwidth:"0",googAvailableReceiveBandwidth:"0",googActualEncBitrate:"0",googRetransmitBitrate:"0",googTargetEncBitrate:"0",googBucketDelay:"0",googTransmitBitrate:"0"},l=0,p=0,f=0;return t.getVideoRelatedStats=function(i){t.peerConnection.getStats().then(function(n){n.forEach(function(n){if(t.isSubscriber){if("track"===n.type&&~n.id.indexOf("video")){if(!t.lastReport)return void(t.lastReport=n);i&&i({peerId:t.uid,mediaType:"video",isVideoMute:t.isVideoMute,frameRateReceived:n.framesReceived-t.lastReport.framesReceived+"",frameRateDecoded:n.framesDecoded-t.lastReport.framesDecoded+""}),t.lastReport=n}}else if("outbound-rtp"===n.type&&"video"===n.mediaType){if(!t.lastReport)return void(t.lastReport=n);i&&i({mediaType:"video",isVideoMute:t.isVideoMute,frameRateInput:e.maxFrameRate+"",frameRateSent:n.framesEncoded-t.lastReport.framesEncoded+""}),t.lastReport=n}})})},t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"outbound-rtp"===e.type&&"video"===e.mediaType&&e.googFramesEncoded&&(e.googFrameRateSent=((e.googFramesEncoded-l)/3).toString(),l=e.googFramesEncoded),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(e.googFrameRateReceived&&(e.googFrameRateReceived=((e.googFrameReceived-f)/3).toString(),f=e.googFrameReceived),e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-p)/3).toString(),p=e.googFramesDecoded))}),e(t)})},t.getStats=function(e){var i=[];t.peerConnection.getStats().then(function(n){n.forEach(function(e){i.push(e),"outbound-rtp"===e.type&&"audio"===e.mediaType&&(a.id=e.id,a.type=e.type,a.mediaType=e.mediaType,a.bytesSent=e.bytesSent?e.bytesSent+"":"0",a.packetsSent=e.packetsSent?e.packetsSent+"":"0"),"outbound-rtp"===e.type&&"video"===e.mediaType&&(s.id=e.id,s.type=e.type,s.mediaType=e.mediaType,s.bytesSent=e.bytesSent?e.bytesSent+"":"0",s.packetsSent=e.packetsSent?e.packetsSent+"":"0",s.googPlisReceived=e.pliCount?e.pliCount+"":"0",s.googNacksReceived=e.nackCount?e.nackCount+"":"0",s.googFirsReceived=e.firCount?e.firCount+"":"0",s.googFramesEncoded=e.framesEncoded?e.framesEncoded+"":"0"),"inbound-rtp"===e.type&&-1!=e.id.indexOf("44444")&&(d.id=e.id,d.type=e.type,d.mediaType="audio",d.packetsReceived=e.packetsReceived?e.packetsReceived+"":"0",d.bytesReceived=e.bytesReceived?e.bytesReceived+"":"0",d.packetsLost=e.packetsLost?e.packetsLost+"":"0",d.packetsReceived=e.packetsReceived?e.packetsReceived+"":"0",d.googJitterReceived=e.jitter?e.jitter+"":"0"),"inbound-rtp"===e.type&&-1!=e.id.indexOf("55543")&&(c.id=e.id,c.type=e.type,c.mediaType="video",c.packetsReceived=e.packetsReceived?e.packetsReceived+"":"0",c.bytesReceived=e.bytesReceived?e.bytesReceived+"":"0",c.packetsLost=e.packetsLost?e.packetsLost+"":"0",c.googJitterBufferMs=e.jitter?e.jitter+"":"0",c.googNacksSent=e.nackCount?e.nackCount+"":"0",c.googPlisSent=e.pliCount?e.pliCount+"":"0",c.googFirsSent=e.firCount?e.firCount+"":"0"),"track"===e.type&&-1!=e.id.indexOf("55543")&&(c.googFrameWidthReceived=e.frameWidth?e.frameWidth+"":"0",c.googFrameHeightReceived=e.frameHeight?e.frameHeight+"":"0",c.googFrameReceived=e.framesReceived?e.framesReceived+"":"0",c.googFramesDecoded=e.framesDecoded?e.framesDecoded+"":"0"),"track"===e.type&&-1!=e.id.indexOf("44444")&&(d.audioOutputLevel=e.audioLevel+"",a.audioInputLevel=e.audioLevel+""),"candidate-pair"===e.type&&(0==e.availableIncomingBitrate?u.googAvailableSendBandwidth=e.availableOutgoingBitrate+"":u.googAvailableReceiveBandwidth=e.availableIncomingBitrate+"")});var o=[u,a,s,d,c];o.push({id:"time",startTime:t.connectedTime,timestamp:new Date}),e(o,i)}).catch(function(e){console.error(e)})},t.addTrack=function(e,i){t.peerConnection.addTrack(e,i)},t.removeTrack=function(e,i){var n=t.peerConnection.getSenders().find(function(t){return t.track==e});n.replaceTrack(null),t.peerConnection.removeTrack(n)},t.addStream=function(e){window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")?e.getTracks().forEach(function(i){return t.peerConnection.addTrack(i,e)}):t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){var i;if(t.actionNeeded){if("new"===t.state||"established"===t.state){if(e.isSubscriber&&window.navigator.userAgent.indexOf("Safari")>-1&&-1===navigator.userAgent.indexOf("Chrome")){var r=t.peerConnection.addTransceiver("audio"),a=t.peerConnection.addTransceiver("video");r.setDirection("recvonly"),a.setDirection("recvonly")}t.peerConnection.createOffer(t.mediaConstraints).then(function(i){if(i.sdp=n(i.sdp),e.isSubscriber||(i.sdp=i.sdp.replace(/a=extmap:4 urn:3gpp:video-orientation\r\n/g,"")),i.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(i),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")}).catch(function(e){o.default.debug("peer connection create offer failed ",e)})}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.prevOffer=t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g,"a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(e){o.default.debug("peer connection create answer failed ",e)},t.mediaConstraints);else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;i=t.peerConnection.localDescription.sdp,t.sendMessage("ANSWER",i),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t._getSender=function(e){if(t.peerConnection&&t.peerConnection.getSenders){var i=t.peerConnection.getSenders(),n=i.find(function(t){return t.track.kind==e});if(n)return n}return null},t.hasSender=function(e){return!!t._getSender(e)},t.replaceTrack=function(e,i,n){var o=t._getSender(e.kind);if(!o){return n("NO_SENDER_FOUND")}try{o.replaceTrack(e)}catch(e){return n&&n(e)}setTimeout(function(){return i&&i()},50)},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)},t.peerConnection.onnegotiationneeded=function(){void 0!==t.prevOffer&&t.peerConnection.createOffer().then(function(e){return e.sdp=e.sdp.replace(/a=recvonly\r\n/g,"a=inactive\r\n"),t.peerConnection.setLocalDescription(e)}).then(function(){t.onnegotiationneeded&&t.onnegotiationneeded(t.peerConnection.localDescription.sdp)}).catch(function(e){console.log("createOffer error: ",e)})},t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={};return e.addStream=function(){},e};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(6),a=function(e){var t={},i=(mozRTCPeerConnection,mozRTCSessionDescription),n=!1;t.uid=e.uid,t.isVideoMute=e.isVideoMute,t.isSubscriber=e.isSubscriber,t.pc_config={iceServers:[]},e.iceServers instanceof Array?e.iceServers.map(function(e){0===e.url.indexOf("stun:")&&t.pc_config.iceServers.push({url:e.url})}):(e.stunServerUrl&&(e.stunServerUrl instanceof Array?e.stunServerUrl.map(function(e){"string"==typeof e&&""!==e&&t.pc_config.iceServers.push({url:e})}):"string"==typeof e.stunServerUrl&&""!==e.stunServerUrl&&t.pc_config.iceServers.push({url:e.stunServerUrl})),e.turnServer&&"string"==typeof e.turnServer.url&&""!==e.turnServer.url&&(t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.credential,credentialType:"password",urls:"turn:"+e.turnServer.url+":"+e.turnServer.udpport+"?transport=udp"}),"string"==typeof e.turnServer.tcpport&&""!==e.turnServer.tcpport&&t.pc_config.iceServers.push({username:e.turnServer.username,credential:e.turnServer.credential,credentialType:"password",urls:"turn:"+e.turnServer.url+":"+e.turnServer.tcpport+"?transport=tcp"}),!0===e.turnServer.forceturn&&(t.pc_config.iceTransportPolicy="relay"))),void 0===e.audio&&(e.audio=!0),void 0===e.video&&(e.video=!0),t.mediaConstraints={offerToReceiveAudio:e.audio,offerToReceiveVideo:e.video,mozDontOfferDataChannel:!0},t.roapSessionId=103,t.peerConnection=new r.RTCPeerConnection(t.pc_config),o.default.debug('safari Created RTCPeerConnnection with config "'+JSON.stringify(t.pc_config)+'".'),t.peerConnection.onicecandidate=function(e){var i,n,r,a;i=t.peerConnection.localDescription.sdp,n=i.match(/a=candidate:.+typ\ssrflx.+\r\n/),r=i.match(/a=candidate:.+typ\shost.+\r\n/),a=i.match(/a=candidate:.+typ\srelay.+\r\n/),0===t.iceCandidateCount&&(t.timeout=setTimeout(function(){t.moreIceComing&&(t.moreIceComing=!1,t.markActionNeeded())},1e3)),null===n&&null===r&&null===a||void 0!==t.ice||(o.default.debug("srflx candidate : "+n+" relay candidate: "+a+" host candidate : "+r),clearTimeout(t.timeout),t.ice=0,t.moreIceComing=!1,t.markActionNeeded()),t.iceCandidateCount=t.iceCandidateCount+1},t.checkMLineReverseInSDP=function(e){return!(!~e.indexOf("m=audio")||!~e.indexOf("m=video"))&&e.indexOf("m=audio")>e.indexOf("m=video")},t.reverseMLineInSDP=function(e){var t=e.split("m=audio"),i=t[1].split("m=video"),n="m=video"+i[1],o="m=audio"+i[0];return e=t[0]+n+o},t.processSignalingMessage=function(e){var n,r=JSON.parse(e);t.incomingMessage=r,"new"===t.state?"OFFER"===r.messageType?(r.sdp=l(r.sdp),n={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"offer-sent"===t.state?"ANSWER"===r.messageType?(r.sdp=l(r.sdp),r.sdp=r.sdp.replace(/ generation 0/g,""),r.sdp=r.sdp.replace(/ udp /g," UDP "),r.sdp=r.sdp.replace(/a=group:BUNDLE audio video/,"a=group:BUNDLE sdparta_0 sdparta_1"),r.sdp=r.sdp.replace(/a=mid:audio/,"a=mid:sdparta_0"),r.sdp=r.sdp.replace(/a=mid:video/,"a=mid:sdparta_1"),t.isMLineReverseInSDP&&(r.sdp=t.reverseMLineInSDP(r.sdp)),n={sdp:r.sdp,type:"answer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e)}),t.sendOK(),t.state="established"):"pr-answer"===r.messageType?(n={sdp:r.sdp,type:"pr-answer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)})):"offer"===r.messageType?t.error("Not written yet"):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state):"established"===t.state&&("OFFER"===r.messageType?(n={sdp:r.sdp,type:"offer"},t.peerConnection.setRemoteDescription(new i(n),function(){o.default.debug("setRemoteDescription succeeded")},function(e){o.default.info("setRemoteDescription failed: "+e.name)}),t.state="offer-received",t.markActionNeeded()):t.error("Illegal message for this state: "+r.messageType+" in state "+t.state))};var a={id:"",type:"",mediaType:"opus",googCodecName:"opus",aecDivergentFilterFraction:"0",audioInputLevel:"0",bytesSent:"0",packetsSent:"0",googEchoCancellationReturnLoss:"0",googEchoCancellationReturnLossEnhancement:"0"},s={id:"",type:"",mediaType:"",googCodecName:"h264"===e.codec?"H264":"VP8",bytesSent:"0",packetsLost:"0",packetsSent:"0",googAdaptationChanges:"0",googAvgEncodeMs:"0",googEncodeUsagePercent:"0",googFirsReceived:"0",googFrameHeightSent:"0",googFrameHeightInput:"0",googFrameRateInput:"0",googFrameRateSent:"0",googFrameWidthSent:"0",googFrameWidthInput:"0",googNacksReceived:"0",googPlisReceived:"0",googRtt:"0"},d={id:"",type:"",mediaType:"",audioOutputLevel:"0",bytesReceived:"0",packetsLost:"0",packetsReceived:"0",googAccelerateRate:"0",googCurrentDelayMs:"0",googDecodingCNG:"0",googDecodingCTN:"0",googDecodingCTSG:"0",googDecodingNormal:"0",googDecodingPLC:"0",googDecodingPLCCNG:"0",googExpandRate:"0",googJitterBufferMs:"0",googJitterReceived:"0",googPreemptiveExpandRate:"0",googPreferredJitterBufferMs:"0",googSecondaryDecodedRate:"0",googSpeechExpandRate:"0"},c={id:"",type:"",mediaType:"",googTargetDelayMs:"0",packetsLost:"0",googDecodeMs:"0",googMaxDecodeMs:"0",googRenderDelayMs:"0",googFrameWidthReceived:"0",googFrameHeightReceived:"0",googFrameRateReceived:"0",googFrameRateDecoded:"0",googFrameRateOutput:"0",googJitterBufferMs:"0",googCurrentDelayMs:"0",googMinPlayoutDelayMs:"0",googNacksSent:"0",googPlisSent:"0",googFirsSent:"0",bytesReceived:"0",packetsReceived:"0",googFramesDecoded:"0"},u=0;t.getVideoRelatedStats=function(e){t.peerConnection.getStats().then(function(i){Object.keys(i).forEach(function(n){var o=i[n];if(t.isSubscriber){if("inboundrtp"===o.type&&"video"===o.mediaType){if(!t.lastReport)return void(t.lastReport=o);e&&e({browser:"firefox",mediaType:"video",peerId:t.uid,isVideoMute:t.isVideoMute,frameRateReceived:o.framerateMean+"",frameRateDecoded:o.framesDecoded-t.lastReport.framesDecoded+""}),t.lastReport=o}}else if("outboundrtp"===o.type&&"video"===o.mediaType){if(!t.lastReport)return void(t.lastReport=o);e&&e({mediaType:"video",isVideoMute:t.isVideoMute,frameRateInput:o.framerateMean+"",frameRateSent:o.framesEncoded-t.lastReport.framesEncoded+""}),t.lastReport=o}})})},t.getStatsRate=function(e){t.getStats(function(t){t.forEach(function(e){"inboundrtp"===e.type&&"video"===e.mediaType&&e.googFrameRateDecoded&&(e.googFrameRateDecoded=((e.googFramesDecoded-u)/3).toString(),u=e.googFramesDecoded)}),e(t)})},t.getStats=function(e){t.peerConnection.getStats().then(function(i){var n=[];Object.keys(i).forEach(function(e){var t=i[e];n.push(t),"outboundrtp"===t.type&&"video"===t.mediaType&&(s.id=t.id,s.type=t.type,s.mediaType=t.mediaType,s.bytesSent=t.bytesSent?t.bytesSent+"":"0",s.packetsSent=t.packetsSent?t.packetsSent+"":"0",s.googPlisReceived=t.pliCount?t.pliCount+"":"0",s.googNacksReceived=t.nackCount?t.nackCount+"":"0",s.googFirsReceived=t.firCount?t.firCount+"":"0",s.googFrameRateSent=t.framerateMean?t.framerateMean+"":"0"),"outboundrtp"===t.type&&"audio"===t.mediaType&&(a.id=t.id,a.type=t.type,a.mediaType=t.mediaType,a.bytesSent=t.bytesSent?t.bytesSent+"":"0",a.packetsSent=t.packetsSent?t.packetsSent+"":"0"),"inboundrtp"!==t.type||"audio"!==t.mediaType||t.isRemote||(d.id=t.id,d.type=t.type,d.mediaType=t.mediaType,d.bytesReceived=t.bytesReceived?t.bytesReceived+"":"0",d.packetsLost=t.packetsLost?t.packetsLost+"":"0",d.packetsReceived=t.packetsReceived?t.packetsReceived+"":"0",d.googJitterReceived=t.jitter?t.jitter+"":"0"),"inboundrtp"!==t.type||"video"!==t.mediaType||t.isRemote||(c.id=t.id,c.type=t.type,c.mediaType=t.mediaType,c.bytesReceived=t.bytesReceived?t.bytesReceived+"":"0",c.googFrameRateReceived=t.framerateMean?t.framerateMean+"":"0",c.googFramesDecoded=t.framesDecoded?t.framesDecoded+"":"0",c.packetsLost=t.packetsLost?t.packetsLost+"":"0",c.packetsReceived=t.packetsReceived?t.packetsReceived+"":"0",c.googJitterBufferMs=t.jitter?t.jitter+"":"0",c.googNacksSent=t.nackCount?t.nackCount+"":"0",c.googPlisSent=t.pliCount?t.pliCount+"":"0",c.googFirsSent=t.firCount?t.firCount+"":"0"),-1!==t.id.indexOf("outbound_rtcp_video")&&(s.packetsLost=t.packetsLost?t.packetsLost+"":"0")});var o=[s,a,d,c];o.push({id:"time",startTime:t.connectedTime,timestamp:new Date}),e(o,n)},function(e){o.default.error(e)})},t.addStream=function(e){n=!0,t.peerConnection.addStream(e),t.markActionNeeded()},t.removeStream=function(){t.markActionNeeded()},t.close=function(){t.state="closed",t.peerConnection.close()},t.markActionNeeded=function(){t.actionNeeded=!0,t.doLater(function(){t.onstablestate()})},t.doLater=function(e){window.setTimeout(e,1)},t.onstablestate=function(){if(t.actionNeeded){if("new"===t.state||"established"===t.state){n&&(t.mediaConstraints=void 0),function(){t.peerConnection.createOffer(function(e){if(e.sdp=l(e.sdp),e.sdp=e.sdp.replace(/a=extmap:1 http:\/\/www.webrtc.org\/experiments\/rtp-hdrext\/abs-send-time/,"a=extmap:3 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"),e.sdp!==t.prevOffer)return t.peerConnection.setLocalDescription(e),t.isMLineReverseInSDP=t.checkMLineReverseInSDP(e.sdp),t.state="preparing-offer",void t.markActionNeeded();o.default.debug("Not sending a new offer")},function(e){o.default.debug("Ups! create offer failed ",e)},t.mediaConstraints)}()}else if("preparing-offer"===t.state){if(t.moreIceComing)return;t.prevOffer=t.peerConnection.localDescription.sdp,t.prevOffer=t.prevOffer.replace(/a=candidate:.+typ\shost.+\r\n/g,"a=candidate:2243255435 1 udp 2122194687 192.168.0.1 30000 typ host generation 0 network-id 1\r\n"),t.sendMessage("OFFER",t.prevOffer),t.state="offer-sent"}else if("offer-received"===t.state)t.peerConnection.createAnswer(function(e){if(t.peerConnection.setLocalDescription(e),t.state="offer-received-preparing-answer",t.iceStarted)return void t.markActionNeeded();var i=new Date;o.default.debug(i.getTime()+": Starting ICE in responder"),t.iceStarted=!0},function(){o.default.debug("Ups! Something went wrong")});else if("offer-received-preparing-answer"===t.state){if(t.moreIceComing)return;var e=t.peerConnection.localDescription.sdp;t.sendMessage("ANSWER",e),t.state="established"}else t.error("Dazed and confused in state "+t.state+", stopping here");t.actionNeeded=!1}},t.sendOK=function(){t.sendMessage("OK")},t.sendMessage=function(e,i){var n={};n.messageType=e,n.sdp=i,"OFFER"===e?(n.offererSessionId=t.sessionId,n.answererSessionId=t.otherSessionId,n.seq=t.sequenceNumber+=1,n.tiebreaker=Math.floor(429496723*Math.random()+1)):(n.offererSessionId=t.incomingMessage.offererSessionId,n.answererSessionId=t.sessionId,n.seq=t.incomingMessage.seq),t.onsignalingmessage(JSON.stringify(n))},t._getSender=function(e){if(t.peerConnection&&t.peerConnection.getSenders){var i=t.peerConnection.getSenders(),n=i.find(function(t){return t.track.kind==e});if(n)return n}return null},t.hasSender=function(e){return!!t._getSender(e)},t.replaceTrack=function(e,i,n){var o=t._getSender(e.kind);if(!o){return n("NO_SENDER_FOUND")}try{o.replaceTrack(e)}catch(e){return n&&n(e)}setTimeout(function(){return i&&i()},50)},t.error=function(e){throw"Error in RoapOnJsep: "+e},t.sessionId=t.roapSessionId+=1,t.sequenceNumber=0,t.actionNeeded=!1,t.iceStarted=!1,t.moreIceComing=!0,t.iceCandidateCount=0,t.onsignalingmessage=e.callback,t.peerConnection.ontrack=function(e){t.onaddstream&&t.onaddstream(e,"ontrack")},t.peerConnection.onremovestream=function(e){t.onremovestream&&t.onremovestream(e)},t.peerConnection.oniceconnectionstatechange=function(e){"connected"===e.currentTarget.iceConnectionState&&(t.connectedTime=new Date),t.oniceconnectionstatechange&&t.oniceconnectionstatechange(e.currentTarget.iceConnectionState)};var l=function(t){if(e.video&&e.maxVideoBW){var i=t.match(/m=video.*\r\n/);if(null==i&&(i=t.match(/m=video.*\n/)),i&&i.length>0){var n=i[0]+"b=TIAS:"+1e3*e.maxVideoBW+"\r\n";t=t.replace(i[0],n)}}if(e.audio&&e.maxAudioBW){var i=t.match(/m=audio.*\r\n/);if(null==i&&(i=t.match(/m=audio.*\n/)),i&&i.length>0){var n=i[0]+"b=TIAS:"+1e3*e.maxAudioBW+"\r\n";t=t.replace(i[0],n)}}return t};return t.onaddstream=null,t.onremovestream=null,t.state="new",t.markActionNeeded(),t};t.default=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,i){var n={};return n.callback=t,n.config=e,n.error=i,n.selectSource=function(e,t,i){var n=document.createElement("div");n.innerText="share screen",n.setAttribute("style","text-align: center; height: 25px; line-height: 25px; border-radius: 4px 4px 0 0; background: #D4D2D4; border-bottom:  solid 1px #B9B8B9;");var o=document.createElement("div");o.setAttribute("style","width: 100%; height: 500px; padding: 15px 25px ; box-sizing: border-box;");var r=document.createElement("div");r.innerText="Agora Web Screensharing wants to share the contents of your screen with webdemo.agorabeckon.com. Choose what you'd like to share.",r.setAttribute("style","height: 12%;");var a=document.createElement("div");a.setAttribute("style","width: 100%; height: 80%; background: #FFF; border:  solid 1px #CBCBCB; display: flex; flex-wrap: wrap; justify-content: space-around; overflow-y: scroll; padding: 0 15px; box-sizing: border-box;");var s=document.createElement("div");s.setAttribute("style","text-align: right; padding: 16px 0;");var d=document.createElement("button");d.innerHTML="cancel",d.setAttribute("style","width: 85px;"),d.onclick=function(){document.body.removeChild(c),i&&i("NotAllowedError")},s.appendChild(d),o.appendChild(r),o.appendChild(a),o.appendChild(s);var c=document.createElement("div");c.setAttribute("style","position: absolute; z-index: 99999999; top: 50%; left: 50%; width: 620px; height: 525px; background: #ECECEC; border-radius: 4px; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%);"),c.appendChild(n),c.appendChild(o),document.body.appendChild(c),e.map(function(e){if(e.id){var i=document.createElement("div");i.setAttribute("style","width: 30%; height: 160px; padding: 20px 0; text-align: center;box-sizing: content-box;"),i.innerHTML='<div style="height: 120px; display: table-cell; vertical-align: middle;"><img style="width: 100%; background: #333333; box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);" src='+e.thumbnail.toDataURL()+' /></div><span style="\theight: 40px; line-height: 40px; display: inline-block; width: 70%; word-break: keep-all; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">'+e.name+"</span>",i.onclick=function(){document.body.removeChild(c),t&&t(e.id)},a.appendChild(i)}})},n.getShareScreenStream=function(e){var t=n.config.attributes.width,i=n.config.attributes.height,o=n.config.attributes.maxFr,r=n.config.attributes.minFr,a={audio:!1,video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:e,maxHeight:i,maxWidth:t,maxFrameRate:o,minFrameRate:r}}};navigator.webkitGetUserMedia(a,n.callback,n.error)},n.shareScreen=function(e){try{var t=window.require("electron_share_screen_ui")}catch(e){}t?t(function(e){n.getShareScreenStream(e)},n.error):e.desktopCapturer.getSources({types:["window","screen"]},function(e,t){if(e)throw e;n.selectSource(t,function(e){n.getShareScreenStream(e)},n.error)})},n};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.LiveTranscoding=t.TranscodingUser=t.createLiveClient=t.createRtcClient=t.createClient=void 0;var o=i(31),r=n(o),a=i(0),s=n(a),d=i(3),c=n(d),u=i(7),l=i(17),p=i(4),f=i(5),g=i(35),m=i(9),v=i(10),S=i(2),_=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t}(S),E=i(1),I=i(36),h=i(37),y=i(38),R=i(15),b=function(e){var t={};t.key=void 0,t.highStream=null,t.lowStream=null,t.lowStreamParameter=null,t.isDualStream=!1,t.highStreamState=2,t.lowStreamState=2,t.proxyServer=null,t.turnServer={};var e=Object.assign({},e);return t.aespassword=null,t.aesmode=R.ENCRYPTION_MODE_NONE,t.hasPublished=!1,t.renewToken=function(e,i,n){t.gatewayClient||(s.default.error("renewToken Failed. GatewayClient not Exist"),(0,u.safeCall)(n,c.default.INVALID_OPERATION)),t.key?(t.key=e,t.gatewayClient.renewToken(e,i,n)):(s.default.error("renewToken should not be called before user join"),(0,u.safeCall)(n,c.default.INVALID_OPERATION))},t.setLowStreamParameter=function(e){t.lowStreamParameter=e},t.init=function(t,i,n){if("string"!=typeof t)throw new Error("Param appId should be string");if((0,f.isChromeKernel)()&&(0,f.getChromeKernelVersion)()<=48)return void(n?n(c.default.BAD_ENVIRONMENT):(0,u.popBanTip)());s.default.info("Initializing AgoraRTC client, appId: "+t+"."),e.appId=t,e.sessionId=(0,u.generateSessionId)(),i&&i()},t.setTurnServer=function(e,i,n){var o=e.turnServerURL,r=e.username,a=e.password,d=e.udpport,c=e.forceturn,u=e.tcpport;if(!o)throw new Error("Do not set the turnServerURL parameter as empty");if(!r)throw new Error("Do not set the username parameter as empty");if(!a)throw new Error("Do not set the password parameter as empty");if(!d)throw new Error("Do not set the udpport parameter as empty");t.turnServer.url=o,t.turnServer.udpport=d,t.turnServer.username=r,t.turnServer.credential=a,t.turnServer.forceturn=c||!1,u&&(t.turnServer.tcpport=u,s.default.info("Set turnserver tcpurl."+t.turnServer.url+":"+t.turnServer.tcpport)),s.default.info("Set turnserver udpurl."+t.turnServer.url+":"+t.turnServer.udpport+",username:"+t.turnServer.uername+",password:"+t.turnServer.credential)},t.setProxyServer=function(e){if(!e)throw new Error("Do not set the proxyServer parameter as empty");t.proxyServer=e,p.report.setProxyServer(e)},t.setEncryptionSecret=function(e){if(!e||"string"!=typeof e)throw new Error("Invalid secret");t.aespassword=e},t.setEncryptionMode=function(e){if("string"!=typeof e)throw new Error("Invalid encryptionMode");R.ENCRYPTION_MODES.includes(e)||(e=R.ENCRYPTION_MODE_NONE),t.aesmode=e},t.configPublisher=function(e){t.gatewayClient.configPublisher(e)},t.enableDualStream=function(i,n){return"iOS"===(0,f.getBrowserOS)()?(p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!1}),n&&n(c.default.IOS_NOT_SUPPORT)):(0,f.isWeChatBrowser)()?(p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!1}),n&&n(c.default.WECHAT_NOT_SUPPORT)):(p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!0,succ:!0}),t.isDualStream=!0,void(0===t.highStreamState?t._publishLowStream(i,function(e){s.default.warning(e),n&&n(c.default.ENABLE_DUALSTREAM_FAILED)}):1===t.highStreamState?n&&n(c.default.STILL_ON_PUBLISHING):i&&i()))},t.disableDualStream=function(i,n){p.report.streamSwitch(e.sessionId,{lts:(new Date).getTime(),isdual:!1,succ:!0}),t.isDualStream=!1,0===t.highStreamState?t._unpublishLowStream(function(){t.highStream.lowStream=null,i&&i()},function(e){s.default.warning(e),n&&n(c.default.DISABLE_DUALSTREAM_FAILED)}):1===t.highStreamState?n&&n(c.default.STILL_ON_PUBLISHING):i&&i()},t._createLowStream=function(e,i){if(!t.highStream||!t.highStream.stream)return void(i&&i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE));var n=Object.assign({},t.highStream.params);if(n.streamID+=1,n.audio=!1,!n.video)return void(i&&i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE));var o=t.highStream.stream.getVideoTracks()[0];if(!o)return void(i&&i(c.default.HIGH_STREAM_NOT_VIDEO_TRACE));v.deviceManager.getVideoCameraIdByLabel(o.label,function(r){n.cameraId=r;var a=new m.Stream(n);if(a.streamId=t.highStream.getId()+1,t.lowStreamParameter){var d=Object.assign({},t.lowStreamParameter);if(!d.width||!d.height){var c=(0,g.simMap)(t.highStream.profile),u=_.SUPPORT_RESOLUTION_LIST[c[0]];d.width=u[0],d.height=u[1]}if(d.framerate=d.framerate||5,d.bitrate=d.bitrate||50,(0,f.isSafari)()||(0,f.isOpera)()){s.default.debug("Shimming lowStreamParameter");var u=_.SUPPORT_RESOLUTION_LIST[t.highStream.profile];d.width=u[0],d.height=u[1]}a.setVideoProfileCustomPlus(d)}else a.setVideoProfileCustom((0,g.simMap)(t.highStream.profile));a.init(function(){t.highStream.lowStream=a,o.enabled||a.disableVideo(),e&&e(a)},i)},i)},t._getLowStream=function(e,i){t.lowStream?e(t.lowStream):t._createLowStream(function(i){t.lowStream=i,e(t.lowStream)},i)},t._publishLowStream=function(e,i){return 2!==t.lowStreamState?i&&i(c.default.LOW_STREAM_ALREADY_PUBLISHED):t.highStream&&t.highStream.hasScreen()?i&&i(c.default.SHARING_SCREEN_NOT_SUPPORT):void t._getLowStream(function(n){t.lowStreamState=1,t.gatewayClient.publish(n,function(){t.lowStreamState=0,e&&e()},function(e){s.default.debug("publish low stream failed"),i&&i(e)})},i)},t._unpublishLowStream=function(e,i){if(0!==t.lowStreamState)return i&&i(c.default.LOW_STREAM_NOT_YET_PUBLISHED);t.lowStream&&(t.gatewayClient.unpublish(t.lowStream,function(){},function(e){s.default.debug("unpublish low stream failed"),i&&i(e)}),t.lowStream.close(),t.lowStream=null,t.lowStreamState=2,e&&e())},t.join=function(i,n,o,a,d){if(i&&"string"!=typeof i)return s.default.warning("Param channelKey should be string"),d&&d(c.default.INVALID_PARAMETER);if("string"!=typeof n)return s.default.warning("Param channel should be string"),d&&d(c.default.INVALID_PARAMETER);if(o&&("number"!=typeof o||!(0,u.is32Uint)(o))&&"string"!=typeof o)return s.default.warning("Param uid should be valid number or string"),d&&d(c.default.INVALID_PARAMETER);if("string"==typeof o&&0==o.length)return s.default.warning("String uid should not be empty"),d&&d(c.default.INVALID_PARAMETER);if("string"==typeof o&&o.length>256)return s.default.warning("Length of string uid should be less than 255"),d&&d(c.default.INVALID_PARAMETER);t.highStream=null,t.lowStream=null,t.lowStreamParameter=null,t.isDualStream=!1,t.highStreamState=2,t.lowStreamState=2;var f={appId:e.appId,sid:e.sessionId,cname:n,uid:o,turnServer:t.turnServer,proxyServer:t.proxyServer};if("string"==typeof o&&(f.stringUid=o,f.uid=0),t.aespassword&&t.aesmode!==R.ENCRYPTION_MODE_NONE&&Object.assign(f,{aespassword:t.aespassword,aesmode:t.aesmode}),p.report.sessionInit(e.sessionId,{lts:(new Date).getTime(),cname:n,appid:e.appId,mode:e.mode,succ:!0}),t.onSuccess=a,t.onFailure=d,t.channel=n,t.gatewayClient.state!==r.default.DISCONNECTED)return s.default.error("Client already in connecting/connected state"),d&&d(c.default.INVALID_OPERATION),void p.report.joinGateway(f.sid,{lts:Date.now(),succ:!1,ec:c.default.INVALID_OPERATION,addr:null});t.gatewayClient.state=r.default.CONNECTING,(0,l.getGatewayList)(f,function(o){s.default.info("Joining channel: "+n),t.key=i||e.appId,f.cid=o.cid,f.uid=o.uid,o.uni_lbs_ip&&o.uni_lbs_ip[1]&&(f.uni_lbs_ip=o.uni_lbs_ip[1]),f.gatewayAddr=o.gateway_addr,t.joinInfo=f,t.gatewayClient.join(f,t.key,function(e){s.default.info("Join channel "+n+" success, join with uid: "+e+"."),t.onSuccess=null,a&&a(e)},d)},d)},t.renewChannelKey=function(e,i,n){void 0===t.key?(s.default.error("renewChannelKey should not be called before user join"),(0,u.safeCall)(n,c.default.INVALID_OPERATION)):(t.key=e,t.gatewayClient.key=e,t.gatewayClient.rejoin(),(0,u.safeCall)(i))},t.leave=function(e,i){s.default.info("Leaving channel"),t.gatewayClient.leave(e,i)},t._publish=function(i,n,o){if(2!==t.highStreamState)return s.default.warning("Can't publish stream when stream already publish",i.getId()),o&&o(c.default.STREAM_ALREADY_PUBLISHED);s.default.info("Publishing stream, uid: ",i.getId()),t.highStream=i,t.highStreamState=1,t.highStream.streamId=t.joinInfo.stringUid||t.joinInfo.uid,t.hasPublished=!1,t.gatewayClient.publish(i,function(){i.sid=e.sessionId,t.highStreamState=0,s.default.info("Publish success, uid:",i.getId()),t.isDualStream?t._publishLowStream(function(){n&&n()},function(){n&&n()}):n&&n()},o)},t._unpublish=function(e,i,n){if(0!==t.highStreamState)return s.default.warning("Can't unpublish stream when stream not publish"),n&&n(c.default.STREAM_NOT_YET_PUBLISHED);s.default.info("Unpublish stream, uid: ",e.getId()),t.isDualStream&&t.lowStream?(t._unpublishLowStream(null,n),t.gatewayClient.unpublish(e,null,n),t.highStreamState=2,s.default.info("Unpublish stream success, uid:",e.getId())):(t.gatewayClient.unpublish(e,null,n),t.highStreamState=2,s.default.info("Unpublish stream success, uid:",e.getId())),i&&i()},t.publish=function(e,i){if(2!==t.highStreamState)return void(i&&i(c.default.STREAM_ALREADY_PUBLISHED));t._publish(e,null,i)},t.unpublish=function(e,i){if(0!==t.highStreamState)return void(i&&i(c.default.STREAM_NOT_YET_PUBLISHED));t._unpublish(e,null,i)},t.subscribe=function(e,i){s.default.info("Subscribe stream, uid: ",e.getId()),t.gatewayClient.subscribe(e,null,i)},t.unsubscribe=function(e,i){s.default.info("Unsubscribe stream, uid: ",e.getId()),t.gatewayClient.unsubscribe(e,null,i)},t.setRemoteVideoStreamType=function(e,i){t.gatewayClient.setRemoteVideoStreamType(e,i)},t.setStreamFallbackOption=function(e,i){t.gatewayClient.setStreamFallbackOption(e,i)},t.startLiveStreaming=function(e,i){t.gatewayClient.startLiveStreaming(e,i)},t.stopLiveStreaming=function(e){t.gatewayClient.stopLiveStreaming(e)},t.setLiveTranscoding=function(e){Object.assign(A,e),t.gatewayClient.setLiveTranscoding(A)},t.enableAudioVolumeIndicator=function(e,i){e=e||2e3,i=i||3,t.audioVolumeIndication=t.audioVolumeIndication||{enabled:!0},t.audioVolumeIndication.interval=e,t.audioVolumeIndication.smooth=i,t.audioVolumeIndication={interval:e,smooth:i},s.default.info("enableAudioVolumeIndicator interval "+e+" smooth "+i),t.gatewayClient.enableAudioVolumeIndicator(e,i)},t.getNetworkStats=function(e,t){return h.networkManager.getStats(e,t)},t.getSystemStats=function(e,t){return y.systemManager.getStats(e,t)},t.getRecordingDevices=function(e,t){return v.deviceManager.getRecordingDevices(e,t)},t.getPlayoutDevices=function(e,t){return v.deviceManager.getPlayoutDevices(e,t)},t.getCameras=function(e,t){return v.deviceManager.getCameras(e,t)},t.getRemoteAudioStats=function(e,i){return t.rtcStatsCollector.getRemoteAudioStats(e,i)},t.getLocalAudioStats=function(e,i){return t.rtcStatsCollector.getLocalAudioStats(e,i)},t.getRemoteVideoStats=function(e,i){return t.rtcStatsCollector.getRemoteVideoStats(e,i)},t.getLocalVideoStats=function(e,i){return t.rtcStatsCollector.getLocalVideoStats(e,i)},t.getTransportStats=function(e,i){return t.rtcStatsCollector.getTransportStats(e,i)},t.gatewayClient=(0,r.default)(e),t.rtcStatsCollector=(0,I.RTCStatsCollector)(t.gatewayClient),t.on=t.gatewayClient.on,e&&e.turnServer&&t.setTurnServer(e.turnServer),e&&e.proxyServer&&t.setProxyServer(e.proxyServer),t.on("onMultiIP",function(e){t.gatewayClient.closeGateway(),t.gatewayClient.socket=void 0,t.gatewayClient.hasChangeBGPAddress=!0,t.joinInfo.multiIP=e.arg.option,t.gatewayClient.state=r.default.CONNECTING,(0,l.getGatewayList)(t.joinInfo,function(e){s.default.info("Joining channel: "+t.channel),t.joinInfo.cid=e.cid,t.joinInfo.uid=e.uid,t.joinInfo.uni_lbs_ip=e.uni_lbs_ip,t.joinInfo.gatewayAddr=e.gateway_addr,t.onSuccess?t.gatewayClient.join(t.joinInfo,t.key,function(e){s.default.info("Join channel "+t.channel+" success");var i=t.onSuccess;t.onSuccess=null,t.onFailure=null,i(e)},t.onFailure):(t.gatewayClient.joinInfo=Object.assign({},t.joinInfo),t.gatewayClient.rejoin())},t.onFailure)}),t.on("rejoin",function(){var e=2===t.highStreamState?2:0;t.highStream&&0===e&&(s.default.info("publish after rejoin"),t.highStreamState=2,t.lowStreamState=2,t.publish(t.highStream,function(e){e&&s.default.info(e)}))}),t.on("streamPublished",function(e){t.hasPublished||(t.hasPublished=!0,t.gatewayClient.dispatchEvent((0,E.StreamEvent)({type:"stream-published",stream:e.stream})))}),t.on("pubP2PLost",function(e){s.default.debug("Start reconnect local peerConnection :",t.highStream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-start",id:t.highStream.getId()}),1===t.highStreamState&&(t.highStreamState=0,t.lowStreamState=0),t._unpublish(t.highStream,function(){t._publish(t.highStream,function(){s.default.debug("Reconnect local peerConnection success:",t.highStream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:t.highStream.getId()})},function(e){s.default.debug("Reconnect local peerConnection failed:"+e),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:t.highStream.getId()})})},function(e){s.default.debug("Reconnect local peerConnection failed:"+e),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:t.highStream.getId()})})}),t.on("subP2PLost",function(e){s.default.debug("Start reconnect remote peerConnection :",e.stream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-start",id:e.stream.getId()}),t.gatewayClient.unsubscribe(e.stream,function(){t.gatewayClient.subscribe(e.stream,function(){s.default.debug("Reconnect remote peerConnection success:",e.stream.getId()),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:e.stream.getId()})},function(i){s.default.debug("Reconnect remote peerConnection failed:"+i),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:e.stream.getId()})})},function(i){s.default.debug("Reconnect remote peerConnection failed:"+i),t.gatewayClient.dispatchEvent({type:"stream-reconnect-end",id:e.stream.getId()})})}),h.networkManager.on("networkTypeChanged",function(e){t.gatewayClient&&t.gatewayClient.dispatchEvent(e)}),v.deviceManager.on("recordingDeviceChanged",function(e){t.gatewayClient&&t.gatewayClient.dispatchEvent(e)}),v.deviceManager.on("playoutDeviceChanged",function(e){t.gatewayClient&&t.gatewayClient.dispatchEvent(e)}),v.deviceManager.on("cameraChanged",function(e){t.gatewayClient&&t.gatewayClient.dispatchEvent(e)}),t.rtcStatsCollector.on("streamTypeChange",function(e){t.gatewayClient&&t.gatewayClient.dispatchEvent(e)}),t},T={uid:0,x:0,y:0,width:0,height:0,zOrder:0,alpha:1},A={width:640,height:360,videoBitrate:400,videoFramerate:15,lowLatency:!1,audioSampleRate:R.AUDIO_SAMPLE_RATE_48000,audioBitrate:48,audioChannels:1,videoGop:30,videoCodecProfile:R.VIDEO_CODEC_PROFILE_HIGH,userCount:0,userConfigExtraInfo:{},backgroundColor:0,transcodingUsers:[]},C=function(e){switch(e){case R.CLIENT_MODE_H264_INTEROP:return R.CLIENT_CODEC_H264;default:return R.CLIENT_CODEC_VP8}},O=function(e){return R.CLIENT_MODES.includes(e.mode)?R.CLIENT_CODECS.includes(e.codec)?e.mode==R.CLIENT_MODE_H264_INTEROP&&e.codec!==R.CLIENT_CODEC_H264&&c.default.CLIENT_MODE_CODEC_MISMATCH:c.default.INVALID_CLIENT_CODEC:c.default.INVALID_CLIENT_MODE},N=function(e){switch(e.mode){case R.CLIENT_MODE_INTEROP:case R.CLIENT_MODE_H264_INTEROP:e.mode=R.CLIENT_MODE_LIVE;break;case R.CLIENT_MODE_WEBONLY:e.mode=R.CLIENT_MODE_RTC}},M=function(e){e=Object.assign({},e||{}),e.codec||(e.codec=C(e.mode));var t=O(e);if(t)throw s.default.error("Invalid parameter setting MODE : "+e.mode+" CODEC : "+e.codec+" ERROR "+t),new Error(t);return s.default.info("Creating client , MODE : "+e.mode+" CODEC : "+e.codec),N(e),b(e)},w=function(){return s.default.info("Creating client , MODE : rtc"),s.default.warning("createRtcClient is deprecated."),b({mode:"rtc"})},D=function(e){var t="host";return e&&"audience"===e.role&&(t=e.role),s.default.info("Creating client , MODE : live"),s.default.warning("createLiveClient is deprecated."),b({mode:"live",role:t})};t.createClient=M,t.createRtcClient=w,t.createLiveClient=D,t.TranscodingUser=T,t.LiveTranscoding=A},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=i(9),a=i(32),s=n(a),d=i(13),c=i(1),u=i(0),l=n(u),p=i(3),f=n(p),g=i(16),m=n(g),v=i(17),S=i(2),_=i(4),E=i(7),I=i(5),h=i(34),y=n(h),R=function e(t){var i=!1,n=function(){return{_type:"ping"}},a=function(e){return{_type:"signal_stats",message:e}},u=function(){var e={appId:t.appId,key:K.key,channel:K.joinInfo.cname,uid:K.uid,version:S.VERSION,browser:navigator.userAgent,mode:t.mode,codec:t.codec,role:t.role,config:K.config};return K.joinInfo.hasOwnProperty("stringUid")&&(e.stringUid=K.joinInfo.stringUid),{_type:"join1",message:e}},g=function(){return{_type:"leave"}},h=function(e){return{_type:"control",message:e}},R=function(e){var t=e;return e.uni_lbs_ip&&(t=Object.assign(e,{wanip:e.uni_lbs_ip,hasChange:K.hasChangeBGPAddress})),{_type:"token",message:t}},T=function(e){return{_type:"unpublish",message:e}},A=function(e){return{_type:"unsubscribe",message:e}},C=function(e,t){return{_type:"switchVideoStream",message:{id:e,type:t}}},O=function(e,t){return{_type:"setFallbackOption",message:{id:e,type:t}}},N=function(e){return{_type:"renew_token",message:{token:e}}},M=function(e){return{_type:"publish_related_stats",options:e}},w=function(e){return{_type:"publish_related_stats_low",options:e}},D=function(e){return{_type:"subscribe_related_stats",options:e}},L=function(e,t,i){return{_type:"publish",options:e,sdp:t,p2pid:i}},k=function(e){return{_type:"publish_stats",options:{stats:e},sdp:null}},P=function(e){return{_type:"publish_stats_low",options:{stats:e},sdp:null}},x=function(e,t,i){return{_type:"subscribe",options:e,sdp:t,p2pid:i}},V=function(e,t){return{_type:"subscribe_stats",options:{id:e,stats:t},sdp:null}},U=function(e,t){return{_type:"start_live_streaming",message:{url:e,transcodingEnabled:t}}},F=function(e){return{_type:"stop_live_streaming",message:{url:e}}},B=function(e){return{_type:"set_live_transcoding",message:{transcoding:e}}},j=function(){return{_type:"traffic_stats"}},H=e.DISCONNECTED,W=e.CONNECTING,G=e.CONNECTED,Y=e.DISCONNECTING,K=(0,c.EventDispatcher)(t);K.socket=void 0,K.state=H,K.mode=t.mode,K.role=t.role,K.codec=t.codec,K.config={},K.timers={},K.timer_counter={},K.localStreams={},K.remoteStreams={},K.attemps=1,K.p2p_attemps=1,K.audioLevel={},K.activeSpeaker=void 0,K.reconnectMode="retry",K.rejoinAttempt=0,K.hasChangeBGPAddress=!1,K.traffic_stats={},K.p2ps=new Map,K.firstFrameTimer=new Map,K.liveStreams=new Map,K.remoteStreamsInChannel=new Set,K.inChannelInfo={joinAt:null,duration:0};var J=m.default;K.p2pCounter=(0,E.random)(1e5),K.generateP2PId=function(){return++K.p2pCounter},K.audioVolumeIndication={enabled:!1,sortedAudioVolumes:[],smooth:3,interval:2e3},K.remoteVideoStreamTypes={REMOTE_VIDEO_STREAM_HIGH:0,REMOTE_VIDEO_STREAM_LOW:1,REMOTE_VIDEO_STREAM_MEDIUM:2},K.streamFallbackTypes={STREAM_FALLBACK_OPTION_DISABLED:0,STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:1,STREAM_FALLBACK_OPTION_AUDIO_ONLY:2},K.configPublisher=function(e){K.config=e},K.join=function(e,t,i,o){var r=(new Date).getTime(),s=e.uid;if(K.inChannelInfo.joinAt&&(K.inChannelInfo.duration+=r-K.inChannelInfo.joinAt),K.inChannelInfo.joinAt=r,K.state!==W)return l.default.error("GatewayClient.join Failed: state ",K.state),o&&o(f.default.INVALID_OPERATION),void _.report.joinGateway(e.sid,{lts:r,succ:!1,ec:f.default.INVALID_OPERATION,addr:null});if(null!==s&&void 0!==s&&parseInt(s)!==s)return l.default.error("Input uid is invalid"),K.state=H,o&&o(f.default.INVALID_PARAMETER),void _.report.joinGateway(e.sid,{lts:r,succ:!1,ec:f.default.INVALID_PARAMETER,addr:null});var d=b.register(K,{uid:s,cname:e&&e.cname});if(d)return K.state=H,o&&o(d),void _.report.joinGateway(e.sid,{lts:r,succ:!1,ec:d,addr:null});K.joinInfo=Object.assign({},e),K.uid=s,K.key=t,ie(e,function(t){K.state=G,l.default.debug("Connected to gateway server"),K.pingTimer=setInterval(function(){var e=Date.now();ne(n(),function(){var t=Date.now()-e;ne(a({pingpongElapse:t}),function(){},function(e){})},function(e){})},3e3),ne(u(),function(t){if(_.report.joinGateway(e.sid,{lts:r,succ:!0,ec:null,vid:t.vid,addr:K.socket.getURL()}),K.rejoinAttempt=0,i&&i(t.uid),K.leaveOnConnected){l.default.info("Calling Leave() once joined");var n=K.leaveOnConnected;K.leaveOnConnected=null,K.leave(n.onSuccess,n.onFailure)}},function(t){if(l.default.error("User join failed ["+t+"]"),y.default[t]&&K.rejoinAttempt<4){if(K._doWithAction(y.default[t],i,o),K.leaveOnConnected){l.default.error("Calling Leave() once joined: Join Failed");var n=K.leaveOnConnected;K.leaveOnConnected=null,n.onFailure(f.default.JOIN_CHANNEL_FAILED)}}else o&&o(t);_.report.joinGateway(e.sid,{lts:r,succ:!1,ec:t,addr:K.socket.getURL()})})},function(t){l.default.error("User join failed ["+t+"]"),o&&o(t),_.report.joinGateway(e.sid,{lts:r,succ:!1,ec:t,addr:K.socket.getURL()})}),clearInterval(K.timers.trafficStats),K.timers.trafficStats=setInterval(function(){ne(j(),function(e){K.traffic_stats=e;var t=K.localStreams[s];t&&(t.traffic_stats={access_delay:e.access_delay}),e.peer_delay&&e.peer_delay.forEach(function(t){var i=K.remoteStreams[t.peer_uid];i&&(i.traffic_stats={access_delay:e.access_delay,e2e_delay:t.e2e_delay,audio_delay:t.audio_delay,video_delay:t.video_delay})})})},3e3),K.resetAudioVolumeIndication()},K.leave=function(e,t){switch(K.state){case H:return l.default.debug("Client Already in DISCONNECTED status"),void J(e);case Y:return l.default.error("Client Already in DISCONNECTING status"),void J(t,f.default.INVALID_OPERATION);case W:return K.leaveOnConnected?(l.default.error("Client.leave() already called"),void J(t,f.default.INVALID_OPERATION)):(l.default.debug("Client connecting. Waiting for Client Fully Connected(And leave)"),void(K.leaveOnConnected={onSuccess:e,onFailure:t}))}var i=b.unregister(K);if(i)return void l.default.error(i);K.state=Y,clearInterval(K.pingTimer);for(var n in K.timers)K.timers.hasOwnProperty(n)&&clearInterval(K.timers[n]);K.inChannelInfo.joinAt&&(K.inChannelInfo.duration+=Date.now()-K.inChannelInfo.joinAt,K.inChannelInfo.joinAt=null),ne(g(),function(t){K.socket.close(),K.socket=void 0,l.default.info("Leave channel success"),K.state=H,e&&e(t)},function(e){l.default.error("Leave Channel Failed",e),K.state=G,t&&t(e)});for(var n in K.localStreams)if(K.localStreams.hasOwnProperty(n)){var o=K.localStreams[n];delete K.localStreams[n],void 0!==o.pc&&(o.pc.close(),o.pc=void 0)}ae()},K.publish=function(e,t,i){var n=(new Date).getTime(),r=!1;if(e.publishLTS=n,"object"!==(void 0===e?"undefined":o(e))||null===e)return l.default.error("Invalid local stream"),i&&i(f.default.INVALID_LOCAL_STREAM),void _.report.publish(K.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_LOCAL_STREAM});if(null===e.stream&&void 0===e.url)return l.default.error("Invalid local media stream"),i&&i(f.default.INVALID_LOCAL_STREAM),void _.report.publish(K.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_LOCAL_STREAM});if(K.state!==G)return l.default.error("User is not in the session"),i&&i(f.default.INVALID_OPERATION),void _.report.publish(K.joinInfo.sid,{lts:n,succ:!1,ec:f.default.INVALID_OPERATION});var a=e.getAttributes()||{};if(e.local&&void 0===K.localStreams[e.getId()]&&(e.hasAudio()||e.hasVideo()||e.hasScreen())){var s=K.generateP2PId();if(K.p2ps.set(s,e),e.p2pId=s,void 0!==e.url)oe(L({state:"url",audio:e.hasAudio(),video:e.hasVideo(),attributes:e.getAttributes(),mode:K.mode},e.url),function(t,i){"success"===t?(e.getUserId()!==i&&e.setUserId(i),K.localStreams[i]=e,e.onClose=function(){K.unpublish(e)}):l.default.error("Publish local stream failed",t)});else{K.localStreams[e.getId()]=e,e.pc=(0,d.Connection)({callback:function(o){l.default.debug("SDP exchange in publish : send offer --  ",JSON.parse(o)),oe(L({state:"offer",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo()||e.hasScreen(),attributes:e.getAttributes(),dtx:e.DTX,hq:e.highQuality,lq:e.lowQuality,stereo:e.stereo,speech:e.speech,mode:K.mode,codec:K.codec,p2pid:s,turnip:K.joinInfo.turnServer.url,turnport:Number(K.joinInfo.turnServer.udpport),turnusername:K.joinInfo.turnServer.username,turnpassword:K.joinInfo.turnServer.credential},o),function(a,d){if("error"===a)return l.default.error("Publish local stream failed"),i&&i(f.default.PUBLISH_STREAM_FAILED),void _.report.publish(K.joinInfo.sid,{lts:n,succ:!1,localSDP:o,ec:f.default.PUBLISH_STREAM_FAILED});e.pc.onsignalingmessage=function(t){e.pc.onsignalingmessage=function(){},oe(L({state:"ok",id:e.getId(),audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),attributes:e.getAttributes(),mode:K.mode},t)),e.getUserId()!==d.id&&e.setUserId(d.id),l.default.info("Local stream published with uid",d.id),e.onClose=function(){K.unpublish(e)},e.unmuteAudio=function(){ne(h({action:"audio-out-on",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){ne(h({action:"video-out-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){ne(h({action:"audio-out-off",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){ne(h({action:"video-out-off",streamId:e.getId()}),function(){},function(){})},e.getId()===e.getUserId()&&(e.isAudioOn()||e.hasAudio()&&(l.default.debug("local stream audio mute"),e.muteAudio()),e.isVideoOn()||(e.hasVideo()||e.hasScreen())&&(l.default.debug("local stream video mute"),e.muteVideo()))},e.pc.oniceconnectionstatechange=function(o){if("failed"===o){if(void 0!=K.timers[e.getId()]&&(clearInterval(K.timers[e.getId()]),clearInterval(K.timers[e.getId()]+"_RelatedStats")),l.default.error("Publisher connection is lost -- streamId: "+e.getId()+" p2pId: "+s),K.p2ps.delete(s),l.default.debug("publish p2p failed: ",K.p2ps),!r)return r=!0,_.report.publish(K.joinInfo.sid,{lts:n,succ:!1,ec:f.default.PEERCONNECTION_FAILED}),K.dispatchEvent((0,c.ClientEvent)({type:"pubP2PLost",stream:e})),i&&i(f.default.PEERCONNECTION_FAILED);K.dispatchEvent((0,c.ClientEvent)({type:"pubP2PLost",stream:e}))}else if("connected"===o&&(l.default.debug("publish p2p connected: ",K.p2ps),!r))return r=!0,_.report.publish(K.joinInfo.sid,{lts:n,succ:!0,ec:null}),t&&t()},l.default.debug("SDP exchange in publish : receive answer --  ",JSON.parse(a)),e.pc.processSignalingMessage(a)})},audio:e.hasAudio(),video:e.hasVideo(),screen:e.hasScreen(),isSubscriber:!1,stunServerUrl:K.stunServerUrl,turnServer:K.joinInfo.turnServer,maxAudioBW:a.maxAudioBW,minVideoBW:a.minVideoBW,maxVideoBW:a.maxVideoBW,mode:K.mode,codec:K.codec,isVideoMute:!e.videoEnabled,maxFrameRate:e.attributes.maxFrameRate}),e.pc.addStream(e.stream),l.default.debug("PeerConnection add stream :",e.stream),e.pc.onnegotiationneeded=function(t){oe(L({state:"negotiation",p2pid:s},t),function(t,i){e.pc.processSignalingMessage(t)})},K.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){t&&t.id&&(/_recv$/.test(t.id)||/^time$/.test(t.id)||e.getUserId()&&(-1===t.id.indexOf("outbound_rtp")&&-1===t.id.indexOf("OutboundRTP")||"video"!==t.mediaType||(t.googFrameWidthSent=e.videoWidth+"",t.googFrameHeightSent=e.videoHeight+""),e.getId()==e.getUserId()?ne(k(t),null,null):ne(P(t),null,null)))})})},3e3);var u=function(){e&&e.pc&&e.pc.getVideoRelatedStats&&e.pc.getVideoRelatedStats(function(t){e.getId()===e.getUserId()?ne(M(t),null,null):ne(w(t),null,null)})};u(),K.timers[e.getId()+"_RelatedStats"]=setInterval(u,1e3)}}},K.unpublish=function(e,t,i){return"object"!==(void 0===e?"undefined":o(e))||null===e?(l.default.error("Invalid local stream"),void J(i,f.default.INVALID_LOCAL_STREAM)):K.state!==G?(l.default.error("User not in the session"),void J(i,f.default.INVALID_OPERATION)):(void 0!=K.timers[e.getId()]&&(clearInterval(K.timers[e.getId()]),clearInterval(K.timers[e.getId()+"_RelatedStats"])),void(void 0!==K.socket?e.local&&void 0!==K.localStreams[e.getId()]?(delete K.localStreams[e.getId()],ne(T(e.getUserId())),(e.hasAudio()||e.hasVideo()||e.hasScreen())&&void 0===e.url&&void 0!==e.pc&&(e.pc.close(),e.pc=void 0),e.onClose=void 0,e.unmuteAudio=void 0,e.muteAudio=void 0,e.unmuteVideo=void 0,e.muteVideo=void 0,K.p2ps.delete(e.p2pId),t&&t()):(l.default.error("Invalid local stream"),J(i,f.default.INVALID_LOCAL_STREAM)):(l.default.error("User not in the session"),J(i,f.default.INVALID_OPERATION))))},K.subscribe=function(e,t,i){var n=(new Date).getTime();e.subscribeLTS=n;var r=!1;if("object"!==(void 0===e?"undefined":o(e))||null===e)return l.default.error("Invalid remote stream"),i&&i(f.default.INVALID_REMOTE_STREAM),void _.report.subscribe(K.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM});if(K.state!==G&&(l.default.error("User is not in the session"),!r))return r=!0,_.report.subscribe(K.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_OPERATION}),i&&i(f.default.INVALID_OPERATION);if(!e.local&&K.remoteStreams.hasOwnProperty(e.getId()))if(e.hasAudio()||e.hasVideo()||e.hasScreen()){var a=K.generateP2PId();K.p2ps.set(a,e),e.p2pId=a,e.pc=(0,d.Connection)({callback:function(t){l.default.debug("SDP exchange in subscribe : send offer --  ",JSON.parse(t)),oe(x({streamId:e.getId(),audio:!0,video:!0,mode:K.mode,codec:K.codec,p2pid:a,turnip:K.joinInfo.turnServer.url,turnport:Number(K.joinInfo.turnServer.udpport),turnusername:K.joinInfo.turnServer.username,turnpassword:K.joinInfo.turnServer.credential},t),function(t){if("error"===t)return l.default.error("Subscribe remote stream failed, closing stream ",e.getId()),e.close(),i&&i(f.default.SUBSCRIBE_STREAM_FAILED),void _.report.subscribe(K.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.SUBSCRIBE_STREAM_FAILED});l.default.debug("SDP exchange in subscribe : receive answer --  ",JSON.parse(t)),e.pc.processSignalingMessage(t)})},nop2p:!0,audio:!0,video:!0,screen:e.hasScreen(),isSubscriber:!0,stunServerUrl:K.stunServerUrl,turnServer:K.joinInfo.turnServer,isVideoMute:!e.videoEnabled,uid:e.getId()}),e.pc.onaddstream=function(t,i){if("ontrack"===i&&"video"===t.track.kind||"onaddstream"===i){l.default.info("Remote stream subscribed with uid ",e.getId());var n=K.remoteStreams[e.getId()];if(K.remoteStreams[e.getId()].stream="onaddstream"===i?t.stream:t.streams[0],K.remoteStreams[e.getId()].hasVideo()){if((0,I.isFireFox)()){var o=K.remoteStreams[e.getId()].stream;(0,E.vsResHack)(o,function(t,i){e.videoWidth=t,e.videoHeight=i},function(e){return l.default.warning("vsResHack failed:"+e)})}}else K.remoteStreams[e.getId()].disableVideo();n&&n.isPlaying()&&n.elementID&&(l.default.debug("Reload Player "+n.elementID+" StreamId "+n.getId()),e.audioOutput=n.audioOutput,n.stop(),e.play(n.elementID,n.playOptions));var r=(0,c.StreamEvent)({type:"stream-subscribed",stream:K.remoteStreams[e.getId()]});K.dispatchEvent(r)}e.unmuteAudio=function(){ne(h({action:"audio-in-on",streamId:e.getId()}),function(){},function(){})},e.muteAudio=function(){ne(h({action:"audio-in-off",streamId:e.getId()}),function(){},function(){})},e.unmuteVideo=function(){ne(h({action:"video-in-on",streamId:e.getId()}),function(){},function(){})},e.muteVideo=function(){ne(h({action:"video-in-off",streamId:e.getId()}),function(){},function(){})}},K.timers[e.getId()]=setInterval(function(){e&&e.pc&&e.pc.getStats&&e.pc.getStatsRate(function(t){t.forEach(function(t){if(t&&t.id){if(/_send$/.test(t.id)||/^time$/.test(t.id)||/^bweforvideo$/.test(t.id))return;-1!==t.id.indexOf("inbound_rtp")&&"video"===t.mediaType&&(t.googFrameWidthReceived=e.videoWidth+"",t.googFrameHeightReceived=e.videoHeight+""),oe(V(e.getId(),t),null,null)}else;})})},3e3),K.timers[e.getId()+"_RelatedStats"]=setInterval(function(){e&&e.pc&&e.pc.getVideoRelatedStats&&e.pc.getVideoRelatedStats(function(e){ne(D(e),null,null)})},1e3),K.audioLevel[e.getId()]=0,K.timers[e.getId()+"audio"]=setInterval(function(){K.hasListeners("active-speaker")&&e&&e.pc&&"established"===e.pc.state&&e.pc.getStats&&e.pc.getStats(function(t){t.forEach(function(t){if("audio"===t.mediaType){if(t.audioOutputLevel>5e3){K.audioLevel[e.getId()]<20&&(K.audioLevel[e.getId()]+=1);for(var i in K.audioLevel)parseInt(i)!==e.getId()&&K.audioLevel[i]>0&&(K.audioLevel[i]-=1)}var n=Object.keys(K.audioLevel),o=n.sort(function(e,t){return K.audioLevel[t]-K.audioLevel[e]});if(K.activeSpeaker!==o[0]){var r=(0,c.ClientEvent)({type:"active-speaker",uid:o[0]});K.dispatchEvent(r),K.activeSpeaker=o[0],l.default.debug("Update active speaker:"+K.activeSpeaker)}}})})},50),e.pc.oniceconnectionstatechange=function(o){if("failed"===o)void 0!=K.timers[e.getId()]&&(clearInterval(K.timers[e.getId()]),clearInterval(K.timers[e.getId()]+"audio")),l.default.error("Subscriber connection is lost -- streamId: "+e.getId()+" p2pId: "+a),l.default.debug("subscribe p2p failed: ",K.p2ps),r||(r=!0,i&&i(f.default.PEERCONNECTION_FAILED),_.report.subscribe(K.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.PEERCONNECTION_FAILED})),K.remoteStreams[e.getId()]&&K.p2ps.has(a)&&(K.p2ps.delete(a),K.dispatchEvent((0,c.ClientEvent)({type:"subP2PLost",stream:e})));else if("connected"===o&&(l.default.debug("subscribe p2p connected: ",K.p2ps),!r))return r=!0,_.report.subscribe(K.joinInfo.sid,{lts:n,succ:!0,peerid:e.getId()+"",ec:null}),K.firstFrameTimer.set(e.getId(),setInterval(function(){e.pc?e.pc.getStats(function(t){t.forEach(function(t){-1===t.id.indexOf("recv")&&-1===t.id.indexOf("inbound_rtp")&&-1===t.id.indexOf("InboundRTP")||"video"===t.mediaType&&(t.framesDecoded>0||t.googFramesDecoded>0)&&(clearInterval(K.firstFrameTimer.get(e.getId())),K.firstFrameTimer.delete(e.getId()),_.report.firstRemoteFrame(K.joinInfo.sid,{lts:(new Date).getTime(),peerid:e.getId()+"",succ:!0,width:+t.googFrameWidthReceived,height:+t.googFrameHeightReceived}))})}):(clearInterval(K.firstFrameTimer.get(e.getId())),K.firstFrameTimer.delete(e.getId()))},100)),t&&t()}}else l.default.error("Invalid remote stream"),r||(r=!0,i&&i(f.default.INVALID_REMOTE_STREAM),_.report.subscribe(K.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.INVALID_REMOTE_STREAM}));else l.default.error("No such remote stream"),r||(r=!0,i&&i(f.default.NO_SUCH_REMOTE_STREAM),_.report.subscribe(K.joinInfo.sid,{lts:n,succ:!1,peerid:e.getId()+"",ec:f.default.NO_SUCH_REMOTE_STREAM}))},K.unsubscribe=function(e,t,i){return"object"!==(void 0===e?"undefined":o(e))||null===e?(l.default.error("Invalid remote stream"),void J(i,f.default.INVALID_REMOTE_STREAM)):K.state!==G?(l.default.error("User is not in the session"),void J(i,f.default.INVALID_OPERATION)):(void 0!=K.timers[e.getId()]&&(clearInterval(K.timers[e.getId()]),clearInterval(K.timers[e.getId()]+"audio")),void 0!=K.audioLevel[e.getId()]&&delete K.audioLevel[e.getId()],void 0!=K.timer_counter[e.getId()]&&delete K.timer_counter[e.getId()],K.remoteStreams.hasOwnProperty(e.getId())?K.socket?e.local?(l.default.error("Invalid remote stream"),void J(i,f.default.INVALID_REMOTE_STREAM)):(e.close(),void ne(A(e.getId()),function(n){if("error"===n)return l.default.error("Unsubscribe remote stream failed",e.getId()),void J(i,f.default.UNSUBSCRIBE_STREAM_FAILED);void 0!==e.pc&&(e.pc.close(),e.pc=void 0),e.onClose=void 0,e.unmuteAudio=void 0,e.muteAudio=void 0,e.unmuteVideo=void 0,e.muteVideo=void 0,K.p2ps.delete(e.p2pId),l.default.info("Unsubscribe stream success"),t&&t()},i)):(l.default.error("User is not in the session"),void J(i,f.default.INVALID_OPERATION)):void J(i,f.default.NO_SUCH_REMOTE_STREAM))},K.setRemoteVideoStreamType=function(e,t){if(l.default.debug("Switching remote video stream "+e.getId()+" to "+t),"object"!==(void 0===e?"undefined":o(e))||null===e)return void l.default.error("Invalid remote stream");if(K.state!==G)return void l.default.error("User is not in the session");if(!e.local){switch(t){case K.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_HIGH:case K.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_LOW:case K.remoteVideoStreamTypes.REMOTE_VIDEO_STREAM_MEDIUM:break;default:return}ne(C(e.getId(),t),null,null)}},K.renewToken=function(e,t,i){e?K.key?K.state!==G?(l.default.debug("Client is not connected. Trying to rejoin"),K.key=e,K.rejoin(),t&&t()):(l.default.debug("renewToken from "+K.key+" to "+e),ne(N(e),t,i)):(l.default.error("Client is previously joined without token"),i&&i(f.default.INVALID_PARAMETER)):(l.default.error("Invalid Token "+e),i&&i(f.default.INVALID_PARAMETER))},K.setStreamFallbackOption=function(e,t){if(l.default.debug("Set stream fallback option "+e.getId()+" to "+t),"object"!==(void 0===e?"undefined":o(e))||null===e)return void l.default.error("Invalid remote stream");if(K.state!==G)return void l.default.error("User is not in the session");if(!e.local){switch(t){case K.streamFallbackTypes.STREAM_FALLBACK_OPTION_DISABLED:case K.streamFallbackTypes.STREAM_FALLBACK_OPTION_VIDEO_STREAM_LOW:case K.streamFallbackTypes.STREAM_FALLBACK_OPTION_AUDIO_ONLY:break;default:return}ne(O(e.getId(),t),null,null)}},K.startLiveStreaming=function(e,t){if(K.liveStreams.set(e,t),l.default.debug("Start live streaming "+e+" transcodingEnabled "+t),K.state!==G)return void l.default.error("User is not in the session");ne(U(e,t),null,null)},K.stopLiveStreaming=function(e){if(l.default.debug("Stop live streaming "+e),K.state!==G)return void l.default.error("User is not in the session");K.liveStreams.delete(e),ne(F(e),null,null)},K.setLiveTranscoding=function(e){if((0,E.isLiveTranscodingValid)(e)){if(K.transcoding=e,l.default.debug("Set live transcoding ",e),K.state!==G)return void l.default.error("User is not in the session");ne(B(e),null,null)}},K.enableAudioVolumeIndicator=function(e,t){K.audioVolumeIndication.enabled=!0,K.audioVolumeIndication.interval=e,K.audioVolumeIndication.smooth=t,K.resetAudioVolumeIndication()},K.resetAudioVolumeIndication=function(){if(clearInterval(K.timers.audioVolumeIndication),clearInterval(K.timers.audioVolumeSampling),K.audioVolumeIndication.enabled&&K.audioVolumeIndication.interval){var e=Math.floor(1e3*K.audioVolumeIndication.smooth/100);K.timers.audioVolumeSampling=setInterval(function(){K.audioVolumeSampling||(K.audioVolumeSampling={});var t={};for(var i in K.remoteStreams){var n=K.remoteStreams[i];if(n.stream&&n.hasAudio()){var o=n.getAudioLevel();o>0&&o<1&&(o*=100);var r=K.audioVolumeSampling[i]||[];for(r.push(o);r.length>e;)r.shift();t[i]=r}}K.audioVolumeSampling=t},100),K.timers.audioVolumeIndication=setInterval(function(){var e=[];for(var t in K.remoteStreams)if(K.audioVolumeSampling&&K.audioVolumeSampling[t]){var i=K.audioVolumeSampling[t],n=0;i.forEach(function(e){n+=e});var o={uid:t,level:Math.floor(n/i.length)};o.level&&e.push(o)}var r=e.sort(function(e,t){return e.level-t.level});l.default.debug("volume-indicator",JSON.stringify(r)),K.audioVolumeIndication.sortedAudioVolumes=r;var a=(0,c.ClientEvent)({type:"volume-indicator",attr:r});K.dispatchEvent(a)},K.audioVolumeIndication.interval)}},K.closeGateway=function(){l.default.debug("close gateway"),K.state=H,K.socket.close(),Z()};var q=function(e){return 1e3*Math.min(30,Math.pow(2,e)-1)},z=function(e,t){l.default.debug("Connect next gateway"),K.state=H,K.socket.close(),Z(),K.reconnectMode="tryNext",ee(e,t)},Q=function(e,t){l.default.debug("Reconnect gateway"),K.state=H,K.socket.close(),Z(),K.reconnectMode="retry",ee(e,t)},X=function(){l.default.debug("quit gateway"),K.state=H,K.socket.close(),Z()},$=function(){l.default.debug("Reconnect gateway"),K.state=H,K.socket.close(),Z(),K.reconnectMode="recover",ee()},Z=function(){for(var e in K.timers)K.timers.hasOwnProperty(e)&&clearInterval(K.timers[e]);for(var e in K.remoteStreams)if(K.remoteStreams.hasOwnProperty(e)){var t=K.remoteStreams[e],i=(0,c.ClientEvent)({type:"stream-removed",uid:t.getId(),stream:t});K.dispatchEvent(i)}K.p2ps.clear(),ae(),re(),clearInterval(K.pingTimer)};K.rejoin=function(){K.socket&&(clearInterval(K.pingTimer),K.socket.close(),K.socket=void 0),K.state=W,ee()};var ee=function(e,t){e=e||function(e){l.default.info("User "+e+" is re-joined to "+K.joinInfo.cname),K.dispatchEvent((0,c.ClientEvent)({type:"rejoin"})),K.liveStreams&&K.liveStreams.size&&K.liveStreams.forEach(function(e,t){e&&K.setLiveTranscoding(K.transcoding),K.startLiveStreaming(t,e)})},t=t||function(e){l.default.error("Re-join to channel failed ["+e+"]"),K.dispatchEvent((0,c.StreamEvent)({type:"error",reason:e}))},K.key?(++K.rejoinAttempt,K.join(K.joinInfo,K.key,e,t)):l.default.error("Connection recover failed [Invalid channel key]")},te=function(e){K.socket=(0,s.default)(e,{sid:K.joinInfo.sid})},ie=function(e,t,n){K.onConnect=t,void 0!==K.socket?"retry"===K.reconnectMode?(l.default.debug("Retry current gateway"),K.socket.reconnect()):"tryNext"===K.reconnectMode?(l.default.debug("Try next gateway"),K.socket.connectNext()):"recover"===K.reconnectMode&&(l.default.debug("Recover gateway"),l.default.debug("Try to reconnect choose server and get gateway list again "),(0,v.getGatewayList)(K.joinInfo,function(e){K.socket.replaceHost(e.gateway_addr)})):(te(e.gatewayAddr),K.socket.on("onUplinkStats",function(e){K.localStreams[K.uid]&&(K.localStreams[K.uid].uplinkStats=e)}),K.socket.on("connect",function(){K.attemps=1,ne(R(e),K.onConnect,n)}),K.socket.on("recover",function(){K.state=W,l.default.debug("Try to reconnect choose server and get gateway list again "),(0,v.getGatewayList)(K.joinInfo,function(e){K.socket.replaceHost(e.gateway_addr)})}),K.socket.on("disconnect",function(e){if(K.state!==H){K.state=H;var t=(0,c.StreamEvent)({type:"error",reason:f.default.SOCKET_DISCONNECTED});if(K.dispatchEvent(t),0===K.p2ps.size?K.reconnectMode="tryNext":K.reconnectMode="retry",Z(),1!=i){var n=q(K.attemps);l.default.error("Disconnect from server ["+e+"], attempt to recover [#"+K.attemps+"] after "+n/1e3+" seconds");setTimeout(function(){K.attemps++,K.state=W,ee()},n)}}}),K.socket.on("onAddAudioStream",function(e){if(l.default.info("Newly added audio stream with uid",e.id),K.remoteStreamsInChannel.has(e.id)||K.remoteStreamsInChannel.add(e.id),void 0===K.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});K.remoteStreams[e.id]=t;var i=(0,c.StreamEvent)({type:"stream-added",stream:t});K.dispatchEvent(i)}}),K.socket.on("onAddVideoStream",function(e){if(l.default.info("Newly added remote stream with uid"+e.id+"."),K.remoteStreamsInChannel.has(e.id)||K.remoteStreamsInChannel.add(e.id),void 0===K.remoteStreams[e.id]){var t=(0,r.Stream)({streamID:e.id,local:!1,audio:e.audio,video:e.video,screen:e.screen,attributes:e.attributes});K.remoteStreams[e.id]=t;var i=(0,c.StreamEvent)({type:"stream-added",stream:t});K.dispatchEvent(i)}else{var n=K.remoteStreams[e.id];if(void 0!==n.stream){var t=K.remoteStreams[e.id];if(t.video=!0,t.enableVideo(),l.default.info("Stream changed: enable video "+e.id),t.isPlaying()){var o=t.player.elementID;t.stop(),t.play(o)}}else if(n.p2pId)K.remoteStreams[e.id].video=!0;else{var t=(0,r.Stream)({streamID:e.id,local:!1,audio:!0,video:!0,screen:!1,attributes:e.attributes});K.remoteStreams[e.id]=t,l.default.info("Stream changed: modify video "+e.id)}}}),K.socket.on("onRemoveStream",function(e){K.remoteStreamsInChannel.has(e.id)&&K.remoteStreamsInChannel.delete(e.id);var t=K.remoteStreams[e.id];if(!t)return void console.log("ERROR stream ",e.id," not found onRemoveStream ",e);delete K.remoteStreams[e.id];var i=(0,c.StreamEvent)({type:"stream-removed",stream:t});K.dispatchEvent(i),t.close(),void 0!==t.pc&&(t.pc.close(),t.pc=void 0,K.p2ps.delete(t.p2pId))}),K.socket.on("onPublishStream",function(e){var t=K.localStreams[e.id],i=(0,c.StreamEvent)({type:"streamPublished",stream:t});K.dispatchEvent(i)}),K.socket.on("mute_audio",function(e){l.default.info("rcv peer mute audio:"+e.peerid);var t=(0,c.ClientEvent)({type:"mute-audio",uid:e.peerid}),i=K.remoteStreams[e.peerid];i&&(i.audioEnabled=!1),K.dispatchEvent(t)}),K.socket.on("unmute_audio",function(e){l.default.info("rcv peer unmute audio:"+e.peerid);var t=(0,c.ClientEvent)({type:"unmute-audio",uid:e.peerid}),i=K.remoteStreams[e.peerid];i&&(i.audioEnabled=!0),K.dispatchEvent(t)}),K.socket.on("mute_video",function(e){l.default.info("rcv peer mute video:"+e.peerid);var t=(0,c.ClientEvent)({type:"mute-video",uid:e.peerid}),i=K.remoteStreams[e.peerid];i&&(i.videoEnabled=!1),K.dispatchEvent(t)}),K.socket.on("unmute_video",function(e){l.default.info("rcv peer unmute video:"+e.peerid);var t=(0,c.ClientEvent)({type:"unmute-video",uid:e.peerid}),i=K.remoteStreams[e.peerid];i&&(i.videoEnabled=!0),K.dispatchEvent(t)}),K.socket.on("user_banned",function(e){l.default.info("user banned uid:"+e.id+"error:"+e.errcode);var t=(0,c.ClientEvent)({type:"client-banned",uid:e.id,attr:e.errcode});K.dispatchEvent(t),i=!0,leave()}),K.socket.on("stream_fallback",function(e){l.default.info("stream fallback uid:"+e.id+" peerId:"+e.peerid+" type:"+e.type);var t=(0,c.ClientEvent)({type:"stream-fallback",uid:e.id,stream:e.peerid,attr:e.type});K.dispatchEvent(t)}),K.socket.on("stream_recover",function(e){l.default.info("stream recover uid:"+e.id+"peerId:"+e.peerid+" type:"+e.type);var t=(0,c.ClientEvent)({type:"stream-recover",uid:e.id,stream:e.peerid,attr:e.type});K.dispatchEvent(t)}),K.socket.on("onP2PLost",function(e){if(l.default.debug("p2plost:",e,"p2ps:",K.p2ps),"publish"===e.event){var t=K.localStreams[e.uid];t&&_.report.publish(K.joinInfo.sid,{lts:t.publishLTS,succ:!1,ec:"DTLS failed"})}if("subscribe"===e.event){var i=K.remoteStreams[e.uid];i&&_.report.subscribe(K.joinInfo.sid,{lts:i.subscribeLTS,succ:!1,peerid:e.uid+"",ec:"DTLS failed"})}l.default.debug("p2plost:",e.p2pid);var n=K.p2ps.get(e.p2pid);n&&(K.p2ps.delete(e.p2pid),n.local?K.dispatchEvent((0,c.ClientEvent)({type:"pubP2PLost",stream:n})):K.remoteStreams[n.getId()]&&K.dispatchEvent((0,c.ClientEvent)({type:"subP2PLost",stream:n})))}),K.socket.on("onTokenPrivilegeWillExpire",function(e){l.default.debug("Received Message onTokenPrivilegeWillExpire"),K.dispatchEvent((0,c.ClientEvent)({type:"onTokenPrivilegeWillExpire"}))}),K.socket.on("onTokenPrivilegeDidExpire",function(){l.default.warning("Received Message onTokenPrivilegeDidExpire, please get new token and join again"),K.dispatchEvent((0,c.ClientEvent)({type:"onTokenPrivilegeDidExpire"})),K.closeGateway()}),K._doWithAction=function(e,t,i){"tryNext"===e?z(t,i):"retry"===e?Q(t,i):"quit"===e?X():"recover"===e&&$()},K.socket.on("notification",function(e){if(l.default.debug("Receive notification: ",e),"ERR_JOIN_BY_MULTI_IP"===p.GatewayErrorCode[e.code])return K.dispatchEvent({type:"onMultiIP",arg:e});e.detail?K._doWithAction(y.default[p.GatewayErrorCode[e.code]]):e.action&&K._doWithAction(e.action)}),K.socket.on("onPeerLeave",function(e){var t=(0,c.ClientEvent)({type:"peer-leave",uid:e.id});if(K.remoteStreamsInChannel.has(e.id)&&K.remoteStreamsInChannel.delete(e.id),K.remoteStreams.hasOwnProperty(e.id)&&(t.stream=K.remoteStreams[e.id]),K.dispatchEvent(t),K.remoteStreams.hasOwnProperty(e.id)){l.default.info("closing stream on peer leave",e.id);var i=K.remoteStreams[e.id];i.close(),delete K.remoteStreams[e.id],void 0!==i.pc&&(i.pc.close(),i.pc=void 0,K.p2ps.delete(i.p2pId))}K.timers.hasOwnProperty(e.id)&&(clearInterval(K.timers[e.id]),clearInterval(K.timers[e.id]+"_RelatedStats"),delete K.timers[e.id]),void 0!=K.audioLevel[e.id]&&delete K.audioLevel[e.id],void 0!=K.timer_counter[e.id]&&delete K.timer_counter[e.id]}),K.socket.on("onUplinkStats",function(e){}),K.socket.on("liveStreamingStarted",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingStarted",url:e.url});K.dispatchEvent(t)}),K.socket.on("liveStreamingFailed",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingFailed",url:e.url});K.dispatchEvent(t)}),K.socket.on("liveStreamingStopped",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveStreamingStopped",url:e.url});K.dispatchEvent(t)}),K.socket.on("liveTranscodingUpdated",function(e){var t=(0,c.LiveStreamingEvent)({type:"liveTranscodingUpdated",reason:e.reason});K.dispatchEvent(t)}))},ne=function(e,t,i){if(void 0===K.socket)return l.default.error("No socket available"),void J(i,f.default.INVALID_OPERATION);try{K.socket.emitSimpleMessage(e,function(e,n){"success"===e?"function"==typeof t&&t(n):"function"==typeof i&&i(p.GatewayErrorCode[n]||n)})}catch(t){l.default.error("Socket emit message failed"+JSON.stringify(e)),l.default.error(t),J(i,f.default.SOCKET_ERROR)}},oe=function(e,t){if(void 0===K.socket)return void l.default.error("Error in sendSimpleSdp [socket not ready]");try{K.socket.emitSimpleMessage(e,function(e,i){t&&t(e,i)})}catch(e){l.default.error("Error in sendSimpleSdp ["+e+"]")}},re=function(){for(var e in K.localStreams)if(void 0!==K.localStreams[e]){var t=K.localStreams[e];delete K.localStreams[e],void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}},ae=function(){K.remoteStreamsInChannel.clear();for(var e in K.remoteStreams)if(K.remoteStreams.hasOwnProperty(e)){var t=K.remoteStreams[e];t.isPlaying()&&t.stop(),t.close(),delete K.remoteStreams[e],void 0!==t.pc&&(t.pc.close(),t.pc=void 0)}};return K},b={_gatewayClients:{},register:function(e,t){var i=this;if(!t.uid){var n="NO_UID_PROVIDED";return l.default.error(n,t),n}if(t.cname){if(i._gatewayClients[t.cname]&&i._gatewayClients[t.cname][t.uid]&&i._gatewayClients[t.cname][t.uid]!==e){var n="UID_CONFLICT";return l.default.error(n,t),n}return l.default.debug("register client Channel",t.cname,"Uid",t.uid),i._gatewayClients[t.cname]||(i._gatewayClients[t.cname]={}),i._gatewayClients[t.cname][t.uid]=e,null}var n="NO_CHANNEL_PROVIDED";return l.default.error(n,t),n},unregister:function(e){var t=this,i=e&&e.uid,n=e.joinInfo&&e.joinInfo.cname;if(!i||!n){var o="INVALID_GATEWAYCLIENT";return l.default.error(o),o}if(t._gatewayClients[n]&&t._gatewayClients[n][i]){if(t._gatewayClients[n][i]!==e){var o="GATEWAYCLIENT_UID_CONFLICT";return l.default.error(o),o}return l.default.debug("unregister client ",e.uid),delete t._gatewayClients[n][i],null}var o="GATEWEAY_CLIENT_UNREGISTERED";l.default.error(o)}};R.DISCONNECTED=0,R.CONNECTING=1,R.CONNECTED=2,R.DISCONNECTING=3,t.default=R},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(33),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(1),a=function(e,t){var i={};return i.connect=function(){t.host=e,i.signal=(0,o.default)(t),i.on=i.signal.on,i.dispatchEvent=i.signal.dispatchEvent,i.signal.on("onopen",function(e){i.signal.onEvent=function(e){i.dispatchEvent((0,r.MediaEvent)({type:e.event,msg:e}))},i.dispatchEvent((0,r.MediaEvent)({type:"connect",msg:e}))}),i.signal.on("onError",function(e){var t=e.msg;onError(t.code,"error")})},i.disconnect=function(){i.signal.disconnect()},i.close=function(){i.signal.close()},i.getURL=function(){return i.signal.getURL()},i.reconnect=function(){i.signal.reconnect()},i.connectNext=function(){i.signal.connectNext()},i.replaceHost=function(e){i.signal.replaceHost(e)},i.emitSimpleMessage=function(e,t){i.signal.sendSignalCommand(e,t)},i.connect(),i};t.default=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(1),r=i(16),a=n(r),s=i(0),d=n(s),c=i(4),u=function(e){var t=(0,o.EventDispatcher)(e);return t.needReconnect=!0,t.isTimeout=!1,t.isInit=!0,t.hostIndex=0,t.requestID=0,e.host instanceof Array?t.host=e.host:t.host=[e.host],t.getURL=function(){return t.connection.url},t.reconnect=function(){t.isInit=!0,t.creatConnection()},t.connectNext=function(){t.isInit=!0,++t.hostIndex,d.default.debug("Gateway length:"+t.host.length+" current index:"+t.hostIndex),t.hostIndex>=t.host.length?t.dispatchEvent((0,o.MediaEvent)({type:"recover"})):t.creatConnection()},t.replaceHost=function(e){t.host=e||t.host,t.hostIndex=0,t.creatConnection()},t.creatConnection=function(){d.default.debug("start connect:"+t.host[t.hostIndex]),t.lts=(new Date).getTime(),t.connection=new WebSocket("wss://"+t.host[t.hostIndex]),t.connection.onopen=function(e){d.default.debug("websockect opened: "+t.host[t.hostIndex]),t.needReconnect=!0,t.isTimeout=!1,t.isInit=!1,clearTimeout(t.timeoutCheck),t.dispatchEvent((0,o.MediaEvent)({type:"onopen",event:e,socket:t}))},t.connection.onmessage=function(e){var i=JSON.parse(e.data);i.hasOwnProperty("_id")?t.dispatchEvent((0,o.MediaEvent)({type:i._id,msg:i})):i.hasOwnProperty("_type")&&t.dispatchSocketEvent((0,o.MediaEvent)({type:i._type,msg:i.message}))},t.connection.onclose=function(i){t.needReconnect?t.isTimeout||t.isInit?(d.default.debug("websockect connect timeout"),c.report.joinGateway(e.sid,{lts:t.lts,succ:!1,ec:"timeout",addr:t.connection.url}),t.connectNext()):t.dispatchEvent((0,o.MediaEvent)({type:"disconnect",event:i})):(d.default.debug("websockect closeed"),(0,a.default)(e.onFailure,i),clearTimeout(t.timeoutCheck),t.dispatchEvent((0,o.MediaEvent)({type:"close",event:i})),t.connection.onopen=void 0,t.connection.onclose=void 0,t.connection.onerror=void 0,t.connection.onmessage=void 0,t.connection=void 0)},t.connection.onerror=function(e){};setTimeout(function(){t.connection&&t.connection.readyState!=WebSocket.OPEN&&(t.isTimeout=!0,t.connection.close())},5e3)},t.creatConnection(),t.sendMessage=function(e,i){t.connection&&t.connection.readyState==WebSocket.OPEN?t.connection.send(JSON.stringify(e)):i({error:"Gateway not connected"})},t.disconnect=function(){t.needReconnect=!0,t.connection.close()},t.close=function(){t.needReconnect=!1,t.connection.onclose=void 0,t.connection.close()},t.sendSignalCommand=function(e,i){e._id="_request_"+t.requestID,t.requestID+=1,"publish_stats"!==e._type&&"subscribe_stats"!==e._type&&"publish_stats_low"!==e._type&&t.on(e._id,function(n){n.msg&&i&&i(n.msg._result,n.msg.message),delete t.dispatcher.eventListeners[e._id]}),t.sendMessage(e,function(e){e.reason="NOT_CONNECTED",i&&i(e.reason,e)})},t};t.default=u},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ERR_NO_VOCS_AVAILABLE:"tryNext",ERR_NO_VOS_AVAILABLE:"tryNext",ERR_JOIN_CHANNEL_TIMEOUT:"tryNext",WARN_REPEAT_JOIN:"quit",ERR_JOIN_BY_MULTI_IP:"recover",WARN_LOOKUP_CHANNEL_TIMEOUT:"tryNext",WARN_OPEN_CHANNEL_TIMEOUT:"tryNext",ERR_VOM_SERVICE_UNAVAILABLE:"tryNext",ERR_TOO_MANY_USERS:"tryNext",ERR_MASTER_VOCS_UNAVAILABLE:"tryNext",ERR_INTERNAL_ERROR:"tryNext",notification_test_recover:"recover",notification_test_tryNext:"tryNext",notification_test_retry:"retry"};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simMap=void 0;var n=i(5),o=function(e){var t;switch(e){case"120p":case"120p_1":t=["120p_1","120p_1","120p_1"];break;case"120p_3":t=["120p_3","120p_3","120p_3"];break;case"180p":case"180p_1":t=["90p_1","90p_1","180p_1"];break;case"180p_3":t=["120p_3","120p_3","180p_3"];break;case"180p_4":t=["120p_1","120p_1","180p_4"];break;case"240p":case"240p_1":t=["120p_1","120p_1","240p_1"];break;case"240p_3":t=["120p_3","120p_3","240p_3"];break;case"240p_4":t=["120p_4","120p_4","240p_4"];break;case"360p":case"360p_1":case"360p_4":case"360p_9":case"360p_10":case"360p_11":t=["90p_1","90p_1","360p_1"];break;case"360p_3":case"360p_6":t=["120p_3","120p_3","360p_3"];break;case"360p_7":case"360p_8":t=["120p_1","120p_1","360p_7"];break;case"480p":case"480p_1":case"480p_2":case"480p_4":case"480p_10":t=["120p_1","120p_1","480p_1"];break;case"480p_3":case"480p_6":t=["120p_3","120p_3","480p_3"];break;case"480p_8":case"480p_9":t=["120p_4","120p_4","480p_8"];break;case"720p":case"720p_1":case"720p_2":case"720p_3":t=["90p_1","90p_1","720p_1"];break;case"720p_5":case"720p_6":t=["120p_1","120p_1","720p_5"];break;case"1080p":case"1080p_1":case"1080p_2":case"1080p_3":case"1080p_5":t=["90p_1","90p_1","1080p_1"];break;case"1440p":case"1440p_1":case"1440p_2":t=["90p_1","90p_1","1440p_1"];break;case"4k":case"4k_1":case"4k_3":t=["90p_1","90p_1","4k_1"];break;default:t=["120p_1","120p_1","360p_7"]}return(0,n.isOpera)()?[e,15,50]:(0,n.isFireFox)()?[t[1],15,100]:(0,n.isSafari)()?[t[2],15,50]:[t[0],15,50]};t.simMap=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RTCStatsCollector=void 0;var n=i(1),o=i(0),r=(function(e){e&&e.__esModule}(o),i(14)),a=function(e){var t=(0,n.EventDispatcher)();return t.gatewayClient=e,t.localStats={},t.remoteStats={},t.getRemoteAudioStats=function(e){var i={};for(var n in t.remoteStats){var o={},a=t.remoteStats[n];(0,r.setStat)(o,"End2EndDelay",a.peer_delay&&a.peer_delay.audio_delay),(0,r.setStat)(o,"TransportDelay",a.peer_delay&&a.peer_delay.e2e_delay),(0,r.setStat)(o,"PacketLossRate",a.peer_delay&&a.peer_delay.e2e_audio_lost_ratio_400ms),(0,r.setStat)(o,"RecvLevel",a.audioStats&&a.audioStats.totalAudioEnergy),(0,r.setStat)(o,"RecvBitrate",a.audioRecvBitrate),(0,r.setStat)(o,"CodecType",a.audioStats&&a.audioStats.googCodecName),(0,r.setStat)(o,"MuteState",a.audioDisabled),i[n]=o}e&&e(i)},t.getLocalAudioStats=function(e){var i={};for(var n in t.localStats){var o={},a=t.localStats[n];(0,r.setStat)(o,"RecordingLevel",a.audioStats&&a.audioStats.audioInputLevel),(0,r.setStat)(o,"SendLevel",a.audioStats&&a.audioStats.totalAudioEnergy),(0,r.setStat)(o,"SamplingRate",a.audioStats&&a.audioStats.totalSamplesDuration),(0,r.setStat)(o,"SendBitrate",a.audioSendBitrate),(0,r.setStat)(o,"CodecType",a.audioStats&&a.audioStats.googCodecName),(0,r.setStat)(o,"MuteState",a.audioDisabled),(0,r.setStat)(o,"SendBitrate",a.audioSendBitrate);var s=t.gatewayClient.localStreams[n];s&&s.isPlaying()&&(0,r.setStat)(o,"MuteState",s.audioEnabled?"0":"1"),i[n]=o}e&&e(i)},t.getRemoteVideoStats=function(e){var i={};for(var n in t.remoteStats){var o={},a=t.remoteStats[n];(0,r.setStat)(o,"End2EndDelay",a.peer_delay&&a.peer_delay.video_delay),(0,r.setStat)(o,"TransportDelay",a.peer_delay&&a.peer_delay.e2e_delay),(0,r.setStat)(o,"PacketLossRate",a.peer_delay&&a.peer_delay.e2e_video_lost_ratio_400ms),(0,r.setStat)(o,"RecvBitrate",a.videoRecvBitrate),(0,r.setStat)(o,"RecvResolutionWidth",a.videoStats&&a.videoStats.googFrameWidthReceived),(0,r.setStat)(o,"RecvResolutionHeight",a.videoStats&&a.videoStats.googFrameHeightReceived),(0,r.setStat)(o,"RenderFrameRate",a.videoStats&&a.videoStats.googFrameRateOutput),(0,r.setStat)(o,"MuteState",a.videoDisabled),i[n]=o}e&&e(i)},t.getLocalVideoStats=function(e){var i={};for(var n in t.localStats){var o={},a=t.localStats[n];(0,r.setStat)(o,"TargetSendBitrate",a.videoTargetSendBitrate),(0,r.setStat)(o,"SendFrameRate",a.videoStats&&a.videoStats.googFrameRateSent),(0,r.setStat)(o,"SendBitrate",a.videoSendBitrate),(0,r.setStat)(o,"SendResolutionWidth",a.videoStats&&a.videoStats.googFrameWidthSent),(0,r.setStat)(o,"SendResolutionHeight",a.videoStats&&a.videoStats.googFrameHeightSent),(0,r.setStat)(o,"EncodeDelay",a.videoStats&&a.videoStats.googAvgEncodeMs),(0,r.setStat)(o,"MuteState",a.videoDisabled),i[n]=o,e&&e(i)}},t.getTransportStats=function(e){var i={},n=t.gatewayClient.traffic_stats;(0,r.setStat)(i,"RTT",n&&n.access_delay),e&&e(i)},t.getStatsTimer=setInterval(function(){var e=t.gatewayClient.traffic_stats,i=Date.now(),n={};Object.keys(t.gatewayClient.remoteStreams).forEach(function(o){var r=t.gatewayClient.remoteStreams[o],a=t.remoteStats[o],s={id:o,updatedAt:i};n[o]=s;var d=e&&e.peer_delay&&e.peer_delay.find(function(e){return e.peer_uid==o});d&&(s.peer_delay=d),r&&(r.isPlaying()&&(s.audioDisabled=r.audioEnabled?"0":"1",s.videoDisabled=r.videoEnabled?"0":"1"),a&&a.peer_delay&&d&&a.peer_delay.stream_type!==d.stream_type&&t.gatewayClient.dispatchEvent({type:"streamTypeChange",uid:o,streamType:d.stream_type}),r.pc&&"established"==r.pc.state&&r.pc.getStats(function(e){if(s.pcStats=e,s.audioStats=e.find(function(e){return"audio"==e.mediaType}),s.videoStats=e.find(function(e){return"video"==e.mediaType}),a&&a.audioStats&&s.audioStats){var t=parseInt(s.audioStats.bytesReceived)-parseInt(a.audioStats.bytesReceived);if(isFinite(t)&&s.audioStats.timestamp){var i=s.audioStats.timestamp.getTime()-a.audioStats.timestamp.getTime();s.audioRecvBitrate=Math.floor(8*t/i)}}if(a&&a.videoStats&&s.videoStats){var n=parseInt(s.videoStats.bytesReceived)-parseInt(a.videoStats.bytesReceived);if(isFinite(n)&&s.videoStats.timestamp){var i=s.videoStats.timestamp.getTime()-a.videoStats.timestamp.getTime();s.videoRecvBitrate=Math.floor(8*n/i)}}}))}),t.remoteStats=n;var o={};Object.keys(t.gatewayClient.localStreams).forEach(function(e){var n=t.gatewayClient.localStreams[e],r=t.localStats[e],a={id:e,updatedAt:i};o[e]=a,n&&(n.isPlaying()&&(a.audioDisabled=n.audioEnabled?"0":"1",a.videoDisabled=n.videoEnabled?"0":"1"),n.video&&n.attributes.maxVideoBW?a.videoTargetSendBitrate=n.attributes.maxVideoBW:n.video&&n.screenAttributes&&(a.videoTargetSendBitrate=n.screenAttributes.maxVideoBW),n.pc&&"established"==n.pc.state&&n.pc.getStats(function(e){if(a.pcStats=e,a.audioStats=e.find(function(e){return"audio"==e.mediaType&&e.id.indexOf("_send")>-1}),a.videoStats=e.find(function(e){return"video"==e.mediaType&&e.id.indexOf("_send")>-1}),a.audioStats&&r&&r.audioStats){var t=parseInt(a.audioStats.bytesSent)-parseInt(r.audioStats.bytesSent);if(isFinite(t)&&a.audioStats.timestamp){var i=a.audioStats.timestamp.getTime()-r.audioStats.timestamp.getTime();a.audioSendBitrate=Math.floor(8*t/i)}}if(a.videoStats&&r&&r.videoStats){var n=parseInt(a.videoStats.bytesSent)-parseInt(r.videoStats.bytesSent);if(isFinite(n)&&a.videoStats.timestamp){var i=a.videoStats.timestamp.getTime()-r.videoStats.timestamp.getTime();a.videoSendBitrate=Math.floor(8*n/i)}}}))}),t.localStats=o},1e3),t};t.RTCStatsCollector=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.networkManager=void 0;var n=i(0),o=(function(e){e&&e.__esModule}(n),i(1)),r=function(){var e=(0,o.EventDispatcher)();return e.states={UNINIT:"UNINIT",INITING:"INITING",INITED:"INITED"},e.state=e.states.UNINIT,e.type=null,e.lastConnectedAt=null,e.lastDisconnectedAt=null,e.lastTypeChangedAt=null,e.networkChangeTimer=null,e._init=function(t,i){if(e.state=e.states.INITING,navigator.connection&&navigator.connection.addEventListener){var n=e._getNetworkInfo();e.type=n&&n.type,e.state=e.states.INITED,t&&t()}else e.state=e.states.UNINIT,i&&i("DO_NOT_SUPPORT")},e._getNetworkInfo=function(){return navigator.connection},e._reloadNetworkInfo=function(){var t=e._getNetworkInfo(),i=t&&t.type||"UNSUPPORTED",n=Date.now();if(i!==e.type){e.lastTypeChangedAt=n,"none"==i?e.lastDisconnectedAt=n:"none"==e.type&&(e.lastConnectedAt=n),e.type=i;var o={type:"networkTypeChanged",networkType:i};e.dispatchEvent(o)}},e.getStats=function(t,i){var n={},o=e._getNetworkInfo();o&&(n.NetworkType=o.type||"UNSUPPORTED"),setTimeout(function(){t(n)},0)},e._init(function(){navigator.connection.addEventListener("change",function(){e._reloadNetworkInfo()}),e.networkChangeTimer=setInterval(function(){e._reloadNetworkInfo()},5e3)},function(e){}),e},a=new r;t.networkManager=a},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.systemManager=void 0;var n=i(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),r=i(1),a=function(){};a.prototype.set=function(e,t){["BatteryLevel"].indexOf(e)>-1&&(this[e]=t)};var s=function(){var e=(0,r.EventDispatcher)();return e.states={UNINIT:"UNINIT",INITING:"INITING",INITED:"INITED"},e.state=e.states.UNINIT,e.batteryManager=null,e._init=function(t,i){e.state=e.states.INITING,navigator.getBattery?navigator.getBattery().then(function(i){e.batteryManager=i,t&&setTimeout(function(){t()},0)}).catch(function(e){o.default.debug("navigator.getBattery is disabled",e),t&&t()}):(e.state=e.states.INITED,t&&t())},e._getBatteryStats=function(){var t={};return e.batteryManager&&e.batteryManager.level?t.BatteryLevel=Math.floor(100*e.batteryManager.level):t.BatteryLevel="UNSUPPORTED",t},e.getStats=function(t,i){var n=new a,o=e._getBatteryStats();o&&o.BatteryLevel&&n.set("BatteryLevel",o.BatteryLevel),t&&t(n)},e._init(),e},d=new s;t.systemManager=d}]).default});

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"col col-lg-12"},[_c('section',{staticClass:"card"},[_c('div',{staticClass:"card-body text-secondary"},[_c('card',{attrs:{"header-text":"List of callers"}},[_c('ul',[_vm._l((_vm.revuser),function(i){return _c('li',[_c('p',[_vm._v(_vm._s(i._id))]),_vm._v(" "),(i.state==='new')?_c('button',{staticClass:"btn btn-outline-success",on:{"click":function($event){_vm.pickCall(i)}}},[_vm._v("Pick Up")]):(i.state==='picked')?_c('span',{staticClass:"badge badge-warning"},[_vm._v("Already answered")]):_vm._e()])}),_vm._v(" "),(_vm.callingUsersArray.length===0)?_c('li',[_c('p',[_vm._v(" No Calls Yet")])]):_vm._e()],2)])],1)])]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('notifications',{attrs:{"group":"call","duration":5000,"width":500,"animation-name":"v-fade-left","position":"top right"},scopedSlots:_vm._u([{key:"body",fn:function(props){return [_c('div',{staticClass:"custom-template"},[_c('div',{staticClass:"custom-template-icon"},[_c('i',{staticClass:"icon ion-android-checkmark-circle"})]),_vm._v(" "),_c('div',{staticClass:"custom-template-content"},[_c('div',{staticClass:"custom-template-title"},[_vm._v("\n                        "+_vm._s(props.item.title)+"\n\n                        "),_c('a',{staticStyle:{"display":"flex","flex-direction":"row","cursor":"pointer"},attrs:{"href":props.item.data.call.call_page_origin,"target":"about:_blank"}},[_c('p',{staticStyle:{"font-size":"10px","text-overflow":"ellipsis","max-width":"300px","overflow":"hidden","white-space":"nowrap"}},[_vm._v("\n                                On Page   '"+_vm._s(props.item.data.call.call_page_origin)+"'"),_c('br')]),_c('i',{staticClass:"fa fa-external-link"})]),_vm._v("\n                        "+_vm._s(new Date(props.item.data.call.created_at).toDateString())+"\n                    ")]),_vm._v(" "),_c('div',{staticClass:"custom-template-text"},[_c('button',{staticClass:"btn btn-outline-success",on:{"click":function($event){_vm.pickCall(props.item.data,props)}}},[_vm._v("Pick Up")]),_vm._v(" "),_c('button',{staticClass:"btn btn-outline-warning",on:{"click":props.close}},[_vm._v("Ignore")])])]),_vm._v(" "),_c('div',{staticClass:"custom-template-close",on:{"click":props.close}},[_c('i',{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])])]}}])}),_vm._v(" "),_c('basix-modal',{ref:"largeModal",attrs:{"oncall":_vm.oncall,"show":_vm.show,"large":true,"okText":"End Call","cancelClass":"hidden"},on:{"ok":_vm.hangUp,"update:show":function($event){_vm.show=$event}}},[_c('div',{attrs:{"slot":"title"},slot:"title"},[_vm._v("Talking to user with generated id "+_vm._s(_vm.currentUser?_vm.currentUser._id:''))]),_vm._v("\n        Page user initiated call"),_c('a',{attrs:{"href":_vm.currentUser?_vm.currentUser.call_page_origin:'',"target":"about:_blank"}},[_vm._v(" "+_vm._s(_vm.currentUser?_vm.currentUser.call_page_origin:'')+" "),_c('i',{staticClass:"fa fa-external-link"})]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.oncall)?_c('div',{staticStyle:{"display":"flex","flex-direction":"column","justify-content":"center"}},[(_vm.oncall)?_c('i',{staticClass:"fa fa-microphone success",staticStyle:{"margin":"auto","font-size":"250px","margin-top":"10px"},attrs:{"aria-hidden":"true"}}):_vm._e(),_vm._v(" "),_c('p',{staticClass:"btn-outline-success"},[_vm._v(" connected")])]):_c('div',{staticStyle:{"display":"flex","flex-direction":"column","justify-content":"center"}},[_c('i',{staticClass:"fa fa-spinner fa-spin",staticStyle:{"margin":"auto","font-size":"150px","margin-top":"10px"}}),_vm._v(" "),_c('p',[_vm._v(" connecting ...")])])]),_vm._v(" "),_c('div',{staticStyle:{"display":"none"},attrs:{"id":"user"}}),_c('div',{staticStyle:{"display":"none"},attrs:{"id":"agent"}})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col col-lg-12"},[_c('section',{staticClass:"card"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=0.build.js.map