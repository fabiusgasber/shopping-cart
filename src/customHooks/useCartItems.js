import { useState } from "react";

const useCartItems = () => {
        const [cartItems, setCartItems] = useState([]);
            
        const addToBag = (e, item, quantity) => {
            if(e) e.preventDefault();
            const duplicate = cartItems.filter((elem) => (elem.id === item.id));
            duplicate.length ?
            setCartItems(cartItems.map((elem) => elem.id === item.id ? { ...item, quantity: quantity } : elem)) 
            : 
            setCartItems([...cartItems, { ...item, quantity: quantity }]);
        }

        const deleteItem = (item) => {
            setCartItems(cartItems.filter(elem => elem.id !== item.id));
        }
    
    return { cartItems, addToBag, deleteItem }
    
}

export default useCartItems;