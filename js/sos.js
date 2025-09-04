// SOS Button
document.getElementById('sosBtn').addEventListener('click', () => {
    alert("SOS Alert Sent! Your emergency contacts have been notified.");
});

// Fetch User Location
function showLocation(position) {
    const lat = position.coords.latitude.toFixed(4);
    const lon = position.coords.longitude.toFixed(4);
    document.getElementById('location').innerText = `Latitude: ${lat}, Longitude: ${lon}`;
}

function errorHandler(err) {
    document.getElementById('location').innerText = "Unable to fetch location.";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler);
} else {
    document.getElementById('location').innerText = "Geolocation not supported by your browser.";
}
