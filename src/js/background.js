import { Actor, Sprite, Vector } from "excalibur";
import { Resources } from './resources.js';

export class Background extends Actor {

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Outback,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
    }
}