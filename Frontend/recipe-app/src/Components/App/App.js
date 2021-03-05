//import "./App.css";
import React, {useState} from "react";
import Recipe from "../Recipes/index";

function App() {
  
  const [id, setId] = useState();

  let randomRecipe;

  function handleClick(){
    randomRecipe= Math.floor (Math.random( )*Math.floor()) 
     setId(randomRecipe);
     console.log(randomRecipe)
  }
  
  return (
    <div>
    <button id='button' onClick = {(e) => handleClick(e.target.value)}>Get your Recipe</button>
    <Recipe id = {id} randomRecipe={randomRecipe}/>
    </div>
  );
}

export default App;
