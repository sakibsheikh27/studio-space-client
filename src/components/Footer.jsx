'use client'

import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiObsstudio } from 'react-icons/si';
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";

const Footer = () => {
    const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
  };
    return (
        <footer className=''>
            <div>
                <div>
                    <div className='flex gap-4 items-center text-xl font-bold text-blue-500'>
                        <SiObsstudio /><h2><span className='text-black'>STUDIO</span> SPACE</h2>
                    </div>
                    <p>StudioSpace helps creatives find and book the right studio for photography, music, podcasts, dance and art, in just a few clicks.</p>
                    <div>
                        <Link href={'/'}><FaXTwitter /></Link>
                        <Link href={'/'}><FaInstagramSquare /></Link>
                        <Link href={'/'}><FaFacebook /></Link>
                        <Link href={'/'}><FaLinkedin /></Link>
                        <Link href={'/'}><FaYoutube /></Link>
                    </div>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <div>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                    </div>
                </div>
                <div>
                    <h2>Popular studios</h2>
                    <div>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                        <Link href={'/'}></Link>
                    </div>
                </div>
                <div>
                    <h2>Get studio news and offers</h2>
                    <p>New studios and special offers, straight to your inbox.</p>
                    <div>
                        <Form className="flex w-96 flex-col gap-4">
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
                    </div>
                    <small>No spam. Unsubscribe anytime.</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;