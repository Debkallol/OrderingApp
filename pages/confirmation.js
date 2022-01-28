import Footer from "../Component/Footer";
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function confirmation(){

    return(
     <div >
         
         {/* <h4>Please wait for our confirmation call</h4> */}
        {/* <br></br>
        <br></br> */}
         

         <div className={styles.grid}>
         <h4 >Your order is confirmed</h4>
         </div>
         <Link href="/" className={styles.back}> Home </Link>
         <Footer />
     </div>
     
    
    )
}