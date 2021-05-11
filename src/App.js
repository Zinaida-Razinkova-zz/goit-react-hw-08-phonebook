import { connect } from "react-redux";
import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router-dom";
import AppBar from "./components/UserMenu/AppBar";
import authOperations from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import styles from "./";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "home-page" */)
);
const RegisterView = lazy(() =>
  import("./views/RegisterView" /* webpackChunkName: "home-page" */)
);
const LoginView = lazy(() =>
  import("./views/LoginView" /* webpackChunkName: "home-page" */)
);
const ContactsView = lazy(() =>
  import("./views/ContactsView" /* webpackChunkName: "home-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <>
        <div>
          <AppBar />
          <Suspense fallback={<p>Загружаем...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contacts"
                component={RegisterView}
              />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginView}
              />

              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={ContactsView}
              />
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
