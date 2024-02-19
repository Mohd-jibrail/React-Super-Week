import { useContext, useState } from 'react';
import style from './DashboardItem.module.css'
import { TaskListContext } from '../../store/task-store';
const DashboarItem=({task,assignedTo,status,priority})=>{
  const [assignedToValue,setAssignedTo] = useState(assignedTo);
  const [statusValue,setStatus] = useState(status);
  const [priorityValue,setPriority] = useState(priority);
  //---------------
  const {delTask,updateTask} = useContext(TaskListContext);
  //------------------
  const setNewAssignedTo=(event)=>{
    event.preventDefault();
     setAssignedTo(event.target.value);
  }
  const setNewStatus=(event)=>{
    event.preventDefault();
    setStatus(event.target.value);
  }
  const setNewPriority=(event)=>{
    event.preventDefault();
    setPriority(event.target.value);
  }
  const deleteTask = (event) =>{
    event.preventDefault();
    delTask(task);
  }
  const updatingTask = (event) => {
    event.preventDefault();
    updateTask(task,assignedToValue,status,priority);
  }

    return(<>
     <table className={style.dashboardHeader}>
        <tbody>
          <tr>
            <td><input type='text' className={style.boardHeading} disabled={true} value={task}></input></td>
            <td><input type='text' className={style.boardHeading} value={assignedToValue} onChange={setNewAssignedTo}></input></td>
            <td><input type='text' className={style.boardHeading} value={statusValue} onChange={setNewStatus}></input></td>
            <td><input type='text' className={style.boardHeading} value={priorityValue} onChange={setNewPriority}></input></td>
            <td><button className={style.delButton} onClick={deleteTask}><b>Delete</b></button></td>
            <td><button className={style.updateButton} onClick={updatingTask}><b>Update</b></button></td>
          </tr>
        </tbody>
      </table>
    </>)
}
export default DashboarItem;