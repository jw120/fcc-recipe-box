// @ flow

import { pack, unpack } from './pack'

it('packs a simple array', () => {
  expect(pack(['A', 'B', 'C'])).toBe('A,B,C')
})

it('unpacks a simple comma-separated strings', () => {
  expect(unpack('A,B,C')).toEqual(['A', 'B', 'C'])
})
