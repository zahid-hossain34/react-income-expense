/* eslint-disable react/prop-types */
// components/Layout.js

import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <section>
        <div className="container">{children}</div>
      </section>
    </div>
  );
};

export default Layout;
