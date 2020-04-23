import React from 'react';
import { Link } from 'react-router-dom';
import ufo from '../images/ufo.png';
import equal from '../images/equal.png';
import alive from '../images/alive.png';
import rip from '../images/rip.png';

const CharacterDetails = (props) => {
console.log(props)

    return (
        <div className="character-details">
            <img src={props.charactObj.image} alt={props.charactObj.name} />
            <div className="character-details_text">
                <h2>{props.charactObj.name}</h2>
                <ul>
                
                <li>{props.charactObj.species}<img className="icons" alt={props.charactObj.species} src={props.charactObj.species === 'Human' ? equal :ufo }></img></li>

                <li>{props.charactObj.status}<img className="icons"  alt={props.charactObj.status} src={props.charactObj.status === 'Alive' ? alive :rip}></img></li>
                <li>{props.charactObj.origin.name} </li>
                <li> Episode: {props.charactObj.episode.length}</li>
                </ul>
            </div>
            <Link to='/'>
                <button type="button">Volver</button>
            </Link>
        </div>

    )
}


export default CharacterDetails;