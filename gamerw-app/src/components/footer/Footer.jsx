import styles from './Footer.module.css';
import twitterIcon from '../../assets/twitter-icon.svg'
import youtubeIcon from '../../assets/youtube-icon.svg'
import instagramIcon from '../../assets/instagram-icon.svg'

const Footer = () => {
  return (

    <footer className={styles.footer}>
      <div className={styles.logo}>
      <h1 className={styles.logoText}><a href="#"><span>#</span>GameRw</a></h1>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} GameRw
      </div>
      <div className={styles.socialLinks}>
        <a href="#" className={styles.socialLink}>
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="#" className={styles.socialLink}>
          <img src={youtubeIcon} alt="Youtube" />
        </a>
        <a href="#" className={styles.socialLink}>
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </footer>

  )
}

export default Footer;