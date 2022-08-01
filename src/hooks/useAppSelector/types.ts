import type { TStoreState } from 'typescript/redux.types'

import type { TypedUseSelectorHook } from 'react-redux'

type TUseAppSelector = TypedUseSelectorHook<TStoreState>

export type { TUseAppSelector }
