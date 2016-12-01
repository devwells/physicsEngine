/**
 * Created by devin on 11/30/2016.
 */
// a simple vector class that does
    //vector addition, subtraction, multiplication, dot product, cross product, and rotation
    // var vector = {x, y};

    //TODO - add rotation classes
function scaleVector(vector, scalar) {
    vector.x*=scalar;
    vector.y*=scalar;

    return vector;
}
function dotProduct(vector1, vector2) {
     var xDiff, yDiff;
     xDiff = vector1.x * vector2.x;
     yDiff = vector1.y * vector2.y;

     return xDiff + yDiff;
}
function areEqual(vector1, vector2, epsilon) {
    var xDiff, yDiff;
    xDiff = Math.abs(vector1.x - vector2.x);
    yDiff = Math.abs(vector1.y - vector2.y);

    return epsilon > xDiff + yDiff;
}
function determinate(vector1, vector2) {
    return (vector1.x * vector2.y) - (vector1.y * vector2.x);
}
function addVectors(vector1, vector2) {
    return {
        x: vector1.x + vector2.x,
        y: vector1.y + vector2.y
    };
}
function subtractVectors(vector1, vector2) {
    return {x: vector1.x - vector2.x,
        y: vector1.y - vector2.y};
}
