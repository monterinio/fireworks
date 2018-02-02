window.onload = function() {
    
    var 
        canvas = document.getElementById('canv'),
        context = canvas.getContext("2d");

    canvas.width = 0.994 * Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    canvas.height = 0.994 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    var CANVAS_MODULE = (function () {

        return {
            animate: function() {
                requestAnimationFrame(CANVAS_MODULE.animate);
                context.clearRect(0, 0, canvas.width, canvas.height);
                
                for(let i = 0; i < fireworkArray.length; i++) {
                    fireworkArray[i].update();
                }

                ROSETTA_MODULE.updateRosetta(100, 100);
        },
            initializeCanvas: function() {
                
                ROSETTA_MODULE.initializeModule();

                fireworkArray = [];

                setTimeout(function() {
                    for(let i = 0; i < NO_FIREWORKS; i++) {
                        fireworkArray.push(new Firework(canvas, window));
                    }
                }, 300)
            }
        }
    })();

    CANVAS_MODULE.initializeCanvas();
    CANVAS_MODULE.animate();

}
