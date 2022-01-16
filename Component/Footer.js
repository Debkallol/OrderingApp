import styles from '../styles/Home.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
        //   href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        //   target="_blank"
        //   rel="noopener noreferrer"
        >
            <h5>If you chase to cancle the order please imediatelly call us at this +8801674859280 or +8801773496858 and tell your ordering name</h5>
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