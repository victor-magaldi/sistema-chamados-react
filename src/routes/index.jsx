import { Switch } from "react-router-dom";
import Route from "./Route";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Signin}></Route>
      <Route exact path="/register" component={Signup}></Route>
      <Route exact path="/dashboard" component={Dashboard} isprivate></Route>
      <Route exact path="/profile" component={Profile} isprivate></Route>
    </Switch>
  );
}
