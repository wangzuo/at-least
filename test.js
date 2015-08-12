var test = require('tape');
var now = require('./now');
var least = require('./');

var eps = 10;

test('finished too fast', function(t) {
  t.plan(1);

  function fn(cb) {
    setTimeout(function() {
      cb();
    }, 200);
  }

  var t1 = now();

  least(fn, 1000, function() {
    var t2 = now();
    t.true(Math.abs(t2-t1-1000) < eps);
  });
});

test('finished not that fast', function(t) {
  t.plan(1);

  function fn(cb) {
    setTimeout(function() {
      cb();
    }, 200);
  }

  var t1 = now();

  least(fn, 100, function() {
    var t2 = now();
    t.true(Math.abs(t2-t1-200) < eps);
  });
});
