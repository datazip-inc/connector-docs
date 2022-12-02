import styles from "../../../public/styles/docs/Card.module.css"

type Props = {
  title: string,
  info: string
}

export default function Card(props: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>{props.title}</h1>
      <p className={styles.p}>
        {props.info}
      </p>
    </div>
  );
}
