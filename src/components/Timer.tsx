import * as React from 'react'
import { useState, useEffect } from 'react'
import '../assets/css/Timer.css'
import { Button } from '@material-ui/core'
import axios from 'axios';

const Timer: React.FC = () => {

    // state
    const [state, setState] = useState({ time: 0, hour: "00", minute: "00", second: "00" })
    const [count, setCount] = useState(false)
    const [start, setStart] = useState(false)

    // lifecycle
    useEffect(() => {
        if (count) {
            const timer = setInterval(update, 1000)
            return () => clearInterval(timer)
        }
    }, [state, count])

    useEffect(() => {
        if (start) {
            const watcher = setInterval(watchApi, 3000)
            return () => clearInterval(watcher)
        }
    }, [start])

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

    const watchApi = async () => {
        const result = await axios(
            'http://hn.algolia.com/api/v1/search?query=redux',
        );
        console.log(result.data.nbHits)

        if (result.data.nbHits > 12000) {
            setCount(false)
        } else {
            setCount(true)
        }
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

    const toggleWatcher = () => {
        setStart(!start)
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
            <div style={{ marginTop: 30 }}>
                <span style={{ marginRight: 10 }}>Timer</span>
                <Button variant="contained" onClick={toggleTimer}>{!count ? "start" : "stop"}</Button>
            </div>
            <div style={{ marginTop: 10 }}>
                <span style={{ marginRight: 10 }}>API</span>
                <Button variant="contained" onClick={toggleWatcher}>{!start ? "start" : "stop"}</Button>
            </div>
        </div>
    )
}

export default Timer