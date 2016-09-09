/** @flow
 *
 *
 */

import { connect } from 'react-redux'

import type { State } from '../reducers'
import RecipeList from '../components/RecipeList'
import * as actions from "../actions";

function mapStateToProps(state: State): State  {
  return state
}

const RecipeBox = connect(mapStateToProps, actions)(RecipeList)
export default RecipeBox
