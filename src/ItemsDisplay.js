export default ItemsDisplay;

function ItemsDisplay(props) {
    const showItem = (item) => {
        return (
            <tr> 
                {/* <th scope="row">Id: {item.id}</th> */}
                <td>Interviewee: {item.name}</td>
                <td>Interviewer: {item.sname}</td>
                <td>Email: {item.email}</td>
                <td>Phone No.: {item.phone}</td>
                <td>Date: {item.date}</td>
                <td>Time: {item.time}</td>
                <td>Location: {item.location}</td>
                <td>Title: {item.title}</td>
                <td>Download: {item.file}</td>
            </tr>
        );
    };
    return <div className="container">
        <div className="row">
            <h2>Scheduled Interviews</h2>
        </div>
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Interviewee</th>
                        <th scope="col">Interviewer</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Location</th>
                        <th scope="col">Title</th>
                        <th scope="col">Resume</th>
                    </tr>
                </thead>
                <tbody>{props.items.map(showItem)}</tbody>
            </table>
        </div>
    </div>
}