var UTILS_MODULE = (function() {
    return {
        calculateDistance : function(x0, y0, x, y) {
            return Math.sqrt(Math.pow((x0 - x), 2) + Math.pow((y0 - y), 2));
        },
        createParticles : function(x, y, canvas) {
            for(let i = 0; i < PARTICLES_COUNT; i++) {
                FIREWORKS_MODULE.addParticle(new Particle(x, y, canvas));
            }
        },
        random : function(min, max) {
            return Math.floor((Math.random() * (max - min))) + min;
        }
    }
})();