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

export type Action
  = SelectRecipeAction
  | AddRecipeAction
