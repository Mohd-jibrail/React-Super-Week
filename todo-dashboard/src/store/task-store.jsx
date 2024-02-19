import { createContext, useReducer } from "react"
export const TaskListContext = createContext({
    taskList: [],
    addTask: () => {},
    delTask: () => {},
    delAllTask: () => {},
    updateTask: () => {}
});

const taskListReducer =(taskCurrentList, action) =>{
    let newTaskList = taskCurrentList;
    if(action.type==='NEW_TASK'){
        newTaskList =[
            ...taskCurrentList,{
                task: action.payload.task,
                assignedTo: action.payload.assignedTo,
                status: action.payload.status,
                priority: action.payload.priority
            },
        ];
    }else if(action.type==='DELETE_TASK'){
        newTaskList = taskCurrentList.filter(
            (taskItem)=> taskItem.task!==action.payload.task
        );
    }else if(action.type==='DELETE_ALL_TASK'){
        newTaskList = [];
    }else if(action.type==='UPDATE_TASK'){
        /* newTaskList = taskCurrentList.map((taskItem)=>{
            if(taskItem.task===action.payload.task){
                taskItem.status=action.payload.status,
                taskItem.priority=action.payload.priority,
                taskItem.assignedTo=action.payload.assignedTo
            }
        }); */
        for (let i=0; i<taskCurrentList.length; i++){
            if(taskCurrentList[i].task===action.payload.task){
                taskCurrentList[i].status=action.payload.status;
                taskCurrentList[i].priority=action.payload.priority;
                taskCurrentList[i].assignedTo=action.payload.assignedTo;
            }
        }
    }
    return newTaskList;
}
const TaskListContextProvider = ({children}) => {
    const [taskList, dispatchTask] = useReducer(taskListReducer,[]);

    const addTask = (task,assignedTo,status,priority) => {
        const newTaskAction = {
            type : "NEW_TASK",
            payload:{ task, assignedTo, status, priority},
        };
        dispatchTask(newTaskAction);
    };
    const delTask = (task) => {
        const delTaskAction = {
            type : "DELETE_TASK",
            payload:{task},
        };
        dispatchTask(delTaskAction);
    };
    const delAllTask =()=>{
        const delAllTaskAction = {
            type:"DELETE_ALL_TASK"
        }
        dispatchTask(delAllTaskAction);
    }
    const updateTask =(task, assignedTo, status, priority)=>{
        const updateTaskAction = {
            type:"UPDATE_TASK",
            payload:{ task, assignedTo, status, priority}
        }
        dispatchTask(updateTaskAction);
    }
    return(<TaskListContext.Provider
         value={{
            taskList,
            addTask,
            delTask,
            delAllTask,
            updateTask
         }}
    >
    {children}
    </TaskListContext.Provider>)
}
export default TaskListContextProvider;
