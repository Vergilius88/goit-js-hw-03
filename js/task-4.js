"use strict";

const countTotalSalary = function (object) {
  const keys = Object.keys(object);
  let value = 0;

  for (const key of keys) value += object[key];
  return value;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
);
