import React from 'react';
import {Search} from './SearchBox'


export const Header = ({search,onInputChange,onSearchClick}) => {
    return(
       
        <div className="jumbotron">
            <h1 className='display-1 headerFont'> Food Recipe App </h1>
            <h2 className="headerFont2"> Discover the best food recipes</h2>
       
            <Search placeholder=" Search For Recipe " value={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
            
        </div>
    )

}