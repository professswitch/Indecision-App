function square(x) {
  return x * x;
}

console.log(square(8));

// const squareArrow = x => {
//   return x * x;
// };

const squareArrow = x => x * x;

console.log(squareArrow(4));

const getFirstName = fullName => {
  return fullName.split(' ')[0];
};

const getFirstName2 = fullName => fullName.split(' ')[0];

console.log(getFirstName('Bruno Tobe'));
console.log(getFirstName2("O'brien Tobe"));
