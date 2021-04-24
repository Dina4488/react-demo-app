import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './MovieCard.css';

function MovieCard({movie}) {
    return (       
        <Col xs={12} md={6} lg={3}>              
                <Card className="class-movie">
                <Card.Img variant="top" src={movie.poster} />                 
                    <Card.Body className="body">
                        <Card.Title className="fixName">
                           {movie.movieName}                        
                            </Card.Title>                            
                        <Card.Text>
                       <span>Movie length: {movie.length}</span>     
                       <span>Director:  {movie.director}</span>
                       <span> Main actors: {movie.mainStars}</span>
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Col>
        
    );
}

export default MovieCard;