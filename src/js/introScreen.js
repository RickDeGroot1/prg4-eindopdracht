import {Scene, Color, Label, Font, FontUnit, Input, Vector} from "excalibur"
import {Logo} from "./logo.js";

export class IntroScreen extends Scene {
    onInitialize(engine) {
        this.backgroundColor = Color.Azure
        const logo = new Logo(engine.drawWidth / 2, -120)
        logo.scale = new Vector(0.6,0.6)

        const titleLabel = new Label({
            text: 'Road Runners!',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 100),
            font: new Font({
                size: 100,
                color: Color.White,
                family: 'Arial',
                strokeColor: Color.Black,
                lineWidth: 2
            })
        });
        titleLabel.anchor.setTo(0.5, 0)
        this.add(titleLabel)

        const instructionLabel = new Label({
            text: 'Press SPACE to start',
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2 + 205),
            font: new Font({
                size: 50,
                color: Color.White,
                family: 'Arial',
                strokeColor: Color.Black,
                lineWidth: 1.5
            })
        });
        instructionLabel.anchor.setTo(0.5, 0)
        this.add(instructionLabel)

        this.add(logo)
    }

    onPreUpdate(engine, delta) {
        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.engine.goToScene('gameScreen')
        }
    }
}
