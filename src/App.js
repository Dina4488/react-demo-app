
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ActorsPage from './pages/ActorsPage/ActorsPage';

function App() {
  return (
    <Container>
      <div className="p-cars">
        <ActorsPage/>
      </div>
    </Container>
  );
}

export default App;
