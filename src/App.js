import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Recipes from './Components/Recipes';

const API_KEY='184b186f38df0d0e727bc26f213d413b'

class App extends Component {
  state = { 
    recipes: []
   }

  getRecipe = async ( e ) => { 
    const recipeName = e.target.elements.recipeName.value
    e.preventDefault()
    const api_call= await fetch( `https://www.food2fork.com/api/search?key=${ API_KEY }&q=${ recipeName }` )
    const data = await api_call.json()
    this.setState( { recipes: data.recipes } )
    console.log( this.state.recipes )
   }

  
   

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={ this.getRecipe } />
        <Recipes recipes={ this.state.recipes }/>
      </div>
    );
  }
}

export default App;