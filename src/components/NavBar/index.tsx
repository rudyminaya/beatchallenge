import SideBar from '../SideBar'
import './styles.scss'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className="navbar">
            <div className="navBar__bar"></div>
            <div className="navBar__sideBar">
                <SideBar />
            </div>
        </nav>
    )
}

export default NavBar
