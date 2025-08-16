const socket = io();
const locationInfo = document.getElementById("location-info");
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      locationInfo.innerText = `Your Location: Lat ${latitude.toFixed(
        5
      )}, Lng ${longitude.toFixed(5)}`;
      
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.error(error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    }
  );
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const markers = {};

socket.on("location-recieved", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});
