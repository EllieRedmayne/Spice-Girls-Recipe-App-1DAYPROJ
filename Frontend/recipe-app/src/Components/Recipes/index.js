import React, {useState, useEffect} from "react";
import "../App/App.css";

function Recipe({id} ){
    const[Recipe,setRecipe]= useState("Spice up your meals with Recipes not stressipes");
    
// useEffect(() => {
// getRecipe();

//     }, [id]);

//     async function getRecipe(){
// let res = await fetch ( insert url here,{
//     headers: {},
// });
// let data = await res.json();
// setRecipe(data.recipe);
//     }


//     }

    return (
        <div  >
            {Recipe}
        </div>
    )
}

export default Recipe;