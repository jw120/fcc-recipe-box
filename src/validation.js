/** @flow
 *
 * Function to validate recipe input during form entry
 */

export type Validation = {
 result: 'success' | 'warning' | 'error', // react-bootstrap validation codes
 message?: string // message to display to user (if any)
}

/** Helper function to compare two strings case-insensitively and ignoring leading and trailing whitespace */
function isMatch(a: string, b: string): boolean {
  return a.trim().toLowerCase() === b.trim().toLowerCase()
}

/** Returns warning if recipe contains no non-whitespace, error if matches the blacklist (unless also matches whiteValue) */
export function validateRecipe(recipeEntry: string, blackList: Iterator<string>, whiteValue: string | null): Validation {
  if (!recipeEntry.trim()) {
    return { result: 'warning' }
  }
  if (whiteValue && isMatch(recipeEntry, whiteValue)) {
    return { result: 'success' }
  }
  for (const b of blackList) {
    if (isMatch(b, recipeEntry)) {
      return { result: 'error', message: 'A recipe with that name already exists' }
    }
  }
  return { result: 'success' }
}
