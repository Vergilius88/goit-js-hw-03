"use strict";

const findBestEmployee = function (object) {
  const keys = Object.keys(object);
  let value = { name: name, productivity: 0 };
  
  for (const key of keys) {
    if (object[key] > value.productivity) {
      value.productivity = object[key];
      value.name = key;
    }
  }
  return value.name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
