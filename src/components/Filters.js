import React from 'react';

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
             <label htmlFor="text-search"></label>
            <input
             type="text" 
             className="inputsearch" 
             placeholder="Search your favourite"
             value={props.value} 
             onChange={updateInputValue} />
        </form>
        </div>
        
    );
}

export default Filters