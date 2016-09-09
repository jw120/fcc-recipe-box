/** @flow
 *
 *
 */

import { connect } from 'react-redux'

import type { State } from '../reducers'
import RecipeList from '../components/RecipeList'
import * as actions from '../actions'

const RecipeBox = connect((state: State) => state, actions)(RecipeList)
export default RecipeBox
