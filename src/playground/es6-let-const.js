var nameVar = 'Bruno';
var nameVar = "O'brien";
console.log('nameVar', nameVar);

let nameLet = 'Tobe';
nameLet = 'Ebele';
console.log('nameLet', nameLet);

const nameConst = 'Chinenye';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'John Tobe';
let firstName;
if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
