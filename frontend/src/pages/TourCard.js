import React from 'react'
import {Link} from 'react-router-dom'
const TourCard = ({tour}) => {
    const {_id,title, city, photo, price, avgRating,reviews,featured} = tour;
    // console.log(avgRating)
    
  return (
    <div className="card" style={{padding:'1px'}}>
       <img style={{height: '180px'}} src={require(`../img/${photo}`)} alt="Tours/" className="card image-top"/>
       { featured && <span style={{color:'white', backgroundColor:'orange',borderRadius:'7%'}}>Featured</span>}
       <div className="card-body">
           <div className='card-text 'style={{color:'orange'}}>
             <span style={{textAlign:'left'}} className='card-text '><i className="ri-map-pin-line"></i>{city}</span>
             <span style={{marginLeft:'80px'}} className='card-text '><i className="fa-solid fa-star"></i>{avgRating}({reviews})</span>
           </div>
           <h3 className="card-titel"><Link style={{textDecorationLine:'none',color:'black'}} to={`/tours/${_id}`}>{title}</Link></h3>
           <div className='card-text '>
               <h5><span style={{color:'orange'}}>${price}</span><span>/ per person</span></h5>
               <button style={{marginLeft:'50px',backgroundColor:'orange', borderRadius:'5%'}} className='btn'>
                   <Link style={{textDecorationLine:'none', color:'white'}} to={`/tours/${_id}`}>Book NOW</Link>
               </button>
           </div>
       </div>
   </div>
  )
}

export default TourCard
