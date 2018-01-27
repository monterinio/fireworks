function Firework(canvas, window) {
    
    this.x = window.innerWidth * 0.5 - FIREWORK_WIDTH/2;
    this.y = window.innerHeight - FIREWORK_HEIGHT;
    
    this.x0 = window.innerWidth * 0.5 - FIREWORK_WIDTH/2
    this.y0 = window.innerHeight - FIREWORK_HEIGHT;
    
    this.xn = undefined;
    this.yn = undefined;

    this.distanceToTarget = UTILS_MODULE.calculateDistance(x0, y0, xn, yn);
    this.distanceTraveled = 0;

    this.coordinates = [];
    this.coordinateCount = 3;

    for(let i = 0; i < this.coordinateCount; i++) {
        this.coordinates.push([this.x, this.y]);
    }

    this.alfa = Math.atan(yn - y0, xn - x0);
    this.speed = 2;
    this.acceleration = 1.05;
    this.brightness = UTILS_MODULE.random(MIN_BRIGHTNESS, MAX_BRIGHTNESS);
    this.targetRadius = 1;

    this.context = canvas.getContext('2d');

    this.draw = function() {
        this.context.fillStyle = 'white';
        this.context.fillRect(this.x, this.y, FIREWORK_WIDTH, FIREWORK_HEIGHT);
    }

    this.update = function(index) {
        
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        
        if(this.targetRadius < 8) {
            this.targetRadius += 0.3;
        } else {
            this.targetRadius = 1;
        }

        this.speed *= this.acceleration;

        var
            vx = Math.cos(this.alfa) * this.speed,
            vy = Math.sin(this.alfa) * this.speed;

        this.distanceTraveled = UTILS_MODULE.calculateDistance(this.x, this.y, this.x + vx, this.y + vy);

        if(this.distanceTraveled >= this.distanceToTarget) {
            UTILS_MODULE.createParticles(this.xn, this.yn);
            
        }
        
        this.draw();
    }
}