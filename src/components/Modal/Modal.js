import { useDispatch, useSelector } from 'react-redux';
import './Modal.css';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basket/basketSlice';

function Modal(props) {
    const basket = useSelector((state) => state.basket);

    const [counts, setCounts] = useState(basket);

    const dispatch = useDispatch();

    const handleIncrement = (name) => {
        setCounts(prev => ({
            ...prev,
            [name]: prev[name] + 1,
        }))
    };

    const handleDecrement = name => {
        setCounts(prev => ({
            ...prev,
            [name]: prev[name] === 0 ? prev[name] : prev[name] - 1
        }))
    }

    const handleAddToBasket = () => {
        dispatch(addToBasket({...counts}));
        props.onModalClose();
    }
    
    return (
        <>{props.isOpened && <div className="modal__background"/>}
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className='modal__body'>
                <div className='modal__close' onClick={props.onModalClose}>×</div>
                <h1 className='tickets'>Buy Tickets</h1>
                <hr />
                <div>
                    <div>
                        <p className='sent'>Adult tickets 15$</p>
                        <p className='modal-text'>Who would you like to go to?</p>
                        <div className='spisok1'>
                            <div className='spisok'>
                                <p className='modal-animal'>Pandas</p>
                                <button onClick={() => handleIncrement('panda')} className='button-plus'>+</button>
                                { counts.panda }
                                <button onClick={() => handleDecrement('panda')} className='button-minus'>-</button>
                            </div>
                            <div className='spisok'>
                                <p className='modal-animal'>Eaglea</p>
                                <button onClick={() => handleIncrement('eagle')} className='button-plus'>+</button>
                                { counts.eagle }
                                <button onClick={() => handleDecrement('eagle')} className='button-minus'>-</button>
                            </div>
                            <div className='spisok'>
                                <p className='modal-animal'>Gorillas</p>
                                <button onClick={() => handleIncrement('gorilla')} className='button-plus'>+</button>
                                { counts.gorilla }
                                <button onClick={() => handleDecrement('gorilla')} className='button-minus'>-</button>
                            </div>
                            <div className='spisok'>
                                <p className='modal-animal'>Crocodiles</p>
                                <button onClick={() => handleIncrement('crocodile')} className='button-plus'>+</button>
                                { counts.crocodile }
                                <button onClick={() => handleDecrement('crocodile')} className='button-minus'>-</button>
                            </div>
                            <div className='spisok'>
                                <p className='modal-animal'>Elephants</p>
                                <button onClick={() => handleIncrement('elephant')} className='button-plus'>+</button>
                                { counts.elephant }
                                <button onClick={() => handleDecrement('elephant')} className='button-minus'>-</button>
                            </div>
                            <div className='spisok'>
                                <p className='modal-animal'>Lemurs</p>
                                <button onClick={() => handleIncrement('lemur')} className='button-plus'>+</button>
                                { counts.lemur }
                                <button onClick={() => handleDecrement('lemur')} className='button-minus'>-</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleAddToBasket} className='button-addbasket'>ADD TO BASKET</button>
                </div>
            </div>
        </div></>
    )
}

export default Modal;