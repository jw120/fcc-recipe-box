/** @flow
 *
 *  Component to render an ingredient
 */

import React from 'react'
import './Ingredient.css'

type IngredientProps = {
  ingredient: string
}

function Ingredient({ ingredient }: IngredientProps): React.Element<*> {
  return (
    <div className={'Ingredient bg-info'}>
      { ingredient }
    </div>
  )
}

export default Ingredient
