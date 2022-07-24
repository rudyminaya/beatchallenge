import { createContext } from 'react'
import { IAction } from './actions'
import { IState } from './models/states'
import { initialState } from './MarketProvider'

type IContext = {
    state: IState
    dispatch: React.Dispatch<IAction>
}

const MarketContext = createContext<IContext>({
    state: initialState,
    dispatch: () => null,
})

export default MarketContext
