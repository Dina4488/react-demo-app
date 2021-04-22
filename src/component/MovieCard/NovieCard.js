import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './MovieCard.css';

function MovieCard({movie}) {
    return (       
        <Col xs={12} md={6} lg={3}>              
                <Card className="class-movie">                   
                    <Card.Body className="body">
                        <Card.Title className="fixName">
                           {movie.name}
                            </Card.Title>                            
                        <Card.Text>                      
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Col>
        
    );
}

export default MovieCard;