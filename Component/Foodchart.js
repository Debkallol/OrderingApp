import styles from '../styles/Home.module.css'
//import { useState } from 'react' 

export default function Foodchart(){
    
    
    return(
        <div>
                <h1 className={styles.title}>My <a>Food Plan Chart</a></h1>
                <p>Food is the supplement to your body and your beautiful mind. Don't be hesistate to take food. Healthy food always gives you the strength you need. So fullfilling your calorie nutrition with according to your body weight and hight we are here to support you. The snack basket will be prepared according to your calorie need.</p>
                {/* <p>Price range is between 1000-3000 BDT</p> */}
                <br></br>

                <ul>
                    <li>Perfect Vegitable with 2 Ruti : Calorie 300 Price : 150</li>
                    <li>Chicken Salad: Calorie 800 Price: 250</li>
                    <li>Healthy Veg Pakora(5 Piece): Calorie 500 Price: 150</li>
                    <li>Chicken Pakora(5 Piece): Calorie 500 Price: 150</li>
                    <li>Alu Porotha: Calorie 500 Price: 150</li>
                    <li>Chicken Vuna(4 piece): Calorie 700 Price: 250</li>
                    <li>Egg vuna with Alu(2 Eggs): Calorie 500 Price: 220</li>
                    <li>Egg with Mix Vegitable with 2 ruti: Calorie 800 Price: 250</li>
                    <li>Healthy Badam Shake: Calorie 500 Price: 150</li>
                    <li>Chicken Cheese curry: Calorie 900 Price: 250</li>
                    <li>Chicken Badam Malai Curry: Calorie 1200 Price: 280</li>
                    <li>Rice and Veg(1 person slot): Calorie 600 Price: 250</li>
                    <li>Rice and Egg Kachuri: Calorie 800 Price: 280</li>
                </ul>
                
                
        </div>
    )
}