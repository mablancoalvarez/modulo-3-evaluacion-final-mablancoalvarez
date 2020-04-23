import React from 'react';

const Filters = (props) => {

    const updateInputValue = (evt) => {
        evt.preventDefault();
        props.handleInputValue(evt.currentTarget.value)
    }
    return (
        <form>
             <label htmlFor="text-search">Busca tu favorito</label>
            <input
             type="text" 
             className="inputsearch" 
             placeholder="Search"
             value={props.value} 
             onChange={updateInputValue} />
        </form>
    );
}

export default Filters