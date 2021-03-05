import React, {useState, useEffect} from "react";
import "../App/App.css";

function Recipe({id} ){
    const[Recipe,setRecipe]= useState("Spice up your meals with Recipes not stressipes");
    
useEffect(() => {
        async function getRecipe(){
        let res = await fetch ("ec2-176-34-222-188.eu-west-1.compute.amazonaws.com");
        let data = await res.json();
        console.log(data)}
    
        getRecipe();
}, [id]);

    


    return (
        <div >
            {Recipe}
        </div>
    )
}

export default Recipe;