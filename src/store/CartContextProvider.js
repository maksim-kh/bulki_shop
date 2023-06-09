import CartContext from "./cart-context";


const CartContextProvider = (props) => {
    const addItem= (item) => {    }
    const removeItem= (id) => {    }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItem,
        removeItem: removeItem,
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}
export default CartContextProvider