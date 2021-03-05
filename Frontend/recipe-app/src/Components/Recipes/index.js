import React, {useState, useEffect} from "react";
import "../App/App.css";

function Recipe({id} ){
    const[Recipe,setRecipe]= useState("Spice up your meals with Recipes not stressipes");
    
useEffect(() => {
        // async function getRecipe(){
        // let res = await fetch ("https://localhost:5001/recipes");
        // let data = await res.json();
        // console.log(data.Method)}
    
        getRecipe();
}, [id]);

async function getRecipe(){
    let res = await fetch ("http://localhost:5000/recipes");
    let data = await res.json();
    console.log(data[0].method)}  


    return (
        <div >
            {Recipe}
        </div>
    )
}

export default Recipe;