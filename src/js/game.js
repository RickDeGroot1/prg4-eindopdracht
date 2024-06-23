import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {IntroScreen} from "./introScreen.js";
import {GameScreen} from "./gameScreen.js";
import {GameOverScreen} from "./gameOverScreen.js";

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800),
            }
         })
        this.start(ResourceLoader).then(() => this.startGame())
        this.gameScreen = null
    }

    onInitialize(engine) {
        this.add('introScreen', new IntroScreen())
        this.gameScreen = new GameScreen()
        this.add('gameScreen', this.gameScreen)
        this.add('gameOverScreen', new GameOverScreen())
    }

    startGame() {
        console.log("start de game!")
        this.goToScene('introScreen')
    }
}

new Game()
