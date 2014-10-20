var test = require('vz.test'),
    walk = require('vz.walk');

require('ebjs.basic');

module.exports = walk(function*(){
  
  yield test('Number',function*(){
    yield require('./main/Number.js');
  });
  
  yield test('Boolean',function*(){
    yield require('./main/Boolean.js');
  });
  
  yield test('String',function*(){
    yield require('./main/String.js');
  });
  
  yield test('Object',function*(){
    yield require('./main/Object.js');
  });
  
  yield test('Array',function*(){
    yield require('./main/Array.js');
  });
  
  yield test('null',function*(){
    yield require('./main/null.js');
  });
  
  yield test('undefined',function*(){
    yield require('./main/undefined.js');
  });
  
});

