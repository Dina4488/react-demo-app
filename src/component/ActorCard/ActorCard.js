import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './ActorCard.css';

function ActorCard({actor}) {
    return (       
        <Col xs={12} md={6} lg={3}>              
                <Card className="class-card">
                    <Card.Img variant="top" src={actor.image} />
                    <Card.Body className="body">
                        <Card.Title className="fixName">
                            <a href={actor.link} target="_blank">
                                {`${actor.firstName}  ${actor.lastName}`}
                            </a>
                            </Card.Title>                            
                        <Card.Text>
                       {actor.getAge()}
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Col>
        
    );
}

export default ActorCard;