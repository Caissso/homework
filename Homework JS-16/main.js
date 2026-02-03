// Задача 1
function checkEvenNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} - чётное`);
    } else {
        console.log(`${number} - нечётное`);
    }
}
checkEvenNumber(4);
checkEvenNumber(7);

// Задача 2
let age = 25;
let discount = age < 18 ? 10 : (age <= 65 ? 20 : 30);
console.log(`Скидка: ${discount}%`);

function getDiscountWithSwitch(age) {
    let discount;
    switch (true) {
        case age < 18:
            discount = 10;
            break;
        case age <= 65:
            discount = 20;
            break;
        default:
            discount = 30;
            break;
    }
    return discount;
}
let discountSwitch = getDiscountWithSwitch(age);
console.log(`Скидка (switch-case): ${discountSwitch}%`);

// Задача 3
function checkAccess() {
    let username = "admin";
    let password = "123456";
    
    if ((username === "admin" || username === "user") && password === "123456") {
        console.log("Доступ разрешен");
    } else {
        console.log("Доступ запрещен");
    }
}
checkAccess();

// Задача 4
function calculateDelivery() {
    let weight = 3.5;
    let deliveryType = "Экспресс";
    
    if (weight <= 0) {
        console.log("Некорректный вес посылки");
        return;
    }
    
    if (deliveryType !== "Стандарт" && deliveryType !== "Экспресс" && deliveryType !== "Премиум") {
        console.log("Неверный тип доставки");
        return;
    }
    
    let baseCost;
    if (weight < 1) {
        baseCost = 5;
    } else if (weight <= 5) {
        baseCost = 10;
    } else {
        baseCost = 15;
    }
    
    let coefficient;
    switch (deliveryType) {
        case "Стандарт":
            coefficient = 1;
            break;
        case "Экспресс":
            coefficient = 1.5;
            break;
        case "Премиум":
            coefficient = 2;
            break;
    }
    
    let totalCost = baseCost * coefficient;
    console.log(`Итоговая стоимость доставки: ${totalCost}$`);
}
calculateDelivery();