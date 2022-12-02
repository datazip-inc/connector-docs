import styles from "../../../public/styles/docs/SectionButton.module.css"

type Props = {
  text: string
}

export default function SectionButton(props: Props) {
  return (
    <div className={styles.container}>
        <p className={styles.p}>{props.text}</p>
    </div>
  );
}
