import { NavLink } from 'react-router-dom'
import KasaLogo from '../assets/Logo_Header.svg'
//import viteLogo from '/vite.svg'
function Header() {

    return (
        <div className='header'>  
            <img src={KasaLogo} alt="Kasa Logo Header"/>
            <nav className='header_nav'>
                <NavLink to="/" className='header_a '>Accueil</NavLink>
                <NavLink to="/about" className='header_a'>A Propos</NavLink>
            </nav>
        </div>
    )
}

export default Header