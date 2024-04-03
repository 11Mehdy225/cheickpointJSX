import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nom from './composants/Nom';
import Prix from './composants/Prix';
import Description from './composants/Description';
import Image from './composants/Image';



function App() {
  return (
    <div className="App">
      <Card className="card" style={{ width: '18rem' }}>
      <Image/>
      <Card.Body>
        <Card.Title>
            <Nom/>
        </Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary">
          <Prix/>
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
