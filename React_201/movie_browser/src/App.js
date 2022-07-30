import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import { Routes, Route } from 'react-router-dom';
  

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log(searchText, "is the search text")
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d86b2905f1c008bfad2803abc6fbace2&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResults(data.results);
      })
  }, [searchText] )

  


  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}   />} />
      </Routes>
      
    </div>
  );
}

export default App;
