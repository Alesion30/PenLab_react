import * as React from 'react'
import { Subscribe } from 'unstated';
import '../assets/css/Setting.css'
import MediaCard from '../components/MediaCard'
import ModeContainer from '../containers/ModeContainer';

const Setting = () => (
    <Subscribe to={[ModeContainer]}>
        {(cMode: ModeContainer) => {
            return (
                <div>
                    <h1>現在のモード: {cMode.state.mode}</h1>
                    <div className="setting-container">
                        <MediaCard
                            title="study1"
                            explain="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica"
                            imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                            onClick={() => cMode.setMode("study1")}
                        />
                        <MediaCard
                            title="study2"
                            explain="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica"
                            imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                            onClick={() => cMode.setMode("study2")}
                        />
                        <MediaCard
                            title="Lizard"
                            explain="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging, across all continents except Antarctica"
                            imgUrl="https://www.touhan-navi.com/contents/passing/img/study-img-01.jpg"
                            onClick={() => console.log('click')}
                        />
                    </div>
                </div>
            )
        }}
    </Subscribe>
)

export default Setting