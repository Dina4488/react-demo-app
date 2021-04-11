import React from 'react';
import { Button, Card, Col ,Row} from 'react-bootstrap';

function ActorRow({actor}) {
    return (
                       
        <Col xs={6} md={3}>
                <Card style={{ width: '18rem' }}>
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

export default ActorRow;