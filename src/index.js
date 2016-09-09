/* global devToolsExtension:false @flow */
/**
 *
 * Overall entry point for React, sets up redux store and react-redux Provider
 *
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import type { Store } from 'redux'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css' // optional?

import recipeBoxApp from './reducers/index'
import App from './components/App'

// Start up our store and link to Redux DevTools
let store: Store = createStore(recipeBoxApp, devToolsExtension && devToolsExtension())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
