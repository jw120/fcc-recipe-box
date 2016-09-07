/** @flow
 *
 * Main presentational component
 */

import React from 'react'
import { Button } from 'react-bootstrap'

import Recipe from './Recipe'
// import RecipeEntryForm from './RecipeEntryForm'
import AddRecipeModal from './AddRecipeModal'
import type { ModalState } from '../reducers/modal'
import type { WrappedActionProps } from '../actions'
import './RecipeList.css'

export type RecipeListProps = {
  recipes: string[],
  selected: ?string,
  modal: ModalState,
  entryValue: string,
}

function RecipeList(props: RecipeListProps & WrappedActionProps): React.Element<*> {
  return (
    <div className="RecipeList">
      <div className="RecipeList-Frame">
        { props.recipes.map((r: string, i: number) => {
          return (
            <Recipe
              recipe={r}
              isSelected={props.selected === r}
              onSelect={() => props.selectRecipe(r)}
              key={i}
            />
          )
          })}
      </div>
      { props.modal === 'ADD_RECIPE' ?
        <AddRecipeModal
          onSubmit={(recipe: string) => {
            props.changeModal('ADD_RECIPE', false)
            props.addRecipe(recipe)
            props.updateEntry("")
          }}
          onCancel={() => {
            props.changeModal('ADD_RECIPE', false)
            props.updateEntry("")
          }}
          onChange={props.updateEntry}
          value={props.entryValue}
        /> :
        <Button
          onClick={() => props.changeModal('ADD_RECIPE', true)}
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
