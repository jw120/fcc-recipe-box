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

function RecipeList(props: State & WrappedActionProps): React.Element<*> {
  return (
    <div className='RecipeList'>
      <div className='RecipeList-Frame'>
        { props.recipes.map((r: string, i: number) =>
            <Recipe recipe={r} key={i} isSelected={props.selection === r} onSelect={() => props.selectRecipe(r)} />)
        }
      </div>
      <Button onClick={() => props.setModal('Edit_Recipe_Modal', true)} bsStyle='primary'>
        Add Recipe
      </Button>
      <EditRecipeModal show={props.modal === 'Edit_Recipe_Modal'} title='Add Recipe' save={props.addRecipe}/>
    </div>
  )
}

export default RecipeList
