var n=6;
var res = 1;
  for(var i=n; i>=1; i--){
    res = res * i;
  }
alert(res);

function faktoriala(n) {
    if (n=0) return 1;
    return n* faktoriala(n-1);
}

alert(faktoriala(5));