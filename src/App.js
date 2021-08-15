import React from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import	Home from '../src/Pages/Home';
import  NotFound  from '../src/Pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
