import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Counter from './components/Counter'
import Home from './components/Home';
import Register from './components/Register';
import RecipeList from './components/Recipes';
import Website from './components/Website';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/display' element={<Display />}></Route>
        <Route path='/counter' element={<Counter />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/recipes' element={<RecipeList />}></Route>
        <Route path='/website' element={<Website />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
