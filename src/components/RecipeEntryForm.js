/** @flow
 *
 *
 */

import React from 'react'

import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

type RecipeEntryFormProps = {
  value: string,
  onChange: (newValue: string) => void,
  onSubmit: () => void
}

function suppressDefaultAndSubmit(e: Event, onSubmit: () => void) {
  e.preventDefault()
  onSubmit()
}

function RecipeEntryForm(props: RecipeEntryFormProps): React.Element<*> {
  return (
    <form onSubmit={(e: Event) => suppressDefaultAndSubmit(e, props.onSubmit)}>
      <FormGroup>
        <ControlLabel>Enter the name of a new recipe</ControlLabel>
        <FormControl
          type="text"
          value={props.value}
          placeholder="Enter Recipe name"
          onChange={(e: Event) => {
            if (e.target instanceof HTMLInputElement) {
              props.onChange(e.target.value)
            }
          }}
        />
      </FormGroup>
    </form>
  )
}

export default RecipeEntryForm
