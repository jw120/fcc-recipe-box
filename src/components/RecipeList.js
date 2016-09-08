/** @flow
 *
 * Main presentational component
 */

import React from 'react'
import { Button } from 'react-bootstrap'

import Recipe from './Recipe'
import EditRecipeModal from './EditRecipeModal'
import type { WrappedActionProps } from '../actions'
import type { State } from '../reducers'
import './RecipeList.css'

/** Helper function to render a recipe */
function recipe(r: string, i: number, isSelected: boolean, onSelect: () => void) {
  return (
    <Recipe
      recipe={r}
      isSelected={isSelected}
      onSelect={onSelect}
      key={i}
    />
  )
}

/** Helper function to generate onCancel handler */
function onSubmit(props: WrappedActionProps) {
  return (recipe: ?string) => {
    props.setModal(null) // close the modal
    if (recipe && recipe.trim()) { // add the recipe if we have one
      props.addRecipe(recipe.trim())
    }
    props.setForm('Recipe', '') // clear the form entry value
  }
}

/** Helper function to generate onCancel handler */
function onCancel(props: WrappedActionProps) {
  return () => {
    props.setModal(null) // close the modal
    props.setForm('Recipe', '') // clear the form entry value
  }
}

/** Helper function to generate onChange handler */
function onChange(props: WrappedActionProps) {
  return (value: ?string) => {
    props.setForm('Recipe', value || '') // update the form entry value, defaulting to an empty string
  }
}

function RecipeList(props: State & WrappedActionProps): React.Element<*> {
  return (
    <div className="RecipeList">
      <div className="RecipeList-Frame">
        { props.recipes.map((r: string, i: number) =>
            recipe(r, i, props.selection === r, () => props.selectRecipe(r)))
        }
      </div>
      <Button onClick={() => props.setModal('Edit_Recipe_Modal', true)} bsStyle="primary">
        Add Recipe
      </Button>
      { props.modal === 'Edit_Recipe_Modal' &&
        <EditRecipeModal
          title="Add Recipe"
          onSubmit={onSubmit(props)}
          onCancel={onCancel(props)}
          onChange={onChange(props)}
          value={props.forms.get('Recipe')}
        />
      }
    </div>
  )
}

export default RecipeList
