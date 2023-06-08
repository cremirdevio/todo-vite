import styles from './Badge.module.css'

export default function Badge() {
  return (
    <div>Badge Component <br /> <button className={`${styles.button}`}>Hello there</button></div>
  )
}
