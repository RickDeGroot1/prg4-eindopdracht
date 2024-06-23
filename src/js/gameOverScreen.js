import {Scene, Color, Label, Font, FontUnit, Input, Vector} from "excalibur"
import {Logo} from "./logo.js";

export class GameOverScreen extends Scene {
    constructor() {
        super()
    }
    onInitialize(engine) {

        this.checkPreviousHighScore(engine)

        this.backgroundColor = Color.Black
        this.setGameOverLabel(engine)
        this.setInstructionLabel(engine)
        this.setScoreLabel(engine)
        this.drawLogo(engine)
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.engine.startGame()
        }
    }

    setGameOverLabel(engine) {
        const titleLabel = new Label({
            text: 'Game Over!',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 100),
            font: new Font({
                size: 100,
                color: Color.Black,
                family: 'Arial',
                strokeColor: Color.White,
                lineWidth: 2
            })

        })
        titleLabel.anchor.setTo(0.5, 0)
        this.add(titleLabel)
    }

    setInstructionLabel(engine) {
        const instructionLabel = new Label({
            text: 'Press SPACE to start again',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 205),
            font: new Font({
                size: 50,
                color: Color.Black,
                family: 'Arial',
                strokeColor: Color.White,
                lineWidth: 1
            })
        });
        instructionLabel.anchor.setTo(0.5, 0);
        this.add(instructionLabel)
    }

    setScoreLabel(engine) {
        const scoreLabel = new Label({
            text: `Your score was ${this.engine.gameScreen.score}`,
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 255),
            font: new Font({
                size: 50,
                color: Color.Black,
                family: 'Arial',
                strokeColor: Color.White,
                lineWidth: 1
            })
        });
        scoreLabel.anchor.setTo(0.5, 0)
        this.add(scoreLabel)
    }

    drawLogo(engine) {
        const logo = new Logo(engine.drawWidth / 2, -120)
        logo.scale = new Vector(0.6,0.6)
        this.add(logo)
    }

    checkPreviousHighScore(engine) {
        this.highscore = localStorage.getItem('highscore') || '0'
        if (this.engine.gameScreen.score > this.highscore) {
            localStorage.setItem('highscore', this.engine.gameScreen.score)
        }
        this.setHighScoreLabel(this.highscore, engine)
    }

    setHighScoreLabel(highscore, engine) {
        const highScoreLabel = new Label({
            text: `Your highscore is ${highscore}`,
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 305),
            font: new Font({
                size: 50,
                color: Color.Black,
                family: 'Arial',
                strokeColor: Color.White,
                lineWidth: 1
            })
        });
        highScoreLabel.anchor.setTo(0.5, 0)
        this.add(highScoreLabel)
    }
}
