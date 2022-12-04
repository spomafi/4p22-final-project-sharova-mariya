import './Card.css'
import { useEffect, useState } from 'react';
import panda from '../../assets/png/panda1.png'
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';


function Card1({ filter = '', search = '' }) {
    const [animal, setAnimal] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/animals?name=panda', {
            headers: {
                'X-API-KEY': 'x1jboPuCv0TEJ3BrV8cboQ==OFmGvsLnGtFnGZqd'
            }
          })
          .then((response) => response.json())
          .then((result) => {
            setAnimal(result[0] ?? {})
        })
      }, []);

      const [modal, setModal] = useState({
        modal:false,
    });

    const handleClick = () => {
        navigate('/info/panda');
    };

    return (
        ((!filter || filter === animal?.name[0]) && (!search || animal?.name?.includes(search))) ? 
            <><div className='Card' onClick={handleClick}>
            <img className='Card-img' src={ panda }/>
            <hr />
            <div className='Card-container'>
                <div className='h2-p'>
                    <h2 className='Card-title common-header'>{ animal?.name }</h2>
                    <p className="Card-description">{ animal?.locations }</p>
                    <button className='button' onClick={(e) => {e.stopPropagation(); setModal({
                        ...modal, modal:true
                    })}}>BUY TICKETS</button>
                </div>
            </div>
        </div>
        <Modal 
        isOpened={modal.modal}
        onModalClose={() => setModal({...modal, modal: false})}
        /> </>: <></>
    )
}

export default Card1;