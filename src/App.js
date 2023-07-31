import React, { useState } from "react";
import ToDoLists from "./TodoList";

 const App = () => {
  const [inputperson, setInputperson] = useState("");
  const [Person, setPerson] = useState([]);
  
  
  const nameEvent = (event) =>{
    setInputperson(event.target.value)
  }
  const listofperson = () =>{
    setPerson((person)=> {
      return [...person, inputperson];
    });
    setInputperson("");
  };
  const deletePersons = (id) => {
    console.log("deleted");

    setPerson((oldPersons) => {
      return oldPersons.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return(
    <>
          <div className="main_div">
            <div className="center_div">
              <br />
              {/* <img src="tec-logo.png" className="rounded mx-auto d-block" alt="..."></img> */}
              <h1 className="display-1 sticky-lg-top d-flex justify-content-center shadow w-85 h-10  m-5 "> ToDo List</h1>
              <br />
              <input className="w-25 p-3 "  type="text" placeholder="Add a Name" value={inputperson} onChange={nameEvent}/>
              <button className="w-10 p-3 .bg-secondary" style={{cursor: "pointer",color: "gray"}} onClick={listofperson}> + </button>
              
              <>
                {/* <li>{inputList}</li> */}

                {Person.map((itemval, index) => {
                  return <ToDoLists key={index} id={index} text={itemval} onSelect={deletePersons}/>
                })}
              </>
            </div>
          </div>
    </>
  )
}
export default App; 