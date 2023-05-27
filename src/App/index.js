import React from 'react';


import AppUI from './AppUI';

import './App.css';
import { TodoProvider } from '../TodoContext';

/*
const defaultTasks = [
  { text: "", completed: false },
  { text: "", completed: false },
  { text: "", completed: false },
  { text: "", completed: false },
  { text: "", completed: false },
  { text: "", completed: false },
  { text: "", completed: false },
  { text: "", completed: false }
];
*/


function App() {

  return (

    <TodoProvider>

      <AppUI />

    </TodoProvider>

  );

}





export default App;
