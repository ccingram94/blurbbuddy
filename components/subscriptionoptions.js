import Head from 'next/head'
import Image from 'next/image'

export default function SubscriptionOptions() {
    return (
        <div className="w-screen bg-transparent flex flex-row flex-wrap justify-center">
            <div className="bg-gradient-to-bl from-purple-900 to-indigo-900 rounded-xl p-2 m-4">
                <h3 className="p-2 text-purple-200 text-center font-bold text-3xl">Name Buddy</h3>
                <p className="p-2 text-purple-200">generate the perfect character name</p>
            </div>
            <div className="bg-gradient-to-bl from-purple-900 to-indigo-900 rounded-xl p-2 m-4">
                <h3 className="p-2 text-purple-200 text-center font-bold text-3xl text-purple-600 hover:text-rose-100 transition-all">Blurb Buddy</h3>
                <p className="p-2 text-purple-200">generate book blurbs in a snap!</p>
            </div>
            <div className="bg-gradient-to-bl from-purple-900 to-indigo-900 rounded-xl p-2 m-4">
                <h3 className="p-2 text-purple-200 text-center font-bold text-3xl">Plot Buddy</h3>
                <p className="p-2 text-purple-200">generate plot ideas that inspire you</p>
            </div>
        </div>
    )
}