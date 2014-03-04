describe ('tirada entre 1 y 20', function(){
   
    it ('random 1 y 20', function (){
        var dice = new Dice;
        for(i=0; i<8000; i++)
        var caras =20;
        expect (dice.Roll(caras)).toBeLessThan(21);
        expect (dice.Roll(caras)).toBeGreaterThan(0);
    });
});


