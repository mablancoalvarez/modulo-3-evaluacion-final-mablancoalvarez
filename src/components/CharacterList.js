import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
   
    return (
        <ul className="character-list">
            {props.data
                .sort((characterA, characterB) => {
                    if (characterA.name < characterB.name) return -1;
                    else if (characterA.name > characterB.name) return 1;
                    return 0;
                })

                .filter(charactObj => !props.isAlien || (props.isAlien && charactObj.species === 'Alien'))
                .filter(charactObj => !props.isHuman || (props.isHuman && charactObj.species === 'Human'))
                .filter (charactObj => !props.isAlive || (props.isAlive && charactObj.status === 'Alive'))
                .filter(charactObj => props.inputNumber === '' || charactObj.episode.length === parseInt(props.inputNumber) )
                .filter(charactObj => props.inputLocation === '' || charactObj.location.name.toLowerCase().includes(props.inputLocation.toLowerCase()))
                .filter(charactObj => props.inputValue === '' || charactObj.name.toLowerCase().includes(props.inputValue.toLowerCase()))
                .map(charactObj =>
                    <li key={charactObj.id}>
                        <Link to={`/character/${charactObj.id}`}>
                            <CharacterCard
                                image={charactObj.image}
                                name={charactObj.name}
                                specie={charactObj.species}
                                id={charactObj.id}
                            />
                        </Link>
                    </li>
                )}
        </ul>
    )
}

export default CharacterList;