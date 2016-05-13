function Circle(x, y, r){
	function r_Squared() {
		return Math.pow(r, 2);
	}
	
	function area() {
		return Math.PI * r_Squared();
	}
	
	return {
		area : area
	};
	
}

module.exports = Circle;   // 만든 모듈을 올릴때