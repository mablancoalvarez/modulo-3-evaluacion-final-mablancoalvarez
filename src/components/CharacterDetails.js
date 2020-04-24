import React from 'react';
import { Link } from 'react-router-dom';
import ufo from '../images/ufo.png';
import anatomy from '../images/anatomy.png';
import alive from '../images/alive.png';
import rip from '../images/rip.png';
import Header from '../components/Header';
import details from '../images/details.png';

const CharacterDetails = (props) => {
    console.log(props)

    return (
        <React.Fragment>
        <Header/>
        <div className="character-details">
            <div className="container-details">
            <div className="character-img">
            <img src={props.charactObj.image} alt={props.charactObj.name} />
            </div>

            <div className="character-details_text">
                <h2>{props.charactObj.name}</h2>
                <ul className="list">
                    <li>{props.charactObj.species}<img className="icons" alt={props.charactObj.species} src={props.charactObj.species === 'Human' ? anatomy : ufo}></img></li>

                    <li>{props.charactObj.status}<img className="icons" alt={props.charactObj.status} src={props.charactObj.status === 'Alive' ? alive : rip}></img></li>
                    <li>{props.charactObj.origin.name} </li>
                    <li> Episode: {props.charactObj.episode.length}</li>
                </ul>
            </div>
            </div>
            
            <Link to='/'>
                <div className="goback">
            <img
            className='character-detail-icon'
            alt='Volver'
            src={details}
          ></img>
          <p className='character-detail-return'> Go Back </p>
                {/* <button type="button" src={rick}>Volver</button> */}
                </div>
            </Link>
        </div>
        </React.Fragment>
    )
}


export default CharacterDetails;