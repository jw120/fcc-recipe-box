// @flow

import type { StoreEnhancer } from 'redux'

declare var window: {
  devToolsExtension: () => StoreEnhancer<*, *>
}
