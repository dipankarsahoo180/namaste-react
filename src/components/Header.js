import { useState } from "react";
import logo from "../assets/logo.png"

const Header = () => {
    const [jsxButton,setJsxButton] = useState('Login')
    return (
        <>
            <div className="header">
                <div className="logo">
                  <img src={logo}></img>
                </div>
                
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Cart</li>
                        {(jsxButton == 'Login')?
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
