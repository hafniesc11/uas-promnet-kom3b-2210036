import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListTransactionComponent from './components/ListTransactionComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTransactionComponent from './components/CreateTransactionComponent';
import ViewTransactionComponent from './components/ViewTransactionComponent'

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListTransactionComponent}></Route>
            <Route path="/add/:id" exact component={CreateTransactionComponent}></Route>
            <Route path="/:id" exact component={CreateTransactionComponent}></Route>
            <Route path="/view/:id" exact component={ViewTransactionComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
