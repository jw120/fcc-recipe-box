// @ flow

import { Map } from 'immutable'

import recipes from './recipes'
import { addRecipe, deleteRecipe } from '../actions'

it('turns undefined into an immutable Map', () => {
  const input = undefined
  const output = recipes(input, { type: 'Unknown action' })
  expect(Map.isMap(output)).toBe(true)
})

it('adds a recipe to an empty Map without mutation', () => {
  const input = Map()
  const output = recipes(input, addRecipe('A', 'I1,I2'))
  const expected = Map([['A', ['I1', 'I2']]])
  expect(output).toEqual(expected)
  expect(input).toEqual(Map())
})

it('trims spaces and drops empty entries in ingredients when adding', () => {
  const input = Map()
  const output = recipes(input, addRecipe('A', 'x, y,  z z,,  ,'))
  const expected = Map([['A', ['x', 'y', 'z z']]])
  expect(output).toEqual(expected)
})

it('adds a recipe to a non-empty Map without mutation', () => {
  const input = Map([['A', ['A1', 'A2']]])
  const output = recipes(input, addRecipe('B', 'B1,B2,B3'))
  const expected = Map([['B', ['B1', 'B2', 'B3']], ['A', ['A1', 'A2']]])
  expect(output.sort()).toEqual(expected.sort())
  expect(input).toEqual(Map([['A', ['A1', 'A2']]]))
})

it('deletes an existing recipe without mutation', () => {
  const input = Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]])
  const output = recipes(input, deleteRecipe('B'))
  const expected = Map([['A', ['A1', 'A2']]])
  expect(output.sort()).toEqual(expected.sort())
  expect(input).toEqual(Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]]))
})

it('ignores delete request on a non-existing recipe without mutation', () => {
  const input = Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]])
  const output = recipes(input, deleteRecipe('C'))
  const expected = Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]])
  expect(output.sort()).toEqual(expected.sort())
  expect(input).toEqual(Map([['A', ['A1', 'A2']], ['B', ['B1', 'B2']]]))
})

it('ignores an unknown action', () => {
  const input = Map([['A', ['A1', 'A2']]])
  const output = recipes(input, { type: 'Unknown' })
  expect(output).toEqual(input)
})
