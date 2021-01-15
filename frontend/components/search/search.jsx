import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';

const Search = ({ benches, updateFilter }) => (
    <div>
        <BenchMap 
            benches={benches}
            updateFilter={updateFilter}
        />
        <BenchIndex 
            benches={benches} 
        />
    </div>
)

export default Search;