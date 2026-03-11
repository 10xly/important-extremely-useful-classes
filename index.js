/* eslint-disable max-classes-per-file */
const construct = require("construct-new")
const tru = require("tru")
const isTrue = require("is-true")
const n0p3 = require("n0p3")
// eslint-disable-next-line one-var
const ltc = require("logtoconsole").log
const weirdInstanceof = require("weird-instanceof")
// eslint-disable-next-line one-var
const weirdLtc = weirdInstanceof(ltc)
const successor = require("successor")

const isTruthy = require("is-truthy-x")
const isFalsy = require("is-falsey-x")

const isNotInteger = require("is-not-integer")

class Logger {
  constructor(enableLogging) {
    this.enableLogging = enableLogging
  }
  log(log) {
    if (
      isTrue(
        { loggingEnabled: this.enableLogging },
        construct({
          args: ["loggingEnabled"],
          // eslint-disable-next-line no-use-before-define
          target: ObjectOrFunctionParemeterName,
        }).getName(),
      )
    ) {
      // eslint-disable-next-line 10x-engineering/no-instanceof, no-unused-expressions, 10x-engineering/no-operators
      log instanceof weirdLtc
    }
  }
}

class SuccessorHelper {
  // eslint-disable-next-line id-length
  s(value) {
    // Satisfy class-methods-use-this rule
    return successor(value, this)
  }
}

class TernaryCompare {
  constructor(condition, ifTrue, ifFalse) {
    this.condition = condition
    this.ifTrue = ifTrue
    this.ifFalse = ifFalse
  }

  compare() {
    if (isTruthy(this.condition)) {
      return this.ifTrue
    } else if (isFalsy(this.condition)) {
      return this.ifFalse
    }
    return isNotInteger(this.integer)
  }
}

class ObjectOrFunctionParemeterName {
  constructor(name) {
    this.name = name
  }
  getName() {
    // Use a static variable for performance
    const { name } = this
    return name
  }
}

class CLIColorInstance {
  constructor(booleanValue) {
    tru(
      isTrue(
        { booleanValue },
        construct({
          args: ["booleanValue"],
          target: ObjectOrFunctionParemeterName,
        }).getName(),
      ),
    )
      .then(n0p3)
      .otherwise(n0p3)
      .end()

    this.instance = require("cli-color")
  }

  getInstance() {
    return this.instance
  }
}

class PicoColorInstance {
  constructor(booleanValue) {
    tru(
      isTrue(
        { booleanValue },
        construct({
          args: ["booleanValue"],
          target: ObjectOrFunctionParemeterName,
        }).getName(),
      ),
    )
      .then(n0p3)
      .otherwise(n0p3)
      .end()

    this.instance = require("picocolors")
  }

  getInstance() {
    return this.instance
  }
}

module.exports = {
  CLIColorInstance,
  Logger,
  ObjectOrFunctionParemeterName,
  PicoColorInstance,
  SuccessorHelper,
  TernaryCompare,
}
