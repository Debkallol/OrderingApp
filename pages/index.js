import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gift Basket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
      Any Query Call us at +8801907417841
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Gift Basket!</a>
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
          <a href="gift" className={styles.card}>
            <h2>Gift Items &rarr;</h2>
            <p>Find your suitable gift item or choose one</p>
          </a>

          <a href="food" className={styles.card}>
            <h2>Food Items &rarr;</h2>
            <p>Find your suitabele food item with perfect calorie</p>
          </a>

          {/* <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a> */}

          {/* <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a> */}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          // target="_blank"
          // rel="noopener noreferrer"
        >
          <p>Powered by Orthodox</p>
          {/* Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}