import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function Thumb ({annonce}) {
    return <div className='thumb'>
          {annonce.map((item) => (          
              <div className='thumb_div'key={item.id}>
                <Link to={`/logement/${item.id}`} className='card_a'>
                  <img className='thumb_img' src={item.cover} alt="Cover" />
                  <div>
                    <p className='thumb_p'>{item.title}</p>
                  </div>
                </Link>              
              </div>
          ))}
    </div>
}

Thumb.propTypes = {
    annonce: PropTypes.array.isRequired,
  };

export default Thumb