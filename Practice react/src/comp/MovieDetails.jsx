// import React, {useState} from 'react';
// import {useEffect} from "react";
// import {useParams, useNavigate} from "react-router-dom";
// // useHistory = useNavigate

// const MovieDetails = () => {
//     const [movie, setMovie] = useState();
//     const params = useParams("id");
//     const [loaded, setLoaded] = useState(false);
//     const navigate = useNavigate();
//     // const img_link = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
//     useEffect(() => {
//         console.log(params.id);
//         fetch("https://api.themoviedb.org/3/movie/" + params.id + "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU")
//             .then(res => res.json())
//             .then(data => {
//                 setMovie(data);
//                 setLoaded(true);
//             });
//     }, [params.id]);

//     const goBack = () => {
//         navigate("/movies");
//     }

//     return (
//         <div>
//             {
//                 (loaded && movie) ?
//                     <div className="flex-column">
//                         <div className="flex-row">
//                             <div>
//                                 <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""/>
//                             </div>
//                             <div>
//                                 <h2>{movie.title}</h2>
//                                 <p>Tagline: {movie.tagline}</p>
//                                 <p>Release Date: {movie.release_date}</p>
//                                 <p>Genres: {movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}</p>
//                                 <p>Rating: {movie.vote_average}</p>
//                             </div>
//                         </div>
//                         <div>
//                             <p>Описание: {movie.overview}</p>
//                         </div>
//                         <button onClick={goBack}>Назад</button>
//                     </div>

//                     : <h3>loading...</h3>
//             }
//         </div>
//     );
// };

// export default MovieDetails;