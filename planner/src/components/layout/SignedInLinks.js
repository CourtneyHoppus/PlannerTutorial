import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div>
      <ul className='right'>
        <li><NavLink to='/create'>New Projects</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CH</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks;
