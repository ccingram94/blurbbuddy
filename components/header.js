import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="w-screen bg-purple-500">
            <p className=" bg-purple-800 text-indigo-100 text-center p-2"> ✨ AI powered text generation tools for writers ✨ </p>
            <div className="bg-transparent flex flex-row flex-wrap justify-between">
                <div className="flex flex-row p-2 justify-center text-center p-2 text-purple-100">
                    <Link href="/namebuddy">
                        <h3 className="p-2">Name Buddy</h3>
                    </Link>
                    <Link href="/blurbbuddy">
                        <h3 className="p-2">Blurb Buddy</h3>
                    </Link>
                    <Link href="/plotbuddy">
                        <h3 className="p-2">Plot Buddy</h3>
                    </Link>
                </div>
                <div className="p-2 text-center">
                    <Link href="/">
                        <h2 className="p-2 text-xl lg:text-2xl text-purple-100 font-bold">Blurb Buddy</h2>
                    </Link>
                </div>
                <div className="flex flex-row justify-center text-center p-2 text-purple-100">
                    <h3 className="p-2">Sign In</h3>
                    <h3 className="p-2">Sign Up</h3>
                </div>
            </div>
        </div>
    )
}