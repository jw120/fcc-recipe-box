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
  onSelect: () => void
}

function Recipe({ recipe, ingredients, isSelected, onSelect }: RecipeProps): React.Element<*> {
  let colourClass = isSelected ? 'bg-primary' : 'bg-info' // Colour using Bootstrap theme colours
  return (
    <div className='Recipe'>
      <div className={'Recipe-Name ' + colourClass} onClick={() => onSelect(recipe)}>
        { recipe }
      </div>
      { isSelected && <IngredientList ingredients={ingredients} />}
      { isSelected &&
          <ButtonToolbar>
            <Button bsSize="small">
              Edit Recipe
            </Button>
            <Button bsSize="small" bsStyle="danger">
              Delete Recipe
            </Button>
          </ButtonToolbar>
      }
    </div>
  )
}

export default Recipe
