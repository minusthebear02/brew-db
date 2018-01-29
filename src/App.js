import React, { Component } from 'react';
import './App.css';

import Recipe from './Recipe';

class App extends Component {

  state = {
    recipes: []
  }

  async componentDidMount() {
    try {

      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=198c3f3ed3e372e7bda3489518909b8f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');

      const recipes = await res.json();

      // Once API comes back with data we set the state of recipes to the results here...
      this.setState({
        recipes: recipes.results
      })

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-logo" alt="logo">brewDB</h1>
        </header>
        {this.state.recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)}
      </div>
    );
  }

}

export default App;
