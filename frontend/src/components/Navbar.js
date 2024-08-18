import {Nav,Navbar} from 'react-bootstrap';
import {useContext} from 'react'
import Home from "../pages/Home"
import About from "../pages/About"
import Tour from "../pages/Tour"
import Login from "../pages/Login"
import ToursDetails from "../pages/ToursDetails"
import SearchResultList from '../pages/SearchResultList'
import { AuthContext } from '../context/AuthContext';

import "../components/Navbar.css"
// import { AuthContext } from '../context/AuthContext';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Thanks from './Thanks';
import Register from '../pages/Register';


function BasicExample() {

  // const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)
  console.log(user)
  // const logout = ()=>
  // {
  //     dispatch({type:'LOGOUT'})
  //     navigate('/')
  // }
  return (
    <>
     <Router>
           <Navbar expand="sm" className="main_nav">
             <Navbar.Brand href="#home" className="nav_brand">TRAVELER</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mx-auto">
                 <Nav.Link className="nav_link" as={Link} to='/' >Home</Nav.Link>
                 <Nav.Link className="nav_link" as={Link} to='/about'  >About Us</Nav.Link>
                 <Nav.Link className="nav_link" as={Link} to='/tours'  >Tour</Nav.Link>
                 { user? <><button  style={{ color:'red', textAlign:'left', padding:'0px',border:'none',fontWeight:'bold', background:'white'}}className='mb-0'>{user.username}</button>
                 <Nav.Link className="nav_link2" onClick={(e)=> {dispatch({type:'LOGOUT'})}}>Logout</Nav.Link> </>:<><Nav.Link as={Link} to='/Login' className='nav_link' >Login</Nav.Link><></><Nav.Link as={Link} to='/register' className='nav_link1' >Register</Nav.Link></>}
               </Nav>
             </Navbar.Collapse>
           </Navbar>
           <Routes>
             <Route path='/' element={<Home></Home>}></Route>
             <Route path='/about' element={<About></About>}></Route>
             <Route path='/tours' element={<Tour></Tour>}></Route>
             <Route path='/Login' element={<Login></Login>}></Route>
             <Route path='/register' element={<Register></Register>}></Route>
             <Route path='/tours/:id' element={<ToursDetails></ToursDetails>}></Route>
             <Route path='/thanks' element={<Thanks></Thanks>}></Route>
             <Route path='/tours/search/getTourBySearch' element={<SearchResultList></SearchResultList>}></Route>
           </Routes>
         </Router>
       
    </>
  );
}

export default BasicExample;