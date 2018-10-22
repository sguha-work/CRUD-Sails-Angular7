/**
 * Person.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  // Name table in database
  tableName: 'users',
  primaryKey: 'id',
  // attributes: types, validations ans defaults values
  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true,
      size: 100
    },
    address: {
      type: 'string',
      required: true,
      size: 200
    },
    phoneNumber: {
      type: 'string',
      required: true,
      size: 20
    }
  }

};

