import styles from './MialItem.module.css'

const MialItem = (props)=>{
    return (
     <li className={styles.container}>
         <div className={styles.meal}>
             <h3>{props.name}</h3>
             <div className={styles.description}>{props.description}</div>
             <div className={styles.price}>{props.price}</div>
         </div>
         <div>

         </div>
     </li>
    )
}
export default MialItem
