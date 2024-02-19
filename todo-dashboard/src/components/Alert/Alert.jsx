import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function DeleteAlert({task,setAlertShow}) {

  const handleDeleteStudent=(event)=>{
    event.preventDefault();
    setAlertShow(false);
  }
  return (
    <>
      <Alert  variant="danger">
        <Alert.Heading>Delete {task}</Alert.Heading>
        <p>
          {email}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="outline-success" onClick={handleDeleteStudent}>
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default DeleteAlert;