import React from 'react'
import { navs } from '../../utils/navs';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className='w-screen h-10 bg-blue-200 '>
            <div className='mx-24 bg-blue-200 flex justify-between items-center'>
                <div>
                    <h2>Logo</h2>
                </div>
               {navs.map((nav) => {
                return(
                <div key={nav.id} className='bg-blue-200  w-44 '>
                    <Link to={nav.path}>
                        <p>{nav.name}</p>
                    </Link>
                </div>
                );
                })}
                <div className='bg-blue-200'>
                    <p>Sign up</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
