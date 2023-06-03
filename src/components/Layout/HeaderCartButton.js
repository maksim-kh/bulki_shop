import CartIcon from "../Cart/Carticon";
import styles from '../Layout/HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    return (
        <button className={styles.button} onClick={props.openCart}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span>
                Корзина
            </span>
            <span className={styles.badge}>
                    2
             </span>
        </button>
    )
}
export default HeaderCartButton