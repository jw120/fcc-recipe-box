import selected from './selected'
import { selectRecipe } from '../actions'

it('turns undefined into a null or string', () => {
  function isValid(s) {
    return s === null || typeof s === 'string'
  }
  expect(isValid(selected(undefined, {}))).toBe(true)
})

it('replaces an existing different recipe', () => {
  expect(selected('X', selectRecipe('Y'))).toBe('Y')
})

it('replaces an existing null recipe', () => {
  expect(selected(null, selectRecipe('Y'))).toBe('Y')
})

it('replaces an existing equal recipe', () => {
  expect(selected('X', selectRecipe('X'))).toBe(null)
})
