import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger-menu.svg';

import Modal from './UI/Modal';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';



function Header() {
    const [menu, setMenu] = useState(false);

    function handleMunue() {
        setMenu(prev => !prev);
    }

    function closeMenu() {
        setMenu(false);
    }

    let bar = <span className='absolute left-0 bottom-0 h-[2px] w-full bg-orange-500'></span>;

    return (
        <section className='relative'>
                <article className='flex items-center justify-between my-4 px-4 sm:px-8'>
                    <img src={logo} alt='logo-image' />
                    <button onClick={handleMunue} aria-label='open menu' className='md:hidden p-3 bg-neutral-200 rounded-[3px]'>
                        <img src={hamburger} alt='' aria-hidden="true" />
                    </button>
                    <ul className='hidden md:flex relative gap-6 items-start w-full text-preset6 font-semibold ml-48'>
                        <li>
                            <NavLink to='/'>
                                {({ isActive }) => (
                                    <span id='nav' className='relative inline-block'>
                                        Home
                                        {isActive && (bar)}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>
                                {({isActive}) => (
                                    <span id='nav' className='relative inline-block'>
                                        About
                                        {isActive && (bar)}                                    
                                    </span>
                                )}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/recipes' end>   
                                {({isActive}) => (
                                    <span id='nav' className='relative inline-block'>
                                        Recipes
                                        {isActive && (bar)}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                    <Link to="/recipes" className='hidden md:block cursor-pointer w-[40%] bg-neutral-900 text-center text-neutral-0 text-preset5 font-bold rounded-lg py-2'>Browse recipes</Link>
                </article>
            <hr className='bg-neutral-300' />
            <Modal open={menu} onClose={closeMenu}>
                <>
                <ul className='flex flex-col gap-6 items-start w-full my-2'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/recipes' end>Recipes</NavLink>
                </ul>
                <button className="cursor-pointer w-full bg-neutral-900 text-neutral-0 text-preset5 rounded-lg py-2 mt-2">
                        <Link to="/recipes">Browse recipes</Link>
                </button>
                </>
            </Modal>
        </section>
    );
}

export default Header;