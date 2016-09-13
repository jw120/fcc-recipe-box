/** @flow
 *
 * Main app container - connected to full redux state and all action creators
 */

import React from 'react'
import { Accordion, Button, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'

import Ingredients from '../components/Ingredients'
import RecipeModal from './RecipeModal'
import * as actions from '../actions'
import { validateRecipe } from '../validation'
import type { WrappedActionProps } from '../actions'
import type { State } from '../reducers'

/** Helper function passed to IngredientList to handle clicking Edit */
function handleEdit(recipe: string, props: State & WrappedActionProps) {
  props.setForm('Recipe', recipe)
  props.setForm('Ingredients', props.recipes.get(recipe).join(', '))
  props.selectRecipe(recipe)
  props.setModal('Edit_Recipe_Modal')
}

/** Helper function to handle clicking Add Receipe */
function handleAdd(props: WrappedActionProps) {
  props.setForm('Recipe', '')
  props.setForm('Ingredients', '')
  props.selectRecipe(null)
  props.setModal('Edit_Recipe_Modal')
}

/** Helper function passed to Modal to to handle hitting Save */
function handleSave(oldRecipe: ?string, newRecipe: string, newIngredients: string, props: WrappedActionProps) {
  if (oldRecipe && newRecipe !== oldRecipe) { // user has editted the recipe name
    props.deleteRecipe(oldRecipe)
  }
  props.addRecipe(newRecipe, newIngredients)
}

function RecipeBox(props: State & WrappedActionProps): React.Element<*> {
  const kvs: Array<[string, Array<string>]> = Array.from(props.recipes.entries())
  return (
    <div>
      <Accordion>
        {
          kvs.map((kv: [string, string[]], i: number): React.Element<*> =>
            <Panel header={ kv[0] } eventKey={ i } key={ i }>
              <Ingredients
                ingredients={ kv[1] }
                onEdit={ () => handleEdit(kv[0], props) }
                onDelete={ () => props.deleteRecipe(kv[0]) }
              />
            </Panel>
          )
        }
      </Accordion>
      <Button onClick={ () => handleAdd(props) } bsStyle='primary'>
        Add Recipe
      </Button>
      <RecipeModal
        show={ props.modal !== null }
        title={ props.modal === 'Edit_Recipe_Modal' ? 'Edit a recipe' : 'Add a new recipe' }
        save={ (recipe: string, ingredients: string) => handleSave(props.selection, recipe, ingredients, props) }
        validation={ (r: string) => validateRecipe(r, props.recipes.keys(), props.selection) }
      />
    </div>
  )
}

export default connect((state: State) => state, actions)(RecipeBox)
