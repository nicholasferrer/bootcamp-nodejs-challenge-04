"use strict";

const Antl = use("Antl");

class User {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      username: "required|unique:users",
      email: "require|email|unique:users",
      password: "required|confirmed"
    };
  }

  get message() {
    return Antl.list("validation");
  }
}

module.exports = User;
