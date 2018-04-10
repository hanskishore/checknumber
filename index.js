'use strict';
module.exports = {
  isNumber: function(n){
    if(isNaN(parseFloat(n))){
      return false;
    }
    if(isFinite(n)){
      return true;
    }
    
    return false;
  },
  isSquare: function(n){
    if(module.exports.isNumber(n)){
      var x = parseFloat(n);
      if(x >= 0){
        return Math.sqrt(x) % 1 === 0;
       }
       return false;
    }    
    return false;
  },
  isPrime: function(n){
    if(module.exports.isNumber(n)){
      if(n < 2) return false;
      if(n%2 == 0) return (n === 2);
      if(n%3 == 0) return (n === 3);

      var m = Math.sqrt(n);
      for(var i = 5; i<= m; i += 6){
        if(n % i==0) return false;
        if(n % (i + 2) ==0) return false;
      }
      return true;
    }
    return false;
  },
  lowestFactor: function(n){
    if(module.exports.isNumber(n)){
      if(n==0) return 0;
      if(n%2 === 0) return 2;
      if(n%3 === 0) return 3;
      if(n%5 === 0) return 5;

      var m = Math.sqrt(n);
      for(var i= 7; i<= m; i+= 30){
        if(n%i ==0) return i;
        if(n%(i + 4) ==0 ) return (i + 4);
        if (n%(i+6)==0)  return (i+6);
        if (n%(i+10)==0) return (i+10);
        if (n%(i+12)==0) return (i+12);
        if (n%(i+16)==0) return (i+16);
        if (n%(i+22)==0) return (i+22);
        if (n%(i+24)==0) return (i+24);
      }
    }
    return NaN;
  }
}
