import React, { useState } from 'react';
import ActorCard from '../../component/ActorCard/ActorCard';
import ActorModel from '../../model/ActorModel';
import { Container, Row ,Navbar, Form ,FormControl } from 'react-bootstrap';
import NavBar from '../../component/NavBar/NavBar';



function ActorsPage(params) {
    const [actors, setActors] = useState([
        new ActorModel("Prad","Pitt", "1963/12/18", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/?ref_=nm_mv_close#actor"),
        new ActorModel("Angelina", "Jolie", "06-04-1975", "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001401/?ref_=nv_sr_srsg_3"),
        new ActorModel("Larry","David","07-02-1947","https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0202970/?ref_=nv_sr_srsg_0"),
        new ActorModel("Julia","Louis-Dreyfus", "01-13-1961", "https://m.media-amazon.com/images/M/MV5BMTYzMDM2MTg2Nl5BMl5BanBnXkFtZTcwODQ0OTA1Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000506/?ref_=tt_ov_st_sm")
    ]);
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy]= useState("firstName");

    const actorsFiltered = actors.filter( (actor) => actor.firstName.toLowerCase().includes(filterText) || 
                                    actor.lastName.toLowerCase().includes(filterText));
    
    let sortedFilter = "";
    let actorRows = "";

    if (sortBy === "firstName"){
        sortedFilter = actors.sort( (a,b) => aSort(a.firstName.toLowerCase(),b.firstName.toLowerCase()));        
        console.log(sortedFilter);
    } else  if (sortBy === "lastName"){
        sortedFilter = actors.sort( (a,b) => aSort(a.lastName.toLowerCase(),b.lastName.toLowerCase()));       
        console.log(sortedFilter);
    } else if(sortBy === "age"){
        sortedFilter = actors.sort( (a,b) => a.getAge() - b.getAge() );        
        console.log(sortedFilter);
    }
        
    function aSort(a, b) {
        // let fa = a.firstName.toLowerCase(),
        //     fb = b.firstName.toLowerCase();    
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
    
    if(filterText !== ""){
        actorRows = actorsFiltered.map(actor => <ActorCard actor={actor} />)
    } else {
        actorRows = sortedFilter.map(actor => <ActorCard actor={actor} />)
    }    

    return (
      
       <Container>
            <h1> Actor Gallery</h1>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Form inline>
                    <FormControl type="text" className="mr-sm-2"
                        value={filterText} onChange={(e) => setFilterText(e.target.value)} 
                        placeholder="Filter by a first or Last name" className="filterInp" />
                        <Form.Label>Example select</Form.Label>
                        <FormControl as="select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="firstName">First Name</option>
                            <option value="lastName">Last Name</option>
                            <option value="age">age</option>
                        </FormControl>
                </Form>
            </Navbar>                         
            {/* <Navbar filterText={filterText} setFilterText={setFilterText} 
                    sortBy={sortBy} setSortBy={setSortBy}/>                      */}
            {/* <input value={filterText} onChange={(e) => setFilterText(e.target.value)} 
                    placeholder="Filter by a first or Last name" className="filterInp"></input>
             <label>Sort By</label>
             <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="age">age</option>
            </select>             */}
             <Row>
                 {actorRows}               
            </Row>
        </Container>
        );
    
}

export default ActorsPage;