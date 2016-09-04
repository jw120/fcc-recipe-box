/** @flow
 *
 *
 *
 */

import type { Action } from "../actions";

export type RecipesState = string[];

const initialState = ["Boiled eggs", "Fish and Chips", "Tarka Daal"]

function recipes(state: RecipesState = initialState, action: Action): RecipesState {
  switch (action.type) {
    case "ADD_RECIPE":
      return state.concat(action.recipe)
    default:
      return state
  }
}

export default recipes
