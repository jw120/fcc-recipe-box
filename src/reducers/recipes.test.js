// @ flow

import { is, Map } from 'immutable'

import recipes from './recipes'
import { addRecipe, deleteRecipe } from '../actions'

it('turns undefined into an immutable Map', () => {
  let input = undefined
  let output = recipes(input, { type: 'Unknown action' })
  expect(Map.isMap(output)).toBe(true)
})

it('adds a recipe to an empty Map without mutation', () => {
  let input = Map()
  let output = recipes(input, addRecipe('A','I1,I2'))
  let expected = Map([['A', ['I1', 'I2']]])
  expect(output).toEqual(expected)
  expect(input).toEqual(Map())
})

it('trims spaces and drops empty entries in ingredients when adding', () => {
  let input = Map()
  let output = recipes(input, addRecipe('A','x, y,  z z,,  ,'))
  let expected = Map([['A', ['x', 'y', 'z z']]])
  expect(output).toEqual(expected)
})

it('adds a recipe to a non-empty Map without mutation', () => {
  let input = Map([['A', ['A1', 'A2']]])
  let output = recipes(input, addRecipe('B','B1,B2,B3'))
  let expected = Map([['B', ['B1', 'B2', 'B3']], ['A', ['A1', 'A2']]])
  expect(output.sort()).toEqual(expected.sort())
  expect(input).toEqual(Map([['A', ['A1', 'A2']]]))
})

it('deletes an existing recipe without mutation', () => {
  let input = Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]])
  let output = recipes(input, deleteRecipe('B'))
  let expected = Map([['A', ['A1', 'A2']]])
  expect(output.sort()).toEqual(expected.sort())
  expect(input).toEqual(Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]]))
})

it('ignores delete request on a non-existing recipe without mutation', () => {
  let input = Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]])
  let output = recipes(input, deleteRecipe('C'))
  let expected = Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]])
  expect(output.sort()).toEqual(expected.sort())
  expect(input).toEqual(Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]]))
})

it('ignores an unknown action', () => {
  let input = Map([['A', ['A1', 'A2']]])
  let output = recipes(input, { type: 'Unknown'})
  expect(output).toEqual(input)
})
