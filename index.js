var PromiseStatus;
(function (PromiseStatus) {
  PromiseStatus["pending"] = "pending";
  PromiseStatus["fulfilled"] = "fulfilled";
  PromiseStatus["reject"] = "rejected";
})(PromiseStatus || (PromiseStatus = {}));
var CustomePromise = /** @class */ (function () {
  function CustomePromise(func) {
    var _this = this;
    this.thenFunc = function () {
      return _this;
    };
    this.catchFunc = function () {
      return _this;
    };
    return func(this.resolve.bind(this), this.reject.bind(this));
  }
  CustomePromise.prototype.resolve = function (data) {
    var _this = this;
    setTimeout(function () {
      return _this.thenFunc(data);
    }, 0);
  };
  CustomePromise.prototype.reject = function (error) {
    var _this = this;
    setTimeout(function () {
      return _this.catchFunc(error);
    }, 0);
  };
  CustomePromise.prototype.then = function (onResolved, onRejected) {
    if (onResolved) {
      this.thenFunc = onResolved;
    }
    if (onRejected) {
      this.catchFunc = onRejected;
    }
    return this;
  };
  CustomePromise.prototype["catch"] = function (onRejected) {
    return this.then(null, onRejected);
  };
  return CustomePromise;
})();
var req = new Promise(function (resolve, reject) {
  resolve("lol");
  reject("kek");
});
req
  .then(function (res, rej) {
    if (rej === void 0) {
      rej = null;
    }
    console.log(res, rej);
    return "second";
  })
  .then(function (res) {
    console.log(res);
  })
  ["catch"](function (err) {
    console.error(err);
  });
