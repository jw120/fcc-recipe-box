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
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css' // optional?

import recipeBoxApp from './reducers/index'
import RecipeBox from './containers/RecipeBox'
import './app.css'

// import type { Store } from 'redux'
type Store = any

// Start up our store and link to Redux DevTools
const store: Store = createStore(recipeBoxApp, devToolsExtension && devToolsExtension())

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
