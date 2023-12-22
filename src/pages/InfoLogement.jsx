import PropTypes from 'prop-types';
import {  useParams } from 'react-router-dom'
import { useMediaQuery } from '@react-hook/media-query';
import Dropdown from '../component/Dropdown';
import Tag from '../component/Tag';

function InfoLogement ({annonce}) {

    
    const {id} = useParams()
    const infoId = annonce.find((item) => item.id === id)

    const responsive = useMediaQuery('(max-width: 425px)');
    const star = Number(infoId.rating)
    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        const starClass = index < star ? 'star--Orange' : 'star--Grey';
        return <i key={index} className={`fa-solid fa-star ${starClass} ${responsive ? 'fa-xs' : 'fa-xl'} `}></i>;
      });

    const Equip = infoId.equipments.map((equipment, index) => (
        <p key={index} className='onglet_info--contain'>{equipment}</p>
        )) 
      
    return (
        <>
        <div className='infoCard_contain'>
            <div className='infoCard_contain--size'>
                <h2>{infoId.title}</h2>
                <p>{infoId.location}</p>
                <Tag annonce={annonce}/>     
            </div>
            <div className='infoCard_ProfilStar'>
                <div className='infoCard_PSposition'>
                    <p className='infoCard_name'>{infoId.host.name}</p>
                    <img className='infoCard_picture' src={infoId.host.picture} alt='Photo de profil'/>
                </div>
                    <div className='infoCard_star'>{ratingStars}</div>
            </div>
        </div>
        <div className='lc_contain' >
            <div className='dropdown_infoLogement'>
                <Dropdown title="Description" contain={infoId.description} />
            </div>
            <div className='dropdown_infoLogement'>
                <Dropdown title="Equipements" contain={Equip} />
            </div>
        </div>
        </> 
    )
}

InfoLogement.propTypes = {
    annonce: PropTypes.array.isRequired,
  };

export default InfoLogement