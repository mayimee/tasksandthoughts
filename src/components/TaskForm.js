import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const TaskForm = ({subDate, subTask, handleDate, handleTask, handleSubmit, handleDelete}) => {
    return (
        <div>

            <form>
                <div className="row">
                    <div className="col-md-4">
                        <label>Date:</label>
                    </div>
                    <div className="col-md-8">
                        <input type="date" value={subDate} onChange={handleDate}></input>
                    </div>

                    <div className="col-md-12">
                        <textarea cols="60" rows="5" placeholder="What to do?" value={subTask} onChange={handleTask}></textarea>
                    </div>

                    <div className="col-md-6">
                        <button type="submit" onClick={handleSubmit} className="placeBtn">Submit</button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" onClick={handleDelete}>Clear Entries</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default TaskForm
