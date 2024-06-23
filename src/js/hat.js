import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Hat extends Actor {
    constructor() {
        super();
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Hat.toSprite())
        this.scale = new Vector(0.4,0.4)
        this.pos = new Vector(300, -200)
    }
}