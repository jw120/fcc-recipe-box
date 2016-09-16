/** @flow
 *
 * Pack and unpack the recipes array into a string, normalizing to remove
 * leading/trailing whitespace and eliminating any empty strings. Also
 * capitalizes first non-whitespace letter when unpacking
 *
 */

export function capitalize(s: string): string {
  return s.substr(0, 1).toUpperCase() + s.substr(1)
}

export function pack(ingredients: string[]): string {
  return ingredients
    .map((s: string): string => s.trim(s))
    .filter((s: string): boolean => s.length > 0)
    .join(', ')
}

export function unpack(packedIngredients: string): string[] {
  return packedIngredients
    .split(',')
    .map((s: string): string => capitalize(s.trim()))
    .filter((s: string): boolean => s.length > 0)
}
