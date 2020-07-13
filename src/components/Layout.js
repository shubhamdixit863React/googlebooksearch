import React, { Component } from 'react';
import { Container,Navbar,Nav,Form ,Button,FormControl} from 'react-bootstrap';
import { Link } from "react-router-dom";
export default class Layout extends Component {

constructor(props)
{
super(props);
}

    render() {
        return (
            <Container fluid>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand >Google Book Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link ><Link to="/">Home</Link></Nav.Link>
      <Nav.Link ><Link to="/search">Search</Link></Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            

{ this.props.children }     
          </Container>
        )
    }
}
