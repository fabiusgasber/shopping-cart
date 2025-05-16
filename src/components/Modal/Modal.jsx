import { useState } from "react";
import styles from "./Modal.module.css"
import PropTypes from "prop-types";

const Modal = ({ title = "Product List", initialShow = false, items=[], handleChange, deleteItem }) => {

    const [open, setOpen] = useState(initialShow);

    const total = items.reduce((prev, curr) => prev + curr.price * curr.quantity, 0).toFixed(2);

    return (
        <>
{
           open && 
           <>
           <div aria-hidden="true" className={styles.backdrop} onClick={() => setOpen(false)}></div>
           <dialog open className={styles.dialog}>
            <button autoFocus aria-label="Close modal" onClick={() => setOpen(false)}>X</button>
            <table className={styles.table}>
                <caption>{title}</caption>
                <tbody>
             {items && items.map(item => 
                (
                    <tr key={item.id} tabIndex={1}>
                        <td><img src={item.image} alt="product"/></td>
                        <td id={styles.title}>{item.title}</td>
                        <td className={styles.price}>{item.price} $</td>
                        <td>
                            <select onChange={(e) => handleChange(e, item, parseInt(e.target.value))} defaultValue={item.quantity}>
                            { Array.from({length: 10}, (_, i) => {
                               return <option key={i}>{i + 1}</option>
                            }) 
                            }
                            </select>
                        </td>
                        <td><button aria-label="remove button" className={styles.removeBtn} type="button" onClick={() => deleteItem(item)}>X</button></td>
                    </tr>
                )
            ) }
                </tbody>
                <tfoot>
                <tr>
                    <th>Total:</th>
                    <td className={styles.price}>{total} $</td>
                </tr>
                </tfoot>
            </table>
            </dialog> 
            </>
}           
        <button className={styles.modalBtn} onClick={() => setOpen(true)} aria-live="polite" aria-atomic>
           <img className="icons" src="/shopping-bag.png" alt="shopping cart"/>
           {items.length > 0 && <p id={styles.cartItemsNumber}>{items.reduce((prev, curr) => prev + curr.quantity, 0)}</p> }
        </button>
        </>
          
    )
}

Modal.propTypes = {
    title: PropTypes.string,
    elem: PropTypes.element,
    initialShow: PropTypes.bool,
    items: PropTypes.array,
    handleChange: PropTypes.func,
    deleteItem: PropTypes.func
}

export default Modal;