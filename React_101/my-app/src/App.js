import './App.css';
// import Item from './MyItem';
import React from 'react';

// class FilmItemRow extends React.Component{
//   render() {
//     return (
//       <li>
//         <a href={this.props.url}>{this.props.url}</a>
//       </li>
//     )
//   }
// }

class StarWars extends React.Component{

  constructor(){
    super()

    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeWorld: null,
      // films: [],
      picture: null,
    }
  }

  getNewCharacter(){
    const randomNum = Math.ceil(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNum}.json`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeWorld: data.homeworld,
          // films: data.films,
          picture: data.image,
          loadedCharacter: true,
        })
      })
  }

  render(){

    // const movies = this.state.films.map((film, i) => {
    //   return <FilmItemRow key = {i} url={film}/>;
    // })

    return(
      <div>
        {
          this.state.loadedCharacter &&
            <div>
              <h1>{this.state.name}</h1>
              <p>{this.state.height} cm</p>
              <p><a href={this.state.homeWorld}>Homeworld </a></p>
              {/* <ul>
                {movies}
              </ul> */}
              <img src={this.state.picture} alt="..."></img>
            </div>
        }
        <button
          type="button" 
          className='btn'
          onClick={() => this.getNewCharacter()}
        >
          Randomize
        </button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
