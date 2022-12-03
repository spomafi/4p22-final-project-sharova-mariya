import './FeedbackPage.css';
import logo from '../../assets/svg/Logo-large.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function FeedbackPage() {
   const [email, setEmail] = useState('');
   const [name, setName] = useState('');
   const [textarea, setTextarea] = useState('');

   const handleSubmit = (event) => {
    event.preventDefault();
    console.log({email, name, textarea});
   }

    return (
        <div>
            <div className='container-header'>
                <div className='logo_links'>
                    <div className='logo1'>
                        <img className='logo' src={logo} />
                    </div>
                    <Link to={'/'} className='link'>Home</Link>
                </div>
            </div>
            <div className='main'>
                <div className='container'>
                    <h1 className='main-form__h1'>LEAVE FEEDBACK</h1>
                    <form className='main-form' onSubmit={handleSubmit}>
                        <label className="main-form__name__label">NAME</label>
                        <input type="text" value={name} className="main-form__name" onChange={(event) => setName(event.target.value)} />
                        <label className="main-form__email__label">EMAIL</label>
                        <input type="email" value={email} className="main-form__email" onChange={(event) => setEmail(event.target.value)} />
                        <div className="gender__radio">
                            <legend className="gender">GENDER</legend>
                            <div className="gender__man">
                                <input className="input-man" type="radio" name="sex" id="sex-man" value="man" />
                                <label className="label-man" for="sex-man">MAN</label>
                            </div>
                            <div class="gender__women">
                                <input className="input-women" type="radio" name="sex" id="sex-woman" value="woman" />
                                <label className="label-women" for="sex-woman">WOMEN</label>
                            </div>
                        </div>
                        <div class="textarea-container">
                            <span className="textarea-text">FEEDBACK</span>
                            <textarea type='message'value={textarea} className="textarea" name="comments" id="textarea-comment" onChange={(event) => setTextarea(event.target.value)}></textarea>
                        </div>
                        <div className='upload-container'>
                            <label for="file" className="feedback__label">
                            <span className="feedback__text">UPLOAD FILE</span>
                            <input type="file"  id="file" className="feedback__file" />
                            </label>
                        </div>
                        <div class="checkbox-container">
                            <input type="checkbox" className="input-checkbox" id="checkbox-button" />
                            <label className="checkbox-text" for="checkbox-button">I agree to the processing of data</label>
                        </div>
                        <input type="submit" value='SEND' className="main-form__button"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedbackPage;