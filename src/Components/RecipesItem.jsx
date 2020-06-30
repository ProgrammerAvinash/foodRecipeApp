import React from 'react';

export const RecipesItem = ({name,image,ingredientLines}) => {
    return(

        
            <div className="card py-2 text-center ">
                <img src={image} alt="recipe" className="image-fluid w-50 mx-auto rounded-circle " />
                <div className="card-body">
                <h5>{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                {       
                        ingredientLines.map(ingredient => ( 
                        <li className="list-group-item"> 

                        {ingredient} 
                        
                        </li>
                    ))
                }
                </ul>
            </div>
        

        
    )
}
export default RecipesItem;