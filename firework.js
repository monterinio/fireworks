function Firework(canvas, x0, y0, xn, yn) {
    
    this.x = x0;
    this.y = y0;
    
    this.x0 = x0;
    this.y0 = y0;
    
    this.xn = xn;
    this.yn = yn;

    this.distanceToTarget = UTILS_MODULE.calculateDistance(x0, y0, xn, yn);
    this.distanceTraveled = 0;

    this.previousCoordinate = new Coordinate(this.x, this.y);
    // this.coordinateCount = 3;

    // for(let i = 0; i < this.coordinateCount; i++) {
    //     this.coordinates.push([this.x, this.y]);
    // }

    this.alfa = Math.atan2(yn - y0, xn - x0);
    this.speed = 2;
    this.acceleration = 1.05;
    this.brightness = UTILS_MODULE.random(MIN_BRIGHTNESS, MAX_BRIGHTNESS);
    
    this.targetRadius = 1;

    this.context = canvas.getContext('2d');

    this.draw = function() {
        this.context.beginPath();
        this.context.moveTo(this.previousCoordinate.getX(),
            this.previousCoordinate.getY());
        this.context.lineTo(this.x, this.y);
        this.context.strokeStyle = 'hsl(' + HUE + ', 100%, ' + this.brightness + '%)';
        this.context.stroke();

        this.context.beginPath();
        this.context.arc(this.xn, this.yn, this.targetRadius, 0, MAX_RAD);
        this.context.stroke();
    }

    this.update = function(index) {
        
        // this.coordinates.pop();
        // this.coordinates.unshift([this.x, this.y]);
        this.previousCoordinate.updateCoordinate(this.x, this.y);

        if(this.targetRadius < 8) {
            this.targetRadius += 0.3;
        } else {
            this.targetRadius = 1;
        }

        this.speed *= this.acceleration;

        var
            vx = Math.cos(this.alfa) * this.speed,
            vy = Math.sin(this.alfa) * this.speed;

        this.distanceTraveled = UTILS_MODULE.calculateDistance(this.x0, this.y0, this.x + vx, this.y + vy);

        if(this.distanceTraveled >= this.distanceToTarget) {
            UTILS_MODULE.createParticles(this.xn, this.yn, canvas);
            FIREWORKS_MODULE.deleteFirework(index);
        } else {
            this.x += vx;
            this.y += vy;
        }

        this.draw();
    }
}