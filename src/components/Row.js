import React, { useState, useEffect } from 'react'
// import YouTube from 'react-youtube';
import axios from './axios';
// import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';
import './Row.css';


const baseurl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			// console.log(request);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]);
	// console.log(movies);
	// const opts = {
	// 	height: "390",
	// 	width: "100%",
	// 	playerVars: {
	// 		//https://developers.google.com/youtube/player_parameters?hl=ar 
	// 		autoplay: 1,
	// 	}
	// }
	//[]code will run once every time row loads
	// const handleClick = (movie) => {
	// 	if (trailerUrl) {
	// 		setTrailerUrl('');
	// 	} else {
	// 		movieTrailer(movie?.name || "").then(url => {
	// 			const urlParams = new URLSearchParams(new URL(url).search);
	// 			setTrailerUrl(urlParams.get('v'));
	// 		}).catch((error) => console.log(error))

	// 	}
	// }
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__posters">

				{movies.map(movie => (
					<img
						key={movie.id}
						// onClick={() => { handleClick(movie) }}
						className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
				))}
			</div>
			{/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
			{/* <YouTube videoId='MSxSCGrRxV4' opts={opts} /> */}
		</div>
	)
}

export default Row
