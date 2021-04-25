
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/MoviePage/MoviePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <HashRouter>
          <Switch>
              <Route exact path="/"><HomePage/></Route>
              <Route exact path="/actors"><ActorsPage/> </Route>
              <Route exact path="/movies"><MoviePage/></Route>
              <Route path="/"><NotFoundPage/></Route>
          </Switch>
      </HashRouter>   
    </div>
  );
}

export default App;
