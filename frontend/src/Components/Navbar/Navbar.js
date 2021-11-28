import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/actions/Users/useraction';


const Navbar = props => {
    const state = useSelector(state => state.userDetails)
    const history = useHistory(); //bcz Navbar is outside the switch case in App.js, so we cann't have it history as props
    const { userInfo} = state;
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logoutUser());
        history.push('/login');
    }

    return (
        <header>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <Link className='navbar-brand' to='/team'>
                    RVS
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarColor01'
                    aria-controls='navbarColor01'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse' id='navbarColor01'>
                    <ul className='navbar-nav m-auto'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/'>
                                Home <span className='sr-only'>(current)</span>
                            </Link>
                        </li>
                        {
                            !userInfo ? (
                                <>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/login'>
                                            Login
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/register'>
                                            Register
                                        </Link>
                                    </li>
                                    
                                        <li className='nav-item'>
                                            <Link className='nav-link' to='/team'>
                                                Our Team
                                            </Link>
                                        </li>
                                        <li className='nav-item'>
                                            <Link className='nav-link' to='/contact'>
                                                Contact Us
                                            </Link>
                                        </li>
                                    

                                </>
                            ) : (
                                <>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/books'>
                                            Total Books
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/addbook'>
                                            Add book
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link className='nav-link' to='/profile'>
                                            Profile
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            onClick={logoutHandler}
                                            className='nav-link'
                                            to='/login'
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                            )
                        }



                    </ul>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;