// Initialize Map
const map = L.map('map').setView([20.5937, 78.9629], 5); // Center of India

// Add Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Sample Safety Data
const safetyData = [
    { name: "Mumbai", lat: 19.0760, lng: 72.8777, risk: "high" },
    { name: "Delhi", lat: 28.6139, lng: 77.2090, risk: "medium" },
    { name: "Jaipur", lat: 26.9124, lng: 75.7873, risk: "low" },
    { name: "Bengaluru", lat: 12.9716, lng: 77.5946, risk: "low" },
    { name: "Kolkata", lat: 22.5726, lng: 88.3639, risk: "medium" }
];

// Marker Colors
const riskColors = {
    low: "green",
    medium: "orange",
    high: "red"
};

// Function to add markers
let markers = [];

function addMarkers(filter = "all") {
    // Remove existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    safetyData.forEach(place => {
        if(filter === "all" || place.risk === filter){
            const marker = L.circleMarker([place.lat, place.lng], {
                radius: 12,
                fillColor: riskColors[place.risk],
                color: "#000",
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            }).addTo(map);

            marker.bindPopup(`<b>${place.name}</b><br>Risk Level: ${place.risk}`);
            markers.push(marker);
        }
    });
}

// Initial markers
addMarkers();

// Filter Change Event
document.getElementById('riskFilter').addEventListener('change', (e) => {
    addMarkers(e.target.value);
});

// Report Incident Button
document.getElementById('reportBtn').addEventListener('click', () => {
    alert("Redirecting to Report Incident Page!");
    window.location.href = "community.html"; // Can be customized
});
