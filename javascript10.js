function palindromoa(testua) {
testua=testua.toLowerCase();
var array=testua.split("");
var array2=testua.split("");
alert(array.length);
array=array.reverse();
var i=0;
var kontadorea=0;
while (i<array.length){
if (array[i]===array2[i]) {
	kontadorea++;
}
i++;
}

if (kontadorea===array.length) {
	alert("palindromoa da");
}
else {
	alert("ez da palindromoa");
}
}
palindromoa("aUtoreerotua");