import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';
import FilterForm from './filter_form';

const Search = ({ benches, updateFilter, maxSeating, minSeating }) => (
    <div>
        <BenchMap 
            benches={benches}
            updateFilter={updateFilter}
        />
        <BenchIndex 
            benches={benches} 
        />
        <FilterForm 
            updateFilter={updateFilter}
            maxSeating={maxSeating}
            minSeating={minSeating}
        />
    </div>
)

export default Search;