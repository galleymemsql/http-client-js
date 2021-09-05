/**
 * SingleStore HTTP API Spec
 * This API allows you to execute SQL statements against a SingleStore database.  It supports all statements that can be run in a direct database connection, and uses conventional data type conversion.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/SingleStore/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/SingleStore/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SingleStoreClient);
  }
}(this, function(expect, SingleStoreClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SingleStoreClient.ExecInput();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExecInput', function() {
    it('should create an instance of ExecInput', function() {
      // uncomment below and update the code to test ExecInput
      //var instane = new SingleStoreClient.ExecInput();
      //expect(instance).to.be.a(SingleStoreClient.ExecInput);
    });

    it('should have the property sql (base name: "sql")', function() {
      // uncomment below and update the code to test the property sql
      //var instance = new SingleStoreClient.ExecInput();
      //expect(instance).to.be();
    });

    it('should have the property args (base name: "args")', function() {
      // uncomment below and update the code to test the property args
      //var instance = new SingleStoreClient.ExecInput();
      //expect(instance).to.be();
    });

    it('should have the property database (base name: "database")', function() {
      // uncomment below and update the code to test the property database
      //var instance = new SingleStoreClient.ExecInput();
      //expect(instance).to.be();
    });

  });

}));
