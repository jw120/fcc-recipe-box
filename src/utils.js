/** @flow
 *
 *
 */

export function suppressDefaultAndCall(e: Event, callback: () => void) {
  e.preventDefault()
  callback()
}
