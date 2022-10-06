import {FETCH_FILMS, FETCH_FILMS_ERROR, FETCH_FILMS_SUCCESS} from "../reducers/FilmReducer";
import axios from "axios";

export const fetchFilms = () => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_FILMS});
            const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1");
            console.log(response);
            dispatch({type: FETCH_FILMS_SUCCESS, payload: response.data.results})
        } catch (e) {
            dispatch({type: FETCH_FILMS_ERROR,payload: "FETCHING FILMS ERROR" })
        }
    }
}
