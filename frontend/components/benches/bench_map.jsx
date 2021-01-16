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
        let mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        // Manager to maintain references to our markers
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        
        if (this.props.singleBench) { 
            this.props.fetchBench(this.props.benchId)
        } else {
            this.registerListeners();
        }
    }

    componentDidUpdate() {
        if (this.props.singleBench) {
            const targetBenchKey = Object.keys(this.props.benches)[0];
            const targetBench = this.props.benches[targetBenchKey];
            this.MarkerManager.updateMarkers([targetBench]);
            this.map.setCenter({ lat: targetBench.lat, lng: targetBench.lng });
            this.map.setOptions({ draggable: false });
            this.MarkerManager.removeClick();
        } else {
            this.MarkerManager.updateMarkers(this.props.benches);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = { northEast: { lat: north, lng: east }, southWest: { lat: south, lng: west } }
            // Find the bench that was fetched at mount
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

    handleMarkerClick(id) {
        this.props.history.push(`benches/${id}`)
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