function palindromoa(testua) {
testua=testua.toLowerCase();
var testua2="";
for (i in testua) {
	if(testua[i]!=" "){
		testua2+=testua[i];
}
}
var array=testua2.split("");
var array2=testua2.split("");
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
palindromoa("Nik enara neraman amaren aranekin");