'use strict';

var AVATAR_NUMBER = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
];

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
var getHotel = function () {
  var hotel = {
    'author': {
      'avatar': '',
    },

    'offer': {
      'title': '',
      'address': '',
      'price': '',
      'type': '',
      'rooms': '',
      'guests': '',
      'checkin': '',
      'checkout': '',
      'features': [''],
      'description': '',
      'photos': '',
    },

    'location': {
      'x': '',
      'y': '',
    },
  };

  var hotelFeatures = [];
  for (var j = 0; j < getRandomNumber(0, HOTEL_FEATURES.length); j++) {
    hotelFeatures[j] = HOTEL_FEATURES[getRandomElementArray(HOTEL_FEATURES)];
  }

  hotel.author.avatar = 'img/avatars/user' + AVATAR_NUMBER[i] + '.png';
  hotel.offer.title = HOTEL_TITLE[i];
  hotel.location.y = getRandomNumber(130, 630);
  hotel.offer.address = hotel.location.x + ', ' + hotel.location.y;
  hotel.offer.price = getRandomNumber(1000, 100000);
  hotel.offer.type = HOTEL_TYPE[getRandomElementArray(HOTEL_TYPE)];
  hotel.offer.rooms = getRandomNumber(1, 5);
  hotel.offer.guests = getRandomNumber(0, 10000000);
  hotel.offer.checkin = HOTEL_CHECKIN[getRandomElementArray(HOTEL_CHECKIN)];
  hotel.offer.checkout = HOTEL_CHECKOUT[getRandomElementArray(HOTEL_CHECKOUT)];
  hotel.offer.features = getUniqueArray(hotelFeatures);
  hotel.offer.photos = hotelPhotos;
  return hotel;
};
var hotelPhotos;

var hotels = [];
for (var i = 0; i < 8; i++) {
  hotelPhotos = HOTEL_PHOTOS.sort(compareRandom);
  hotels[i] = getHotel();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomElementArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function getUniqueArray(arr) {
  var obj = {};
  for (var k = 0; k < arr.length; k++) {
    var str = arr[k];
    obj[str] = true;
  }
  return Object.keys(obj);
}

