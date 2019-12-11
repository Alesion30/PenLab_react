import * as React from 'react'
import { useState, useEffect } from 'react'
import '../assets/css/Timer.css'
import { Button } from '@material-ui/core'

const Timer: React.FC = () => {

    // state
    const [state, setState] = useState({ time: 0, hour: "00", minute: "00", second: "00" })
    const [count, setCount] = useState(false)

    // lifecycle
    useEffect(() => {
        if (count) {
            const intervalTimer = setInterval(update, 1000)
            return () => clearInterval(intervalTimer)
        }
    }, [state, count])

    // functions
    const update = () => {
        const hour = toHours(state.time)
        const minute = toMinutes(state.time)
        const second = toSeconds(state.time)

        setState({
            time: state.time + 1,
            hour: toText(hour),
            minute: toText(minute),
            second: toText(second)
        })
    }

    const toHours = (time: number) => {
        return Math.floor(time / 60 / 60)
    }

    const toMinutes = (time: number) => {
        return Math.floor(time / 60 % 60)
    }

    const toSeconds = (time: number) => {
        return time % 60
    }

    const toText = (time: number) => {
        return ('00' + time).slice(-2)
    }

    const toggleTimer = () => {
        setCount(!count)
    }

    // render
    return (
        <div className="timer-container">
            <div>
                <span className="timer-number" role="hour">{state.hour}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number" role="minute">{state.minute}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number" role="second">{state.second}</span>
            </div>
            <div>
                <Button variant="contained" onClick={toggleTimer}>{!count ? "start" : "stop"}</Button>
            </div>
        </div>
    )
}

export default Timer