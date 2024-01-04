const circleArea = (r) => {
  console.log(`r = ${r}, Area = ${Math.round(Math.PI * r ** 2)}`);
};

const circleCircumference = (r) => {
  console.log(`r = ${r}, Circumference = ${2 * Math.PI * r}`);
};

module.exports = {
  circleArea,
  circleCircumference,
};
