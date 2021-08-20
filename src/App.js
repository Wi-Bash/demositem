import React from 'react';
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
import	Home from '../src/Pages/Home';
import  NotFound  from '../src/Pages/NotFound';
import About from './Pages/About';
import Maville from './Pages/Maville';
import Servicepopulation from './Pages/Servicepopulation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/maville" component={Maville} />
        <Route path="/servicepopulation" component={Servicepopulation} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
