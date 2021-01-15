import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {
    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // Manager to maintain references to our markers
        this.MarkerManager = new MarkerManager(this.map);
    }

    componentDidUpdate() {
        // search container passes benches to bench map through search
        this.MarkerManager.updateMarkers(this.props.benches);
        // Idle event
        google.maps.event.addListener(this.map, 'idle', ()=>{
            const {north, south, east, west} = this.map.getBounds().toJSON();
            const bounds = {bounds: {northEast: {lat: north, lng: east}, southWest: {lat: south, lng: west}}}
            this.props.updateBounds(bounds);
        });
    }

    render() { 
        return (
            <div id='map-container' 
                // this ref gives us access to the map dom node
                ref={ map => this.mapNode = map }>
            </div>
        )
    }
}

export default BenchMap;