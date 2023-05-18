import React from 'react'
// import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {getFilm} from '../redux/actions'
import { fetchFilms } from '../redux/actions';
// import MovieCard from './MovieCard';
import MoviesContainer from './MoviesContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


class SearchFilm extends React.Component {
    constructor(props){
     super(props)
     this.state = {
        searchText: "",
      };
     }

     handleSubmit = (e) => {
        e.preventDefault();
        const { fetchFilms } = this.props;   // fetchFilms is the Action
        const searchText = e.target.searchText.value;
        console.log('searchtext',searchText)
        fetchFilms(searchText);
    }
    
    handleChange=(e)=>{
        this.setState({ searchText: e.target.value });
        }

render(){
    console.log('resultrender',this.props.movies)
    const movies = this.props.movies
    console.log('in the render', movies)

    const filteredMovies = movies.filter(movie =>{
        return movie.Title.toLowerCase().includes(this.state.searchText.toLowerCase())
        })
      
    return(
        <>
        <div className='searchForm'>
            <h1> <FontAwesomeIcon icon={faMagnifyingGlass} /> Search Movies, TV Series... </h1>
            <form onSubmit={this.handleSubmit}>
            <br></br>
            <input className='inputSearch'type='text' name="searchText" onChange={this.handleChange} style={{ width: '400px' }}  />   
            <br></br>
            <br></br>
            <button className='btnSearch'type="submit"> Search</button> 
            </form>
        </div>
        <MoviesContainer movies={filteredMovies}/>
        </>
    )
}
}

const mapStateToProps = (state) =>{
     console.log('mapStateToProps',state)  // got the array of the search
    return{
    movies: state.movies
}
}

const mapDispatchToProps = {
    fetchFilms
}

export default connect (mapStateToProps,mapDispatchToProps)(SearchFilm)