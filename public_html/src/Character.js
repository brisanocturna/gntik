/**
 * @class Character
 * @returns {Character}
 */
var Character = function () {
    this._position = new Position(0, 0);
    this._attributes = null;
    this._weapon = null;
    this._armor = 0;
};


/**
 *
 * @param {Position} position
 * @returns {undefined}
 */
Character.prototype.setPosition = function (position) {
    this._position = position;
    return this;
};

Character.prototype.getPosition = function () {
    return this._position;
};

/**
 *
 * @param {Attributes} attributes
 * @returns {Character}
 */
Character.prototype.setAttributes = function (attributes) {
    this._attributes = attributes;
    return this;
};

/**
 *s
 * @returns {Character}
 */
Character.prototype.getAttributes = function () {
    return this._attributes;
};

Character.prototype.setWeapon = function (weapon) {
    this._weapon = weapon;
    return this;
};

/**
 *
 * @returns {Weapon}
 */
Character.prototype.getWeapon = function () {
    return this._weapon;
};

Character.prototype.setArmor = function (value) {
    this._armor = value;
    return this;
};

Character.prototype.getArmor = function () {
    return this._armor

};