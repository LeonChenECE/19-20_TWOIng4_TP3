function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // On récupère la météo pour les 3 jours suivants
      apiWeather
      .getThreeDayForecast()
      .then(function(responsebis){
          const list = responsebis.data.list;
          list.forEach(function(element, index)
          {
            if(index!=0){
              const main = (list[index].weather[0].main);
              const description = list[index].weather[0].description;
              const icon= apiWeather.getHTMLElementFromIcon(list[index].weather[0].icon);
              const temp = list[index].temp.day;
              document.getElementById(`day${(index+1)}-forecast-main`).innerHTML = main;
              document.getElementById(`day${index+1}-forecast-more-info`).innerHTML = description;
              document.getElementById(`icon${index+1}-weather-container`).innerHTML = icon;
              document.getElementById(`day${index+1}-forecast-temp`).innerHTML = `${temp}°C`;
            }
          });
      })
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

//la fonction start() avec un nom de ville en entrée
function start(city_input) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(city_input);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      // On récupère la météo pour les 3 jours suivants
      apiWeather
      .getThreeDayForecast()
      .then(function(responsebis){
          const list = responsebis.data.list;
          list.forEach(function(element, index)
          {
            if(index!=0){
              const main = (list[index].weather[0].main);
              const description = list[index].weather[0].description;
              const icon= apiWeather.getHTMLElementFromIcon(list[index].weather[0].icon);
              const temp = list[index].temp.day;
              document.getElementById(`day${(index+1)}-forecast-main`).innerHTML = main;
              document.getElementById(`day${index+1}-forecast-more-info`).innerHTML = description;
              document.getElementById(`icon${index+1}-weather-container`).innerHTML = icon;
              document.getElementById(`day${index+1}-forecast-temp`).innerHTML = `${temp}°C`;
            }
          });
      })
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}