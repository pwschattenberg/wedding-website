function initMap() {
    var location = {lat: 29.942795914248258, lon: -98.10305948964346};
    // Obtain OpenStreetMap tile layer (consider using a library like Leaflet)
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    var osmTileLayer = L.tileLayer(osmUrl, {attribution: osmAttrib});

    // Create map instance using Leaflet (consider Leaflet.js or other libraries)
    var map = L.map('map-canvas', { scrollWheelZoom: false }).setView(location, 15); // Center & zoom
    map.addLayer(osmTileLayer); // Add OpenStreetMap tiles

    // Create a marker using a library like Leaflet.markercluster
    // (consider alternatives for performance in large datasets)
    var marker = L.marker(location).addTo(map);
}