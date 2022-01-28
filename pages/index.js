import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3090777775261199"
     crossorigin="anonymous"></script>
        <title>Gift Basket</title>
        <meta name="description" content="Chase your gift basket. powered by orthodox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
      Any Query Call us at +8801907417841
        <h1 className={styles.title}>
          Welcome to <Link href="/"> Gift Basket! </Link>
          
        </h1>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        <div className={styles.grid}>
        <Link href="/gift" >
           <a >
              <h2>Gift Items &rarr;</h2>
              <p className={styles.card}>Find your suitable gift item or choose one</p>
           </a>
        </Link>
          
        <Link  href="/food" >
            <a >
              <h2>Food Items &rarr;</h2>
              <p className={styles.card}>Find your suitabele food item with perfect calorie</p>
            </a>
        </Link>
          

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
