/** @flow
 *
 * Pack and unpack the recipes array into a string, normalizing to remove
 * leading/trailing whitespace and eliminating any empty strings
 *
 */

 export function pack(ingredients: string[]): string {
   return ingredients
    .map((s: string): string => s.trim(s))
    .filter((s: string): boolean => s.length > 0)
    .join(',')
 }

 export function unpack(packedIngredients: string): string[] {
   return packedIngredients
    .split(',')
    .map((s: string): string => s.trim(s))
    .filter((s: string): boolean => s.length > 0)
 }
