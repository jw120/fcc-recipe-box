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
  return (
    <div className="Recipe" onClick={() => onSelect(recipe)}>
      { recipe + (isSelected ? ' (Selected)' : '') }
    </div>
  )
}

export default Recipe
