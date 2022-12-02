import styles from "../../../public/styles/docs/Footer.module.css"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.h3}>
          Spend more time on data analytics and less time searching for data
        </h3>
        <h4 className={styles.h4}>Start your free trial today.</h4>
      </div>
      <div>
        <p className={styles.b1}>{`Get started ->`}</p>
        <p className={styles.b2}>Book a Demo</p>
      </div>
    </div>
  );
}
