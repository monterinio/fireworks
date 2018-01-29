function Coordinate(x, y) {

    this.x = x;
    this.y = y;

    this.updateCoordinate = function(x, y) {
        this.x = x;
        this.y = y;
    }

    this.getX = function() {
        return this.x;
    }

    this.getY = function() {
        return this.y;
    }
}