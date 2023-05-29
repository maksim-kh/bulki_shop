import bakeImg from '../../assets/main_image.jpg'
import styles from '../Layout/Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h1>Bylki</h1>
                    <HeaderCartButton/>
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