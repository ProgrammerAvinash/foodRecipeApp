import React,{useState,useEffect} from 'react';
import './App.css';
import { Header } from './Components/Header'
import { Recipes } from './Components/Recipes'
import Axios from 'axios';

function App() {


  const [ search, setSearch] = useState("")
  const [recipes, setRecipes] = useState([])

  const APP_ID="d9dffc8c";
  const APP_KEY="ef2bb78e314685700a746b184852097e";

  
  useEffect(()=>{
    getRecipes();

  });
  
  const getRecipes= async ()=>{
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

    

    setRecipes(res.data.hits);

  }


  const onSearchClick = () => getRecipes();

  const onInputChange = (e) =>{
    setSearch(e.target.value)

  }

  

  return (
    <div className="App">
      
     < Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>

      <div className="container">

       <Recipes recipes={recipes}/>

     </div>
      
       
        
      
    </div>
  );
}

export default App;
