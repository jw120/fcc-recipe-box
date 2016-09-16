// @ flow

import { pack, unpack, capitalize } from './pack'

it('packs a simple array', () => {
  expect(pack(['A', 'B', 'C'])).toBe('A, B, C')
})

it('unpacks a simple comma-separated strings', () => {
  expect(unpack('A,bb,cc')).toEqual(['A', 'Bb', 'Cc'])
})

it('packs an array removing start/end whitespace', () => {
  expect(pack(['   A A  ', 'B  \t', '\rC\n'])).toBe('A A, B, C')
})

it('unpacks a comma separated string removing start/end whitespace', () => {
  expect(unpack(' A ,b b,\tC\r')).toEqual(['A', 'B b', 'C'])
})

it('packs an array removing elements that have no non-whitespae characters', () => {
  expect(pack(['A', '', ' ', 'B ', '\t', '\r\n'])).toBe('A, B')
})

it('unpacks a comma separated string removing elements that have no non-whitespae characters', () => {
  expect(unpack(',A,,B,\t, \r,')).toEqual(['A', 'B'])
})

it('capitalize leaves an empty string untouchd', () => {
  expect(capitalize('')).toBe('')
})

it('capitalize to work on longer strings', () => {
  expect(['AAA', 'bbbB', 'joe', 'fish and chips'].map(capitalize))
    .toEqual(['AAA', 'BbbB', 'Joe', 'Fish and chips'])
})
