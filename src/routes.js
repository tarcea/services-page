import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/main';
import Layout from './hoc/Layout/layout';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Main} />
        </Switch>
      </Layout>

    );
  }
}

export default Routes;
