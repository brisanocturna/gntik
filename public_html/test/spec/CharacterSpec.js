describe('Character', function () {

    it('character have concentration', function () {
        var attributes = new Attributes();
        attributes.setConcentration(8);

        var character = new Character();
        character.setAttributes(attributes);

        expect(character.getAttributes().getConcentration()).toBe(8);
    });

});


