import { Actor, CollisionType, Vector } from "excalibur";
import { Player } from "./player.js";

export class Obstacle extends Actor {
    constructor({ x, y, width, height }) {
        super({ x, y, width, height })
        this.body.collisionType = CollisionType.Active;
        this.body.useGravity = false
    }
}
