import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import SubscriptionOptions from '../components/subscriptionoptions'

export default function NameBuddy() {
  const [ text, setText ] = useState('');
  return (
    <div>
      <Head>
        <title>Blurb Buddy!</title>
        <meta name="description" content="AI tools for writers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen min-h-screen flex flex-col flex-wrap justify-center content-center bg-gradient-to-bl from-indigo-300 to-rose-100 via-purple-300">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl p-4 font-bold text-purple-100">
          Name Buddy 📝
        </h1>
        <div className="flex flex-row flex-wrap">
          <div className="bg-purple-100 bg-opacity-70 rounded-xl m-2 text-center flex flex-col justify-center m-4 p-4">
            <div>
              <p className="text-xl lg:text-2xl text-purple-800 font-bold p-2 m-4">Describe your character below and Name Buddy will generate 10 names for you!</p>
            </div>
            <div className="flex flex-col justify-center items-center p-2 m-4">
              <textarea type="text" onChange={(e) => setText(e.target.value)} className="p-2 rounded-xl m-2 text-purple-900 min-h-full min-w-full focus:outline-none"></textarea>
              <button className="m-2 bg-white bg-opacity-90 text-xl max-w-fit rounded-xl p-2 text-purple-800">Generate Names</button>
            </div>
          </div>
          <div className="flex flex-col jsutify-center p-2 m-4 bg-purple-100 bg-opacity-70 rounded-xl">
            <h3 className="text-xl font-bold p-2 m-4 text-purple-600">Results:</h3>
          </div>
        </div>
      </main>
    </div>
  )
}