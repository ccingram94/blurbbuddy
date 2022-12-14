import Head from 'next/head'
import Image from 'next/image'
import SubscriptionOptions from '../components/subscriptionoptions'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blurb Buddy!</title>
        <meta name="description" content="AI tools for writers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen min-h-screen flex flex-col flex-wrap justify-center items-center bg-gradient-to-bl from-indigo-300 to-rose-100 via-purple-300">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl xl:text-8xl p-4 font-bold text-purple-100">
          Blurb Buddy 📝
        </h1>
        <div>
          <SubscriptionOptions />
        </div>
      </main>
    </div>
  )
}
