/** @flow
 *
 * Main presentational component
 */

import React from 'react'
import { Button } from 'react-bootstrap'

import Recipe from './Recipe'
import AddRecipeModal from './AddRecipeModal'
import type { WrappedActionProps } from '../actions'
import type { State } from '../reducers'
import './RecipeList.css'

function RecipeList(props: State & WrappedActionProps): React.Element<*> {
  return (
    <div className="RecipeList">
      <div className="RecipeList-Frame">
        { props.recipes.map((r: string, i: number) => {
          return (
            <Recipe
              recipe={r}
              isSelected={props.selection === r}
              onSelect={() => props.selectRecipe(r)}
              key={i}
            />
          )
          })}
      </div>
      { props.modal === 'Edit_Recipe_Modal' ?
        <AddRecipeModal
          onSubmit={(recipe: ?string) => {
            props.setModal(null)
            if (recipe) {
              props.addRecipe(recipe)
            }
            props.setForm('Recipe', '')
          }}
          onCancel={() => {
            props.setModal(null)
            props.setForm('Recipe', '')
          }}
          onChange={(value: ?string) => props.setForm('Recipe', value || '')}
          value={props.forms.get('Recipe')}
        /> :
        <Button
          onClick={() => props.setModal('Edit_Recipe_Modal', true)}
          bsStyle="primary"
        >
          Add Recipe
          </Button>
      }
    </div>
  )
}

export default RecipeList


/*

<RecipeEntryForm
  value={props.entryValue}
  onChange={props.updateEntry}
  onSubmit={() => props.addRecipe(props.entryValue)}
/>


  */
