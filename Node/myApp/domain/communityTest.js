var SocialPerson = require('./SocialPerson').constructor;
var Community = require('./Community').constructor;
// 가산동 주민 1명 생성
// 주민 출력
var person1 = new SocialPerson("aa@aa.com", "홍길동", "1234");
var person2 = new SocialPerson("bb@bb.com", "박찬호", "1212");

//person1.show();
//person2.show();
// 커뮤니티 생성 
// 커뮤니티 회원 2명 가입
// 커뮤니티 내용(회원목록)을 출력

var Community1 = new Community("자바스터디","하드코딩합시다", person1);
//Community1.addMember(person2);
//Community1.show();

//커뮤니티에서 회원 탈퇴
//커뮤니티 출력
//회원수 출력

//Community1.removeMember(person2.getId);
//Community1.show();
//console.log(Community1.getMemberCount());