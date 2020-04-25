import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        props.handleInputValue(evt.currentTarget.value)
    }
    const handlePrevent = (evt)=>{
        evt.preventDefault();
    }

    return (
        <div className="container-text__search">
             
        <form onSubmit={handlePrevent}>
        <i className="fas fa-search"></i>
             <label htmlFor="text-search"></label>
            <input
             type="text" 
             className="inputsearch" 
             placeholder="Search your favourite"
             value={props.value} 
             onChange={updateInputValue}
              />     
        </form>
        </div>
        
    );
}
Filters.propTypes = {
    value: PropTypes.string
};

export default Filters