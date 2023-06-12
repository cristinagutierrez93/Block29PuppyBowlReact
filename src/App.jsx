import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import {Homepage, PuppyList, DetailedPup} from "./components"
import PuppySearchBar from './components/PuppySearchBar';

function PuppyBox() {
  const [puppies, setPuppyData] = useState([]);
  const [allPups, setAllPups] = useState([]);
  const [puppy, setSelectedPuppy]= useState("")
  const [searchQuery, setSearchQuery]= useState("")

  useEffect(() => {
    async function fetchPuppyData(){
      try{
        const response= await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players"
        );
        const translatedData= await response.json ();
        setPuppyData(translatedData.data.players);
      } catch(error){
        console.log(error);
      }
    } fetchPuppyData ();
  }, []);

  return (
   
      <div>
        <nav className="container-element">
          <Link to="/">HOMEPAGE</Link>
          <Link to="/puppies">PUPPIES</Link>
          <Link to="/searchbar">SEARCH FOR PUPPIES</Link>
          
        </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/puppies" element={<PuppyList puppies={puppies}/>}></Route>
        <Route path="/puppies/:id" element={<DetailedPup puppies={puppies}/>}></Route>
        <Route path="/searchbar" element={<PuppySearchBar puppies={puppies}/>}></Route>
      </Routes>
      </div>
  )
      
}

export default PuppyBox;
