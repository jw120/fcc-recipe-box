/** @flow
 *
 * Redux middleware to mirror recipe state changes to localStorage
 *
 */

// import type { Dispatch, MiddlewareAPI } from 'redux'
// import { Map } from 'immutable'

import type { Action } from '../actions'
import type { State } from '../reducers'

const prefix = '_jw_recipe_box_'

export function readRecipes(): [[string, string]] {
  const acc: Array<[string, string]> = []
  if (localStorage) {
    for (let i = 0; i < localStorage.length; i++) {
      const k: string | null | void = localStorage.key(i)
      if (k && k.startsWith(prefix)) {
        const v: string = localStorage.getItem(k) || ''
        acc.push([k.substr(prefix.length), v])
      }
    }
  }
  return acc
}

type Next = (a: Action) => Next

export const mirrorChanges = (api: { getState: () => State }) => (next: Next) => (action: Action): Next => {

  const result = next(action)

  if (localStorage) {
    switch (action.type) {
      case 'ADD_RECIPE':
        localStorage.setItem(prefix + action.payload.recipe, action.payload.packedIngredients)
        break
      case 'DELETE_RECIPE':
        localStorage.removeItem(prefix + action.payload)
        break
      // no default
    }
  }

  return result

}
