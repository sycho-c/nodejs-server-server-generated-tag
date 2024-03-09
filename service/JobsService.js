'use strict';


/**
 * Create Job
 *
 * body Job  (optional)
 * no response value expected for this operation
 **/
exports.createJob = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Job Application
 *
 * body JobApplication  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.createJobApplication = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete Job
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * List All Jobs
 *
 * returns inline_response_200
 **/
exports.listAllJobs = function() {
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
 * Modify Job Application
 *
 * body JobApplication Update the application details (optional)
 * id Integer 
 * returns JobApplication
 **/
exports.modifyJobApplicationWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 6,
  "job_id" : 1,
  "id" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify Job
 *
 * body Job  (optional)
 * id Integer 
 * returns Job
 **/
exports.modifyJobWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List Applications For Job
 *
 * id Integer 
 * returns inline_response_200_1
 **/
exports.viewApplicationsForJob = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "user_id" : 6,
    "job_id" : 1,
    "id" : 0,
    "status" : "status"
  }, {
    "user_id" : 6,
    "job_id" : 1,
    "id" : 0,
    "status" : "status"
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
 * View Job
 *
 * id Integer 
 * returns Job
 **/
exports.viewJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

