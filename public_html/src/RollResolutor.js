var RollResolutor = function () {

};
/**
 * 
 * @param {Roller} roller
 * @param {Character} shooter
 * @param {Character} target
 * @param {Number} dice
 * @returns {undefined}
 */
RollResolutor.prototype.shoot = function (roller, shooter, target, dice) {
    var successValue = roller.shootSuccesValue(shooter, target);
    if (dice > successValue){
        return 'fail';
    }else if (dice === successValue){
        return 'critical';
    }
        return 'success';
    
};
/**
 * 
 * @param {Roller} roller
 * @param {Character} shooter
 * @param {Character} target
 * @param {Number} dice
 * @returns {undefined}
 */
RollResolutor.prototype.armorPenetration = function (roller, shooter, target, dice) {
    var successValue = roller.armorSuccessValue(shooter, target);
    if (dice >= successValue){
        return 'no damage';
    }
        return 'damage';
    
};