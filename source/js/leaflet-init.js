const BASE_COORDS = {
  lat: 59.968217,
  lng: 30.317300
};

const ZOOM = 20;

// Добавляем карту
const map = L.map('map')
  .setView(BASE_COORDS, ZOOM);

const mapLoaded = map._loaded;

// Добавляем слой с нужной картой
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

// Создаем иконку для метки
const PinIcon = L.icon({
  iconUrl: 'img/map/map-pin.svg',
  iconSize: [38, 50],
  iconAnchor: [25, 52],
});

// Создаем главную метку
const mainPin = L.marker(
  BASE_COORDS,
  {
    draggable: true,
    icon: PinIcon,
  }
);

// Добавляем метку на карту
mainPin
  .addTo(map);
