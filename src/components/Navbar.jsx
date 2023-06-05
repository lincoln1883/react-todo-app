import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menu && ref.current && !ref.current.contains(event.target)) {
        setMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [menu]);

  const links = [
    { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
  ];

  return (
    <nav ref={ref} className="navbar">
      <button type="button" className="toggle" onClick={() => setMenu((prev) => !prev)}>
        {menu ? (<MdClose style={{ width: '32px', height: '32px' }} />) : (<FiMenu style={{ width: '32px', height: '32px' }} />)}
      </button>
      <ul className={`menu-nav${menu ? ' show-menu' : ''}`}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink to={link.path} onClick={() => setMenu(false)}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
