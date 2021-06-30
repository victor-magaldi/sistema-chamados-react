import { Switch } from "react-router-dom";
import RouteCustom from "./Route";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Customers from "../pages/Customers";
import New from "../pages/New";

export default function Router() {
  return (
    <Switch>
      <RouteCustom exact path="/" component={Signin}></RouteCustom>
      <RouteCustom exact path="/register" component={Signup}></RouteCustom>
      <RouteCustom
        exact
        path="/dashboard"
        component={Dashboard}
        isprivate
      ></RouteCustom>
      <RouteCustom
        exact
        path="/profile"
        component={Profile}
        isprivate
      ></RouteCustom>
      <RouteCustom
        exact
        path="/customers"
        component={Customers}
        isprivate
      ></RouteCustom>
      <RouteCustom exact path="/new" component={New} isprivate></RouteCustom>
    </Switch>
  );
}
