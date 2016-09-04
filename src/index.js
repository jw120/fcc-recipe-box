/** @flow
 *
 * Overall entry point for React, sets up redux store and react-redux Provider
 *
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap-theme.css' // optional?

import recipeBoxApp from './reducers'
import App from './components/App'
import './index.css'

let store = createStore(recipeBoxApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
