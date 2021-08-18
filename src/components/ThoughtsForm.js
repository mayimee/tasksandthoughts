import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const ThoughtsForm = ({subDate, subThoughts, handleDate, handleThoughts, handleSubmit, handleDelete}) => {
    return (
        <div>
            <h2>Random thoughts...</h2>
            <form>
                <div className="row">
                    <div className="col-md-8 d-flex justify-content-end">
                        <label className="dateText">Date:</label>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <input type="date" value={subDate} onChange={handleDate}></input>
                    </div>
                    <div className="col-md-12">
                        <textarea cols="68" rows="4" placeholder="What are you thinking right now?" value={subThoughts} onChange={handleThoughts}></textarea>
                    </div>

                    <div className="col-md-6 d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="btn btn-secondary" onClick={handleDelete}>Clear Entries</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ThoughtsForm
