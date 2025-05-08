const Shop = () => {

    return (
        <main className={styles.main}>
                <h1>Our collection</h1>
                <section className={styles.productSection}>
                { items.map((item) => (
                    <ProductCard item={item} to={`/product/${item.id}`} key={item.id} url={item.image} alt={item.title} caption={{ text: item.title, price: item.price }} />
                )) }
                </section>
        </main>
        )
    ;
}

export default Shop;