import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import Main from './components/Main/main';
import Event from './components/Event/event';
import Restaurant from './components/Restaurant/restaurant';
import Flight from './components/Flight/flight';
import Job from './components/Job/job';
import Hotel from './components/Hotel/hotel';
import Layout from './hoc/Layout/layout';

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/event" exact component={Event} />
          <Route path="/restaurant" exact component={Restaurant} />
          <Route path="/flight" exact component={Flight} />
          <Route path="/job" exact component={Job} />
          <Route path="/hotel" exact component={Hotel} />
          <Route path="/" exact component={() =>
              <Redirect to="/event" />
            } />
        </Switch>
      </Layout>

    );
  }
}

export default Routes;
