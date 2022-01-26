import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    function menuEffect() {
        const navLink = document.getElementsByClassName('nav-link');
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].addEventListener('click', function () {
                let c = 0;
                while (c < navLink.length) {
                    navLink[c].className = 'nav-link';
                    c++;
                }
                navLink[i].className = 'nav-link active'
            })
        }
    }
    useEffect(() => {
        menuEffect();
    });
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">Shakil</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className='nav-link' aria-current="page" to="home">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="services">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="about">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className='nav-link' to="contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
        //   {/* <nav className='navbar'>
        //       <Link to='home'>Home</Link>
        //       <Link to='about'>About</Link>
        //       <Link to='contact'>Contact</Link>
        //       <Link to='services'>Services</Link>
        //   </nav> */}
    );
};

export default Menu;
export { Link };
