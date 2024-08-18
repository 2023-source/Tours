import React,{useState, useContext} from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import RegisterLogo from "../img/login.png";
import userLogo from "../img/user.png"
import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

import "./Login.css"
const Register = () => {

  const [credentials, setCredentials] = useState({
    username:undefined,
    email:undefined,
    password:undefined
  })

  const {dispatch} = useContext(AuthContext)
  console.log(dispatch)
  const navigate = useNavigate()
  
  const handleChange = (e)=>
  {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  }

  const handleClick = async(e)=>
  {
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try {
      
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(credentials)
      })

      const result = await res.json()

      if (!res.ok) alert(result.message)

    //   console.log(result.data)
      dispatch ({type:'REGISTER_SUCCESS'})
      navigate('/Login')

    } catch (err) {
        alert(err.message)
      
    }
  }

  return (
    <section>
      <Container>
        <Row style={{height:'580px'}}>
          <Col lg='10' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={RegisterLogo} alt='/'></img>
              </div>
              <div className='login__form'>
                <div className='user'>
                  <img src={userLogo} alt='/'></img>
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup style={{marginBottom:'20px'}}>
                    <input type='text' placeholder='Username' required id='username' onChange={handleChange}></input>
                  </FormGroup>
                  <FormGroup style={{marginBottom:'20px'}}>
                    <input type='email' placeholder='Email' required id='email' onChange={handleChange}></input>
                  </FormGroup>
                  <FormGroup style={{marginBottom:'20px'}}>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange}></input>
                  </FormGroup>
                  <Button className='auth_btn' type='submit'>
                    Create Account
                  </Button>
                </Form>
                <p> Already have an account? <Link to='/register'>Login</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Register;

