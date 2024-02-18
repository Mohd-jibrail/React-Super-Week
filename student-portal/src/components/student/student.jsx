import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeleteAlert from '../alert/deletAlert';
import { StudentPortalDBContext } from '../../store/studentStore';
import { useState } from 'react';
import { useContext } from 'react';
import './student.css'

function Student({name,father,email,city,state,zipcode}) {
  const {deleteStudent } = useContext(StudentPortalDBContext);
  const [show,setShow] = useState(false);
  return (<>

        {show && <DeleteAlert name={name} email={email} setAlertShow={setShow} delStudent={deleteStudent}/>}
        <Card style={{ width: '30rem' }} className='studentCard'>
          <Card.Body>
            <Card.Title>{name} S/O {father}</Card.Title>
            <Card.Text>
              <p>{city} {zipcode}, {state}</p>
            </Card.Text>
            <Button variant="info" className='cardBtn'>View</Button>
            <Button variant="danger" className='cardBtn'onClick={()=>setShow(!show)}>Delete</Button>
          </Card.Body>
        </Card>
    </>);
}

export default Student;