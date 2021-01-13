import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchBenches();
    }

    render() {
        const benches = this.props.benches;
        return (
            <ul>
                {benches.map(bench => (
                    <BenchIndexItem 
                        bench={bench} 
                        key={bench.id} 
                    />
                ))}
            </ul>
        )
    }
}

export default BenchIndex;