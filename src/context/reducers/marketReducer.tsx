import { IAction } from '../actions'
import { initialState } from '../MarketProvider'
import { ActionType } from '../actions/actionTypes'
import { IState } from '../models/states'

const marketReducer = (
    state: IState = initialState,
    action: IAction
): IState => {
    switch (action.type) {
        case ActionType.SET_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case ActionType.ADD_SELECTION:
            return {
                ...state,
                selectedList: [...state.selectedList, action.payload],
            }
        case ActionType.REMOVE_SELECTION:
            return {
                ...state,
                selectedList: state.selectedList.filter(
                    (market) => market.id !== action.payload
                ),
            }
        default:
            return state
    }
}

export default marketReducer
