var Weapon = function () {
    this._range = new WeaponRange();
    this._power = 0;
};

Weapon.prototype.setRange = function (range) {
    this._range = range;
};

Weapon.prototype.getRange = function () {
    return this._range;
};

Weapon.prototype.setPower = function (power) {
    this._power = power;
};

Weapon.prototype.getPower = function () {
    return this._power;
};

