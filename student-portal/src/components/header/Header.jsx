import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import './header.css'


function Header() {
  const navigate = useNavigate();
  return (
    <Navbar className="bg-primary justify-content-between">
      <Form inline>
        <Col xs="auto" >
            <Button  className='bg-success' onClick={()=>navigate("/newStudent")}>Student<b>+</b></Button>
        </Col>
      </Form>
      <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto" >
            <Button type="submit" className='bg-danger searchBtn'>Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default Header;