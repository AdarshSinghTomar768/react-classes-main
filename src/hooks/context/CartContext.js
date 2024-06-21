import { createContext } from "react";

const CartContext = () => createContext({
    cart: {},
    increseQuantity: () => {},
    decreseQuantity: ()=> {}
})

export default CartContext;