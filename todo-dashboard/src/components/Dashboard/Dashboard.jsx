import style from './Dashboard.module.css'
import DashboarItem from '../DashboardItem/DashboardItem.jsx'
import {TaskListContext} from "../../store/task-store"
import Message from '../Message/Message'
import { useContext } from 'react'
const Dashboar=()=>{
    const {taskList, delAllTask} = useContext(TaskListContext);
    const deleteAllTask=(event)=>{
        event.preventDefault();
        delAllTask();
    }
    return(<>
     <div className='dashboard'>
        <table className={style.dashboardHeader}>
            <tbody>
                <tr>
                    <td><h3 className={style.boardHeading}>Task</h3></td>
                    <td><h3 className={style.boardHeading}>Assigned To </h3></td>
                    <td><h3 className={style.boardHeading}>Status</h3></td>
                    <td><h3 className={style.boardHeading}>Priority</h3></td>
                    <td><button className={style.delButton} onClick={deleteAllTask}>Delete All</button></td>
                </tr>
            </tbody>
        </table>
        { taskList.length===0? <Message/>
            :taskList.map((task)=>(
            <DashboarItem
                task={task.task}
                assignedTo={task.assignedTo}
                status={task.status}
                priority={task.priority}
        />
        ))}
     </div>
    </>)
}
export default Dashboar;