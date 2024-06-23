import {Obstacle} from "./obstacle.js";
import {Resources} from "./resources.js";
import {Vector} from "excalibur";

export class Bird extends Obstacle {
    constructor(x,y, velX) {
        super({x,y, width: Resources.Bird.width/ 2, height: Resources.Bird.height});
        this.vel.x = velX
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Bird.toSprite())
        this.scale = new Vector(0.2, 0.2)
    }
}