import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Import necessary components
import DynamicBackground from './dynamBG';
import { TypeAnimation } from 'react-type-animation';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TypeAnimation
          sequence={['Saisha Lakkoju']}
          wrapper="div"
          cursor={true}
          style={{ fontSize: '5em' }}
          repeat={Infinity}
        />

      </header>
     
<Container>

<Container className="my-5">
        <section>
          <h1 className="text-center">Projects</h1>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Project 1</Card.Title>
                  <Card.Text>Description of Project 1. This project involved...</Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Project 2</Card.Title>
                  <Card.Text>Description of Project 2. This project included...</Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Project 3</Card.Title>
                  <Card.Text>Description of Project 3. This project was about...</Card.Text>
                  <Button variant="primary">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <h1 className="text-center">Experience</h1>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Job Title 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Company 1 (Year - Year)</Card.Subtitle>
                  <Card.Text>Brief description of responsibilities and achievements.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Job Title 2</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Company 2 (Year - Year)</Card.Subtitle>
                  <Card.Text>Brief description of responsibilities and achievements.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Job Title 3</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Company 3 (Year - Year)</Card.Subtitle>
                  <Card.Text>Brief description of responsibilities and achievements.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>

        <section>
          <h1 className="text-center">Skills</h1>
          <ul className="list-unstyled text-center">
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Other skills</li>
          </ul>
        </section>

        <section>
          <h1 className="text-center">Contact</h1>
          <p className="text-center">
            If you would like to reach out, please email me at: <a href="mailto:your-email@example.com">your-email@example.com</a>
          </p>
        </section>
      </Container>
      
      
</Container>
      <DynamicBackground />
    </div>
  );
}

export default App;
