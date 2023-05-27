
import React from 'react';

import { TodoContext } from '../TodoContext';

import './TodoCounter.css';



const TodoCounter = () => {

    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return (

        <h1 className='TodoCounter'>
            Completaste <span>{completedTodos}</span> tareas de <span>{totalTodos}</span>.
        </h1>

    )
}

export default TodoCounter;
