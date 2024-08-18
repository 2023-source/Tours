import React  from 'react'
import logo1 from '../img/about-1.jpg'
import logo2 from '../img/about-2.jpg'
import logo3 from'../img/about-3.jpg'
import logo4 from'../img/about-4.jpg'
import "./About.css"
const About = () => {

  return (
    <>
    <div className='hello2' style={{height:'550px'}}>
        <div className='backgroundImage2' >
           <div style={{display:'flex',position:'absolute', top:'48%', left:'45%', width:'auto', fontSize:'35px', color:'white', fontWeight:'bold'}} className='background'>
               ABOUT US
           </div>
        </div>
    </div>
    {/* About Start */}
    <div className="container-xxl py-5" >
          <div className="container">
            <div className="row g-5 align-items-center">
               <div className="col-lg-6">
                   <h6 className="section-title text-start text-uppercase">About Us</h6>
                   <h1 className="mb-4">Welcome to <span style={{color:'orange', fontWeight:'bold'}} className="text-uppercase">TRAVELER</span></h1>
                   <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                   <div className="row g-3 pb-4">
                       <div className="col-sm-4 " >
                           <div className="border rounded p-1">
                               <div className="border rounded text-center p-4">
                                   <i  className="fa fa-hotel fa-2x  mb-2"></i>
                                   <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                   <p className="mb-0">Rooms</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-sm-4 " >
                           <div className="border rounded p-1">
                               <div className="border rounded text-center p-4">
                                   <i  className="fa fa-users-cog fa-2x  mb-2"></i>
                                   <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                   <p className="mb-0">Staffs</p>
                               </div>
                           </div>
                       </div>
                       <div className="col-sm-4" >
                           <div className="border rounded p-1">
                               <div className="border rounded text-center p-4">
                                   <i  className="fa fa-users fa-2x mb-2"></i>
                                   <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                                   <p className="mb-0">Clients</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <button  className="btn py-3 text-uppercase px-5 mt-2" >Explore More</button>
               </div>
               <div className="col-lg-6 col-md-12">
                    <div className="row g-3">
                        <div className="col-lg-6 col-md-3 col-sm-3 text-end">
                           <img className="img-fluid rounded w-75 " alt='/'  src={logo1} />
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-3 text-start">
                           <img className="img-fluid rounded w-100 " alt='/'  src={logo2}/>
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-3 text-end">
                           <img className="img-fluid rounded w-50 " alt='/'  src={logo3}/>
                        </div>
                        <div className="col-lg-6 col-md-3 col-sm-3 text-start">
                           <img className="img-fluid rounded w-75 " alt='/'  src={logo4}/>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
    {/* About Us Ends  */}
    {/* Services start */}
    <div className="container-fluid py-5">
         <div className="container pt-5 pb-3">
             <div className="text-center mb-3 pb-3">
                <h6 className="text text-uppercase" style={{color:'orange',fontWeight:'bold',letterSpacing: '5px'}}>OUR Services</h6>
                <h1>Explore Our <span style={{color:'orange', fontWeight:'bold'}}>SERVICES</span></h1>
             </div>
             <div className="row">
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="service-item bg-white text-center mb-2 py-5 px-4">
                         <i   className="fa fa-2x fa-route mx-auto mb-4"></i>
                         <h5 className="mb-2">Travel Guide</h5>
                         <p  className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="service-item bg-white text-center mb-2 py-5 px-4">
                         <i  className="fa fa-2x fa-ticket-alt mx-auto mb-4"></i>
                         <h5 className="mb-2">Ticket Booking</h5>
                         <p  className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="service-item bg-white text-center mb-2 py-5 px-4">
                         <i  className="fa fa-2x fa-hotel mx-auto mb-4"></i>
                         <h5 className="mb-2">Hotel Booking</h5>
                         <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="service-item bg-white text-center mb-2 py-5 px-4">
                         <i   className="fa fa-swimmer fa-2x mx-auto mb-4 "></i>
                         <h5 className="mb-2">Sports & Gaming</h5>
                         <p  className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="service-item bg-white text-center mb-2 py-5 px-4">
                         <i   className="fa fa-2x fa-utensils mx-auto mb-4 "></i>
                         <h5 className="mb-2">Food & Restaurant</h5>
                         <p  className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                     </div>
                 </div>
                 <div className="col-lg-4 col-md-6 mb-4">
                     <div className="service-item bg-white text-center mb-2 py-5 px-4">
                         <i   className="fa fa-2x fa-glass-cheers mx-auto mb-4 "></i>
                         <h5 className="mb-2">Event & Party</h5>
                         <p  className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                     </div>
                 </div>
           </div>
         </div>
     </div>
    {/* Services end */}
   </>
  )
}

export default About
