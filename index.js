// homework 1
const getElementByIndex = (array, index) => array[index];

//homework 2

function getWeatherDescription(weatherCode, decode) {
  switch (weatherCode) {
    case 'SQ':
      return decode('SQ') + ' - шквал';
    case 'PO':
      return decode('PO') + ' - пыльный вихрь';
    case 'FC':
      return decode('FC') + ' - торнадо';
    case 'BR':
      return decode('BR') + ' - дымка (видимость от 1 до 9 км)';
    case 'HZ':
      return decode('HZ') + ' - мгла (видимость менее 10 км)';
    case 'FU':
      return decode('FU') + ' - дым (видимость менее 10 км)';
    case 'DS':
      return decode('DS') + ' - пыльная буря (видимость менее 10 км)';
    case 'SS':
      return decode('SS') + ' - песчаная буря (видимость менее 10 км)';
    default:
      return 'Неизвестный код погоды';
  }
}

// вызов функции
function decodeWeatherCode(code) {
    switch (code) {
      case 'SQ':
        return 'Шквал';
      case 'PO':
        return 'Пыльный вихрь';
      case 'FC':
        return 'Торнадо';
      case 'BR':
        return 'Дымка';
      case 'HZ':
        return 'Мгла';
      case 'FU':
        return 'Дым';
      case 'DS':
        return 'Пыльная буря';
      case 'SS':
        return 'Песчаная буря';
      default:
        return 'Неизвестный код погоды';
    }
  }
  
  const weatherCode = 'HZ';
  
  const weatherDescription = getWeatherDescription(weatherCode, decodeWeatherCode);
  
  console.log(weatherDescription);
  