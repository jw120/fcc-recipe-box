/** @flow
 *
 *
 *
 */

import { combineReducers } from 'redux'

import recipes from './recipes'
import selected from './selected'
import modal from './modal'
import type { RecipesState } from './recipes'
import type { SelectedState } from './selected'
import type { ModalState } from './modal'
import type { Action } from '../actions'

export type State = {
  recipes: RecipesState,
  selected: SelectedState,
  modal: ModalState
}

const recipeBoxApp: (state: State, action : Action) => State = combineReducers({
  recipes,
  selected,
  modal
})

export default recipeBoxApp
