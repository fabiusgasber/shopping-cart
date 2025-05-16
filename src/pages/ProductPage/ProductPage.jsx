import { useLocation, useOutletContext } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductPage.module.css"
import ErrorPage from "../ErrorPage/ErrorPage";

const ProductPage = ({ propItem }) => {
    const location =  useLocation()?.state?.item;
    const item = propItem ? propItem : location;
    const addToBag = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    
    if(!item) return <ErrorPage />

    return (
        <>
        <main className={styles.main} aria-live="polite">
        <ProductCard style={styles.figure} url={item.image} alt="product" />
        <section className={styles.section}>
            <article className={styles.productInfo}>
                <div id={styles.itemHeader}>
                <h1>{item.title}</h1>
                <p id={styles.price}>{item.price} $</p>
                </div>
                <p>{item.description}</p>
            </article>
            <form onSubmit={(e) => addToBag(e, item, quantity)} action="" method="get" className={styles.buttonArea}>
                <div id={styles.quantityBtn}>
                    <button name="decrease" aria-label="decrease quantity" id="decrease-btn" type="button" onClick={() => setQuantity((quantity) => quantity > 1 ? quantity - 1 : quantity)}>-</button>
                    <output name="quantity" htmlFor="decrease-btn increase-btn">{quantity}</output>
                    <button name="increase" aria-label="increase quantity" id="increase-btn" type="button" onClick={() => setQuantity((quantity) => quantity < 10 ? quantity + 1 : quantity)}>+</button>
                </div>
                <button type="submit" className="primaryBtn">Add to bag</button>
            </form>
        </section>
        </main>
        </>
    )
}

export default ProductPage;