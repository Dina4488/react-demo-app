import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';

class HomePage extends Component {
    render() {
        return (
            <div>
                 <Container>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"                            
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Find a Movie</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            // src="https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg"
                            // src="https://kids.hidabroot.org/wp-content/uploads/2020/07/movies.png"
                            src="https://media.gettyimages.com/photos/happy-latin-american-couple-at-the-movies-picture-id688782978?s=612x612"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Find An Actor</h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                       
                        </Carousel>
                </Container>
            </div>
        );
    }
}

export default HomePage;