var Map = function () {
    this._distances = {
        short: 25,
        middle: 100,
        far: 10000
    };
};

/**
 *
 * @param {Character} character
 * @returns {undefined}
 */
Map.prototype.add = function (character) {

};

/**
 *
 * @param {Character} characterA
 * @param {Character} characterB
 * @returns {String}
 */
Map.prototype.getDistance = function (characterA, characterB) {
    var distance = characterA.getPosition().getDistance(characterB.getPosition());

    for (var key in this._distances) {
        var value = this._distances[key];
        if (distance <= value) {
            return key;
        }
    }
    return 'far';
};


