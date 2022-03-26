const button = document.querySelector('search-button')

const apiUrl =
  'https://api.hgbrasil.com/weather?format=json-cors&key=0277e90a&city_name='

search_button.addEventListener('click', function () {
  getInfos(search.value)
})

function getInfos(city) {
  axios
    .get(apiUrl + city)
    .then(response => {
      const results = response.data.results
      city_result.textContent = results.city
      description.textContent = results.description
      temperature.textContent = results.temp + 'º'
      humidity.textContent = results.humidity + '%'
      windSpeedy.textContent = results.wind_speedy
      sunrise.textContent = results.sunrise
      sunset.textContent = results.sunset
      changeImg(Number(results.condition_code))
      console.log(Number(results.condition_code))
    })
    .catch(error => console.error(error))
}

function changeImg(code) {
  if (code === 27 || 31 || 32) {
    weather_img.src = './assets/images/ensolarado.svg'
  } else if (code == 9 || 11 || 12 || 40 || 45) {
    weather_img.src = './assets/images/chuva-leve.svg'
  } else if (
    code == 0 ||
    1 ||
    2 ||
    3 ||
    4 ||
    14 ||
    21 ||
    37 ||
    38 ||
    39 ||
    47
  ) {
    weather_img.src = './assets/images/tempestade.svg'
  } else if (code === 16 || 46 || 41 || 42 || 13 || 15 || 43) {
    weather_img.src = './assets/images/neve.svg'
  } else if (code === 19 || 20 || 22 || 23 || 24) {
    weather_img.src = './assets/images/ventania'
  } else if (code === 8 || 10 || 17 || 18) {
    weather_img.src = './assets/images/geada.svg'
  } else if (code === 26 || 28 || 29 || 30) {
    weather_img.src = './assets/images/nublado.svg'
  } else if (code === 34 || 44) {
    weather_img.src = './assets/images/ensolarado-nuvens.svg'
  } else if (code === 5 || 6 || 7 || 35) {
    weather_img.src = './assets/images/chuva-granizo.svg'
  } else if (code === 25) {
    weather_img.src = './assets/images/tempo-frio.svg'
  } else if (code === 33) {
    weather_img.src = './assets/images/estrelado.svg'
  } else if (code === 36) {
    weather_img.src = './assets/images/ar-quente.svg'
  } else {
    weather_img.src = './assets/images/ensolarado-nuvens.svg'
  }
}
