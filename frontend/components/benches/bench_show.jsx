import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BenchMap from "./bench_map"

class BenchShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {bench, benchId, fetchBench} = this.props;
        const benches = {
            [benchId]: bench
        }
        return (
            <div>
                <h1>Show</h1>
                <Link to="/">Back to Benches Index</Link>
                <BenchMap 
                    benches={benches}
                    benchId = {benchId}
                    singleBench={true}
                    fetchBench={fetchBench}/>
            </div>
        )
    }
}

export default BenchShow;