import {Obstacle} from "./obstacle.js";
import {Resources} from "./resources.js";
import {Vector} from "excalibur";

export class Spike extends Obstacle {
    constructor(x,y, velX) {
        super({x,y, width: Resources.Spike.width/ 2, height: Resources.Spike.height});
        this.vel.x = velX
        this.pos = new Vector(x,y)
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Spike.toSprite())
        this.scale = new Vector(0.2, 0.2)
    }
}