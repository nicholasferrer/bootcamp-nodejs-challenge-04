"use strict";

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
}

module.exports = User;
