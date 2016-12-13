var zenbaki1 = 5;
var zenbaki2 = 8;
var zenbaki=0;
var i,j,primo;
document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
for(i=4;i<=100;i++)
{
    primo=0;
    for(j=2;j<i;j++)
    {
	if(i%j==0) primo=1;
    }
    if (primo==0) {document.write(i); document.write('<br>');}
}
if(zenbaki1<zenbaki2) {
  alert("zenbaki1 ez da zenbaki2 baino handiagoa");
}
if(zenbaki2>0) {
  alert("zenbaki2 positiboa da");
}
if(zenbaki1<0||zenbaki1!=0) {
  alert("zenbaki1 negatiboa edo ezberdin zero da");
}
if(zenbaki1+1<zenbaki2) {
  alert("zenbaki1 batean handituta ez du zenbaki2-ren berdin edo handiago egiten");
}
