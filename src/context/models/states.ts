import { EventPool, SelectionPoolState } from '../../models/events'

export type IState = {
    data: EventPool[]
    selectedList: SelectionPoolState[]
}
