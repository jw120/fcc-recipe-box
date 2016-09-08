/** @flow
 *
 * Forms holds the text entry values needed by our html forms
 *
 */

import type { Action } from '../actions'

export type FormKey = 'Recipe' // Forms for which we hold the current entry value as state

export type FormsState =  Map<FormKey, string>

const initialState = new Map()

function forms(state: FormsState = initialState, action: Action): FormsState {
  switch (action.type) {
    case 'SET_FORM':
      let copy = new Map(state.entries())
      return copy.set(action.payload.key, action.payload.value)
    default:
      return state
  }
}

export default forms
