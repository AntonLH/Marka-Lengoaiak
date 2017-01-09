var letrak = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var NAN = prompt("Sartu zure NANa");
var batura=0;
var aux=NAN;
 if (NAN>0&&NAN<99999999) {
 	while(NAN>0)
     {
       batura=batura+NAN%10;
       NAN=Math.floor(NAN/10);
      }
alert("NANa hau da: "+aux+letrak[batura]);
}