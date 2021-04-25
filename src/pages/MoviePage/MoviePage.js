import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MovieCard from '../../component/MovieCard/MovieCard';
import SearchBox from '../../component/SearchBox/SearchBox';
import MovieModel from '../../model/MovieModel';
import './MoviePage.css';

function MoviePage(props) {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);    

    function handleSearchChange(newSearchText) {
        setSearchText(newSearchText);

        if (newSearchText) {
            // Here we should call TMDB
            const searchURL = "https://api.themoviedb.org/3/search/movie?api_key=4e214b891886fcf04facf7c227f3a489&page=1&include_adult=false&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setResults(response.data.results);
            });           
        } else {
            setResults([]);
        }
    }

    function addMovie(resultIndex) {
        // Adding the actor to the view        
        
        const movieId = results[resultIndex].id;
        const movieName= results[resultIndex].title;        
        const moviePoster = "https://image.tmdb.org/t/p/w500/" + results[resultIndex].poster_path;

        const movieTimeURL = "https://api.themoviedb.org/3/movie/" + movieId +"?api_key=4e214b891886fcf04facf7c227f3a489&page=1&include_adult=false" ; 
        const movieDetailsURL = "https://api.themoviedb.org/3/movie/" + movieId +"/credits?api_key=4e214b891886fcf04facf7c227f3a489&page=1&include_adult=false" ; 
        
        const getMovieTimeURL =  axios.get(movieTimeURL);
        const getMovieDetailsURL = axios.get(movieDetailsURL);
        
        Promise.all( [getMovieTimeURL , getMovieDetailsURL]).then( responses => {           
            setMovies(movies.concat(
                new MovieModel(movieName,
                               responses[0].data.runtime + " min ",
                               moviePoster,
                               responses[1].data.crew[0].name,
                               (responses[1].data.cast[0].name +  " and  " +
                                responses[1].data.cast[1].name
                                )                
                            )));
    });
                  
        // Cleaning up the SearchBox
        setResults([]);
        setSearchText("");
    }

    return (
        <div className="p-actors">
            <Container>            
            <h1> Search a Movie</h1>        
                <SearchBox
                    placeholder="Search a Movie..." 
                    searchText={searchText} 
                    onSearchChange={handleSearchChange}
                    results={results.map(result => result.title)}
                    onResultSelected={addMovie}/>
                <Row>
                    {movies.map(movie => <MovieCard movie={movie}/>)}
                </Row>
            </Container>
        </div>
    );

}    

export default MoviePage;