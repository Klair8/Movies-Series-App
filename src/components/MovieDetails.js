import React from 'react';
import { useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovie } from '../redux/actions';
import Navbar from './Navbar';
import Footer from './Footer';

const MovieDetails = () => {
  const location = useLocation();
  const id = location.state.id;

  const dispatch = useDispatch();

  const movie = useSelector(state => state.movie);
  console.log('moviedetail:', movie)

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);


  return (
    <>
    <Navbar/>
    <br></br>
    <div className='detailsPage'>
      {movie && (
        <div className='detailsAll'>
          <img src={movie.Poster} alt={movie.Title} />
          <div className='detailsData'>
  <h2>{movie.Title}</h2>
  <br></br>
  <br></br>
  <table style={{ border: '1px solid black',padding: '8px', height:'60%', width: '100%' }}>
    <tbody>
    <tr >
        <td><strong>Genre:</strong></td>
        <td>{movie.Genre}</td>
      </tr>
      <tr>
        <td><strong>Released:</strong></td>
        <td>{movie.Released}</td>
      </tr>
      <tr>
        <td><strong>imdbRating:</strong></td>
        <td>{movie.imdbRating}</td>
      </tr>
      <tr>
        <td><strong>Director:</strong></td>
        <td>{movie.Director}</td>
      </tr>
      <tr>
        <td><strong>Writers:</strong></td>
        <td>{movie.Writer}</td>
      </tr>
      <tr>
        <td><strong>Actors:</strong></td>
        <td>{movie.Actors}</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>      
      )}
        {movie && (
        <div className='detailsAbout'>
          <h3>About</h3>
          <p>{movie.Plot}</p>
          <a className='btnDetails' href={`https://www.imdb.com/title/${movie.imdbID}`}>View on IMDb</a>
          <Link to="/"  className='btnDetailSearch' style={{ marginLeft: '10px' , color:'white' }}>Go Back to the Search</Link>
        </div>
        )}
    </div>
    <br></br>
    <Footer/>
    </>
  );
};



export default MovieDetails;


