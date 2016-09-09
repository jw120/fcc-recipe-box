// @flow

// Flow definition for react's devToolsExtension extension

import type { StoreEnhancer } from 'redux'

declare var devToolsExtension: (() => StoreEnhancer) | void
