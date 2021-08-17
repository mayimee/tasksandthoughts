import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const TaskList = ({taskList}) => {
    return (
        <div>
            <table className="tableDesign">
                <tr>
                    <th>What to do?</th>
                </tr>

                {taskList.map(list => (
                    <tr>
                        <td>
                            {list.subDate}
                            <br/>
                            {list.subTask}
                        </td>
                        <td><input type="checkbox" /></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default TaskList
