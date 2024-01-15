import React from "react";
import Layout from "../../layout";
import privacyPolicy from "../../utils/privacyPolicy";

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="md:w-5/6 w-11/12">
          <h1>Privacy Policy</h1>
          <div>
            {privacyPolicy.map((section, index) => (
              <div key={index}>
                <h2 className="py-2 text-2xl">{section.heading}</h2>
                <p className="text-sm">{section.policy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
