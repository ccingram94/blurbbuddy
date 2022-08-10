import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SubscriptionOptions from '../components/subscriptionoptions'

export default function NameBuddy() {
  const [ text, setText ] = useState('');
  const [ results, setResults ] = useState('')
  const [ surnameresults, setSurnameResults ] = useState('')
  const [ generating, setGenerating ] = useState(false);



  const submitData = async(e) => {
    e.preventDefault();
    setGenerating(true);
    const body = text;
    const response = await fetch(`/api/namerequest`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
     });
     const data = await response.json();
     const resultdata = data.textresponse.text;
     const response2 = await fetch(`/api/lastnamerequest`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
     });
     const data2 = await response2.json();
     const resultdata2 = data2.textresponse.text;
     setResults(resultdata)
     setSurnameResults(resultdata2);
     setGenerating(false);
    } 

  return (
    <div>
      <Head>
        <title>Blurb Buddy!</title>
        <meta name="description" content="AI tools for writers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen min-h-screen flex flex-col flex-wrap justify-center content-center bg-gradient-to-bl from-indigo-300 to-rose-100 via-purple-300">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl p-4 font-bold text-purple-100">
          Name Buddy 🙋‍♀️
        </h1>
        <div className="flex flex-col flex-wrap">
          <div className="flex flex-col justify-center p-2 m-4 bg-purple-100 bg-opacity-70 rounded-xl max-w-[75vw]">
            <div>
              <p className="text-xl lg:text-2xl text-purple-800 font-bold p-2 m-4">Describe your character below and Name Buddy will generate 10 names for you!</p>
            </div>
            <form className="flex flex-col justify-center items-center p-2 m-4">
              <textarea type="text" onChange={(e) => setText(e.target.value)} className="p-2 rounded-xl m-2 text-purple-900 min-h-full min-w-full focus:outline-none"></textarea>
              <button onClick={(e) => submitData(e)} className="m-2 bg-white bg-opacity-90 text-xl max-w-fit rounded-xl p-2 text-purple-800">Generate Names</button>
            </form>
          </div>
          <div className="flex flex-col justify-center p-2 m-4 bg-purple-100 bg-opacity-70 rounded-xl max-w-[75vw]">
            <h3 className="text-xl font-bold p-2 m-4 text-purple-600">Results:</h3>
            {generating && <p className="p-2 m-4 text-purple-600">generating names...</p>}
            {results && !generating &&
              <div className="flex flex-col flex-wrap p-2 m-2">
                <div>
                  <h4 className="p-2 m-4 text-purple-600 text-xl font-bold">First names:</h4>
                  <p className="p-2 m-4 text-purple-600 text-lg">{results}</p>
                </div>
                <div>
                <h4 className="p-2 m-4 text-purple-600 text-xl font-bold">Last names:</h4>
                  <p className="p-2 m-4 text-purple-600 text-lg">{surnameresults}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </main>
    </div>
  )
}
