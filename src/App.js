import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
