'use client';

import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {getProviders, signIn, signOut, useSession} from "next-auth/react";

const Nav = () => {
    const {data: session} = useSession();
    const [providers, setProviders] = useState([]);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const setProvidersFunc = async () => {
            const res = await getProviders();
            setProviders(res);
        };
        setProvidersFunc();
    }, []);

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='#' className='flex gap-2 flex-center'>
                <Image src='/assets/images/logo.svg'
                       alt='Logo'
                       className='object-contain'
                       width='40'
                       height='40'
                />
                <p className='logo_text'>Sample App</p>
            </Link>

            {/*Desktop Navigation*/}
            <div className='sm:flex hidden'>
                {session?.user ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='#prompt-create' className='black_btn'>Create Prompt</Link>
                        <button onClick={() => signOut()}
                                type='button'
                                className='outline_btn'>Sign Out</button>
                        <Link href='#profile'>
                            <Image src={session?.user?.image || '/assets/images/avatar.jpeg'}
                                   height='35'
                                   width='35'
                                   className='rounded-full'
                                   alt='Avatar'
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {
                            providers && Object.values(providers).map((provider) => (
                                <button key={provider.name}
                                        type='button'
                                        className='black_btn'
                                        onClick={() => signIn(provider.id)}>Sign In</button>
                            ))
                        }
                    </>
                )}
            </div>

            {/*Mobile Navigation*/}
            <div className='sm:hidden flex relative'>
                {session?.user ? (
                    <div className='flex'>
                        <Image src={session?.user?.image || '/assets/images/avatar.jpeg'}
                               height='35'
                               width='35'
                               className='rounded-full'
                               alt='Avatar'
                               onClick={() => setToggleMenu(prev => !prev)}
                        />
                        {toggleMenu && (
                            <div className='dropdown'>
                                <Link href='#profile'
                                      onClick={() => setToggleMenu(false)}
                                      className='dropdown_link'>Profile</Link>
                                <Link href='#prompt-create'
                                      onClick={() => setToggleMenu(false)}
                                      className='dropdown_link'>Create Prompt</Link>
                                <button type='button'
                                        className='black_btn w-full mt-5'
                                        onClick={() => {
                                            setToggleMenu(false);
                                            signOut();
                                        }}>Sign Out</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {
                            providers && Object.values(providers).map((provider) => (
                                <button key={provider.name}
                                        type='button'
                                        className='black_btn'
                                        onClick={() => signIn(provider.id)}>Sign In</button>
                            ))
                        }
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
