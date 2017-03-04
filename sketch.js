var sun; var sun_vel; var sun_mass;

var mercury; var mercury_vel; var mercury_mass; var mercury_dist;

var venus; var venus_vel; var venus_mass; var venus_dist;

var earth; var earth_vel; var earth_mass; var earth_dist;

var mars; var mars_vel; var mars_mass; var mars_dist;
/*
What I've done here is say that all of these variables relating to the planets exist, but not assigned them values
*/
function setup() {
    createCanvas(innerWidth, innerHeight);
    
    sun_vel = createVector(0, 0); //Initial velocity of zero
    sun_mass = 1.989 * pow(10, 30); //Sun's actual mass
    sun = new Body(0, 0, 2, sun_vel, sun_mass); //Make sun a body affected by gravity
    
    mercury_mass = 3.285 * pow(10, 23); //Mars' actual mass
    mercury_vel = createVector(38700 * pow(10, 5), 0); //Scaled velocity so it will go faster
    mercury_dist = 43 * pow(10, 9); //Mercury's actual distance from sun (in meters)
    mercury = new Body(0, mercury_dist, 1, mercury_vel, mercury_mass); //Mars is a body affected by gravity
    
    venus_mass = 4.867 * pow(10, 24);
    venus_vel = createVector(34790 * pow(10, 5), 0);
    venus_dist = 108.94 * pow(10, 9);
    venus = new Body(0, venus_dist, 1, venus_vel, venus_mass)
    
    earth_mass = 5.972 * pow(10, 24);
    earth_vel = createVector(29300 * pow(10, 5), 0);
    earth_dist = 152 * pow(10, 9);
    earth = new Body(0, earth_dist, 3, earth_vel, earth_mass);
    
    mars_mass = 6.39 * pow(10, 23);
    mars_vel = createVector(21970 * pow(10, 5));
    mars_dist = 249.23 * pow(10, 9);
    mars = new Body(0, mars_dist, 1, mars_vel, mars_mass);
    
    /*
    Using accurate NASA information, I made each planet an object affected by gravity
    */
}

function draw() {
    background(0, 20); //Make background translucent so you can see previous positions
    translate(width / 2, height / 2); //So origin is at center of screen
    noStroke(); //No stroke
    
    mercury.orbit(sun); //Let mercury orbit sun
    mercury.show(); //Show mercury
    
    venus.orbit(sun);
    venus.show();
    
    earth.orbit(sun);
    earth.show();
    
    mars.orbit(sun);
    mars.show();
    
    sun.show(); //Show the sun
    //Let the sun be affected by the other planets
    sun.orbit(mercury); 
    sun.orbit(venus);
    sun.orbit(earth);
    sun.orbit(mars);
}