import './Footer.css';
import logo1 from '../../assets/svg/Logo-large.svg';
import logo2 from '../../assets/png/1280px-IU_logo 1.png'

function Footer() {
    return (
        <div className='container-footer'>
            <img src={logo1} className='logo-s'/>
            <p className='mariisav'>MARIISAV, 2022</p>
            <img src={logo2} className='logo-ui'/>
        </div>
    )
}

export default Footer;