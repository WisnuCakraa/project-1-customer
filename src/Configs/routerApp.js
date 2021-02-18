import { ROUTES } from "../Configs";
import dashboard from "../Pages/dashboard";

export const routerApp = [
  {
    path: ROUTES.DASHBOARD(),
    compt: dashboard,
    exact: true,
  },
];
