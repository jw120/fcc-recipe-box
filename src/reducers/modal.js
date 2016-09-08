/** @flow
 *
 * Modal state records which modal is open (null if no modal is open). Modals
 * are mutually exclusive
 *
 */

import type { Action } from '../actions'

export type ModalState = 'Edit_Recipe_Modal' | null

const initialState = null

function modal(state: ModalState = initialState, action: Action): ModalState {
  switch (action.type) {
    case 'SET_MODAL':
      return action.payload
    default:
      return state
  }
}

export default modal
