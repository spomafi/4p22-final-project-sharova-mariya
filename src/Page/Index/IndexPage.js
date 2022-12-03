import './IndexPage.css';
import Panda from '../../assets/png/Panda.png'
import bin from '../../assets/svg/icons8-binoculars.svg';
import dog from '../../assets/svg/icons8-dog-paw-print.svg';
import trust from '../../assets/svg/icons8-trust.svg';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import two from '../../assets/png/Frame 1367.png';
import donate from '../../assets/png/icons8-donate.png';
import trustTwo from '../../assets/png/icons8-trust.png';
import monkey from '../../assets/png/icons8-monkey.png';
import adam from '../../assets/png/adam.png';
import chris from '../../assets/png/chris.png';
import amely from '../../assets/png/amely.png';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';

function IndexPage() {
    const [modal, setModal] = useState({
        modal:false,
    })

    const [inputValue, setInputValue] = useState('');
    const [ filter1, setFilter1 ] = useState('');

    return (
        <main className="container1">
            <Modal 
                isOpened={modal.modal}
                onModalClose={() => setModal({...modal, modal: false})}
            />
            <Header />
            <section className='Buy'>
                <div className='h1_button'>
                    <h1 className='h'>Watch your favorite <br></br> animals</h1>
                    <p className='p'>Observe different animals. Help vulunteers to take a good care of animals, <br></br>donate to your favorite ones.</p>
                    <button className='buytickets' onClick={() => setModal({
                        ...modal, modal:true
                    })}>
                        BUY TICKETS
                    </button>
                </div>
                <div className='img'>
                <img src={Panda} alt='panda' className='pandaimg' />
                </div>
            </section>
            <section className='works' >
                <h2 className='howwork'>HOW IT WORKS</h2>
                <div className='icons'>
                    <div className='card-work-1'>
                        <img src={bin} className='img-work-1' />
                        <p className='text-icons'>Keep an eye on your favourite animals online</p>
                    </div>
                    <div className='card-work'>
                        <img src={dog} className='img-work-2' />
                        <p className='text-icons'>Become a part of the communtity</p>
                    </div>
                    <div className='card-work'>
                        <img src={trust} className='img-work-3' />
                        <p className='text-icons'>Support animals with the donations</p>
                    </div>
                </div>
                <div className='workspanda'></div> 
            </section>
            <section>
                <div className='feed-h2'>
                <h2 className='h2-pets'>PETS IN ZOO</h2>
                </div>
                <Card />
            </section>
            <section>
                <div className='pay'>
                    <div className='h2-pay'>
                        <h2 className='pay-text'>PAY AND FEED</h2>
                        <button className='donate'>DONATE TO VOLUNTEERS</button>
                    </div>
                    <div className='you-donate-3'>
                        <div className='container-pay'>
                            <img src={donate} className='white1'></img>
                            <p className='text-pay'>You donate to your favourite animals</p>
                        </div>
                        <img src={two} className='arrow'></img>
                        <div className='container-pay'>
                            <img src={trustTwo} className='white2'></img>
                            <p className='text-pay'>Zoo Keepers feed animals with their favourite food</p>
                        </div>
                        <img src={two} className='arrow'></img>
                        <div className='container-pay'>
                            <img src={monkey} className='white3'></img>
                            <p className='text-pay'>Animals are healthy and happy</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='sect'>
                    <div className='test-text'>
                        <h2 className='h2-text'>TESTIMONIALS</h2>
                        <Link to='feed' className='feed'>LEAVE FEEDBACK</Link>
                    </div>
                    <div className='comments'>
                        <div className='comment-adam'>
                            <div>
                                <p className='december'>20 Decepmer 2020</p>
                                <p className='awesome'>Awesome place to observe my favourite aligators at Florida, the quality of the video is great.</p>
                            </div>
                            <div className='adam-photo'>
                                <img src={adam} className='photo'></img>
                                <p className='name-text'>Adam, Spain</p>
                            </div>
                        </div>
                        <div className='comment-chris'>
                            <div>
                                <p className='december'>20 Decepmer 2020</p>
                                <p className='awesome'>Awesome place to observe my favourite aligators at Florida, the quality of the video is great.</p>
                            </div>
                            <div className='chris-photo'>
                                <img src={chris} className='photo'></img>
                                <p className='name-text'>Chris, Australia</p>
                            </div>
                        </div>
                        <div className='comment-amely'>
                            <div>
                                <p className='december'>20 Decepmer 2020</p>
                                <p className='awesome'>Awesome place to observe my favourite aligators at Florida, the quality of the video is great.</p>
                            </div>
                            <div className='amely-photo'>
                                <img src={amely} className='photo'></img>
                                <p className='name-text'>Amely, USA</p>
                            </div>
                        </div>
                    </div>
            </section>
            <Footer />
        </main>
    )
}

export default IndexPage;