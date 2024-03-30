import "bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.min.css";
import "./App.css";
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Colors from "./pages/Colors";
import Borders from "./pages/Borders";
import Animations from "./pages/Animations";
import Others from "./pages/Others";
import LoginPg from "./pages/LoginPg";
import ForgotPassPg from "./pages/ForgotPassPg";
import RegisterPg from "./pages/RegisterPg";
import NotFound from "./pages/NotFound";
import BlankPage from "./pages/BlankPage";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/buttons">
          <Layout>
            <Buttons />
          </Layout>
        </Route>
        <Route path="/cards">
          <Layout>
            <Cards />
          </Layout>
        </Route>
        <Route path="/colors">
          <Layout>
            <Colors />
          </Layout>
        </Route>
        <Route path="/borders">
          <Layout>
            <Borders />
          </Layout>
        </Route>
        <Route path="/animations">
          <Layout>
            <Animations />
          </Layout>
        </Route>
        <Route path="/others">
          <Layout>
            <Others />
          </Layout>
        </Route>
        <Route path="/login">
          <LoginPg />
        </Route>
        <Route path="/register">
          <RegisterPg />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassPg />
        </Route>
        <Route path="/not-found">
          <Layout>
            <NotFound />
          </Layout>
        </Route>
        <Route path="/blank-page">
          <Layout>
            <BlankPage />
          </Layout>
        </Route>
        <Route path="/charts">
          <Layout>
            <Charts />
          </Layout>
        </Route>
        <Route path="/tables">
          <Layout>
            <Tables />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
