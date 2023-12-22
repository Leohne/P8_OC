import { Link } from 'react-router-dom'

function Erreur404() {
    return(
        <>
            <div className='div_erreur'>
                <h1 className='h1_erreur'>404</h1>
                <p className='p_erreur'>Oups! La page que vous demandez n existe pas.</p>
                <Link to="/" className='link_erreur'>Retourner sur la page d acceuil</Link>
            </div>
        </>
    )
}

export default Erreur404