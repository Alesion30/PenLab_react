import * as React from 'react'
import { useState } from 'react';
import { Subscribe } from 'unstated';
import '../assets/css/Setting.css'
import MediaCard from '../components/MediaCard'
import ModeContainer from '../containers/ModeContainer';

interface IProps {
    cMode: ModeContainer
}

const SettingSub = (props: IProps) => {
    const [display, setDisplay] = useState(props.cMode.state.display)
    const [min, setMin] = useState(props.cMode.state.min)
    const [max, setMax] = useState(props.cMode.state.max)
    return (
        <div>
            <h1>現在のモード: {props.cMode.state.mode}</h1>
            <div className="setting-container">
                <MediaCard
                    title="study1"
                    explain="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica"
                    imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                    onClick={() => props.cMode.setMode('study1')}
                />
                <MediaCard
                    title="study2"
                    explain="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica"
                    imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                    onClick={() => props.cMode.setMode('study2')}
                />
                <MediaCard
                    title="マニュアル"
                    explain="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica"
                    imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                    onClick={() => {
                        if (display !== "" && min !== undefined && max !== undefined) {
                            props.cMode.setManualMode(display, min, max)
                        }
                    }}
                />
            </div>
            <div className="setting-inputGroup">
                <input type="text" placeholder="画面に表示される" value={display} onChange={(e: any) => setDisplay(e.target.value)} />
                <input type="number" placeholder="最小値" value={min} onChange={(e: any) => setMin(e.target.value)} />
                <input type="number" placeholder="最大値" value={max} onChange={(e: any) => setMax(e.target.value)} />
            </div>
        </div>
    )
}

const Setting = () => (
    <Subscribe to={[ModeContainer]}>
        {(cMode: ModeContainer) => {
            return (
                <SettingSub cMode={cMode} />
            )
        }}
    </Subscribe>
)

export default Setting