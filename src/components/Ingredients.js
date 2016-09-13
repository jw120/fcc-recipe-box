/** @flow
 *
 *  Stateless component to render a recipe's ingredients and its edit buttons
 */

import React from 'react'
import { Panel, Button, ButtonToolbar } from 'react-bootstrap'

type IngredientProps = {
  ingredients: string[],
  onEdit: () => void,
  onDelete: () => void
}

function Ingredients(props: IngredientProps): React.Element<*> {
  return (
    <div>
      { props.ingredients.map((ingredient: string, i: number): React.Element<*> => {
        return (
          <Panel key={ i }>
            { ingredient }
          </Panel>
        )
      })
      }
      <ButtonToolbar className='top-padded'>
        <Button bsSize='small' onClick={ props.onEdit }>
          Edit Recipe
        </Button>
        <Button bsSize='small' onClick={ props.onDelete } bsStyle='danger'>
          Delete Recipe
        </Button>
      </ButtonToolbar>
    </div>
  )
}

export default Ingredients
