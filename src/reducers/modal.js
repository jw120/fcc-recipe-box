/** @flow
 *
 *
 *
 */

import type { Action } from '../actions'

export type ModalState = 'NONE' | 'ADD_RECIPE' | 'EDIT_RECIPE'

const initialState = 'NONE'

function modal(state: ModalState = initialState, action: Action): ModalState {
  switch (action.type) {
    case 'CHANGE_MODAL':
        return action.open ? action.target : 'NONE'
    default:
      return state
  }
}

export default modal
