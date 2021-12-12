// import logo from './logo.svg';
import './App.css';
import SearchBar  from './SearchBar';
import AddItem from './AddItem';
import ItemsDisplay from './ItemsDisplay';
import {useState} from 'react';

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items: []});
  const updateFilters = (serchParams) => {
      setFilters(serchParams);
  }

  const addItemTodata = (item) => {
    let items = data["items"]
    // item.id = items.length;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };
    fetch("http://localhost:3000/items", requestOptions)
    .then((response) => response.json())
    .then((data) =>{
      items.push(data);
      setData({items: items});
    });
    
    console.log(data);
  }

  const filterData = (data) => {
    const filteredData = [];
    if (!filters.name){
      return data;
    }
    for (const item of data){
      if (filters.name !== "" && item.name !== filters.name){
        continue;
      }
      if (filters.sname !== "" && item.sname !== filters.sname){
        continue;
      }
      if (filters.email !== "" && item.email !== filters.email){
        continue;
      }
      if (filters.phone !== "" && item.phone !== filters.phone){
        continue;
      }
      if (filters.date !== "" && item.date !== filters.date){
        continue;
      }
      if (filters.location !== "" && item.location !== filters.location){
        continue;
      }
      if (filters.title !== "" && item.title !== filters.title){
        continue;
      }
      
      filteredData.push(item);
    }
    return filteredData;
  }

  return (
    <div className="container">
      <div className=" row mt-3">
        <ItemsDisplay items = {filterData(data["items"])}/>
      </div>
      <div className=" row mt-3">
        <SearchBar updateSerchParams = {updateFilters}/>
      </div>
      <div className=" row mt-3">
      <AddItem addItem = {addItemTodata} />
      </div>
    </div>
  );
}

export default App;
