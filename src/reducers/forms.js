/** @flow
 *
 * Forms holds the text entry values needed by our html forms
 *
 */

import { Map } from 'immutable'
import type { Action } from '../actions'

export type FormKey = 'Recipe' | 'Ingredients'

export type FormsState =  Map<FormKey, string>

const initialState = Map()

function forms(state: FormsState = initialState, action: Action): FormsState {
  switch (action.type) {
    case 'SET_FORM': {
      return state.set(action.payload.key, action.payload.value)
    }
    default:
      return state
  }
}

export default forms
