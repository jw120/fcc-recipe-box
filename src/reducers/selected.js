/** @flow
 *
 *
 *
 */

import type { Action } from "../actions";

export type SelectedState = ?string;

const initialState = "Fish and Chips"

function selected(state: SelectedState = initialState, action: Action): SelectedState {
  switch (action.type) {
    case "SELECT_RECIPE":
      if (action.recipe === state) { // selecting the existing selection deselects it
        return null
      } else {
        return action.recipe
      }
    default:
      return state
  }
}

export default selected
