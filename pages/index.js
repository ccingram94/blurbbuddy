import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blurb Buddy!</title>
        <meta name="description" content="AI tools for writers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Blurb Buddy
        </h1>

        <p>
          Blurb Buddy makes writing easy!
        </p>

      </main>
    </div>
  )
}
