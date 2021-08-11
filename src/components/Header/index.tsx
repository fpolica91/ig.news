import { GithubButton } from '../GithubButton'

import { ActiveLink } from "../ActiveLink"
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
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>
              Home
            </a>
          </ActiveLink>
          <ActiveLink
            href="/posts"
            prefetch
            activeClassName={styles.active}
          >
            <a>
              Posts
            </a>
          </ActiveLink>
        </nav>
        <GithubButton />
      </div>
    </header>
  )
}