import Banner from "../../../components/docs/Banner"
import Card from "../../../components/docs/Card"
import Section from "../../../components/docs/Section";
import SectionDetails from "../../../components/docs/SectionDetails";
import SectionHeading from "../../../components/docs/SectionHeading";
import SectionIconInfo from "../../../components/docs/SectionIconInfo";
import UseCases from "../../../components/docs/UseCases";
import Footer from "../../../components/docs/Footer";

export default function Mixpanel() {
  return (
    <>
      {/* Main banner */}
      <Banner />
      {/* Cards - 3x reusable */}
      <Card />
      {/* Other connectors link */}
      <p>Explore more connectors </p>

      {/* Sections */}
      <Section />
      <br />
      {/* Section details */}
      <SectionDetails />
      {/* How it works */}
      <SectionDetails />
      {/* Benefits heading */}
      <SectionHeading />
      <br />
      {/* Use Cases x3*/}
      <UseCases />
      <br />
      {/* All-in-one data stack - section heading*/}
      <SectionHeading />
      {/* Benefits icons x6*/}
      <SectionIconInfo />
      <br />
      {/* Footer */}
      <Footer />
      
      {/* Todo: Make a back to top button component which can be re-used through the project */}
    </>
  );
}
