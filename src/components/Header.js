import { useState,useContext } from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [jsxButton,setJsxButton] = useState('Login');
    const data = useContext(UserContext);
    return (
        <>
            <div className="flex flex-wrap justify-between bg-gray-300 mb-2">
                <Link to='/'>
                    <div className="w-40">
                    <img src={logo}></img>
                    </div>
                </Link>    
                <div className="">
                    <ul className="flex flex-wrap justify-between p-4">
                        <li><Link className="p-2 text-lg" to=''>Home</Link></li>
                        <li><Link className="p-2 text-lg" to='about'>About us</Link></li>
                        <li><Link className="p-2 text-lg" to='contact-us'>Contact us</Link></li>
                        <li><Link className="p-2 text-lg" to='cart'>Cart</Link></li>
                        <li><Link className="p-2 text-lg" to='grocery'>Grocery</Link></li>
                        {
                            (jsxButton == 'Login')?
                            <li><button className="mx-2 rounded-md px-5 py-1 bg-blue-500 text-white" onClick={()=>setJsxButton('Logout')}>Login</button></li>
                            :
                            <li><button className="mx-2 rounded-md px-5 py-1 bg-blue-500 text-white" onClick={()=>setJsxButton('Login')}>Logout</button></li>
                        }
                        <li className="p-2 py-1 text-lg font-bold">{data?.loggedInUser}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
