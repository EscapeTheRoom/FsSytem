//hello
"use strict";
// Assertions
const { exec } = require("child_process");
const chai = require("chai");
const expect = chai.expect;
const chaiThings = require("chai-things");

describe("`getInitials` utility method", () => {
  it("takes a string and returns a string", () => {
    const initials = utils.getInitials("Corey Greenwald");
    expect(initials).to.be.a("string");
  });

  it("returns the first letter of each word in the input string, capitalized", () => {
    const initialsGHA = utils.getInitials("Grace Hopper Academy");
    expect(initialsGHA).to.equal("GHA");
    const initialsHATEOAS = utils.getInitials(
      "hypermedia as the engine of application state"
    );
    expect(initialsHATEOAS).to.equal("HATEOAS");
  });
});
