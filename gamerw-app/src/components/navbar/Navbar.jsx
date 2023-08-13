import Sidebar from '../sidebar/Sidebar';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Sidebar />
      </div>
      <div className={styles.logo}>
        <h1 className={styles.logoText}><a href="#"><span>#</span>GameRw</a></h1>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#">Home</a></li>
        <li className={styles.navItem}><a href="#">Games</a></li>
        <li className={styles.navItem}>
          <button className={styles.signInButton}>Sign In</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;