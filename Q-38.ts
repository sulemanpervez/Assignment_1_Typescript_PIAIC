function describe_city(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
  }
  
  // Calling the function for different cities
  describe_city("New York");
  describe_city("London", "UK");
  describe_city("Lahore", "Pakistan");
  