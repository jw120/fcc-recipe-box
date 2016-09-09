/** @flow
 *
 * Container which renders the modal to edit a recipe, connects to the store
 * to handle its own UI state directly
 *
 */

import React from 'react'
import { connect } from 'react-redux'

import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import { setModal, setForm } from '../actions'
import type { State } from '../reducers'
import type { Action } from '../actions'

// Properties we inherit from our parent
type OwnProps = {
  show: boolean,
  title: string,
  save: (recipe: string, ingredients: string) => void
}

// Properties injected from State
type PropsFromState = {
  value: string
}

// Properties injected from Dispatch
type PropsFromDispatch = {
  clearAndClose: () => void,
  onChange: (e: Event) => void
}

const formKey = 'Recipe'

/** Helper function to wrap the provided onSubmit prop */
function handleSubmit(props: OwnProps & PropsFromState & PropsFromDispatch, e: ?Event) {
  if (e) {
    e.preventDefault()
  }
  let recipe = props.value
  if (recipe && recipe.trim()) { // add the recipe if we have one
    props.save(recipe.trim(), 'Dummy')
  }
  props.clearAndClose()
}

function UnwrappedEditRecipeModal(props: OwnProps & PropsFromState & PropsFromDispatch): React.Element<*> {
  return (
      <Modal show={props.show}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={(e) => handleSubmit(props, e)}>
            <FormGroup>
              <ControlLabel>Enter the name of a new recipe</ControlLabel>
              <FormControl
                type='text'
                value={props.value || '' /* default to empty string if no value provided */}
                placeholder='Enter Recipe name'
                onChange={props.onChange}
                autoFocus
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.clearAndClose}>Cancel</Button>
          <Button onClick={() => handleSubmit(props)} bsStyle='primary'>Save</Button>
        </Modal.Footer>

      </Modal>
  )
}

function mapStateToProps(state: State): PropsFromState {
  return {
    value: state.forms.get(formKey) || ''
  }
}

function mapDispatchToProps(dispatch: (action: Action) => void): PropsFromDispatch {
  return {
    clearAndClose: () => {
      dispatch(setForm(formKey, ''))
      dispatch(setModal(null)) // close the modal
    },
    onChange: (e) => {
      e.preventDefault()
      if (e.target instanceof HTMLInputElement) {
        dispatch(setForm(formKey, e.target.value || '')) // update the form entry value, defaulting to an empty string
      }
    }
  }
}

const EditRecipeModal = connect(mapStateToProps, mapDispatchToProps)(UnwrappedEditRecipeModal)

export default EditRecipeModal
