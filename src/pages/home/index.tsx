import React from "react";
import Layout from "../../layout";
import Banner from "../../component/pages/Banner/Banner";
import EliteSection from "../../component/pages/EliteSection/EliteSection";
import CustomBeltBanner from "../../component/pages/CustomBeltBanner/CustomBeltBanner";
import NFLBelts from "../../component/pages/NFLBelts/NFLBelts";
import BlogSection from "../../component/pages/BlogSection/BlogSection";
import SubscribeEmail from "../../component/pages/SubscribeEmail/SubscribeEmail";
import CookieModal from "../../component/pages/CookieModal/CookieModal";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <EliteSection />
      <CustomBeltBanner />
      <NFLBelts />
      <BlogSection />
      <SubscribeEmail />
      <CookieModal />
    </Layout>
  );
};

export default Home;
