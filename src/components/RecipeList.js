/** @flow
 *
 * Main presentational component.
 */

import React from 'react'
import { Button } from 'react-bootstrap'

import Recipe from './Recipe'
import AddRecipeModal from './AddRecipeModal'
import type { ModalState } from '../reducers/modal'
import type { WrappedActionProps } from '../actions'

type RecipeListProps = {
  recipes: string[],
  selected: ?string,
  modal: ModalState,
}

function RecipeList(props: RecipeListProps & WrappedActionProps): React.Element<*> {
  return (
    <div>
      <ul>
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
      </ul>
      <Button onClick={() => props.changeModal('ADD_RECIPE', true)}>
        Add Recipe
      </Button>
      { props.modal === 'ADD_RECIPE' &&
        <AddRecipeModal
          onSave={props.addRecipe}
          onClose={() => props.changeModal('ADD_RECIPE', false)}
        /> }
    </div>
  )
}

export default RecipeList
