import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}><a href="#"><span>#</span>GameRw</a></h1>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#">Home</a></li>
        <li className={styles.navItem}><a href="#">Games</a></li>
        <li className={styles.navItem}><a href="#">Sign In</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;