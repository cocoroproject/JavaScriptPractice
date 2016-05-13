var communityService = require('../domain/CommunityService').CommunityService;
var SocialPerson = require('../domain/SocialPerson').constructor;


exports.index = function(req, res){
	var communities = communityService.findAllCommunities();
	res.render('community/index', {
		title : '가산동 커뮤니티',
		communities: communities
	});	
};


exports.open = function(req, res){
	res.render('community/open', {
		title: '커뮤니티 개설하기'			
	});
};

var adminPerson = new SocialPerson("aa@kosta.com","박찬호","1234");


exports.create = function(req, res){
	communityService.registCommunity(req.param('name') ,
		                       req.param('desc'), adminPerson);
	res.redirect(302, '/community');
};

exports.join = function(req, res){
	console.log('k1');
	var community = communityService.findCommunity(req.param('id'));
	res.render('community/join', {
		community : community
	});
};

exports.memberCreate = function(req, res){
	var person = new SocialPerson(req.param('email'),
			req.param('name'), req.param('password'));
	
	communityService.joinAsMember(req.param('communityId'),
			person);
	res.redirect(302, '/community');
};











