let initialState={
    searchText: '',
    movies: [],
    loading: false,
    movie: []
}

export const reducer = (state = initialState, action={}) => {
        switch (action.type) {
            case "SEARCH_MOVIE":
            return {
             ...state,
             searchText: action.payload
            };
          case "FETCH_MOVIES":
            return {
              ...state,
              movies: action.payload.Search || [],
              loading: false,
            };
            case "FETCH_MOVIE":
              return {
                ...state,
                movie: action.payload,
                loading: false,
              };
          case "LOADING":
            return {
              ...state,
              loading: true,
            };
          default:
            return state;
        }
      };
      