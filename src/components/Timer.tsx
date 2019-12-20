import { Button } from '@material-ui/core'
import axios from 'axios';
import * as firebase from "firebase";
import * as React from 'react'
import { useEffect, useState } from 'react'
import '../assets/css/Timer.css'

interface ITimerProps {
    min: number
    max: number
    display: string
}

const Timer = (props: ITimerProps) => {

    // state
    const [state, setState] = useState({ time: 0, hour: "00", minute: "00", second: "00" })
    const [count, setCount] = useState(false)
    const [start, setStart] = useState(false)
    const [data, setData] = useState(0)

    // lifecycle
    useEffect(() => {
        const today = new Date()
        const db = firebase.firestore()

        const fetchData = () => {
            db.collection("data")
                .doc(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
                .get()
                .then((doc) => {
                    const dt = doc.data()
                    if (dt !== undefined) {
                        const t = parseInt(dt.time, 10)
                        const hour = toHours(t)
                        const minute = toMinutes(t)
                        const second = toSeconds(t)
                        setState({
                            time: t,
                            hour: toText(hour),
                            minute: toText(minute),
                            second: toText(second)
                        })
                    }
                })
        }

        fetchData()
    }, [])

    useEffect(() => {
        const today = new Date()
        const db = firebase.firestore()
        let timer: NodeJS.Timeout;

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
        const saveData = async () => {
            if (state.time !== 0) {
                await db.collection("data")
                    .doc(`${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`)
                    .set({ time: state.time })
            }
        }

        if (count) {
            timer = setInterval(update, 1000)
        }

        return () => {
            if (!count) {
                saveData()
            }
            clearInterval(timer)
        }
    }, [state, count])

    useEffect(() => {
        let watcher: NodeJS.Timeout

        const getAPI = async () => {
            const result = await axios('http://localhost:3001/')
            const value = parseInt(result.data, 10)
            console.log("value: ", value)
            if (value >= props.min && value <= props.max) {
                setCount(false)
            } else {
                setCount(true)
            }
            setData(value)
        }

        if (start) {
            watcher = setInterval(getAPI, 1000)
        }
        return () => clearInterval(watcher)
    }, [start, props.max, props.min])

    // functions
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

    const toggleWatcher = () => {
        setStart(!start)
        setCount(false)
        setData(0)
    }

    // render
    return (
        <div className="timer-container">
            <h1>{props.display}</h1>
            <div>
                <span className="timer-number">{state.hour}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number">{state.minute}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number">{state.second}</span>
            </div>
            <div style={{ marginTop: 10 }}>
                <Button variant="contained" onClick={toggleWatcher}>{(!start && !count) ? "start" : "stop"}</Button>
            </div>
            <h2 style={{ position: "absolute", bottom: 30 }}>現在のセンサの値： {data}</h2>
        </div>
    )
}

export default Timer