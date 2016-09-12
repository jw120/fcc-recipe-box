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
    const selection: string = props.selection
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

// /** Helper function to handle validation for recipe modal */
// function handleValidate(oldRecipe: ?string, existingRecipes: Map<string, *>, recipe: string, ingredients: string): 'success' | 'warning' | 'error' {
//   if (!recipe || recipe.length === 0) {
//     return 'warning' // if recipe name is missing
//   }
//   if (recipe && recipe !== oldRecipe && existingRecipes.has(recipe)) {
//     return 'error' // if name is diferent and already exists
//   }
//   return 'success'
// }
//
// function validationMessage(v: 'success' | ' warning' | 'error'): string {
//   switch (v) {
//     case 'error':
//       return 'A recipe with that name already exists'
//     case 'warning':
//       return 'Enter a recipe name'
//     default:
//       return ''
//   }
// }

export type Validation = {
  result: 'success' | 'warning' | 'error',
  message: string
}
function validation(props: State & WrappedActionProps, recipe: string, ingredients: string): Validation {
  const trimmedRecipe = recipe.trim()
  if (!trimmedRecipe) {
    return { result: 'warning', message: '' }
  }
  const normalizeRecipe = recipe.toLowerCase()
  if (props.recipes.some((value: *, recipe: string) => recipe.toLowerCase() === normalizeRecipe)) {
    return { result: 'error', message: 'A recipe with that name already exists' }
  }
  return { result: 'success', message: '' }
}

function RecipeList(props: State & WrappedActionProps): React.Element<*> {
  const kvs: Array<[string, Array<string>]> = Array.from(props.recipes.entries())
  return (
    <div className='RecipeList'>
      <div className='RecipeList-Frame'>
        { kvs.map((kv: [string, string[]], i: number): React.Element<*> =>
          <Recipe
            recipe={ kv[0] }
            ingredients={ kv[1] }
            key={ kv[0] }
            isSelected={ props.selection === kv[0] }
            onSelect={ () => props.selectRecipe(kv[0]) }
            onEdit={ () => openEditModal(props) }
            onDelete={ () => props.deleteRecipe(kv[0]) }
          />)
        }
      </div>
      <Button
        onClick={ () => openAddModal(props) }
        bsStyle='primary'
      >
        Add Recipe
      </Button>
      <RecipeModal
        show={ props.modal !== null }
        title={ props.modal === 'Edit_Recipe_Modal' ? 'Edit a recipe' : 'Add a new recipe' }
        save={ (recipe: string, ingredients: string) => handleSave(props.selection, recipe, ingredients, props) }
        validation={ (recipe: string, ingredients: string) => validation(props, recipe, ingredients) }
      />
    </div>
  )
}

export default connect((state: State) => state, actions)(RecipeList)
