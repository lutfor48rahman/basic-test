import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useInfo from '../../hooks/useInfo';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    //   console.log(user.displayName);
    const [info,setInfo] = useInfo([]);
    // const [informations,setInformations] = useState([]);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/information')
    //     .then(res=>res.json())
    //     .then(data=>setInformations(data));
    // },[])

    return (
        <div class="navbar bg-green-500">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">Basic Test</a>
  </div>
  <div class="flex-none">
  <button class="btn btn-ghost btn-circle">
      <Link to='/view-info'><div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item">{info.length}</span>
      </div></Link>
    </button>
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/info'>Profile</Link></li>
      <li tabindex="0">
        <a>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100">
          <li><Link to=''>Information</Link></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li>{user ? <button class="btn btn-ghost" onClick={logout} >{user?.displayName}    SIGN OUT</button>:<Link to="/login">Login</Link>}</li>
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;