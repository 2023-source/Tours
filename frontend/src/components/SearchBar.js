import React,{useRef} from 'react'
import './searchbar.css'
import {Col,Form,FormGroup} from 'react-bootstrap'
import { BASE_URL } from '../utils/config'
import { useNavigate } from 'react-router-dom' 

const SearchBar = () => {
  const locationRef = useRef('')
  const distanceRef = useRef(0)
  const maxGroupSizeRef = useRef(0)
  const navigate = useNavigate()

  const searchHandler= async()=>
  {
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const maxGroupSize = maxGroupSizeRef.current.value

    if (location === '' || distance ==='' || maxGroupSize === '' )
    {
      alert('All fields are empty')
    }

    const queryString = `city=${encodeURIComponent(location)}&distance=${encodeURIComponent(distance)}&maxGroupSize=${encodeURIComponent(maxGroupSize)}`;

    const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?${queryString}`);
    // const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)
    if (!res.ok) alert("Something went wrong")

    const result = await res.json()
    navigate(`/tours/search/getTourBySearch?${queryString}`, {state:result.data});
    
  }

  return (
    <div>
      <Col>
        <div className='search_bar'>
            <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i className="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type='text' placeholder='Where are you going' ref={locationRef} ></input>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i className="ri-map-pin-time-line"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type='number' placeholder='Distance k/m' ref={distanceRef} ></input>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span><i className="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <input type='number' placeholder='0' ref={maxGroupSizeRef} ></input>
                    </div>
                </FormGroup>
                <span className='search_icon' type='submit' onClick={searchHandler} ><i className="ri-search-line"></i></span>
            </Form>
        </div>
      </Col>
    </div>
  )
}

export default SearchBar
