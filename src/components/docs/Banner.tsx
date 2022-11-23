import styles from "../../../public/styles/docs/Banner.module.css"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <h1>Mixpanel</h1>
      </div>
      <div>
        <h1>Mixpanel Connector</h1>
        <h2>Instantly connect and snyc your Mixpanel data</h2>
        <p>
          This page contains the setup guide and reference information for the
          Mixpanel connector. The MixPanel Connector pulls the following data
          entities from MixPanel: Export (Events), Engage (People/Users),
          Funnels, Annotations, Cohorts, Cohort Members, Revenue.
        </p>
      </div>
    </div>
  );
}
