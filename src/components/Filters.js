import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        props.handleInputValue(evt.currentTarget.value)
    }
    const updateInputEpisode = (evt) => {
        props.handleInputEpisode(evt.currentTarget.value)
    }
    const handlePrevent = (evt) => {
        evt.preventDefault();
    }
    const updateCheckbox = (evt) => {
        props.handleCheckbox(evt.currentTarget.id);
    }
    const updateInputLocation = (evt)=>{
        props.handleInputLocation(evt.currentTarget.value)
    }
    return (
        <div className="container-text__search">
            <form onSubmit={handlePrevent}>
                <div className="search">
                    <i className="fas fa-search"></i>
                    <label htmlFor="text-search"></label>
                    <input
                        type="text"
                        className="inputsearch"
                        placeholder="Search your favourite"
                        value={props.value}
                        onChange={updateInputValue}
                    />
                    <input type="number"
                        className="inputsearch"
                        placeholder="Search your episode"
                        value={props.episode}
                        onChange={updateInputEpisode} />

                    <input type="text"
                        className="inputsearch"
                        placeholder="Search your location"
                        value={props.valuelocation}
                        onChange={updateInputLocation}/>
                </div>
                <div className="container-checkbox">
                    <div className="container-human">
                        <label htmlFor="human">Human</label>
                        <input onChange={updateCheckbox} type="checkbox" id="Human" name="human" value="Human" checked={props.isHuman} />
                    </div>
                    <div className="container-alien">
                        <label htmlFor="alien">Alien</label>
                        <input onChange={updateCheckbox} type="checkbox" id="Alien" name="Alien" value="Alien" checked={props.isAlien} />
                    </div>
                </div>
            </form>

        </div>
    );
}
Filters.propTypes = {
    value: PropTypes.string
};

export default Filters