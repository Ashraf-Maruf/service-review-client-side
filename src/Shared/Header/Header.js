import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaUser } from "react-icons/fa";
import { Image } from 'react-bootstrap';
import {
    HiBars3BottomRight,
    HiOutlineXMark,
} from "react-icons/hi2";
import { Link } from 'react-router-dom';
import './Header.css'
import { FaGavel } from 'react-icons/fa';
const Header = () => {
    const [open, setOpen] = useState(false)
    const { users, userSignOut } = useContext(AuthContext)

    const handleUserSignOutAdd = () => {
        userSignOut()
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='navbar-area'>
            <div className='container'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <Link className="navbar-brand text-white fw-bold fs-2" to='/'><span className='fs-2 me-2'><FaGavel /></span>Lawyer Services</Link>
                    </div>
                    <div className='text-center' onClick={() => setOpen(!open)}>
                        {open ?
                            <span className='open-nav'><HiOutlineXMark /></span> : <span className='close-nav'><HiBars3BottomRight /></span>
                        }
                    </div>
                </div>
                <nav className={`navbar position-absolute ${open ? 'activeOpen' : 'activeOff'}`}>
                    <div className='pt-2 mb-0 ps-3' data-tip={users?.displayName}>
                        {users?.photoURL ?

                            <Image
                                style={{ height: '100px'}}
                                rounded
                                src={users?.photoURL}>
                            </Image>
                            : <FaUser></FaUser>
                        }
                    </div>
                    <ul className='navbar-nav m-auto' onClick={() => setOpen(!open)}>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/services'>Services</Link>
                        <Link className='nav-link' to='/blog'>Blog</Link>
                        <>
                            {
                                users?.uid ?
                                    <>
                                        <Link className="nav-link" to='/addservices'>Add Services</Link>

                                        <Link className="nav-link" to='/myreview' >My Review</Link>

                                        <Link className="nav-link" to='/' onClick={handleUserSignOutAdd}>Sign out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className="nav-link" to='/login'>Login</Link >
                                    </>
                            }
                        </>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;