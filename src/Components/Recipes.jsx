import React from 'react';
import RecipesItem from "./RecipesItem";


    export const Recipes = ({recipes}) => {
    return(
        <div className="card-columns">
            {
             
             recipes.map(recipe =>  ( 
             <RecipesItem name={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredientLines={recipe.recipe.ingredientLines}/> )    
             )
             
            }        
            
        </div>
    );
}
export default Recipes;