function Body(x, y, r, initial_vel, mass) {
    this.r = r; //Give it a major-radius
    this.pos = createVector(x, y); //Give it a position
    this.vel = initial_vel; //Give it an initial velocity
    this.acc = createVector(0, 0); //Give it a null acceleration to start
    this.mass = mass; //Give it a mass
    
    this.applyForce = function(force) {
        this.acc = createVector(force.x / this.mass, force.y / this.mass); //Evalute for acceleration
        
        this.vel.add(this.acc); //Add the acceleration to the velocity
        
        this.pos.add(this.vel); //Add the velocity to the positions
    }
    
    this.orbit = function(star) {
        var d = dist(this.pos.x, this.pos.y, star.pos.x, star.pos.y); //Calcuate distance between planet and star
        
        var force_mag = 6.67408 * pow(10, -11) * this.mass * star.mass / (d * d); //Gravitational Force Equation
        
        var force = createVector(star.pos.x - this.pos.x, star.pos.y - this.pos.y); //Find the vector pointing from planet to star
        force.setMag(force_mag * pow(10, 10));
        
        /*
        Set magnitude to force_mag, while scaling it by 10 ^ 10, as to keep up with the velocity's scaling (v ^ 2 = v0 + 2 * a * d, therfore to scale velocity correctly you must scale by the square of scalar)
        */
        
        this.applyForce(force); //Apply the force
    }
    
    this.show = function() {
        ellipse(this.pos.x / pow(10, 9), this.pos.y / pow(10, 9), this.r * 2, this.r * 2); //Show the thing
    }
}