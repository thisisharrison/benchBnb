// Handles syncing the benches we maintain in state with markers we display on our map
// Maintain references to our markers, we can add/remove them from the map
class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.markers = {};
        // Callback for bench show
        this.handleClick = handleClick;
    }
    updateMarkers(benches) {
        const benchObject = {};
        if (benches.length > 0) {
            benches.forEach(bench => benchObject[bench.id] = bench);
            // Create net new bench for new markers that was not registered before
            benches.filter(bench => !this.markers[bench.id])
                .forEach(newBench => this.createMarkerFromBench(newBench));
        }
        // Remove benches outside of frame
        Object.keys(this.markers)
            .filter(prevIds => !benchObject[prevIds])
            .forEach(benchId => this.removeMarker(benchId))

    }
    createMarkerFromBench({id, lat, lng, description}) {
        const myLatlng = new google.maps.LatLng(lat, lng);
        const marker = new google.maps.Marker({
            position: myLatlng,
            map: this.map,
            title: description,
            benchId: id
        });
        // For bench show
        marker.addListener('click', () => this.handleClick(id))
        this.markers[id] = marker;
    }
    removeMarker(benchId) {
        this.markers[benchId].setMap(null);
        delete this.markers[benchId];
    }
    removeClick() {
        this.handleClick = ()=> {}
    }
}

export default MarkerManager;