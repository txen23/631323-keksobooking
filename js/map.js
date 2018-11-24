'use strict';

var HOTEL_TITLE = ['Большая уютная квартира',
  'Маленькая неуютная квартира',
  'Огромный прекрасный дворец',
  'Маленький ужасный дворец',
  'Красивый гостевой домик',
  'Некрасивый негостеприимный домик',
  'Уютное бунгало далеко от моря',
  'Неуютное бунгало по колено в воде'
];

var HOTEL_TYPE = ['palace',
  'flat',
  'house',
  'bungalo'
];
var HOTEL_CHECKIN = ['12:00',
  '13:00',
  '14:00'
];

var HOTEL_CHECKOUT = ['12:00',
  '13:00',
  '14:00'
];

var HOTEL_FEATURES = ['wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

var HOTEL_PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
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
      'features': '',
      'description': '',
      'photos': '',
    },

    'location': {
      'x': '',
      'y': '',
    },
  };

  hotel.author.avatar = 'img/avatars/user0' + (i + 1) + '.png';
  hotel.offer.title = HOTEL_TITLE[i];
  // hotel.offer.address = hotel.location.x + ', ' + hotel.location.y;
  hotel.offer.price = getRandomInt(1000, 100000);
  hotel.offer.type = HOTEL_TYPE[getRandomArray(HOTEL_TYPE)];
  hotel.offer.rooms = getRandomInt(1, 5);
  hotel.offer.checkin = HOTEL_CHECKIN[getRandomArray(HOTEL_CHECKIN)];
  hotel.offer.checkout = HOTEL_CHECKOUT[getRandomArray(HOTEL_CHECKOUT)];
  // hotel.offer.features = HOTEL_FEATURES[getRandomInt(getRandomArray(HOTEL_FEATURES), getRandomArray(HOTEL_FEATURES))];
  // hotel.offer.photos = HOTEL_PHOTOS.sort(HOTEL_PHOTOS);
  hotel.location.y = getRandomInt(130, 630);

  return hotel;
};

var hotels = [];
for (var i = 0; i < 8; i++) {
  hotels[i] = getHotel();
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArray(arr) {
  return Math.floor(Math.random() * arr.length);
}

console.log(getHotel());
console.log(hotels);
