import * as React from 'react'
import { Subscribe } from 'unstated';
import '../assets/css/Dashboard.css'
import Graph from '../components/Graph'
import ModeContainer from '../containers/ModeContainer';

const Dashborad = () => (
    <Subscribe to={[ModeContainer]}>
        {(cMode: ModeContainer) => {
            return (
                <div className="dashboard-container">
                    <Graph mode={cMode.state.mode} />
                </div>
            )
        }}
    </Subscribe>
)


export default Dashborad