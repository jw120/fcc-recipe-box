/** @flow
 *
 * Recipe state holds our main app data - the receipes and their ingredients
 *
 */

import { Map } from 'immutable'
import type { Action } from '../actions'

export type RecipesState = Map<string, string[]>

const initialState: RecipesState = Map([
  ['Boiled eggs', ['Eggs', 'Water']],
  ['Fish and Chips', ['Cod', 'Flour', 'Oil']],
  ['Tarka Daal', ['Lentils', 'Cumin', 'Salt', 'Pepper']]
])

function recipes(state: RecipesState = initialState, action: Action): RecipesState {
  switch (action.type) {
    case 'ADD_RECIPE': {
      const ingredients = action.payload.ingredients
        .split(',')
        .map((s: string): string => s.trim(s))
        .filter((s: string): boolean => s.length > 0)
      return state.set(action.payload.recipe, ingredients)
    }
    case 'DELETE_RECIPE':
      return state.delete(action.payload)
    default:
      return state
  }
}

export default recipes
