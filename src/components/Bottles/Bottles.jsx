import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/localstorage";

const Bottles = () => {

    const [bottles, setbottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setbottles(data))
    },[])

    useEffect(() =>{
        if(bottles.length > 0){
            const storedCart = getStoredCart();
            console.log(storedCart)
        }
    }, [bottles])

    const handelAddToCart = (bottle) =>{
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }
    
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>        
            <h3>cart: {cart.length} </h3>
            <div className="bottles-container">
                    
            {
                bottles.map(bottle => <Bottle 
                key={bottle.id}
                bottle={bottle}
                handelAddToCart={handelAddToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;