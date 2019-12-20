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
            mode: "study1",
            display: "本日の勉強時間",
            min: 0,
            max: 0
        }
    }

    public setMode(mode: string) {
        switch (mode) {
            case 'study1':
                this.setState({
                    mode,
                    display: "本日の勉強時間",
                    min: 100,
                    max: 1000
                })
                break;
            case 'study2':
                this.setState({
                    mode,
                    display: "本日の勉強時間",
                    min: 500,
                    max: 1000
                })
                break;
        }
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
