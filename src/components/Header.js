import React from 'react'
import { Col, Row } from "react-bootstrap";
function Header() {
  return (
    <Row>
      <Col sm='12' className='justify-content-center text-center'>
      <div className='titel'>قائمة الطعام</div>
      <div className='d-flex justify-content-center'><p className='underline '></p></div>
      </Col>
    </Row>
  )
}
export default Header;
