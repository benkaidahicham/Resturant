import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Category({filterbyCategory ,allCategory}) {
    
    const onfilter =(cat)=>{
        filterbyCategory(cat)
    }
  return (

    <Row className='my-2 mb-5'>
        <Col sm='12' className='justify-content-center d-flex'>
          {
            allCategory.length >=1 ? (allCategory.map((cat)=>{
              return(
                <div>
                <button onClick={()=>onfilter(cat)} className='btn mx-2'>{cat}</button>
                </div>
              )
            })) : <h4>لا توجد تصنيفات</h4>
          }
        </Col>
    </Row>
  )
}
