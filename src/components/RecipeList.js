/** @flow
 *
 *
 */

import React from 'react'

import Recipe from './Recipe'

type RecipeListProps = {
  recipes: string[],
  selected: ?string,
  onSelect: (recipe: string) => void
}

function RecipeList(props: RecipeListProps): React.Element<*> {
  return (
    <ul>
      { props.recipes.map((r: string, i: number) => {
        return (
          <Recipe
            recipe={r}
            isSelected={props.selected === r}
            onSelect={() => props.onSelect(r)}
            key={i}
          />
        )
      })}
    </ul>
  )
}

export default RecipeList
