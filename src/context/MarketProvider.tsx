import { useReducer } from 'react'
import MarketContext from './MarketContext'
import { IState } from './models/states'
import marketReducer from './reducers/marketReducer'

type MarketProviderType = {
    children: JSX.Element | JSX.Element[]
}

export const initialState: IState = {
    data: [],
    selectedList: [],
}

const MarketProvider = ({ children }: MarketProviderType) => {
    const [state, dispatch] = useReducer(marketReducer, initialState)
    return (
        <MarketContext.Provider value={{ state, dispatch }}>
            {children}
        </MarketContext.Provider>
    )
}

export default MarketProvider
