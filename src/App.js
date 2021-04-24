
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ActorsPage from './pages/ActorsPage/ActorsPage';
import MoviePage from './pages/MoviePage/MoviePage';

function App() {
  return (
    <Container>
      <div className="p-cars">
        <ActorsPage/>
      </div>
      <div className="p-cars">
        <MoviePage/>
      </div>
    </Container>
  );
}

export default App;
