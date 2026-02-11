// Задача 1
function calculateFinalPrice(price, discount, taxRate) {
    const discountedPrice = price - (price * discount / 100);
    const finalPrice = discountedPrice + (discountedPrice * taxRate);
    return finalPrice;
}

// Задача 2
function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

// Задача 3
function getTimeOfDay(hour) {
    if (hour >= 0 && hour <= 5) {
        return "Ночь";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else if (hour >= 18 && hour <= 23) {
        return "Вечер";
    } else {
        return "Некорректное время";
    }
}

// Задача 4
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return "Чётных чисел нет";
}