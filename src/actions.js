/** @flow
 *
 * Provides Action creators and our Action type
 *
 */

type SpecificAction<T, P> = {
  type: T,
  payload: P
}

function makeActionCreator<T, P>(type: T): ((payload: P) => { type: T, payload: P }) {
  return function(payload: P) {
    return { type, payload }
  }
}

/** Select a recipe */
type SelectRecipeAction = SpecificAction<'SELECT_RECIPE', string>
export const selectRecipe: (recipe: string) => SelectRecipeAction =
  makeActionCreator('SELECT_RECIPE')

/** Add a recipe */
type AddRecipeAction = SpecificAction<'ADD_RECIPE', {recipe: string, ingredients: string}>
export const addRecipe: (recipe: string, ingredients: string) => AddRecipeAction =
  (recipe, ingredients) => makeActionCreator('ADD_RECIPE')({ recipe, ingredients })

/** Delete a recipe */
type DeleteRecipeAction = SpecificAction<'DELETE_RECIPE', string>
export const deleteRecipe: (recipe: string) => DeleteRecipeAction =
  makeActionCreator('DELETE_RECIPE')


/** Set the state of our modals */
import type { ModalState } from './reducers/modal'
type SetModalAction = SpecificAction<'SET_MODAL', ModalState>
export const setModal: ((modal: ModalState) => SetModalAction) =
  makeActionCreator('SET_MODAL')

/** Set a form value */
import type { FormKey } from './reducers/forms'
type SetFormAction = SpecificAction<'SET_FORM', { key: FormKey, value: string}>
export const setForm: (key: FormKey, value: string) => SetFormAction =
  (key, value) => makeActionCreator('SET_FORM')({ key, value })

export type Action
  = SelectRecipeAction
  | AddRecipeAction
  | DeleteRecipeAction
  | SetModalAction
  | SetFormAction

export type WrappedActionProps = {
  selectRecipe: (recipe: string) => void,
  addRecipe: (recipe: string, ingredients: string) => void,
  deleteRecipe: (recipe: string) => void,
  setModal: (modal: ModalState) => void,
  setForm: (key: FormKey, value: string) => void
}
