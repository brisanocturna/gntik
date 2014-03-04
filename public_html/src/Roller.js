var Roller = function (map) {
    this._map = map;
};

/**
 *
 * @param {Character} shooter
 * @param {Character} target
 * @returns {number}
 */
Roller.prototype.shootSuccesValue = function (shooter, target) {
    var attribute = shooter.getAttributes().getConcentration();
    return attribute + this._distanceBonus(shooter, target);
};

/**
 *
 * @param {Character} shooter
 * @param {Character} target
 * @returns {number}
 */
Roller.prototype._distanceBonus = function (shooter, target) {
    var distance = this._map.getDistance(shooter, target);
    return shooter.getWeapon().getRange()[distance];
};

/**
 *
 * @param {Character} shooter
 * @param {Character} target
 * @returns {number}
 */
Roller.prototype.armorSuccessValue = function (shooter, target) {
    var pow = shooter.getWeapon().getPower();
    return pow - this._getComputedArmor(target);
};

/**
 *
 * @param {Character} defender
 * @returns {Number}
 */
Roller.prototype._getComputedArmor = function (defender) {
    return this._getBaseArmor(defender) + defender.getArmor();
};

/**
 *
 * @param {Character} defender
 * @returns {Number}
 */
Roller.prototype._getBaseArmor = function (defender) {
    return Math.floor(defender.getAttributes().getResistance() / 2);
};
