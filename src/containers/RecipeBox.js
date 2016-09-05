/** @flow
 *
 *
 */

import { connect } from 'react-redux'

import type { State } from '../reducers'
import RecipeList from '../components/RecipeList'
// import { addRecipe, selectRecipe, changeModal } from '../actions'
import * as actions from "../actions";

function mapStateToProps(state: State)  {
  return {
    recipes: state.recipes,
    selected: state.selected,
    modal: state.modal
  }
}

// function mapDispatchToProps(dispatch)  {
//   return {
//     onSelect: (recipe: string) => {
//       dispatch(selectRecipe(recipe))
//     },
//     modalSet: (on: boolean) => {
//       dispatch(changeModal('ADD_RECIPE', on))
//     },
//     addRecipe: (recipe: string) => {
//       dispatch(addRecipe(recipe))
//     }
//   }
// }

// const RecipeBox = connect(mapStateToProps, mapDispatchToProps)(RecipeList)
const RecipeBox = connect(mapStateToProps, actions)(RecipeList)

export default RecipeBox
