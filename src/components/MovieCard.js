import React from 'react';
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ Title,Year,Poster,id}) => {

  const navigate = useNavigate();

  const handleMovieDetails= (id) => {
    console.log('Clicked the details button');
    navigate('/MovieDetails', { state: { id } });
    console.log('id from moviecard',id)  // working
  };
  
  return(
    <div className='Moviecards'>
        <div style={{ width: '350px', height: '450px' }}>
           <img src={Poster} alt={Title} style={{ width: '100%', height: '100%' }} />
        </div>
        <br></br>
        <h4>{Title}</h4><p>{Year}</p>
        <button className="btnDetails" onClick={() => handleMovieDetails(id)} > 
              Details </button>
    </div>
)
};

export default MovieCard;