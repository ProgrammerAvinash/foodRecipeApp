import React from 'react';


export const Search = ({placeholder,value,onInputChange,onSearchClick}) => {

    return(
         
       
            <div className="input-group mb-3 w-50 mx-auto m-5  ">

                <input type="text" className="form-control " 
                placeholder= {placeholder}   
                value={value.trim()}    
                onChange={onInputChange}   
               
                />

                <div className="input-group-append">

                <button className="btn btn-danger " id="basic-addon2"  onClick={onSearchClick} > Search</button>
                </div>
            </div>
     
    )

}