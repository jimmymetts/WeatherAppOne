class Fetch {
    async getCurrent(input) {
      const myKey = "8f307892df318217ca3702745cf00c43";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=imperial&appid=${myKey}`
      );

      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }

