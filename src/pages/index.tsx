
import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>hello world</h1>
      </div>
    </>
  )
}
