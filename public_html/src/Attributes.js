var Attributes = function () {
    this._concentration = 0;
    this._resistance = 0;
};

/**
 *
 * @param {number} value
 * @returns {Attributes}
 */
Attributes.prototype.setConcentration = function (value) {
    this._concentration = value;
    return this;
};

Attributes.prototype.getConcentration = function () {
    return this._concentration;
};

Attributes.prototype.setResistance = function (value) {
    this._resistance = value;
    return this;
};

Attributes.prototype.getResistance = function () {
    return this._resistance;

};



