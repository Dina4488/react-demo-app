import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <div>
                 <Container>
                    <h1 className="display-1">Actors and Movies App</h1>
                    <p>Amazing car app!!</p>                
                </Container>
            </div>
        );
    }
}

export default HomePage;