/** @flow
 *
 * Main container - connected to full redux state and all action creators
 */

import React from 'react'
import { Accordion, Button, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import Ingredients from '../components/Ingredients'
import RecipeModal from './RecipeModal'
import ConfirmModal from '../components/ConfirmModal'
import * as actions from '../actions'
import { validateRecipe } from '../utils/validation'
import { pack } from '../utils/pack'
import type { WrappedActionProps } from '../actions'
import type { State } from '../reducers'

/** Helper function passed to IngredientList to handle clicking Edit */
function handleEdit(recipe: string, props: State & WrappedActionProps) {
  props.setForm('Recipe', recipe)
  props.setForm('Ingredients', pack(props.recipes.get(recipe)))
  props.selectRecipe(recipe)
  props.setModal('Edit_Recipe_Modal')
}

/** Helper function passed to IngredientList to handle clicking Delete */
function handleDelete(recipe: string, props: State & WrappedActionProps) {
  props.selectRecipe(recipe)
  props.setModal('Confirm_Modal')
}

/** Helper function passed to Confim Modal to handle click confirming deletion */
function handleConfirm(props: State & WrappedActionProps) {
  if (props.selection) {
    props.deleteRecipe(props.selection)
  }
  props.setModal(null)
}

/** Helper function passed to Confim Modal to handle click cancelling deletion */
function handleCancel(props: State & WrappedActionProps) {
  props.setModal(null)
}

/** Helper function to handle clicking Add Receipe */
function handleAdd(props: WrappedActionProps) {
  props.setForm('Recipe', '')
  props.setForm('Ingredients', '')
  props.selectRecipe(null)
  props.setModal('Add_Recipe_Modal')
}

/** Helper function passed to Modal to to handle hitting Save */
function handleSave(oldRecipe: ?string, newRecipe: string, newIngredients: string, props: WrappedActionProps) {
  if (oldRecipe && newRecipe !== oldRecipe) { // user has editted the recipe name
    props.deleteRecipe(oldRecipe)
  }
  props.addRecipe(newRecipe, newIngredients)
}

function RecipeBox(props: State & WrappedActionProps): React.Element<*> {
  const recipeIngredientPairs: Array<[string, Array<string>]> = Array.from(props.recipes.entries())
  return (
    <div>
      <Accordion>
        {
          recipeIngredientPairs.map(([recipe, ingredients]: [string, string[]], i: number): React.Element<*> =>
            <Panel header={ recipe } eventKey={ i } key={ i }>
              <Ingredients
                ingredients={ ingredients }
                onEdit={ () => handleEdit(recipe, props) }
                onDelete={ () => handleDelete(recipe, props) }
              />
            </Panel>
          )
        }
      </Accordion>
      <Button onClick={ () => handleAdd(props) } bsStyle='primary'>
        Add Recipe
      </Button>
      <RecipeModal
        show={ props.modal === 'Edit_Recipe_Modal' || props.modal === 'Add_Recipe_Modal' }
        title={ props.modal === 'Edit_Recipe_Modal' ? 'Edit a recipe' : 'Add a new recipe' }
        label={ props.modal === 'Edit_Recipe_Modal' ? 'Recipe name' : 'Name of new recipe' }
        save={ (recipe: string, ingredients: string) => handleSave(props.selection, recipe, ingredients, props) }
        validation={ (r: string) => validateRecipe(r, props.recipes.keys(), props.selection) }
      />
      <ConfirmModal
        show={ props.modal === 'Confirm_Modal' }
        recipe={ props.selection || '' }
        handleConfirm={ () => handleConfirm(props) }
        handleCancel={ () => handleCancel(props) }
      />
    </div>
  )
}

export default connect((state: State) => state, actions)(RecipeBox)
