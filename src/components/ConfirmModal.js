/** @flow
 *
 * Componnent to show modal confirming delete
 *
 */

import React from 'react'
import { Button, Modal } from 'react-bootstrap'

type Props = {
  show: boolean,
  recipe: string,
  handleConfirm: () => void,
  handleCancel: () => void
}

function ConfirmModal(props: Props): React.Element<*> {
  return (
    <Modal
      className='ConfirmModal'
      show={ props.show }
      bsSize='small'
    >
      <Modal.Header>
        <Modal.Title>Delete '{ props.recipe }'?</Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button onClick={ props.handleCancel }>
          Cancel
        </Button>
        <Button onClick={ props.handleConfirm } bsStyle='danger'>
          Delete
        </Button>
      </Modal.Footer>

    </Modal>
  )
}

export default ConfirmModal
