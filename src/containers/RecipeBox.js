/** @flow
 *
 *
 */

import React from 'react'
import { connect } from 'react-redux'

import type { State } from '../reducers'
import RecipeList from '../components/RecipeList'
import * as actions from "../actions";

function mapStateToProps(state: State): State  {
  return state
}

// const connector: Connector<void, RecipeListProps> = connect(mapStateToProps, actions)
// let r: StatelessComponent<*> = RecipeList
const RecipeBox: (() => React.Element<*>) = connect(mapStateToProps, actions)(RecipeList)
export default RecipeBox
