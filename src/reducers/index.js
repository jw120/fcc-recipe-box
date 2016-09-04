/** @flow
 *
 *
 *
 */


import { combineReducers } from 'redux'

import recipes from './recipes'
import selected from './selected'
import type { RecipesState } from './recipes'
import type { SelectedState } from './selected'
import type { Action } from '../actions'

export type State = {
  recipes: RecipesState,
  selected: SelectedState
}

const recipeBoxApp: (state: State, action : Action) => State = combineReducers({
  recipes,
  selected
})

export default recipeBoxApp
