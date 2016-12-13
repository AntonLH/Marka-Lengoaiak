var balioak = [true, 5, false, "kaixo", "agur", 2];

var array= [33, 2, 36, 55, 4, 1];

var miArray=['Moto', 'soto', 'Abaco', 'abeja', 'Sapo', 'nieve', 'Zumba', 'barco'];

miArray


if (balioak[3]>balioak[4]) {
	alert(balioak[3]);
}
else {
	alert(balioak[4]);
}
alert(balioak[0]==balioak[2]);
alert(balioak[0]!=balioak[2]);
alert(balioak[1]-balioak[5]);
alert(balioak[1]+balioak[5]);
alert(balioak[1]*balioak[5]);
alert(balioak[1]/balioak[5]);


alert(array);

var mayoramenor=array.sort(function(a, b){return a - b}); 

alert(mayoramenor);

var menoramayor=array.sort(function(a, b){return b - a});

alert(menoramayor);

for (var i = 0; i < miArray.length; i++) {
	miArray[i]=miArray[i].toLowerCase();
}
alert(miArray.sort());