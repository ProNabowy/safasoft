import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const loadComponent = (importFunc, props = {}) => {
  const Component = lazy(importFunc);
  return <Component {...props} />;
};

const routesData = [

  { path: "/", element: loadComponent(() => import("../pages/Register")) },

];

export default function useHandleRoutes() {
  let routes = useRoutes(routesData);

  return { routes };
}
