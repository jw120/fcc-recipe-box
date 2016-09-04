/** @flow
 *
 *
 */

import React from 'react'

type RecipeProps = {
  recipe: string,
  isSelected: boolean,
  onSelect: () => void
}

function Recipe({ recipe, isSelected, onSelect }: RecipeProps): React.Element<*> {
  return (
    <li onClick={() => onSelect(recipe)}>
      { recipe + (isSelected ? ' (Selected)' : '') }
    </li>
  )
}

export default Recipe
