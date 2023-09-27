import { useState } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Header = () => {
    const [jsxButton,setJsxButton] = useState('Login')
    return (
        <>
            <div className="header">
                <Link to='/'>
                    <div className="logo">
                    <img src={logo}></img>
                    </div>
                </Link>    
                <div className="nav-items">
                    <ul>
                        <li><Link className="link-class" to=''>Home</Link></li>
                        <li><Link className="link-class" to='about'>About us</Link></li>
                        <li><Link className="link-class" to='contact-us'>Contact us</Link></li>
                        <li><Link className="link-class" to='cart'>Cart</Link></li>
                        <li><Link className="link-class" to='grocery'>Grocery</Link></li>
                        {
                            (jsxButton == 'Login')?
                            <li><button className="log-in-out-btn" onClick={()=>setJsxButton('Logout')}>Login</button></li>
                            :
                            <li><button className="log-in-out-btn" onClick={()=>setJsxButton('Login')}>Logout</button></li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
