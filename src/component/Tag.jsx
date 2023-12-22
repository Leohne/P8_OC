import { useParams } from "react-router-dom"
import PropTypes from 'prop-types';


function Tag({ annonce }) {
    const { id } = useParams();
    const infoId = annonce.find((item) => item.id === id);
  
    return (
      <div className='tag_contain'>
        {infoId.tags.map((tag, index) => (
          <div key={index} className='tag'>
            {tag}
          </div>
        ))}
      </div>
    );
  }
  
  Tag.propTypes = {
    annonce: PropTypes.array.isRequired,
  };
  export default Tag;
  