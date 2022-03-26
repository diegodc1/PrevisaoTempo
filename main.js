const button = document.querySelector('search-button')

const apiUrl =
  'https://api.hgbrasil.com/weather?format=json-cors&key=413cf1fc&city_name='

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
    })
    .catch(error => console.error(error))
}

search_button.addEventListener('click', function () {
  getInfos(search.value)
})

function changeImg(code) {
  if (code == 27 || code == 31 || code == 32) {
    weather_img.src = './assets/images/ensolarado.svg'
  } else if (
    code == 9 ||
    code == 11 ||
    code == 12 ||
    code == 40 ||
    code == 45
  ) {
    weather_img.src = './assets/images/chuva-leve.svg'
  } else if (
    code == 0 ||
    code == 1 ||
    code == 2 ||
    code == 3 ||
    code == 4 ||
    code == 14 ||
    code == 21 ||
    code == 37 ||
    code == 38 ||
    code == 39 ||
    code == 47
  ) {
    weather_img.src = './assets/images/tempestade.svg'
  } else if (
    code == 16 ||
    code == 46 ||
    code == 41 ||
    code == 42 ||
    code == 13 ||
    code == 15 ||
    code == 43
  ) {
    weather_img.src = './assets/images/neve.svg'
  } else if (
    code == 19 ||
    code == 20 ||
    code == 22 ||
    code == 23 ||
    code == 24
  ) {
    weather_img.src = './assets/images/ventania'
  } else if (code == 8 || code == 10 || code == 17 || code == 18) {
    weather_img.src = './assets/images/geada.svg'
  } else if (code == 26 || code == 28 || code == 29 || code == 30) {
    weather_img.src = './assets/images/nublado.svg'
  } else if (code == 34 || code == 44) {
    weather_img.src = './assets/images/ensolarado-nuvens.svg'
  } else if (code == 5 || code == 6 || code == 7 || code == 35) {
    weather_img.src = './assets/images/chuva-granizo.svg'
  } else if (code == 25) {
    weather_img.src = './assets/images/tempo-frio.svg'
  } else if (code == 33) {
    weather_img.src = './assets/images/estrelado.svg'
  } else if (code == 36) {
    weather_img.src = './assets/images/ar-quente.svg'
  } else {
    weather_img.src = './assets/images/ensolarado-nuvens.svg'
  }

  console.log(code + 'oi')
}
