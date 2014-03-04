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
/**
 * 
 * @param {Roller} roller
 * @param {Character} shooter
 * @param {Character} target
 * @param {Number} dice
 * @returns {undefined}
 */
RollResolutor.prototype.damage = function (roller, shooter, target, dice) {
    var succesShoot = this.shoot(roller, shooter, target, dice);
    var penetrateArmor = 8;
    var noPenetrateArmor = 9;
    if (succesShoot == 'success'){
        this.armorPenetration(roller, shooter, target, noPenetrateArmor);
        this.armorPenetration(roller, shooter, target, penetrateArmor);
    }else if(succesShoot == 'critical'){
        this.armorPenetration(roller,shooter,target, 0);
    }
    
};