const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}

export const getWeather = (location) => fetch(`https://weatherdbi.herokuapp.com/data/weather/${location}`, options)