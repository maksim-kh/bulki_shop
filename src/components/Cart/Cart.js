import s from './Cart.module.css'
import Modal from "../UI/Modal";

const Cart = (props) => {
    const cartItems = (
        <ul className={s['cart-items']}>
            {[{id: 123, name: 'macoka', amount: 2, price: 99}].map((el) => <li>{el.name}</li>)}
        </ul>
    )

    return (
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className={s.total}>
                <span>Итого</span>
                <span>99.88</span>
            </div>
            <div className={s.actions}>
                <button className={s['button--alt']} onClick={props.hideCart}>Close</button>
                <button className={s.button}>Buy</button>
            </div>
        </Modal>
    )
}

export default Cart