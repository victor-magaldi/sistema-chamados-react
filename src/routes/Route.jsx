import { Route, Redirect } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isprivate,
  ...rest
}) {
  console.log(Component, isprivate, rest);
  const loading = false;
  const signed = false;
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
