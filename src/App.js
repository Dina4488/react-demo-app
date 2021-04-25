
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviePage/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <HashRouter>
        <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/actors"><ActorsPage/> </Route>
            <Route exact path="/movies"><MoviePage/></Route>
            <Route path="/"><NotFoundPage/></Route>
        </Switch>
    </HashRouter>   
  );
}

export default App;
