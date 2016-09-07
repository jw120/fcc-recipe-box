/** @flow
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
// import 'bootstrap/dist/css/bootstrap-theme.css' // optional?

import recipeBoxApp from './reducers/index'
import App from './components/App'
import './index.css'
import type { State } from './reducers'
import type { Action } from './actions'

// Start up our store and link to Redux DevTools
let store: Store<State, Action> = createStore(recipeBoxApp, window.devToolsExtension && window.devToolsExtension())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
