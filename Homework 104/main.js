const me = {
    name: "Caisso",
    age: 25,
    city: "Paris",
    sayHello: function(name) {
        return `Hello ${name}`;
    }
};

const users = [
    { name: "Ali", age: 20, isAdmin: false },
    { name: "Sara", age: 22, isAdmin: true },
    { name: "Omar", age: 19, isAdmin: false },
    { name: "Nina", age: 30, isAdmin: false },
    { name: "Leo", age: 28, isAdmin: true }
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsersCount++;
    }
}

console.log(simpleUsersCount);
