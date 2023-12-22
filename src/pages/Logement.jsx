import PropTypes from 'prop-types';
import Caroussel from '../component/Caroussel'
import InfoLogement from './InfoLogement';
import { Navigate, useParams } from 'react-router-dom';

function Logement({annonce}) {
 const {id} = useParams()
const infoId = annonce.find((item) => item.id === id)
if(!infoId) {
  return <Navigate to="/*" />
}
  return (
    <>
      <Caroussel annonce={annonce} /> 
      <InfoLogement annonce={annonce} />   
    </>
  );
}

Logement.propTypes = {
  annonce: PropTypes.array.isRequired,
};

export default Logement