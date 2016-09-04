/** @flow
 *
 *
 */

import React from 'react'

type RecipeListProps = {
  recipes: string[],
  selected: ?string,
  onSelect: (recipe: string) => void
}

function Recipe({ recipe, selected, onSelect }): React.Element<*> {
  return (
    <li onClick={() => onSelect(recipe)}>
      { recipe + (recipe === selected ? ' (Selected)' : '') }
    </li>
  )
}

function RecipeList(props: RecipeListProps): React.Element<*> {
  return (
    <ul>
      { props.recipes.map((r: string, i: number) => <Recipe recipe={r} selected={props.selected} onSelect={props.onSelect} key={i} />) }
    </ul>
  )
}

export default RecipeList
