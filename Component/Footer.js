import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
        //   href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //   target="_blank"
        //   rel="noopener noreferrer"
        >
            <div className={styles.grid}>
            <h5 className={styles.justify} >If you chase to cancle the order please imediatelly call us at this +8801674859280 or +8801773496858 and tell your ordering name</h5>
            <p className={styles.cardchart2} > Query Call at +8801907417841 </p>
            <Image src="/gblogo7.jpg" width={300} height={300}/>
            </div>
            
            
            {/* <br></br>
            <p className={styles.footermain}>Powered by Orthodox</p> */}
          {/* Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
        </footer>
    )
}