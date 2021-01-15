import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

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
        this.registerListeners();
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = { bounds: { northEast: { lat: north, lng: east }, southWest: { lat: south, lng: west } } }
            this.props.updateFilter('bounds', bounds);
        });

        google.maps.event.addListener(this.map, 'click', (e) => {
            const coords = getCoordsObj(e.latLng);
            this._handleClick(coords);
        });
    }

    _handleClick(coords) {
        this.props.history.push({
            pathname: 'benches/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        })
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

// Exporting a wrapped component, it will have a history router prop
export default withRouter(BenchMap);