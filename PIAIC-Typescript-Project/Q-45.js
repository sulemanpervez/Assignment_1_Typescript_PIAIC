"use strict";
function createCar(manufacturer, model, ...args) {
    const car = { manufacturer, model };
    args.forEach((arg, index) => {
        if (index % 2 === 0) {
            const key = arg.toString();
            const value = args[index + 1];
            car[key] = value;
        }
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", "color", "red", "year", 2022);
console.log(myCar);
