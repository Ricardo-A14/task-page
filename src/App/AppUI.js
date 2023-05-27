
import React from 'react';

import TodoItem from '../TodoItem';
import TodoSearch from '../TodoSearch/index.js';
import TodoList from '../TodoList/index.js';
import TodoCounter from '../TodoCounter/index.js';
import CreateTodoButton from '../CreateTodoButton/index.js';

import TodosLoading from '../TodosLoading';
import TodosError from '../TodosError';
import EmptyTodos from '../EmptyTodos';

import Modal from '../Modal';

import TodoForm from '../TodoForm';

import { TodoContext } from '../TodoContext';


const AppUI = () => {

    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } = React.useContext(TodoContext);


    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>

                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

                {
                    searchedTodos.map(todo => (
                        <TodoItem
                            tarea={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                            key={todo.text}
                        />
                    ))
                }

            </TodoList>

            <CreateTodoButton setOpenModal={setOpenModal} />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>)}
        </>
    )
}

export default AppUI


