import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routerApp } from "./Configs/routerApp";

function App() {
  return (
    <Router>
      <Switch>
        {routerApp.map((item, index) => {
          const { path, compt, exact } = item;
          return (
            <Route key={index} exact={exact} path={path} component={compt} />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
