// Skeleton HTML page
// This will be seperated into components for re-usablity

export default function Mixpanel() {
  return (
    <>
      {/* Main banner */}
      <div>
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
      {/* Cards - 3x reusable */}
      <div>
        <h1>Connector Tags</h1>
        <p>
          Business Analysts, Data Analysts, Digital Marketing, Social Media
          Managers.
        </p>
      </div>
      {/* Other connectors link */}
      <p>Explore more connectors </p>
      {/* Sections */}
      <div>
        <h2>Overview</h2>
        <h2>How to Connect</h2>
        <h2>Data Streams</h2>
        <h2>FAQs</h2>
      </div>
      <br />
      {/* Section details */}
      <div>
        <h2>About Mixpanel</h2>
        <p>
          Mixpanel is a business analytics service that tracks user interactions
          with web and mobile applications. Mixpanel’s analytics enables teams
          to improve the website visitor experience by providing analytical
          data—in real time and across devices—on how (and why) visitors engage,
          convert, and retain.
        </p>
        <p>
          Use Datazip's Mixpanel connector to compile reports about user
          engagement, segmentation, retention, and so on. For supported streams,
          check click on ‘Data Streams.’
        </p>
      </div>
      {/* How it works */}
      <h2>How it works</h2>
      <div>
        <div>
          <h3>Centralize your data in minutes not months</h3>
          <p>
            With just a few clicks, connect your Mixpanel account to any data
            warehouse of your choice and watch your data sync in real-time.
            Experience a hassle-free, zero-maintenance, periodic data syncing.
          </p>
          <button>Get started now</button>
        </div>
        <p>Placeholder for image</p>
      </div>
      {/* Benefits heading */}
      <div>
        <h2>Benifits of integration</h2>
        <h3>Drive meaningful insights from you Mixpanel data</h3>
        <p>
          Mixpanel is a powerful product analytics software built to track user
          behaviour with deep insights and take data-backed decisions.
        </p>
      </div>
      <br />
      {/* Use Cases x3*/}
      <div>
        <div>
          <p>Placeholder for image</p>
          <p>Identify and understand segments of users</p>
          <a>Read More</a>
        </div>
      </div>
      <br />
      {/* All-in-one data stack */}
      <div>
        <h2>All-in-one data stack</h2>
        <h3>Build the whole data story with Datazip</h3>
        <p>
          The only self-serve decision analytics platform, built for the modern
          data stack that you will need. Your business teams can ask any
          question, find insights, and drill down the data for actionable
          insights
        </p>
      </div>
      {/* Benefits icons x6*/}
      <div>
        <div>
          <p>Placeholder for image</p>
          <h3>Competitive Pricing</h3>
          <p>
            Unbelievable pricing as our infrastructure runs in your environment
            and we scale only when required.
          </p>
        </div>
      </div>
      <br />
      {/* Footer */}
      <div>
        <div>
            <h3>Spend more time on data analytics and less time searching for data</h3>
            <h4>Start your free trial today.</h4>
        </div>
        <div>
            <button>Get Started</button>
            <button>Book a Demo</button>
        </div>
      </div>
      {/* Todo: Make a back to top button component which can be re-used through the project */}
    </>
  );
}
