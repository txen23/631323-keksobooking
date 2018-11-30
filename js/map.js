'use strict';

var HOTEL_TITLE = [
  'Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];

var MIN_PRICE = 1000;

var MAX_PRICE = 100000;

var MIN_GUESTS = 1;

var MAX_GUESTS = 6;

var MIN_ROOMS = 1;

var MAX_ROOMS = 5;

var HOTEL_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalo'
];
var HOTEL_CHECKIN = [
  '12:00',
  '13:00',
  '14:00'
];

var HOTEL_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00'
];

var HOTEL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var HOTEL_PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

var Y_AXIS_MIN = 130;

var Y_AXIS_MAX = 630;

function compareRandom() {
  return Math.random() - 0.5;
}

var mixedArray = function (arr) {
  arr.sort(compareRandom);
  return arr;
};

var getHotel = function () {
  var hotelFeatures = [];
  for (var j = 0; j < getRandomNumber(0, HOTEL_FEATURES.length); j++) {
    hotelFeatures[j] = HOTEL_FEATURES[getRandomElementArray(HOTEL_FEATURES)];
  }
  var hotel = {
    'author': {
      'avatar': 'img/avatars/user0' + (i + 1) + '.png',
    },

    'offer': {
      'title': HOTEL_TITLE[i],
      'address': '',
      'price': getRandomNumber(MIN_PRICE, MAX_PRICE),
      'type': HOTEL_TYPE[getRandomElementArray(HOTEL_TYPE)],
      'rooms': getRandomNumber(MIN_ROOMS, MAX_ROOMS),
      'guests': getRandomNumber(MIN_GUESTS, MAX_GUESTS),
      'checkin': HOTEL_CHECKIN[getRandomElementArray(HOTEL_CHECKIN)],
      'checkout': HOTEL_CHECKOUT[getRandomElementArray(HOTEL_CHECKOUT)],
      'features': getUniqueArray(hotelFeatures),
      'description': '',
      'photos': mixedArray(HOTEL_PHOTOS),
    },

    'location': {
      'x': '',
      'y': getRandomNumber(Y_AXIS_MIN, Y_AXIS_MAX),
    },
  };

  hotel.offer.address = hotel.location.x + ', ' + hotel.location.y;
  return hotel;
};

var hotels = [];
for (var i = 0; i < 8; i++) {
  hotels[i] = getHotel();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomElementArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getUniqueArray(arr) {
  var obj = {};
  for (var k = 0; k < arr.length; k++) {
    var str = arr[k];
    obj[str] = true;
  }
  return Object.keys(obj);
}
