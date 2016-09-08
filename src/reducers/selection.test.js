// @ flow

import selection from './selection'
import { selectRecipe } from '../actions'

it('turns undefined into null', () => {
  expect(selection(undefined, {})).toBe(null)
})

it('replaces an existing different recipe', () => {
  expect(selection('X', selectRecipe('Y'))).toBe('Y')
})

it('replaces an existing null recipe', () => {
  expect(selection(null, selectRecipe('Y'))).toBe('Y')
})

it('replaces an existing equal recipe', () => {
  expect(selection('X', selectRecipe('X'))).toBe(null)
})
