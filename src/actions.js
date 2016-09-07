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
  recipe: string
}
export function selectRecipe(recipe: string): SelectRecipeAction {
  return {
    type: 'SELECT_RECIPE',
    recipe
  }
}

/**
 * Add a recipe
 */
type AddRecipeAction = {
  type: 'ADD_RECIPE',
  recipe: string
}
export function addRecipe(recipe: string): AddRecipeAction {
  return {
    type: 'ADD_RECIPE',
    recipe
  }
}

/**
 * ChangeModal
 */
type ChangeModalAction = {
  type: 'CHANGE_MODAL',
  target: 'ADD_RECIPE' | 'EDIT_RECIPE',
  open: boolean
}
export function changeModal(target: 'ADD_RECIPE' | 'EDIT_RECIPE', open: boolean): ChangeModalAction {
  return {
    type: 'CHANGE_MODAL',
    target,
    open
  }
}

/**
 * Update the value entered in our New Recipe entry form
 */
type UpdateEntryAction = {
  type: 'UPDATE_ENTRY',
  value: string
}
export function updateEntry(value: string): UpdateEntryAction {
  return {
    type: 'UPDATE_ENTRY',
    value
  }
}

export type Action
  = SelectRecipeAction
  | AddRecipeAction
  | UpdateEntryAction
  | ChangeModalAction

export type WrappedActionProps = {
  selectRecipe: (recipe: string) => void,
  addRecipe: (recipe: string) => void,
  changeModal: (target: 'ADD_RECIPE' | 'EDIT_RECIPE', open: boolean) => void,
  updateEntry: (value: string) => void
}
