import {Actor, Engine, Vector, DisplayMode, CollisionType, Timer, Input} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {GameScreen} from "./gameScreen.js";
import {Obstacle} from "./obstacle.js";
import {Ground} from "./ground.js";
import {Hat} from "./hat.js";

export class Player extends Actor {
    constructor(x,y, scaleX, scaleY) {
        super({x, y, width: Resources.RoadRunner1.width - 450, height: Resources.RoadRunner1.height - 20});
        this.body.collisionType = CollisionType.Active
        this.scale = new Vector(scaleX, scaleY)
        this.isJumping = false
        this.timer = null
    }

    onInitialize(engine) {
        this.body.useGravity = true
        this.graphics.use(Resources.RoadRunner1.toSprite())
        this.startTimer()
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space) && this.isJumping === false) {
            this.jump()
        }
        this.on('collisionstart', (event) => {
            this.checkGround(event)
            this.checkObstacle(event, engine)
        })
        if (engine.input.keyboard.wasPressed(Input.Keys.H)) {
            console.log('EQUIPPING HAT')
            this.addChild(new Hat())
        }
    }

    checkGround(event) {
        if (event.other instanceof Ground) {
            this.isJumping = false
        }
    }

    checkObstacle(event, engine) {
        if (event.other instanceof Obstacle && !this.hasTransitioned) {
            this.hasTransitioned = true
            this.kill()
            event.other.kill()
            engine.goToScene('gameOverScreen')
        }
    }

    startTimer() {
        this.timer = new Timer({
            interval: 100,
            repeats: true,
            fcn: () => this.run()
        })
        this.scene.add(this.timer)
        this.timer.start()
    }

    run() {
        this.isRunning = !this.isRunning;
        if (this.isRunning && !this.isJumping) {
            this.graphics.use(Resources.RoadRunner1.toSprite())
        } else {
            this.graphics.use(Resources.RoadRunner2.toSprite())
        }
    }

    jump() {
        this.isJumping = true
        this.vel.y = -500
    }
}
