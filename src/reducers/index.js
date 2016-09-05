/** @flow
 *
 *
 *
 */

import { combineReducers } from 'redux'

import recipes from './recipes'
import selected from './selected'
import modal from './modal'
import entryValue from './entryValue'
import type { RecipesState } from './recipes'
import type { SelectedState } from './selected'
import type { ModalState } from './modal'
import type { EntryValueState} from './entryValue'
import type { Action } from '../actions'

export type State = {
  recipes: RecipesState,
  selected: SelectedState,
  modal: ModalState,
  entryValue: EntryValueState
}

const recipeBoxApp: (state: State, action : Action) => State = combineReducers({
  recipes,
  selected,
  modal,
  entryValue
})

export default recipeBoxApp
