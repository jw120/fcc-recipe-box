// @ flow

import forms from './forms'
import { setForm } from '../actions'

it('turns undefined into an empty Map', () => {
  const output = forms(undefined, { type: 'Any Action' })
  expect(output instanceof Map).toBe(true)
  expect(output.size).toBe(0)
})

it('adds a new key and value to an empty Map', () => {
  const output = forms(undefined, setForm('Recipe', 'abc'))
  const expected = new Map([['Recipe', 'abc']])
  expect(output).toEqual(expected)
})

it('adds a new key and value to a non-empty Map without mutation', () => {
  const input = new Map([['Other', 'xy']])
  const output = forms(input, setForm('Recipe', 'abc'))
  const expected = new Map([['Other', 'xy'], ['Recipe', 'abc']])
  expect(output).toEqual(expected)
  expect(input).toEqual(new Map([['Other', 'xy']]))
})

it('replaces an existing key and value without mutation', () => {
  const input = new Map([['Recipe', 'xy']])
  const output = forms(input, setForm('Recipe', 'abc'))
  const expected = new Map([['Recipe', 'abc']])
  expect(output).toEqual(expected)
  expect(input).toEqual(new Map([['Recipe', 'xy']]))
})

it('ignores an unknown action without mutation', () => {
  const input = new Map([['Recipe', 'xy']])
  const output = forms(input, { type: 'Unknown' })
  expect(output).toEqual(new Map([['Recipe', 'xy']]))
  expect(input).toEqual(new Map([['Recipe', 'xy']]))
})
