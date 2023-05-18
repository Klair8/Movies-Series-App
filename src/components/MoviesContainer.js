import React from 'react';
import MovieCard from './MovieCard';


const MoviesContainer =({movies}) =>{

  return (
    <div className='mcontainer'>
      {movies && movies.map((elem, i)=>{
        return (
          <MovieCard 
            key={i} 
            id={movies[i].imdbID}
            Title={movies[i].Title} 
            Year={movies[i].Year} 
            Poster={movies[i].Poster}/>  
          )
      })  
      }
    </div>
  );
};



export default MoviesContainer;


