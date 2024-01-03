import React from "react";
import Layout from "../../layout";
import Banner from "../../component/pages/Banner/Banner";
import EliteSection from "../../component/pages/EliteSection/EliteSection";
import CustomBeltBanner from "../../component/pages/CustomBeltBanner/CustomBeltBanner";
import NFLBelts from "../../component/pages/NFLBelts/NFLBelts";
import BlogSection from "../../component/pages/BlogSection/BlogSection";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <EliteSection />
      <CustomBeltBanner />
      <NFLBelts />
      <BlogSection />
    </Layout>
  );
};

export default Home;
