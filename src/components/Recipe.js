/** @flow
 *
 *  Component to render an individual recipe
 */

import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

import IngredientList from './IngredientList'
import './Recipe.css'

type RecipeProps = {
  recipe: string,
  ingredients: string[],
  isSelected: boolean,
  onSelect: () => void,
  onEdit: () => void,
  onDelete: () => void
}

function Recipe(props: RecipeProps): React.Element<*> {
  const colourClass = props.isSelected ? 'bg-primary' : 'bg-info' // Colour using Bootstrap theme colours
  return (
    <div className='Recipe'>
      <div
        className={ `Recipe-Name ${ colourClass }` }
        onClick={ props.onSelect }
      >
        { props.recipe }
      </div>
      { props.isSelected && <IngredientList ingredients={ props.ingredients } />}
      { props.isSelected &&
        <ButtonToolbar>
          <Button
            bsSize='small'
            onClick={ props.onEdit }
          >
            Edit Recipe
          </Button>
          <Button
            bsSize='small'
            onClick={ props.onDelete }
            bsStyle='danger'
          >
            Delete Recipe
          </Button>
        </ButtonToolbar>
      }
    </div>
  )
}

export default Recipe
