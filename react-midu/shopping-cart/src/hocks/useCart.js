import { useContext } from "react";
import { CartContext } from '../Components/context/cart.jsx'

export const useCart = () =>{
    const context = useContext(CartContext)
//Buena práctica revisar si es undefined el contexto
    if (context === undefined){
        throw new Error('useCart must be used within a cart provider')
    }
    return context
}