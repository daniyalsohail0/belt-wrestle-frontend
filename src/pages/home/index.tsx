import React from "react";
import Layout from "../../layout";
import Banner from "../../component/pages/Banner/Banner";
import EliteSection from "../../component/pages/EliteSection/EliteSection";
import CustomBeltBanner from "../../component/pages/CustomBeltBanner/CustomBeltBanner";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <EliteSection />
      <CustomBeltBanner />
    </Layout>
  );
};

export default Home;
