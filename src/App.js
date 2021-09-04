import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import CustomerLogin from "./components/customerlogin";
import DashBoard from "./components/dashboard";
import dashBoard from "./components/dashboard";
import EmployeeLogin from "./components/employeelogin";
import Header from "./components/header/header";
import HisTroy from "./components/history";
import Home from "./components/home";
import PayMent from "./components/payment";
import ProFile from "./components/profile";
import rootReducer from "./store";
const store = createStore(rootReducer)
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Switch>
          <Route path="/customerlogin" component={CustomerLogin}></Route>
          <Route path="/employeelogin" component={EmployeeLogin}></Route>
          <Route path="/dashboard" component={DashBoard}></Route>
          <Route path="/profile" component={ProFile}></Route>
          <Route path="/history" component={HisTroy}></Route>
          <Route path="/payment" component={PayMent}></Route>
          <Route path="/" component={Home} ></Route>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
