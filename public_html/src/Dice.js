var Dice = function (){
    this._result=0;
};

Dice.prototype.Roll = function(faces){
   this._result = Math.floor((Math.random()*faces)+1);
   return this._result;
};
