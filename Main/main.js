var RCL2 = require('RCL2');

module.exports.loop = function () {

    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

var sEnergy = JSON.stringify(Game.spawns["Spawn1"].energy)
var cProgress = Game.rooms['sim'].controller.progress
var cProgressTotal = Game.rooms['sim'].controller.progressTotal
console.log("Energy = " + sEnergy)
console.log("Progress = " + cProgress + "/ " + cProgressTotal)






//check RCL


RCL2.run();





}
