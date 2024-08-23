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
