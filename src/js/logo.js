import {Actor} from "excalibur";
import {Resources} from "./resources.js";

export class Logo extends Actor {
    constructor(x,y) {
        super({x,y});
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Aus.toSprite())
        this.anchor.setTo(0.5, 0);
    }
}