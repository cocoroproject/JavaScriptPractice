// var modFile = require('./module_file');

// modFile.fun();

// var modDir = require('./module_dir');   // 폴더 이름을 적어도 폴더안에 있는 package.json 에 의해서 "main" 으로 지정된 모듈만 선택하게 된다.
// modDir.fun();


var modFile = require('module_file3');  // 앞에 ./ 라는 경로 설정을 해줄 필요가없다. 왜냐면 node_modules 폴더에 있기때문.

modFile.fun();

var modDir = require('module_dir2');   // 앞에 ./ 라는 경로 설정을 해줄 필요가없다. 왜냐면 node_modules 폴더에 있기때문.
modDir.fun();

