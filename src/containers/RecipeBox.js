/** @flow
 *
 *
 */

import { connect } from 'react-redux'

import type { State } from "../reducers"
import RecipeList from '../components/RecipeList'
import { selectRecipe } from '../actions'

function mapStateToProps(state: State)  {
  return {
    recipes: state.recipes,
    selected: state.selected
  }
}

function mapDispatchToProps(dispatch)  {
  return {
    onSelect: (recipe: string) => {
      dispatch(selectRecipe(recipe))
    }
  }
}

const RecipeBox = connect(mapStateToProps, mapDispatchToProps)(RecipeList)

export default RecipeBox
