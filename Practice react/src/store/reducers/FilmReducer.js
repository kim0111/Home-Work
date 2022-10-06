const defaultState ={
    films:[],
    loading: false,
    error: null
}

export const FETCH_FILMS = "FETCH_FILMS";
export const FETCH_FILMS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_FILMS_ERROR = "FETCH_FILMS_ERROR";

export const filmReducer = (state = defaultState, action)=>{
    switch(action.type){
        case FETCH_FILMS:
            return {...state, loading: true}
            case FETCH_FILMS_SUCCESS:
                return {loading: false, error: null, films: action.payload}
            case FETCH_FILMS_ERROR:
                return {loading: false, error: action.payload, films: []}
            default:
                return state;
    }
}

export const fetchFilmsAction = (payload) => ({type: FETCH_FILMS, payload: payload});