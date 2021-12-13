import {useState} from 'react';
export default SearchBar;

function SearchBar(props) {
    const [name, setName] = useState("");
    // const [sname, ssetName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [date, setDate] = useState("");
    // const [locations, setLocations] = useState("");
    // const [title, setTitle] = useState("");


    const SearchButtonPressed = () => {
        props.updateSerchParams({name: name});
    };

    return(
        <div className = "container">
            <div className = "row">
                <h2>Search for an Interview</h2>
            </div>
            <div className = "row">
                <div className = "col"><label htmlFor="name_field">Name:</label>
                <input id="name_field" className = "form-control" type="text" value={name} onChange={ (e) => setName(e.target.value)}></input></div>
                
            </div>
            <div className = "row mt-3">
                <div className = "col-4" />
                    <button type="button" className = "col-4 btn btn-primary" onClick = {SearchButtonPressed}>Search</button>
            </div>
            
        </div>
    );
}


