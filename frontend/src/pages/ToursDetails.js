
import React from 'react';
import { useParams } from 'react-router-dom';
import Book from './Book';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';
import './tourdetails.css'
const ToursDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/getsingleTour/${id}`);

  if (loading) {
    // Handle loading state (optional)
    return <h4>Loading.......</h4>;
  }

  if (error) {
    // Handle error state (optional)
    return <h4>{error}</h4>;
  }

  // Check if photo exists before rendering
  if (!tour || !tour.photo) {
    return <h4>No photo available</h4>;
  }

  const { title, photo, avgRating, city, address, price, maxGroupSize, desc } = tour;
  console.log(`../img/${photo}`);

  return (
    <div style={{ height: '100%' , paddingLeft: '2px', marginBottom:'100px' }} className="container py-3">
      <div className='row'>
        <div className='col-md-6'>
          <img style={{ height: '80%', width: '105%' }} src={require(`../img/${photo}`)} alt="/" />
          <div style={{ border: '3px solid rgba(230,231,235)' }} className='tour_content my-2 py-3'>
            <h3>{title}</h3>
            <div className='d-flex align-items-center gap-5 py-2'>
              <span className='d-flex align-items-center gap-3'>
                <i className="fa-solid fa-star"></i>{avgRating}({4.5})
                <i className="fa-solid fa-location-dot"></i>{city}
              </span>
            </div>
            <div className='d-flex align-items-center gap-4 py-2'>
              <span className='d-flex align-items-center gap-3'>
                <i className="fa-solid fa-location-dot"></i>{address}
                <i className="fa-sharp fa-solid fa-dollar-sign"></i>{price}/per person
                <i className="fa-solid fa-user-group"></i>{maxGroupSize}
              </span>
            </div>
            <h5 className=' d-flex align-items-center gap-7 my-2'>
              <span className='d-flex align-items-center gap-5 '>Description</span>
            </h5>
            {desc}
          </div>
        </div>
        <div  className='col-md-6 text_4'>
          <Book tour={tour}></Book>
        </div>
      </div>
    </div>
  );
}

export default ToursDetails;

