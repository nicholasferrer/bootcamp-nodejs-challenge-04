"use strict";

class User {
  get validadeAll() {
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
