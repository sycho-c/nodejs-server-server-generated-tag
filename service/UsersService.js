'use strict';


/**
 * Delete User
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List Jobs For User
 *
 * id Integer 
 * returns inline_response_200
 **/
exports.listJobsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : 0,
    "dog" : {
      "size" : "size",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
  }, {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : 0,
    "dog" : {
      "size" : "size",
      "name" : "name",
      "age" : 1,
      "breed" : "breed"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify User
 *
 * body User  (optional)
 * id Integer 
 * returns User
 **/
exports.modifyUserWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Register User
 *
 * body User  (optional)
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * View User
 *
 * id Integer 
 * returns User
 **/
exports.viewUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

