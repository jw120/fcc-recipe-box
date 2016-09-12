/** @flow
 *
 * Main presentational container
 */

import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import Recipe from '../components/Recipe'
import RecipeModal from './RecipeModal'
import * as actions from '../actions'
import type { WrappedActionProps } from '../actions'
import type { State } from '../reducers'
import './RecipeList.css'

function openAddModal(props: State & WrappedActionProps) {
  props.setModal('Add_Recipe_Modal')
}

function openEditModal(props: State & WrappedActionProps) {
  if (props.selection) {
    let selection: string = props.selection
    props.setForm('Recipe', selection)
    props.setForm('Ingredients', props.recipes.get(selection).join(', '))
    props.setModal('Edit_Recipe_Modal')
  }
}

/** Helper function to handle hitting save in the recipe modal */
function handleSave(oldRecipe: ?string, newRecipe: string, newIngredients: string, props: WrappedActionProps) {
  console.log(oldRecipe, newRecipe)
  if (oldRecipe && newRecipe !== oldRecipe) { // user has editted the recipe name
    props.deleteRecipe(oldRecipe)
  }
  props.addRecipe(newRecipe, newIngredients)
}

function RecipeList(props: State & WrappedActionProps): React.Element<*> {
  let kvs: Array<[string, Array<string>]> = Array.from(props.recipes.entries())
  return (
    <div className='RecipeList'>
      <div className='RecipeList-Frame'>
        { kvs.map((kv, i) =>
            <Recipe
              recipe={kv[0]}
              ingredients={kv[1]}
              key={kv[0]}
              isSelected={props.selection === kv[0]}
              onSelect={() => props.selectRecipe(kv[0])}
              onEdit={() => openEditModal(props)}
              onDelete={() => props.deleteRecipe(kv[0])}
            />)
        }
      </div>
      <Button onClick={() => openAddModal(props)} bsStyle='primary'>
        Add Recipe
      </Button>
      <RecipeModal
        show={props.modal !== null}
        title={props.modal === 'Edit_Recipe_Modal' ? 'Edit a recipe' : 'Add a new recipe'}
        save={(recipe: string, ingredients: string) => handleSave(props.selection, recipe, ingredients, props)}
      />
    </div>
  )
}

export default connect((state: State) => state, actions)(RecipeList)
