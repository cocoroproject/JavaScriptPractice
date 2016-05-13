function printA() {
	console.log("A");
}

function printB() {
	console.log("B");
}

function printC() {
	console.log("C");
}

module.exports.viewA = printA;
module.exports.viewB = printB;
module.exports.viewC = printC;