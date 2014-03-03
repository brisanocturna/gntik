describe('Battle', function () {

    describe('having an attaker and defender', function () {
        var attaker, defender, map;

        beforeEach(function () {
            map = new Map();
            attaker = new Character();

            defender = new Character();
        });

        function addCharacterToMap () {
            map.add(attaker);
            map.add(defender);

        }

        it('near players should return short distance', function () {

            attaker.setPosition(new Position(0, 0));
            defender.setPosition(new Position(0, 3));
            addCharacterToMap();

            expect(map.getDistance(attaker, defender)).toBe('short');
        });

        it('far players should return far distance', function () {

            attaker.setPosition(new Position(0, 0));
            defender.setPosition(new Position(0, 101));

            addCharacterToMap();

            expect(map.getDistance(attaker, defender)).toBe('far');
        });

        describe('shooting', function () {
            var roller;
            beforeEach(function () {
                roller = new Roller(map);
            });

            it('no skills geting succes value', function () {
                attaker.setPosition(new Position(0, 0));
                defender.setPosition(new Position(0, 3));

                var fooWeapon = new Weapon();
                fooWeapon.setRange(new WeaponRange(1, 0, -3));

                attaker.setWeapon(fooWeapon);

                var attributes = new Attributes();
                attributes.setConcentration(8);
                attaker.setAttributes(attributes);

                expect(roller.shootSuccesValue(attaker, defender)).toBe(9);
            });

            it('armor roll', function () {
                var fooWeapon = new Weapon();

                fooWeapon.setPower(12);

                attaker.setWeapon(fooWeapon);

                var attributes = new Attributes();

                attributes.setResistance(7);
                defender.setAttributes(attributes);
                defender.setArmor(1);

                expect(roller.armorSuccessValue(attaker, defender)).toBe(8);
            });
        });

    });




});


