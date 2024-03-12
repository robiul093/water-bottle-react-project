const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLocalStorage = (cart) =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied)
}

const addToLocalStorage = (id) =>{
    const cart = getStoredCart();
    cart.push(id)

    // save to local storage
    saveCartToLocalStorage(cart)
}

export { addToLocalStorage, getStoredCart }