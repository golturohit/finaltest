import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import AnalysisAreaHomeOne from "./AnalysisAreaHomeOne";
import BannerHomeOne from "./BannerHomeOne";
import BlogAreaHomeOne from "./BlogAreaHomeOne";
import CaseAreaHomeOne from "./CaseAreaHomeOne";
import ChooseAreaHomeOne from "./ChooseAreaHomeOne";
import ChooseAreaHomeOne1 from "./ChooseAreaHomeOne1";
import ChooseAreaHomeOne2 from "./ChooseAreaHomeOne2";
import ContactAreaHomeOne from "./ContactAreaHomeOne";
import FunfactAreaHomeOne from "./FunfactAreaHomeOne";
import PricingAreaHomeOne from "./PricingAreaHomeOne";
import ProcessAreaHomeOne from "./ProcessAreaHomeOne";
import ServicesAreaHomeOne from "./ServicesAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";

const HomeOne = () => {
  return (
    <Wrapper>
      <ScrollIndicator />
      <HeaderOne />
      <main className="overflow-hidden">
        <BannerHomeOne />
        {/*<ProcessAreaHomeOne />*/}
        {/*<AnalysisAreaHomeOne />*/}
        <ChooseAreaHomeOne />
        <ChooseAreaHomeOne2 />
        <ServicesAreaHomeOne />
        {/*<FunfactAreaHomeOne />*/}
        {/*<PricingAreaHomeOne />*/}
        <CaseAreaHomeOne />
        <ChooseAreaHomeOne1 />
        <BlogAreaHomeOne />
        {/*<ContactAreaHomeOne />*/}
        <TestimonialAreaHomeOne />
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default HomeOne;
