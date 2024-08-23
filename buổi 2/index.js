{
  const addPrefix = (arr, prefix) => arr.map((item) => prefix + item);
  const strings = ["one", "two", "three"];
  const prefix = "number: ";
  const result = addPrefix(strings, prefix);

  console.log(result);
}

{
  const addPrefix = (arr, prefix) => {
    let changeitem = [];
    for (let i = 0; i < arr.length; ++i) {
      const str = `${prefix} : ${arr[i]}`;
      changeitem.push(str);
    }
    console.log(changeitem);
  };

  const arr = ["one", "two", "three"];
  const prefix = ["number"];
  addPrefix(arr, prefix);
}

{
  const employees = [
    { id: 1, name: "John", workingDays: 22 },
    { id: 2, name: "Jane", workingDays: 20 },
    { id: 3, name: "Mark", workingDays: 25 },
  ];
  const totalWorkingDays = (listemploye) => {
    let sumWorkingDays = 0;
    for (let i = 0; i < listemploye.length; i++) {
      sumWorkingDays += listemploye[i].workingDays;
    }
    console.log(sumWorkingDays);
  };
  totalWorkingDays(employees);
}

let fruits = ["apple", "banana", "cherry", "date"];
fruits.map((item, index) => {
  console.log(`${index + 1}: ${item}`);
  return;
}); // map

let numbers = [10, 20, 30, 40, 50];
// Lọc các số lớn hơn hoặc bằng 30 và tạo một mảng mới
let filteredNumbers = numbers.filter((num) => num >= 30);
console.log(filteredNumbers); // Output: [30, 40, 50]
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

{
  const employees = [
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
  ];
  const maxsalary = (a, b) => {
    return b - a;
  };
  // sort
  const sortsalary = employees.sort((a, b) => maxsalary(a.salary, b.salary));
  if (sortsalary.length > 0) {
    console.log(sortsalary[0]);
  }
}

{
  // { bài 8
  const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2 },
    { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
    { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
  ];

  const maxworking = (a, b) => {
    return b - a;
  };
  const sortworkingdays = employees.sort((a, b) =>
    maxworking(a.workingDays - a.lateDays, b.workingDays - b.lateDays)
  );
  if (sortworkingdays.length > 0) {
    console.log(sortworkingdays[0]);
  }
}

// bài 9
const employees = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];

const groupedEmployees = {};
employees.forEach((employee) => {
  const { name } = employee;
  groupedEmployees[name] = groupedEmployees[name] || [];
  groupedEmployees[name].push(employee);
});
console.log(groupedEmployees);
