function palindromoa(testua) {
var array=testua.split("");
alert(array.length);
if (array===array.reverse()) {
	alert("palindromoa da");
}

palindromoa("aabbaa");