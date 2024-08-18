import React from 'react'
import {Col,Row,Container,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <section  style={{height:'500px'}}>
        <Container className='py-10 my-10'>
            <Row>
                <Col lg='12' className='text-center py-5 my-10 m '>
                    <div className='thank__you'>
                        <span>
                          <i style={{color:'green'}}className="fa-solid fa-square-check"></i>
                        </span>
                        <h1 style={{fontFamily:'cursive'}}className='mb-3 fw-semibold'>Thank You</h1>
                        <h3 className='mb-4' >your toor is booked</h3>
                        <Button style={{backgroundColor:'orange', border:'none'}}className='btn w-25'>
                            <Link style={{color:'white', textDecoration:'none', backgroundColor:'orange'}}to={"/"}>Back to Home</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Thanks
