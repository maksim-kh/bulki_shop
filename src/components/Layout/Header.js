import bakeImg from '../../assets/main_image.jpg'
import styles from '../Layout/Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h1>Булошная</h1>
                    <HeaderCartButton openCart={props.openCart}/>
                </header>
            </div>

            <div className={styles.mainImageContainer}>
                <div className={styles.mainImage}>
                    <img src={bakeImg} alt="main img bulki"/>
                </div>
            </div>

        </>
    )
}

export default Header