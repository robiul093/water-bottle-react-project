import './Bottle.css'
const Bottle = ({bottle ,handelAddToCart}) => {
    console.log(bottle)
    const {name, price, id, img} = bottle
    return (
        <div className='bottle-container'>
            <h3>Bottle: {name}</h3>
            <img src= {img} alt="" />
            <p>price: {price} </p>
            <button onClick={() =>handelAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;