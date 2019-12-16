import { Button } from '@material-ui/core'
import axios from 'axios';
import * as firebase from "firebase";
import * as React from 'react'
import { useEffect, useState } from 'react'
import '../assets/css/Timer.css'

const Timer: React.FC = () => {

    // state
    const [state, setState] = useState({ time: 0, hour: "00", minute: "00", second: "00" })
    const [count, setCount] = useState(false)
    const [start, setStart] = useState(false)
    const [data, setData] = useState(0)

    // lifecycle
    useEffect(() => {
        const db = firebase.firestore()
        db.collection("test")
            .doc("1")
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    console.log("No such document!");
                }
            })
    }, [])

    useEffect(() => {
        if (count) {
            const timer = setInterval(update, 1000)
            return () => clearInterval(timer)
        }
    }, [state, count])

    useEffect(() => {
        if (start) {
            const watcher = setInterval(getAPI, 1000)
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

    const getAPI = async () => {
        const result = await axios(
            'http://hn.algolia.com/api/v1/search?query=redux',
        );
        console.log(result.data.nbHits)

        if (result.data.nbHits < 12000) {
            setCount(false)
        } else {
            setCount(true)
        }
        setData(result.data.nbHits)
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

    const toggleWatcher = () => {
        setStart(!start)
        setCount(false)
        setData(0)
    }

    // render
    return (
        <div className="timer-container">
            <h2>現在のセンサの値： {data}</h2>
            <div>
                <span className="timer-number" role="hour">{state.hour}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number" role="minute">{state.minute}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number" role="second">{state.second}</span>
            </div>
            <div style={{ marginTop: 10 }}>
                <Button variant="contained" onClick={toggleWatcher}>{!start ? "start" : "stop"}</Button>
            </div>
        </div>
    )
}

export default Timer