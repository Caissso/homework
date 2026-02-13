// Задание 1
const users = [
    { name: 'John', age: 25, isAdmin: false },
    { name: 'Jane', age: 30, isAdmin: true },
    { name: 'Bob', age: 35, isAdmin: false },
    { name: 'Alice', age: 28, isAdmin: true }
];

users.push({ name: 'Charlie', age: 22, isAdmin: false });
users.push({ name: 'Diana', age: 32, isAdmin: true });

// Задание 2
function getUserAverageAge(users) {
    if (users.length === 0) return 0;
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}

// Задание 3
function getAllAdmins(users) {
    return users.filter(user => user.isAdmin);
}

// Задание 4
function first(arr, n) {
    if (n === 0) return [];
    if (n === undefined) return arr[0];
    return arr.slice(0, n);
}