import styles from '../styles/Home.module.css';
import Link from 'next/link';
//import { useState } from 'react' 

export default function Formfood(){
//   const [ occasion, setoccasion ] = useState('')
//   const [ budget, setbudget ] = useState('')
//   const [ deliverytime, setdeliverytime ] = useState('')
//   const [ deliverylocation, setdeliverylocation ] = useState('')
//   const [ customerNameAndNumber, setcustomerNameAndNumber ] = useState('')
//   const [ message, setmessage ] = useState('')

  // const registerUser = async event => {
  //   event.preventDefault()

  //   const res = await fetch('/api/notes', {
  //     body: JSON.stringify({
  //       name: event.target.name.value
  //     }),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST'
  //   })

  //   const result = await res.json()
  //   // result.user => 'Ada Lovelace'
  // }

   async function handleOnSubmit(e){
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field=>{
            if (!field.name) return;
            formData[field.name] = field.value;
        })
        await fetch('/api/foodapi'  ,
    {
        body: JSON.stringify(formData),
        headers: {'content-type' : 'application/json'},
        method:'POST'
    }
   )
   console.log(formData);
    }
    
    
    return(
        <div>
                <h1 className={styles.title}>My <a>Food Plan</a></h1>
                <p>Food is the supplement to your body and your beautiful mind. Don't be hesistate to take food. Healthy food always gives you the strength you need. So fullfilling your calorie nutrition with according to your body weight and hight we are here to support you. The snack basket will be prepared according to your calorie need.</p>
                {/* <p>Price range is between 1000-3000 BDT</p> */}
                <br></br>
                
                
                
                <form onSubmit={handleOnSubmit}>
                <h2 className={styles.designer}>What food you need ? Vegitable or Nonvegitable ?</h2>
                <input type="text" name="Food" placeholder="type food you need"></input>

                <h2 className={styles.designer}>Tell us something about your calorie need ? Between 200 calorie to 3500 calorie?</h2>
                <input name="calorie" placeholder="ex: 400 calorie"></input>
                {/* <h2>Also tell us your snack basket budget,</h2>
                <input id="budget" placeholder="budget"></input> */}

                <h2 className={styles.designer}>Delivery will conduct within 7 hours, is it okay ? Then tell your pick up time, </h2>
                <input name="deliverytime" placeholder="dd/mm/yy"></input>

                <h2 className={styles.designer}>Where you can collect your snack Basket ?</h2>
                <input type="text" name="location" placeholder="location"></input>

                <h2 className={styles.designer}>Leave your mobile number here and please tell us your good name,</h2>
                <input name="nameNumber" placeholder="name: +8801*********"></input>

                <h2 className={styles.designer}>Anything more you need ? Tell us here.. . .</h2>

                <textarea name="message" rows="4" cols="40"></textarea>

                <br></br>
                <Link href="/confirmation"><button type="submit" className={styles.card} type="submit">Confirm Your Snack Basket Order</button></Link>
                </form>

                <p>After confirm your order wait for our confirmation call</p>
                <h4>For the Sylhet City Peoples pickup location is fixed at Lamabazar point near PanshiBazar opposite of UCBL Bank.</h4>
                
                </div>
    )
}