import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Error from './components/ErrorPage';
import NavBar from './components/NavBar';
import Search from './components/Search';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route path="/products">
          <Redirect to="/" />
        </Route>
        <Route path="/search" component={Search} />
        <Route path="/product/:id" component={ProductCard} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};
