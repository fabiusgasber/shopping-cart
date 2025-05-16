import { Link } from "react-router-dom"
import styles from "./Home.module.css"

function Home() {

  return (
    <main className={styles.main} aria-live="polite">
      <section className={styles.section}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ducimus tempora expedita consectetur tenetur veritatis eligendi. 
          Veritatis laboriosam quos cum optio?
        </p>
        <button><Link className="primaryBtn" to="/shop">Shop now</Link></button>
      </section>
      <img src="/flagship.jpg" alt=""/>
    </main>
  )
}

export default Home
