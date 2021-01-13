// Handles syncing the benches we maintain in state with markers we display on our map
// Maintain references to our markers, we can add/remove them from the map
class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    updateMarkers(benches) {
        benches.map(bench => this.createMarkerFromBench(bench));
    }
    createMarkerFromBench({lat, lng, description}) {
        const myLatlng = new google.maps.LatLng(lat, lng);
        return new google.maps.Marker({
            position: myLatlng,
            map: this.map,
            title: description,
        });
    }
}

export default MarkerManager;