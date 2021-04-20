import React, { useState } from 'react';
import ActorCard from '../../component/ActorCard/ActorCard';
import ActorModel from '../../model/ActorModel';
import { Container, Row ,Navbar, Form ,FormControl } from 'react-bootstrap';
import NavBar from '../../component/NavBar/NavBar';
import './ActorsPage.css';


function ActorsPage(params) {
    const [actors, setActors] = useState([
        new ActorModel("Prad","Pitt", "12-18-1963", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/?ref_=nm_mv_close#actor"),
        new ActorModel("Angelina", "Jolie", "06-04-1975", "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001401/?ref_=nv_sr_srsg_3"),
        new ActorModel("Larry","David","07-02-1947","https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0202970/?ref_=nv_sr_srsg_0"),
        new ActorModel("Julia","Louis-Dreyfus", "01-13-1961", "https://m.media-amazon.com/images/M/MV5BMTYzMDM2MTg2Nl5BMl5BanBnXkFtZTcwODQ0OTA1Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000506/?ref_=tt_ov_st_sm"),
        new ActorModel("Pedro","Pascal", "04-02-1975", "https://m.media-amazon.com/images/M/MV5BYzQ5Yzg1NzktMDcxNC00ZDc1LWJlMjEtNTg2ZjRlOTk4ZDNjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY317_CR5,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0050959/?ref_=nv_sr_srsg_0"),
        new ActorModel("Elisabeth","Moss", "07-24-1982", "https://m.media-amazon.com/images/M/MV5BNTMwMDg1MDkyNV5BMl5BanBnXkFtZTcwNzEwMzg1Nw@@._V1_UY317_CR131,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0005253/?ref_=nv_sr_srsg_3")
    ]);
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy]= useState("firstName");

    const actorsFiltered = actors.filter( (actor) => actor.firstName.toLowerCase().includes(filterText.toLowerCase()) || 
                                    actor.lastName.toLowerCase().includes(filterText.toLowerCase()));
    
    let sortedFilter = "";

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
                 {sortedFilter.map(actor => <ActorCard actor={actor} />)}               
            </Row>
        </Container>
        );
    
}

export default ActorsPage;