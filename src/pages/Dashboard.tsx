import * as React from 'react'
import '../assets/css/Dashboard.css'
import Graph from '../components/Graph'

const Dashborad = () => (
    <div className="dashboard-container">
        <h1>過去一週間の記録</h1>
        <Graph />
    </div>
)

export default Dashborad