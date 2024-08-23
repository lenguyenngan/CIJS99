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
{
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
}

// bài 10
{
  const employees = [
    { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
  ];

  const employeeWithHighestEfficiency = employees.reduce((max, employee) => {
    const efficiency = employee.workingDays / employee.salary;
    const maxEfficiency = max.workingDays / max.salary;
    return efficiency > maxEfficiency ? employee : max;
  });

  console.log(employeeWithHighestEfficiency);
}

// bài 12
{
  const employees = [
    { id: 1, name: "John", workingDays: 20 },
    { id: 2, name: "Jane", workingDays: 22 },
    { id: 3, name: "Mark", workingDays: 20 },
    { id: 4, name: "Sam", workingDays: 24 },
    { id: 5, name: "Lucy", workingDays: 22 },
  ];

  const histogram = employees.reduce((acc, employee) => {
    const days = employee.workingDays;
    if (acc[days]) {
      acc[days]++;
    } else {
      acc[days] = 1;
    }
    return acc;
  }, {});

  console.log(histogram);
}

// bài 13
let tasks = [
  {
    name: "Hoàn thành bài tập JavaScript",
    description: "Làm xong bài tập về Array và Object",
    completed: false,
  },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  {
    name: "Đi mua hàng",
    description: "Mua thêm thức ăn cho tuần",
    completed: false,
  },
];

function addTask(name, description) {
  tasks.push({ name, description, completed: false });
}

function markTaskComplete(taskNames) {
  taskNames.forEach((taskName) => {
    const task = tasks.find((t) => t.name === taskName);
    if (task) {
      task.completed = true;
    }
  });
}

function sortTasks(order = "asc") {
  tasks.sort((a, b) => {
    if (order === "asc") {
      return a.name.localeCompare(b.name);
    } else if (order === "desc") {
      return b.name.localeCompare(a.name);
    }
  });
}

addTask("Tập thể dục", "Chạy bộ 30 phút mỗi ngày");

markTaskComplete(["Đi mua hàng"]);

sortTasks("asc");

sortTasks("desc");

console.log(tasks);
