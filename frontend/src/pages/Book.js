import React ,{useState, useContext}from 'react'
import "./booking.css"
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Book = ({ tour }) => {
  // console.log(tour)
  const {price, avgRating, title} = tour
  const navigate = useNavigate() 
  const {user} = useContext(AuthContext)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName:title,
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })

  const handleChange = (e)=>
  {
    setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
  }
  // Sent data to the server

  const serviceFee = 10
  let totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)
  if (booking.guestSize === 0)
  {
    totalAmount = Number(price) + Number(serviceFee)
  }
  const handleClick = async(e) =>
  {
    e.preventDefault()
    console.log(booking)

    try {
      if (!user || user=== undefined || user === null)
      {
        return alert('Please sign in')
      }

      const res = await fetch(`${BASE_URL}/book`, {
        method:'post',
        headers:{'content-type':'application/json'},
        credentials:'include',
        body: JSON.stringify(booking),
      })

      const result = await res.json()

      if(!res.ok)
      {
        return alert(result.message)
      }

      navigate('/thanks')

    } catch (error) {
      alert(error.message)
    }

    

  }

  return (
    <div className='booking'>
      <div className='booking__top d-flex align-items-center justify-content-between'>
        <h3>${price}<span>/per person</span> </h3>
        <span className='tour__rating d-flex align-items-center'>
        <i className="fa-solid fa-star"></i>{avgRating}({4.5})
        </span>
      </div>
      {/* booking form starts */}
      <div className='booking__form'>
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup>
            <input type='number' placeholder='phone' id='phone' required onChange={handleChange}></input>
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-5'>
            <input type='date' placeholder='' id='bookAt' required onChange={handleChange}></input>
            <input type='number' placeholder='Guest' id='guestSize' required onChange={handleChange}></input>
          </FormGroup>
        </Form>
      </div>
      
      {/* booking form ends */}
      {/* booking bottom starts */}
      <div className='booking__bottom'>
        <ListGroup>
          <ListGroupItem className='border-0 px-0'>
            <h5 className='d-flex align-items-center gap-1'>${price}<i className="fa-solid fa-xmark"></i>1 person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0'>
            <h5>Service Charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total'>
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <Button style={{backgroundColor:'orange',border:'none'}} className='btn w-100 mt-4 text-center' onClick={handleClick} >Book Now</Button>
      </div>
      {/* booking bottom ends */}


    </div>
  )
}

export default Book
