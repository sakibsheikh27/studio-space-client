'use client'

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiObsstudio } from 'react-icons/si';
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const Footer = () => {

    return (
        <div className='my-4 bg-blue-50 fixed bottom-0 flex justify-center items-center left-0 w-full'>
            <hr className='border-b border-gray-200' />
            <footer className=' w-full max-w-7xl mx-auto my-4'>
                <div className='flex gap-6 justify-between mb-4'>
                    
                        <div>
                            <div className='flex gap-4 items-center text-xl font-bold text-blue-500'>
                                <SiObsstudio /><h2><span className='text-black'>STUDIO</span> SPACE</h2>
                            </div>
                            <p className='my-3 text-gray-700 text-sm w-60'>Studio Space helps creatives find and book the right studio for photography, music, podcasts, dance and art, in just a few clicks.</p>
                            <div className='flex
                            gap-4 text-xl text-blue-500'>
                                <Link className='hover:text-gray-500' href={'/'}><FaXTwitter /></Link>
                                <Link className='hover:text-gray-500' href={'/'}><FaInstagramSquare /></Link>
                                <Link className='hover:text-gray-500' href={'/'}><FaFacebook /></Link>
                                <Link className='hover:text-gray-500' href={'/'}><FaLinkedin /></Link>
                                <Link className='hover:text-gray-500' href={'/'}><FaYoutube /></Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-md mb-2'>Quick Links</h2>
                            <div className='list-none text-sm'>
                                <Link href={'/'}><li>Home</li></Link>
                                <Link href={'/'}><li>About Us</li></Link>
                                <Link href={'/'}><li>How it Works</li></Link>
                                <Link href={'/'}><li>List Your Studio</li></Link>
                                <Link href={'/'}><li>Contact</li></Link>
                                <Link href={'/'}><li>FAQ</li></Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-md mb-2'>Popular studios</h2>
                            <div className='list-none text-sm'>
                                <Link href={'/'}><li>Photography</li></Link>
                                <Link href={'/'}><li>Music & Recording</li></Link>
                                <Link href={'/'}><li>Podcast</li></Link>
                                <Link href={'/'}><li>Dance</li></Link>
                                <Link href={'/'}><li>Art & Painting</li></Link>
                                <Link href={'/'}><li>Film & Video</li></Link>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-md'>Get studio news and offers</h2>
                            <p className='text-sm text-gray-500 my-2'>New studios and special offers, straight to your inbox.</p>
                            <div>
                                <Form className="flex w-60 flex-col gap-4 mb-4">
                                    <TextField
                                        isRequired
                                        name="email"
                                        type="email"
                                        validate={(value) => {
                                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                                return "Please enter a valid email address";
                                            }
                                            return null;
                                        }}
                                    >
                                        <Label>Email</Label>
                                        <Input placeholder="john@example.com" />
                                        <FieldError />
                                    </TextField>
                                </Form>
                                <Button>Subscribe</Button>
                            </div>
                            <small className='my-6 text-gray-500'>No spam. Unsubscribe anytime.</small>
                        </div>
                    
                </div>
                <hr className='border-gray-300' />
                <div className='flex justify-between text-sm text-gray-500 my-4'>
                    <p>&copy; 2026 StudioSpace. All rights reserved.</p>
                    <div className='flex gap-3'>
                        <Link href={'./'}>Terms of Service</Link>
                        <Link href={'./'}>Privacy Policy</Link>
                        <Link href={'./'}>Cookies</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;