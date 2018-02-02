var ROSETTA_MODULE = (function() {

    var
        canvas,
        context,
        step,
        initialRotation;

    return {
        initializeModule : function() {
            canvas = document.getElementById('canv');
            context = canvas.getContext('2d');
            initialRotation = 0;
            step = 36;
        },
        drawRosetta : function(xTranslation, yTranslation) {
            context.save();
            context.translate(xTranslation, yTranslation);

            context.rotate(UTILS_MODULE.degreesToRadians(initialRotation));
            context.fillStyle = 'white';
            context.fillRect(0, 0, 5, 35);


            for(let i = 0; i < 9; i++) {
                context.rotate(UTILS_MODULE.degreesToRadians(step));
                if(i % 2 == 0) {
                    context.fillStyle = 'red';
                } else {
                    context.fillStyle = 'white';
                }
                context.fillRect(0, 0, 5, 35);
            }

            context.restore();
        },
        updateRosetta : function(xTranslation, yTranslation) {
            ROSETTA_MODULE.drawRosetta(xTranslation, yTranslation);
            initialRotation += 1;
        }
    }

})();