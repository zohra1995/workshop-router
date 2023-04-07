import './App.css';
import SearchBar from './component/SearchBar';
import MovieList from './component/MovieList';
import AddMovie from './component/AddMovie';
import {moviesItems}from './Movies';
import { useState } from 'react';

function App() {
  const [movies,setMovies ]=useState (moviesItems);
  const [byName,setByName ]=useState ("");
  const [byRate,setByRate ]=useState (0);
const add =(newMovie)=> {setMovies([...movies,newMovie])}
  return (
    <div className='app'>
      <SearchBar setByName={setByName} setByRate={setByRate} />
      <MovieList movies={movies} byname={byName} byrate={byRate} />
      <AddMovie add={add}/>      
    </div>
  );
}

export default App;
