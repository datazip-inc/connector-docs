import styles from "../../../public/styles/docs/Banner.module.css"
import Image from "next/image";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <Image className={styles.image} src="/images/logo.svg" alt="Logo" width={50} height={50} />
        <h1 className={styles.h1_img}>Mixpanel</h1>
      </div>
      <div className={styles.section}>
        <h1 className={styles.h1_sec}>Mixpanel Connector</h1>
        <h2 className={styles.h2_sec}>Instantly connect and snyc your Mixpanel data</h2>
        <p className={styles.p_sec}>
          This page contains the setup guide and reference information for the
          Mixpanel connector. The MixPanel Connector pulls the following data
          entities from MixPanel: Export (Events), Engage (People/Users),
          Funnels, Annotations, Cohorts, Cohort Members, Revenue.
        </p>
      </div>
    </div>
  );
}
