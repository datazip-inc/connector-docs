import styles from '../../../public/styles/docs/SectionDetails.module.css';

type Props = {
  heading?: string;
  title: string;
  p1?: string;
  p2?: string;
  center?: boolean;
};

export default function SectionDetails(props: Props) {
  return (
    <div className={props.center ? `${styles.container} ${styles.center}` : styles.container}>
      {props.heading ? <h1 className={styles.h1}>{props.heading}</h1> : ''}
      <h2 className={styles.h2}>{props.title}</h2>
      {props.p1 ? <p className={styles.p}>{props.p1}</p> : ''}
      {props.p2 ? <p className={styles.p}>{props.p2}</p> : ''}
    </div>
  );
}
