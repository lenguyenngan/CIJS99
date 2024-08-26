// bài 1
const tinhBP = (number) => {
  return number * number;
};
console.log(tinhBP(4));
console.log(tinhBP(10));
console.log(tinhBP(30));

{
  // bài 2
  const containsKeyword = (str, keyword) => str.includes(keyword);

  const string = "Hello world!";
  const keyword = "world";
  const result = containsKeyword(string, keyword);

  console.log(result); // Output: true
}

{
  // bài 3
  const numbers = [1, 2, 3, 4];
  const doubledNumbers = numbers.map((number) => number * 2);

  console.log(doubledNumbers);
}

// bài 4
const addPrefix = (arr, prefix) => arr.map((element) => prefix + element);

const strings = ["one", "two", "three"];
const prefix = "number: ";
const result = addPrefix(strings, prefix);

console.log(result);

// bài 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getOddNumbers = numbers.filter((numbers) => numbers % 2 !== 0);
console.log(getOddNumbers);

// cách 2
// const getOddNumbers = arr => arr.filter(number => number % 2 !== 0);
// const numbers = [1, 2, 3, 4, 5, 6];
// const oddNumbers = getOddNumbers(numbers);
// console.log(oddNumbers); // Output: [1, 3, 5]

// bài 6
const employees = [
  { id: 1, name: "John", workingDays: 22 },
  { id: 2, name: "Jane", workingDays: 20 },
  { id: 3, name: "Mark", workingDays: 25 },
];

const totalWorkingDays = employees.reduce(
  (total, employee) => total + employee.workingDays,
  0
);

console.log(totalWorkingDays); // Output: 67

// bài 7
{
  const employees = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
  ];
  // filer
  const maxsalary = Math.max(...employees.map((employees) => employees.salary));
  const hightemployees = employees.filter(
    (employees) => employees.salary === maxsalary
  );
  console.log(hightemployees[0]);
}
