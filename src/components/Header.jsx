import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    

    return (
       <header className='bg-neutral py-2 text-neutral-content'>
        <div className='align-content flex justify-center sm:justify-end'>
        <div className=' justify-center sm:justify-end '>
                {/* user */}

                {/* link */}
            <div className='flex gap-x-6 justify-center items-center'>
            <Link className='link link-hover text-xs sm:text-sm' to='/login' >Sign in / Guest</Link>
            <Link className='link link-hover text-xs sm:text-sm' to='/register' >Create an accaunt</Link>
            </div>

            </div>
        </div>

       </header>
    )
}
