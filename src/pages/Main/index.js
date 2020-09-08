import React from "react";
import Layout from "layout/Layout";
import MainPageContainer from "containers/MainPageContainer";

const Main = props => {
  const { history, location } = props;
  return (
    <Layout history={history} location={location}>
      <MainPageContainer />
    </Layout>
  );
};

export default Main;
