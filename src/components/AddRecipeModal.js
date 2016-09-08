/** @flow
 *
 *
 */

import React from 'react'

import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import { suppressDefaultAndCall } from '../utils'

type AddRecipeModalProps = {
  onSubmit: (value: ?string) => void,
  onCancel: () => void,
  onChange: (value: ?string) => void,
  value: ?string
}

function AddRecipeModal(props: AddRecipeModalProps): React.Element<*> {
  return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={(e: Event) => suppressDefaultAndCall(e, () => props.onSubmit(props.value))}>
            <FormGroup>
              <ControlLabel>Enter the name of a new recipe</ControlLabel>
              <FormControl
                type="text"
                value={props.value || "" /* default to empty string if no value provided */}
                placeholder="Enter Recipe name"
                onChange={(e: Event) => {
                  if (e.target instanceof HTMLInputElement) {
                    props.onChange(e.target.value)
                  }
                }}
              />
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onCancel}>Cancel</Button>
          <Button onClick={() => props.onSubmit(props.value)} bsStyle="primary">Save</Button>
        </Modal.Footer>

      </Modal.Dialog>
  )
}

export default AddRecipeModal

/*
<Button onClick={props.onClose>Close</Button>
<Button onClick={props.onSave('Dummy') bsStyle="primary">Save changes</Button>

return (
  <div>
    <h2>Add Recipe Modal</h2>
    <Button onClick={props.onClose}>Close</Button>
  </div>
)
*/
