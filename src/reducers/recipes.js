/** @flow
 *
 * Recipe state holds our main app data - the receipes and their ingredients
 *
 */

import { Map } from 'immutable'
import type { Action } from '../actions'

import { unpack } from '../utils/pack'

export type RecipesState = Map<string, string[]>

const initialState = Map() // We rely on index.js to read intial value from localStorage

function recipes(state: RecipesState = initialState, action: Action): RecipesState {

  switch (action.type) {
    case 'ADD_RECIPE': {
      return state.set(action.payload.recipe, unpack(action.payload.packedIngredients))
    }
    case 'DELETE_RECIPE':
      return state.delete(action.payload)
    default:
      return state
  }
}

export default recipes
