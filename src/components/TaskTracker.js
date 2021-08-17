import React,  {useState, useEffect} from 'react'
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const retrieveData = localStorage.getItem("tasks")? JSON.parse(localStorage.getItem("tasks")): [];

function TaskTracker() {

    const [subDate, setDate] = useState('');
    const [subTask, setTask] = useState('');
    const [taskEntry, setEntry] = useState(retrieveData);

    const handleDate = (d) => {
        setDate(d.target.value);
    }

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (f) => {
        f.preventDefault();

        if (subDate !== "" && subTask !== "")
        {
            const data = {subDate, subTask};
            setEntry([...taskEntry, data]);
            setDate('');
            setTask('');
        }
        else
        {
            alert("Incomplete Task Entry: Please fill all fields in the task form.")
        }
    }

    const handleDelete = () => {
        setEntry([]);
    }

    useEffect(() => {localStorage.setItem("tasks", JSON.stringify(taskEntry));}, [taskEntry])

    return (
        <div className="boxdiv">
            <TaskForm 
                subDate={subDate}
                subTask={subTask}
                handleDate={handleDate}
                handleTask={handleTask}
                handleSubmit={handleSubmit}
                handleDelete={handleDelete}
            />

            <br />
            <br />
            <TaskList taskList={taskEntry}/>
        </div>
    )
}

export default TaskTracker
