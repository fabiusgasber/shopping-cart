import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css"
import PropTypes from "prop-types";

const ProductCard = ({ style, url, alt, caption, to, item }) => {

    return (
        <figure className={style ? style : styles.figure} tabIndex={1}>
            {
                to ?
                <Link to={to} state={ {item: item} } className={styles.link} aria-label={item.title}>
                <img className={styles.image} src={url} alt={alt}/>
            </Link> 
            :
            <img className={styles.image} src={url} alt={alt}/>
            }
        { caption && <figcaption className={styles.figcaption} aria-hidden>
                <p id={styles.title}>{caption?.text}</p>
                <p className={styles.price}>{caption?.price} $</p>
            </figcaption>
        }
        </figure>
    );
}

ProductCard.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    caption: PropTypes.shape({
        text: PropTypes.string,
        price: PropTypes.string,
    })
};

export default ProductCard;