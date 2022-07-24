import { EventPool } from '../models/events'

const updateData = async () => {
    let data: EventPool[] = await fetch(
        'http://www.mocky.io/v2/59f08692310000b4130e9f71'
    )
        .then((res) => res.json())

        .catch((e) => [])
    return data
}

export default updateData
