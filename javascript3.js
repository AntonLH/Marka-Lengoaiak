 var hilabeteak = new Array("URTARRILA","OTSAILA","MARTXOA","APIRILA","MAIATZA","EKAINA","UZTAILA","ABUZTUA","IRAILA","URRIA","AZAROA","ABENDUA"); 
 var array= new Array(1,2,3,4,5,6,7,8,9,10);
 var cont=0;
 while (cont<12){
 	alert(hilabeteak[cont]);
 	cont++;
 }
 var gehiketa=0;
 var cont2=0;
 var maximoa=0; 
 var minimoa=10;
  while (cont2<10){
  	if (array[cont2]>maximoa) {
  			maximoa=array[cont2];
  	}
   if (array[cont2]<minimoa) {
  			minimoa=array[cont2];
  	}
  	gehiketa=gehiketa+array[cont2];
  	alert(gehiketa);
 	cont2++;
 }
 gehiketa=gehiketa/10;
 alert(minimoa);
 alert(maximoa);
 alert(gehiketa);