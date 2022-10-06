import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../store/action-creators/films";
import MovieItem from './MovieItem';

const MovieList = () => {
    const {films, loading, error} = useSelector(state =>state.films)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilms())
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERRORegsv</div>
    }

    return (
        <div>
             <h1>Popular films</h1>
                
                <div className="movie-list">
                   
                    {
                    films.map(fil =>
                   <MovieItem key={fil.id} movie={fil}/> 
                // <div key={fil.id}> {fil.title}</div>
                    )
                    }
                </div>

            
        </div>
    );
};

export default MovieList;