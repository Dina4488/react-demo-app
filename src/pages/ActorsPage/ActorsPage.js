import React, { Component } from 'react';
import ActorRow from '../../component/ActorRow/ActorRow';

class ActorsPage extends Component {
    render() {
        return (
            <div className="p-cars">
                <h1>Actors Page</h1>
                <ActorRow/>
            </div>
        );
    }
}

export default ActorsPage;