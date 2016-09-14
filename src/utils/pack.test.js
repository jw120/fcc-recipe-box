// @ flow

import { pack, unpack } from './pack'

it('packs a simple array', () => {
  expect(pack(['A', 'B', 'C'])).toBe('A,B,C')
})

it('unpacks a simple comma-separated strings', () => {
  expect(unpack('A,B,C')).toEqual(['A', 'B', 'C'])
})

it('packs an array removing start/end whitespace', () => {
  expect(pack(['   A A  ', 'B  \t', '\rC\n'])).toBe('A A,B,C')
})

it('unpacks a comma separated string removing start/end whitespace', () => {
  expect(unpack(' A ,B B,\tC\r')).toEqual(['A', 'B B','C'])
})

it('packs an array removing elements that have no non-whitespae characters', () => {
  expect(pack(['A', '', ' ', 'B ','\t', '\r\n'])).toBe('A,B')
})

it('unpacks a comma separated string removing elements that have no non-whitespae characters', () => {
  expect(unpack(',A,,B,\t, \r,')).toEqual(['A','B'])
})
