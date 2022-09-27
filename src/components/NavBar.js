import React,{useState} from "react";
import { Col, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";


const NavBar =({filterbysearch})=> { 
  
    const [searchvalue, setsearchvalue] = useState('')
    const onSearch=()=>{
      
      filterbysearch(searchvalue)

    }
    return(
      <Col>
        <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#"><div className="brand-color">مطعم</div> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex ">
            <FormControl
              type="text"
              placeholder="بحث..."
              className="mx-2"
              onChange={(e)=>setsearchvalue(e.target.value)}
              value={searchvalue}
            />
            <button onClick={()=>onSearch()} className="btn-search">بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
    )
}
export default NavBar;
