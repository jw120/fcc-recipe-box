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
  recipeValue: string,
  ingredientsValue: string
}

// Properties injected from Dispatch
type PropsFromDispatch = {
  clearAndClose: () => void,
  onRecipeChange: (e: Event) => void,
  onIngredientsChange: (e: Event) => void
}

/** Helper function to wrap the provided save prop */
function handleSubmit(props: OwnProps & PropsFromState & PropsFromDispatch, e: ?Event) {
  if (e) {
    e.preventDefault()
  }
  let recipe = props.recipeValue
  let ingredients = props.ingredientsValue
  if (recipe && recipe.trim()) { // add the recipe if we have one
    props.save(recipe.trim(), ingredients)
  }
  props.clearAndClose()
}

function UnwrappedRecipeModal(props: OwnProps & PropsFromState & PropsFromDispatch): React.Element<*> {
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
                value={props.recipeValue|| '' /* default to empty string if no value provided */}
                placeholder='Fish and chips'
                onChange={props.onRecipeChange}
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Ingredients used in the recipe (comma-separated)</ControlLabel>
              <FormControl
                type='text'
                value={props.ingredientsValue || '' /* default to empty string if no value provided */}
                placeholder='Cod, potatoes, peas'
                onChange={props.onIngredientsChange}
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
    recipeValue: state.forms.get('Recipe') || '',
    ingredientsValue: state.forms.get('Ingredients') || ''
  }
}

function mapDispatchToProps(dispatch: (action: Action) => void): PropsFromDispatch {
  return {
    clearAndClose: () => {
      dispatch(setForm('Recipe', ''))
      dispatch(setForm('Ingredients', ''))
      dispatch(setModal(null)) // close the modal
    },
    onRecipeChange: (e) => {
      e.preventDefault()
      if (e.target instanceof HTMLInputElement) {
        dispatch(setForm('Recipe', e.target.value || '')) // update the form entry value, defaulting to an empty string
      }
    },
    onIngredientsChange: (e) => {
      e.preventDefault()
      if (e.target instanceof HTMLInputElement) {
        dispatch(setForm('Ingredients', e.target.value || '')) // update the form entry value, defaulting to an empty string
      }
    }
  }
}

const RecipeModal = connect(mapStateToProps, mapDispatchToProps)(UnwrappedRecipeModal)

export default RecipeModal
