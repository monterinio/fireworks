window.onload = function () {

    var
        canvas = document.getElementById('canv'),
        context = canvas.getContext("2d"),
        timerTick = 0,
        timerTotal = 80;

    canvas.width = 0.994 * Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    canvas.height = 0.994 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var CANVAS_MODULE = (function () {

        return {
            animate: function () {
                requestAnimationFrame(CANVAS_MODULE.animate);

                HUE += 0.5;
                context.globalCompositeOperation = 'destination-out';

                context.fillStyle = 'rgba(0, 0, 0, 0.5)';
                context.fillRect(0, 0, canvas.width, canvas.height);

                context.globalCompositeOperation = 'lighter';

                for (let i = 0; i < FIREWORKS_MODULE.getFireworkLength(); i++) {
                    FIREWORKS_MODULE.getFireworks()[i].update(i);
                }

                for (let i = 0; i < FIREWORKS_MODULE.getParticleLength(); i++) {
                    FIREWORKS_MODULE.getParticles()[i].update(i);
                }

                if(timerTick >= timerTotal) {
                    CANVAS_MODULE.initializeCanvas();
                    timerTick = 0;
                } else {
                    timerTick++;
                }

                ROSETTA_MODULE.updateRosetta(100, 100);
            },
            initializeCanvas: function () {
                // create fireworks only once.
                FIREWORKS_MODULE.resetFireworks();
                FIREWORKS_MODULE.addFireworks();
            }
        }
    })();

    FIREWORKS_MODULE.initializeFireworks(canvas);
    CANVAS_MODULE.initializeCanvas();
    ROSETTA_MODULE.initializeModule();
    CANVAS_MODULE.animate();

}

