import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import TourCard from './TourCard'
import "./searchresult.css"
const SearchResultList = () => {

  const location = useLocation();
  const [data] = useState(location.state)
  console.log(data)
  // const searchParams = new URLSearchParams(location.search);
  // const city = searchParams.get('city');
  // const distance = searchParams.get('distance');
  // const maxGroupSize = searchParams.get('maxGroupSize');

  return (
    <>
      <div className='backgroundImage3' style={{height:'470px'}}>
        <div style={{display:'flex',position:'absolute', top:'48%', left:'36%', width:'auto', fontSize:'35px', color:'white', fontWeight:'bold'}} className='background'>
         TOUR SEARCH RESULT
       </div>
     </div>
     <div className="container-fluid py-5">
         <div className="container pt-5 pb-3">
              <div className='row'>
                 { data.length === 0 ? (<h4 className='text-center' >No tour found</h4>):
                  data.map((tour)=>
                    {   
                      return( <div key = {tour._id} className="col-lg-3 col-md-6 mb-4">
                                <TourCard tour={tour}></TourCard>
                              </div>
                            )
                    })
                 }
             </div>
         </div>
     </div>
  </>
  )
}

export default SearchResultList
