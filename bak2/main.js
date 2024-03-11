var globalThis = this, self = this;module.exports =
require("./_commons/0.js")([
{
"ids": [1],
"modules":{

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
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
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@mpflow/plugin-babel/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@mpflow/plugin-babel/node_modules/regenerator-runtime/runtime.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@mpflow/plugin-babel/node_modules/regenerator-runtime/runtime.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var regeneratorRuntime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/api.js":
/*!**************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/api.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");


const API = {}

const noPromiseAPIs = [
  'canIUse',
  'nextTick',
  'reportMonitor',
  'reportAnalytics',
  'createWorker',
]
/**
 * 无需打印console的API
 */
const noLogAPIs = [
  'getFileInfo',
  'setStorage',
]
/**
 * 无需上报异常的API
 * @type {*[]}
 */
const noNeedMonitor = [
  'getStorage',
  'getStorageSync',
]

Object.keys(wx).forEach((key) => {
  if (noPromiseAPIs.indexOf(key) > -1 || /^on|off|\w+Sync|create\w+Context|get\w+Manager$/.test(key)) {
    API[key] = function () {
      try {
        return wx[key].apply(wx, arguments)
      } catch (e) {
        console.error(`API ${key} exception:`, e)
      }
    }
    return
  }

  API[key] = function (opt = {}) {
    return new Promise((resolve, reject) => {
      let startTime = null

      opt.success = (res = {}) => {
        noLogAPIs.indexOf(key) === -1 && console.debug(`API ${key} success:`, res)
        if (['login'].indexOf(key) > -1) {
          console.debug(`API ${key} success resolve:`, typeof resolve, resolve)
        }
        try {
          resolve(res)
        } catch (e) {
          throw e
        }
      }

      opt.fail = (res = {}) => {
        if (key.indexOf('Storage') === -1) {
          console.error(`API ${key} fail:`, res)
        }
        if (['login'].indexOf(key) > -1) {
          console.debug(`API ${key} fail reject:`, typeof reject, reject)
        }
        // if (res && res.errMsg) {
        //   reject(new Error(res.errMsg))
        // } else {

        const errMsg = res.errMsg || ''
        if (noNeedMonitor.indexOf(key) === -1 && errMsg.indexOf('cancel') === -1) {
          const costTime = Date.now() - startTime
          const params = {
            ...opt,
          }
          delete params.success
          delete params.fail
          delete params.complete
          Object(_report_index__WEBPACK_IMPORTED_MODULE_0__["monitorAndStream"])(_report_index__WEBPACK_IMPORTED_MODULE_0__["MONITOR_ACTION"].apiFail(key), {
            costTime,
            errCode: String(res.errCode || -1),
            extParam: JSON.stringify({
              params,
              res,
            })
          }, {
            msg: res,
          })
        }

        try {
          reject(res)
        } catch (e) {
          const msg = `[Promise exception]API ${key} fail reject: ${e}`
          console.error(msg)
          Object(_report_index__WEBPACK_IMPORTED_MODULE_0__["badjs"])(msg)
          Object(_report_index__WEBPACK_IMPORTED_MODULE_0__["jsErrReport"])(msg, _report_index__WEBPACK_IMPORTED_MODULE_0__["JS_ERROR_TYPE"].API_FAIL, key)
          throw e
        }
        // }
      }

      opt.complete = () => {
        noLogAPIs.indexOf(key) === -1 && console.debug(`API ${key} cost:`, Date.now() - startTime)
      }

      startTime = Date.now()
      try {
        wx[key](opt)
      } catch (e) {
        console.error(`API ${key} exception:`, e)
      }
    })
  }
})

/* harmony default export */ __webpack_exports__["default"] = (API);


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/config.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/config.js ***!
  \*****************************************************************/
/*! exports provided: initAppConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAppConfig", function() { return initAppConfig; });
/* harmony import */ var _report_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system */ "./node_modules/@tencent/intp-weapp-kit-beta/src/system.js");
/**
 * Created by yunshengli on 2019/2/19.
 */


let Config = {
  codeType: null,
  weappVersion: null, // 小程序版本号
  appKey: null // 需要获取getGateWay的请求才需要
}

const initAppConfig = (options = {}) => {
  Object(_system__WEBPACK_IMPORTED_MODULE_1__["initSystemInfo"])(options.weappVersion)
  if (!options.codeType && !_system__WEBPACK_IMPORTED_MODULE_1__["SystemInfo"].plugin) {
    console.warn('必须设置codeType！')
    return
  }
  Config.codeType = options.codeType
  options.weappVersion && (Config.weappVersion = options.weappVersion)
  options.report && Object(_report_index__WEBPACK_IMPORTED_MODULE_0__["initReportConfig"])(options.report)
  options.appKey && (Config.appKey = options.appKey)
}

/* harmony default export */ __webpack_exports__["default"] = (Config);


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js ***!
  \********************************************************************/
/*! exports provided: CGI_DOMAIN, GATE_DOMAIN, RET_CODE, STORAGE_KEY, X_WEAPP_BIZ_VERSION_FIELD, X_WECHAT_UIN_FIELD, CONTENT_TYPE_FIELD, CONTENT_TYPE_VALUE, WEAPP_ENV_VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CGI_DOMAIN", function() { return CGI_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GATE_DOMAIN", function() { return GATE_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RET_CODE", function() { return RET_CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORAGE_KEY", function() { return STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_WEAPP_BIZ_VERSION_FIELD", function() { return X_WEAPP_BIZ_VERSION_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X_WECHAT_UIN_FIELD", function() { return X_WECHAT_UIN_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_FIELD", function() { return CONTENT_TYPE_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPE_VALUE", function() { return CONTENT_TYPE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEAPP_ENV_VERSION", function() { return WEAPP_ENV_VERSION; });
/**
 * Created by yunshengli on 2018/1/19.
 */
const CGI_DOMAIN = 'https://mp.weixin.qq.com'
const GATE_DOMAIN = 'https://oa.m.tencent.com'
/**
 * 各种返回码
 */
const RET_CODE = {
  API_REQUEST_FAIL: -1024, // wx.request fail
  REQUEST_TIMEOUT: -1025, // 请求超时
  CGI_DATA_ERROR: -1026, // CGI数据格式不对
  REQUEST_NETWORK_FAIL: -1027, // 请求网络异常
  API_LOGIN_FAIL: -1028, // wx.login fail
  CGI_AUTH_FAILED: 3, // 用户鉴权失败，城市服务的错误码
  CGI_AUTH_FAILED_23: 23, // 用户鉴权失败
  SESSION_EXPIRE: 200003, // session失效
  PASS_TICKET_AUTH_FAILED: 1200, // pass_ticket失效
  CGI_AUTH_FAILED_1201: 1201, // 登录态失效
}

const STORAGE_KEY = {
  SESSION: 'app-session',
  SYSTEM_INFO: 'system-info',
  GEO: 'geo-location',
  GEO_CITY: 'geo-city',
  CGI: 'CGI:',
  TIMESTAMP: 'timestamp',
}

const X_WEAPP_BIZ_VERSION_FIELD = 'X-WEAPP-BIZ-VERSION'
const X_WECHAT_UIN_FIELD = 'X-WECHAT-UIN'
const CONTENT_TYPE_FIELD = 'CONTENT-TYPE'
const CONTENT_TYPE_VALUE = {
  FORM: 'application/x-www-form-urlencoded',
  JSON: 'application/json',
}

/**
 * 小程序版本类型
 */
const WEAPP_ENV_VERSION = {
  DEVELOP: {
    name: '开发版',
    value: 'develop',
  },
  TRIAL: {
    name: '体验版',
    value: 'trial',
  },
  RELEASE: {
    name: '正式版',
    value: 'release',
  },
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/error/FEError.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/error/FEError.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FEError; });
/**
 * Created by yunshengli on 2018/8/20.
 */
class FEError extends Error {
  constructor(obj) {
    super(obj.msg)
    this.name = 'FEError'
    this.message = obj.msg || ''
    this.code = obj.code || ''

    // a workaround to make `instanceof DDoSProtectionError` work in ES5
    // https://github.com/babel/babel/issues/4485
    this.constructor = FEError
    this.__proto__ = FEError.prototype
  }
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/error/error-code.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/error/error-code.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 前端错误码
 * 为了和CGI区分，都用E10000的格式
 * Created by yunshengli on 2019/2/20.
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  NO_CODE_TYPE: {
    code: 'E10000',
    msg: 'must init codeType'
  },
  API_LOGIN_ERR: {
    code: 'E11000',
    msg: 'wx.login err'
  },
  CGI_LOGIN_ERR: {
    code: 'E11100',
    msg: 'cgi login err'
  },
  API_FACE_NO_SUPPORT: {
    code: 'E12000',
    msg: 'wx.checkIsSupportFacialRecognition fail'
  },
  API_FACE_CANCEL: {
    code: 'E12100',
    msg: 'wx.startFacialRecognitionVerify cancel'
  },
  API_PAY_CANCEL: {
    code: 'E12100',
    msg: 'wx.requestPayment cancel'
  },
  API_VERIFY_PASSWORD_CANCEL: {
    code: 'E12200',
    msg: 'wx.verifyPaymentPassword cancel'
  },
  API_BIND_PAYMENT_CARD_CANCEL: {
    code: 'E12300',
    msg: 'wx.bindPaymentCard cancel'
  },
});


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/index.js ***!
  \****************************************************************/
/*! exports provided: initAppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/polyfill/index.js");
/* harmony import */ var _polyfill_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/@tencent/intp-weapp-kit-beta/src/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initAppConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_1__["initAppConfig"]; });






/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/polyfill/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/polyfill/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  if (!Object.entries) {
    Object.entries = function( obj ){
      var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array
      while (i--)
        resArray[i] = [ownProps[i], obj[ownProps[i]]];

      return resArray;
    };
  }
})();

(function () {
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function(valueToFind, fromIndex) {

        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        // 1. Let O be ? ToObject(this value).
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(valueToFind, elementK) is true, return true.
          if (sameValueZero(o[k], valueToFind)) {
            return true;
          }
          // c. Increase k by 1.
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }
})();

(function () {
  if (!String.prototype.includes) {
    Object.defineProperty(String.prototype, 'includes', {
      value: function(search, start) {
        if (typeof start !== 'number') {
          start = 0
        }

        if (start + search.length > this.length) {
          return false
        } else {
          return this.indexOf(search, start) !== -1
        }
      }
    })
  }
})();

(function () {
  Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value;
  };
})();


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js ***!
  \***********************************************************************/
/*! exports provided: Uin, TableId, MonitorId, Monitor, BadjsId, StreamInterface, RetCodeModule, RetCodeDomain, ServiceType, BadJSMid, monitorFunction, initReportConfig, tick, send, MONITOR_ACTION, monitor, clearMonitor, idkey, clearIdkey, badjs, saveSpeeds, sendSpeeds, RET_CODE_TYPE, retcode, stream, clearStream, jsErrorHandler, JS_ERROR_TYPE, jsErrReport, monitorAndStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorAndStream", function() { return monitorAndStream; });
/* harmony import */ var _lib_monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/monitor */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/monitor.js");
/* harmony import */ var _lib_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/stream */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/stream.js");
/* harmony import */ var _lib_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Uin", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["Uin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableId", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["TableId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonitorId", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["MonitorId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["Monitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadjsId", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["BadjsId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamInterface", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["StreamInterface"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetCodeModule", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["RetCodeModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetCodeDomain", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["RetCodeDomain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["ServiceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BadJSMid", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["BadJSMid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monitorFunction", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["monitorFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initReportConfig", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["initReportConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["tick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "send", function() { return _lib_basic__WEBPACK_IMPORTED_MODULE_2__["send"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MONITOR_ACTION", function() { return _lib_monitor__WEBPACK_IMPORTED_MODULE_0__["MONITOR_ACTION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monitor", function() { return _lib_monitor__WEBPACK_IMPORTED_MODULE_0__["monitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearMonitor", function() { return _lib_monitor__WEBPACK_IMPORTED_MODULE_0__["clearMonitor"]; });

/* harmony import */ var _lib_idkey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/idkey */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/idkey.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "idkey", function() { return _lib_idkey__WEBPACK_IMPORTED_MODULE_3__["idkey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearIdkey", function() { return _lib_idkey__WEBPACK_IMPORTED_MODULE_3__["clearIdkey"]; });

/* harmony import */ var _lib_badjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/badjs */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/badjs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "badjs", function() { return _lib_badjs__WEBPACK_IMPORTED_MODULE_4__["badjs"]; });

/* harmony import */ var _lib_speed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/speed */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/speed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveSpeeds", function() { return _lib_speed__WEBPACK_IMPORTED_MODULE_5__["saveSpeeds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sendSpeeds", function() { return _lib_speed__WEBPACK_IMPORTED_MODULE_5__["sendSpeeds"]; });

/* harmony import */ var _lib_retcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/retcode */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/retcode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RET_CODE_TYPE", function() { return _lib_retcode__WEBPACK_IMPORTED_MODULE_6__["RET_CODE_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retcode", function() { return _lib_retcode__WEBPACK_IMPORTED_MODULE_6__["retcode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stream", function() { return _lib_stream__WEBPACK_IMPORTED_MODULE_1__["stream"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearStream", function() { return _lib_stream__WEBPACK_IMPORTED_MODULE_1__["clearStream"]; });

/* harmony import */ var _lib_js_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/js-error */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/js-error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsErrorHandler", function() { return _lib_js_error__WEBPACK_IMPORTED_MODULE_7__["jsErrorHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JS_ERROR_TYPE", function() { return _lib_js_error__WEBPACK_IMPORTED_MODULE_7__["JS_ERROR_TYPE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsErrReport", function() { return _lib_js_error__WEBPACK_IMPORTED_MODULE_7__["jsErrReport"]; });

/**
 * Created by yunshengli on 2018/5/28.
 */












/**
 * 同个action，同时上报多维监控和点击流
 * @param action
 * @param streamData 点击流额外字段
 * @param actionData 多维监控额外字段
 */
const monitorAndStream = (action, streamData = {}, actionData) => {
  // 直接复用错误码，省的每次都写一遍
  if (streamData.errCode && (!(actionData && actionData.ret))) {
    actionData = actionData || {}
    actionData.ret = streamData.errCode
  }

  // 复用耗时
  if (streamData.costTime && (!(actionData && actionData.costTime))) {
    actionData = actionData || {}
    actionData.costTime = streamData.costTime
  }

  Object(_lib_monitor__WEBPACK_IMPORTED_MODULE_0__["monitor"])(action, actionData)
  Object(_lib_stream__WEBPACK_IMPORTED_MODULE_1__["stream"])({
    action,
    ...streamData,
  })
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/badjs.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/badjs.js ***!
  \***************************************************************************/
/*! exports provided: badjs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badjs", function() { return badjs; });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/**
 * Created by yunshengli on 2018/5/21.
 */


let queue = [];
const REPORT_URL = 'https://badjs.weixinbridge.com/badjs';

/**
 * 自定义上报内容
 * @param msg
 * @param level 错误级别 1-debug 2-info 4-error
 * @param id badjs上报日志ID
 */
const badjs = (msg, level, id) =>{
  if(!(_basic__WEBPACK_IMPORTED_MODULE_0__["BadjsId"] || id)){
    console.warn('必须初始化ID或者显性传入');
    return;
  }

  queue.push({
    msg: msg,
    level: level || 4
  });
  try {
    cleanQueue(id || _basic__WEBPACK_IMPORTED_MODULE_0__["BadjsId"]);
  } catch (ex) {
    console.error(ex);
  }
};

// https://badjs.weixinbridge.com/badjs?id=uin=msg=from=level=4
// 错误级别 1-debug 2-info 4-error
function cleanQueue(id) {
  if (!queue.length) {
    return;
  }
  const param = {
    id: id || _basic__WEBPACK_IMPORTED_MODULE_0__["BadjsId"],
    uin: _basic__WEBPACK_IMPORTED_MODULE_0__["Uin"],
    from: '', // LYS 加上path
  };
  for (let i in queue) {
    if(queue.hasOwnProperty(i)){
      const item = queue[i];
      param['msg[' + i + ']'] = item.msg;
      param['level[' + i + ']'] = item.level || 4;
    }
  }
  Object(_basic__WEBPACK_IMPORTED_MODULE_0__["send"])({
    type: 'badjs',
    url: REPORT_URL,
    data: param,
  });
  queue = [];
}




/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js ***!
  \***************************************************************************/
/*! exports provided: Uin, TableId, MonitorId, Monitor, BadjsId, StreamInterface, RetCodeModule, RetCodeDomain, ServiceType, BadJSMid, monitorFunction, initReportConfig, tick, send */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uin", function() { return Uin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableId", function() { return TableId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorId", function() { return MonitorId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monitor", function() { return Monitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadjsId", function() { return BadjsId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamInterface", function() { return StreamInterface; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetCodeModule", function() { return RetCodeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetCodeDomain", function() { return RetCodeDomain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceType", function() { return ServiceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadJSMid", function() { return BadJSMid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorFunction", function() { return monitorFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initReportConfig", function() { return initReportConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "send", function() { return send; });
/* harmony import */ var _request_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request/session */ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./node_modules/@tencent/intp-weapp-kit-beta/src/config.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./node_modules/@tencent/intp-weapp-kit-beta/src/api.js");
/* harmony import */ var _error_FEError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/FEError */ "./node_modules/@tencent/intp-weapp-kit-beta/src/error/FEError.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/url */ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/url.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../system */ "./node_modules/@tencent/intp-weapp-kit-beta/src/system.js");
/* harmony import */ var _request_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../request/login */ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/login.js");
/* harmony import */ var _error_error_code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../error/error-code */ "./node_modules/@tencent/intp-weapp-kit-beta/src/error/error-code.js");
/**
 * Created by yunshengli on 2018/5/28.
 */










let delay = 3000 // 上报延迟时间
let sample = null // 抽样上报比例，为空表示全量
let isTicking = false
let tasks = []

let Uin = ''
let TableId = null
let MonitorId = null // 多维监控ID
let Monitor = {} // 多维监控公共属性，需要业务层传入的
let BadjsId = null
let StreamInterface = '' // 点击流接口名称
let RetCodeModule = null
let RetCodeDomain = null
let ServiceType = null
let BadJSMid = null
let monitorFunction = null // 自定义多维上报函数

const set = (val, option) => typeof option === 'undefined' ? val : option

const initReportConfig = (options = {}) => {
  Uin = set(Uin, options.uin)
  delay = set(delay, options.reportDelay)
  sample = set(sample, options.sample)
  TableId = set(TableId, options.tableId)
  MonitorId = set(MonitorId, options.monitorId)
  options.monitor !== undefined && (Monitor = { // 与已有配置合并，支持部分新增key
    ...Monitor,
    ...options.monitor,
  })
  BadjsId = set(BadjsId, options.badjsId)
  StreamInterface = set(StreamInterface, options.streamInterface)
  ServiceType = set(ServiceType, options.serviceType)
  RetCodeModule = set(RetCodeModule, options.retCodeModule)
  RetCodeDomain = set(RetCodeDomain, options.retCodeDomain)
  BadJSMid = `mmbizintp:${StreamInterface}`
  if (typeof options.uin === 'undefined' && !Uin) {
    Uin = _request_session__WEBPACK_IMPORTED_MODULE_0__["default"].uin || _request_session__WEBPACK_IMPORTED_MODULE_0__["default"].openId || ''
  }
  if (typeof options.monitorFunction === 'function') {
    monitorFunction = options.monitorFunction
  }
}

/**
 * 手动立即上报, 无需等定时器触发
 * @param callback 成功上报后回调
 * @param timeout  超时设置，避免上报cgi未返回
 */
const report = function (callback, timeout) {
  let counter = 0
  const len = tasks.length

  timeout = timeout || 2000

  if (tasks[0]) {
    for (let i = 0; i < len; i++) {
      const task = tasks.shift()

      if (task) {
        task.isTicking = false
        task(function () {
          if (++counter === len && callback && !callback.isCalled) {
            callback.isCalled = true
            callback()
          }
        })
      }
    }

    callback && setTimeout(function () {
      if (!callback.isCalled) {
        callback.isCalled = true
        callback()
      }
    }, timeout)

  } else {
    callback && callback()
  }

  isTicking = false

}

const tick = function (task) {
  if (!task.isTicking) {
    task.isTicking = true
    tasks.push(task)
  }

  // 默认开启一个延迟上报的定时器
  if (!isTicking) {
    setTimeout(report, delay)
    isTicking = true
  }
}
// 如果没有session, 则获取到code拼上去
const getLoginCode = () => {
  // 插件环境
  if (_system__WEBPACK_IMPORTED_MODULE_6__["SystemInfo"].plugin) {
    return Object(_request_login__WEBPACK_IMPORTED_MODULE_7__["getPassTicket"])()
  }
  if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].codeType) {
    return Promise.reject(new _error_FEError__WEBPACK_IMPORTED_MODULE_3__["default"](_error_error_code__WEBPACK_IMPORTED_MODULE_8__["default"].NO_CODE_TYPE))
  }
  const loginResolve = (res = {}) => {
    console.debug('wx.login res:', res)

    const code = res.code
    if (!code) {
      return Promise.reject(res)
    }

    return Promise.resolve(code)
  }

  return _api__WEBPACK_IMPORTED_MODULE_2__["default"].login()
    .then(loginResolve)
}
const send = function (options = {}) {
  if (!options.url) {
    console.warn(`request url can't be empty!`)
    return
  }

  // 抽样上报，除idkey/monitor
  // sample为1或者null/undefined表示不抽样
  if (sample > 0 && sample !== 1 && ['idkey', 'monitor'].indexOf(options.type) === -1 && Math.random() > sample) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const method = options.method || 'GET'
    const data = {
      ...options.data,
    }
    method === 'GET' && (data._ts = Date.now())
    function innerSendRequest(code) {
      if (code && code.pass_ticket) {
        options.url = Object(_utils_url__WEBPACK_IMPORTED_MODULE_4__["urlAppendQuery"])(options.url, Object(_utils_url__WEBPACK_IMPORTED_MODULE_4__["objToQuery"])(code))
      } else if (code) {
        options.url = Object(_utils_url__WEBPACK_IMPORTED_MODULE_4__["urlAppendQuery"])(options.url, `codetype=${_config__WEBPACK_IMPORTED_MODULE_1__["default"].codeType}&code=${code}`)
      } else {
        if (_system__WEBPACK_IMPORTED_MODULE_6__["SystemInfo"].plugin) {
          options.url = Object(_utils_url__WEBPACK_IMPORTED_MODULE_4__["urlAppendQuery"])(options.url, `pass_ticket=${_request_session__WEBPACK_IMPORTED_MODULE_0__["default"].pass_ticket || ''}`)
        } else {
          options.url = Object(_utils_url__WEBPACK_IMPORTED_MODULE_4__["urlAppendQuery"])(options.url, `wxa_session=${_request_session__WEBPACK_IMPORTED_MODULE_0__["default"].wxaSession || ''}`)
        }
      }
      wx.request({
        method,
        url: options.url,
        data,
        success(res = {}) {
          const { base_resp = {} } = res.data || {}
          const {
            ret
          } = base_resp

          if (typeof ret === 'undefined' || ret === 0) {
            // 更新openId等字段
            Object(_request_session__WEBPACK_IMPORTED_MODULE_0__["updateSession"])(Object(humps__WEBPACK_IMPORTED_MODULE_5__["camelizeKeys"])(base_resp))
            resolve(res)
          } else {
            reject(res)
          }
        },
        fail(err) {
          reject(err)
        }
      })
    }
    // 判断session是否有效, 包括有效期
    if (!Object(_request_session__WEBPACK_IMPORTED_MODULE_0__["isSessionValid"])()) {
      getLoginCode()
        .then(code => {
          innerSendRequest(code)
        })
        .catch(err => {
          console.error('report send error', err)
          innerSendRequest()
        })
    } else {
      innerSendRequest()
    }
  })
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/idkey.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/idkey.js ***!
  \***************************************************************************/
/*! exports provided: idkey, clearIdkey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idkey", function() { return idkey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearIdkey", function() { return clearIdkey; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/**
 * IDKEY上报
 * Created by yunshengli on 2018/4/28.
 */



const IDKEY_REPORT_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__["CGI_DOMAIN"]}/intp/ossattr`
let idkeyQueue = {};

function reportQueue(callback) {
  const ids = Object.keys(idkeyQueue);
  if (ids && ids.length) {
    ids.forEach(function (id) {
      if(!(idkeyQueue[id] && idkeyQueue[id].length)){
        return;
      }
      const keys = idkeyQueue[id].join(',');
      idkeyQueue[id] = []; // 清空
      Object(_basic__WEBPACK_IMPORTED_MODULE_1__["send"])({
        type: 'idkey',
        url: IDKEY_REPORT_URL,
        data: {
          action: 'oss',
          f: 'json',
          id: id,
          key: keys,
        }
      }, callback);
    })
  } else {
    callback && callback();
  }
}

/**
 * IDKEY 上报
 * idkey(1)
 * idkey(1,true/false)
 * idkey(1,2)
 * idkey(1,2,true/false)
 *
 * @param id
 * @param key
 * @param {boolean=} isImmediate 是否立即上报，默认会放入上报池
 */
const idkey = (id, key, isImmediate) => {
  if(key === undefined || typeof key === 'boolean'){
    if(!_basic__WEBPACK_IMPORTED_MODULE_1__["TableId"]){
      console.warn('必须初始化ID或者显性传入');
      return;
    }

    isImmediate = key;
    key = id;
    id = _basic__WEBPACK_IMPORTED_MODULE_1__["TableId"];
  }
  if (isImmediate) {
    return Object(_basic__WEBPACK_IMPORTED_MODULE_1__["send"])({
      type: 'idkey',
      url: IDKEY_REPORT_URL,
      data: {
        action: 'oss',
        f: 'json',
        id: id,
        key: key,
      },
    });
  } else {
    // 放入上报池
    if(idkeyQueue[id]){
      idkeyQueue[id].push(key);
    }else{
      idkeyQueue[id] = [key];
    }
    Object(_basic__WEBPACK_IMPORTED_MODULE_1__["tick"])(reportQueue);
  }
};


/**
 * 清空队列中的数据
 */
const clearIdkey = () => {
  reportQueue()
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/js-error.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/js-error.js ***!
  \******************************************************************************/
/*! exports provided: jsErrorHandler, JS_ERROR_TYPE, jsErrReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsErrorHandler", function() { return jsErrorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JS_ERROR_TYPE", function() { return JS_ERROR_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsErrReport", function() { return jsErrReport; });
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../system */ "./node_modules/@tencent/intp-weapp-kit-beta/src/system.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");



const REPORT_URL = 'https://badjs.weixinbridge.com/report'

const getBrowserId = () => {
  const { ios, android } = _system__WEBPACK_IMPORTED_MODULE_0__["SystemInfo"]
  return ios ? 10 : android ? 9 : 0
}

const jsErrorHandler = (msg, name = '') => { // 生成错误上报对象
  try {
    if (!_basic__WEBPACK_IMPORTED_MODULE_1__["BadJSMid"]) return
    const key = msg.split('\n')[0] || 'Error' // js报错的原因，例如 ReferenceError
    const stacktrace = msg // 错误堆栈信息
    const report = msg.toString().replace(/\n/gi, ' ')
    const errorPathMatch = report.match(/\"(.*)\"/)
    const view = errorPathMatch ? errorPathMatch[0].replace(/\"/g, '') : ''// 错误产生的path
    const errDetailMatch = report.match(/.*;/)
    const message = errDetailMatch ? errDetailMatch[0] : '' // 具体是什么错
    const params = { // 返回的js错误信息
      mid: _basic__WEBPACK_IMPORTED_MODULE_1__["BadJSMid"],
      name,
      key,
      stack: stacktrace,
      view,
      msg: message,
    }
    reportErr(params)
  } catch (err) {
    console.error(err)
  }
}

/**
 * 异常类型
 */
const JS_ERROR_TYPE = {
  ON_ERROR: 'on error', // wx.onError捕获
  WEAPP_SDK: 'weapp sdk', // 基础库报错
  UNHANDLED_REJECTION: 'unhandled rejection', // wx.onUnhandledRejection捕获
  CODE_ERROR: 'code error', // 主动上报
  PAGE_NOT_FOUND: 'page not found',
  IMG_FAIL: 'img error', // 图片加载失败
  API_FAIL: 'api fail', // 小程序API失败
  LOGIN_FAIL: 'api login fail', // wx.login失败
  LOCATION_FAIL: 'api location fail', // 定位api失败
  GEO_FAIL: 'geo fail', // 定位失败（腾讯地图相关）
  PAY_FAIL: 'api pay fail', // 支付api失败
  FACE_FAIL: 'api face fail', // 人脸核身api失败
}

/**
 * jsError自行上报
 * @param err 错误信息，可以是string，也可以是{name,message}的对象
 * @param errorType 上报监控名name，默认值是 code-error
 * @param key 特征值key
 * @param path 产生错误的页面，对应多维监控中view页面类型字段
 *
 * 使用方式
 * 1. jsErrReport('string') // 直接上报字符串，这种方式会使用默认监控名 code-error上报，将参数上报到msg与特征值字段中
 * 2. jsErrReport(err, errorType = '', key = '')
 */
const jsErrReport = (err, errorType = '', key = '', path = '') => {
  if (!_basic__WEBPACK_IMPORTED_MODULE_1__["BadJSMid"]) {
    console.warn('必须设置mid')
    return
  }

  if (!err) {
    return
  }

  try {
    const params = {
      mid: _basic__WEBPACK_IMPORTED_MODULE_1__["BadJSMid"],
      name: errorType || JS_ERROR_TYPE.CODE_ERROR, // 监控名
      view: path, // 页面类型
    }

    if (typeof err === 'string') {
      params.msg = err // 错误信息
      params.key = key // 特征值
    }else if (typeof err === 'object') {
      const stacktrace = JSON.stringify(err)
      const { name = '', message = '', } = err
      params.key = name
      params.msg = message
      params.stack = stacktrace
    }

    reportErr(params)
  } catch (err) {
    console.error(err)
  }
}

const reportErr = (data = {}) => {
  data.client_version = _system__WEBPACK_IMPORTED_MODULE_0__["SystemInfo"].version || '' // 微信版本信息
  // data.key_md5 = SystemInfo.SDKVersion || '' // 存放基础库版本，实际是特征值MD5
  data.device_type = _system__WEBPACK_IMPORTED_MODULE_0__["SystemInfo"].platform || '' // 设备类型
  data.browser_id = getBrowserId() // 浏览器ID
  data.network_id = _system__WEBPACK_IMPORTED_MODULE_0__["SystemInfo"].networkType || '' // 网络ID
  data.uin = _basic__WEBPACK_IMPORTED_MODULE_1__["Uin"]

  wx.request({
    method: 'POST',
    url: REPORT_URL,
    data,
    header: { 'content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    success(res = {}) {
      console.log('badjs上报成功');
    },
    fail(err) {
      console.log('badjs上报失败');
    }
  })
}



/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/monitor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/monitor.js ***!
  \*****************************************************************************/
/*! exports provided: MONITOR_ACTION, monitor, clearMonitor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONITOR_ACTION", function() { return MONITOR_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitor", function() { return monitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearMonitor", function() { return clearMonitor; });
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/* harmony import */ var _idkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idkey */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/idkey.js");
/* harmony import */ var _badjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badjs */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/badjs.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../system */ "./node_modules/@tencent/intp-weapp-kit-beta/src/system.js");
/* harmony import */ var _request_session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../request/session */ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./node_modules/@tencent/intp-weapp-kit-beta/src/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/index.js");
/**
 * Created by yunshengli on 2018/5/21.
 */










const UNKNOWN = 'unknown'
// 返回码上报url
const REPORT_URL = `${_constants__WEBPACK_IMPORTED_MODULE_7__["CGI_DOMAIN"]}/intp/mmdata?action=reportmultimon`
const VALUE_TYPE = {
  string: 0,
  integer: 1, // Int64
  float: 2
}

let CommonParams = null
let MonitorQueue = []

/**
 * 通用action
 */
const MONITOR_ACTION = {
  appLaunch: 'app launch',
  pageLoad: pageName => `page ${pageName} load`,
  pagePV: pageName => `page ${pageName} pv`,
  pageRender: pageName => `page ${pageName} render`, // 页面渲染，setData回调后执行
  apiTime: apiName => `api time ${apiName}`,
  apiSuccess: apiName => `api success ${apiName}`,
  apiFail: apiName => `api fail ${apiName}`,
  apiCancel: apiName => `api cancel ${apiName}`,
  cgiTime: cgiUrl => `cgi time ${cgiUrl}`,
  cgiSuccess: cgiUrl => `cgi success ${cgiUrl}`,
  cgiFail: cgiUrl => `cgi fail ${cgiUrl}`,
  cgiTimeout: cgiUrl => `cgi timeout ${cgiUrl}`,
}

const initCommonParams = () => {
  return {
    wechatVersion: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].version || '', // 微信版本
    libVersion: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].SDKVersion || '', // 基础库版本
    weappVersion: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].weappVersion || _config__WEBPACK_IMPORTED_MODULE_6__["default"].weappVersion || '', // 应用版本
    system: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].platform || UNKNOWN, // 系统类型
    systemVersion: (_system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].system || '').replace(/\w+ /, ''), // 系统版本，取空格后的内容
    brand: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].brand || '', // 终端品牌
    model: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].model || '', // 终端型号
    network: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].networkType || UNKNOWN, // 网络类型
    scene: _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].scene || 0, // 场景值
    bizuin: (_system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].referrerInfo && _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].referrerInfo.appId) || '', // 来源小程序、公众号或 App 的 appId
  }
}
const getItemForMonitorFunction = (data) => {
  // 网络是异步获取的，再检查下值
  CommonParams.network === UNKNOWN && (CommonParams.network = _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].networkType)
  const items = {
    ...CommonParams,
    ..._basic__WEBPACK_IMPORTED_MODULE_1__["Monitor"],
    ...data,
  }

  if (typeof items.ret !== 'undefined') {
    items.ret = String(items.ret)
  }

  // msg协议里配的是String，如果是Object就处理下
  if (items.msg && typeof items.msg === 'object') {
    items.msg = JSON.stringify(items.msg)
  }
  return items
}
const getItem = (data) => {
  const item = {
    id: data.id,
  }
  delete data.id

  // 网络是异步获取的，再检查下值
  CommonParams.network === UNKNOWN && (CommonParams.network = _system__WEBPACK_IMPORTED_MODULE_4__["SystemInfo"].networkType)
  const items = {
    ...CommonParams,
    ..._basic__WEBPACK_IMPORTED_MODULE_1__["Monitor"],
    ...data,
  }

  if (typeof items.ret !== 'undefined') {
    items.ret = String(items.ret)
  }

  // msg协议里配的是String，如果是Object就处理下
  if (items.msg && typeof items.msg === 'object') {
    items.msg = JSON.stringify(items.msg)
  }

  item.item = Object.keys(items).map(key => {
    const value = items[key]
    const tmp = {
      key: Object(humps__WEBPACK_IMPORTED_MODULE_0__["decamelize"])(key),
      value: items[key],
    }

    // 支持string、int64、float三种字段类型
    if(typeof value === 'string'){
      tmp.value = value
    }else if(typeof value === 'number'){
      tmp.value = value
      tmp.valueType = Number.isInteger(value) ? VALUE_TYPE.integer : VALUE_TYPE.float
    }else{
      tmp.value = String(value)
    }

    return tmp
  })

  return item
}

const sendReport = (arr = []) => {
  if (_basic__WEBPACK_IMPORTED_MODULE_1__["monitorFunction"]) {
    Object(_basic__WEBPACK_IMPORTED_MODULE_1__["monitorFunction"])(arr.map(data => getItemForMonitorFunction(data)))
    return Promise.resolve()
  }
  // 现在CGI没有登录态也能上报多维监控
  if(!Object(_request_session__WEBPACK_IMPORTED_MODULE_5__["isSessionValid"])()){
    Object(_idkey__WEBPACK_IMPORTED_MODULE_2__["idkey"])(110548, 85) // 多维监控上报无登录态
    const msg = 'monitor no session'
    console.debug(msg)
    if(Math.random() < 0.01){
      Object(_badjs__WEBPACK_IMPORTED_MODULE_3__["badjs"])(`[${msg}]${JSON.stringify(arr.slice(0, 4))}`)
    }
  }

  Object(_basic__WEBPACK_IMPORTED_MODULE_1__["send"])({
    type: 'monitor',
    method: 'POST',
    url: REPORT_URL,
    data: {
      multi_mon_list: arr.map(data => getItem(data)),
    },
  })
    .catch(e => {
      // 目前已知如果没加monitor白名单会返回-1
      console.error('多维监控上报失败！', e, arr)
    })

  // 不管上报结果如何，发出请求就算完成
  return Promise.resolve()
}

const reportQueue = () => {
  if(Object(_utils_index__WEBPACK_IMPORTED_MODULE_8__["isArrayEmpty"])(MonitorQueue)){
    return
  }

  sendReport(MonitorQueue)
    .then(() => {
      MonitorQueue = [];
    })
    .catch(e => {
      console.error('monitor reportQueue send fail', e)
    })
}

/**
 * 多维监控上报
 * monitor('pv')
 * monitor('pv', true)
 * monitor('pv', {cityid: '123'})
 * monitor('pv', {cityid: '123'}, true)
 */
const monitor = (action, data, isImmediate) => {
  if(!action){
    console.warn(`no action!`)
    return
  }

  if(data === undefined){
    data = {}
  } else if(typeof data === 'boolean'){
    isImmediate = data
    data = {}
  }

  if(!_basic__WEBPACK_IMPORTED_MODULE_1__["MonitorId"] && !data.id && !_basic__WEBPACK_IMPORTED_MODULE_1__["monitorFunction"]){
    console.warn(`no monitor id and monitor function!`)
    return
  }

  !data.id && (data.id = _basic__WEBPACK_IMPORTED_MODULE_1__["MonitorId"])
  data.action = action

  if(!CommonParams) {
    CommonParams = initCommonParams()
  }

  if(isImmediate){
    sendReport([data])
  }else{
    MonitorQueue.push(data)
    Object(_basic__WEBPACK_IMPORTED_MODULE_1__["tick"])(reportQueue)
  }
}

/**
 * 清空队列中的数据
 */
const clearMonitor = () => {
  reportQueue()
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/retcode.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/retcode.js ***!
  \*****************************************************************************/
/*! exports provided: RET_CODE_TYPE, retcode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RET_CODE_TYPE", function() { return RET_CODE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retcode", function() { return retcode; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/**
 * Created by yunshengli on 2018/5/21.
 */



const UNKNOWN = 'unknown'
// 返回码上报url
const REPORT_URL = `${_constants__WEBPACK_IMPORTED_MODULE_0__["CGI_DOMAIN"]}/wxaintp/report`
const RET_CODE_TYPE = {
  success: 1,
  fail: 2,
  logicalFail: 3,
};
let commonParam = {};
let retCodeQueue = [];

const getKeyStr = (data = {}) => `${data.cgi},${data.type},${data.code},${data.time}`;

const reportQueue = (callback) => {
  if (retCodeQueue && retCodeQueue.length) {
    const key = retCodeQueue.map((data = {}) => getKeyStr(data)).join(';');
    retCodeQueue = [];
    Object(_basic__WEBPACK_IMPORTED_MODULE_1__["send"])({
      type: 'retcode',
      url: REPORT_URL,
      data: {
        ...commonParam,
        key,
      },
    });
  } else {
    callback && callback();
  }
}

/**
 * 返回码上报
 */
const retcode = (data = {}, options = {}) => {
  if(!(_basic__WEBPACK_IMPORTED_MODULE_1__["RetCodeModule"] && _basic__WEBPACK_IMPORTED_MODULE_1__["RetCodeDomain"])){
    console.warn(`retCodeModule & retCodeDomain must initiate in initReportConfig!`);
    return;
  }

  if(typeof data.cgi !== 'string'){
    console.warn(`cgi must be string!`);
    return;
  }
  if(typeof data.code !== 'number'){
    console.warn(`code must be number!`);
    return;
  }
  if(typeof data.time !== 'number'){
    console.warn(`time must be number!`);
    return;
  }
  if(data.type !== undefined && typeof data.type !== 'number'){
    console.warn(`type must be number!`);
    return;
  }

  if(!commonParam.action){
    let networkType = UNKNOWN;
    let systemInfo = {};

    wx.getNetworkType({
      success(res) {
        console.log(res);
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        networkType = res.networkType
      }
    });
    try {
      systemInfo = wx.getSystemInfoSync();
      // {"batteryLevel":64,"version":"6.6.6","system":"iOS 11.3.1","windowHeight":724,"pixelRatio":3,"screenHeight":812,"language":"zh_CN","statusBarHeight":44,"windowWidth":375,"model":"iPhone X (GSM+CDMA)<iPhone10,3>","screenWidth":375,"fontSizeSetting":16,"brand":"iPhone","platform":"ios","SDKVersion":"2.0.8"}
    } catch (e) {
      console.error(e)
    }

    const platform = systemInfo.platform || UNKNOWN;
    const device = platform === 'ios' ? 1 : platform === 'android' ? 2 : -1;
    commonParam = {
      action: 'cityservicecode',
      f: 'json',
      module: _basic__WEBPACK_IMPORTED_MODULE_1__["RetCodeModule"],
      domain: _basic__WEBPACK_IMPORTED_MODULE_1__["RetCodeDomain"],
      platform,
      Uin: _basic__WEBPACK_IMPORTED_MODULE_1__["Uin"] || '',
      Device: device,
      model: systemInfo.model || UNKNOWN,
      appVer: systemInfo.version || UNKNOWN,
      libVer: systemInfo.SDKVersion || '',
      form: options.form || 'weapp', // 目前只支持小程序
      apn: networkType,
    };
  }

  data.type = data.type || RET_CODE_TYPE.success;

  if(options.isImmediate){
    return Object(_basic__WEBPACK_IMPORTED_MODULE_1__["send"])({
      type: 'retcode',
      url: REPORT_URL,
      data: {
        ...commonParam,
        key: getKeyStr(data),
      },
    });
  }else{
    retCodeQueue.push(data);
    Object(_basic__WEBPACK_IMPORTED_MODULE_1__["tick"])(reportQueue);
  }
};


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/speed.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/speed.js ***!
  \***************************************************************************/
/*! exports provided: saveSpeeds, sendSpeeds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSpeeds", function() { return saveSpeeds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSpeeds", function() { return sendSpeeds; });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/**
 * 测速上报
 * Created by yunshengli on 2018/5/29.
 */


const REPORT_URL = 'https://badjs.weixinbridge.com/frontend/reportspeed';
/**
 * 上报队列
 * 数据长这样
 * {"155":{"25":[267,270,255]},"161":{"23":[550],"24":[167,170],"25":[267,270,255]}}
 */
let SpeedQueue = {};

const joinInSpeedQueue = (pid, speed = {}) =>{
  const {
    sid,
  } = speed;
  let time = speed.time;
  if(pid === undefined || sid === undefined || time === undefined){
    return;
  }

  SpeedQueue[pid] = SpeedQueue[pid] || {};
  SpeedQueue[pid][sid] =  SpeedQueue[pid][sid] || [];
  time = parseInt(time, 10);
  if(time < 0) {
    return;
  }
  if(sid > 20){
    SpeedQueue[pid][sid].push(time);
  }
};

const saveSpeeds = (option) => {
  if(!option.pid || !option.speeds){
    return;
  }

  if(!option.speeds.length > 0){
    option.speeds = [option.speeds];
  }

  option.speeds.forEach(speed => joinInSpeedQueue(option.pid, speed));
};

const sendSpeeds = () => {
  Object.keys(SpeedQueue).forEach(function (pid) {
    if(!SpeedQueue[pid]){
      return;
    }
    let speeds = [];
    Object.keys(SpeedQueue[pid]).forEach(sid => {
      if(!SpeedQueue[pid][sid]){
        return;
      }
      speeds = speeds.concat(SpeedQueue[pid][sid].map(time => `${sid}_${time}`));
    });

    SpeedQueue[pid] = {}; // 先清空，不然可能重复发
    speeds.length && Object(_basic__WEBPACK_IMPORTED_MODULE_0__["send"])({
      type: 'speed',
      url: REPORT_URL,
      data: {
        pid,
        rid: 0,
        uin: _basic__WEBPACK_IMPORTED_MODULE_0__["Uin"] || 0,
        speeds: speeds.join(';'),
      }
    }).catch(e => console.error(e));
  })
};


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/stream.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/stream.js ***!
  \****************************************************************************/
/*! exports provided: stream, clearStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stream", function() { return stream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearStream", function() { return clearStream; });
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");
/* harmony import */ var humps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(humps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/basic.js");
/* harmony import */ var _idkey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./idkey */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/idkey.js");
/* harmony import */ var _badjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./badjs */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/lib/badjs.js");
/* harmony import */ var _request_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../request/session */ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/index.js");
/**
 * 点击流
 * Created by lynatao on 2019/2/21.
 */








let clickQueue = []
const CLICK_REPORT_URL = `${_constants__WEBPACK_IMPORTED_MODULE_5__["CGI_DOMAIN"]}/intp/mmdata?action=reportclick` // CGI接口人：kevintzqiu;

const reportQueue = (callback) => {
  if (Object(_utils_index__WEBPACK_IMPORTED_MODULE_6__["isArrayEmpty"])(clickQueue)) {
    return
  }

  sendReport(clickQueue)
    .then(() => {
      clickQueue = []
    })
    .catch(e => {
      console.error('stream reportQueue send fail', e)
    })
}

const getItem = (data = {}) => Object(humps__WEBPACK_IMPORTED_MODULE_0__["decamelizeKeys"])({
  interfaceName: `${_basic__WEBPACK_IMPORTED_MODULE_1__["StreamInterface"]}`,
  serviceType: _basic__WEBPACK_IMPORTED_MODULE_1__["ServiceType"],
  source: 2, // 数据来源 0后台，1 H5，2 小程序
  ...data,
})

const sendReport = (arr = []) => {
  // 点击流配置可选
  if (!_basic__WEBPACK_IMPORTED_MODULE_1__["ServiceType"] || !_basic__WEBPACK_IMPORTED_MODULE_1__["StreamInterface"]) {
    console.warn('clickstream send fail, ServiceType and StreamInterface is required')
    return Promise.resolve()
  }
  if (!Object(_request_session__WEBPACK_IMPORTED_MODULE_4__["isSessionValid"])()) {
    Object(_idkey__WEBPACK_IMPORTED_MODULE_2__["idkey"])(110548, 86) // 多维监控上报无登录态
    const msg = 'clickstream no session'
    console.debug(msg)
    if (Math.random() < 0.01) {
      Object(_badjs__WEBPACK_IMPORTED_MODULE_3__["badjs"])(`[${msg}]${JSON.stringify(arr.slice(0, 4))}`)
    }
    // return Promise.resolve()
  }

  Object(_basic__WEBPACK_IMPORTED_MODULE_1__["send"])({
    type: 'stream',
    url: CLICK_REPORT_URL,
    method: 'POST',
    data: {
      clickstream_list: arr.map(data => getItem(data)),
    },
  })
    .catch(e => {
      console.error('点击流上报失败！', e)
    })

  return Promise.resolve()
}

/**
 * 将extParam处理为Object
 * @param data
 * @returns {{}|string|{res: {}, params: {}}}
 */
const extractExtParam = (data) => {
  if (!data.extParam){
    return {}
  }

  let extParam

  // Object直接返回
  if (typeof data.extParam === 'object' && Object.prototype.toString.call(data.extParam) !== '[object Array]') {
    return data.extParam
  }

  if (typeof data.extParam === 'string') {
    try {
      extParam = JSON.parse(data.extParam)
    } catch (e) {
      console.warn('parse data.extParam fail', e)
      // 说明是普通字符串，将其转为Object
      extParam = {
        content: data.extParam
      }
    }
  } else {
    // 其他数据类型也一律转为Object
    extParam = {
      content: data.extParam
    }
  }

  return extParam
}

/**
 * 点击流上报
 *
 * stream('action')
 * stream('action', true)
 * stream({action: 'action', errmsg: 'ok'})
 * stream({action: 'action', errmsg: 'ok'}, true)
 */
const stream = (data, isImmediate) => {
  if (!data) {
    console.warn(`no data!`)
    return
  }

  if (typeof data === 'string') {
    data = {
      action: data,
    }
  }

  if (typeof data.errCode !== 'undefined') {
    data.errcode = String(data.errCode)
  }

  try {
    const extParam = { // 拷贝一份，防止修改传入的引用
      ...extractExtParam(data),
    }
    extParam.feOccurTime = Date.now()
    extParam.severOccurTime = Object(_utils_index__WEBPACK_IMPORTED_MODULE_6__["generateCurrentTimeStamp"])()
    data.extParam = JSON.stringify(extParam)
  }catch (e) {
    console.error(e)
  }

  if (isImmediate) {
    return sendReport([data])
  } else {
    //放入上报池
    clickQueue.push(data)
    Object(_basic__WEBPACK_IMPORTED_MODULE_1__["tick"])(reportQueue)
  }
}

/**
 * 清空队列中的数据
 */
const clearStream = () => {
  reportQueue()
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/login.js":
/*!************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/request/login.js ***!
  \************************************************************************/
/*! exports provided: LoginCode, clearLoginCode, consumeLoginCode, getPassTicket, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginCode", function() { return LoginCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearLoginCode", function() { return clearLoginCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consumeLoginCode", function() { return consumeLoginCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPassTicket", function() { return getPassTicket; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./node_modules/@tencent/intp-weapp-kit-beta/src/api.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/@tencent/intp-weapp-kit-beta/src/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _report_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/* harmony import */ var _error_FEError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/FEError */ "./node_modules/@tencent/intp-weapp-kit-beta/src/error/FEError.js");
/* harmony import */ var _error_error_code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/error-code */ "./node_modules/@tencent/intp-weapp-kit-beta/src/error/error-code.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./session */ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js");
/**
 * Created by yunshengli on 2019/3/1.
 */








let LoginCode = ''

const getErr = (e) => {
  const ret = _constants__WEBPACK_IMPORTED_MODULE_2__["RET_CODE"].API_LOGIN_FAIL
  const errMsg = e.errMsg || JSON.stringify(e)

  return {
    baseResp: {
      ret,
      errMsg,
    },
    ret,
    errMsg,
  }
}

/**
 * 调用wx.login获取code
 */
const weappLogin = () => {
  if (!_config__WEBPACK_IMPORTED_MODULE_1__["default"].codeType) {
    return Promise.reject(new _error_FEError__WEBPACK_IMPORTED_MODULE_4__["default"](_error_error_code__WEBPACK_IMPORTED_MODULE_5__["default"].NO_CODE_TYPE))
  }

  const errReport = (key, e = {}) => {
    console.error(key, e)
    Object(_report_index__WEBPACK_IMPORTED_MODULE_3__["monitorAndStream"])(key, {
      extParam: {
        res: e,
      }
    })
    Object(_report_index__WEBPACK_IMPORTED_MODULE_3__["badjs"])(`[${key}]${JSON.stringify(e)}`)
    Object(_report_index__WEBPACK_IMPORTED_MODULE_3__["jsErrReport"])(JSON.stringify(e), _report_index__WEBPACK_IMPORTED_MODULE_3__["JS_ERROR_TYPE"].LOGIN_FAIL, key, e.errMsg || '')
  }

  const loginResolve = (res = {}) => {
    console.debug('wx.login res:', res)

    const code = res.code
    if (!code) {
      errReport('wx.login err no code', res)
      return Promise.reject(res)
    }

    Object(_report_index__WEBPACK_IMPORTED_MODULE_3__["monitorAndStream"])(_report_index__WEBPACK_IMPORTED_MODULE_3__["MONITOR_ACTION"].apiSuccess('login'), {
      extParam: {
        code,
      }
    })

    LoginCode = code
    return Promise.resolve(code)
  }

  return _api__WEBPACK_IMPORTED_MODULE_0__["default"].login()
    .then(loginResolve)
    .catch((e = {}) => {
      errReport('wx.login err 1st', e)

      // 失败就重试一次
      return _api__WEBPACK_IMPORTED_MODULE_0__["default"].login()
        .then(loginResolve)
        .catch((e = {}) => {
          errReport('wx.login err 2nd', e)
          throw getErr(e)
        })
    })
}

const clearLoginCode = () => {
  LoginCode = ''
}

/**
 * code是一次性的，如果重复消费会报错
 * 所以只要发给了CGI就认为消费掉了（可能CGI消费了，但是前端没拿到返回，所以不能在成功时认为消费了）
 */
const consumeLoginCode = () => {
  LoginCode = ''
}
/**
 * 登录态支持插件, 获取pass_ticket和passkey
 */
function getPassTicket() {
  return new Promise((resolve, reject) => {
    wx.operateWXData({
      apiName: 'getGetPasskey',
      reqData: {
        action: 'webapi_getpasskey',
        content: '{}',
      },
      complete(res) {
        console.debug('getGetPasskey resp', res)
        const { err_code = 0, rawData } = res;

        const isSuccess = err_code === 0;

        Object(_report_index__WEBPACK_IMPORTED_MODULE_3__["monitorAndStream"])(`getPasskey ${isSuccess ? 'success' : 'fail'}`, {
          errCode: err_code,
          extParam: {
            rawData
          }
        }, {
          ret: err_code,
          msg: rawData
        })
        if (isSuccess) {
          try {
            const data = JSON.parse(rawData)
            console.debug('getGetPasskey rawData', data)
            Object(_session__WEBPACK_IMPORTED_MODULE_6__["updateSession"])(data)
            resolve(data);
          } catch (err) {
            reject({
              ret: -3, // 解析JSON失败
              rawData,
            });
          }
        } else {
          reject({
            ret: err_code,
          });
        }
      },
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (weappLogin);


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js ***!
  \**************************************************************************/
/*! exports provided: getSessionForPlugin, updateSessionForPlugin, updateSession, clearSessionForPlugin, clearSession, isSessionValidForPlugin, isSessionValid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionForPlugin", function() { return getSessionForPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSessionForPlugin", function() { return updateSessionForPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSession", function() { return updateSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSessionForPlugin", function() { return clearSessionForPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSession", function() { return clearSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSessionValidForPlugin", function() { return isSessionValidForPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSessionValid", function() { return isSessionValid; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./node_modules/@tencent/intp-weapp-kit-beta/src/storage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _report_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/* harmony import */ var _system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../system */ "./node_modules/@tencent/intp-weapp-kit-beta/src/system.js");
/**
 * Created by yunshengli on 2019/4/29.
 */





const defaultSession = {
  wxaSession: '',
  expire: 0,
  openId: '',
  uin: '',
  pass_ticket: '', // 插件是通过pass_ticket来获取登录态的
  passkey: '',
}
let Session = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getSync(_constants__WEBPACK_IMPORTED_MODULE_1__["STORAGE_KEY"].SESSION) || {
  ...defaultSession, // 注意不能直接赋值 BizSession = defaultSession
}
const getSessionForPlugin = () => {
  return {
    pass_ticket: Session.pass_ticket,
    passkey: Session.passkey
  }
}
const updateSessionForPlugin = (base = {}) => {
  // 下面的字段都是,传入才更新, 否则使用旧的, 避免有些字段被干掉了
  Session.uin = base.uin || Session.uin || '';
  Session.openId = base.openId || Session.openId || '';
  Session.pass_ticket = base.pass_ticket || Session.pass_ticket || '';
  Session.passkey = base.passkey || Session.passkey || '';
  (base.uin || base.openId) && Object(_report_index__WEBPACK_IMPORTED_MODULE_2__["initReportConfig"])({
    uin: base.openId || base.uin
  })
}
const updateSession = (base = {}) => {
  if (_system__WEBPACK_IMPORTED_MODULE_3__["SystemInfo"].plugin) {
    updateSessionForPlugin(base)
    return
  }
  // 如果本地有值，cgi不返回就不更新，避免部分cgi的base没有返回导致本地session失效
  if(!base.wxaSession && Session.wxaSession){
    return
  }

  // 注意这里不要对整个Object重新赋值
  Session.expire = (base.wxaSessionExpire || 0) * 1000 // Date.now() + data.maxAge * 60 * 60 * 1000,
  Session.wxaSession = base.wxaSession
  Session.openId = base.openId || ''
  Session.uin = base.uin || '';

  (base.uin || base.openId) && Object(_report_index__WEBPACK_IMPORTED_MODULE_2__["initReportConfig"])({
    uin: base.openId || base.uin
  })

  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].setSync(_constants__WEBPACK_IMPORTED_MODULE_1__["STORAGE_KEY"].SESSION, Session)
}

const clearSessionForPlugin = () => {
  Session.uin = defaultSession.uin
  Session.openId = defaultSession.openId
  Session.passkey = defaultSession.passkey
  Session.pass_ticket = defaultSession.pass_ticket
}
/**
 * 清除缓存
 */
const clearSession = () => {
  if (_system__WEBPACK_IMPORTED_MODULE_3__["SystemInfo"].plugin) {
    clearSessionForPlugin()
  }
  // 注意这里不要对整个Object重新赋值
  Session.expire = defaultSession.expire
  Session.wxaSession = defaultSession.wxaSession
  Session.openId = defaultSession.openId
  Session.uin = defaultSession.uin
  console.debug('>>>>clearSession', Session)

  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].removeSync(_constants__WEBPACK_IMPORTED_MODULE_1__["STORAGE_KEY"].SESSION)
}

const isSessionValidForPlugin = (session = {}) => {
  return !!(Session || session).pass_ticket
}
/**
 * 检查session失效
 * 考虑客户端到cgi的一个RTT时间平均为400~600ms，拍脑袋定了半个RTT时间200ms
 */
const isSessionValid = (session = {}) => {
  if (_system__WEBPACK_IMPORTED_MODULE_3__["SystemInfo"].plugin) {
    return isSessionValidForPlugin(session)
  }
  return Boolean((Session || session).wxaSession && (Session || session).expire > (Date.now() + 200))
}

/* harmony default export */ __webpack_exports__["default"] = (Session);


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/storage.js":
/*!******************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/storage.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./node_modules/@tencent/intp-weapp-kit-beta/src/api.js");
/* harmony import */ var _report_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/**
 * Created by yunshengli on 2019/2/14.
 */



const failMonitor = (method, err = {}, key) => {
  const action = `Storage.${method} fail`
  const msg = `${action}.${key ? ` key=${key}` : ''}:`
  console.error(msg, err)

  if (err.errMsg && err.errMsg.includes('data not found')) {
    return
  }
  Object(_report_index__WEBPACK_IMPORTED_MODULE_1__["monitor"])(action)
  Object(_report_index__WEBPACK_IMPORTED_MODULE_1__["badjs"])(`${msg} ${JSON.stringify(err)}`)
  Object(_report_index__WEBPACK_IMPORTED_MODULE_1__["jsErrReport"])(`${msg} ${JSON.stringify(err)}`, _report_index__WEBPACK_IMPORTED_MODULE_1__["JS_ERROR_TYPE"].API_FAIL, action)
}

/**
 * 同步查询
 * @param key
 * @returns {*}
 */
const getSync = (key = '') => {
  try {
    return wx.getStorageSync(key)
  } catch (e) {
    failMonitor('getSync', e, key)
    return null
  }
}

/**
 * 异步查询
 *
 * 查不到或者出错都不会抛异常，只会返回null
 * @param key
 * @returns {void|PromiseLike<any>|Promise<any>}
 */
const get = (key = '') => {
  return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getStorage({
    key: key,
  })
    .then((res = {}) => {
      console.debug(`Storage.get key=${key}:`, res)
      return Promise.resolve(res.data)
    })
    .catch(e => {
      failMonitor('get', e, key)
      return Promise.resolve(null)
    })
}

/**
 * 同步写Storage
 * @param key
 * @param data
 * @returns {*}
 */
const setSync = (key, data) => {
  if (!(key && data)) {
    return
  }

  try {
    return wx.setStorageSync(key, data)
  } catch (e) {
    failMonitor('setSync', e, key)
  }
}

/**
 * 异步写Storage
 *
 * LYS 不抛异常吗？
 * @param key
 * @param data
 * @returns {Promise}
 */
const set = (key, data) => {
  if (!(key && data)) {
    return Promise.resolve()
  }

  return _api__WEBPACK_IMPORTED_MODULE_0__["default"].setStorage({
    key: key,
    data,
  })
    .then(res => {
      console.debug(`Storage.set key=${key}:`, res)
      return Promise.resolve(res)
    })
    .catch(e => {
      failMonitor('set', e, key)

      // 不抛出异常
      return Promise.resolve(e)
    })
}

/**
 * 异步移除key
 * @param key
 * @returns {*}
 */
const remove = (key) => {
  if (!key) {
    return Promise.resolve()
  }

  return _api__WEBPACK_IMPORTED_MODULE_0__["default"].removeStorage({
    key,
  }).then(res => {
    console.debug(`Storage.remove key=${key}:`, res)
    return Promise.resolve(res)
  }, e => {
    failMonitor('remove', e, key)

    return Promise.resolve(e)
  })
}

/**
 * 同步移除key
 * @param key
 */
const removeSync = (key) => {
  if (!key) {
    return
  }

  try {
    wx.removeStorageSync(key)
  } catch (e) {
    failMonitor('removeSync', e, key)
  }
}

const getInfoSync = () => {
  try {
    return wx.getStorageInfoSync()
  } catch (e) {
    failMonitor('getInfoSync', e)
    return null
  }
}

const getInfo = () => {
  return _api__WEBPACK_IMPORTED_MODULE_0__["default"].getStorageInfo({
  })
    .then((res = {}) => {
      console.debug(`Storage.getInfo:`, res)
      return Promise.resolve(res.data)
    })
    .catch(e => {
      failMonitor('getInfo', e)
      return Promise.reject(e)
    })
}

const clearSync = () => {
  try {
    return wx.clearStorageSync()
  } catch (e) {
    failMonitor('clearSync', e)
    return null
  }
}

const clear = () => {
  return _api__WEBPACK_IMPORTED_MODULE_0__["default"].clearStorage({})
    .then((res = {}) => {
      console.debug(`Storage.clear:`, res)
      return Promise.resolve()
    })
    .catch(e => {
      failMonitor('clear', e)
      return Promise.reject(e)
    })
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get,
  getSync,
  set,
  setSync,
  remove,
  removeSync,
  getInfo,
  getInfoSync,
  clear,
  clearSync,
});


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/system.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/system.js ***!
  \*****************************************************************/
/*! exports provided: SystemInfo, initSystemInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemInfo", function() { return SystemInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSystemInfo", function() { return initSystemInfo; });
/* harmony import */ var _report_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report/index */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./node_modules/@tencent/intp-weapp-kit-beta/src/storage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/*
 * @Date: 2019-04-01 16:08:54
 * @LastEditors  : lynatao
 * @LastEditTime : 2020-02-13 11:07:39
 */
/**
 * 系统信息
 * Created by yunshengli on 2019/3/8.
 */




let SystemInfo = {}

/**
 * 初始化系统信息
 */
const initSystemInfo = (weappVersion = '') => {
  try {
    const startTime = Date.now()
    SystemInfo = wx.getSystemInfoSync()
    // {"batteryLevel":64,"version":"6.6.6","system":"iOS 11.3.1","windowHeight":724,"pixelRatio":3,"screenHeight":812,"language":"zh_CN","statusBarHeight":44,"windowWidth":375,"model":"iPhone X (GSM+CDMA)<iPhone10,3>","screenWidth":375,"fontSizeSetting":16,"brand":"iPhone","platform":"ios","SDKVersion":"2.0.8"}
    const costTime = Date.now() - startTime

    const launchOption = wx.getLaunchOptionsSync() || {}
    SystemInfo.scene = launchOption.scene || 0
    SystemInfo.referrerInfo = launchOption.referrerInfo || {}
    SystemInfo.launchOption = launchOption // 返回launchOption
    console.debug('wx.getSystemInfoSync cost:', costTime, 'launchOption', launchOption)

    if (typeof wx.getAccountInfoSync === 'function') { // 兼容性不好，判断下是否存在
      const accountInfo = wx.getAccountInfoSync()
      const {
        miniProgram = {}, // 给与默认值，防止业务层出现undefined错
        plugin,
      } = accountInfo || {}
      console.debug('>>>>getAccountInfoSync', accountInfo)
      SystemInfo.miniProgram = miniProgram
      plugin && (SystemInfo.plugin = plugin)
      // weappVersion表示插件账号或者小程序账号
      if (plugin) {
        SystemInfo.weappVersion = plugin.version
      } else {
        SystemInfo.weappVersion = miniProgram.version
      }
    }

    // 小程序版本
    if (weappVersion) {
      SystemInfo.weappVersion = weappVersion
    }
    const platform = (SystemInfo.platform || '').toLowerCase()
    SystemInfo.ios = platform === 'ios'
    SystemInfo.android = platform === 'android'
    if (SystemInfo.model.includes('iPad')) { // iPad标记下，不然都算到iPhone里了
      SystemInfo.brand = 'iPad'
    }

    console.debug('>>>>SystemInfo', SystemInfo)
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].set(_constants__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEY"].SYSTEM_INFO, SystemInfo).catch(e => console.error(e))

    // saveSpeeds({ // 不用调用sendSpeeds，后续会有地方send
    //   pid: 479,
    //   speeds: {
    //     sid: 24,
    //     time: costTime
    //   }
    // });
  } catch (e) {
    console.error('wx.getSystemInfoSync:', e)
  }

  asyncGetNetworkType()

  return SystemInfo
}

const asyncGetNetworkType = () => {
  const startTime = Date.now()
  wx.getNetworkType({
    success(res) {
      const costTime = Date.now() - startTime
      // 返回网络类型, 有效值：
      // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
      const networkType = res.networkType || 'unknown'
      console.log('wx.getNetworkType:', networkType)
      console.debug('wx.getNetworkType cost:', costTime)

      SystemInfo.networkType = networkType
      _storage__WEBPACK_IMPORTED_MODULE_1__["default"].set(_constants__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEY"].SYSTEM_INFO, SystemInfo).catch(e => console.error(e))
    },
    fail(e) {
      console.error('wx.getNetworkType fail:', e)
    },
  })
}

// export default SystemInfo


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/id-card-no.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/utils/id-card-no.js ***!
  \***************************************************************************/
/*! exports provided: isIDCardNoValid, isIDCardNoStrictValid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIDCardNoValid", function() { return isIDCardNoValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIDCardNoStrictValid", function() { return isIDCardNoStrictValid; });
/**
 * 身份证号校验相关
 * Created by yunshengli on 2019/6/27.
 */

/**
 * 身份证号校验
 *
 * 简单正则校验
 * 不够完整，比如校验码未检查
 * 参考 https://juejin.im/post/5aa8d89af265da23866f9669 方案一
 *
 * @param no
 * @returns {boolean}
 */
const isIDCardNoValid = (no = '') => {
  // 格式：1~9数字-5位数字-年份头位-年份后2位-月份2位-日期2位-数字3位-校验值1位
  const regex = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$/i

  return regex.test(no)
}

/**
 * 校验码校验
 * @param val
 * @returns {boolean}
 */
const checkCode = (val) => {
  const regex = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  const factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
  const parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
  const code = val.substring(17)
  if(regex.test(val)) {
    let sum = 0
    for(let i=0; i<17; i++) {
      sum += val[i]*factor[i]
    }
    if(parity[sum % 11] === code.toUpperCase()) {
      return true
    }
  }
  return false
}

const checkDate = function (val) {
  const pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/
  if(pattern.test(val)) {
    const year = val.substring(0, 4)
    const month = val.substring(4, 6)
    const date = val.substring(6, 8)
    const date2 = new Date(year + '-' + month + '-' + date)
    if(date2 && date2.getMonth() === (parseInt(month) - 1)) {
      return true
    }
  }
  return false
}

const checkProv = function (val) {
  const pattern = /^[1-9][0-9]/
  const provinces = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
  }

  if(pattern.test(val)) {
    if(provinces[val]) {
      return true
    }
  }

  return false
}

/**
 * 身份证号严格校验
 * 会检查最后一位的校验码是否正确
 *
 * 参考 https://juejin.im/post/5aa8d89af265da23866f9669 方案二
 * @param no
 * @returns {boolean}
 */
const isIDCardNoStrictValid = (no = '') => {
  if(!no){
    return false
  }

  if(checkCode(no)) {
    const date = no.substring(6,14)
    if(checkDate(date)) {
      if(checkProv(no.substring(0,2))) {
        return true
      }
    }
  }

  return false
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/utils/index.js ***!
  \**********************************************************************/
/*! exports provided: queryToObj, objToQuery, urlAppendQuery, isInternalApiUrl, dealUrl, gateWayUrl, getCgiUrl, check3rdUrl, getUnixTimeStamp, getUnixNow, parseDateStr, formatDateStr, formatDate, isIDCardNoValid, isIDCardNoStrictValid, isArrayEmpty, isArrayNotEmpty, isObjectEmpty, getRetCode, getErrMsg, getErrContent, getAPIErrContent, compareVersion, transformFee, storeTimeStamp, generateCurrentTimeStamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayEmpty", function() { return isArrayEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayNotEmpty", function() { return isArrayNotEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRetCode", function() { return getRetCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrMsg", function() { return getErrMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrContent", function() { return getErrContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAPIErrContent", function() { return getAPIErrContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareVersion", function() { return compareVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformFee", function() { return transformFee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTimeStamp", function() { return storeTimeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCurrentTimeStamp", function() { return generateCurrentTimeStamp; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./node_modules/@tencent/intp-weapp-kit-beta/src/storage.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/time.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url */ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "queryToObj", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["queryToObj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objToQuery", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["objToQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "urlAppendQuery", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["urlAppendQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInternalApiUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["isInternalApiUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dealUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["dealUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gateWayUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["gateWayUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCgiUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["getCgiUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "check3rdUrl", function() { return _url__WEBPACK_IMPORTED_MODULE_3__["check3rdUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUnixTimeStamp", function() { return _time__WEBPACK_IMPORTED_MODULE_1__["getUnixTimeStamp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUnixNow", function() { return _time__WEBPACK_IMPORTED_MODULE_1__["getUnixNow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseDateStr", function() { return _time__WEBPACK_IMPORTED_MODULE_1__["parseDateStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDateStr", function() { return _time__WEBPACK_IMPORTED_MODULE_1__["formatDateStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return _time__WEBPACK_IMPORTED_MODULE_1__["formatDate"]; });

/* harmony import */ var _id_card_no__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./id-card-no */ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/id-card-no.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIDCardNoValid", function() { return _id_card_no__WEBPACK_IMPORTED_MODULE_4__["isIDCardNoValid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIDCardNoStrictValid", function() { return _id_card_no__WEBPACK_IMPORTED_MODULE_4__["isIDCardNoStrictValid"]; });











const isArrayEmpty = array => !(array && array.length)

const isArrayNotEmpty = array => array && array.length

const isObjectEmpty = obj => !obj || Object.keys(obj).length === 0 && obj.constructor === Object

let localTimestamp = null;

/**
 * 获取CGI返回的retcode
 * 兼容各种写法
 *   - res.baseResp.ret
 *   - res.baseResp.retcode
 *   - res.ret
 *   - res.retcode
 * @param res
 */
const getRetCode = (res = {}) => {
  const { baseResp = {} } = res
  let retCode = typeof baseResp.ret === 'undefined' ? baseResp.retcode : baseResp.ret
  if(typeof retCode === 'undefined'){
    retCode = typeof res.ret === 'undefined' ? res.retcode : res.ret
  }

  return retCode
}

/**
 * 获取CGI返回的errMsg
 * 全为空返回空字符串
 *
 * 兼容各种写法
 *   - res.baseResp.msg
 *   - res.baseResp.errMsg
 *   - res.msg
 *   - res.errMsg
 * @param res
 */
const getErrMsg = (res = {}) => {
  const { baseResp = {} } = res
  let errMsg = typeof baseResp.errMsg === 'undefined' ? baseResp.msg : baseResp.errMsg
  if(typeof errMsg === 'undefined'){
    errMsg = typeof res.msg === 'undefined' ? res.errMsg : res.msg
  }

  return errMsg || ''
}

/**
 * CGI异常弹窗报错信息
 * 格式为"errMsg[-1]"
 *
 * @param err
 * @param code
 * @param msg
 * @returns {string}
 */
const getErrContent = (err = {}, code, msg) => {
  const retCode = code || getRetCode(err)
  const errMsg = msg || getErrMsg(err) || '请稍后再试'

  return `${errMsg}${typeof retCode === 'undefined' ? '' : `[${retCode}]`}`
}

/**
 * 小程序接口的错误信息
 * @param err
 * @returns {string}
 */
const getAPIErrContent = (err = {}) => `${err.errMsg ? `[${err.errMsg}]` : ''}`

/**
 * 版本比较
 * v1 > v2, return 1
 * v1 = v2, return 0
 * v1 < v2, return -1
 * @param v1
 * @param v2
 * @returns {number}
 */
const compareVersion = (v1 = '', v2 = '') => {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i])
    const num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

/**
 * 金额单位都是分，要转成元
 * @param fee
 */
const transformFee = (fee = 0) => {
  if (fee === 0) {
    return fee
  }

  const tmp = Number(fee) / 100
  return Number.isInteger(tmp) ? tmp : Number(tmp.toFixed(2))
}

const storeTimeStamp = (serverTimeStamp) => {
  const clientTimeStamp = Object(_time__WEBPACK_IMPORTED_MODULE_1__["getUnixNow"])()
  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].set(_constants__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEY"].TIMESTAMP, localTimestamp = {
    server: serverTimeStamp, // 服务器时间戳
    client: clientTimeStamp, // 客户端时间戳
  })
    .catch(e => console.error(e))
}

const generateCurrentTimeStamp = () => {
  const timestamp = localTimestamp || _storage__WEBPACK_IMPORTED_MODULE_0__["default"].getSync(_constants__WEBPACK_IMPORTED_MODULE_2__["STORAGE_KEY"].TIMESTAMP)
  const now = Object(_time__WEBPACK_IMPORTED_MODULE_1__["getUnixNow"])()
  if(timestamp && timestamp.server){
    return timestamp.server + now - timestamp.client
  }else{
    return 0
  }
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/time.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/utils/time.js ***!
  \*********************************************************************/
/*! exports provided: getUnixTimeStamp, getUnixNow, parseDateStr, formatDateStr, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnixTimeStamp", function() { return getUnixTimeStamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnixNow", function() { return getUnixNow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDateStr", function() { return parseDateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateStr", function() { return formatDateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/**
 * 时间日期相关工具方法
 * Created by yunshengli on 2019/7/16.
 */
const getUnixTimeStamp = (ts) => Math.floor(ts / 1000)

const getUnixNow = () => getUnixTimeStamp(Date.now())

// 不足两位数的补0
function fix(num) {
  const str = num.toString()
  return num < 10 ? `0${str}` : str
}

const parseDateStr = (dateStr) => {
  return new Date(dateStr.substr(0, 4), (Number(dateStr.substr(4, 2)) - 1), dateStr.substr(6, 2));
};

const formatDateStr = (dateStr, formatStr) => {
  if(!(dateStr && typeof dateStr === 'string')){
    return;
  }
  const date = parseDateStr(dateStr);
  return formatDate(+date, formatStr || 'YYYY-MM-DD')
}

const formatDate = (ts, formatStr) => {
  if(typeof ts !== 'number' || typeof formatStr !== 'string') {
    return;
  }

  const date = new Date(ts);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return formatStr.replace(/YYYY/g, year)
    .replace(/YY/g, year % 100)
    .replace(/MM/g, fix(month))
    .replace(/M/g, month)
    .replace(/DD/g, fix(day))
    .replace(/D/g, date)
    .replace(/hh/g, fix(hour))
    .replace(/h/g, hour)
    .replace(/mm/g, fix(minute))
    .replace(/m/g, minute)
    .replace(/ss/g, fix(second))
    .replace(/s/g, second);
}


/***/ }),

/***/ "./node_modules/@tencent/intp-weapp-kit-beta/src/utils/url.js":
/*!********************************************************************!*\
  !*** ./node_modules/@tencent/intp-weapp-kit-beta/src/utils/url.js ***!
  \********************************************************************/
/*! exports provided: queryToObj, objToQuery, urlAppendQuery, isInternalApiUrl, dealUrl, gateWayUrl, getCgiUrl, check3rdUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryToObj", function() { return queryToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objToQuery", function() { return objToQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlAppendQuery", function() { return urlAppendQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInternalApiUrl", function() { return isInternalApiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dealUrl", function() { return dealUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gateWayUrl", function() { return gateWayUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCgiUrl", function() { return getCgiUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "check3rdUrl", function() { return check3rdUrl; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@tencent/intp-weapp-kit-beta/src/constants.js");
/**
 * URL相关工具方法
 * Created by yunshengli on 2019/7/17.
 */


/**
 * path的query参数转为obj
 * @param queryString
 * @returns {{}}
 */
const queryToObj = (queryString) => {
  if (!queryString) {
    return {}
  }

  return queryString.split('&').reduce((acc, current) => {
    const tmp = current.split('=')
    acc[tmp[0]] = tmp[1]
    return acc
  }, {})
}

/**
 * obj转为path的query参数
 * @param obj
 * @returns {string}
 */
const objToQuery = (obj = {}) => {
  return Object.keys(obj).reduce((acc, current) => {
    acc += `${acc ? '&' : ''}${current}=${encodeURIComponent(obj[current])}`
    return acc
  }, '')
}

const urlAppendQuery = (url, queryString) => `${url}${url.includes('?') ? '&' : '?'}${queryString}`

/**
 * 单个斜杠开头的链接表示是内部链接
 */
const isInternalApiUrl = url => /^\/[^\/].*/.test(url)

/**
 * 给内部URL增加mp域名前缀
 * @param url
 * @returns {string|*}
 */
const dealUrl = (url) => {
  if (isInternalApiUrl(url)) {
    return `${_constants__WEBPACK_IMPORTED_MODULE_0__["CGI_DOMAIN"]}${url}`
  }
  return url
}
const gateWayUrl = (url, codeType) => {
  if (isInternalApiUrl(url)) {
    return `${_constants__WEBPACK_IMPORTED_MODULE_0__["GATE_DOMAIN"]}/an:${codeType}${url}`
  }
  return url
}
/**
 * 生成CGI url，方便调试和上报
 * 类似：
 * pay/detail
 * pay/detail?action=xxx
 *
 * 传入的url迥异，要处理下
 * @param originalUrl
 * @param data
 * @returns {string}
 */
const getCgiUrl = (originalUrl = '', data = {}) => {
  if (isInternalApiUrl(originalUrl)) {
    // 如果是内部URL，就移除第一个斜杆后的内容
    // 比如/insurance/card/bind 变为 /card/bind
    // 因为第一个通常是模块路由，上报定位的时候不需要这么多冗余信息
    originalUrl = originalUrl.replace(/\/\w+/, '')
  }

  if (originalUrl.includes('?')) {

  }
  const queryObj = queryToObj(originalUrl.includes('?') ? originalUrl.split('?')[1] : '')
  const tmp = {
    ...queryObj,
    ...data,
  }

  return `${originalUrl.replace(/\?.*/, '')}${tmp.action ? `?action=${tmp.action}` : ''}`
}

/**
 * 是否第三方链接
 * 非mp域名的
 * @param url
 * @returns {boolean}
 */
const check3rdUrl = url => !isInternalApiUrl(url) && !/^https?:\/\/mp\.weixin\.qq\.com/.test(url)


/***/ }),

/***/ "./node_modules/humps/humps.js":
/*!*************************************!*\
  !*** ./node_modules/humps/humps.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// =========
// = humps =
// =========
// Underscore-to-camelCase converter (and vice versa)
// for strings and object keys

// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.


;(function(global) {

  var _processKeys = function(convert, obj, options) {
    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
      return obj;
    }

    var output,
        i = 0,
        l = 0;

    if(_isArray(obj)) {
      output = [];
      for(l=obj.length; i<l; i++) {
        output.push(_processKeys(convert, obj[i], options));
      }
    }
    else {
      output = {};
      for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
          output[convert(key, options)] = _processKeys(convert, obj[key], options);
        }
      }
    }
    return output;
  };

  // String conversion methods

  var separateWords = function(string, options) {
    options = options || {};
    var separator = options.separator || '_';
    var split = options.split || /(?=[A-Z])/;

    return string.split(split).join(separator);
  };

  var camelize = function(string) {
    if (_isNumerical(string)) {
      return string;
    }
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  };

  var pascalize = function(string) {
    var camelized = camelize(string);
    // Ensure 1st char is always uppercase
    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  };

  var decamelize = function(string, options) {
    return separateWords(string, options).toLowerCase();
  };

  // Utilities
  // Taken from Underscore.js

  var toString = Object.prototype.toString;

  var _isFunction = function(obj) {
    return typeof(obj) === 'function';
  };
  var _isObject = function(obj) {
    return obj === Object(obj);
  };
  var _isArray = function(obj) {
    return toString.call(obj) == '[object Array]';
  };
  var _isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };
  var _isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };
  var _isBoolean = function(obj) {
    return toString.call(obj) == '[object Boolean]';
  };

  // Performant way to determine if obj coerces to a number
  var _isNumerical = function(obj) {
    obj = obj - 0;
    return obj === obj;
  };

  // Sets up function which handles processing keys
  // allowing the convert function to be modified by a callback
  var _processor = function(convert, options) {
    var callback = options && 'process' in options ? options.process : options;

    if(typeof(callback) !== 'function') {
      return convert;
    }

    return function(string, options) {
      return callback(string, convert, options);
    }
  };

  var humps = {
    camelize: camelize,
    decamelize: decamelize,
    pascalize: pascalize,
    depascalize: decamelize,
    camelizeKeys: function(object, options) {
      return _processKeys(_processor(camelize, options), object);
    },
    decamelizeKeys: function(object, options) {
      return _processKeys(_processor(decamelize, options), object, options);
    },
    pascalizeKeys: function(object, options) {
      return _processKeys(_processor(pascalize, options), object);
    },
    depascalizeKeys: function () {
      return this.decamelizeKeys.apply(this, arguments);
    }
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (humps),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this);


/***/ }),

/***/ "./src/plugin/apis/comment.ts":
/*!************************************!*\
  !*** ./src/plugin/apis/comment.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cgi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cgi */ "./src/plugin/utils/cgi.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/util */ "./src/plugin/utils/util.ts");
/* harmony import */ var _tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tencent/intp-weapp-kit/report */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");


/**
 * 打开评价发布器的api
 */



var uid = '';

// 进入交易评价
function goTradeComment(opt) {
  var query = '';
  if (!!opt.wx_pay_id) {
    query = "wx_pay_id=".concat(opt.wx_pay_id, "&openType=11");
  } else if (!!opt.shopAppid) {
    query = "shopAppid=".concat(opt.shopAppid, "&openType=10");
  }
  Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
    msg: "goTradeComment start ".concat(uid, " ").concat(JSON.stringify(opt), " ").concat(query, " ").concat(+new Date())
  });
  if (!query) {
    opt.fail && opt.fail({
      errCode: -1,
      errMsg: 'params error'
    });
    return false;
  }

  // @ts-ignore
  wx.openBusinessView({
    businessType: 'wxaopentradecomment',
    // path: pages/tradeComment/tradeComment
    queryString: query,
    envVersion: 'release',
    // 'trial' , release, develop
    success: function success(res) {
      var _res$extraData;
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
        msg: "goTradeComment succ ".concat(uid, " ").concat(JSON.stringify(res))
      });
      if ((res === null || res === void 0 ? void 0 : (_res$extraData = res.extraData) === null || _res$extraData === void 0 ? void 0 : _res$extraData.errCode) === 0) {
        opt.success && opt.success(res.extraData);
      } else {
        opt.fail && opt.fail(res.extraData);
      }
    },
    fail: function fail(res) {
      var _res$errMsg;
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
        msg: "goTradeComment fail ".concat(uid, " ").concat(JSON.stringify(res))
      });
      console.debug('openBusinessView fail', res);
      opt.fail && opt.fail({
        errCode: res.errCode || -1,
        errMsg: (_res$errMsg = res.errMsg) === null || _res$errMsg === void 0 ? void 0 : _res$errMsg.replace('openBusinessView:', '')
      });
    }
  });
}

// 进入搜索的服务评价
function goSearchComment(opt) {
  Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
    msg: "goSearchComment start ".concat(uid, " ").concat(JSON.stringify(opt), " ").concat(+new Date())
  });

  // @ts-ignore
  wx.openBusinessView({
    businessType: 'servicecommentpage',
    // path: pages/service-comment/post/index?appid={{开发者小程序appid}}&scenes=6
    queryString: "appid=".concat(opt.appid, "&scenes=6"),
    envVersion: 'release',
    // 'trial' , release, develop
    /* extraData: {
      foo: 'bar'
    }, */
    success: function success(res) {
      // console.log('openBusinessView success', res)
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
        msg: "goSearchComment succ ".concat(uid, " ").concat(JSON.stringify(res))
      });

      // 体验评价没有任何回调
      opt.success && opt.success({
        errCode: 0,
        errMsg: ''
      });
      /* if(res?.extraData?.errCode === 0){
        opt.success && opt.success(res.extraData)
      } else {
        opt.fail && opt.fail(res.extraData)
      } */
    },

    fail: function fail(res) {
      var _res$errMsg2;
      // console.log('openBusinessView fail', res)

      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
        msg: "goSearchComment fail ".concat(uid, " ").concat(JSON.stringify(res))
      });
      opt.fail && opt.fail({
        errCode: res.errCode || -1,
        errMsg: (_res$errMsg2 = res.errMsg) === null || _res$errMsg2 === void 0 ? void 0 : _res$errMsg2.replace('openBusinessView:', '')
      });
    }
  });
}

// 对外api
function openComment(_x) {
  return _openComment.apply(this, arguments);
}
function _openComment() {
  _openComment = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(opt) {
    var _yield$cgi$getCategor, categorType, disableComponentComment;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          uid = _utils_util__WEBPACK_IMPORTED_MODULE_3__["uuid"]();
          Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
            msg: "openComment ".concat(uid, " ").concat(JSON.stringify(opt), " ").concat(+new Date())
          });
          _context.next = 4;
          return _utils_cgi__WEBPACK_IMPORTED_MODULE_2__["default"].getCategoryInfo();
        case 4:
          _yield$cgi$getCategor = _context.sent;
          categorType = _yield$cgi$getCategor.categorType;
          disableComponentComment = _yield$cgi$getCategor.disableComponentComment;
          if (!(categorType == 1)) {
            _context.next = 14;
            break;
          }
          if (!disableComponentComment) {
            _context.next = 11;
            break;
          }
          opt.fail && opt.fail({
            errCode: -4,
            errMsg: '因该小程序评价不佳，暂不允许使用组件。'
          });
          return _context.abrupt("return");
        case 11:
          // 进入交易评价
          goTradeComment({
            shopAppid: _utils_util__WEBPACK_IMPORTED_MODULE_3__["shopAppid"],
            success: opt.success,
            fail: opt.fail,
            wx_pay_id: opt.wx_pay_id
          });
          _context.next = 18;
          break;
        case 14:
          if (!disableComponentComment) {
            _context.next = 17;
            break;
          }
          opt.success && opt.success({
            errCode: 0,
            errMsg: ''
          });
          return _context.abrupt("return");
        case 17:
          // 进入服务评价
          goSearchComment({
            appid: _utils_util__WEBPACK_IMPORTED_MODULE_3__["shopAppid"],
            // 'wxd805d5bc060abe66'
            success: opt.success,
            fail: opt.fail
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _openComment.apply(this, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (openComment);

/***/ }),

/***/ "./src/plugin/apis/commentList.ts":
/*!****************************************!*\
  !*** ./src/plugin/apis/commentList.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_cgi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/cgi */ "./src/plugin/utils/cgi.ts");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/util */ "./src/plugin/utils/util.ts");
/* harmony import */ var _tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tencent/intp-weapp-kit/report */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");


/**
 * 打开评价列表的api
 */



var uid = '';

// 进入交易评价
function goTradeComment(opt) {
  var query = '';
  query = "tag=".concat(opt.listType == 'all' ? 2 : 1, "&openType=5&shopAppid=").concat(opt.shopAppid);
  Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('commentlist', {
    msg: "goTradeCommentList start ".concat(uid, " ").concat(JSON.stringify(opt), " ").concat(query, " ").concat(+new Date())
  });
  if (!query) {
    opt.fail && opt.fail({
      errCode: -1,
      errMsg: 'params error'
    });
    return false;
  }

  // @ts-ignore
  wx.openBusinessView({
    businessType: 'wxaopencommentflow',
    // path: pages/tradeComment/tradeComment
    queryString: query,
    envVersion: 'release',
    // 'trial' , release, develop
    success: function success(res) {
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('commentlist', {
        msg: "goTradeCommentList succ ".concat(uid, " ").concat(JSON.stringify(res))
      });
      opt.success && opt.success({
        errCode: 0,
        errMsg: ''
      });
    },
    fail: function fail(res) {
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('commentlist', {
        msg: "goTradeCommentList fail ".concat(uid, " ").concat(JSON.stringify(res))
      });
      console.debug('openBusinessView fail', res);
      if (res.errCode == -3) {
        // 返回 
        opt.success && opt.success({
          errCode: 0,
          errMsg: ''
        });
      } else {
        var _res$errMsg;
        opt.fail && opt.fail({
          errCode: res.errCode || -1,
          errMsg: (_res$errMsg = res.errMsg) === null || _res$errMsg === void 0 ? void 0 : _res$errMsg.replace('openBusinessView:', '')
        });
      }
    }
  });
}

// 进入搜索的服务评价
function goSearchComment(opt) {
  Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('commentlist', {
    msg: "goSearchCommentList start ".concat(uid, " ").concat(JSON.stringify(opt), " ").concat(+new Date())
  });

  // @ts-ignore
  wx.openBusinessView({
    businessType: 'servicecommentshowpage',
    // pages/service-comment/index?appid=${opt.appid}&scenes=6
    queryString: "appid=".concat(opt.appid, "&scenes=6"),
    envVersion: 'release',
    // 'trial' , release, develop
    success: function success(res) {
      var _res$extraData;
      console.log('openBusinessView success', res);
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
        msg: "goSearchCommentList succ ".concat(uid, " ").concat(JSON.stringify(res))
      });
      if ((res === null || res === void 0 ? void 0 : (_res$extraData = res.extraData) === null || _res$extraData === void 0 ? void 0 : _res$extraData.errCode) === 0) {
        opt.success && opt.success(res.extraData);
      } else {
        opt.fail && opt.fail(res.extraData);
      }
    },
    fail: function fail(res) {
      var _res$errMsg2;
      console.log('openBusinessView fail', res);
      Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_4__["monitor"])('comment', {
        msg: "goSearchCommentList fail ".concat(uid, " ").concat(JSON.stringify(res))
      });
      opt.fail && opt.fail({
        errCode: res.errCode || -1,
        errMsg: (_res$errMsg2 = res.errMsg) === null || _res$errMsg2 === void 0 ? void 0 : _res$errMsg2.replace('openBusinessView:', '')
      });
    }
  });
}

// 对外api
function openCommentList(_x) {
  return _openCommentList.apply(this, arguments);
}
function _openCommentList() {
  _openCommentList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(opt) {
    var _yield$cgi$getCategor, categorType, disableComponentComment;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return");
        case 5:
          _yield$cgi$getCategor = _context.sent;
          categorType = _yield$cgi$getCategor.categorType;
          disableComponentComment = _yield$cgi$getCategor.disableComponentComment;
          if (categorType == 1) {
            // 进入交易评价
            goTradeComment({
              shopAppid: _utils_util__WEBPACK_IMPORTED_MODULE_3__["shopAppid"],
              listType: opt.listType,
              success: opt.success,
              fail: opt.fail
            });
          } else {
            opt.fail && opt.fail({
              errCode: 0,
              errMsg: '体验评价类账号不能跳转到评价列表'
            });
            goSearchComment({
              appid: 'wxd805d5bc060abe66',
              // util.shopAppid, // 
              success: opt.success,
              fail: opt.fail
            });
          }
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _openCommentList.apply(this, arguments);
}
/* harmony default export */ __webpack_exports__["default"] = (openCommentList);

/***/ }),

/***/ "./src/plugin/index.ts":
/*!*****************************!*\
  !*** ./src/plugin/index.ts ***!
  \*****************************/
/*! exports provided: openComment, openCommentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis/comment */ "./src/plugin/apis/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openComment", function() { return _apis_comment__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _apis_commentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apis/commentList */ "./src/plugin/apis/commentList.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openCommentList", function() { return _apis_commentList__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init */ "./src/plugin/init.ts");



// 上报初始化

Object(_init__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/plugin/init.ts":
/*!****************************!*\
  !*** ./src/plugin/init.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tencent_intp_weapp_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tencent/intp-weapp-kit */ "./node_modules/@tencent/intp-weapp-kit-beta/src/index.js");
/* harmony import */ var _tencent_intp_weapp_kit_request_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tencent/intp-weapp-kit/request/session */ "./node_modules/@tencent/intp-weapp-kit-beta/src/request/session.js");
/* harmony import */ var _tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tencent/intp-weapp-kit/report */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/* harmony import */ var _utils_cgi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/cgi */ "./src/plugin/utils/cgi.ts");
// @ts-ignore




var isInit = false;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (isInit) return;
  var pluginVersion = '';
  if (wx.getAccountInfoSync) {
    var info = wx.getAccountInfoSync();
    pluginVersion = info.plugin && info.plugin.version;
  }
  Object(_tencent_intp_weapp_kit__WEBPACK_IMPORTED_MODULE_0__["initAppConfig"])({
    // @ts-ignore
    codeType: "wx82e6ae1175f264fa",
    // 默认即可
    weappVersion: "1.0.3",
    report: {
      uin: _tencent_intp_weapp_kit_request_session__WEBPACK_IMPORTED_MODULE_1__["default"].uin || _tencent_intp_weapp_kit_request_session__WEBPACK_IMPORTED_MODULE_1__["default"].openId || "",
      // 如果新用户第一次时这里是没有session的
      reportDelay: 3000,
      // 小程序可以时间长点，从mp数据看次均访问时长竟然有29秒
      monitorId: 9636,
      // 必填，多维监控是必须加的
      streamInterface: "wxacommentplugin",
      // 点击流以及jsError上报的接口名，建议直接使用项目名称
      serviceType: 0,
      // 点击流，可选，不传或者为0则不上报点击流
      monitor: {
        plugin_version: pluginVersion
      }
    }
  });
  // 加入上报
  Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_2__["monitor"])('plugin init', {
    msg: ""
  });
  // 加入getCategoryInfo的初始化
  _utils_cgi__WEBPACK_IMPORTED_MODULE_3__["default"].getCategoryInfo();
  // console.log('init plugin version', pluginVersion)
  isInit = true;
});

/***/ }),

/***/ "./src/plugin/utils/basecgi.ts":
/*!*************************************!*\
  !*** ./src/plugin/utils/basecgi.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseCGI; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./src/plugin/utils/util.ts");
/* harmony import */ var _passState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./passState */ "./src/plugin/utils/passState.ts");
/* harmony import */ var _tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tencent/intp-weapp-kit/report */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// import cgiFake from './cgiFake';
// import { checkLocalAndReport } from './checkLocal';


// @ts-ignore

var BaseCGI = /*#__PURE__*/function () {
  function BaseCGI() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseCGI);
    this.fakeData = 0;
    // 0是走后台
    this._seq = 0;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseCGI, [{
    key: "_operateWXData",
    value:
    /**
     * 发起数据管道请求
     * @param apiName 接口名
     * @param query 参数
     * 常见错误码：
     * -12001 没有数据管道权限 : {errMsg: "operateWXData:fail invalid scope", err_code: -12001}
     * -12003 api配置文件没了 ： {"err_code":-12003,"errMsg":"operateWXData:fail invalid api_name"}
     * 10004 method找不到 : {"errMsg":"operateWXData:fail face not match id card number","err_code":10004}
     * 10005 json2pb error
     * 10006 pb2json error
     * 10007 transaction error
     */
    function _operateWXData(apiName, query) {
      var seq = ++this._seq;

      // 添加一个uuid用于定位问题
      query.request_id = _util__WEBPACK_IMPORTED_MODULE_6__["uuid"]();
      var method = query.method;
      console.debug('[CGI] Reqest', "#".concat(seq), apiName, method, query);

      // 约定所有接口都应该有method和data，这里将query.data进行stringify
      query.data = JSON.stringify(query.data);
      if (this.fakeData) {
        // return cgiFake.request(apiName, query);
      }
      wx.showNavigationBarLoading();
      return new Promise(function (resolve, reject) {
        var startTime = new Date().getTime();
        wx.operateWXData({
          apiName: apiName,
          reqData: query,
          success: function success(res) {
            var _res$respData, _res$respData2;
            var resp = {
              respData: res.respData,
              data: JSON.parse(((_res$respData = res.respData) === null || _res$respData === void 0 ? void 0 : _res$respData.data) || '{}'),
              err_code: +res.err_code || +((_res$respData2 = res.respData) === null || _res$respData2 === void 0 ? void 0 : _res$respData2.err_no),
              err_msg: res.errMsg
            };
            var endTime = new Date().getTime();
            var usedTime = endTime - startTime;
            console.debug('[CGI] Response', "#".concat(seq), apiName, method, "".concat(usedTime, "ms"), resp);
            if (+resp.err_code === 0) {
              resolve(resp);
            } else {
              reject(resp);
            }
          },
          fail: function fail(res) {
            var _res$respData3, _res$respData4;
            console.debug('[CGI] Fail', "#".concat(seq), apiName, method, res);
            Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_8__["monitor"])('cgi_fail', {
              msg: "".concat(apiName, ".").concat(method, " ").concat(query.request_id)
            });
            // 断网处理
            if (res !== null && res !== void 0 && res.errMsg && !(res !== null && res !== void 0 && res.respData) && (res.errMsg.indexOf('fail Failed to fetch') > -1 || res.errMsg.indexOf('fail network offline') > -1)) {
              reject({
                err_code: -999,
                err_msg: res === null || res === void 0 ? void 0 : res.errMsg
              });
              return false;
            }
            var resp = {
              respData: res.respData,
              data: JSON.parse(((_res$respData3 = res.respData) === null || _res$respData3 === void 0 ? void 0 : _res$respData3.data) || '{}'),
              err_code: +res.err_code || +((_res$respData4 = res.respData) === null || _res$respData4 === void 0 ? void 0 : _res$respData4.err_no),
              err_msg: res.errMsg
            };
            reject(resp);
          },
          complete: function complete(res) {
            var _res$respData5;
            // 断网处理
            if (res !== null && res !== void 0 && res.errMsg && !(res !== null && res !== void 0 && res.respData) && (res.errMsg.indexOf('fail Failed to fetch') > -1 || res.errMsg.indexOf('fail network offline') > -1)) {
              return false;
            }
            var endTime = new Date().getTime();
            var usedTime = endTime - startTime;
            // checkLocalAndReport(apiName, res, query, resp, usedTime);
            var ret = +res.err_code || +((_res$respData5 = res.respData) === null || _res$respData5 === void 0 ? void 0 : _res$respData5.err_no);
            var reportres = Number.isNaN(ret) ? res : ''; // 返回码未知的情况下，上报回包
            Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_8__["monitor"])('cgi_report', {
              msg: "".concat(apiName, ".").concat(method, " ").concat(query.request_id, " ").concat(JSON.stringify(reportres)),
              cost_time: usedTime,
              ret: ret
            });
            wx.hideNavigationBarLoading();
          }
        });
      });
    }

    /**
     * 发起带登录态的HTTPS请求，会自动刷新登录态
     * @param opt
     */
  }, {
    key: "_requestWithPassState",
    value: function () {
      var _requestWithPassState2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee(opt) {
        var _resp$data;
        var startTime, passData, resp, endTime, usedTime;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // 加入登录态
              startTime = new Date().getTime();
              _context.next = 3;
              return _passState__WEBPACK_IMPORTED_MODULE_7__["default"].get();
            case 3:
              passData = _context.sent;
              if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(opt.data) === 'object') {
                opt.data = _objectSpread(_objectSpread({}, opt.data), passData);
              } else if (!opt.data) {
                opt.data = _objectSpread({}, passData);
              }
              _context.next = 7;
              return this._request(opt).catch(function (err) {
                return err;
              });
            case 7:
              resp = _context.sent;
              if (!(resp && resp.errcode === 90016)) {
                _context.next = 15;
                break;
              }
              // 登录态过期
              console.debug('[CGI] RequestWithPassState: errcode=90016, passState timeout.');
              _context.next = 12;
              return _passState__WEBPACK_IMPORTED_MODULE_7__["default"].update();
            case 12:
              _context.next = 14;
              return this._requestWithPassState(opt);
            case 14:
              resp = _context.sent;
            case 15:
              endTime = new Date().getTime();
              usedTime = endTime - startTime;
              if (resp.errno || resp.errno === 0) {
                console.debug("[CGI] RequestWithPassState: errno=".concat(resp.errno, ", errMsg=").concat(resp.errMsg, "."));
              }
              Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_8__["monitor"])('cgi_report', {
                msg: "https, ".concat(JSON.stringify(opt), ", ").concat(resp.errMsg),
                cost_time: usedTime,
                ret: resp.errno ? resp.errno : ((_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.errcode) || resp.errcode
              });
              return _context.abrupt("return", resp);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _requestWithPassState(_x) {
        return _requestWithPassState2.apply(this, arguments);
      }
      return _requestWithPassState;
    }()
    /**
     * 发起HTTPS请求
     * @param opt
     */
  }, {
    key: "_request",
    value: function () {
      var _request2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.mark(function _callee2(opt) {
        var seq;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default.a.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              seq = ++this._seq;
              console.debug('[CGI] Request', "#".concat(seq), opt);
              wx.showNavigationBarLoading();
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                var defaultOption = {
                  method: 'POST'
                };
                // 构造参数
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                var option = _objectSpread(_objectSpread(_objectSpread({}, defaultOption), opt), {}, {
                  success: function success(res) {
                    console.debug('[CGI] Response', "#".concat(seq), res);
                    // 支付XCGI框架中，回包中业务数据会包在data字段内
                    resolve(res.data.data || res.data);
                  },
                  fail: function fail(res) {
                    console.debug('[CGI] Fail', "#".concat(seq), res);
                    reject(res);
                  },
                  complete: function complete() {
                    wx.hideNavigationBarLoading();
                  }
                });
                wx.request(option);
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function _request(_x2) {
        return _request2.apply(this, arguments);
      }
      return _request;
    }()
  }]);
  return BaseCGI;
}();


/***/ }),

/***/ "./src/plugin/utils/cgi.ts":
/*!*********************************!*\
  !*** ./src/plugin/utils/cgi.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _basecgi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basecgi */ "./src/plugin/utils/basecgi.ts");
/* harmony import */ var _tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tencent/intp-weapp-kit/report */ "./node_modules/@tencent/intp-weapp-kit-beta/src/report/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./util */ "./src/plugin/utils/util.ts");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var CGI = /*#__PURE__*/function (_BaseCGI) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(CGI, _BaseCGI);
  var _super = _createSuper(CGI);
  function CGI() {
    var _this;
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CGI);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this._seq = 0;
    _this.categorType = undefined;
    _this.disableComponentComment = undefined;
    return _this;
  }
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CGI, [{
    key: "testEcho",
    value:
    /**
     * 空接口
     */
    function testEcho() {
      return this._operateWXData('WxaCommentRead', {
        method: 'test_echo',
        data: {}
      });
    }
    // 获取小程序账号信息
  }, {
    key: "getCategoryInfo",
    value: function () {
      var _getCategoryInfo = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
        var res, rawRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof this.categorType === 'number')) {
                _context.next = 4;
                break;
              }
              res = this.categorType;
              _context.next = 17;
              break;
            case 4:
              _context.prev = 4;
              _context.next = 7;
              return this._operateWXData('WxaCommentRead', {
                method: 'get_category_info',
                data: {},
                shop_appid: _util__WEBPACK_IMPORTED_MODULE_9__["shopAppid"]
              });
            case 7:
              rawRes = _context.sent;
              this.categorType = +rawRes.data.category_type;
              this.disableComponentComment = rawRes.data.disable_component_comment;
              res = this.categorType;
              _context.next = 17;
              break;
            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](4);
              Object(_tencent_intp_weapp_kit_report__WEBPACK_IMPORTED_MODULE_8__["monitor"])('getCategoryInfo', {
                msg: "getCategoryInfo ".concat(JSON.stringify(_context.t0))
              });
              res = undefined;
            case 17:
              return _context.abrupt("return", {
                categorType: this.categorType,
                disableComponentComment: this.disableComponentComment
              });
            case 18:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[4, 13]]);
      }));
      function getCategoryInfo() {
        return _getCategoryInfo.apply(this, arguments);
      }
      return getCategoryInfo;
    }()
  }]);
  return CGI;
}(_basecgi__WEBPACK_IMPORTED_MODULE_7__["default"]);
var cgi = new CGI();
wx.cgi = cgi;
/* harmony default export */ __webpack_exports__["default"] = (cgi);

/***/ }),

/***/ "./src/plugin/utils/passState.ts":
/*!***************************************!*\
  !*** ./src/plugin/utils/passState.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);




/**
 * 登录态模块
 */
var PassState = /*#__PURE__*/function () {
  function PassState() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PassState);
    // 登录态超时时间
    this.passKey = '';
    this.passTicket = '';
    this.uin = '';
    this.updateTime = 0;
    this._isLoading = false;
    this._timer = 0;
    this._fromStorage();
    this.update();
  }

  /**
   * 获取后台下划线写法的字段，方便直接拼接query
   */
  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PassState, [{
    key: "get",
    value: function () {
      var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!this._isTimeout()) {
                _context.next = 3;
                break;
              }
              _context.next = 3;
              return this.update();
            case 3:
              return _context.abrupt("return", {
                pass_key: this.passKey,
                pass_ticket: this.passTicket,
                uin: this.uin
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function get() {
        return _get.apply(this, arguments);
      }
      return get;
    }()
    /**
     * 拉取最新登录态，并写入缓存
     */
  }, {
    key: "update",
    value: function () {
      var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        var _this = this;
        var passkeyResp;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.requestPassKey();
            case 3:
              passkeyResp = _context2.sent;
              if (passkeyResp.passkey && passkeyResp.pass_ticket && passkeyResp.uin) {
                this.passKey = passkeyResp.passkey;
                this.passTicket = passkeyResp.pass_ticket;
                this.uin = passkeyResp.uin;
                this.updateTime = Date.now();
                ['passKey', 'passTicket', 'uin'].forEach(function (key) {
                  wx.setStorage({
                    key: key,
                    data: _this[key]
                  });
                });
              }
              _context2.next = 10;
              break;
            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.warn('[passState] Update error', _context2.t0);
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 7]]);
      }));
      function update() {
        return _update.apply(this, arguments);
      }
      return update;
    }()
    /**
     * 发起拉取登录态的网络请求
     */
  }, {
    key: "requestPassKey",
    value: function requestPassKey() {
      this._isLoading = true;
      return new Promise(function (resolve, reject) {
        wx.operateWXData({
          apiName: 'getGetPasskey',
          reqData: {},
          success: function success(res) {
            var resp = res;
            if (res.respData) {
              resp = Object.assign(resp, JSON.parse(res.respData.data));
            }
            console.debug('[passState] requestPassKey Suc', resp);
            resolve(resp);
          },
          fail: function fail(res) {
            console.debug('[passState] requestPassKey Fail', res);
            reject(res);
          },
          complete: function complete() {
            this._isLoading = false;
          }
        });
      });
    }

    /**
     * 从本地storage读取登录态
     */
  }, {
    key: "_fromStorage",
    value: function _fromStorage() {
      var _this2 = this;
      ['passKey', 'passTicket', 'uin'].forEach(function (key) {
        wx.getStorage({
          key: key,
          success: function success(res) {
            _this2[key] = res.data;
          }
        });
      });
    }
  }, {
    key: "_autoUpdate",
    value: function _autoUpdate() {
      var _this3 = this;
      if (this._timer) {
        clearTimeout(this._timer);
        this._timer = 0;
      }
      // @ts-ignore
      this._timer = setTimeout(function () {
        if (_this3._isTimeout() && !_this3._isLoading) {
          _this3.update();
        }
        _this3._autoUpdate();
      }, 60 * 1000);
    }

    /**
     * 是否超时
     */
  }, {
    key: "_isTimeout",
    value: function _isTimeout() {
      return this.updateTime + PassState.TIMEOUT < Date.now();
    }
  }]);
  return PassState;
}();
PassState.TIMEOUT = 60 * 60 * 1000;
/* harmony default export */ __webpack_exports__["default"] = (new PassState());

/***/ }),

/***/ "./src/plugin/utils/util.ts":
/*!**********************************!*\
  !*** ./src/plugin/utils/util.ts ***!
  \**********************************/
/*! exports provided: uuid, shopAppid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopAppid", function() { return shopAppid; });
var uuid = function uuid() {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  // eslint-disable-next-line no-bitwise
  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = '-';
  s[13] = '-';
  s[18] = '-';
  s[23] = '-';
  return s.join('');
};
var accountInfo = wx.getAccountInfoSync();
var shopAppid = accountInfo.miniProgram.appId;

/***/ })

},
"entries": [["./src/plugin/index.ts",0]]
},
]);