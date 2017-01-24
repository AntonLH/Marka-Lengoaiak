document.getElementById("emaitza").addEventListener("click", funtzioa);
function funtzioa() {
	var emaitza=0;
	var balioa = document.getElementById("testua").value;
 	var x = document.getElementById("peri").checked;
  	var y = document.getElementById("azal").checked;
 	alert(balioa);
 	if (x===true) {
 		emaitza=balioa*(Math.PI*2);
 	}
 	else if (y===true) {
 		emaitza=Math.PI*Math.pow(balioa, 2);
 	}
 	document.getElementById("paragrafoa").value=emaitza;
 }
 
 
 document.getElementById("zatiketa").addEventListener("click", zatiketa);
 function zatiketa() {
	var emaitza=0;
	var i=1;
	var zenbakia = document.getElementById("zenbakia").value;
	while (i<11){
	emaitza=zenbakia+" / "+i+" = "+(zenbakia/i)+"\n";
	document.getElementById("paragrafoa2").value=document.getElementById("paragrafoa2").value+emaitza;
 	i++;
 }
 }
 
 
document.getElementById("biderketa").addEventListener("click", biderketa);
function biderketa() {
	var emaitza=0;
	var i=1;
	var zenbakia = document.getElementById("zenbakia").value;
	while (i<11){
	emaitza=zenbakia+" x "+i+" = "+(zenbakia*i)+"\n";
	document.getElementById("paragrafoa2").value=document.getElementById("paragrafoa2").value+emaitza;
 	i++;
 }
 }
 	