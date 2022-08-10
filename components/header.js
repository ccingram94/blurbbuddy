import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import MenuIcon from '@heroicons/react/solid/MenuIcon'
import XIcon from '@heroicons/react/solid/XCircleIcon'
import UserIcon from '@heroicons/react/solid/UserIcon'

export default function Header() {
    const { data: session } = useSession();
    const [ menu, setMenu ] = useState(false);

    return (
        <div className="w-screen bg-gradient-to-b from-purple-500 to-purple-600">
            <p className=" bg-purple-800 text-indigo-100 text-sm lg:text-md text-center p-2"> ✨ AI text generation for writers ✨ </p>
            <div className="bg-transparent flex flex-row flex-wrap justify-between">
                <div className="flex flex-row p-2 justify-center text-center p-2 text-purple-100 w-1/3 hidden lg:flex">
                    <Link href="/namebuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Name Buddy</button>
                    </Link>
                    <Link href="/blurbbuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Blurb Buddy</button>
                    </Link>
                    <Link href="/plotbuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Plot Buddy</button>
                    </Link>
                </div>
                <div className="p-2 text-center w-1/3 flex justify-center items-center">
                    <Link href="/">
                        <h2 className="p-2 text-lg lg:text-2xl xl:text-4xl text-purple-100 font-bold">Blurb Buddy 📝</h2>
                    </Link>
                </div>
                <div className="flex flex-row justify-center text-center p-2 text-purple-100 w-1/3">
                    {!menu && <MenuIcon onClick={() => setMenu(true)} className="h-12 p-2 flex lg:hidden"/>}
                    {menu && <XIcon onClick={() => setMenu(false)} className="h-12 p-2 flex lg:hidden"/>}
                    {!session && 
                    <div className="flex flex-row justify-center text-center text-purple-100 p-2">
                        <button onClick={() => signIn()} className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl hidden lg:flex">Sign In</button>
                        <button onClick={() => signIn()} className="p-2 m-2 bg-purple-900 text-purple-100 hover:bg-purple-100 hover:text-purple-700 rounded-xl font-bold transition-all hidden lg:flex">Sign Up</button>
                    </div>
                    }
                    {session &&
                    <div className="flex flex-row justify-center items-center text-center p-2">
                        <button className="p-2 m-2 hover:bg-purple-900 rounded-xl hidden lg:flex">
                            <UserIcon className="h-12"/>
                        </button>
                        <button onClick={() => signOut()} className="p-4 m-2 bg-purple-900 text-purple-100 hover:bg-purple-100 hover:text-purple-700 rounded-xl font-bold transition-all hidden lg:flex">Sign Out</button>
                    </div>
                    }
                </div>
            </div>
            {menu &&
                <div className="w-screen bg-gradient-to-bl from-indigo-500 to-purple-500 text-purple-100">
                
                <div className="flex flex-col h-full" onClick={() => setMenu(false)}>
                    {session &&
                    <div className="flex flex-col min-w-full justify-center items-center bg-purple-900">
                        <Link href="/namebuddy">
                            <button className="min-w-full p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">My Account</button>
                        </Link>   
                        <Link href="/namebuddy">
                            <button onClick={() => signOut()} className="min-w-full p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Sign Out</button>
                        </Link>   
                    </div>                 
                    }
                    {!session &&
                    <div className="flex flex-col min-w-full justify-center items-center bg-purple-900">
                        <Link href="/namebuddy">
                            <button onClick={() => signIn()} className="min-w-full p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Sign In</button>
                        </Link>   
                        <Link href="/namebuddy">
                            <button onClick={() => signIn()} className="min-w-full p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Sign Up</button>
                        </Link>   
                    </div>                 
                    }
                    <Link href="/blurbbuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Blurb Buddy</button>
                    </Link>
                    <hr className="opacity-60"/>
                    <Link href="/namebuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Name Buddy</button>
                    </Link>
                    <hr className="opacity-60" />
                    <Link href="/plotbuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Plot Buddy</button>
                    </Link>
                </div>
                </div>
            }
        </div>
    )
}