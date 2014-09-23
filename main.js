var Test = require('vz.test');

require('ebjs.basic');

new Test('Number',function(){
  require('./main/Number.js');
});

new Test('Boolean',function(){
  require('./main/Boolean.js');
});

new Test('String',function(){
  require('./main/String.js');
});

new Test('Object',function(){
  require('./main/Object.js');
});

new Test('Array',function(){
  require('./main/Array.js');
});

new Test('null',function(){
  require('./main/null.js');
});

new Test('undefined',function(){
  require('./main/undefined.js');
});

