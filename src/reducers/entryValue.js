/** @flow
 *
 *
 *
 */

import type { Action } from '../actions'

export type EntryValueState = string

const initialState = ""

function entryValue(state: EntryValueState = initialState, action: Action): EntryValueState {
  switch (action.type) {
    case 'UPDATE_ENTRY':
      return action.value
    default:
      return state
  }
}

export default entryValue
