import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <footer>
      <div className="container">
           <div className="row">
              <div className="col-sm-4 h" >
                 <ul>
                     <li ><h2 style={{color:'white'}} className="text">TRAVE<span style={{color:'orange',content:''}}>LER</span></h2></li>
                     <br/>
                     <p style={{color:'white'}} className="text">A design so unique, it was created for you. Living with Style. Your personality, our expertise. Your home is your greatest investment, make it last!</p>
                     <p style={{color:'white', letterSpacing:'2px'}}>FOLLOW US </p>
                     <li className="social">
                         <i className="fa-brands fa-facebook-f fa-2x"></i>
                         <i className="fa-brands fa-instagram fa-2x"></i>
                         <i className="fa-brands fa-twitter fa-2x"></i>
                         <i className="fa-brands fa-telegram fa-2x"></i>
                     </li>
                 </ul>
               </div>
               <div className="col-sm-4">
                 <ul>
                    <li><div style={{color:'orange',marginBottom:'10px', fontWeight:'bold', fontSize:'20px'}} className="text">COMPANY <span style={{backgroundColor:'orange'}}></span></div></li>
                    <li><button className='btn3' >&gt; Home </button></li>
                    <li><button className='btn3' >&gt; About US</button></li>
                    <li><button className='btn3' >&gt; Contact Us</button></li>
                    <li><button className='btn3' >&gt; Login</button></li>
                    <li><button className='btn3' >&gt; Tours</button></li>
                 </ul>
              </div>
               <div className="col-sm-4 " >
                 <ul>
                    <li><div style={{color:'orange',marginBottom:'10px', fontWeight:'bold', fontSize:'20px'}} className="text">CONTACT US <span style={{backgroundColor:'orange'}}></span></div></li>
                    <li><div className='text_3' >Email: Priyansh@gmail.com <span style={{backgroundColor:'orange'}}></span></div></li>
                    <li><div className='text_3' >Location: 5 Street road,Maninagar,Ahmedabad <span style={{backgroundColor:'orange'}}></span></div></li>
                    <li><div className='text_3' >Contact_no: +919734618294, +914527284620 <span style={{backgroundColor:'orange'}}></span></div></li>
                  </ul>
               </div>
           </div> 
       </div>
       <div style={{border:'1px solid grey'}}></div>
     </footer>
    </div>
  )
}

export default Footer
