import { Container } from "unstated";

interface IState {
    mode: string
    display: string
    min: number
    max: number
}

export default class ModeContainer extends Container<IState> {
    public constructor() {
        super()
        this.state = {
            mode: "mode1",
            display: "本日の勉強時間",
            min: 200,
            max: 3000
        }
    }

    public getMode(mode: string) {
        switch (mode) {
            case 'mode1':
                return {
                    mode,
                    display: "本日の勉強時間",
                    min: 200,
                    max: 3000
                }
            case 'mode2':
                return {
                    mode,
                    display: "本日のスマホ時間",
                    min: 500,
                    max: 1000
                }
            default:
                return {
                    mode,
                    display: "error",
                    min: 5000,
                    max: 0
                }
        }
    }

    public setMode(mode: string) {
        this.setState({
            mode: this.getMode(mode).mode,
            display: this.getMode(mode).display,
            min: this.getMode(mode).min,
            max: this.getMode(mode).max
        })
    }

    public setManualMode(display: string, min: number, max: number) {
        this.setState({
            mode: "manual",
            display,
            min,
            max
        })
    }
}
