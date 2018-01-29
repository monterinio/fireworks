var FIREWORKS_MODULE = (function() {

    var
        fireworkArray = [],
        particles = [];

    return {
        addFirework : function(firework) {
            fireworkArray.push(firework);
        },
        deleteFirework : function(index) {
            fireworkArray.splice(index,1);
        },
        resetFireworks : function() {
            fireworkArray = [];
        },
        getFireworks : function() {
            return fireworkArray;
        },
        getFireworkLength : function() {
            return fireworkArray.length;
        },
        addParticle : function(particle) {
            particles.push(particle);
        },
        deleteParticle : function(index) {
            particles.splice(index,1);       
        },
        getParticles : function() {
            return particles;
        },
        getParticleLength : function() {
            return particles.length;
        }
    }
})();