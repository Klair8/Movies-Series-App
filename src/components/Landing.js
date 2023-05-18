import React from 'react'
import SearchForm from './SearchForm'
import MoviesContainer from './MoviesContainer'
import Footer from './Footer'
import Navbar from './Navbar'

const HomePage = () => {
    return(
        <div>
        <Navbar/>
        <SearchForm />
        <MoviesContainer/>
        <Footer/>
        </div>
    )
}


export default HomePage