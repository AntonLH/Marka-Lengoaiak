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

document.getElementById("botoia").addEventListener("click", funtzioa2);
function funtzioa2() {
var a=0;
var e=0;
var i=0;
var o=0;
var u=0;
var j=0;
	var balioa = document.getElementById("paragrafoa").value;
	var array2=balioa.split("");

	while (j<array2.length){
		if (array2[j]==="a") {
			a=a+1;		
		}
		else if (array2[j]==="e") {
			e=e+1;		
		}
		else if (array2[j]==="i") {
			i=i+1;		
		}
		else if (array2[j]==="o") {
			o=o+1;		
		}
		else if (array2[j]==="u") {
			u=u+1;		
		}
		j++;
	}
	alert("a letra "+a+" aldiz agertzen da");
	alert("e letra "+e+" aldiz agertzen da");
	alert("i letra "+i+" aldiz agertzen da");
	alert("o letra "+o+" aldiz agertzen da");
	alert("u letra "+u+" aldiz agertzen da");
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