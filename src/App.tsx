import { useContext, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import MarketContext from './context/MarketContext'
import { ActionType } from './context/actions/actionTypes'
import updateData from './utils/updateData'

const App = () => {
    const context = useContext(MarketContext)
    const actualizar = async () => {
        let data = await updateData()
        context.dispatch({ type: ActionType.SET_DATA, payload: data })
    }
    useEffect(() => {
        actualizar()
    })
    return (
        <>
            {/* Se inserta el navBar en este nivel porque cumple una función
            específica en esta pantalla y no se ha determinado que cumpla con la
            misma función en el resto de las pantallas */}
            <NavBar />
        </>
    )
}

export default App
