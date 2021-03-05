//import "./App.css";
import React, {useState} from "react";
import Recipe from "../Recipes/index";

function App() {
  
  const [id, setId] = useState();

  function handleClick(){
    let randomRecipe=  Math.floor(Math.random( )* Math.floor(10)) 
     setId(randomRecipe);
     console.log(randomRecipe)
  }
  
  return (
    <div>
    <button id='button' onClick = {(e) => handleClick(e.target.value)}>Get your Recipe</button>
    <Recipe id = {id}/>
    </div>
  );
}

export default App;
