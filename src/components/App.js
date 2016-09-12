/** @flow
 *
 * Top-level component
 *
 */

import React from 'react'

import RecipeList from '../containers/RecipeList'
import './App.css'

function App(): React.Element<*> {
  return (
    <div className='App'>
      <div className='page-header'>
        <h1>Recipe Box <small>A FreeCodeCamp exercise</small></h1>
      </div>
      <RecipeList />
    </div>
  )
}

export default App
