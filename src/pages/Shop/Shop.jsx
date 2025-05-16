import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css"
import useData from "../../customHooks/useData";
import ErrorPage from "../ErrorPage/ErrorPage"


const Shop = () => {

    const { data, error, loading } = useData("https://fakestoreapi.com/products?limit=12");

    if(loading) return <h1>...Loading items</h1>
    if(error) return <ErrorPage />
    return (
        <main className={styles.main} aria-live="polite">
                <h1>Our collection</h1>
                <section className={styles.productSection}>
                { data.map((item) => (
                    <ProductCard item={item} to={`/product/${item.id}`} key={item.id} url={item.image} alt="" caption={{ text: item.title, price: item.price }} />
                )) }
                </section>
        </main>
        )
    ;
}

export default Shop;