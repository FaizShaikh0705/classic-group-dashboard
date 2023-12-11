import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import PrivateRoute from './common/guards/PrivateRoute';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from './pages/SignUp/SignUp';
import Blogs from './pages/Blogs/Blogs';
import ContactLeads from './pages/Leads/ContactLeads';
import './App.css';
import CareersLeads from './pages/Leads/CareersLlead';
import FrenchiseLeads from './pages/Leads/FrenchiseLeads';
import CentersLeads from './pages/Leads/CentersLeads';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/blogs" component={Blogs} />
          <PrivateRoute path="/contact-leads" component={ContactLeads} />
          <PrivateRoute path="/careers-leads" component={CareersLeads} />
          <PrivateRoute path="/frenchise-leads" component={FrenchiseLeads} />
          <PrivateRoute path="/centers-leads" component={CentersLeads} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route exact path="*" component={Home} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
