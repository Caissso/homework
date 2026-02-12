// Задача 1
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    city: "New York"
};

console.log("Задача 1:");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Occupation:", person.occupation);
console.log("City:", person.city);
console.log("\n");

// Задача 2
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log("Задача 2:");
console.log("Is {} empty?", isEmpty({}));
console.log("Is {a: 1} empty?", isEmpty({ a: 1 }));
console.log("\n");

// Задача 3
const task = {
    title: "Learn JavaScript",
    description: "Study objects and functions",
    isCompleted: false
};

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
}

const modifiedTask = cloneAndModify(task, { isCompleted: true, dueDate: "2023-12-31" });

console.log("Задача 3:");
for (const key in modifiedTask) {
    console.log(`${key}: ${modifiedTask[key]}`);
}
console.log("\n");

// Задача 4
function callAllMethods(obj) {
    console.log("Задача 4:");
    for (const key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(`Calling method: ${key}`);
            obj[key]();
        }
    }
}

const myObject = {
    method1: function() {
        console.log("Метод 1 вызван!");
    },
    method2: () => {
        console.log("Метод 2 вызван!");
    },
    property: "Это не метод"
};

callAllMethods(myObject);