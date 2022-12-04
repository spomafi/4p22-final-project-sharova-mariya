import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from "react-icons/fa";
import logo from '../../assets/svg/Logo-large.svg';

function Header() {
    return (
        <div className='container-header'>
            <div className='logo_links'>
                <div className='logo1'>
                    <img className='logo' src={logo} />
                </div>
                <Link to='/' className='link'>Home</Link>
                <Link className='link'>Animals</Link>
                <Link className='link'>Contact Us</Link>
            </div>
           <div className='reg_serbas'>
                <div className='reg'>
                    <Link className='link'>LOG IN</Link>
                    <Link className='link'>SIGN UP</Link>
                </div>
                <Link to="basket"><FaShoppingCart className='shop_button' /></Link>
           </div>
        </div>
    )
}

export default Header;