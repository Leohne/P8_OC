import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';

function Caroussel({ annonce }) {
   
  const { id } = useParams() 
  const imgId = annonce.find((item) => item.id === id)
  const responsive = useMediaQuery('(max-width: 425px)');
  const alone = (imgId.pictures.length === 1)
  const [count, setcount] = useState(0)
  const Previous = () => {
    setcount((previousCount) => (previousCount - 1 + imgId.pictures.length) % imgId.pictures.length)
  }

  const Next = () => {
    setcount((nextCount) => (nextCount + 1) % imgId.pictures.length)
  }

  return (
    <>
      <div className='imgId_contain'>       
          <button onClick={Previous} className={`imgId_previous ${alone ? 'hidden' : ''}`}><i className={`fa-solid fa-chevron-left ${responsive ? 'fa-2xs' : 'fa-xl'}`}></i></button>    
          <img key={imgId.id} className='imgId_img' src={imgId.pictures[count]} alt='Photo de location' />
          <p className={`imgId_count ${alone ? 'hidden' : ''}`}> {count +1} / {imgId.pictures.length} </p>
          <button onClick={Next} className={`imgId_next ${alone ? 'hidden' : ''}`}><i className={`fa-solid fa-chevron-right ${responsive ? 'fa-2xs' : 'fa-xl'}`}></i></button>    
      </div>   
    </>
  );
}

Caroussel.propTypes = {
  annonce: PropTypes.array.isRequired,
};

export default Caroussel
