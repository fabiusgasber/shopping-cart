import styles from "./Footer.module.css"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <p>Created by Fabius Gasber</p>
            <a href="https://github.com/fabiusgasber" target="_blank"><img className={styles.img} alt="github profile (opens in new tab)" src="/github.png"/></a>
        </footer>
    );
}

export default Footer;