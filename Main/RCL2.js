var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleHauler = require('role.hauler');

//number of creeps
var harv = 3
var haul = 3
var upgr = 2
var buil = 2


var sEnergy = JSON.stringify(Game.spawns["Spawn1"].energy)


var RCL2 = {

run: function() {
  var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
  console.log('Harvesters: ' + harvesters.length);

  var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
  console.log('Upgraders: ' + upgraders.length);

  var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
  console.log('Builders: ' + builders.length);

  var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler');
  console.log('Haulers: ' + haulers.length);

// spawning count
  if(harvesters.length <= haulers.length) {
      var newName = 'Harvester' + Game.time;
      console.log('Spawning new harvester: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([WORK,MOVE], newName,
          {memory: {role: 'harvester'}});
  }
  else if (haulers.length < haul) {
      var newName = 'Hauler' + Game.time;
      console.log('Spawning new haulers: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([CARRY,MOVE], newName,
          {memory: {role: 'hauler'}});
  }
  else if (upgraders.length < upgr && sEnergy > 200) {
      var newName = 'Upgrader' + Game.time;
      console.log('Spawning new upgraders: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
          {memory: {role: 'upgrader'}});
  }
  else if (builders.length < buil && sEnergy > 200) {
      var newName = 'Builder' + Game.time;
      console.log('Spawning new builders: ' + newName);
      Game.spawns['Spawn1'].spawnCreep([WORK,CARRY,MOVE], newName,
          {memory: {role: 'builder'}});
          }
  



  if(Game.spawns['Spawn1'].spawning) {
      var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
      Game.spawns['Spawn1'].room.visual.text(
          '🛠️' + spawningCreep.memory.role,
          Game.spawns['Spawn1'].pos.x + 1,
          Game.spawns['Spawn1'].pos.y,
          {align: 'left', opacity: 0.8});
  }
  //roles
  for(var name in Game.creeps) {
      var creep = Game.creeps[name];
      if(creep.memory.role == 'harvester') {
          roleHarvester.run(creep);
      }
      if(creep.memory.role == 'upgrader') {
          roleUpgrader.run(creep);
      }
      if(creep.memory.role == 'builder') {
          roleBuilder.run(creep);
      }
      if(creep.memory.role == 'hauler') {
          roleHauler.run(creep);
      }

  }
  //building
var cLevel = Game.rooms['sim'].controller.level
var cState = "RCL" + cLevel
console.log(cState)


if (!Memory.rcl2 && cState == "RCL2") {
  var sCord = Game.spawns.Spawn1.pos
  var x = sCord.x
  var y = sCord.y
  
Game.rooms['sim'].createConstructionSite(x, y + 2, STRUCTURE_EXTENSION);
Game.rooms['sim'].createConstructionSite(x, y + 3, STRUCTURE_EXTENSION);
Game.rooms['sim'].createConstructionSite(x, y + 4, STRUCTURE_EXTENSION);
Game.rooms['sim'].createConstructionSite(x, y + 5, STRUCTURE_EXTENSION);
Game.rooms['sim'].createConstructionSite(x, y + 6, STRUCTURE_EXTENSION);
Memory.rcl2 = true;
}
  }
};



module.exports = RCL2;
