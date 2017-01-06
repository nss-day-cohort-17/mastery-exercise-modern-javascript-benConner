var battleBots = battleBots || {};
battleBots.Model = {};
//
// attackBot{
//     lasersword
//     aromr
// }
//
// stealthBot{
//     laserdagger
//     movement faster
//     light aromr
// }
//
// heavy attackBot{
//     laserbattle axe
//     heavy steal armor
//     movement slow
//
// }

////////////////////////////////
// Stealthy model and types //
////////////////////////////////

battleBots.Model.Stealthy  = function() {
 this.name = "Stealthy";
 this.stealthy = true;
 this.healthBonus = this.healthBonus - 10;
 this.strengthBonus = this.strengthBonus - 20;
 this.stealthMovement = this.stealthMovement + 20;
};
battleBots.Model.Stealthy.prototype = new battleBots.robot.player();

battleBots.Model.sniper = function() {
  this.name = "Sniper Robot";
  this.weapon = "Sniper Rifle"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
};
battleBots.Model.sniper.prototype = new battleBots.Model.Stealthy();

battleBots.Model.Ninja = function() {
  this.name = "Ninja Robot";
  this.weapon = "Laser Dagger"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
};
battleBots.Model.Ninja.prototype = new battleBots.Model.Stealthy();

battleBots.Model.Assassin = function() {
  this.name = "Assassin Robot";
  this.weapon = "Hidden Laser Blade"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
  this.specialAttack = Math.random()
};
battleBots.Model.Assassin.prototype = new battleBots.Model.Stealthy();

////////////////////////////////
// Soldier model and types //
////////////////////////////////


battleBots.Model.Soldier = function() {
 this.name = "Soldier";
 this.stealthy = true;
 this.healthBonus = this.healthBonus + 10;
 this.strengthBonus = this.strengthBonus + 10;
 this.stealthMovement = this.stealthMovement - 10;
};
battleBots.Model.Soldier.prototype = new battleBots.robot.player();

battleBots.Model.Infantry = function() {
  this.name = "Infantry Robot";
  this.weapon = "Laser Rifle"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.stealthBonus = this.stealthBonus + 5;
};
battleBots.Model.Infantry.prototype = new battleBots.Model.Soldier();

battleBots.Model.Knight = function() {
  this.name = "Knight Robot";
  this.weapon = "Laser Sword"
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus + 10;
  this.stealthBonus = this.stealthBonus + 10;
};
battleBots.Model.Knight.prototype = new battleBots.Model.Soldier();

battleBots.Model.SpecialForces = function() {
  this.name = "Special Forces Robot";
  this.weapon = "Laser Bow"
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 15;
  this.stealthBonus = this.stealthBonus + 10;
  this.specialAttack = Math.random()
};
battleBots.Model.SpecialForces.prototype = new battleBots.Model.Soldier();

////////////////////////////////
// Juggernaut model and types //
////////////////////////////////


battleBots.Model.Juggernaut  = function() {
 this.name = "Juggernaut";
 this.stealthy = true;
 this.healthBonus = this.healthBonus + 50;
 this.strengthBonus = this.strengthBonus + 20;
 this.stealthMovement = this.stealthMovement - 40;
};
battleBots.Model.Juggernaut.prototype = new battleBots.robot.player();

battleBots.Model.HeavyPistol = function() {
  this.name = "Heavy Pistol Robot";
  this.weapon = "Heavy Laser Pistol"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
};
battleBots.Model.HeavyPistol.prototype = new battleBots.Model.Juggernaut();

battleBots.Model.HeavyArmed = function() {
  this.name = "Heavy Armed Robot";
  this.weapon = "Laser Axe"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
};
battleBots.Model.HeavyArmed.prototype = new battleBots.Model.Juggernaut();

battleBots.Model.HeavyHitter = function() {
  this.name = "Heavy Hitter Robot";
  this.weapon = "Wreaking Ball"
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.stealthBonus = this.stealthBonus + 30;
  this.specialAttack = Math.random()
};
battleBots.Model.HeavyHitter.prototype = new battleBots.Model.Juggernaut();
