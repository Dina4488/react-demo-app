import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

function ActorCard({actor}) {
    return (       
        <Col xs={12} md={6} lg={3}>        
                {/* <Card style={{ width: '18rem' }}> */}
                <Card>
                    <Card.Img variant="top" src={actor.image} />
                    <Card.Body>
                        <Card.Title>{`${actor.firstName}  ${actor.lastName}`}</Card.Title>
                        <Card.Text>
                       {actor.getAge()}
                        </Card.Text>
                        <Button href={actor.link} target="_blank">Go To imdb</Button>
                    </Card.Body>
                </Card>
            </Col>
        
    );
}

export default ActorCard;