import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import ExerciseList from './components/exerciseList';
import EditExercise from './components/editExercise';
import CreateUser from './components/createUser';
import CreateExercise from './components/createExercise';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Navbar />
      <Route path="/" exact component={ExerciseList}></Route>
      <Route path="/create"  component={CreateExercise}></Route>
      <Route path="/user"  component={CreateUser}></Route>
      <Route path="/edit/:id"  component={EditExercise}></Route>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
