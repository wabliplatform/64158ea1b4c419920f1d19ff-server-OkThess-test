/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Contact } = require('../models/Contact');

/**
* Creates the data
*
* contact Contact data to be created
* returns contact
* */
const createcontact = ({ contact }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Contact(contact).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* contactId String the Id parameter
* no response value expected for this operation
* */
const deletecontact = ({ contactId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Contact.findOneAndDelete({ _id:contactId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllcontact = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Contact.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* filter String the query based on which the search is performed
* returns Object
* */
const getByParamscontact = ({ filter }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Contact.find(JSON.parse( filter )).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* contactId String the Id parameter
* returns contact
* */
const getcontact = ({ contactId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Contact.findById(contactId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* contactId String the Id parameter
* contact Contact data to be updated (optional)
* returns contact
* */
const updatecontact = ({ contactId, contact }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Contact.findOneAndUpdate({ _id:contactId },contact).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createcontact,
  deletecontact,
  getAllcontact,
  getByParamscontact,
  getcontact,
  updatecontact,
};
