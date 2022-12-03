import './BasketPage.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import panda from '../../assets/png/panda1.png';
import eagle from '../../assets/png/eagle.png';
import gorilla from '../../assets/png/gorilla.png';
import crocodile from '../../assets/png/crocodile.png';
import elephant from '../../assets/png/elephant.png';
import lemur from '../../assets/png/lemur.png';
import { removeFromBasket } from '../../store/basket/basketSlice';

const animalsNames = ['panda', 'eagle', 'gorilla', 'crocodile', 'elephant', 'lemur'];
const images = {
    panda,
    eagle,
    gorilla,
    crocodile,
    elephant,
    lemur,
};

function BasketPage() {
    const dispatch = useDispatch();
    const [animals, setAnimals] = useState(null);
    const basket = useSelector(store => store.basket);

    useEffect(() => {
        Promise.all(animalsNames.map(async(animal) => {
            const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
                headers: {
                    'X-API-KEY': 'x1jboPuCv0TEJ3BrV8cboQ==OFmGvsLnGtFnGZqd'
                }
            });
            const result = await response.json();
            return { ...result[0], localName: animal };
        }))
        .then(result => setAnimals(result));
    }, []);

    const handleRemove = (name) => {
        dispatch(removeFromBasket(name));
    }

    return (
        <div>
            {animals?.map(animal => {
                return (
                    basket[animal.localName] ? <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={images[animal.localName]}/>
                    <span>{animal.name}</span>
                    <span>{animal.locations}</span>
                    <span>{basket[animal.localName]}</span>
                    <button onClick={() => handleRemove(animal.localName)}>Remove from basket</button>
                </div> : <></>
                )
            })}
        </div>
    )
}

export default BasketPage;