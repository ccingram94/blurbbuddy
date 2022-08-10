import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import MenuIcon from '@heroicons/react/solid/MenuIcon'
import XIcon from '@heroicons/react/solid/XCircleIcon'

export default function Header() {
    const { data: session } = useSession();
    const [ menu, setMenu ] = useState(false);

    return (
        <div className="w-screen bg-purple-500">
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
                <div className="p-2 text-center w-1/3">
                    <Link href="/">
                        <h2 className="p-2 text-xl lg:text-2xl text-purple-100 font-bold">Blurb Buddy</h2>
                    </Link>
                </div>
                <div className="flex flex-row justify-center text-center p-2 text-purple-100 w-1/3">
                    {!menu && <MenuIcon onClick={() => setMenu(true)} className="h-12 p-2 flex lg:hidden"/>}
                    {menu && <XIcon onClick={() => setMenu(false)} className="h-12 p-2 flex lg:hidden"/>}
                    <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl hidden lg:flex">Sign In</button>
                    <button className="p-2 m-2 bg-purple-900 text-purple-100 hover:bg-purple-100 hover:text-purple-700 rounded-xl font-bold transition-all hidden lg:flex">Sign Up</button>
                </div>
            </div>
            {menu &&
                <div className="w-screen bg-gradient-to-bl from-indigo-500 to-purple-500 text-purple-100">
                
                <div className="flex flex-col h-full" onClick={() => setMenu(false)}>
                    <Link href="/namebuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Name Buddy</button>
                    </Link>
                    <hr className="opacity-60" />
                    <Link href="/blurbbuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Blurb Buddy</button>
                    </Link>
                    <hr className="opacity-60"/>
                    <Link href="/plotbuddy">
                        <button className="p-2 m-2 font-bold hover:bg-purple-100 hover:text-purple-700 transition-all rounded-xl">Plot Buddy</button>
                    </Link>
                </div>
                </div>
            }
        </div>
    )
}