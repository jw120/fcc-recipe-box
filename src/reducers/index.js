/** @flow
 *
 * Top-level reducer function
 *
 */

import { combineReducers } from 'redux'

import recipes from './recipes'
import selection from './selection'
import modal from './modal'
import forms from './forms'

import type { RecipesState } from './recipes'
import type { SelectionState } from './selection'
import type { ModalState } from './modal'
import type { FormsState} from './forms'

import type { Action } from '../actions'

export type State = {
  recipes: RecipesState,
  selection: SelectionState,
  modal: ModalState,
  forms: FormsState
}

const recipeBoxApp: (state: State, action : Action) => State = combineReducers({
  recipes,
  selection,
  modal,
  forms
})

export default recipeBoxApp
