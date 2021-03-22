import { combineReducers } from 'redux';
import { ADD_MOVIES,
     ADD_FAVOURITE,
     REMOVE_FAVOURITE,
     SET_SHOW_FAVOURITES, 
     ADD_SEARCH_RESULT, 
     ADD_MOVIE_TO_LIST } from "../actions";

const initialMoviesState = {
    list:[],
    favourites: [],
    showFavourites:false
}

export  function movies (state=initialMoviesState,action){
    console.log('MOVIES REDUCER');
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     };
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list:action.movies
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie,...state.list]
            }
        case ADD_FAVOURITE:
            console.log("hi i am here");
            return {
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return {
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites:action.val
            }
        default:
            return state
    }
}

const initialSearchState = {
    result:{},
    showSearchResults: false
};

export function search (state= initialSearchState, action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result:action.movie,
                showSearchResults:true
            }
        case ADD_MOVIE_TO_LIST:
             return {
                 ...state,
                showSearchResults:false
            }
        default:
            return state;
    }
    console.log("SEARCH REDUCER");
    return state;
};

const initialRootState = {
    movies:initialMoviesState,
    search:initialSearchState
}

// export default function rootReducer(state = initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }

export default combineReducers({
    movies:movies,
    search:search
});

