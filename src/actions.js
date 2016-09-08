/** @flow
 *
 * Provides Action creators and our Action type
 *
 */

/**
 * Select a recipe
 */
type SelectRecipeAction = {
  type: 'SELECT_RECIPE',
  payload: string
}
export function selectRecipe(recipe: string): SelectRecipeAction {
  return {
    type: 'SELECT_RECIPE',
    payload: recipe
  }
}

/**
 * Add a recipe
 */
type AddRecipeAction = {
  type: 'ADD_RECIPE',
  payload: string
}
export function addRecipe(recipe: string): AddRecipeAction {
  return {
    type: 'ADD_RECIPE',
    payload: recipe
  }
}

/**
 * SetModal
 */
import type { ModalState } from './reducers/modal'
type SetModalAction = {
  type: 'SET_MODAL',
  payload: ModalState
}
export function setModal(modal: ModalState): SetModalAction {
  return {
    type: 'SET_MODAL',
    payload: modal
  }
}

/**
 * Set a form value
 */
import type { FormKey } from './reducers/forms'
type SetFormAction = {
  type: 'SET_FORM',
  payload: {
    key: FormKey,
    value: string
  }
}
export function setForm(key: FormKey, value: string): SetFormAction {
  return {
    type: 'SET_FORM',
    payload: {
      key,
      value
    }
  }
}

export type Action
  = SelectRecipeAction
  | AddRecipeAction
  | SetModalAction
  | SetFormAction

export type WrappedActionProps = {
  selectRecipe: (recipe: string) => void,
  addRecipe: (recipe: string) => void,
  setModal: (modal: ModalState) => void,
  setForm: (key: FormKey, value: string) => void
}
