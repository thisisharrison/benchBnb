import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';

const Search = ({ benches, fetchBenches }) => (
    <div>
        <BenchMap />
        <BenchIndex 
            benches={benches} 
            fetchBenches={fetchBenches}
        />
    </div>
)

export default Search;