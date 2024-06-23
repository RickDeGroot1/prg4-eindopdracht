import {Actor, CollisionType, Color} from "excalibur";

export class Ground extends Actor {
    constructor(x,y) {
        super({x,y, width: 3000, height: 10, color: Color.Black})
        this.body.collisionType = CollisionType.Fixed
    }
}