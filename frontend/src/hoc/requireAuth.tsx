import { ComponentType } from "react";
import { useSelector } from "react-redux";
import { AuthState } from "../types/types";
import Home from "../components/Home";

type RequireAuthProps = {
  component: ComponentType<any>;
};

const RequireAuth = (props: RequireAuthProps) => {
  const isLoggedIn = useSelector(
    (state: { auth: AuthState }) => state.auth.isLoggedIn
  );

  const { component: Component, ...rest } = props;

  return isLoggedIn ? <Component {...rest} /> : <Home />;
};

export default RequireAuth;
