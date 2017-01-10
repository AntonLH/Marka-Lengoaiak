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
alert(zenbaki_lehena(5));
bakoiti_bikoiti(4);
