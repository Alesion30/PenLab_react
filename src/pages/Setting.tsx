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
                    title="mode1"
                    explain={`圧力センサを用いて、学習時間を測定します。センサの値が${props.cMode.getMode('mode1').min}以上${props.cMode.getMode('mode1').max}以下の間でタイマーが作動します。`}
                    imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                    onClick={() => {
                        props.cMode.setMode('mode1')
                        setDisplay(props.cMode.getMode('mode1').display)
                        setMax(props.cMode.getMode('mode1').max)
                        setMin(props.cMode.getMode('mode1').min)
                    }}
                />
                <MediaCard
                    title="mode2"
                    explain={`タッチセンサを用いて、スマホをいじっている時間を測定します。センサの値が${props.cMode.getMode('mode2').min}以上${props.cMode.getMode('mode2').max}以下の間でタイマーが作動します。`}
                    imgUrl="https://kachi-mori.com/wp-content/uploads/2019/04/access-adult-blur-2616281.jpg"
                    onClick={() => {
                        props.cMode.setMode('mode2')
                        setDisplay(props.cMode.getMode('mode2').display)
                        setMax(props.cMode.getMode('mode2').max)
                        setMin(props.cMode.getMode('mode2').min)
                    }}
                />
                <MediaCard
                    title="マニュアル"
                    explain="自分で、タイマーの作動するセンサの値をカスタマイズできます。下の入力欄を編集して、このボタンを押してください。"
                    imgUrl="https://posregi.jp/wp-content/uploads/2015/05/image05.png"
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