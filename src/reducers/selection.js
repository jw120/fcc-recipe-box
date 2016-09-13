/** @flow
 *
 * Selection state records which recipe has been opened for edding by the user (if any)
 *
 */

import type { Action } from '../actions'

export type SelectionState = string | null

const initialState = null

function selection(state: SelectionState = initialState, action: Action): SelectionState {
  switch (action.type) {
    case 'SELECT_RECIPE':
      if (action.payload === state) { // selecting the existing selection deselects it
        return null
      } else {
        return action.payload
      }
    default:
      return state
  }
}

export default selection
