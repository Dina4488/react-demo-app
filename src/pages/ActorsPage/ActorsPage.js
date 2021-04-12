import React, { useState } from 'react';
import ActorCard from '../../component/ActorCard/ActorCard';
import ActorModel from '../../model/ActorModel';
import { Container, Row , Col } from 'react-bootstrap';



function ActorsPage(params) {
    const [actor, setActors] = useState([
        new ActorModel("Brad","Pitt", "1963/12/18", "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000093/?ref_=nm_mv_close#actor"),
        new ActorModel("Angelina", "Jolie", "06-04-1975", "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_UY317_CR22,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0001401/?ref_=nv_sr_srsg_3"),
        new ActorModel("Larry","David","07-02-1947","https://m.media-amazon.com/images/M/MV5BMTg1Njg4MzQxNV5BMl5BanBnXkFtZTcwNDgzNDUwMw@@._V1_UY317_CR7,0,214,317_AL_.jpg","https://www.imdb.com/name/nm0202970/?ref_=nv_sr_srsg_0"),
        new ActorModel("Julia","Louis-Dreyfus", "01-13-1961", "https://m.media-amazon.com/images/M/MV5BMTYzMDM2MTg2Nl5BMl5BanBnXkFtZTcwODQ0OTA1Mg@@._V1_UY317_CR7,0,214,317_AL_.jpg", "https://www.imdb.com/name/nm0000506/?ref_=tt_ov_st_sm")
    ]);
    const [filter, setFilter] = useState("");

    const actorRows = actor.map(actor => <ActorCard actor={actor} />)

    return (
      
       <Container>
           <h1> Actor Gallery</h1>
           <input value={filter} onChange={(e) => setFilter(e.target.value)} ></input>
             <Row>
                 {actorRows}               
            </Row>
        </Container>
        );
    
}

export default ActorsPage;