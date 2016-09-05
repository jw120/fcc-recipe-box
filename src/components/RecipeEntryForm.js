/** @flow
 *
 *
 */

import React from 'react'

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

type RecipeEntryFormProps = {
  value: string,
  onChange: (newValue: string) => void
}

function RecipeEntryForm(props: RecipeEntryFormProps): React.Element<*> {
  return (
    <form>
      <FormGroup>
        <ControlLabel>Enter the name of a new recipe</ControlLabel>
        <FormControl
          type="text"
          value={props.value}
          placeholder="Enter Recipe name"
          onChange={(e) => props.onChange(e.target.value)}
        />
      </FormGroup>
    </form>
  )
}

export default RecipeEntryForm
