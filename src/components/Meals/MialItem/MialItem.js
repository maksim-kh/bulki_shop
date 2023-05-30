import styles from './MialItem.module.css'
import MialItemForm from "./MialItemForm";

const MialItem = (props)=>{
    return (
     <li >
         <div className={styles.meal}>
             <div >
                 <h3>{props.name}</h3>
                 <div className={styles.description}>{props.description}</div>
                 <div className={styles.price}>{props.price}</div>
             </div>
             <div>
                 <MialItemForm id={props.id}/>
             </div>
         </div>

     </li>
    )
}
export default MialItem
