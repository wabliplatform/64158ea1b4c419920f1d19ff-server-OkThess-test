/**
 * The ContactController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ContactService');
const createcontact = async (request, response) => {
  await Controller.handleRequest(request, response, service.createcontact);
};

const deletecontact = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletecontact);
};

const getAllcontact = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllcontact);
};

const getByParamscontact = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamscontact);
};

const getcontact = async (request, response) => {
  await Controller.handleRequest(request, response, service.getcontact);
};

const updatecontact = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatecontact);
};


module.exports = {
  createcontact,
  deletecontact,
  getAllcontact,
  getByParamscontact,
  getcontact,
  updatecontact,
};
