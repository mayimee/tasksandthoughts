import React, {useState, useEffect}  from 'react'
import ThoughtsForm from './ThoughtsForm'
import ThoughtsList from './ThoughtsList';

const retriveData = localStorage.getItem("thoughts")? JSON.parse(localStorage.getItem("thoughts")): [];

function ThoughtsTracker() {

    const [subDate, setDate] = useState('');
    const [subThoughts, setThoughts] = useState('');
    const [thoughtsEntry, setEntry] = useState(retriveData);

    const handleDate = (a) =>{
        setDate(a.target.value);
    }

    const handleThoughts = (b) => {
        setThoughts(b.target.value);
    }

    const handleSubmit = (c) => {
        c.preventDefault();

        if (subDate !== "" && subThoughts !== "")
        {
            const data = {subDate, subThoughts};
            setEntry([...thoughtsEntry, data]);
            setDate('');
            setThoughts('');
        }
        else
        {
            alert("Incomplete Thoughts Entry: Please fill all fields in the thoughts form.")
        }
    }

    const handleDelete = () => {
        setEntry([]);
    }

    useEffect(() => {localStorage.setItem("thoughts", JSON.stringify(thoughtsEntry));}, [thoughtsEntry])

    return (
        <div className="boxdiv">
            <div>
                <ThoughtsForm
                    subDate = {subDate}
                    subThoughts = {subThoughts}
                    handleDate = {handleDate}
                    handleThoughts = {handleThoughts}
                    handleSubmit = {handleSubmit}
                    handleDelete = {handleDelete}
                />
            </div>
            <div className="tableDiv">
                <ThoughtsList thoughtsList={thoughtsEntry}/>
            </div>
        </div>
    )
}

export default ThoughtsTracker
