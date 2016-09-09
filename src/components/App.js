/** @flow
 *
 * Top-level component
 *
 */

import React from 'react'

import RecipeBox from '../containers/RecipeBox'
import './App.css'

function App(): React.Element<*> {
  return (
    <div className='App'>
      <div className='page-header'>
        <h1>Recipe Box <small>A FreeCodeCamp exercise</small></h1>
      </div>
      <RecipeBox />
    </div>
  )
}

export default App

/*
<div className='App-Header'>
  Recipe Box
</div>
*/
