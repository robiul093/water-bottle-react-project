import './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle)
    const {name, price, id, img} = bottle
    return (
        <div className='bottle-container'>
            <h3>Bottle: {name}</h3>
            <img src= {img} alt="" />
            <p>price: {price} </p>

        </div>
    );
};

export default Bottle;