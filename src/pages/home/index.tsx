import React from "react";
import Layout from "../../layout";
import Banner from "../../component/pages/Banner/Banner";
import EliteSection from "../../component/pages/EliteSection/EliteSection";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <EliteSection />
    </Layout>
  );
};

export default Home;
