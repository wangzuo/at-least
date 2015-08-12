# at-least
Some function just run too fast

### Usage
``` javascript
var least = require('at-least');

least(function(cb) {
  $.get('/data.json', function() {
    cb();
  });
}, 1000, function() { // invoked after at least 1000ms
  console.log('done');
});
```
### License
ISC
