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

salneurria=aukeratutakoAukera.value;

totala= (salneurria*kopurua).toFixed(2);

erosketak[zenbakia-1][0]=izena;
erosketak[zenbakia-1][1]=salneurria;
erosketak[zenbakia-1][2]=kopurua;
erosketak[zenbakia-1][3]=totala;

lerroa=zenbakia+"\t"+izena+"\t\t"+kopurua+"\t\t"+salneurria+"\t\t"+totala+"\n";

if(zenbakia==1){
idaztekoa="Zbkia\tProduktua\tKopurua\t\tSalneurria\tZenbatekoa\n";
document.getElementById("tiketa").value=idaztekoa;
}

document.getElementById("tiketa").value=document.getElementById("tiketa").value+lerroa;

zenbakia++;
document.getElementById("zenbaki").value=zenbakia;
}

document.getElementById("faktura").addEventListener("click", faktura);

function faktura() {

document.write("<h2>Erosketen faktura</h2>");
document.write("<table><tr><th>Zbkia</th><th>Produktua</th><th>Salneurria</th><th>Kopurua</th><th>Zenbatekoa</th></tr>");
document.write("</table>");
document.write("<table><tr><th>BEZ=%"+BEZ+"</th><th>Guztizkoa</th></tr>");
document.write("</table>");
}