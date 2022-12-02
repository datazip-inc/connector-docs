import styles from '../../../public/styles/docs/SectionIconInfo.module.css';
import Image from 'next/image';

type Props = {
  icon: string;
  iconName: string;
  title?: string;
  info: string;
  link?: string;
};

export default function SectionIconInfo(props: Props) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.icon}
        src={props.icon}
        alt={`Section icon - ${props.iconName}`}
        height={85}
        width={85}
      />
      {props.title ? <h3 className={styles.h3}>{props.title}</h3> : ''}
      <p className={styles.p}>{props.info}</p>
      {props.link ? (
      <div className={styles.link}>
        <p>{props.link}</p>
        <Image src="/images/line.svg" height={10} width={20} alt="read more" />
      </div>
      ) : ""}
    </div>
  );
}
