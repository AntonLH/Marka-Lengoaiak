var zenbakia;
var erosketak=new Array(20);
document.getElementById("gorde").addEventListener("click", gorde);
function gorde(){

zenbakia=document.getElementById("zenbaki").value.valueOf();
erosketak[zenbakia-1]=new Array(4);

kopurua = document.getElementById("kopurua").value;

zerrenda = document.getElementById("produktua");
aukeratutakoAukera = zerrenda.options[zerrenda.selectedIndex];
izena=aukeratutakoAukera.text;
if (izena.length<8) tabulatzaileak="\t\t";
 else tabulatzaileak="\t";
salneurria=aukeratutakoAukera.value;

zenbatekoa= (salneurria*kopurua).toFixed(2);

erosketak[zenbakia-1][0]=izena;
erosketak[zenbakia-1][1]=salneurria;
erosketak[zenbakia-1][2]=kopurua;
erosketak[zenbakia-1][3]=zenbatekoa;

lerroa=zenbakia+"\t"+izena+tabulatzaileak+kopurua+"\t\t"+salneurria+"\t\t"+zenbatekoa+"\n";

if(zenbakia==1){
idaztekoa="Zbkia"+"\t"+"Produktua"+"\t"+"Kopurua"+"\t\t"+"Salneurria"+"\t"+"Zenbatekoa"+"\n";
document.getElementById("tiketa").value=idaztekoa;
}

document.getElementById("tiketa").value=document.getElementById("tiketa").value+lerroa;

zenbakia++;
document.getElementById("zenbaki").value=zenbakia;



}
