import styles from './styles.module.scss'

export function Header() {
  return (
    /**
     * NOTE header content is centered with fixed width
     * and will be contained in the div inside the header
     */
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>
            Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}