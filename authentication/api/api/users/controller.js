const router = require('express').Router();
const simpleRouteBuilder = require('../../utilities/routing/simple-route-builder');

// URL Constants
const ACTIVATE_URL  = '/activate';
const DEACTIVATE_URL  = '/deactivate';
const GET_LIST_URL  = '/get-list';
const LOGIN_URL  = '/login';
const REGISTER_URL  = '/register';

//TODO: BL and DAL layers for each routes;
// simpleRouteBuilder.execute(router, ACTIVATE_URL, );

module.exports = router;