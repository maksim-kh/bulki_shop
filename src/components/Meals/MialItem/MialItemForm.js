import styles from './MialItemForm.module.css'
import Input from "../../UI/Input";

const MialItemForm = (props) => {
    return (
        <form className={styles.form}>
            <Input label='Количество' input={{
                id: props.id,
                type: 'number',
                min: 1,
                step: 1,
                defaultValue: 1,
            }}/>
            <button>Добавить</button>
        </form>
    )
}

export default MialItemForm