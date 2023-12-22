import LogoFooter from '../assets/Logo_Footer.svg'

function Footer() {
    return (
        <>
        <footer>
            <div className='footer_div'>
            <img className='imgFooter' src={LogoFooter} alt="LogoFooter" />
            <p className='pFooter'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
        </>
    )
}

export default Footer