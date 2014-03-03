describe('Weapon', function () {

    it('weapon get modificator on distances', function () {
        var pistol = new Weapon();

        pistol.setRange(new WeaponRange(1, 0, -3));

        expect(pistol.getRange().far).toBe(-3);
        expect(pistol.getRange().short).toBe(1);
        expect(pistol.getRange().middle).toBe(0);


    });


});