import React, {useEffect, useState} from 'react';
import './App.css';
import CardComponent from './CardComponent';
import axios from 'axios';
import data from './products.json'

function App() {
  let [arr, setArr] = useState([]);
  let [arr2, setArr2] = useState([]);
  let [search, setSearch] = useState("");
  useEffect(()=>{
      setArr(data.products)
      setArr2(data.products)
  }, [])

  let inputChange = (e)=>{
    let arr2 = arr.filter(element=>{
      return element.name.includes(e.target.value)
    })
    setArr2(arr2)
  }

  return (
    <div className="App">
    <input placeholder="search" onChange={inputChange} />
    <div>
    {arr2.map(element=>{
        return <CardComponent key={element.asin} name={element.name} image={element.img} brand={element.brand} />
    })}
    </div>
    </div>
  );
}

export default App;
