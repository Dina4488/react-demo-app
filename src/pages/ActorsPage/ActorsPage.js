import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ActorCard from '../../component/ActorCard/ActorCard';
import ActorModel from '../../model/ActorModel';
import { Container, Row ,Spinner, Form ,FormControl } from 'react-bootstrap';
import NavBar from '../../component/NavBar/NavBar';
import './ActorsPage.css';


function ActorsPage(params) {   
    const [actors, setActors] = useState("");
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy]= useState("firstName");

    useEffect( () => {
        const pathPre = process.env.PUBLIC_URL; 
        axios.get(pathPre.concat("/actors.json")).then( response => {
            setActors(response.data.map( actor => new ActorModel(actor.firstName, actor.lastName,
                                        actor.birthday , actor.image, actor.link) ));
        });
       } , [] );
     
   
       let actorsFiltered;
       let sortedFilter;
       if (actors)  {
            actorsFiltered = actors.filter( (actor) => actor.firstName.toLowerCase().includes(filterText.toLowerCase()) || 
                                            actor.lastName.toLowerCase().includes(filterText.toLowerCase()));
            
            sortedFilter = "";

            if (sortBy === "firstName"){
                sortedFilter = actorsFiltered.sort( (a,b) => aSort(a.firstName.toLowerCase(),b.firstName.toLowerCase()));        
            } else  if (sortBy === "lastName"){
                sortedFilter = actorsFiltered.sort( (a,b) => aSort(a.lastName.toLowerCase(),b.lastName.toLowerCase()));        
            } else if(sortBy === "age"){
                sortedFilter = actorsFiltered.sort( (a,b) => a.getAge() - b.getAge() );        
            }
                
            function aSort(a, b) {
                if (a < b) {
                    return -1;
                }
                if (a > b) {
                    return 1;
                }
                return 0;
            };
        }
    // if(filterText !== ""){
    //     actorRows = actorsFiltered.map(actor => <ActorCard actor={actor} />)
    // } else {
    //     actorRows = sortedFilter.map(actor => <ActorCard actor={actor} />)
    // }    

    return (
      
       <Container className="class-container">
            <h1> Actor Gallery</h1>        
                <Form className="row filter"> 
                <div className="col-lg-8 col-md-8 col-12 " >                    
                    <FormControl type="text" 
                        value={filterText} onChange={(e) => setFilterText(e.target.value)} 
                        placeholder="Filter by a first or Last name"
                        />
                </div>                    
                <div className="col-lg-4 col-md-4 col-12">
                    <FormControl as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)} >
                        <option value="firstName">First Name</option>
                        <option value="lastName">Last Name</option>
                        <option value="age">age</option>
                    </FormControl>
                </div>                 
                </Form>           
             <Row>
                { actors ?
                 
                 sortedFilter.map(actor => <ActorCard actor={actor} />)
                    :
                    <Spinner animation="border"/>   
                }               
            </Row>
        </Container>
        );
    
}

export default ActorsPage;