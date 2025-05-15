import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {

    return (
      <main className={styles.main}>
        <img src="/error.png"/>
        <h1>Oh no, this page doesn't exist!</h1>
        <p>You can go back to the home page by clicking <Link to="/">here</Link>!</p>
      </main>  
    )
}

export default ErrorPage;