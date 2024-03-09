import React from "react";
import Layout from "../../layout";
import Banner from "../../component/pages/Banner/Banner";
import SubscribeEmail from "../../component/pages/SubscribeEmail/SubscribeEmail";
import CookieModal from "../../component/pages/CookieModal/CookieModal";
import FeaturedProducts from "../../component/pages/EliteSection/EliteSection";
import CustomizeYourBelt from "../../component/pages/CustomizeYourBelt/CustomizeYourBelt";
import CustomizedProductsSection from "../../component/pages/CustomizedProductsSection/CustomizedProductsSection";
import Categories from "../../component/pages/CategoriesSection/Categories";
import PostBanner from "../../component/pages/PostBanner/PostBanner";

const Home: React.FC = () => {
  return (
    <Layout>
      <Banner />
      <PostBanner />
      <FeaturedProducts />
      <CustomizeYourBelt />
      <CustomizedProductsSection />
      <Categories />
      <SubscribeEmail />
      <CookieModal />
    </Layout>
  );
};

export default Home;
