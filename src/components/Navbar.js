import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import C from '../images/C.png';


function Bar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
          <a href="https://clairesacuto-portfolio.vercel.app/">
            <img
              alt=""
              src={C} 
              width="70"
              height="70"
            /> </a>
            
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          MOVIES / SERIES APP 
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Bar;