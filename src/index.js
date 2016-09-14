/* global devToolsExtension:false */ // @flow
/* eslint-disable flowtype/no-weak-types*/

/**
 *
 * Overall entry point for React, sets up redux store and react-redux Provider
 *
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Map } from 'immutable'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css' // optional?

import recipeBoxApp from './reducers/index'
import RecipeBox from './containers/RecipeBox'
import { mirrorChanges, readRecipes } from './utils/localStorage'
import { unpack } from './utils/pack'
import type { RecipesState } from './reducers/recipes'
import './app.css'

// We should import this type but not working
// import type { Store } from 'redux'

// Start up our store and link to Redux DevTools

//const middleware = devToolsExtension ? applyMiddleware(devToolsExtension(), mirrorLocalStorage) : mirrorLocalStorage

//const store /* omitted : Store */ = createStore(recipeBoxApp, middleware)

const initialState: { recipes: RecipesState } = {
  recipes: Map(readRecipes()
    .map(([recipe, packedIngredients]: [string, string]) => [recipe, unpack(packedIngredients)]))
}

const store = createStore(recipeBoxApp, initialState, compose(
  applyMiddleware(mirrorChanges),
  devToolsExtension ? devToolsExtension() : (f: *) => f
))


render(
  <Provider store={ store }>
    <div className='App'>
      <div className='page-header'>
        <h1>Recipe Box <small>A FreeCodeCamp exercise</small></h1>
      </div>
      <RecipeBox />
    </div>
  </Provider>,
  document.getElementById('root')
)
