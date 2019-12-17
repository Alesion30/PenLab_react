import * as React from 'react'
import '../assets/css/Home.css'
import Timer from '../components/Timer'

const Home: React.SFC = () => (
    <div className="home-container">
        <Timer value={12300} />
    </div>
)

export default Home