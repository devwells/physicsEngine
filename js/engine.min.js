/**
 * Created by devin on 11/30/2016.
 */
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    //canvas size in less
    height = 400,
    width = 400, //Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    //circle start place
    x = 200,
    y = 0,
    vx = 10,    //velocity of x
    ax = 3,     //acceleration of x
    vy = 0,     //velocity of y
    ay = 0,     //acceleration of y
    m = 0.1,    // Ball mass in kg
    r = 10,    // Ball radius in cm, or pixels.
    dt = 0.02,  // Time step.
    e = -0.5,   // Coefficient of restitution ("bounciness")
    rho = 1.2,  // Density of air. Try 1000 for water.
    C_d = 0.47, // Coeffecient of drag for a ball
    A = Math.PI * r * r / 10000 // Frontal area of the ball; divided by 10000 to compensate for the 1px = 1cm relation
    ;

ctx.fillStyle = '#4f364b';

function loop()
{
    var fy = 0;

    /* Weight force, which only affects the y-direction (because that's the direction gravity points). */
    fy += m * 9.81;

    /* Air resistance force; this would affect both x- and y-directions, but we're only looking at the y-axis in this example. */
    fy += -1 * 0.5 * rho * C_d * A * vy * vy;

    /* Verlet integration for the y-direction */
    dy = vy * dt + (0.5 * ay * dt * dt);
    /* The following line is because the math assumes meters but we're assuming 1 cm per pixel, so we need to scale the results */
    y += dy * 100;
    new_ay = fy / m;
    avg_ay = 0.5 * (new_ay + ay);
    vy += avg_ay * dt;

    /* Let's do very simple collision detection */
    if (y + r > height && vy > 0)
    {
        /* This is a simplification of impulse-momentum collision response. e should be a negative number, which will change the velocity's direction. */
        vy *= e;
        /* Move the ball back a little bit so it's not still "stuck" in the wall. */
        y = height - r;
    }

    draw();
}

function draw()
{
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.closePath();
}

/* A real project should use requestAnimationFrame, and you should time the frame rate and pass a variable "dt" to your physics function. This is just a simple brute force method of getting it done. */
setInterval(loop, dt * 1000);
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

// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict
