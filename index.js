var now = require('./now');

module.exports = function(fn, duration, cb) {
  var start = now();

  fn(function() {
    var d = now() - start;
  
    if(d < duration) return setTimeout(cb, duration - d);
    cb();
  });
};
