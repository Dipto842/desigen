import { useState } from 'react';
import logo  from './Logo.png'
import './Nav.css'
const Nav = () => {
      const [active, setActive] = useState(false);
    return (
        <div className='syne'>
            <div className='flex'>
                <img className='logoImg' src={logo} alt="" />
                <ul className='nav'>
                    <li className='button'>Home</li>
                    <li className=''>About</li>
                    <li className=''>Projects</li>
                    <li className=''>Contact</li>
                </ul>
                <div>
                    <button className='btn syne'>HIRE ME</button>
                </div>
            </div>
        </div>
    );
};

export default Nav;