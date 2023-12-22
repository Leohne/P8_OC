import { useState } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

function Dropdown ({title, contain}) {
    const responsive = useMediaQuery('(max-width: 425px)');
    const [click, setclick] = useState(false)
    const animation = () => {
        setclick((open) => !open )
      }
    return (
            <>
                <div className="dropdown_title">
                    <h4 className="dropdown_margin" >{title}</h4>
                    <i onClick={animation} className={`fa-solid fa-chevron-up fa-chevron ${click ? 'fa-rotate-by' : 'fa-rotate-0'} ${responsive ? 'fa-xs' : 'fa-xl'}`}></i>
                </div>
                    <div className={` dropdown_p--position ${click ? 'dropdown_open' : 'dropdown_close'}`}>
                        <div className='dropdown_p'>{contain}</div>
                    </div>
            </>
    )
}

export default Dropdown