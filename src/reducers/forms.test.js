// @ flow

import { Map } from 'immutable'

import forms from './forms'
import { setForm } from '../actions'

it('turns undefined into an empty Map', () => {
  const output = forms(undefined, { type: 'Any Action' })
  expect(Map.isMap(output)).toBe(true)
  expect(output.size).toBe(0)
})

it('adds a new key and value to an empty Map', () => {
  const output = forms(undefined, setForm('Recipe', 'abc'))
  const expected = Map([['Recipe', 'abc']])
  expect(output).toEqual(expected)
})

it('adds a new key and value to a non-empty Map without mutation', () => {
  const input = Map([['Other', 'xy']])
  const output = forms(input, setForm('Recipe', 'abc'))
  const expected = Map([['Other', 'xy'], ['Recipe', 'abc']])
  expect(output).toEqual(expected)
  expect(input).toEqual(Map([['Other', 'xy']]))
})

it('replaces an existing key and value without mutation', () => {
  const input = Map([['Recipe', 'xy']])
  const output = forms(input, setForm('Recipe', 'abc'))
  const expected = Map([['Recipe', 'abc']])
  expect(output).toEqual(expected)
  expect(input).toEqual(Map([['Recipe', 'xy']]))
})

it('ignores an unknown action without mutation', () => {
  const input = Map([['Recipe', 'xy']])
  const output = forms(input, { type: 'Unknown' })
  expect(output).toEqual(Map([['Recipe', 'xy']]))
  expect(input).toEqual(Map([['Recipe', 'xy']]))
})
