import { useContext, useRef } from 'react';
import style from './Header.module.css'
import { TaskListContext } from '../../store/task-store'
const Header=()=>{
  const {addTask} = useContext(TaskListContext);
  const task= useRef();
  const assignedTo = useRef();
  const status = useRef();
  const priority = useRef();

  const submitTask=(event)=>{
    event.preventDefault();
    const task1 = task.current.value;
    const assignedTo2 = assignedTo.current.value;
    const status3 = status.current.value;
    const priority4 = priority.current.value;
    addTask(task1,assignedTo2,status3,priority4);
    task.current.value=""
    assignedTo.current.value=""
    status.current.value=""
    priority.current.value=""
    console.log(task1)
    
  }
    return(<>
      <table className={style.inputHeader}>
        <tbody>
          <tr>
            <td><input placeholder="Task... " className={style.inputField} ref={task} /></td>
            <td><input placeholder="Assigned To..." className={style.inputField} ref={assignedTo} /></td>
            <td><input placeholder="Status..." className={style.inputField} ref={status}/></td>
            <td><input placeholder="Priority..." className={style.inputField} ref={priority}/></td>
            <td><button className={style.addButton} onClick={submitTask}>Submit</button></td>
          </tr>
        </tbody>
      </table>
    </>)
}
export default Header;