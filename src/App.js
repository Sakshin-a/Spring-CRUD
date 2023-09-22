import logo from "./logo.svg";
import "./App.css";
import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import CreateUserComponent from "./components/CreateUserComponent";
import UpdateUserComponent from "./components/UpdateUserComponent";


function App() {
  return (
    <>
      <Router>
        <HeaderComponent />

        <div className="container">
          <Switch>
            <Route path='/' exact component={ListUserComponent} />
            <Route path='/pets' component={ListUserComponent} />
            <Route path='/add-user' component={CreateUserComponent} />
            <Route path='/update-user/:id' component={UpdateUserComponent} />
            <Route path='/delete-user/:id' component={ListUserComponent} />
            <ListUserComponent />
          </Switch>
        </div>

        <FooterComponent />
      </Router>
    </>
  );
}

export default App;
