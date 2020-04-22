import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {

    console.log(props)
    return (
        <div className="character-details">
            <img src={props.charactObj.image} alt={props.charactObj.name} />
            <div className="character-details_text">
                <h2>{props.charactObj.name}</h2>
                <h3>{props.charactObj.species}</h3>
                <p>{props.charactObj.origin.name}</p>
                <p>Numbers of Episodes: {props.charactObj.episode.length}</p>
            </div>
            <Link to='/'>
                <button type="button">Volver</button>
            </Link>
        </div>

    )
}

export default CharacterDetails;