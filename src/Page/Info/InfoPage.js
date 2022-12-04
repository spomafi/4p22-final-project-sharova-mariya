import { useEffect, useState } from 'react';
import './InfoPage.css';
import { useParams } from 'react-router-dom';
import panda from '../../assets/png/panda1.png'
import eagle  from '../../assets/png/eagle.png';
import gorilla from '../../assets/png/gorilla.png';
import crocodile from '../../assets/png/crocodile.png'
import elephant from '../../assets/png/elephant.png'
import lemur from '../../assets/png/lemur.png';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';

const images = { 
    panda,
    eagle,
    gorilla,
    crocodile,
    elephant,
    lemur,
};

function InfoPage() {
    const { name } = useParams();
    const [ animal, setAnimal ] = useState({});
    const [ openModal, setOpenModal ] = useState(false);

    useEffect(() => {
        fetch(`https://api.api-ninjas.com/v1/animals?name=${name}`, {
            headers: {
                'X-API-KEY': 'x1jboPuCv0TEJ3BrV8cboQ==OFmGvsLnGtFnGZqd'
            }
        })
        .then(response => response.json())
        .then(result => setAnimal(result[0] ?? {}));
    }, []);

    const handleClick = () => {
        setOpenModal(true);
    }

    return (
        <>
            <Header />
            <div className='info-container'>
                <img src={images[name]} className='info-img'></img>
                <h2 className='info-h2'>{ animal?.name }</h2>
                <p className='info-p'>{ animal?.locations }</p>
                <button className='buttons' onClick={handleClick}>BUY TICKETS</button>
            </div>
            <Modal 
            isOpened={openModal} 
            onModalClose={() => setOpenModal(false)} />
        </>
    )
}

export default InfoPage; 