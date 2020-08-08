import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./App.css";
import Header from "./components/header/header.component";
import Routes from "../src/routes/index";
import { checkUserSession } from "./redux/user/actions";

const App = ({ checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Routes />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(null, mapDispatchToProps)(App);
