import styles from "../../../public/styles/docs/Section.module.css"

export default function Section() {
    return(
      <div className={styles.menu}>
        <div className={styles.container}>
          <h2 className={styles.h2}>Overview</h2>
        </div>
        <div className={styles.container}>
          <h2 className={styles.h2}>How to Connect</h2>
        </div>
        <div className={styles.container}>
          <h2 className={styles.h2}>Data Streams</h2>
        </div>
        <div className={styles.container}>
          <h2 className={styles.h2}>FAQs</h2>
        </div>
      </div>
    )
}