'use client';
import { useState } from 'react';
import React from 'react';
import { Button } from './ui/button';
import TransitionLink from './TransitionLink';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='flex py-0 px-16 h-16 flex-col justify-center items-center w-screen '>
            <div className='flex justify-center items-center gap-8 self-stretch'>

                <div className='flex flex-col items-start flex-grow flex-shrink-0 basis-0'>
                    <div className='flex items-start gap-8'>
                        <TransitionLink href="/about" label='About Me' />
                        <TransitionLink href="/tree" label='Tree' />
                        <div>Projects</div>
                        <div className='flex justify-center items-center gap-1'
                            onClick={() => { setIsOpen(!isOpen) }}>

                            <div>Services</div>
                            <svg className={isOpen ? "-rotate-90" : ""} xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12.8977 15.6629C12.678 15.8826 12.3219 15.8826 12.1022 15.6629L6.36739 9.92804C6.14772 9.70837 6.14772 9.35227 6.36739 9.13259L6.63256 8.86739C6.85222 8.64772 7.20838 8.64772 7.42805 8.86739L12.5 13.9393L17.5719 8.86739C17.7916 8.64772 18.1477 8.64772 18.3674 8.86739L18.6326 9.13259C18.8522 9.35227 18.8522 9.70837 18.6326 9.92804L12.8977 15.6629Z" fill="black" />
                            </svg>

                        </div>
                    </div>

                </div>
                <div className='flex items-start'>Logo</div>
                <div className='flex flex-col justify-center items-end flex-grow flex-shrink-0 basis-0'>
                    <Button
                        className='felx px-2 py-5 justify-center items-center gap-2'
                    >
                        Menu

                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
