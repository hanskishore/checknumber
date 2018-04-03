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
        return Math.sqrt(x);
       }
       return false;
    }    
    return false;
  }
}
