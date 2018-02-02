var FIREWORKS_MODULE = (function() {

    var
        fireworkArray = [],
        fireworkBasicArray = [],
        particles = [];

    return {
        addFirework : function(firework) {
            fireworkArray.push(firework);
        },
        deleteFirework : function(index) {
            fireworkArray.splice(index,1);
        },
        addFireworks : function() {
            for(let i = 0; i < fireworkBasicArray.length; i++) {
                fireworkArray.push(fireworkBasicArray[i]);
            }
        },
        resetFireworks : function() {
            fireworkArray = [];
            for(let i = 0; i < fireworkBasicArray.length; i++) {
                fireworkBasicArray[i].reset();
            }
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
        },
        initializeFireworks : function(canvas) {
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.20, canvas.height * 0.24)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.25, canvas.height * 0.23)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.35, canvas.height * 0.22)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.40, canvas.height * 0.205)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.50, canvas.height * 0.20)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.60, canvas.height * 0.205)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.65, canvas.height * 0.22)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.75, canvas.height * 0.23)),
            fireworkBasicArray.push(new Firework(canvas, canvas.width / 2, canvas.height,
                canvas.width * 0.80, canvas.height * 0.24));
        }
    }
})();