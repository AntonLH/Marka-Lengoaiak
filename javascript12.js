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
document.getElementById("tiketa").value="Zbkia\tProduktua\tKopurua\t\tSalneurria\tZenbatekoa\n";
}

document.getElementById("tiketa").value=document.getElementById("tiketa").value+lerroa;

zenbakia++;
document.getElementById("zenbaki").value=zenbakia;
}

document.getElementById("faktura").addEventListener("click", faktura);

function faktura() {
var guztizkoa=0;
var BEZ=document.getElementById("BEZ").value;
document.write("<h1>Erosketen Faktura</h1>");

document.write("<table border=\"1\"><tr><th>Zbkia</th><th>Produktua</th><th>Salneurria</th><th>Kopurua</th><th>Zenbatekoa</th></tr>");
 for(var i=0;i<zenbakia-1;i++) {
 document.write("<tr>");
 
 document.write("<td>"+parseInt(i+1)+"</td>");
 for(var j=0;j<4;j++) {
  document.write("<td>");
        document.write(erosketak[i][j]);
        if(j==3) guztizkoa+=parseInt(erosketak[i][3]);
        document.write("</td>");
        }
 document.write("</tr>"); 
 } 
document.write("</table>");

document.write("<table border=\"1\"><tr><th>Bez: %"+BEZ+"</th><th>Guztizkoa</th></tr>");
guztizkoa+=guztizkoa*BEZ/100;
document.write("<tr><th>"+(guztizkoa*BEZ/100).toFixed(2)+"</th><th>"+guztizkoa.toFixed(2)+"</th></tr>");
document.write("</table>");
 
}