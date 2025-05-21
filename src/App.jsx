import React, { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './TodoItem'

export default function App() {
  const [area, setArea] = useState(() => 'Work') 
  const [items, setItems] = useState(() => "")
  //tady je to trochu goofy, ale ten inicialize runnuje jenom jednou
  //typy arei: Work, Hobby, Home

  //když je detekována změna odvětví todoček, tak se stáhnou a přepíšou
  useEffect(()=> {
    if (area === "Work") {
      fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then(response => response.json())
      .then(json => pullData(json))
    }else if (area === "Hobby") {
      fetch('https://jsonplaceholder.typicode.com/users/2/todos')
      .then(response => response.json())
      .then(json => pullData(json))
    }else{
      fetch('https://jsonplaceholder.typicode.com/users/3/todos')
      .then(response => response.json())
      .then(json => pullData(json))
    }
  }, [area])
  //bere validní json odpověď a přeformátovává ji na <TodoItem/>
  function pullData (json) {
    let exporting = [];
    let batchId = Math.random()*12;//bez tohohle se špatně updatovali completed checkboxy
    for (let i = 0; i < json.length; i++) {
      exporting.push(React.createElement(TodoItem, {key:i+batchId, title:"Id úkolu: "+json[i].id, description:json[i].title, done:json[i].completed}));
    }
    setItems(exporting)
  }
  return (
    <>
      <button onClick={() =>setArea("Work")}>Práce</button>{/*tady to už goofy neni bez toho to nejede*/}
      <button onClick={() =>setArea("Hobby")}>Koníčky</button>
      <button onClick={() =>setArea("Home")}>Domácí práce</button>
      <h1>Todo apka</h1>
      <div className='todos'>{items}</div>
    </> 
  )
}
