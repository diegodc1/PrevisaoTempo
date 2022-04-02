const apiUrl =
  'https://api.hgbrasil.com/weather?format=json-cors&key=af2a2efb&city_name='
const locationApiUrl =
  'https://api.hgbrasil.com/geoip?format=json-cors&key=af2a2efb&address=remote&precision=false'
const button = document.querySelector('search-button')
const input = document.getElementById('search')
let cityInitial = ''

//Click in the search button
search_button.addEventListener('click', function () {
  getTodayInfos(search.value)
  getNextDaysInfos(search.value)
})

//Enter key
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    getTodayInfos(search.value)
    getNextDaysInfos(search.value)
  }
})

//Get user geolocation
function getUserLocation(cityInitial) {
  axios
    .get(locationApiUrl)
    .then(response => {
      cityInitial = response.data.results.city
      getTodayInfos(cityInitial)
      getNextDaysInfos(cityInitial)
    })
    .catch(error => console.error(error))
}

// Princial Informations
function getTodayInfos(city) {
  axios
    .get(apiUrl + city)
    .then(response => {
      const results = response.data.results
      changePricipalInfos(results)
      changeImg(Number(results.condition_code))
      console.log(results.condition_code)
    })
    .catch(error => console.error(error))
}

function changePricipalInfos(results) {
  city_result.textContent = results.city
  description.textContent = results.description
  temperature.textContent = results.temp + 'º'
  humidity.textContent = results.humidity + '%'
  windSpeedy.textContent = results.wind_speedy
  sunrise.textContent = results.sunrise
  sunset.textContent = results.sunset
}

function changeImg(code) {
  switch (code) {
    case 27:
    case 31:
    case 32:
      weather_img.src = './assets/images/ensolarado.svg'
      break
    case 9:
    case 11:
    case 12:
    case 40:
    case 45:
      weather_img.src = './assets/images/chuva-leve.svg'
      break
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 14:
    case 21:
    case 37:
    case 38:
    case 39:
    case 47:
      weather_img.src = './assets/images/tempestade.svg'
      break
    case 16:
    case 46:
    case 41:
    case 42:
    case 13:
    case 15:
    case 43:
      weather_img.src = './assets/images/neve.svg'
      break
    case 19:
    case 20:
    case 22:
    case 23:
    case 24:
      weather_img.src = './assets/images/ventania'
      break
    case 8:
    case 10:
    case 17:
    case 18:
      weather_img.src = './assets/images/geada.svg'
      break
    case 26:
    case 28:
    case 29:
    case 30:
      weather_img.src = './assets/images/nublado.svg'
      break
    case 34:
    case 44:
      weather_img.src = './assets/images/ensolarado-nuvens.svg'
      break
    case 5:
    case 6:
    case 7:
    case 35:
      weather_img.src = './assets/images/chuva-granizo.svg'
      break
    case 25:
      weather_img.src = './assets/images/tempo-frio.svg'
      break
    case 33:
      weather_img.src = './assets/images/estrelado.svg'
      break
    case 36:
      weather_img.src = './assets/images/ar-quente.svg'
      break
    default:
      weather_img.src = './assets/images/ensolarado-nuvens.svg'
  }
}

//Next days informations
function getNextDaysInfos(city) {
  axios
    .get(apiUrl + city)
    .then(response => {
      const results = response.data.results.forecast
      changeTodayInfos(results)
      changeSecondInfos(results)
      changeThirdInfos(results)
      changeFourthInfos(results)
      changeTodayImg(results[0].condition)
      changeSecondImg(results[1].condition)
      changeThirdImg(results[2].condition)
      changeFourthImg(results[3].condition)
    })
    .catch(error => console.error(error))
}

// Change informations of boxes
function changeTodayInfos(results) {
  today_date.textContent = results[0].date
  today_max.textContent = results[0].max + 'º'
  today_min.textContent = results[0].min + 'º'
  details_today.textContent = results[0].description
}

function changeSecondInfos(results) {
  second_date.textContent = results[1].date
  second_max.textContent = results[1].max + 'º'
  second_min.textContent = results[1].min + 'º'
  details_second.textContent = results[1].description
}

function changeThirdInfos(results) {
  third_day.textContent = results[2].weekday + ' -  '
  third_date.textContent = results[2].date
  third_max.textContent = results[2].max + 'º'
  third_min.textContent = results[2].min + 'º'
  details_third.textContent = results[2].description
}

function changeFourthInfos(results) {
  fourth_day.textContent = results[3].weekday + ' -  '
  fourth_date.textContent = results[3].date
  fourth_max.textContent = results[3].max + 'º'
  fourth_min.textContent = results[3].min + 'º'
  details_fourth.textContent = results[3].description
}

// Change image of information boxes
function changeTodayImg(condition) {
  switch (condition) {
    case 'rain':
      today_img.src = '/assets/images/chuva-leve.svg'
      break
    case 'storm':
      today_img.src = '/assets/images/tempestade.svg'
      break
    case 'clear_day':
      today_img.src = '/assets/images/ensolarado.svg'
      break
    case 'cloud':
    case 'cloudly_day':
    case 'cloudly_night':
      today_img.src = '/assets/images/nublado.svg'
      break
    case 'snow':
      today_img.src = '/assets/images/neve.svg'
      break
    case 'hail':
      today_img.src = '/assets/images/chuva-granizo.svg'
      break
    case 'clear_night':
      today_img.src = '/assets/images/noite-limpa.svg'
      break
    default:
      today_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

function changeSecondImg(condition) {
  switch (condition) {
    case 'rain':
      second_img.src = '/assets/images/chuva-leve.svg'
      break
    case 'storm':
      second_img.src = '/assets/images/tempestade.svg'
      break
    case 'clear_day':
      second_img.src = '/assets/images/ensolarado.svg'
      break
    case 'cloud':
    case 'cloudly_night':
    case 'cloudly_day':
      second_img.src = '/assets/images/nublado.svg'
      break
    case 'snow':
      second_img.src = '/assets/images/neve.svg'
      break
    case 'hail':
      second_img.src = '/assets/images/chuva-granizo.svg'
      break
    case 'clear_night':
      second_img.src = '/assets/images/noite-limpa.svg'
      break
    default:
      second_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

function changeThirdImg(condition) {
  switch (condition) {
    case 'rain':
      third_img.src = '/assets/images/chuva-leve.svg'
      break
    case 'storm':
      third_img.src = '/assets/images/tempestade.svg'
      break
    case 'clear_day':
      third_img.src = '/assets/images/ensolarado.svg'
      break
    case 'cloud':
    case 'cloudly_night':
    case 'cloudly_day':
      third_img.src = '/assets/images/nublado.svg'
      break
    case 'snow':
      third_img.src = '/assets/images/neve.svg'
      break
    case 'hail':
      third_img.src = '/assets/images/chuva-granizo.svg'
      break
    case 'clear_night':
      third_img.src = '/assets/images/noite-limpa.svg'
      break
    default:
      third_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

function changeFourthImg(condition) {
  switch (condition) {
    case 'rain':
      fourth_img.src = '/assets/images/chuva-leve.svg'
      break
    case 'storm':
      fourth_img.src = '/assets/images/tempestade.svg'
      break
    case 'clear_day':
      fourth_img.src = '/assets/images/ensolarado.svg'
      break
    case 'cloud' || 'cloudly_night' || 'cloudly_day':
      fourth_img.src = '/assets/images/nublado.svg'
      break
    case 'snow':
      fourth_img.src = '/assets/images/neve.svg'
      break
    case 'hail':
      fourth_img.src = '/assets/images/chuva-granizo.svg'
      break
    case 'clear_night':
      fourth_img.src = '/assets/images/noite-limpa.svg'
      break
    default:
      fourth_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

getUserLocation(cityInitial)
