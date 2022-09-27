import React from 'react'
import { Card, Col ,Row} from 'react-bootstrap'

 function CardItem({itemsData}) {

  return (
    <Row >
      {
        itemsData.length >= 1 ?(itemsData.map((item)=>{
        
          return(
            <Col key={item.id} sm="12" className='mb-3' >
          <Card className='d-flex flex-row'>
          <Card.Img className='img-item' variant="top"  src={item.imgUrl} />
            <Card.Body>
              <Card.Title className='d-flex justify-content-between item-price'>
                <div> {item.titel}</div>
                <div >{item.price}</div>
                </Card.Title>
              <Card.Text className='py-2'>
               {item.descreptin}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          )
        })) : <h1 className='text-center'>لا توجد اصناف</h1>
      }
        
    </Row>
  )
}

export default CardItem;