/** @flow
 *
 *  Component to render an individual recipe
 */

import React from 'react'
import './Recipe.css'

type RecipeProps = {
  recipe: string,
  isSelected: boolean,
  onSelect: () => void
}

function Recipe({ recipe, isSelected, onSelect }: RecipeProps): React.Element<*> {
  let colourClass = isSelected ? 'bg-primary' : 'bg-info' // Colour using Bootstrap theme colours
  return (
    <div className={'Recipe bg ' + colourClass} onClick={() => onSelect(recipe)}>
      { recipe }
    </div>
  )
}

export default Recipe
