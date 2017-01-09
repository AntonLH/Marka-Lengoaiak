function bakoiti_bikoiti(zenb){
	if (zenb%2===0){
	alert("bikoiti");
	}
	else {
	alert("bakoiti");
}
}
function zenbaki_lehena(zenbaki) {
  if (zenbaki===1)  
  {  
    return false;  
  }  
  else if(zenbaki === 2)  
  {  
    return true;  
  }else  
  {  
    for(var x = 2; x < zenbaki; x++)  
    {  
      if(zenbaki % x === 0)  
      {  
        return false;  
      }  
    }  
    return true;    
  }  
}  
alert(zenbaki_lehena(7));
bakoiti_bikoiti(4);

var hamartarra=23.54;
var d = hamartarra.toPrecision(10);
alert(d);
if (hamartarra!==hamartarra.toPrecision(4)) {
	alert("Lau hamartar izan behar ditu");
	hamartarra=prompt("sartu lau hamartar dituen zenbakia");
	
}