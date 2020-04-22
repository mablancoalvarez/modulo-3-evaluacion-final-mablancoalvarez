import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {

    return(
        <ul className="character-list">
            {props.data
                .filter(charactObj => props.inputValue === '' || charactObj.name.toLowerCase().includes(props.inputValue.toLowerCase()))
                .map(charactObj =>
                    <li key={charactObj.id}>
                        <CharacterCard 
                        image={charactObj.image}
                        name={charactObj.name}
                        specie={charactObj.species} 
                        />
                    </li>
                    )}
        </ul>

    )
}



export default CharacterList;