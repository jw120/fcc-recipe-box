/** @flow
 *
 * Main presentational component
 */

import React from 'react'
import { Button } from 'react-bootstrap'

import Recipe from './Recipe'
import EditRecipeModal from '../containers/EditRecipeModal'
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
        <EditRecipeModal title="Add Recipe" save={props.addRecipe}/>
      }
    </div>
  )
}

export default RecipeList
