import './Card.css'
import { useEffect, useState } from 'react';
import elephant from '../../assets/png/elephant.png'
import Modal from '../Modal/Modal';
import {useNavigate} from 'react-router-dom';

function Card5({ onClick = () => {}, filter = '', search = '' }) {
  const [animal, setAnimal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      fetch('https://api.api-ninjas.com/v1/animals?name=elephant', {
          headers: {
              'X-API-KEY': 'x1jboPuCv0TEJ3BrV8cboQ==OFmGvsLnGtFnGZqd'
          }
        })
        .then((response) => response.json())
          .then((result) => {
          setAnimal(result[0] ?? {})
      })
    }, [])

    const [modal, setModal] = useState({
        modal:false,
    })

    const handleClick = () => {
        navigate('info/elephant');
    }

    return (
        ((!filter || filter === animal?.name[0]) && (!search || animal?.name?.includes(search))) ?
        <div className='Card' onClick={handleClick}>
        <Modal 
            isOpened={modal.modal}
            onModalClose={() => setModal({...modal, modal: false})}/>
       <img className='Card-img' src={ elephant }/>
       <hr />
       <div className='Card-container'>
        <div className='h2-p'>
                    <h2 className='Card-title common-header'>{ animal?.name }</h2>
                    <p className="Card-description">{ animal?.locations }</p>
            <button className='button' onClick={(e) => {
                e.stopPropagation();
                setModal({
                    ...modal, modal:true
                })
            }}>BUY TICKETS</button>
           </div>
       </div>
 </div> : <></>
    )
}

export default Card5;