import './FilterCheckBox.css';
import React from 'react';


function FilterCheckBox(props) {

    return (
        <label className='filtercheckbox__label' >
            <input type="checkbox" 
            className="filtercheckbox__input" 
            id='filtercheckbox'
            name='filtercheckbox'
            onChange={props.onChange}
            value={props.value}
            checked={props.value || ''}/>
            <span className="filtercheckbox__slider" />
        </label>
    );
}

export default FilterCheckBox;