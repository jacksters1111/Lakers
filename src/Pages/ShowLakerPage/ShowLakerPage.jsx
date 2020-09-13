import React from 'react';
import { Link } from 'react-router-dom';
import './ShowLakerPage.css';

const ShowLakerPage = ({ lakerData }) => {
    return (
        <div>
            <Link className="Link" to="/">Return</Link>
            <h1>{lakerData.name}</h1>
            <img alt="player" className="Img2" src={lakerData.image}></img>
            <br/>
            <h2>Number: </h2><h3>{lakerData.number}</h3>
            <span></span>
            <h2>Position: </h2><h3>{lakerData.position}</h3>
            <span></span>
            <h2>Games Played: </h2><h3>{lakerData.gamesPlayed}</h3>
            <span></span>
            <h2>Points: </h2><h3>{lakerData.points}</h3>
            <span></span>
            <h2>Field Goals: </h2><h3>{lakerData.fieldGoals}</h3>
            <span></span>
            <h2>Height: </h2><h3>{lakerData.height}</h3>
            <span></span>
            <h2>DOB: </h2><h3>{lakerData.dob}</h3>
            <span></span>
            <h2>Age: </h2><h3>{lakerData.age}</h3>
            <span></span>
            <h2>Weight: </h2><h3>{lakerData.weight}</h3>
            <span></span>
            <h2>Hometown: </h2><h3>{lakerData.hometown}</h3>
            <span></span>
            <br/>
        </div>
    )
};

export default ShowLakerPage;