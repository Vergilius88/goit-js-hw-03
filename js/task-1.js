"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

console.log(user);

user.mood = "happy";
console.log(user);

console.log(user.hobby);

user.hobby = "skydiving";
console.log(user.hobby);

console.log(user.premium);
user.premium = false;
console.log(user.premium);

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}:${user[key]}`);
}
