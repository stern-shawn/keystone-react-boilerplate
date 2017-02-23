import React from 'react';
import { Router, Route } from 'react-router';

// Import components
import App from './App';
import About from './components/About';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

// Establish Routing
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/blog" component={Blog} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
