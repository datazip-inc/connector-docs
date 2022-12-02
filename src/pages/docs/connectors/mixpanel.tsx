import Banner from "../../../components/docs/Banner"
import Card from "../../../components/docs/Card"
import SectionMenu from "../../../components/docs/Section";
import SectionDetails from "../../../components/docs/SectionDetails";
import SectionButton from "../../../components/docs/SectionButton";
import SectionIconInfo from "../../../components/docs/SectionIconInfo";
import UseCases from "../../../components/docs/UseCases";
import Footer from "../../../components/docs/Footer";
import Image from "next/image"
import styles from "../../../../public/styles/docs/Mixpanel.module.css"

export default function Mixpanel() {
  return (
    <>
      <Banner />

      <Card title="Connector Tags" info="Business Analysts, Data Analysts, Digital Marketing, Social Media Managers."/>
      <Card title="Setup effort" info="Up to 30 mins or less  (self-service)"/>
      <Card title="API Version" info="verison 2.0"/>

      <p className={styles.explore}>Explore more connectors</p>

      <SectionMenu />
      <br />

      <SectionDetails title="About Mixpanel" p1={`Mixpanel is a business analytics service that tracks user interactions with web and mobile applications. Mixpanel’s analytics enables teams to improve the website visitor experience by providing analytical data—in real time and across devices—on how (and why) visitors engage, convert, and retain.’`}
      p2={`Use Datazip's Mixpanel connector to compile reports about user engagement, segmentation, retention, and so on. For supported streams, check click on ‘Data Streams.`}
      />
      <SectionDetails  heading="How it works" title="Centralize your data in minutes not months" p1={`With just a few clicks, connect your Mixpanel account to any data warehouse of your choice and watch your data sync in real-time. Experience a hassle-free, zero-maintenance, periodic data syncing.`}/>
      
      <SectionButton text="Get started now ->" />
      <div className={styles.benefits_img}>
        <Image src="/images/finance-feature-1.svg" height={200} width={270} alt="Centralize your data"/>
      </div>
      
      <SectionDetails center={true} heading="Benefits of integration" title="Drive meaningful insights from your Mixpanel Data" p1={`Mixpanel is a powerful product analytics software built to track user behaviour with deep insights and take data-backed decisions.`}/>
      <br />
      <UseCases />
      <br />
      
      <SectionDetails center={true} heading="All-in-one data stack" title="Build the whole data story with Datazip" p1={`The only self-serve decision analytics platform, built for the modern data stack that you will need. Your business teams can ask any question, find insights, and drill  down the data for actionable insights`}/>
      
      <SectionIconInfo icon="/images/docs/coin_dollar.svg" iconName="Dollar Sign" title="Competitive Pricing" info="Unbelievable pricing as our infrastructure runs in your environment and we scale only when required."/>
      <SectionIconInfo icon="/images/docs/key-security.svg" iconName="Key" title="Own Your Data" info="Keep all your data within your network and in your cloud provider."/>
      <SectionIconInfo icon="/images/docs/insight.svg" iconName="Insight" title="Instant Insights for all" info="Stop waiting for custom reports from data experts and instantly answer ad-hoc data questions on the fly."/>
      <SectionIconInfo icon="/images/docs/no_code.svg" iconName="Computer" title="No-Code" info="Making self-serve analytics a reality. Now you can answer more questions in less time."/>
      <SectionIconInfo icon="/images/docs/cloud_native.svg" iconName="Cloud" title="Cloud Native & Scalable " info="We manage the versoning, the dependencies and the scaling of your infrastructure so that you can focus on your business."/>
      <SectionIconInfo icon="/images/docs/Bell.svg" iconName="Bell" title="Bye-bye backlog." info="Empower non-technical people to answer their own data questions, while you build a single source of truth."/>
      
      <br />
      <Footer />

      {/* Todo: Make a back to top button component which can be re-used through the project */}
    </>
  );
}
