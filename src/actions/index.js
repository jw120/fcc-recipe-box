/** @flow
 *
 * Action creators
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
export function changeModal(target: 'ADD_RECIPE' | 'EDIT_RECIPE', open: boolean) {
  return {
    type: 'CHANGE_MODAL',
    target,
    open
  }
}

export type Action
  = SelectRecipeAction
  | AddRecipeAction
  | ChangeModalAction

/* Types for our actionCreators after they are wrapped in store.dispatch by react-redux's connect and injected as props */
export type WrappedActionProps = {
  selectRecipe: (recipe: string) => void,
  addRecipe: (recipe: string) => void,
  changeModal: (target: 'ADD_RECIPE' | 'EDIT_RECIPE', open: boolean) => void
}
