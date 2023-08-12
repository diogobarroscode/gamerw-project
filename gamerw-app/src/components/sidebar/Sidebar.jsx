import { useState } from "react";
import { FiMenu } from 'react-icons/fi'
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        <FiMenu />
      </button>
      {isOpen && <div className={styles.backdrop} onClick={toggleSidebar} />}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleSidebar}>
          ✕
        </button>
        <div className={styles.logo}>
          <h1 className={styles.logoText}><a href="#"><span>#</span>GameRw</a></h1>
        </div>
        <hr />
        {/* Outro conteúdo da sidebar */}
      </div>
    </div>
  );
}

export default Sidebar;