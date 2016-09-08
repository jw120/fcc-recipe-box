// @ flow

import modal from './modal'
import { setModal } from '../actions'

it('turns undefined into null', () => {
  expect(modal(undefined, { type: 'Any action' })).toBe(null)
})

it('sets to given value', () => {
  expect(modal(undefined, setModal('Edit_Recipe_Modal'))).toEqual('Edit_Recipe_Modal')
})

it('sets to given null value', () => {
  expect(modal(undefined, setModal(null))).toEqual(null)
})

it('ignores an unknown action', () => {
  expect(modal('Edit_Recipe_Modal', { type: 'Unknown' })).toEqual('Edit_Recipe_Modal')
})
