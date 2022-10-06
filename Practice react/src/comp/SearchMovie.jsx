// import React, {useState} from 'react';
// import {useEffect} from "react";
// import {useParams} from "react-router-dom";
// import MovieItem from "./MovieItem";

// const SearchMovie = () => {
//     const params = useParams("query");
//     const [movies, setMovies] = useState([]);
//     const [loaded, setLoaded] = useState(false);
//     useEffect(() => {
//         setLoaded(false);
//         fetch("https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" + params.query + "&page=1")
//             .then(res => res.json())
//             .then(data => {
//                 setMovies(data.results);
//                 setLoaded(true);
//             })
//     }, [params.query]);
//     return (
//         <div>
//             {
//                 !loaded ? <h3>Loading...</h3> :
//                     <div className="movie-list">
//                         {
//                             movies.map((movie) =>
//                             <MovieItem key={movie.id} movie={movie}/>)
//                         }
//                     </div>
//             }
//         </div>
//     );
// };

// export default SearchMovie;