import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const About = () => (
  <>
    <h1>About page</h1>
    <div className="about">
      <ul className="about__list">
        <li>
          <NavLink to="about-app">About app</NavLink>
        </li>
        <li>
          <NavLink to="about-developer">About developer</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  </>
);

export default About;
