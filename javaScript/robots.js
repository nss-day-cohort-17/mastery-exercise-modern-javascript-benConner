var battleBots = battleBots || {};
battleBots.robot = {};

battleBots.robot.player = function(name) {
  this.model = null;
  this.type = null;
  this.weapon = null;
  this.movement = null;
  this.armor = null;

  this.playerName = name || "Nameless Robot";
  this.health = Math.floor(Math.random() * 40 + 100);
  this.strength = 90;
  };
