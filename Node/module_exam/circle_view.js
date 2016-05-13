var circle = require('./circle');   // 리콰이어안에 들어가는건 함수이름이 아니라 파일이름이다.

var circlefun = circle(5, 5, 5);

console.log(circlefun.area());