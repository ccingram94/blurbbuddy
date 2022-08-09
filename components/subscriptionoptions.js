import Head from 'next/head'
import Image from 'next/image'

export default function SubscriptionOptions() {
    return (
        <div className="w-screen bg-transparent flex flex-row flex-wrap justify-center">
            <div className="bg-purple-200 bg-opacity-90 hover:bg-gradient-to-bl from-purple-900 to-indigo-900 text-purple-900 hover:text-purple-200 rounded-xl p-2 m-4 transition-all">
                <h3 className="p-4 text-center font-bold text-3xl">Name Buddy</h3>
                <p className="p-2">generate the perfect character name</p>
            </div>
            <div className="bg-purple-200 hover:bg-gradient-to-bl from-purple-900 to-indigo-900 text-purple-900 hover:text-purple-200  rounded-xl p-2 m-4 transition-all">
                <h3 className="p-4 hover:text-purple-200 text-center font-bold text-3xl">Blurb Buddy</h3>
                <p className="p-2">generate book blurbs in a snap!</p>
            </div>
            <div className="bg-purple-200 hover:bg-gradient-to-bl from-purple-900 to-indigo-900 text-purple-900 hover:text-purple-200  rounded-xl p-2 m-4 transition-all">
                <h3 className="p-4 hover:text-purple-200 text-center font-bold text-3xl">Plot Buddy</h3>
                <p className="p-2">generate plot ideas that inspire you</p>
            </div>


        </div>
    )
}