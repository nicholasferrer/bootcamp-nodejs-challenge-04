"use strict";

const Antl = use("Antl");

class Project {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      title: "required",
      description: "required"
    };
  }

  get message() {
    return Antl.list("validation");
  }
}

module.exports = Project;
