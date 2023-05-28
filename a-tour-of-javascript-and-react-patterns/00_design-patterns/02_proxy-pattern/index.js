import { isAllLetters, isValidEmail } from "./validator.js";

const user = {
  username: "dante",
  email: "dante@mail.com",
  age: 30,
};

const proxy = new Proxy(user, {
  get: (target, prop) => {
    // return `${new Date()} | The value of ${prop} is ${target[prop]}`;
    return `${new Date()} | The value of ${prop} is ${Reflect.get(
      target,
      prop
    )}`;
  },

  set: (target, prop, value) => {
    if (prop === "username") {
      if (!isAllLetters(value)) {
        throw new Error("The username property has to be a string");
      }
      if (value.length < 3) {
        throw new Error(
          "The username property has to be at least 3 characters long"
        );
      }
    }

    if (prop === "email" && !isValidEmail(value)) {
      throw new Error("The email is not valid");
    }

    if (prop === "age") {
      if (typeof value !== "number") {
        throw new Error("Age must be a number");
      }
      if (value < 18) {
        throw new Error("You must be at least 18 years old");
      }
    }

    // target[prop] = value;
    // return true;
    return Reflect.set(target, prop, value);
  },
});

try {
  console.log(proxy.username);
  console.log(proxy.email);
  proxy.username = "aaaaa";
  console.log(proxy.age);
  proxy.age = 19;
  console.log(proxy.age);
} catch (error) {
  console.error("Error: ", error.message);
}
