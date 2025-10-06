import React, {useState} from "react";


function ReactHook() {
  const [name,setName] = useState("Eric");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  function updateAge(){
    setAge(age + 1);
  }
  
  function updateName(){
    setName("Spongebob");
  }

  function updateIsEmployed(){
    setIsEmployed(!isEmployed);
  }

  return(
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}>Increase Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={updateIsEmployed}>Change employment status</button>
    </div>
  )
}

export default ReactHook