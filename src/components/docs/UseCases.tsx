import styles from "../../../public/styles/docs/UseCases.module.css"
import SectionIconInfo from "./SectionIconInfo";

export default function UseCases() {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Use Cases</h2>
      <SectionIconInfo icon="/images/docs/use-cases-tile-icon-01.svg" iconName="Puzzle" info="Identify and understand segments of users" link="Read more"/>
      <SectionIconInfo icon="/images/docs/use-cases-tile-icon-02.svg" iconName="Eye" info="Track adoption of product launches" link="Read more"/>
      <SectionIconInfo icon="/images/docs/use-cases-tile-icon-03.svg" iconName="Triangle" info="Analyze your product funnel" link="Read more"/>
    </div>
  );
}
