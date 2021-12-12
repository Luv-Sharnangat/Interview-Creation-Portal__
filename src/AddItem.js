import {useState} from 'react';
export default AddItem;

function AddItem(props) {
    const [name, setName] = useState("");
    const [sname, ssetName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [locations, setLocations] = useState("");
    const [title, setTitle] = useState("");
    const [file, setFile] = useState("");

    const addItemButtonPressed = () => {
        props.addItem({name: name, sname: sname, email: email, phone: phone, date: date, time: time, locations: locations, title: title, file: file});
        setName("");
        setName("");
        setEmail("");
        setPhone("");
        setDate("");
        setTime("");
        setLocations("");
        setTitle("");
        setFile("");
    };

    return(
        <div className="container">
            <div className="row"><h2>Schedule an Interview</h2></div>
            <div className="row"><label htmlFor="name_field">Interviewee:</label>
                <input id="name_field" className = "form-control" type="text" value={name} onChange={ (e) => setName(e.target.value)}></input></div>
            <div className="row"><label htmlFor="sname_field">Interviewer:</label>
                <input id="sname_field" className = "form-control" type="text" value={sname} onChange={ (e) => ssetName(e.target.value)}></input></div>
            <div className="row"><label htmlFor="email_field">Email:</label>
                <input id="email_field" className = "form-control" type="email" value={email} onChange={ (e) => setEmail(e.target.value)}></input></div>
            <div className="row"><label htmlFor="phone_field">Phone:</label>
                <input id="phone_field" className = "form-control" type="tel" value={phone} onChange={ (e) => setPhone(e.target.value)}></input></div>
            {/* <div className="row"><label htmlFor="phone_field">Phone No.:</label>
                <input id="phone_field" className = "form-control" type="number" value={phone} onChange={ (e) => setPhone(e.target.value)}></input></div> */}
            <div className="row"><label htmlFor="date_field">Date:</label>
                <input id="date_field" className = "form-control" type="date" value={date} onChange={ (e) => setDate(e.target.value)}></input></div>
            <div className="row"><label htmlFor="time_field">Time:</label>
                <input id="time_field" className = "form-control" type="time" value={time} onChange={ (e) => setTime(e.target.value)}></input></div>
            <div className="row"><label htmlFor="location_field">Location:</label>
                <input id="location_field" className = "form-control" type="text" value={locations} onChange={ (e) => setLocations(e.target.value)}></input></div>
            <div className="row"><label htmlFor="title_field">Title:</label>
                <input id="title_field" className = "form-control" type="text" value={title} onChange={ (e) => setTitle(e.target.value)}></input></div>
            <div className="row"><label htmlFor="file_field">Upload Resume:</label>    
                <input type="file" id="file_field" value={file} onChange={ (e) => setFile(e.target.value)}></input>
            </div>
            {/* <div className="row"><label htmlFor="price_field">Price:</label>
                <input id="price_field" className = "form-control" type="number" value = {price} onChange={ (e) => setPrice(e.target.value)}></input></div>
            <div className="row"><label htmlFor="type_field">Type:</label>
                <input id="type_field" className = "form-control" type="text" value={type} onChange = { (e) => setType(e.target.value)}></input></div>
            <div className="row"><label htmlFor="brand_field">Brand:</label>
                <input id="brand_field" className = "form-control" type="text" value = {brand} onChange = { (e) => setBrand(e.target.value)}/></div> */}
            <div className="row mt-3">    
                <button type="button" className="btn btn-primary" onClick = {addItemButtonPressed}>Create Interview</button>
            </div>
        </div>
    );
}


