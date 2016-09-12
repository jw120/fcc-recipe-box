/* eslint-disable flowtype/no-weak-types*/ // @flow

// Flow definition for react's devToolsExtension extension

// import type { StoreEnhancer } from 'redux'
type StoreEnhancer = any

declare var devToolsExtension: (() => StoreEnhancer) | void
