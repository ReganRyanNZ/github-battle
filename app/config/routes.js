var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.router;
var Route = ReactRouter.route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
    <Router>
        <Route path='/' component={Main}>
            <Route path='/home' component={Home} />
        </Route>
    </Router>
);

module.exports routes;