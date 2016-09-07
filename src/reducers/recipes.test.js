// @ flow

import recipes from './recipes'
import { addRecipe } from '../actions'

it('turns undefined into an array', () => {
  expect(Array.isArray(recipes(undefined, {}))).toBe(true)
})

it('adds a recipe to an empty array', () => {
  expect(recipes([], addRecipe('Y'))).toEqual(['Y'])
})

it('adds a recipe to the tail of a non-empty array', () => {
  expect(recipes(['X'], addRecipe('Y'))).toEqual(['X', 'Y'])
})

it('does not mutate the original when adding to an array', () => {
  let input = ['X']
  let output = recipes(input, addRecipe('Y'))
  expect(output).toEqual(['X', 'Y'])
  expect(input).toEqual(['X'])
})

it('ignores an unknown action', () => {
  expect(recipes(['X'], {})).toEqual(['X'])
})
