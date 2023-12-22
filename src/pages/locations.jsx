import PropTypes from 'prop-types';
import bannerKasa from '../assets/BannerKasa.svg'
import Thumb from '../component/Thumb';

function Locations({annonce}) {

  return (
    <>
      <div className='banner_div'>
        <img className='banner' src={bannerKasa} alt="Bannière" />
        <p className='banner_p'>Chez vous, partout et ailleurs</p>
      </div>
      <div className='location_div'>
        <Thumb annonce={annonce}/>
      </div>
    </>
  );
}

Locations.propTypes = {
  annonce: PropTypes.array.isRequired,
};

export default Locations
