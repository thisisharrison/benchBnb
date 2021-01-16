import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import BenchMap from "./bench_map"
import BenchDetail from './bench_detail'

class BenchShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const {bench, benchId, fetchBench, reviews} = this.props;
        const benches = {
            [benchId]: bench
        }
        return (
            <div>
                <Link to="/">Back to Benches Index</Link>
                <BenchMap 
                    benches={benches}
                    benchId = {benchId}
                    singleBench={true}
                    fetchBench={fetchBench}/>
                <BenchDetail 
                    bench={bench}
                    reviews={reviews}
                />
            </div>
        )
    }
}

export default BenchShow;