import React from "react";
import Layout from "../../layout";
import Banner from "../../component/pages/Banner/Banner";
import BlogSection from "../../component/pages/BlogSection/BlogSection";
import SubscribeEmail from "../../component/pages/SubscribeEmail/SubscribeEmail";
import CookieModal from "../../component/pages/CookieModal/CookieModal";
import FeaturedProducts from "../../component/pages/EliteSection/EliteSection";
import LatestProducts from "../../component/pages/LatestProducts/LatestProducts";
import CustomActionCards from "../../component/pages/CustomActionCards/CustomActionCards";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <FeaturedProducts />
      <LatestProducts />
      <CustomActionCards />
      <BlogSection />
      <SubscribeEmail />
      <CookieModal />
    </Layout>
  );
};

export default Home;
