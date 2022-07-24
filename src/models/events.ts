type BasicInfo = {
    id: string
    name: string
}

type SelectionPool = BasicInfo & {
    price: number
}

export type SelectionPoolState = SelectionPool & {
    eventId: string
    marketId: string
}

type MarketPool = BasicInfo & {
    selections: SelectionPool[]
}

export type EventPool = BasicInfo & {
    markets: MarketPool[]
}
