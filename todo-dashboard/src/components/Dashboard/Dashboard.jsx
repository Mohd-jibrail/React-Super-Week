import style from './Dashboard.module.css'
import DashboarItem from '../DashboardItem/DashboardItem.jsx'
import {TaskListContext} from "../../store/task-store"
import Message from '../Message/Message'
import { RiDeleteBin3Fill } from "react-icons/ri";
import { BiTask } from "react-icons/bi";
import { BsFilePersonFill } from "react-icons/bs";
import { TbStatusChange } from "react-icons/tb";
import { FcHighPriority } from "react-icons/fc"; 
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
                    <td><h3 className={style.boardHeading}> <BiTask/> Task</h3></td>
                    <td><h3 className={style.boardHeading}> <BsFilePersonFill/> Assigned To </h3></td>
                    <td><h3 className={style.boardHeading}> <TbStatusChange/> Status</h3></td>
                    <td><h3 className={style.boardHeading}> <FcHighPriority/> Priority</h3></td>
                    <td><button className={style.delButton} onClick={deleteAllTask}><RiDeleteBin3Fill/></button></td>
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