import {Scene, Color, Label, Font, Input, Vector, Timer} from "excalibur"
import {Background} from "./background.js"
import {Player} from "./player.js"
import {Ground} from "./ground.js"
import {Spike} from "./spike.js"
import {Bird} from "./bird.js"

export class GameScreen extends Scene {
    constructor() {
        super()
    }

    onInitialize(engine) {

    }

    onActivate(context, engine) {
        this.score = 0
        this.scoreLabel = null
        this.spikeTimer = null
        this.birdTimer = null
        this.scoreTimer = null
        this.player = null

        this.addTerrain()
        this.spawnPlayer()
        this.increaseScore()
        this.showScore(engine)
        this.spawnSpikeObstacle(5000, Spike, 300, 720)
        this.spawnBirdObstacle(3000, Bird, 150, 500)
    }

    addTerrain() {
        const background = new Background()
        this.add(background)

        const ground = new Ground(0, 720)
        this.add(ground)
    }

    spawnPlayer() {
        this.player = new Player(200, 710, 0.2, 0.2)
        this.add(this.player)
    }

    spawnSpikeObstacle(interval, obstacle, maxDecrement, y) {
        let vel = -200
        this.spikeTimer = new Timer({
            fcn: () => {
                const spike = new obstacle(1300, y, vel)
                vel -= 10
                this.add(spike)
                interval -= Math.floor(Math.random() * maxDecrement) + 1
                this.spikeTimer.interval = interval
            },
            interval: interval,
            repeats: true,
        })
        this.add(this.spikeTimer)
        this.spikeTimer.start()
    }

    spawnBirdObstacle(interval, obstacle, maxDecrement, y) {
        let vel = -200
        this.birdTimer = new Timer({
            fcn: () => {
                if (Math.floor(Math.random() * 100) > 50) {
                    y -= 50
                }
                const bird = new obstacle(1300, y, vel)
                vel -= 10
                this.add(bird)
                interval -= Math.floor(Math.random() * maxDecrement) + 1
                this.birdTimer.interval = interval
                console.log(interval)
            },
            interval: interval,
            repeats: true,
        })
        this.add(this.birdTimer)
        this.birdTimer.start()
    }

    showScore(engine) {
        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(50, 20),
            font: new Font({
                size: 70,
                color: Color.White,
                family: 'Arial',
                strokeColor: Color.Black,
                lineWidth: 2
            })
        })
        this.add(this.scoreLabel)
    }

    increaseScore() {
        this.interval = 500
        this.scoreIncrement = 1000
        this.scoreTimer = new Timer({
            interval: 500,
            repeats: true,
            fcn: () => {
                this.score += this.scoreIncrement
                if (this.interval > 50) {
                    this.interval -= 1
                    this.scoreIncrement += 1
                }
                this.scoreLabel.text = `Score: ${this.score}`
            },
        })
        this.add(this.scoreTimer)
        this.scoreTimer.start()
    }

    onDeactivate(context) {
        if (this.spikeTimer) {
            this.spikeTimer.stop()
        }
        if (this.birdTimer) {
            this.birdTimer.stop()
        }
        if (this.scoreTimer) {
            this.scoreTimer.stop()
        }
        if (this.player && this.player.timer) {
            this.player.timer.stop()
        }

        this.actors.forEach(actor => this.remove(actor))
    }
}
