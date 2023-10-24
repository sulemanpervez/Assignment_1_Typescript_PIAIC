type Car = {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...args: any[]): Car {
    const car: Car = { manufacturer, model };
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
  