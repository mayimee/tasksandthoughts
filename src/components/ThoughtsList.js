import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const ThoughtsList = ({thoughtsList}) => {
    return (
        <div>
            <table className="tableDesign">
                <tr>
                    <th>What are you thinking?</th>
                </tr>

                {thoughtsList.map(list => (
                    <tr>
                        <td>
                            {list.subDate}
                            <br />
                            {list.subThoughts}      
                        </td>  
                        <td><input type="checkbox"/></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default ThoughtsList
