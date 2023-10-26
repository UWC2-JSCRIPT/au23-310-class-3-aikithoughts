// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topspeed) {
        this.name = name;
        this.topspeed = topspeed;
    }
    accelerate() {
        const {name, topspeed} = this;
        console.log(`${name} moving to ${topspeed}`)
    }
}



// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const xwing = new SpaceShip("X-wing", "hyperspace");
xwing.accelerate();
const enterprise = new SpaceShip("Enterprise", "warp factor 10");
enterprise.accelerate();
