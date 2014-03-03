var Position = function (x, y) {
    this.x = x;
    this.y = y;
};

/**
 *
 * @param {Position} position
 * @returns {undefined}
 */
Position.prototype.getDistance = function (position) {

    var xs = this.x - position.x;
    var xs = xs * xs;

    var ys = this.y - position.y;
    var ys = ys * ys;

    return Math.sqrt(xs + ys);
};





