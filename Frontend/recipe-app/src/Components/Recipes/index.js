import React, {useState, useEffect} from "react";
import "../App/App.css";

function Recipe({id}){
    const[Recipe,setRecipe]= useState("Spice up your meals with Recipes not stressipes");
    const [Method, setMethod] = useState()
    const [Author, setAuthor] = useState()
    const [Time, setTime] = useState()
    
useEffect(() => {
        // async function getRecipe(){
        // let res = await fetch ("https://localhost:5001/recipes");
        // let data = await res.json();
        // console.log(data.Method)}
    
        getRecipe();
}, [id]);

async function getRecipe(){
    let res = await fetch (`http://localhost:5000/recipes/${id}`);
    let data = await res.json();
    console.log(data);
    setRecipe(data.title)
    setMethod(data.method)
    setAuthor(data.author)
    setTime(data.timeTaken)
}
 


    return (
        <div >
            {Recipe}
            {Method}
            {Author}
            {Time}
        </div>
    )
}

export default Recipe;