import * as React from 'react'
import { Subscribe } from 'unstated';
import '../assets/css/Home.css'
import Timer from '../components/Timer'
import ModeContainer from '../containers/ModeContainer';

const Home: React.SFC = () => (
    <Subscribe to={[ModeContainer]}>
        {(cMode: ModeContainer) => {
            return (
                <div className="home-container">
                    <Timer min={cMode.state.min} max={cMode.state.max} display={cMode.state.display} />
                </div>
            )
        }}
    </Subscribe>
)

export default Home