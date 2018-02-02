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
            rotation = 0;
            step = 36;
        },
        drawRosetta : function(xTranslation, yTranslation) {
            context.save();
            context.translate(xTranslation, yTranslation);

            context.rotate(degreesToRadians(initialRotation));
            context.fillRect(0, 0, 100, 100);


            for(let i = 0; i < 9; i++) {
                context.rotate(degreesToRadians(step));
                context.fillRect(0, 0, 100, 100);
            }
        },
        updateRosetta : function(xTranslation, yTranslation) {
            drawRosetta(xTranslation, yTranslation);
            rotation += 1;
        }
    }

})();