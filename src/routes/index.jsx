import { Switch } from "react-router-dom";
import Route from "./Route";

import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Signin}></Route>
      <Route exact path="/register" component={Signup}></Route>
    </Switch>
  );
}
