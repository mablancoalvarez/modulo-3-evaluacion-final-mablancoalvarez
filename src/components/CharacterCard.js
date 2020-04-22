import React from 'react';

const CharacterCard = (props) =>{

    return (
        <div className ="card-wrapper">
            <img src={props.image} alt={props.name}/>
            <div className="card-wrapper__text">
                <h2>{props.name}</h2>
                <h3>{props.specie}</h3>
            </div>
        </div>
    )
}


export default CharacterCard;