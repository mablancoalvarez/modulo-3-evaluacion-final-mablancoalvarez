import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        props.handleInputValue(evt.currentTarget.value)
    }
    const handlePrevent = (evt) => {
        evt.preventDefault();
    }
    const updateCheckbox = (evt) => {
        props.handleCheckbox(evt.currentTarget.id);
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