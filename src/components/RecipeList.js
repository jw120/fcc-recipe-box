/** @flow
 *
 * Main presentational component
 */

import React from 'react'
import { Button } from 'react-bootstrap'

import Recipe from './Recipe'
import RecipeModal from '../containers/RecipeModal'
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
            />)
        }
      </div>
      <Button onClick={() => openAddModal(props)} bsStyle='primary'>
        Add Recipe
      </Button>
      <RecipeModal
        show={props.modal !== null}
        title={props.modal === 'Edit_Recipe_Modal' ? 'Edit a recipe' : 'Add a new recipe'}
        save={props.addRecipe}
      />
    </div>
  )
}

export default RecipeList
