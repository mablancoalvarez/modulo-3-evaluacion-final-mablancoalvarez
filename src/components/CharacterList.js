import React from 'react';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';

const CharacterList = (props) => {
console.log(props)
    return (
        <ul className="character-list">
            {props.data
                .filter(charactObj => props.inputValue === '' || charactObj.name.toLowerCase().includes(props.inputValue.toLowerCase()))
                .map(charactObj =>
                    <li key={charactObj.id}>
                        <Link to={`/character/${charactObj.id}`}>
                            <CharacterCard
                                image={charactObj.image}
                                name={charactObj.name}
                                specie={charactObj.species}
                            />
                        </Link>
                    </li>
                )}
        </ul>

    )
}



export default CharacterList;