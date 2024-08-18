import React from 'react'
import TourCard from './TourCard'
import SearchBar from '../components/SearchBar'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import './commontour.css'


const Tour = () => {
  const title = "All Tours"
  const {data: toursdata, loading, error} = useFetch(`${BASE_URL}/tours/`)
  
  return (
    <>
    <div className='hello3'>
      <div className='common_section' >
          <div style={{display:'flex',position:'absolute', top:'48%', left:'45%', width:'auto', fontSize:'35px', color:'white', fontWeight:'bold'}} className='background'>
           {title}
          </div>
       </div>
    </div>

    <SearchBar></SearchBar>
    <br></br>
    <div className="container-fluid py-1">
         <div className="container pt-1 pb-3">
           <div className="text-center mb-3 pb-3">
              <h6 className="text text-uppercase" style={{color:'orange',fontWeight:'bold',letterSpacing: '5px'}}>TOUR Packages</h6>
            </div>
            <div className='row'>
              { loading && <h4>Loading.......</h4>}
              { error && <h4>{error}</h4>} 
              {!loading && !error && toursdata.map((tour)=>
                  {   
                    return( <div key = {tour._id} className="col-lg-3 col-md-6 mb-4"><TourCard tour={tour}></TourCard></div>
                          )
                  })
              }
            </div>
         </div>
     </div>

    </>
  )
}

export default Tour
