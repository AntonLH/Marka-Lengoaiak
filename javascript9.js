function funtzioa(testua){
if (testua===testua.toUpperCase()) {
	alert("Denak maiuskulak");
}
else if (testua===testua.toLowerCase()) {
	alert("Denak minuskulak");
}
else {
	alert("Nahasiak");
}
}

funtzioa("aaa");


document.getElementById("botoia").addEventListener("click", testua_hartu);
function funtzioa2() {
var balioa = document.getElementById("paragrafoa").value;
var array=balioa.split(" ");
alert(array.length);
alert(array[0]);
alert(array[array.length-1]);
array.reverse();
alert(array);
array.sort();
alert(array);
array.reverse();
alert(array);
}