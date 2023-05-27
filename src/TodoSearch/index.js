
import React from 'react';

import './TodoSearch.css';

import { TodoContext } from '../TodoContext';


const TodoSearch = () => {

    const { searchvalue, setSearchValue } = React.useContext(TodoContext);

    return (

        <input
            placeholder="Buscar" className='TodoSearch' value={searchvalue}
            onChange={event => {
                setSearchValue(event.target.value);
            }}
        />

    )
}

export default TodoSearch;
