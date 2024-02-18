import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { StudentPortalDBContext } from '../../store/studentStore';
import {useNavigate} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import React from 'react';
import { useRef } from 'react';
import "./NewStudent.css"


const NewStudent=()=>{

  const { addNewStudent } = useContext(StudentPortalDBContext);
  const navigate = useNavigate();

  const name = useRef();
  const father = useRef();
  const email = useRef();
  const password = useRef();
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const zipCode = useRef();

  // eslint-disable-next-line
  const submitStudentInfo = (event)=>{
    event.preventDefault();
    addNewStudent(
      name.current.value,
      father.current.value,
      email.current.value,
      password.current.value,
      address.current.value,
      city.current.value,
      state.current.value,
      zipCode.current.value
    );
    name.current.value="";
    father.current.value="";
    email.current.value="";
    password.current.value="";
    address.current.value=""
    city.current.value="";
    state.current.value="";
    zipCode.current.value="";

    navigate('/');
  }

  return (<>
    <center><h2 className='heading'>Student Portal</h2></center>
    <Form className='container' onSubmit={submitStudentInfo}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={name} placeholder="Enter name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFather">
          <Form.Label>Father's Name</Form.Label>
          <Form.Control type="text" ref={father} placeholder="father's name" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={email} placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={password} placeholder="Password" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type='text' ref={address} placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control type='text' ref={city} placeholder='Okhla..'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Control type='text' ref={state} placeholder='Dehli'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type='number' ref={zipCode} placeholder='110025'/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>);
}

export default NewStudent;