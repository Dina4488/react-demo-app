import React from 'react';
import { Card, Col, Container , Row } from 'react-bootstrap';
import './MovieCard.css';

function MovieCard({movie}) {
    return ( 
             <div className="class-movie">
                   <img  src={movie.poster}/>                
                <div className="fixName">
                    <h3>{movie.movieName}   </h3>
                    <p>Movie length: {movie.length}</p>     
                    <p>Director:  {movie.director}</p>
                    <p> Main actors: {movie.mainStars}</p>
                </div>
            </div>    
    );
}

export default MovieCard;