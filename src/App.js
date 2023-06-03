import './App.css';
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartContextProvider from "./store/CartContextProvider";


function App() {
    const [isOpen, setIsOpen] = useState(false)

    const openCart = () => {
        setIsOpen(true)
    }
    const hideCart = () => {
        setIsOpen(false)
    }

    return (
        <CartContextProvider>
            <div className="App">
                {isOpen && <Cart hideCart={hideCart}/>}
                <Header openCart={openCart}/>
                <main>
                    <Meals/>
                </main>

            </div>
        </CartContextProvider>

    );
}

export default App;
