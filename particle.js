function Particle(x, y, canvas) {
    this.x = x;
    this.y = y;
    this.coordinates = [];
    this.coordinateCount = 10;
    this.context = canvas.getContext('2d');
    
    
    for(let i = 0; i < this.coordinateCount; i++) {
        this.coordinates.push([this.x, this.y]);
    }

    this.angle = UTILS_MODULE.random(0, MAX_RAD);
    this.speed = UTILS_MODULE.random(1, MAX_PARTICLE_SPEED);

    this.friction = 0.95;
    this.gravity = 1;
    this.hue = UTILS_MODULE.random(HUE - 20, HUE + 20);
    this.brigthness = UTILS_MODULE.random(50, 80);
    this.alpha = 1;
    this.decay = UTILS_MODULE.random(0.015, 0.03);

    this.update = function(index) {
        this.coordinates.pop();
        this.coordinates.unshift([this.x, this.y]);
        this.speed *= this.friction;

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed + this.gravity;

        this.alpha -= this.decay;

        if(this.aplha <= this.decay) {
            FIREWORKS_MODULE.deleteParticle(index);
        }

        this.draw();
    }

    this.draw = function() {
        this.context.beginPath();
        this.context.moveTo(this.coordinates[this.coordinates.length - 1][0],
            this.coordinates[this.coordinates.length - 1][1]);
        this.context.lineTo(this.x, this.y);
        this.context.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brigthness + '%, ' 
            + this.alpha + ')';
        this.context.stroke();
    }
}