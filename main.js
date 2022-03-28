const button = document.querySelector('search-button')
const input = document.getElementById('search')
let cityInitial = 'São Paulo'
const apiUrl =
  'https://api.hgbrasil.com/weather?format=json-cors&key=af2a2efb&city_name='

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

//
//
// Princial Informations
function getTodayInfos(city) {
  axios
    .get(apiUrl + city)
    .then(response => {
      const results = response.data.results
      changePricipalInfos(results)
      changeImg(Number(results.condition_code))
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
}

//
//
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

//
//
// Change image of information boxes
function changeTodayImg(condition) {
  if (condition == 'rain') {
    today_img.src = '/assets/images/chuva-leve.svg'
  } else if (condition == 'storm') {
    today_img.src = '/assets/images/tempestade.svg'
  } else if (condition == 'clear_day') {
    today_img.src = '/assets/images/ensolarado.svg'
  } else if (
    condition == 'cloud' ||
    condition == 'cloudly_day' ||
    condition == 'cloudly_night'
  ) {
    today_img.src = '/assets/images/nublado.svg'
  } else if (condition == 'snow') {
    today_img.src = '/assets/images/neve.svg'
  } else if (condition == 'hail') {
    today_img.src = '/assets/images/chuva-granizo.svg'
  } else if (condition == 'clear_night') {
    today_img.src = '/assets/images/noite-limpa.svg'
  } else {
    today_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

function changeSecondImg(condition) {
  if (condition == 'rain') {
    second_img.src = '/assets/images/chuva-leve.svg'
  } else if (condition == 'storm') {
    second_img.src = '/assets/images/tempestade.svg'
  } else if (condition == 'clear_day') {
    second_img.src = '/assets/images/ensolarado.svg'
  } else if (
    condition == 'cloud' ||
    condition == 'cloudly_day' ||
    condition == 'cloudly_night'
  ) {
    second_img.src = '/assets/images/nublado.svg'
  } else if (condition == 'snow') {
    second_img.src = '/assets/images/neve.svg'
  } else if (condition == 'hail') {
    second_img.src = '/assets/images/chuva-granizo.svg'
  } else if (condition == 'clear_night') {
    second_img.src = '/assets/images/noite-limpa.svg'
  } else {
    second_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

function changeThirdImg(condition) {
  if (condition == 'rain') {
    third_img.src = '/assets/images/chuva-leve.svg'
  } else if (condition == 'storm') {
    third_img.src = '/assets/images/tempestade.svg'
  } else if (condition == 'clear_day') {
    third_img.src = '/assets/images/ensolarado.svg'
  } else if (
    condition == 'cloud' ||
    condition == 'cloudly_day' ||
    condition == 'cloudly_night'
  ) {
    third_img.src = '/assets/images/nublado.svg'
  } else if (condition == 'snow') {
    third_img.src = '/assets/images/neve.svg'
  } else if (condition == 'hail') {
    third_img.src = '/assets/images/chuva-granizo.svg'
  } else if (condition == 'clear_night') {
    third_img.src = '/assets/images/noite-limpa.svg'
  } else {
    third_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

function changeFourthImg(condition) {
  if (condition == 'rain') {
    fourth_img.src = '/assets/images/chuva-leve.svg'
  } else if (condition == 'storm') {
    fourth_img.src = '/assets/images/tempestade.svg'
  } else if (condition == 'clear_day') {
    fourth_img.src = '/assets/images/ensolarado.svg'
  } else if (
    condition == 'cloud' ||
    condition == 'cloudly_day' ||
    condition == 'cloudly_night'
  ) {
    fourth_img.src = '/assets/images/nublado.svg'
  } else if (condition == 'snow') {
    fourth_img.src = '/assets/images/neve.svg'
  } else if (condition == 'hail') {
    fourth_img.src = '/assets/images/chuva-granizo.svg'
  } else if (condition == 'clear_night') {
    fourth_img.src = '/assets/images/noite-limpa.svg'
  } else {
    fourth_img.src = '/assets/images/ensolarado-nuvens.svg'
  }
}

getTodayInfos(cityInitial)
getNextDaysInfos(cityInitial)
