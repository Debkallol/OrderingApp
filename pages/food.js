import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import Head from 'next/head'
import Footer from '../Component/Footer';
import Formfood from '../Component/Formfood';
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//import dbConnect from '../../../utils/dbConnect';
//import giftschema from '../../../models/Note';

//dbConnect();
// export async function getStaticProps () {
//     // `getStaticProps` is executed on the server side.
//     const article = await getArticleFromAPI()
//     return {
//       props: {
//         fallback: {
//           '/api/article': article
//         }
//       }
//     }
//   }

// function Article() {
//     // `data` will always be available as it's in `fallback`.
//     const { data } = useSWR('/api/article', fetcher)
//     return <h1>{data.title}</h1>
//   }


export default function food () {
  // async 

        // handleOnSubmit.getInitialProps = async() => {
        //     const res = await fetch('https://localhost:3000/api/notes');
        //     const data = res.json();
        //     return { notes : data }
        //  }
      //  await fetch('/api/notes'  ,
      //    {
      //        body: JSON.stringify(formData),
      //        headers: {'content-type' : 'application/json'},
      //        method:'POST'
      //    }
      //   )
       // const formData = await response.json()
       // console.log(formData);
   // }
    return (
    <div className={styles.container}>
        <Head>
        <title>Gift Basket</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <main className={styles.main}>
            {/* Query Call at +8801907417841 */}
                <div>
                    <Formfood />
                </div>
            </main>
                
            
            <Link href="/Foodcaloriechart" > 
            <a>
            <div className={styles.cardchart}>
            Food Calorie Chart &rarr; 
            </div>
            </a>
            </Link>
            <p>For Home Delivery Extra 35/- Will Add</p>
            <br></br>
            <Link href="/" className={styles.back}> Home </Link>

        <Footer />
    
    </div>
        
    )
}