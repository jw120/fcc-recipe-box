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
      <div className='App-header'>
        Recipe Box
      </div>
      <RecipeBox />
    </div>
  )
}

export default App
