/** @flow
 *
 *  Component to render a list of ingredient
 */

import React from 'react'

import Ingredient from './Ingredient'
import './IngredientList.css'

type IngredientProps = {
  ingredients: string[]
}

function IngredientList({ ingredients }: IngredientProps): React.Element<*> {
  return (
    <div className='Ingredient-List'>
      { ingredients.map((ingredient: string, i: number) =>
        <Ingredient
          ingredient={ ingredient }
          key={ i }
        />)
      }
    </div>
  )
}

export default IngredientList
