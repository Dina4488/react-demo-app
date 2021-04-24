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
    const [newResults, setNewResults] = useState([]);

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
        // const length = results[resultIndex].runtime;
        const moviePoster = "https://image.tmdb.org/t/p/w500/" + results[resultIndex].poster_path;

        const movieTimeURL = "https://api.themoviedb.org/3/movie/" + movieId +"?api_key=4e214b891886fcf04facf7c227f3a489&page=1&include_adult=false" ; 
        let movieTime = "";
        axios.get(movieTimeURL).then(response => {
            movieTime= response.data.runtime + " min ";
        });           
        

        const movieDetailsURL = "https://api.themoviedb.org/3/movie/" + movieId +"/credits?api_key=4e214b891886fcf04facf7c227f3a489&page=1&include_adult=false" ; 

        axios.get(movieDetailsURL).then(response => {
            // console.log(response.data.cast[0]);         
            // console.log(response.data.crew[0]);
            const director = response.data.crew[0].name;
            const actors = " ";
            const actor1 = response.data.cast[0].name;
            const actor2 = response.data.cast[1].name;
            setNewResults(response.data.results);
            setMovies(movies.concat(
                            new MovieModel(movieName,
                                           movieTime,
                                           moviePoster,
                                           director,
                                           (actors.concat(actor1 + " and " +actor2))                  
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