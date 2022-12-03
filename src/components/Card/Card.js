import Card1 from '../../components/Card/Card1';
import Card2 from '../../components/Card/Card2';
import Card3 from '../../components/Card/Card3';
import Card4 from '../../components/Card/Card4';
import Card5 from '../../components/Card/Card5';
import Card6 from '../../components/Card/Card6';
import './Card.css';
import { useState } from 'react';

function Card() {
    const [ filter, setFilter ] = useState('');
    const [ search, setSearch] = useState('');

    return (
        <>
            <input type='text' placeholder='Search...' className='search' value={search} onInput={(e) => setSearch(e.target.value)}></input>

            <select className='select' onChange={(event) => setFilter(event.target.value)}>
            <option value="">Выбери букву</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="F">F</option>
            <option value="G">G</option>
            </select>
            <div className='cards'>
                <Card1 filter={filter} search={search} />
                <Card2 filter={filter} search={search} />
                <Card3 filter={filter} search={search} />
                <Card4 filter={filter} search={search} />
                <Card5 filter={filter} search={search} />
                <Card6 filter={filter} search={search} />
            </div>
        </>
    )
}

export default Card;