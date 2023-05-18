export const getFilm = (movie_Obj) =>{
        return{
            type:'SEARCH_MOVIE',
            payload: movie_Obj
        }  
}


export const fetchFilms =(text,id, plot, yearofr) => (dispatch, getState) =>{
    dispatch( { type: "LOADING" } )
  fetch(`http://www.omdbapi.com/?s=${text}&type=movie&apikey=fbe2eea3&i=${id}&plot=${plot}&y=${yearofr}`)
      .then(res=>res.json())
      .then(data=>{
        dispatch({
            type:'FETCH_MOVIES',
            payload:data
        })})
}

export const fetchMovie =(id) => (dispatch) =>{
    dispatch( { type: "LOADING" } )
  fetch(`http://www.omdbapi.com/?apikey=fbe2eea3&i=${id}`)
      .then(res=>res.json())
      .then(data=>{
        dispatch({
            type:'FETCH_MOVIE',
            payload:data
        })})
}