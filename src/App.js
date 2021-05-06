import "./App.css";
import { Route, Switch } from "react-router-dom";
import { HomePage, AuthPage, FourOhFourPage } from "./pages"
import { ProtectedRoute, NavigationBar } from "./components"




function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="container mt-5" >
        <Switch>
          <Route exact path={`/login`} component={AuthPage} />
          <ProtectedRoute exact path={`/`} component={HomePage} />
          <Route path={`/*`} component={FourOhFourPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
