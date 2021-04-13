import React, { useState } from 'react';
import ActorCard from '../../component/ActorCard/ActorCard';
import ActorModel from '../../model/ActorModel';
import { Container, Row , Col } from 'react-bootstrap';
import { act } from 'react-dom/test-utils';



function ActorsPage(params) {
    const [actors, setActors] = useState([
        new ActorModel("Brad","Btt", "1963/12/18", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/?ref_=nm_mv_close#actor"),
        new ActorModel("Angelina", "Jolie", "06-04-1975", "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001401/?ref_=nv_sr_srsg_3"),
        new ActorModel("Larry","Tavid","07-02-1947","https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0202970/?ref_=nv_sr_srsg_0"),
        new ActorModel("Julia","Aouis-Dreyfus", "01-13-1961", "https://m.media-amazon.com/images/M/MV5BMTYzMDM2MTg2Nl5BMl5BanBnXkFtZTcwODQ0OTA1Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000506/?ref_=tt_ov_st_sm")
    ]);
    const [filterText, setFilterText] = useState("");
    const [sortBy, setSortBy]= useState("");

    const actorsFiltered = actors.filter( (actor) => actor.firstName.toLowerCase().includes(filterText) || 
                                    actor.lastName.toLowerCase().includes(filterText));
    // console.log(actorsFiltered);    

    // const sortedFilterFirstName = actors.sort( (a,b) => a.firstName.toLowerCase() > b.firstName.toLowerCase());
    // console.log("sort");
    // console.log(sortedFilterFirstName);
    const sortedFilterFirstName = actors.sort( (a,b) => aSort(a.firstName.toLowerCase(),b.firstName.toLowerCase()));
    console.log("sortedFilterFirstName");
    console.log(sortedFilterFirstName);

    const sortedFilterLastName = actors.sort( (a,b) => aSort(a.lastName.toLowerCase(),b.lastName.toLowerCase()));
    console.log("sortedFilterLastName");
    console.log(sortedFilterLastName);

    const sortedFilterAge = actors.sort( (a,b) => a.getAge() - b.getAge() );
    console.log("sortedFilterAge");
    console.log(sortedFilterAge);
    
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

    const actorRows = actorsFiltered.map(actor => <ActorCard actor={actor} />)

    return (
      
       <Container>
            <h1> Actor Gallery</h1>
            <input value={filterText} onChange={(e) => setFilterText(e.target.value)} 
                    placeholder="Filter by a first or Last name" className="filterInp"></input>
             <label>Sort By</label>
             <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="firstName">First Name</option>
                <option value="1lastName">Last Name</option>
                {/* <option value="2">age</option> */}
            </select>      
             <Row>
                 {actorRows}               
            </Row>
        </Container>
        );
    
}

export default ActorsPage;