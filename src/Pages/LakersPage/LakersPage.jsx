import React from 'react';
import { Link } from 'react-router-dom';
import './LakersPage.css';

const LakersPage = ({ lakers }) => {
    return (
        <div>
          { lakers.map((laker, idx) => <div key={idx}><Link className="Link" to={`/laker/${idx}`}><img class ="Img" src={laker.image}></img><h3 className="Name">{laker.name}</h3></Link></div>) }
        </div>
    )
};

export default LakersPage;