describe('Shooting be carefull', function () {

    function getSoldier () {
        var soldier = new Character();
        var attributes = new Attributes();
        attributes.setConcentration(11);
        attributes.setResistance(9);
        soldier.setAttributes(attributes);

        soldier.setWeapon(getRifle());
        soldier.setArmor(1);
        return soldier;
    }

    function getRifle () {
        var rifle = new Weapon();
        rifle.setPower(14);
        rifle.setRange(new WeaponRange(0, 3, -2));
        return rifle;
    }

    it('shoot', function () {
        var shooter = getSoldier();
        var target = getSoldier();
        var map = new Map();
        //var roller = new Roller(map);

        shooter.setPosition(new Position(0, 0));
        target.setPosition(new Position(0, 55));

        var rollResolutor = new RollResolutor();

        expect(rollResolutor.shoot(shooter, target, 20)).toBe('fail');
        //expect(rollResolutor.shoot(shooter, target, 7)).toBe('success');
        //expect(rollResolutor.shoot(shooter, target, 14)).toBe('critical');
        //expect(rollResolutor.shoot(shooter, target, 15)).toBe('critical');



    });
});



