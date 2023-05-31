import s from './Modal.module.css'
import {createPortal} from "react-dom";

const Backdrop = (props) => {
    return <div className={s.backdrop}></div>
}
/*const ModalWindow = (props) => {
    return (
        <div className={s.modal}>
            <div>
                {props.children}
            </div>
        </div>)
}
*/
const Modal = (props) => {
    return (
        <>
            {createPortal(<Backdrop/>, document.body)}
            {createPortal(
                <div className={s.modal}>{props.children}</div>,
                document.body, null)}

        </>
    )
}
export default Modal