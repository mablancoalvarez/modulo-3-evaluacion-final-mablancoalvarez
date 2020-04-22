import React from 'react';

const CharacterDetails = (props) =>{

    return (
        <div className="character-details">
            <img src={props.charactObj.image} alt={props.charactObj.name}/>
            <div className="character-details_text">
            <h2>{props.charactObj.name}</h2>
            <h3>{props.charactObj.species}</h3>
            <p>{props.charactObj.origin.name}</p>
            <p>{props.charactObj.episode.length}</p>
            </div>
        </div>
    )
}

export default CharacterDetails;