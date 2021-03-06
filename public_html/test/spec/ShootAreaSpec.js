describe('Shooting be carefull', function () {

    function getSoldier () {
        var soldier = new Character();
        var attributes = new Attributes();
        attributes.setConcentration(11);
        attributes.setResistance(9);
        soldier.setAttributes(attributes);
        
        soldier.setLife(4);

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

    it('shoot success', function () {
        var shooter = getSoldier();
        var target = getSoldier();
        var map = new Map();
        var roller = new Roller(map);

        shooter.setPosition(new Position(0, 0));
        target.setPosition(new Position(0, 55));

        var rollResolutor = new RollResolutor();

        expect(rollResolutor.shoot(roller, shooter, target, 7)).toBe('success');
    });
    
    it('shoot critical', function () {
        var shooter = getSoldier();
        var target = getSoldier();
        var map = new Map();
        var roller = new Roller(map);

        shooter.setPosition(new Position(0, 0));
        target.setPosition(new Position(0, 55));

        var rollResolutor = new RollResolutor();

        
        expect(rollResolutor.shoot(roller, shooter, target, 14)).toBe('critical');
    });
    
    it('shoot fail', function () {
        var shooter = getSoldier();
        var target = getSoldier();
        var map = new Map();
        var roller = new Roller(map);

        shooter.setPosition(new Position(0, 0));
        target.setPosition(new Position(0, 55));

        var rollResolutor = new RollResolutor();

        expect(rollResolutor.shoot(roller, shooter, target, 20)).toBe('fail');
        expect(rollResolutor.shoot(roller, shooter, target, 15)).toBe('fail');
    });
    it('shoot pentrate armor?', function () {
        var shooter = getSoldier();
        var target = getSoldier();
        var map = new Map();
        var roller = new Roller(map);

        shooter.setPosition(new Position(0, 0));
        target.setPosition(new Position(0, 55));

        var rollResolutor = new RollResolutor();

        expect(rollResolutor.armorPenetration(roller, shooter, target, 9)).toBe('no damage');
        expect(rollResolutor.armorPenetration(roller, shooter, target, 8)).toBe('damage');
    });
    it('shoot with damage', function () {
        var shooter = getSoldier();
        var target = getSoldier();
        var map = new Map();
        var roller = new Roller(map);

        shooter.setPosition(new Position(0, 0));
        target.setPosition(new Position(0, 55));

        var rollResolutor = new RollResolutor();

        expect(rollResolutor.damage(roller, shooter, target, 7)).toBe('damage');
        expect(rollResolutor.damage(roller, shooter, target, 14)).toBe('damage critical');
    });
    
});



