var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

            var sources = creep.room.find(FIND_SOURCES);

            Game.rooms['sim'].find(FIND_MY_CREEPS, {filter: (c) => c.memory.role === "harvester" && c.target === sources.id})
            


            creep.memory.sources = sources[0]
            var target = sources[0]

            



          //  var creepCountAtSource = _.filter(Game.creeps, creep => creep.memory.sources == test).length



            if(creep.harvest(target) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
            }

	}
};

module.exports = roleHarvester;
