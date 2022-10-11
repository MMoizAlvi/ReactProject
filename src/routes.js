import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductCard from './components/ProductCard/ProductCard';
import Error from './components/ErrorPage/ErrorPage';
import NavBar from './components/NavBar/NavBar';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route path="/products">
          <Redirect to="/" />
        </Route>
        <Route path="/product/:id" component={ProductCard} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};
