import Hero from "./Hero";

//API key = d86b2905f1c008bfad2803abc6fbace2
// https://api.themoviedb.org/3/search/movie?api_key=d86b2905f1c008bfad2803abc6fbace2&language=en-US&query=star%20wars&page=1&include_adult=false 

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`;
    console.log(searchResults, "are the search results.");

    return (
      <>
        <Hero text={title} />
      </>
    )
  }

export default SearchView; 