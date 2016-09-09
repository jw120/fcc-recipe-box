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
            />)
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
