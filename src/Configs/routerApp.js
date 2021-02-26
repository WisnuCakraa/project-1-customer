import { ROUTES } from "../Configs";
import dashboard from "../Pages/dashboard";
import galery from "../Pages/Galery";

export const routerApp = [
  {
    path: ROUTES.DASHBOARD(),
    compt: dashboard,
    exact: true,
  },

  {
    path: ROUTES.GALERY(),
    compt: galery,
  },
];
