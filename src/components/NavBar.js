import React,{useCallback, useState} from "react";
import { Col, Container, Nav, Navbar } from "react-bootstrap";


const NavBar =({filterbysearch})=> { 
  
    const [searchvalue, setsearchvalue] = useState('')
    const onSearch = useCallback(() => {
      filterbysearch(searchvalue)
      }, [
      searchvalue, filterbysearch
      ])
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
          
            <input className="d-flex mx-2"
              type="text"
              placeholder="بحث..."
              onChange={(e)=>setsearchvalue(e.target.value)}
              value={searchvalue}
            />
            <button onClick={()=>onSearch()} className="btn-search">بحث</button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Col>
    )
}
export default NavBar;
