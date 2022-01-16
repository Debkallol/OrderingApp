import styles from '../styles/Home.module.css'
//import { useState } from 'react' 

export default function Form(){
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
        await fetch('/api/notes'  ,
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
                <h1 className={styles.title}>My <a>Gift Plan</a></h1>
                <p>The healthy lovely gifts are available within us. The baskets will be included chocolates chit sheets and so many surprises. Go ahead to chase one, for your father mother brother sister or any of your loving person and dont forget about your friends.</p>
                {/* <h3>Price range between 1000-5000BDT</h3> */}
                <br></br>
                
                
                <form onSubmit={handleOnSubmit}>
                <h2>What is your Occasion ?</h2>
                <input type="text"  name="occasion" placeholder="occasion"></input>

                <h2>Tell us something about your Budget between 1000 to 5000 taka?</h2>
                <input  name="budget" placeholder="budget"></input>

                <h2>Delivery will conduct within 7 days, is it okay ? Then tell your time, </h2>
                <input name="deliverytime" placeholder="dd/mm/yy" ></input>

                <h2>Where you can collect your Gift Basket ?</h2>
                <input name="deliverylocation" type="text" placeholder="location"></input>

                <h2>Leave your mobile number here and please tell us your good name,</h2>
                <input name="customerNameAndNumber"  placeholder="name: +8801*********"></input>
                
                <h2>Anything more you need ? Tell us here.. . .</h2>

                <textarea name="message" rows="4" cols="40"></textarea>

                <br></br>
                <button  type="submit"  className={styles.card}>Confirm Your Gift Basket Order</button>
                </form>

              
                <h4>For the Sylhet City Peoples pickup location is fixed at Lamabazar point near PanshiBazar opposite of UCBL Bank.</h4>
                </div>
    )
}