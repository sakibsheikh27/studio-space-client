import { Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { SiObsstudio } from 'react-icons/si';

const Navbar = () => {
    return (
        <nav>
            <header className='w-full max-w-7xl mx-auto flex justify-between items-center my-3'>
                <div className='flex gap-4 items-center text-2xl font-bold text-blue-500'>
                    <SiObsstudio /><h2><span className='text-black'>STUDIO</span> SPACE</h2>
                </div>
                <div className='flex gap-6 text- list-none font-medium'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/studios'}>Explore Studios</Link>
                    <Link href={'/htw'}>How It Works</Link>
                    <Link href={'/about'}>About Us</Link>
                </div>
                <div className='flex gap-3'>
                    <Button>Login</Button>
                    <Button>Register</Button>
                </div>
            </header>
            <hr className=' border-gray-200' />
        </nav>
    );
};

export default Navbar;