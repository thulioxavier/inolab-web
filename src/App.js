import React, { Fragment, StyleSheet } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { Container, DashboardHeader } from "./components";
import { appRoutes as AppRoutes} from "./routes/router";

export const App = () => {

  return (
    <Fragment>
      <Router>
        <AppRoutes />
      </Router>
    </Fragment>
  );
}
