const router = require('express').Router();
const simpleRouteBuilder = require('../../utilities/routing/simple-route-builder');
// Handler Services
const activateHandler = require('./handlers/activate');
const deactivateHandler = require('./handlers/deactivate');
const getListHandler = require('./handlers/get-list');
const loginHandler = require('./handlers/login');
const registerHandler = require('./handlers/register');

// URL Constants
const ACTIVATE_URL  = '/activate';
const DEACTIVATE_URL  = '/deactivate';
const GET_LIST_URL  = '/get-list';
const LOGIN_URL  = '/login';
const REGISTER_URL  = '/register';

simpleRouteBuilder.execute(router, ACTIVATE_URL, activateHandler.execute);
simpleRouteBuilder.execute(router, DEACTIVATE_URL, deactivateHandler.execute);
simpleRouteBuilder.execute(router, GET_LIST_URL, getListHandler.execute);
simpleRouteBuilder.execute(router, LOGIN_URL, loginHandler.execute);
simpleRouteBuilder.execute(router, REGISTER_URL, registerHandler.execute);

module.exports = router;