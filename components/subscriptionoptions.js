import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function SubscriptionOptions() {
    return (
        <div className="w-screen bg-transparent flex flex-row flex-wrap justify-center">
            <Link href="/namebuddy">
                <div className="bg-purple-200 bg-opacity-90 hover:bg-gradient-to-bl from-purple-900 to-indigo-900 text-purple-900 hover:text-purple-200 rounded-xl p-4 m-4 transition-all">
                    <p className="text-4xl lg:text-9xl text-center p-6">🙋‍♀️</p>
                    <h3 className="p-4 text-center font-bold text-3xl">Name Buddy</h3>
                    <p className="p-2 text-center"> the perfect character name</p>
                </div>
            </Link>
            <Link href="/blurbbuddy">
                <div className="bg-purple-200 hover:bg-gradient-to-bl from-purple-900 to-indigo-900 text-purple-900 hover:text-purple-200  rounded-xl p-4 m-4 transition-all">
                    <p className="text-4xl lg:text-9xl text-center p-6">📝</p>
                    <h3 className="p-4 hover:text-purple-200 text-center font-bold text-3xl">Blurb Buddy</h3>
                    <p className="p-2 text-center">book blurbs in a snap!</p>
                </div>
            </Link>
            <Link href="/plotbuddy">
                <div className="bg-purple-200 hover:bg-gradient-to-bl from-purple-900 to-indigo-900 text-purple-900 hover:text-purple-200  rounded-xl p-4 m-4 transition-all">
                    <p className="text-4xl lg:text-9xl text-center p-6">📖</p>
                    <h3 className="p-4 hover:text-purple-200 text-center font-bold text-3xl">Plot Buddy</h3>
                    <p className="p-2 text-center">plot ideas to inspire you</p>
                </div>
            </Link>


        </div>
    )
}