import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './components/landing-page/LandingPage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';
import OnboardingPage from './components/dashboard/OnboardingPage';
import CreateAssetPage from './components/dashboard/CreateAssetPage';
import SelectBoxPage from './components/dashboard/SelectBoxPage';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/home" component={LandingPage} />
        <Route path="/onboarding" component={OnboardingPage} />
        <Route path="/boxes" component={SelectBoxPage} />
        <Route path="/assets/create" component={CreateAssetPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
