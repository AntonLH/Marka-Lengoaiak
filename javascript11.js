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
 		
 	