/** @flow
 *
 *
 */

import React from 'react'

import { Button /* , Modal */ } from 'react-bootstrap'

type AddRecipeModalProps = {
  onSave: (recipe: string) => void,
  onClose: () => void
}

function AddRecipeModal(props: AddRecipeModalProps): React.Element<*> {
  return (
    <div>
      <h2>Add Recipe Modal</h2>
      <Button onClick={props.onClose}>Close</Button>
    </div>
  )

/*
  return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          One fine body...
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onClose}>Close</Button>
          <Button onClick={props.onSave('Dummy')}bsStyle="primary">Save changes</Button>
        </Modal.Footer>

      </Modal.Dialog>
  )
*/
}

export default AddRecipeModal
