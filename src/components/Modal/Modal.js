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
                        <p>Adult tickets 15$</p>
                        <p>Who would you like to go to?</p>
                        <div className='spisok1'>
                            <div className='spisok'>
                                <p>Pandas</p>
                                <button onClick={() => handleIncrement('panda')}>+</button>
                                { counts.panda }
                                <button onClick={() => handleDecrement('panda')}>-</button>
                            </div>
                            <div className='spisok'>
                                <p>Eaglea</p>
                                <button onClick={() => handleIncrement('eagle')}>+</button>
                                { counts.eagle }
                                <button onClick={() => handleDecrement('eagle')}>-</button>
                            </div>
                            <div className='spisok'>
                                <p>Gorillas</p>
                                <button onClick={() => handleIncrement('gorilla')}>+</button>
                                { counts.gorilla }
                                <button onClick={() => handleDecrement('gorilla')}>-</button>
                            </div>
                            <div className='spisok'>
                                <p>Crocodiles</p>
                                <button onClick={() => handleIncrement('crocodile')}>+</button>
                                { counts.crocodile }
                                <button onClick={() => handleDecrement('crocodile')}>-</button>
                            </div>
                            <div className='spisok'>
                                <p>Elephants</p>
                                <button onClick={() => handleIncrement('elephant')}>+</button>
                                { counts.elephant }
                                <button onClick={() => handleDecrement('elephant')}>-</button>
                            </div>
                            <div className='spisok'>
                                <p>Lemurs</p>
                                <button onClick={() => handleIncrement('lemur')}>+</button>
                                { counts.lemur }
                                <button onClick={() => handleDecrement('lemur')}>-</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleAddToBasket}>ADD TO BASKET</button>
                </div>
            </div>
        </div></>
    )
}

export default Modal;