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
                //context.clearRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < FIREWORKS_MODULE.getFireworkLength(); i++) {
                    // fireworkArray[i].update();
                    FIREWORKS_MODULE.getFireworks()[i].update(i);
                }

                for (let i = 0; i < FIREWORKS_MODULE.getParticleLength(); i++) {
                    // fireworkArray[i].update();
                    FIREWORKS_MODULE.getParticles()[i].update(i);
                }

                if(timerTick >= timerTotal) {
                    CANVAS_MODULE.initializeCanvas();
                    timerTick = 0;
                } else {
                    timerTick++;
                }
            },
            initializeCanvas: function () {
                // fireworkArray = [];
                // create fireworks only once.
                FIREWORKS_MODULE.resetFireworks();

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.20, canvas.height * 0.24));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.25, canvas.height * 0.23));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.35, canvas.height * 0.22));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.40, canvas.height * 0.205));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.50, canvas.height * 0.20));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.60, canvas.height * 0.205));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.65, canvas.height * 0.22));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.75, canvas.height * 0.23));

                FIREWORKS_MODULE.addFirework(new Firework(canvas, canvas.width / 2, canvas.height,
                    canvas.width * 0.80, canvas.height * 0.24));

                // fireworkArray.push(new Firework(canvas, window));


            }
        }
    })();


    CANVAS_MODULE.initializeCanvas();
    CANVAS_MODULE.animate();

}

