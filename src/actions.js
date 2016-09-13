/** @flow
 *
 * Provides Action creators and our Action type
 *
 */

import type { ModalState } from './reducers/modal'
import type { FormKey } from './reducers/forms'

type SpecificAction<T, P> = {
  type: T,
  payload: P
}

function makeActionCreator<T, P>(type: T): ((payload: P) => { type: T, payload: P }) {
  return function(payload: P): { type: T, payload: P } {
    return { type, payload }
  }
}

/** Select a recipe */
type SelectRecipeAction = SpecificAction<'SELECT_RECIPE', string | null>
export const selectRecipe: (recipe: string | null) => SelectRecipeAction =
  makeActionCreator('SELECT_RECIPE')

/** Add a recipe */
type AddRecipeAction = SpecificAction<'ADD_RECIPE', {recipe: string, ingredients: string}>
export const addRecipe: (recipe: string, ingredients: string) => AddRecipeAction =
  (recipe: string, ingredients: string) => makeActionCreator('ADD_RECIPE')({ recipe, ingredients })

/** Delete a recipe */
type DeleteRecipeAction = SpecificAction<'DELETE_RECIPE', string>
export const deleteRecipe: (recipe: string) => DeleteRecipeAction =
  makeActionCreator('DELETE_RECIPE')

/** Set the state of our modals */
type SetModalAction = SpecificAction<'SET_MODAL', ModalState>
export const setModal: ((modal: ModalState) => SetModalAction) =
  makeActionCreator('SET_MODAL')

/** Set a form value */
type SetFormAction = SpecificAction<'SET_FORM', { key: FormKey, value: string}>
export const setForm: (key: FormKey, value: string) => SetFormAction =
  (key: FormKey, value: string) => makeActionCreator('SET_FORM')({ key, value })

export type Action
  = SelectRecipeAction
  | AddRecipeAction
  | DeleteRecipeAction
  | SetModalAction
  | SetFormAction

export type WrappedActionProps = {
  selectRecipe: (recipe: string | null) => void,
  addRecipe: (recipe: string, ingredients: string) => void,
  deleteRecipe: (recipe: string) => void,
  setModal: (modal: ModalState) => void,
  setForm: (key: FormKey, value: string) => void
}
