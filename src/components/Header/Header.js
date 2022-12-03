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
                <Link to='info' className='link'>Animals</Link>
                <Link to='contacts' className='link'>Contact Us</Link>
            </div>
           <div className='reg_serbas'>
                <div className='search_basket'>
                    <Link to="basket"><FaShoppingCart className='shop_button' /></Link>
                </div>
                <div className='reg'>
                    <Link to='login' className='login'>LOG IN</Link>
                    <Link to='auth' className='auth'>SIGN UP</Link>
                </div>
           </div>
        </div>
    )
}

export default Header;