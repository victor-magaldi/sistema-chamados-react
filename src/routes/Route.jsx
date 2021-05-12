import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/Auth";

export default function RouteWrapper({
  component: Component,
  isprivate,
  ...rest
}) {
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return <div>carregando...</div>;
  }
  if (!signed && isprivate) {
    return <Redirect to="/"></Redirect>;
  }
  if (signed && !isprivate) {
    return <Redirect to="/dashboard"></Redirect>;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}
